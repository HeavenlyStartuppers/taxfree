import React from "react"
import { FAQ } from "../FAQ"

interface Props {
  item: FAQ
}

export const FaqItem = ({ item }: Props) => {
  return (
    <details>
      <summary>{item.question}</summary>
      {item.answer}
    </details>
  )
}
