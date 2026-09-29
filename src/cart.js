export function cartTotal(items, options) {
  if (items.length === 0) {
    return 0
  }

  const { vatRate, freeShipFrom, shipFee } = options

  let subtotal = 0
  for (const item of items) {
    if (item.price < 0) {
      throw new RangeError(`price must not be negative, got: ${item.price}`)
    }
    if (!Number.isInteger(item.qty) || item.qty <= 0) {
      throw new RangeError(`qty must be a positive integer, got: ${item.qty}`)
    }
    subtotal += item.price * item.qty
  }

  const shipping = subtotal >= freeShipFrom ? 0 : shipFee
  const vat = Math.round(subtotal * vatRate)

  return Math.round(subtotal + vat + shipping)
}
