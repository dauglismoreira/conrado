import "./globals.css";
import {ReactNode} from "react";
import {quinn} from "@/components/fonts/quinn";

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
