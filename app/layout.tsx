import "./globals.css";
import {ReactNode} from "react";
import {quinn} from "@/components/fonts/quinn";
import Header from "@/components/ui/header";
import Footer from "@/components/ui/footer";

export default function RootLayout({children}: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="pt-BR">
    <body className={quinn.className}>
      <Header/>

      {children}

      <Footer/>
    </body>
    </html>
  );
}
