'use client';
import Header from "@/components/ui/header";
import Footer from "@/components/ui/footer";
import './index.css'
import Container from "@/components/ui/container";
import Image from "next/image";
import ButtonPrimary from "@/components/ui/button-primary";
import BlogCard from "@/components/ui/blog-card";
import image3 from "@/assets/images/Captura de Tela 2023-12-06 às 17.03 2.png";
import {placeholder} from "@/components/helpers/placeholder";

export default function SubdivisionList() {
    const blogCard = [1,2,3,4,5,6,7,8,9,10,11,12];
    return (
        <main className="bg-[#F1F2F4]">
            <Header/>
            <Container>
            <div className="news">
                <h1 className="news-title">Notícias</h1>
                <div className="highlight-card">
                    <Image src={placeholder.negative} alt="Imagem destaque" />
                    <div className="content">
                        <h3>Jul 20, 2022</h3>
                        <h1>Rooftop: benefícios de morar ou comprar apartamento com área de lazer no alto do prédio</h1>
                        <ButtonPrimary text="LEIA MAIS" onClick={() => window.location.href = "/noticias/1"} classStyle="#5C635E" />
                    </div>
                </div>
                <h3 className="news-subtitle">Outras Postagens</h3>
                <div className="grid-list">
                    {
                        blogCard.map((item: any, i: number) => (
                            <BlogCard key={`blog-card-${i}`} image={placeholder.negative} dateTime="Jul 20, 2022" title="Conheça o Edifício Central Park da Conrado"
                                      link="/noticias/1"/>
                        ))
                    }
                </div>
            </div>
            </Container>
            <Footer/>
        </main>
    );
}
