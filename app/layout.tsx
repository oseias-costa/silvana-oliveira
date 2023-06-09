import StyledComponentsRegistry from './lib/registry';
import localFont from 'next/font/local'
import { Roboto } from 'next/font/google';
import { GlobalStyle } from './GlobalStyle';

export const metadata = {
  title: 'Curso Silvana Oliveira',
  description: 'Pinte lindas telas impressionistas com o curso on-line Silvana Oliveira',
}

const lemonMilk = localFont({
  display: 'swap',
  src: [
    {
      path: './font/LemonMilkLight.otf',
      weight: '300',
      style: 'light'
    },
    {
      path: './font/LemonMilkRegular.otf',
      weight: '500',
      style: 'normal'
    },
    {
      path: './font/LemonMilkBold.otf',
      weight: '700',
      style: 'bold'
    }
  ],
  variable: '--font-lemon-milk'
});


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <GlobalStyle />
      <body className={lemonMilk.className}>
        <StyledComponentsRegistry>
          {children}
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}
