import React from "react"

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode | null
}

export const Button = ({ children = null, ...rest }: Props) => {
  return (
    <button
      className="group relative  flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      {...rest}
    >
      {children}
    </button>
  )
}
