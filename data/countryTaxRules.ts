import { Country, TaxRule } from "@app/domains"

export const COUNTRY_TAX_RULES: Record<Country, TaxRule> = {
  DE: {
    country: "DE",
    minSum: {
      amount: 5001,
      currency: "EUR",
    },
    averageReturnPercent: 0.13,
    minReturnPercent: 0.07,
    maxReturnPercent: 0.19,
    taxCategories: [
      {
        name: "general",
        returnPercent: 0.19,
      },
      {
        name: "food",
        returnPercent: 0.07,
      },
      {
        name: "books_and_maps",
        returnPercent: 0.07,
      },
      {
        name: "Food",
        returnPercent: 0.07,
      },
      {
        name: "antiques_and_artifacts",
        returnPercent: 0.07,
      },
      {
        name: "medical_tools",
        returnPercent: 0.07,
      },
    ],
  },
  PL: {
    country: "PL",
    averageReturnPercent: 0.12,
    minSum: {
      amount: 20000,
      currency: "PLN",
    },
    minReturnPercent: 0.05,
    maxReturnPercent: 0.23,
    taxCategories: [
      {
        name: "general",
        returnPercent: 0.23,
      },
      {
        name: "exotic_food",
        returnPercent: 0.08,
      },

      {
        name: "food",
        returnPercent: 0.05,
      },
    ],
  },
}
