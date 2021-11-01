import { nr } from "@app/utils"
import { CountryId } from "../Country"

export const getCountryNameFromId = (id: CountryId): string => {
  switch (id) {
    case "DE":
      return "Germany"
    case "PL":
      return "Poland"
    case "GB":
      return "United Kingdom"
    default:
      nr(id)
  }
}
