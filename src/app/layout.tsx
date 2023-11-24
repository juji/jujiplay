import type { Metadata } from 'next'
import { Open_Sans } from 'next/font/google'
import 'sanitize.css'
import './globals.css'

const opensans = Open_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Juji Play',
  description: 'Sometimes all we need is a little time for ourselfs.. Play Play Play!!!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <head>
        <script dangerouslySetInnerHTML={{__html:`
        (function(){
          // i enjoy some js freedom
          const bg = [
            '#1ABC9C',
            '#2ECC71',
            '#3498DB',
            '#39930d',
            '#9B59B6',
            '#16A085',
            '#E67E22',
            '#E74C3C'
          ];
          let current = '';
          function getBg(){
            const now = bg[Math.round(Math.random()*(bg.length-1))]
            return now === current ? getBg() : now
          }
          const html = document.querySelector('html');
          html && html.style.setProperty('--sign-bg', current = getBg());
          document.addEventListener('click',() => {
            html && html.style.setProperty('--sign-bg', current = getBg());
          })
        })()
        `}}></script>
      </head>
      <body className={opensans.className}>{children}</body>
    </html>
  )
}
