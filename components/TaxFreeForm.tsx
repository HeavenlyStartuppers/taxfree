import React, { useState } from "react"
import { CountryId } from "@app/domains/Country"
import { CountrySelector } from "@app/domains/Country/components/CountrySelector"
import { usePanelbear } from "@app/hooks"
import { RuleInfo } from "@app/domains/Rule/components/RuleInfo"
import { rules } from "@app/domains/Rule/data/Rules"

type State = { type: "country_selected"; countryId: CountryId }

export const TaxFreeForm = () => {
  const panelbear = usePanelbear()
  const [state, setState] = useState<State>({ type: "country_selected", countryId: "DE" })
  const rule = rules.find((rule) => rule.country === state.countryId)

  return (
    <div>
      <form onSubmit={(e) => e.preventDefault()}>
        <CountrySelector
          onSelect={(countryId) => {
            setState({ type: "country_selected", countryId })
            panelbear.track(`Country Selected: ${countryId}`)
          }}
        />
        <br />
        {rule && <RuleInfo rule={rule} />}
      </form>
    </div>
  )
}
