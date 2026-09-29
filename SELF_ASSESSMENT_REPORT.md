# Self-Assessment Report

| # | Criterion | Points (max) | My claim | Evidence |
|---|---|---|---|---|
| 1 | cartTotal behaves as specified | 30 | 30 | `src/cart.js` lines 1-38; passes calculation example (467400), free shipping threshold, empty cart, and strict `RangeError`/`TypeError` validations without external dependencies. |
| 2 | Tests | 20 | 20 | `test/cart.test.js` — 14 test cases covering slides example, threshold boundaries, empty cart, negative price/qty, fractional qty, missing options, and options schema validation (`vatRate`, `shipFee`, `freeShipFrom`). |
| 3 | The harness | 20 | 20 | `AGENTS.md` specifying command constraints (`npm test` only, no new dependencies) and `.github/workflows/ci.yml` running Node 22 test suite green on push. |
| 4 | The brief | 15 | 15 | `brief.md` containing strict function signatures, rounding constraints (`Math.round`), error types (`RangeError`), and edge-case contracts. |
| 5 | AI-LOG.md | 15 | 15 | `AI-LOG.md` documenting tool usage (Open Code), rejected AI patterns (unsafe destructuring, naive price check), and hand-written defensive additions with matching git diff. |

**Total: 100 / 100**

## What I did not manage
- None. All requirements, defensive edge cases, test harnesses, and documentation have been fully implemented and verified via local and CI test runs.