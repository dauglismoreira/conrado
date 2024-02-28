'use client';
import './index.css'
import Image from "next/image";
import videoThumb from "../../assets/video 1.png";
import bgAsset from "../../assets/TEXTURA-FUNDO-PREDIO.png";
import { ContactForm } from '@/components/ui/contact-form';

export default function Contact() {
    return (
        <main className="bg-[#F1F2F4]">
            <div className="bg-asset">
                <Image src={bgAsset} alt="" />
            </div>
            <div className="about">
                <div className="container">
                    <div className="wrapp-info ">
                        <h3>LOTEADORA</h3>
                        <h3>INCORPORADORA</h3>
                        <h3>CONSTRUTORA</h3>
                    </div>
                    <div className="container-content">
                        <Image className="about-video" src={videoThumb} alt="video"/>
                        <div className="about-title">
                            <h3>Conrado Empreendimentos</h3>
                            <h1>Uma história edificada com confiança</h1>
                            <p>A nossa história começou em <span>1996</span>. Abrimos nosso primeiro escritório em
                                Curitiba, Paraná, e de lá para cá, conquistamos clientes e concretizamos confiança.
                                Desenvolvemos projetos que até hoje fazem parte da história da urbanização de regiões,
                                sempre com muito profissionalismo, fruto do trabalho de uma equipe familiar e
                                multidisciplinar. Somos um time completo com corretores, perito imobiliário, arquiteto e
                                administradores, pronto para estudar as suas necessidades e desenvolver uma soluções que
                                sempre irão prezar pela melhor estrutura.</p>
                            <div className="about-info">
                                <div className="line"><p>MISSÃO</p></div>
                                <p className="info-content"> Melhorar a qualidade de vida e a renda das pessoas através
                                    da urbanização,
                                    construção, venda e administração de imóveis com qualidade e sustentabilidade. </p>
                            </div>
                            <div className="about-info">
                                <div className="line"><p>VISÃO</p></div>
                                <p className="info-content"> Ser referência em qualidade na produção de loteamentos
                                    urbanos e edificações
                                    prediais no Sul do Brasil.</p>
                            </div>
                            <div className="about-info">
                                <div className="line"><p>VALORES</p></div>
                                <ul>
                                    <li>Inovação e melhoria contínua;</li>
                                    <li>Respeito e valorização às pessoas;</li>
                                    <li>Qualidade e eficiência;</li>
                                    <li>Resultados;</li>
                                    <li>Sustentabilidade;</li>
                                    <li>Coerência.</li>
                                </ul>
                            </div>
                            <div className="about-info">
                                <div className="line"><p>CERTIFICADOS</p></div>
                                <h3>ISO 9001</h3>
                                <h3>PBQP-H</h3>
                            </div>
                            <div className="about-info">
                                <div className="line"><p>ESCRITÓRIOS CONRADO</p></div>
                                <div className="address">
                                    <h3 className="address-city">CURITIBA - PR</h3>
                                    <span className="address-street">Rua Prof. Pedro Viriato Parigot de Souza, 3901 - Cidade Industrial</span>
                                    <span className="address-phone">(41) 3045-2100</span>
                                </div>
                                <div className="address">
                                    <h3 className="address-city">GUARAPUAVA - PR</h3>
                                    <span
                                        className="address-street">Av. Bento Camargo Ribas, 2270 - São Cristóvão</span>
                                    <span className="address-phone">(42) 3304-7000</span>
                                </div>
                                <div className="address">
                                    <h3 className="address-city">LARANJEIRAS DO SUL - PR</h3>
                                    <span className="address-street">Rua 7 de Setembro, 2394 - Centro</span>
                                    <span className="address-phone">(42) 3635-5619</span>
                                </div>
                                <div className="address">
                                    <h3 className="address-city">PORTO BELO - SC</h3>
                                    <span className="address-street">R. Francisco Nieblas Martins, 42 - Perequê</span>
                                    <span className="address-phone">(47) 99172-3454</span>
                                </div>
                            </div>
                            <span className="text-lg lg:text-3xl font-bold mb-4 block">Agora que você já conhece um pouco da história da Conrado, que tal fazermos parte da
                                sua?</span>
                            <span className="text-secondary lg:mb-4 block">Preencha os dados e em breve um consultor especialista entrará em contato.</span>
                            <ContactForm/>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
