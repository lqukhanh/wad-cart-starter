# Project rules

## Stack
- Node.js v22+, ESM modules (`"type": "module"`)
- Plain JavaScript, standard built-ins only, no external dependencies

## Style
- 2-space indent
- Named exports, no default exports
- File extension required in import paths (`../src/cart.js`)

## Commands
- `npm test` — run test suite (`node:test`)


## Tests
- Every function gets a test
- Tests assert the specification, not the implementation
- Each test must fail for exactly one single reason

## Never
- Never add an external dependency without asking
- Never use `toFixed()` — it returns a string; return pure numbers
- Never group multiple unrelated assertions into one test block
- Never commit `node_modules/` or `.env`
- Never swallow errors with empty `catch {}`
