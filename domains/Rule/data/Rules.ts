import { Rule } from "../Rule"

export const rules: Rule[] = [
  {
    country: "DE",
    minimalSum: {
      amount: 2500,
      currency: "EUR",
    },
    returnPercent: {
      min: 0.069,
      max: 0.145,
    },
  },
  {
    country: "PL",
    minimalSum: {
      amount: 20000,
      currency: "PLN",
    },
    returnPercent: {
      min: 0.09,
      max: 0.165,
    },
  },
  {
    country: "GB",
    minimalSum: {
      amount: 3000,
      currency: "GBP",
    },
    returnPercent: {
      min: 0.043,
      max: 0.1666,
    },
  },
]
