import { open_sans } from './ui/fonts'
import './ui/global.css'

import Header from './ui/header/header'

export default function RootLayout(
    { children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${open_sans.className} antialiased`}>
        <Header></Header>
        <main>
          {children}
        </main>
      </body>
    </html>
  )
}
