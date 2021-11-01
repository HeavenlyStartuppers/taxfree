import { Amount } from "./Amount";
import { CountryId } from "./Country/Country";

type Rule = {
  country: CountryId
  minimalSum: Amount
  returnPercent: {
    min: number
    max: number
  }
}