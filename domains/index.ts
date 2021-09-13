export const ALL_COUNTRIES = ["DE", "PL"] as const
export type CountryTuple = typeof ALL_COUNTRIES
export type Country = CountryTuple[number]

export type Currency = "EUR" | "PLN"

export type Amount = {
  amount: number // 100 === 1$
  currency: Currency
}

export type TaxCategory = {
  name: string
  returnPercent: number // 1 === 100%
}

export type TaxRule = {
  country: Country
  minSum: Amount
  averageReturnPercent: number // 1 === 100%
  minReturnPercent: number // 1 === 100%
  maxReturnPercent: number // 1 === 100%
  taxCategories: TaxCategory[]
}
