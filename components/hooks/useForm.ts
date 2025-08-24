import { useState, useCallback } from 'react';

// TODO: This hook will be used for future form implementations
// Currently unused but planned for upcoming features

interface UseFormOptions<T> {
  initialValues: T;
  onSubmit: (values: T) => void | Promise<void>;
  validate?: (values: T) => Partial<Record<keyof T, string>>;
}

export function useForm<T extends Record<string, unknown>>({
  initialValues,
  onSubmit,
  validate,
}: UseFormOptions<T>) {
  const [values, setValues] = useState<T>(initialValues);
  const [errors, setErrors] = useState<Partial<Record<keyof T, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [touched, setTouched] = useState<Partial<Record<keyof T, boolean>>>({});

  const setValue = useCallback(
    (field: keyof T, value: T[keyof T]) => {
      setValues((prev) => ({ ...prev, [field]: value }));

      // Clear error when user starts typing
      if (errors[field]) {
        setErrors((prev) => ({ ...prev, [field]: undefined }));
      }
    },
    [errors],
  );

  const setFieldTouched = useCallback((field: keyof T) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
  }, []);

  const validateField = useCallback(
    (field: keyof T) => {
      if (!validate) return;

      const fieldErrors = validate(values);
      if (fieldErrors[field]) {
        setErrors((prev) => ({ ...prev, [field]: fieldErrors[field] }));
      }
    },
    [validate, values],
  );

  const validateAll = useCallback(() => {
    if (!validate) return {};

    const newErrors = validate(values);
    setErrors(newErrors);
    return newErrors;
  }, [validate, values]);

  const handleSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();

      const newErrors = validateAll();
      if (Object.keys(newErrors).length > 0) return;

      setIsSubmitting(true);
      try {
        await onSubmit(values);
      } catch (error) {
        console.error('Form submission error:', error);
      } finally {
        setIsSubmitting(false);
      }
    },
    [values, validateAll, onSubmit],
  );

  const reset = useCallback(() => {
    setValues(initialValues);
    setErrors({});
    setTouched({});
    setIsSubmitting(false);
  }, [initialValues]);

  const resetField = useCallback(
    (field: keyof T) => {
      setValues((prev) => ({ ...prev, [field]: initialValues[field] }));
      setErrors((prev) => ({ ...prev, [field]: undefined }));
      setTouched((prev) => ({ ...prev, [field]: false }));
    },
    [initialValues],
  );

  return {
    // State
    values,
    errors,
    isSubmitting,
    touched,

    // Actions
    setValue,
    setFieldTouched,
    validateField,
    validateAll,
    handleSubmit,
    reset,
    resetField,

    // Helpers
    hasErrors: Object.keys(errors).length > 0,
    isFieldTouched: (field: keyof T) => touched[field] || false,
    getFieldError: (field: keyof T) => errors[field] || '',
  };
}
