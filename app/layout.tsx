import "./globals.css";
import {ReactNode} from "react";
import localFont from 'next/font/local'

const quinn = localFont({
  src: [
    {
      path: '../components/fonts/Quinn-Light.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../components/fonts/Quinn-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../components/fonts/Quinn-Semi-Bold.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../components/fonts/Quinn-Bold.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../components/fonts/Quinn-Extra-Bold.woff2',
      weight: '700',
      style: 'normal',
    }
  ],
})

export default function RootLayout({children}: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="pt-BR">
    <body className={quinn.className}>
    <header></header>

    {children}

    <footer>

    </footer>
    </body>
    </html>
  );
}
