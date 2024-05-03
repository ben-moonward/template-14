# Next 14 Web template

Contains generic, unstyled components.

As well as utils and util components for common dev patterns we run into all the time.

Intended as both a starting point for Web projects as well as a reference project for examples on how to use common components.

For use with openapi by default.

## Getting Started

1. Add the relevant `.env` file for this project.
2. Run `npm install`.
3. Run `npm run sync-backend` (if using fetcher).
4. Run `npm run dev`. Once compiled, you can access the local webpage at <http://localhost:3000>.
5. That's all! :)

## Development

| Command                | Description                                                                          |
| ---------------------- | ------------------------------------------------------------------------------------ |
| `npm run dev`          | Start dev server. Reads PORT from `.env`.                                            |
| `npx tsc --noEmit`     | Run a type check over the project                                                    |
| `npm run lint`         | Check for Next errors and warnings (useful to build errors that `tsc` doesn't catch) |
| `npm run sync-backend` | Updates your types to match the latest backend schema (if using fetcher)             |

## Docs

### Project Doc

Link the relevant Moonward Project doc here

### Frontend Dev Docs

Link the general Moonward frontend dev docs here

## File Structure

- `.vscode`
  - `extensions.json` - recommended VSCode extensions for this project.
  - `react.code-snippets` - code snippets for saving time on common workflows.
  - `settings.json` - VSCode settings specific for this project.
- `bin` - executables e.g. prebuild, openapi
- `public`
  - `assets` ? not sure about this as we use .tsx for icons
- `src`

  - `app` - App router folder. Avoid putting non-next files here - use for routing and layouts.
  - `components` - General components used across the apps here
    - …
    - `utilities` ?
  - `constants`
  - `features`
    - `<feature-name>` - each feature uses 1 folder here.
      - Feature folders. Components, utils, hooks, specific to the feature go into their own folders here. Code in here should not be imported in other features.
      - `types.ts` Types specific for this feature. We use 1 type file per feature unless it’s getting bloated.
  - `hooks` - Common utility hooks for the project.
  - `providers` context providers
  - `services`
  - `stores`
  - `styles`
    - Only globals css?
  - `tests` (Should be in root/outside of src)
    - `e2e`
    - `unit`
  - `types` - For globally used types. Feature-specific types go in their respective folders.
  - `utils`
    - `formatters`
      - Utils for formatting data for visual display (frontend only).
    - `transformers`
      - Utils for transforming data to use between services (behind-the-scenes only).

- `.env.example` - .env file with annotations and empty values.
- `.eslintrc.json` - ESLint config file.
- `.gitignore` - files for git to ignore.
- `.prettierrc.json` - Prettier config.
- `cspell-dict.txt` - add words for cspell to ignore here. Be liberal with adding new words.
- `cspell.json` - spellchecker config.
- `jest.config.js` - Jest testing config.
- `next.config.js` - Next JS config.
- `package-lock.json` - do not edit manually. However, please do commit the changes here if you install new packages.
- `package.json` - npm config. Scripts and package dependencies go here.
- `postcss.config.json` - PostCSS config.
- `[README.md](http://README.md)` - project Readme.
- `tailwind.config.js` - Tailwind config. The project’s custom style classes are defined here.
- `tsconfig.json` - TypeScript compilation config.
