'use client';

import { PasswordStrength } from './types';

interface PasswordStrengthIndicatorProps {
  passwordStrength: PasswordStrength;
  password: string;
}

export function PasswordStrengthIndicator({
  passwordStrength,
  password,
}: PasswordStrengthIndicatorProps) {
  if (!password) return null;

  const strengthItems = [
    { key: 'length', label: 'At least 12 characters long', value: passwordStrength.length },
    {
      key: 'uppercase',
      label: 'Contains uppercase letter (A-Z)',
      value: passwordStrength.uppercase,
    },
    {
      key: 'lowercase',
      label: 'Contains lowercase letter (a-z)',
      value: passwordStrength.lowercase,
    },
    { key: 'numbers', label: 'Contains number (0-9)', value: passwordStrength.numbers },
    {
      key: 'symbols',
      label: 'Contains special character (!@#$%^&*)',
      value: passwordStrength.symbols,
    },
    {
      key: 'noCommonPatterns',
      label: 'No common patterns or words',
      value: passwordStrength.noCommonPatterns,
    },
  ];

  return (
    <div className="space-y-2 text-sm">
      <div className="space-y-2">
        {strengthItems.map((item) => (
          <div
            key={item.key}
            className={`flex items-center gap-2 ${item.value ? 'text-green-600' : 'text-gray-500'}`}
          >
            <div
              className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${
                item.value ? 'border-green-500 bg-green-500' : 'border-gray-300'
              }`}
            >
              {item.value && (
                <svg className="w-2.5 h-2.5 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              )}
            </div>
            <span>{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
