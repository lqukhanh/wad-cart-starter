export function cartTotal(items, options = {}) {
  if (!Array.isArray(items)){
    throw new TypeError('items must be an array')
  }

  if (items.length === 0) {
    return 0
  }

  const { vatRate = 0, freeShipFrom = 0, shipFee = 0 } = options || {}

  if (typeof vatRate !== 'number' || vatRate < 0) {
    throw new RangeError(`vatRate must be a non-negative number, got: ${vatRate}`);
  }
  if (typeof shipFee !== 'number' || shipFee < 0) {
    throw new RangeError(`shipFee must be a non-negative number, got: ${shipFee}`);
  }
  if (typeof freeShipFrom !== 'number' || freeShipFrom < 0) {
    throw new RangeError(`freeShipFrom must be a non-negative number, got: ${freeShipFrom}`);
  }

  let subtotal = 0
  for (const item of items) {
    if (typeof item.price !== 'number' || Number.isNaN(item.price) ||item.price < 0) {
      throw new RangeError(`price must not be negative, got: ${item.price}`)
    }
    if (typeof item.qty !== 'number' || !Number.isInteger(item.qty) || item.qty <= 0) {
      throw new RangeError(`qty must be a positive integer, got: ${item.qty}`)
    }
    subtotal += item.price * item.qty
  }

  const shipping = subtotal >= freeShipFrom ? 0 : shipFee
  const vat = Math.round(subtotal * vatRate)

  return Math.round(subtotal + vat + shipping)
}
