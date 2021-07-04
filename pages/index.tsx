import Head from "next/head"
import { useState } from "react"

import { Popup, State as PopupState, Msg as PopupMsg } from "@app/components/Popup"
import { nr } from "@app/utils"

export default function Home() {
  const [popupState, setPopupState] = useState<PopupState>({ type: "closed" })

  const popupHandler = (msg: PopupMsg) => {
    switch (msg.type) {
      case "close_clicked":
        setPopupState({ type: "closed" })
        break
      case "ok_clicked":
        setPopupState({ type: "closed" })
        break
      default:
        nr(msg)
    }
  }
  return (
    <div>
      <Head>
        <title>Tax 🍟</title>
        <meta name="description" content="Tax-free calculator" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Case study</div>
      <Popup state={popupState} onMsg={popupHandler} />
    </div>
  )
}
