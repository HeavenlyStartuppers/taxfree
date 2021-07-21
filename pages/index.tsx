import { useState } from "react"
import Head from "next/head"
import { ThemeProvider, UnifiedTheme, Layout, Select, Item, Popup as UIPopup, Input } from "@revolut/ui-kit"
import * as Icons from "@revolut/icons"

import { Button, Popup, State as PopupState, Msg as PopupMsg, TaxFreeForm } from "@app/components"
import { nr } from "@app/utils"
import { usePanelbear } from "@app/hooks"

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
  const [price, setPrice] = useState<number>(0)
  const discountPercent = 0.23

  const priceWithDiscount = price - price * discountPercent
  return (
    <div>
      <Head>
        <title>Tax 🍟</title>
        <meta name="description" content="Tax-free calculator" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={UnifiedTheme}>
        <Layout>
          <Layout.Main>
            <Select
              options={[
                { label: "Poland", value: "poland" },
                { label: "Greece", value: "greece" },
              ]}
            />
            <Select
              options={[
                { label: "Default", value: "default" },
                { label: "Food", value: "food" },
                { label: "Other", value: "other" },
              ]}
            />
            <Input placeholder="Сумма покупки" onChange={(e) => console.log(e)} />
            <Item>
              <Item.Content>
                <Item.Title>Вы получите</Item.Title>
              </Item.Content>
              <Item.Side>{priceWithDiscount}</Item.Side>
            </Item>
          </Layout.Main>
        </Layout>
      </ThemeProvider>

      {/* <div className="container w-full m-auto h-screen flex justify-center items-center flex-col">
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
      </div>
      <Popup state={popupState} onMsg={popupHandler} /> */}
    </div>
  )
}
