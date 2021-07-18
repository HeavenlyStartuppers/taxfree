import React from "react"

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NEXT_PUBLIC_PANELBEAR_ID: string
      NODE_ENV: "development" | "production"
    }
  }
  namespace JSX {
    interface IntrinsicElements {
      "pwa-install": React.ReactHTMLElement
    }
  }
}
// If this file has no import/export statements (i.e. is a script)
// convert it into a module by adding an empty export statement.
export {}
