# Upskwela

A modern community-based learning platform built with Next.js 15, React 19, and TypeScript.

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd upskwela

# Install dependencies
npm install

# Set up Husky hooks
npm run prepare

# Start development server
npm run dev
```

## Development Scripts

### Quality Assurance

```bash
# Run all quality checks
npm run quality-check

# Fix auto-fixable issues
npm run quality-fix

# Type checking only
npm run type-check

# Linting only
npm run lint

# Linting with auto-fix
npm run lint:fix

# Strict linting (no warnings allowed)
npm run lint:strict

# Format code
npm run format

# Check formatting
npm run format:check
```

### Build & Deploy

```bash
# Development
npm run dev

# Build for production
npm run build

# Start production server
npm run start
```

## Code Quality & Git Hooks

This project uses **Husky** to enforce code quality standards before commits and pushes.

### Pre-commit Checks

Every commit automatically runs:

1. **TypeScript Type Checking** - Ensures type safety
2. **ESLint** - Code quality and style enforcement
3. **Prettier** - Code formatting validation
4. **Lint-staged** - Run checks only on staged files

### Pre-push Checks

Before pushing to remote, the system verifies:

1. **TypeScript Types** - Type safety validation
2. **ESLint** - Code quality checks
3. **Prettier** - Formatting validation
4. **Build Process** - Ensures the project compiles successfully

### Commit Message Standards

All commits must follow **Conventional Commits** format:

```
type(scope): description
```

#### Valid Examples:

- `feat(auth): add login functionality`
- `fix(ui): resolve button alignment issue`
- `docs(readme): update installation instructions`
- `style: format code with prettier`
- `refactor(components): simplify button logic`
- `perf: optimize image loading`
- `test: add unit tests for auth module`
- `chore: update dependencies`
- `ci: add GitHub Actions workflow`
- `build: configure webpack optimization`
- `revert: revert previous commit`

#### Commit Types:

- **feat**: New features
- **fix**: Bug fixes
- **docs**: Documentation changes
- **style**: Code style changes (formatting, etc.)
- **refactor**: Code refactoring
- **perf**: Performance improvements
- **test**: Adding or updating tests
- **chore**: Maintenance tasks
- **ci**: CI/CD changes
- **build**: Build system changes
- **revert**: Revert previous commits

### Quality Check Commands

```bash
# Run all quality checks manually
npm run quality-check

# Fix auto-fixable issues
npm run quality-fix

# Check specific aspects
npm run type-check    # TypeScript types
npm run lint:strict   # ESLint with no warnings
npm run format:check  # Prettier formatting
```

## Project Structure

```
upskwela/
├── app/                    # Next.js App Router
├── components/             # React components
│   ├── ui/                # shadcn/ui components
│   ├── layout/            # Layout components
│   ├── sections/          # Page sections
│   ├── animations/        # Animated components
│   └── providers/         # Context providers
├── lib/                   # Utilities and types
├── public/                # Static assets
├── .husky/                # Git hooks
└── Configuration files    # TypeScript, ESLint, Prettier
```

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript 5+
- **Styling**: Tailwind CSS 4
- **UI Library**: shadcn/ui components
- **State Management**: React 19 with Context API
- **Animations**: Framer Motion
- **Code Quality**: ESLint 9, Prettier, Husky, lint-staged

## Contributing

1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/amazing-feature`)
3. **Make** your changes following the coding standards
4. **Run** quality checks: `npm run quality-check`
5. **Commit** with conventional commit format
6. **Push** to your branch
7. **Create** a Pull Request

### Before Submitting

Ensure your code passes all quality checks:

```bash
npm run quality-check
```

If issues are found, fix them:

```bash
npm run quality-fix
```

## Troubleshooting

### Git Hooks Not Working

```bash
# Reinstall Husky
npm run prepare

# Make hooks executable (Linux/Mac)
chmod +x .husky/*
```

### Quality Check Failures

```bash
# Fix auto-fixable issues
npm run quality-fix

# Check specific issues
npm run type-check    # TypeScript errors
npm run lint          # ESLint issues
npm run format:check  # Formatting issues
```

### Commit Message Rejected

Follow the conventional commit format:

```
type(scope): description
```

Example: `feat(auth): add user authentication`

## License

This project is licensed under the MIT License.
