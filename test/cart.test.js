import { test } from 'node:test'
import assert from 'node:assert/strict'
import { cartTotal } from '../src/cart.js'

// This test fails until you implement cartTotal. That is the point:
// run `npm test` first and see it red.
test('the example from the slides', () => {
  const items = [
    { name: 'Áo thun', price: 180000, qty: 2 },
    { name: 'Sổ tay', price: 45000, qty: 1 },
  ]
  const options = { vatRate: 0.08, freeShipFrom: 500000, shipFee: 30000 }
  assert.equal(cartTotal(items, options), 467400)
})

test('an empty cart returns 0', () => {
  const options = { vatRate: 0.08, freeShipFrom: 500000, shipFee: 30000 }
  assert.equal(cartTotal([], options), 0)
})

// vatRate is 0 in the next two tests so that a wrong shipping amount
// is the only thing the total could get wrong.
test('shipping is 0 when the subtotal reaches the free shipping threshold', () => {
  const items = [
    { name: 'Bàn phím', price: 250000, qty: 2 },
  ]
  const options = { vatRate: 0, freeShipFrom: 500000, shipFee: 30000 }
  assert.equal(cartTotal(items, options), 500000)
})

test('the shipping fee is added when the subtotal is below the threshold', () => {
  const items = [
    { name: 'Chuột không dây', price: 120000, qty: 2 },
  ]
  const options = { vatRate: 0, freeShipFrom: 500000, shipFee: 30000 }
  assert.equal(cartTotal(items, options), 270000)
})

test('a negative price throws RangeError', () => {
  const items = [
    { name: 'Áo thun', price: -1, qty: 1 },
  ]
  const options = { vatRate: 0.08, freeShipFrom: 500000, shipFee: 30000 }
  assert.throws(() => cartTotal(items, options), RangeError)
})

test('a qty of 0 throws RangeError', () => {
  const items = [
    { name: 'Áo thun', price: 180000, qty: 0 },
  ]
  const options = { vatRate: 0.08, freeShipFrom: 500000, shipFee: 30000 }
  assert.throws(() => cartTotal(items, options), RangeError)
})

test('a negative qty throws RangeError', () => {
  const items = [
    { name: 'Áo thun', price: 180000, qty: -1 },
  ]
  const options = { vatRate: 0.08, freeShipFrom: 500000, shipFee: 30000 }
  assert.throws(() => cartTotal(items, options), RangeError)
})

test('a fractional qty throws RangeError', () => {
  const items = [
    { name: 'Áo thun', price: 180000, qty: 1.5 },
  ]
  const options = { vatRate: 0.08, freeShipFrom: 500000, shipFee: 30000 }
  assert.throws(() => cartTotal(items, options), RangeError)
})
