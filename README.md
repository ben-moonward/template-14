
# Next 14 Web template

Contains generic, unstyled components.

As well as utils and util components for common dev patterns we run into all the time.
 
Intended as both a starting point for Web projects as well as a reference project for examples on how to use common components.

For use with openapi by default.

# Getting Started
1. Add the relevant `.env` file for this project.
2. Run `npm install`.
3. Run `npm run sync-backend` (if using fetcher).
4. Run `npm run dev`. Once compiled, you can access the local webpage at http://localhost:3000.
5. That's all! :)


# Development
Command | Description
--- | ---
`npm run dev` | Start dev server. Reads PORT from `.env`.
`npx tsc --noEmit` | Run a type check over the project
`npm run lint` | Check for Next errors and warnings (useful to build errors that `tsc` doesn't catch) 
`npm run sync-backend` | Updates your types to match the latest backend schema (if using fetcher) 


# Docs
### Project Doc: 
Link the relevant Moonward Project doc here
### Frontend Dev Docs: 
Link the general Moonward frontend dev docs here

<!-- # Advanced 
## Reproducing Production-only errors
Compile server as if it's for prod:
`npm run build && npm run start`
This will help with 
## Working on multiple projects
### Specifying a port to run dev server
e.g. `PORT=3007 npm run dev`


- structure
- file naming
    - folders: kebab case
    - files: same name as the default export


todo:
- Go back to older projects and find components to convert
- Make a dev project wiki
    - What docs?



goals:
- reduce dev inefficiencies
- improve inter-team clarity







src: Application Source Code.
lib: our "Project Library". 
bin: executables for tooling. -->