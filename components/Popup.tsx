import React from "react"
import { Dialog } from "@headlessui/react"

export type State = { type: "closed" } | { type: "open" }
export type Msg = { type: "close_clicked" } | { type: "ok_clicked" }

type Props = {
  state: State
  onMsg: (msg: Msg) => void
}

export const Popup = ({ state, onMsg }: Props) => {
  return (
    <Dialog open={state.type === "open"} onClose={() => onMsg({ type: "close_clicked" })}>
      <Dialog.Overlay />

      <Dialog.Title>Хочешь 🍟?</Dialog.Title>
      <Dialog.Description>Скоро все будет</Dialog.Description>

      <button onClick={() => onMsg({ type: "ok_clicked" })}>Ок</button>
      <button onClick={() => onMsg({ type: "close_clicked" })}>Отмена</button>
    </Dialog>
  )
}
