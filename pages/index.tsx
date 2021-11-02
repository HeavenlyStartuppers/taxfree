import Head from "next/head"
import { useState } from "react"

import { Button, Popup, State as PopupState, Msg as PopupMsg, TaxFreeForm } from "@app/components"
import { nr } from "@app/utils"
import { usePanelbear } from "@app/hooks"
import { faqList } from "@app/domains/FAQ/data/faqList"
import { FaqItem } from "@app/domains/FAQ/components/FaqItem"

export default function Home() {
  const [popupState, setPopupState] = useState<PopupState>({ type: "closed" })
  const panelBear = usePanelbear()

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
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>
      <div>
        <h4>TAX FREE</h4>
        <h6>calculator</h6>
      </div>
      <div className="container w-full m-auto h-screen flex justify-center items-center flex-col">
        <TaxFreeForm />
        <div className="mb-6" />
        <Button
          onClick={() => {
            panelBear.track("more-button-clicked")
            setPopupState({ type: "open" })
          }}
        >
          Install
        </Button>
        <div>
          {faqList.map((item) => (
            <FaqItem key={item.question} item={item} />
          ))}
        </div>
      </div>

      <Popup state={popupState} onMsg={popupHandler} />
    </div>
  )
}
