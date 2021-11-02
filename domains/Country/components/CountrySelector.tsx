import React, { useEffect, useState } from "react"
import { allCountryIds, CountryId } from "../Country"
import { getCountryNameFromId } from "../utils/getCountryNameFromId"

type Props = {
  initialValue?: CountryId
  onSelect: (countryId: CountryId) => void
}

export const CountrySelector = ({ initialValue = "DE", onSelect }: Props) => {
  const [state, setState] = useState<CountryId>(initialValue)
  useEffect(() => {
    onSelect(state)
  }, [state])
  return (
    <>
      <label htmlFor="country-select">Страна</label>
      <br />
      <select
        id="country-select"
        value={state}
        onChange={(event: React.ChangeEvent<HTMLSelectElement>) => setState(event.target.value as CountryId)}
      >
        {allCountryIds.map((id) => (
          <option key={id} value={id}>
            {getCountryNameFromId(id)}
          </option>
        ))}
      </select>
    </>
  )
}
