'use client';
import Header from "@/components/ui/header";
import Footer from "@/components/ui/footer";
import TitleSection from "@/components/ui/title-section";
import ButtonPrimary from "@/components/ui/button-primary";
import './index.css'

export default function NotFound() {
  return (
    <main>
      <Header/>
      <div className="error">
        <TitleSection title="ERRO 404" subtitle='' />
        <div className="title-error">
          <h1>A página que você procura não existe.</h1>
        </div>
        <p>Verifique a URL ou volte para o início</p>
        <ButtonPrimary text="VOLTAR" onClick={() => alert("click")} classStyle="#5C635E" />
      </div>
      <Footer/>
    </main>
  );
}
