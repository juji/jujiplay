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
            '#1b1b1b',
            '#000000',
            '#0e0e0e',
            '#cc3535',
            '#de5725',
            '#71a717',
            '#39930d',
            '#009286',
            '#0048c4',
            '#6e00aa',
            '#aa0067'
          ];
          let current = '';
          function getBg(){
            const now = bg[Math.round(Math.random()*(bg.length-1))]
            return now === current ? getBg() : now
          }
          const html = document.querySelector('html');
          html && html.style.setProperty('--background-color', current = getBg());
          document.addEventListener('click',() => {
            html && html.style.setProperty('--background-color', current = getBg());
          })
        })()
        `}}></script>
      </head>
      <body className={opensans.className}>{children}</body>
    </html>
  )
}
