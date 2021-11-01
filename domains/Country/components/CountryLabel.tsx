import React from "react"
import { nr } from "@app/utils"
import { CountryId } from "../Country"

interface Props {
  id: CountryId
}

export const CountryLabel = ({ id }: Props) => {
  switch (id) {
    case "DE":
      return <>Germany</>
    case "PL":
      return <>Poland</>
    case "GB":
      return <>United Kingdom</>
    default:
      nr(id)
  }
}
