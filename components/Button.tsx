import { nr } from "@app/utils"
import React from "react"

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode | null
  variant?: "primary" | "secondary"
}

export const Button = ({ children = null, className, variant = "primary", ...rest }: Props) => {
  switch (variant) {
    case "primary":
      return (
        <button
          className={`
      ${className}
      group
      relative
      flex
      justify-center
      py-2
      px-4
      border
      border-transparent
      text-sm
      font-semibold
      rounded-md
      text-white
      bg-indigo-600
      focus:outline-none
      focus:ring-2
      focus:ring-offset-2
      focus:ring-indigo-500
      `}
          {...rest}
        >
          {children}
        </button>
      )
    case "secondary":
      return (
        <button
          className={`
      ${className}
      group
      relative
      flex
      justify-center
      py-2
      px-4
      border
      border-indigo-600
      text-sm
      font-semibold
      rounded-md
      text-black
      bg-indigo-200
      focus:outline-none
      focus:ring-2
      focus:ring-offset-2
      focus:ring-indigo-500
      `}
          {...rest}
        >
          {children}
        </button>
      )

    default:
      nr(variant)
  }
}
