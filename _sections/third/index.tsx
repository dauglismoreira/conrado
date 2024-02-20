'use client';
import './index.css'
import Container from "@/components/ui/container";
import TitleSection from "@/components/ui/title-section";
import Image from "next/image";
import building from "../../assets/images/b437ad807514f9c928f5654b3aae7971.jpeg";
import suite from "../../assets/suite.svg";
import park from "../../assets/park.svg";
import sizeIcon from "../../assets/size.svg";
import lazer from "../../assets/lazer.svg";
import ButtonPrimary from "@/components/ui/button-primary";

export default function Third(){
    return <Container>
        <div className="buildings">
            <TitleSection title="Edifícios - Lançamentos" subtitle="Conheça os próximos empreendimentos da Conrado e escolha o seu." />
            <div className="wrapper">
                <div className="content">
                    <h3>Porto Belo - Santa Catarina</h3>
                    <h1>Palazzo Reale</h1>
                    <p>Um edifício onde a verdadeira essência
                        de viver em um refúgio real ganha vida.
                        Este empreendimento é um verdadeiro
                        ícone neoclássico, mantendo sempre nossa tradição de excelência.
                    </p>
                    <ul>
                        <li><span><Image src={suite} alt="Suítes imagem"/></span> 2 ou 3 suítes</li>
                        <li><span><Image src={park} alt="Suítes imagem"/></span> 2 vagas</li>
                        <li><span><Image src={sizeIcon} alt="Suítes imagem"/></span> 90 a 125 m²</li>
                        <li><span><Image src={lazer} alt="Suítes imagem"/></span> Lazer no Rooftop</li>
                    </ul>
                    <ButtonPrimary text="CONHEÇA" onClick={() => alert("")} classStyle="#323C3D" />
                </div>
                <Image src={building} alt="Foto empreendimento"/>
            </div>
        </div>
    </Container>
}