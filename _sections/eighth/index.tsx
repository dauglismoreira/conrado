'use client';
import './index.css'
import Container from "@/components/ui/container";
import TitleSection from "@/components/ui/title-section";
import image1 from "@/assets/images/image 1.png";
import image2 from "@/assets/images/Captura de Tela 2023-12-06 às 18.19 1.png";
import image3 from "@/assets/images/Captura de Tela 2023-12-06 às 17.03 2.png";
import image4 from "@/assets/images/Captura de Tela 2023-12-06 às 18.23 1.png";
import BlogCard from "@/components/ui/blog-card";

export default function Eighth(){
    const blogCard: any = [
        {
            image: image1,
            dateTime: "Jul 20, 2022",
            title: "Rooftop: benefícios de morar ou comprar apartamento com área de lazer no alto do ....",
            link: ""
        },
        {
            image: image2,
            dateTime: "Jul 20, 2022",
            title: "Conheça o Edifício Central Park da Conrado",
            link: ""
        },
        {
            image: image3,
            dateTime: "Jul 20, 2022",
            title: "Curitiba: quando ir, onde ficar, o que fazer",
            link: ""
        },
        {
            image: image4,
            dateTime: "Jul 20, 2022",
            title: "Porto Belo é a 30ª cidade que mais cresce no Brasil",
            link: ""
        },
    ];

    return <Container>
        <div className="last-news">
            <TitleSection title="Últimas Notícias" subtitle="" />
            <div className="wrapper">
                {
                    blogCard.map((item: any, i: number) => (
                        <BlogCard key={`blog-card-${i}`} image={item.image} dateTime={item.dateTime} title={item.title}
                                  link={item.link}/>
                    ))
                }
            </div>
        </div>
    </Container>
}