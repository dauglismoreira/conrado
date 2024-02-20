'use client';
import './index.css'
import Container from "@/components/ui/container";
import TitleSection from "@/components/ui/title-section";
import SubdivisionCard from "@/components/ui/subdivision-card";
import image5 from "@/assets/images/5d0ced6d16c0b 1.png";
import image6 from "@/assets/images/5d0ced6d16c0b 1 (2).png";
import image7 from "@/assets/images/5d0ced6d16c0b 1 (1).png";

export default function Sexth(){
    const subdivisionCard: any = [
        {
            image: image5,
            address: "Laranjeiras do Sul - Paraná",
            title: "Loteamento Jabuticabal",
            size: "Lotes a partir de 200 m²",
            link: ""
        },
        {
            image: image6,
            address: "Laranjeiras do Sul - Paraná",
            title: "Residencial Vista do Vale",
            size: "Lotes a partir de 200 m²",
            link: ""
        },
        {
            image: image7,
            address: "Laranjeiras do Sul - Paraná",
            title: "Loteamento Jabuticabal",
            size: "Lotes a partir de 200 m²",
            link: ""
        },
    ];

    return <Container>
        <div className="subdivision">
            <TitleSection title="Veja Também" subtitle="Conheça os edificios alto padrão da Conrado." />
            <div className="wrapper">
                {
                    subdivisionCard.map((item: any, i: number) => (
                        <SubdivisionCard key={`subdivision-card-${i}`} image={item.image}
                                         address={item.address} title={item.title}
                                         size={item.size}
                                         link={item.link}/>
                    ))
                }
            </div>
        </div>
    </Container>
}