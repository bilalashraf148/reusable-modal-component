# Reusable Modal Components

A React and Material UI modal component set with a small interactive playground.

## Getting Started

Requires Node.js 18 or newer. From the repository root, install dependencies and start the development server:

```sh
npm install
npm run dev
```

Vite prints the local URL when the server starts. Use `npm run build` to create a production build, or `npm run preview` to serve it locally.

## Components

Import modal components from `src/common/components/modals`:

- `BaseModal` provides the shared MUI dialog shell.
- `HeaderSection`, `ModalContent`, and `ActionSection` are reusable dialog sections.
- `TransactionalModal`, `FormModal`, and `ErrorModal` are complete modal patterns.

The demo theme in `src/theme.ts` includes the `duro.dialogModal` colors used by `BaseModal`.