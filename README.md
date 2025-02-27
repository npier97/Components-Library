# Component Library

Welcome to the Component Library, a collection of reusable UI components built with React, TypeScript, and TailwindCSS. This library is designed to enhance development efficiency, maintain design consistency, and improve the overall user experience.

# Versioning (TBD)

Major (1.0.0 → 2.0.0): Breaking changes.
Minor (1.0.0 → 1.1.0): New features, but backward compatible.
Patch (1.0.0 → 1.0.1): Bug fixes.

## Commands:

- `pnpm version patch` _# Increments 1.0.0 → 1.0.1_
- `pnpm version minor` _# Increments 1.0.0 → 1.1.0_
- `pnpm version major` _# Increments 1.0.0 → 2.0.0_

## Steps to push changes:

- `pnpm build`
- `git add .`
- `git commit -m "Your commit message"`
- `pnpm version patch / minor / major` _(depending on your changes, see **Commands** above)_
- `git push --follow-tags`
