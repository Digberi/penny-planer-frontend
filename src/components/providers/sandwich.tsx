"use client"

import * as React from "react"
import { ThemeProvider } from "./theme-provider"
import { Toaster } from "@UI/sonner"

export interface SandwichProviderProps { }

export function SandwichProvider({ children }: React.PropsWithChildren<SandwichProviderProps>) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      {children}
      <Toaster />
    </ThemeProvider>
  )
}
