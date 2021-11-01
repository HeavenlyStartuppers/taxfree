import { Amount } from "../Amount"

export const useFormattedAmount = (amount: Amount) => {
  var formatter = new Intl.NumberFormat("ru", {
    style: "currency",
    currency: amount.currency,
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  })
  return formatter.format(amount.amount / 100)
}
