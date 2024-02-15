import Header from "../components/ui/header";
import Footer from "@/components/ui/footer";
import BlogCard from "@/components/ui/blog-card";
import image1 from "../assets/images/image 1.png";
import image2 from "../assets/images/Captura de Tela 2023-12-06 às 18.19 1.png";
import image3 from "../assets/images/Captura de Tela 2023-12-06 às 17.03 2.png";
import image4 from "../assets/images/Captura de Tela 2023-12-06 às 18.23 1.png";
import image5 from "../assets/images/5d0ced6d16c0b 1.png";
import image6 from "../assets/images/5d0ced6d16c0b 1 (2).png";
import image7 from "../assets/images/5d0ced6d16c0b 1 (1).png";
import SubdivisionCard from "@/components/ui/subdivision-card";

export default function Home() {
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

    return (
        <main>
            <Header/>
            <div style={{height: '100vh', display: "flex", padding: "100px", gap: "30px"}}>
                {
                    blogCard.map((item: any, i: number) => (
                        <BlogCard key={i} image={item.image} dateTime={item.dateTime} title={item.title}
                                  link={item.link}/>
                    ))
                }
            </div>
            <div style={{height: '100vh', display: "flex", padding: "100px", gap: "30px"}}>
                {
                    subdivisionCard.map((item: any, i: number) => (
                        <SubdivisionCard key={i} image={item.image}
                            address={item.address} title={item.title}
                            size={item.size}
                            link={item.link}/>
                    ))
                }
            </div>
            <Footer/>
        </main>
    );
}
