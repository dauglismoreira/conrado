'use client';
import './index.css'
import Container from "@/components/ui/container";
import TitleSection from "@/components/ui/title-section";
import ButtonPrimary from "@/components/ui/button-primary";
import Image from "next/image";
import video from "../../assets/video 1.png";

export default function Seventh(){
    return <Container>
        <div className="history">
            <TitleSection title="Conrado Empreendimentos" subtitle="" />
            <h1 className="history-title">Uma história edificada com confiança.</h1>
            <Image src={video} alt="Video thumbnail" />
            <ButtonPrimary text="CONHEÇA A CONRADO" onClick={() => alert("click")} classStyle="#5C635E" />
        </div>
    </Container>
}