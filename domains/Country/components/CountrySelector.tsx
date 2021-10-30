import React, { useState } from "react"
import { allCountryIds, CountryId } from "../Country"
import { getCountryNameFromId } from "../utils/getCountryNameFromId"

export const CountrySelector = () => {
  const [state, setState] = useState<CountryId>("DE")
  return (
    <select
      value={state}
      onChange={(event: React.ChangeEvent<HTMLSelectElement>) => setState(event.target.value as CountryId)}
    >
      {allCountryIds.map((id) => (
        <option value={id}>{getCountryNameFromId(id)}</option>
      ))}
    </select>
  )
}
