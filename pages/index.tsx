import { useEffect, useState } from "react"
import Head from "next/head"
import {
  ThemeProvider,
  UnifiedTheme,
  Layout,
  Select,
  Item,
  Popup as UIPopup,
  Input,
  Header,
  Box,
  Group,
  Widget,
} from "@revolut/ui-kit"
import * as Icons from "@revolut/icons"

import { Button, Popup, State as PopupState, Msg as PopupMsg, TaxFreeForm } from "@app/components"
import { nr } from "@app/utils"
import { usePanelbear } from "@app/hooks"

const COUNTRY_DATA = {
  poland: {
    currency: "PLN",
    taxRate: "0.23",
  },
  greece: {
    currency: "EUR",
    taxRate: "0.24",
  },
}

export default function Home() {
  const [popupState, setPopupState] = useState<PopupState>({ type: "closed" })
  const [countrySelect, setCountrySelect] = useState<boolean>(false)
  const [selectedCountry, setSelectedCountry] = useState<{ label: string; value: string }>({
    label: "Poland",
    value: "poland",
  })
  // @ts-ignore
  const [discount, setDiscount] = useState<number>(Number(COUNTRY_DATA[selectedCountry.value].taxRate))
  useEffect(() => {
    // @ts-ignore
    setDiscount(Number(COUNTRY_DATA[selectedCountry.value].taxRate))
  }, [selectedCountry])

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

  const priceWithDiscount = price - price * discount
  var formatter = new Intl.NumberFormat("ru-RU", {
    style: "currency",
    // @ts-ignore
    currency: COUNTRY_DATA[selectedCountry.value].currency,
  })
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
            <Header variant="main">
              <Header.Title>Tax 🍟</Header.Title>
              <Header.Subtitle>Верни свои деньги</Header.Subtitle>
            </Header>
            <Box mb="s-32" />

            {/* Country select */}
            <Item use="button" onClick={() => setCountrySelect(true)}>
              <Item.Content>
                <Item.Title>Страна</Item.Title>
              </Item.Content>
              <Item.Side>{selectedCountry.label}</Item.Side>
            </Item>
            <Box mb="s-8" />

            <Input
              placeholder="Сумма покупки"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPrice(+e.target.value)}
            />
            <Box mb="s-8" />

            <Item>
              <Item.Content>
                <Item.Title>Скидка</Item.Title>
              </Item.Content>
              <Item.Side>{discount * 100}%</Item.Side>
            </Item>
            <Box mb="s-8" />

            <Item>
              <Item.Content>
                <Item.Title>Вы получите</Item.Title>
              </Item.Content>
              <Item.Side>
                <Item.Value>{formatter.format(priceWithDiscount)}</Item.Value>
              </Item.Side>
            </Item>
          </Layout.Main>
        </Layout>
        {/* Country select */}
        <UIPopup isOpen={countrySelect} variant="bottom-sheet" onExit={() => setCountrySelect(false)}>
          <Header variant="bottom-sheet">
            <Header.Title>Select country</Header.Title>
          </Header>
          <Group>
            {[
              { label: "Poland", value: "poland" },
              { label: "Greece", value: "greece" },
            ].map((countryData) => (
              <Item
                key={countryData.value}
                use="button"
                onClick={() => {
                  setCountrySelect(false)
                  setSelectedCountry(countryData)
                }}
              >
                <Item.Content>
                  <Item.Title>{countryData.label}</Item.Title>
                </Item.Content>
              </Item>
            ))}
          </Group>
        </UIPopup>
      </ThemeProvider>
    </div>
  )
}
