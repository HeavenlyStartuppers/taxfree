import { Currency } from "../Currency"

export type CountryId = typeof allCountryIds[number]
export type CountryInfo = {
  id: CountryId
  name: string
  currency: Currency
}

export const allCountryIds = ["DE", "PL", 'GB'] as const
