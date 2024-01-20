


import './globals.css'
import SmoothScroll from '@/components/SmoothScroll'



export const metadata = {
  title: 'Portfolio',
  description: "Wellcome to my portfolio",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
      <SmoothScroll/>
      {children}</body>
    </html>
  )
}


