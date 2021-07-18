import "tailwindcss/tailwind.css"
import type { AppProps } from "next/app"
import { usePanelbear } from "@app/hooks"

function MyApp({ Component, pageProps }: AppProps) {
  usePanelbear()
  return <Component {...pageProps} />
}
export default MyApp
