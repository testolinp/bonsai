import { open_sans } from './ui/fonts'
import './ui/global.css'

import Header from './ui/header/header'

export default function RootLayout(
    { children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <title>Squared Agency | We elevate brands.</title>
        <link rel="icon" type="image/x-icon" href="/images/favicon.ico"></link>
      </head>
      <body className={`${open_sans.className} antialiased`}>
        <Header></Header>
        <main>
          {children}
        </main>
      </body>
    </html>
  )
}
