'use client';
import './index.css'
import Container from "@/components/ui/container";
import TitleSection from "@/components/ui/title-section";
import Image from "next/image";
import building from "../../assets/images/asdasdasdasd 1.png";
import suite from "../../assets/suite.svg";
import park from "../../assets/park.svg";
import sizeIcon from "../../assets/size.svg";
import lazer from "../../assets/lazer.svg";
import ButtonPrimary from "@/components/ui/button-primary";

export default function Fiveth(){
    return <Container>
        <div className="buildings">
            <TitleSection title="Loteamentos - Lançamentos" subtitle="Loteamentos completos da Conrado." />
            <div className="wrapper">
                <div className="content">
                    <h3>Laranjeiras do Sul - Paraná</h3>
                    <h1>Residencial Vista do Vale</h1>
                    <p>Empreendimento com infraestrutura de grandes centros, mas sem deixar de lado o contato com a natureza. O Residencial Vista do Vale traz à Guarapuava uma nova oportunidade para quem quer morar com segurança, tranquilidade e muito verde.</p>
                    <ul>
                        <li><span><Image src={sizeIcon} alt="Suítes imagem"/></span> Lotes a partir de 200 m²</li>
                    </ul>
                    <ButtonPrimary text="CONHEÇA" onClick={() => alert("")} classStyle="#323C3D" />
                </div>
                <Image src={building} alt="Foto empreendimento"/>
            </div>
        </div>
    </Container>
}