import {Inter} from "next/font/google";
import "./globals.css";
import {ReactNode} from "react";

const inter = Inter({subsets: ["latin"]});

export default function RootLayout({children}: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="pt-BR">
    <body className={inter.className}>
    <header></header>

    {children}

    <footer>

    </footer>
    </body>
    </html>
  );
}
