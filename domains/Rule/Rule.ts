import { Amount } from "../Amount/Amount"
import { CountryId } from "../Country/Country"

export type Rule = {
  country: CountryId
  minimalSum: Amount
  returnPercent: {
    min: number
    max: number
  }
}
