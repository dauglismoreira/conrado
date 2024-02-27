'use client';
import './index.css'
import Container from "@/components/ui/container";
import TitleSection from "@/components/ui/title-section";
import BlogCard from "@/components/ui/blog-card";
import {placeholder} from "@/components/helpers/placeholder";

export default function Eighth(){
    const blogCard: any = [
        {
            image: placeholder.negative,
            dateTime: "Jul 20, 2022",
            title: "Rooftop: benefícios de morar ou comprar apartamento com área de lazer no alto do ....",
            link: "/noticias/1"
        },
        {
            image: placeholder.negative,
            dateTime: "Jul 20, 2022",
            title: "Conheça o Edifício Central Park da Conrado",
            link: "/noticias/1"
        },
        {
            image: placeholder.negative,
            dateTime: "Jul 20, 2022",
            title: "Curitiba: quando ir, onde ficar, o que fazer",
            link: "/noticias/1"
        },
        {
            image: placeholder.negative,
            dateTime: "Jul 20, 2022",
            title: "Porto Belo é a 30ª cidade que mais cresce no Brasil",
            link: "/noticias/1"
        },
    ];

    return <Container>
        <div className="last-news">
            <TitleSection title="Últimas Notícias" subtitle="" />
            <div className="wrapper-content">
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