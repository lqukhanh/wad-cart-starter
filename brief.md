# Brief: cartTotal function

## What to build
Write a function `cartTotal(items, options)` in `src/cart.js`.

## Files it may touch
- `src/cart.js` (modify)
- `test/cart.test.js` (modify)

## Files it must NOT touch
- `package.json` (no new dependencies)
- Any other configuration or workflow files

## Contract

### Input
- `items`: array of `{ name: string, price: number, qty: number }`
- `options`: `{ vatRate: number, freeShipFrom: number, shipFee: number }`

### Output
- A number (not a string), rounded to whole đồng

### Calculation
1. subtotal = sum of (price * qty) for all items
2. If subtotal >= freeShipFrom: shipping = 0, else shipping = shipFee
3. VAT = Math.round(subtotal * vatRate)
4. total = subtotal + VAT + shipping
5. Return total as a number

### Error cases
- If `price < 0`: throw `RangeError`
- If `qty` is not a positive integer (`!Number.isInteger(qty) || qty <= 0`): throw `RangeError`
- Empty cart (`items.length === 0`): return `0` (no VAT, no shipping)

### Constraints
- NO dependencies — standard plain JavaScript and Node.js built-ins (`node:test`, `node:assert/strict`) only
- NO `toFixed()` — it returns a string
- Use `Math.round()` for rounding

## Test Requirements & Acceptance Criteria
- `npm test` passes completely
- Each test must fail for exactly one reason: 
  1. Worked example returns 467400 as a number with items: `[{ name: 'Áo thun', price: 180000, qty: 2 }, { name: 'Sổ tay', price: 45000, qty: 1 }]` and options: `{ vatRate: 0.08, freeShipFrom: 500000, shipFee: 30000 }`.
  2. Empty cart returns 0.
  3. Free shipping threshold: shipping is 0 when subtotal >= freeShipFrom.
  4. Standard shipping applied when subtotal < freeShipFrom.
  5. Negative price throws RangeError.
  6. Non-positive or non-integer quantity throws RangeError (e.g., 0, -1, 1.5).
