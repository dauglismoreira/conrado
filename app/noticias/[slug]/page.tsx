'use client';
import Header from "@/components/ui/header";
import Footer from "@/components/ui/footer";
import './index.css'
import Container from "@/components/ui/container";
import Image from "next/image";
import {placeholder} from "@/components/helpers/placeholder";
import copyIcon from "../../../assets/copy.svg";
import emailIcon from "../../../assets/email.svg";
import wppIcon from "../../../assets/wpp.svg";
import BuildingCard from "@/components/ui/building-card";
import imageTest from "@/assets/images/464639cb70ceb958cf5c6235e5b7fce3.png";

export default function New() {
    const recommended = [1,2,3];
    return (
        <main>
            <Header/>
            <Container>
                <>
                    <div className="new">
                        <div className="title-new">
                            <h3>Jul 20, 2023</h3>
                            <h1>Rooftop: benefícios de morar ou comprar apartamento
                                com área de lazer no alto do prédio</h1>
                            <Image src={placeholder.positive} alt="Imagem Título" />
                        </div>
                        <div className="new-body">
                            <h3>Você já visitou um empreendimento com a área de lazer em um andar alto em vez de ser no térreo? Imagine comprar um apartamento para morar ou alugar em um prédio que possui rooftop. É vantajoso economicamente para investidores, e dá aos moradores uma experiência de lazer diferente.</h3>
                            <div className="body-content">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas non tempor ex. Etiam
                                    suscipit fringilla gravida. In a iaculis diam. Vivamus ac facilisis lectus. Aenean diam
                                    massa, luctus vel pulvinar non, sodales et urna. Vestibulum imperdiet velit erat.
                                    Quisque vestibulum blandit turpis, sodales viverra ex imperdiet ut. Donec tincidunt
                                    libero dolor, non ultrices lacus posuere vitae. Phasellus eleifend ullamcorper neque,
                                    viverra facilisis nisl sagittis id.</p>
                                <p>Nam risus urna, ornare vitae vehicula semper, varius eu sem. Mauris quam mi, faucibus nec
                                    blandit tincidunt, tempor vel dolor. Ut et diam sit amet eros posuere imperdiet. Aliquam
                                    erat volutpat. Cras ornare ante vitae tellus pretium elementum. Integer feugiat lorem ut
                                    lectus suscipit, id suscipit libero mollis. Maecenas mollis in ligula eget placerat.
                                    Nulla facilisi. Proin quis vulputate neque. Nulla gravida nibh et justo condimentum
                                    malesuada. Quisque mollis sodales arcu, id maximus turpis rutrum et. Morbi consequat,
                                    turpis ut dictum eleifend, dui mauris scelerisque turpis, et mattis enim quam in
                                    sapien.</p>
                                <p>Donec lacinia risus vel tellus maximus facilisis. Nulla posuere euismod purus et tempus.
                                    Aliquam a ipsum vel lorem convallis faucibus eget at erat. Aenean velit ex, volutpat
                                    imperdiet nisl non, elementum gravida orci. Aenean euismod est at diam tempus, ut mattis
                                    mauris consectetur. Curabitur sit amet nisl ex. Mauris ut mollis felis, sit amet varius
                                    quam. Donec lobortis purus a blandit facilisis. Nullam ut neque dolor. Sed ut porttitor
                                    nunc, eu rhoncus dui.</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas non tempor ex. Etiam
                                    suscipit fringilla gravida. In a iaculis diam. Vivamus ac facilisis lectus. Aenean diam
                                    massa, luctus vel pulvinar non, sodales et urna. Vestibulum imperdiet velit erat.
                                    Quisque vestibulum blandit turpis, sodales viverra ex imperdiet ut. Donec tincidunt
                                    libero dolor, non ultrices lacus posuere vitae. Phasellus eleifend ullamcorper neque,
                                    viverra facilisis nisl sagittis id.</p>
                                <p>Nam risus urna, ornare vitae vehicula semper, varius eu sem. Mauris quam mi, faucibus nec
                                    blandit tincidunt, tempor vel dolor. Ut et diam sit amet eros posuere imperdiet. Aliquam
                                    erat volutpat. Cras ornare ante vitae tellus pretium elementum. Integer feugiat lorem ut
                                    lectus suscipit, id suscipit libero mollis. Maecenas mollis in ligula eget placerat.
                                    Nulla facilisi. Proin quis vulputate neque. Nulla gravida nibh et justo condimentum
                                    malesuada. Quisque mollis sodales arcu, id maximus turpis rutrum et. Morbi consequat,
                                    turpis ut dictum eleifend, dui mauris scelerisque turpis, et mattis enim quam in
                                    sapien.</p>
                                <p>Donec lacinia risus vel tellus maximus facilisis. Nulla posuere euismod purus et tempus.
                                    Aliquam a ipsum vel lorem convallis faucibus eget at erat. Aenean velit ex, volutpat
                                    imperdiet nisl non, elementum gravida orci. Aenean euismod est at diam tempus, ut mattis
                                    mauris consectetur. Curabitur sit amet nisl ex. Mauris ut mollis felis, sit amet varius
                                    quam. Donec lobortis purus a blandit facilisis. Nullam ut neque dolor. Sed ut porttitor
                                    nunc, eu rhoncus dui.</p>
                                <div className="body-share">
                                    <h3>COMPARTILHAMENTO</h3>
                                    <Image src={copyIcon} alt='Ícone copiar'/>
                                    <Image src={emailIcon} alt='Ícone email'/>
                                    <Image src={wppIcon} alt='Ícone whatsapp'/>
                                </div>
                                <h1>Talvez você goste desses empreendimentos</h1>
                            </div>
                        </div>
                    </div>
                    <div className="new-wrapper">
                        {
                            recommended.map((item: any, i: number) => (
                                <BuildingCard key={`building-${i}`} image={imageTest} city="PORTO BELO" address="Porto Belo - Santa Catarina" title="Palazzo Reale" link="" rooms="2 ou 3 suítes" parks="2 vagas" size="90 a 125 m²" btn="CONHEÇA"/>
                            ))
                        }
                    </div>
                </>
            </Container>
            <Footer/>
        </main>
    );
}
