import type React from "react"
import type { Metadata } from "next"
import { Sora } from "next/font/google"
import "./globals.css"
import { Toaster } from "@/components/ui/toaster"
import { ThemeProvider } from "@/components/theme-provider"
import Header from "@/components/Header"

const sora = Sora({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700"], variable: "--font-sans" })

export const metadata: Metadata = {
  title: "Ansh Pratap Chand - Full Stack Developer & ML Enthusiast",
  description:
    "Personal portfolio of Ansh Pratap Chand, a passionate full-stack developer and machine learning enthusiast from IIITM Gwalior.",
  keywords: "Ansh Pratap Chand, Full Stack Developer, Machine Learning, IIITM Gwalior, Web Development, Portfolio",
  authors: [{ name: "Ansh Pratap Chand" }],
  openGraph: {
    title: "Ansh Pratap Chand - Full Stack Developer & ML Enthusiast",
    description:
      "Personal portfolio showcasing projects, skills, and achievements in web development and machine learning.",
    type: "website",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`scroll-smooth ${sora.variable}`} suppressHydrationWarning>
      <body className={`font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <Header />
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
