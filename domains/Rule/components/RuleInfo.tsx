import { useFormattedAmount } from "@app/domains/Amount/utils/useFormattedAmount"
import { CountryLabel } from "@app/domains/Country/components/CountryLabel"
import { useFormattedPercentage } from "@app/utils/useFormattedPercentage"
import React from "react"
import { Rule } from "../Rule"

interface Props {
  rule: Rule
}

export const RuleInfo = ({ rule }: Props) => {
  const formattedMinimalSum = useFormattedAmount(rule.minimalSum)
  const formattedMinPercent = useFormattedPercentage(rule.returnPercent.min)
  const formattedMaxPercent = useFormattedPercentage(rule.returnPercent.max)
  return (
    <div>
      <p>
        Tax free in <CountryLabel id={rule.country} />
      </p>
      Minimal amount: {formattedMinimalSum}
      <br />
      Return amount between {formattedMinPercent} and {formattedMaxPercent}
    </div>
  )
}
