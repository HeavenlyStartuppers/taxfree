import Head from "next/head"

import { TaxFreeForm } from "@app/components"
import { faqList } from "@app/domains/FAQ/data/faqList"
import { FaqItem } from "@app/domains/FAQ/components/FaqItem"

export default function Home() {
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
        <div>
          {faqList.map((item) => (
            <FaqItem key={item.question} item={item} />
          ))}
        </div>
      </div>
    </div>
  )
}
