'use client';
import './index.css'
import Container from "@/components/ui/container";
import TitleSection from "@/components/ui/title-section";
import BuildingCard from "@/components/ui/building-card";
import imageTest from "../../assets/images/464639cb70ceb958cf5c6235e5b7fce3.png";

export default function Fourth(){
    const recommended = [1,2,3];
    return <Container>
        <div className="recommended">
            <TitleSection title="Veja Também" subtitle="Conheça os edificios alto padrão da Conrado." />
            <div className="wrapper">
                {
                    recommended.map((item: any, i: number) => (
                        <BuildingCard key={`building-${i}`} image={imageTest} city="PORTO BELO" address="Porto Belo - Santa Catarina" title="Palazzo Reale" link="" rooms="2 ou 3 suítes" parks="2 vagas" size="90 a 125 m²" btn="CONHEÇA"/>
                    ))
                }
            </div>
        </div>
    </Container>
}