import * as Panelbear from "@panelbear/panelbear-js"
import { useRouter } from "next/router"
import { useEffect } from "react"

let isAnalyticsOn = false

export const usePanelbear = (
  site: string = process.env.NEXT_PUBLIC_PANELBEAR_ID,
  config: Panelbear.PanelbearConfig = {}
) => {
  const router = useRouter()

  useEffect(() => {
    if (isAnalyticsOn) return
    Panelbear.load(site, config)

    // Trigger initial page view
    Panelbear.trackPageview()

    // Add on route change handler for client-side navigation
    const handleRouteChange = () => Panelbear.trackPageview()
    router.events.on("routeChangeComplete", handleRouteChange)
    isAnalyticsOn = true
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange)
    }
  })

  return Panelbear
}
