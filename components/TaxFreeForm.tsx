import { usePanelbear } from "@app/hooks"
import React, { useState } from "react"

export const TaxFreeForm = () => {
  const panelbear = usePanelbear()
  const [price, setPrice] = useState<number>(0)
  const discountPercent = 0.23

  const priceWithDiscount = price - price * discountPercent

  return (
    <div>
      <form onSubmit={(e) => e.preventDefault()}>
        <label>Страна: 🇵🇱</label>
        <br />
        <label>
          Цена товара в PLN
          <br />
          <input
            className="appearance-none"
            type="number"
            id="price"
            name="price"
            min={0}
            value={price.toString()}
            onChange={(e) => {
              panelbear.track("price-changed")

              setPrice(+e.target.value)
            }}
          />
        </label>
      </form>
      <p>Максимальная возможная скидка: 23%</p>
      <p>Цена товара со скидкой: {priceWithDiscount.toFixed(2)} PLN</p>
    </div>
  )
}
