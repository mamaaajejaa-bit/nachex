import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Growth | +50 Pacientes Nuevos al Mes para tu Consultorio",
  description:
    "Te llenamos el consultorio con +50 pacientes nuevos al mes, sin que tú respondas un solo mensaje. Sistema probado por +200 dentistas.",
  keywords: "marketing dental, pacientes nuevos dentista, publicidad odontologos, growth",
  generator: "v0.app",
}

export const viewport = {
  themeColor: "#059669",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
