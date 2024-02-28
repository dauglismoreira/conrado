'use client';
import Container from "@/components/ui/container";
import HeaderSingle from "@/components/ui/header-single";
import "./index.css";
import bgSingle from "../../../assets/images/Captura de Tela 2023-12-06 às 17.03 2.png";
import Image from "next/image";
import roomIcon from "../../../assets/room.svg";
import carIcon from "../../../assets/park.svg";
import sizeIcon from "../../../assets/size.svg";
import swimIcon from "../../../assets/swim.svg";
import palazzo from "../../../assets/LOGO_PALAZO.png";
import ButtonPrimary from "@/components/ui/button-primary";
import {placeholder} from "@/components/helpers/placeholder";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import React, { useState, useEffect } from 'react';
import BuildingCard from "@/components/ui/building-card";
import imageTest from "@/assets/images/464639cb70ceb958cf5c6235e5b7fce3.png";
import { ContactForm } from "@/components/ui/contact-form";
import { GalleryCarousel } from "@/components/ui/galleryCarousel";
import building from "@/assets/images/b437ad807514f9c928f5654b3aae7971.jpeg";
import { ProgressBar } from "@/components/ui/progressBar";


export default function Enterprise() {
  const recommended = [1,2,3];
  const [scrollPosition, setScrollPosition] = useState(0);
  const [gallery, setGallery] = useState('Fachada')
  const [plant, setPlant] = useState('Tipo 1')
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if(scrollPosition >= 682){
      document.querySelector<any>('.fixed-content').style.position = "fixed";
      document.querySelector<any>('.fixed-content').style.top = "100px";
    }

    if(scrollPosition < 682){
      document.querySelector<any>('.fixed-content').style.position = "relative";
      document.querySelector<any>('.fixed-content').style.top = "unset";
    }
  }, [scrollPosition]);

  const enterpriseMock = 
    {
        title:'Palazzo Reale',
        description:'Um edifício onde a verdadeira essência de viver em um refúgio real ganha vida. Este empreendimento é um verdadeiro ícone neoclássico, mantendo sempre nossa tradição de excelência.',
        suites:'2 ou 3 suítes',
        vagas:'2 vagas',
        area:'90 a 125 m²',
        skill:'Lazer no Rooftop',
        slug:'1',
        images:[
          {
            src:building,
            alt:'teste',
            id:1
          },
          {
            src:building,
            alt:'teste2',
            id:2
          },
          {
            src:building,
            alt:'teste3',
            id:3
          },
          {
            src:building,
            alt:'teste4',
            id:4
          },
          {
            src:building,
            alt:'teste5',
            id:5
          },
          {
            src:building,
            alt:'teste6',
            id:6
          },
        ],
        apartamentos:[
          {label: '2 ou 3 suítes'},
          {label: '173,18 a 203,91 m²'},
          {label: 'Sacada com Churrasqueira'},
          {label: '03 ou 04 Vagas'},
          {label: '2 ou 3 suítes'},
          {label: '173,18 a 203,91 m²'},
          {label: 'Sacada com Churrasqueira'},
        ],
        edificio:[
          {label: 'Piscina Adulto com Raia de 25m'},
          {label: 'Piscina Infantil'},
          {label: 'SPA Aquecido'},
          {label: 'Deck Molhado'},
          {label: 'Solarium'},
          {label: 'Quadra Poliesportiva com dimensões para Tenis'},
          {label: 'Academia'},
          {label: 'Espaço Massagem'},
          {label: 'Salão de Festas'},
          {label: 'Playground'},
          {label: 'Brinquedoteca'},
          {label: 'Salão de Jogos'},
          {label: 'Espaços Gourmet'},
          {label: 'Sala Delivery e E-commerce'},
          {label: 'Bicicletário'},
          {label: 'Depósito Individual para todos os apartamentos'},
          {label: 'Pet Care'},
          {label: 'Pet Place'},
          {label: 'Guarita de Acesso Blindada'},
          {label: 'Fechadura Eletrônica'},
          {label: 'Clausura para Pedestre'},
          {label: 'Infraestrutura Circuito Interno de TV'},
        ],
        local:{
          address:'Rua Francisco Nieblas Martins, Balneario Perequê, Porto Belo - SC.',
          proximidades:[
            {label: 'Escola - aprox. 2 min'},
            {label: 'Mercado - aprox. 2 min'},
            {label: 'Centro da cidade - aprox. 25 min'},
            {label: 'Hospital - aprox. 5 min'},
            {label: 'Banco - aprox. 15 min'},
          ],
        },
        progress:[
          {
            label:'Terraplanagem',
            value: 100
          },
          {
            label:'Rede coletora de esgoto',
            value: 70
          },
          {
            label:'Sinalização',
            value: 0
          },
          {
            label:'Terraplanagem',
            value: 100
          },
          {
            label:'Sistema de Drenagem',
            value: 100
          },
          {
            label:'Pavimentações',
            value: 33
          },
          {
            label:'Revestimento',
            value: 0
          },
        ],
        id:1
    }



  return (
    <main>
        <HeaderSingle links={["SOBRE", "O APARTAMENTO", "O EDIFICIO", "GALERIA", "PLANTAS", "VIDEO", "LOCALIZACAO", "ANDAMENTO DA OBRA"]}/>
        <div className="single-cover" style={{backgroundImage: `url("${bgSingle.src}")`}}></div>
        <Container>
          <div className="enterprise-content">
            <div className="content">
              <div className="enterprise-title">
                <h1>{enterpriseMock.title}</h1>
                <p>{enterpriseMock.local.address}</p>
                <div className="wrapper">
                  <div className="icon-info">
                    <Image src={roomIcon} alt="Ícone cama"/>
                    <span>{enterpriseMock.suites}</span>
                  </div>
                  <div className="icon-info">
                    <Image src={carIcon} alt="Ícone Estacionamento"/>
                    <span>{enterpriseMock.vagas}</span>
                  </div>
                  <div className="icon-info">
                    <Image src={sizeIcon} alt="Ícone Medidas"/>
                    <span>{enterpriseMock.area}</span>
                  </div>
                  <div className="icon-info">
                    <Image src={swimIcon} alt="Ícone Lazer"/>
                    <span>{enterpriseMock.skill}</span>
                  </div>
                </div>
              </div>
              <div className="about-content" id="SOBRE">
                <h3>SOBRE</h3>
                <h1>O Símbolo da Nobreza em Porto Belo</h1>
                <p>Um edifício onde a verdadeira essência
                  de viver em um refúgio real ganha vida.

                  Este empreendimento é um verdadeiro
                  ícone neoclássico, mantendo sempre nossa tradição de excelência.
                </p>
              </div>
              <div className="enterprise-info" id="O APARTAMENTO">
                <h3>APARTAMENTOS</h3>
                <div className="wrapper">
                  {enterpriseMock.apartamentos.map((item, index) => (
                      <p key={index}><span>—</span>{item.label}</p>
                  ))}
                </div>
              </div>
              <div className="enterprise-info" id="O EDIFICIO">
                <h3>O EDIFÍCIO</h3>
                <div className="wrapper">
                  {enterpriseMock.edificio.map((item, index) => (
                      <p key={index}><span>—</span>{item.label}</p>
                  ))}
                </div>
              </div>
              <div className="enterprise-gallery" id="GALERIA">
                <h3>GALERIA</h3>
                <div className="btn-actions">
                  <ButtonPrimary className={`gallery-button ${gallery === 'Fachada' ? 'active' : ''}`} text="FACHADA" onClick={() => setGallery("Fachada")}/>
                  <ButtonPrimary className={`gallery-button ${gallery === 'Área de lazer' ? 'active' : ''}`} text="ÁREA DE LAZER" onClick={() => setGallery("Área de lazer")}/>
                  <ButtonPrimary className={`gallery-button ${gallery === 'Apartamentos' ? 'active' : ''}`} text="APARTAMENTOS" onClick={() => setGallery("Apartamentos")}/>
                </div>
                <div className="wrapper">
                  <div className="carousel-container">
                    <GalleryCarousel data={enterpriseMock.images}/>
                  </div>
                </div>
              </div>
              <div className="enterprise-gallery" id="PLANTAS">
                <h3>PLANTAS</h3>
                <div className="btn-actions">
                  <ButtonPrimary className={`gallery-button ${plant === 'Tipo 1' ? 'active' : ''}`} text="TIPO 1" onClick={() => setPlant("Tipo 1")}/>
                  <ButtonPrimary className={`gallery-button ${plant === 'Tipo 2' ? 'active' : ''}`} text="TIPO 2" onClick={() => setPlant("Tipo 2")}/>
                  <ButtonPrimary className={`gallery-button ${plant === 'Tipo 3' ? 'active' : ''}`} text="TIPO 3" onClick={() => setPlant("Tipo 3")}/>
                  <ButtonPrimary className={`gallery-button ${plant === 'Área de lazer' ? 'active' : ''}`} text="ÁREA DE LAZER" onClick={() => setPlant("Área de lazer")}/>
                </div>
                <div className="plant-content">
                  <Image src={placeholder.negative} alt=""/>
                </div>
              </div>
              <div className="enterprise-video" id="VIDEO">
                <h3>VIDEO</h3>
                <div className="content-video">
                  <Image src={placeholder.negative} alt=""/>
                </div>
              </div>
              <div className="enterprise-local" id="LOCALIZACAO">
                <h3>LOCALIZAÇÃO</h3>
                <p>Um edifício onde a verdadeira essência
                  de viver em um refúgio real ganha vida.

                  Este empreendimento é um verdadeiro
                  ícone neoclássico, mantendo sempre nossa tradição de excelência.
                </p>
                <div className="local-wrapper">
                  {enterpriseMock.local.proximidades.map((item, index) => (
                      <p key={index}><span>—</span>{item.label}</p>
                  ))}
                </div>
                <div className="content-map">
                  <Image src={placeholder.negative} alt=""/>
                </div>
              </div>
              <div className="enterprise-progress" id="ANDAMENTO DA OBRA">
                <h3>ANDAMENTO DA OBRA</h3>
                <p>Acompanhe o status de evolução da obra e seus estágios.</p>
                <div className="wrapper-graph">
                  <div className="graph">
                    <CircularProgressbar
                        value={44}
                        text={`${44}%`}
                        strokeWidth={5}
                        styles={{
                          path: {
                            stroke: `#FAAF1D`,
                          },
                          trail: {
                            stroke: '#5C635E',
                          },
                          text: {
                            fill: '#5C635E',
                            fontSize: '16px',
                          },
                          background: {
                            fill: '#3e98c7',
                          },
                        }}
                    />
                  </div>
                  <div className="graph-content">
                    {enterpriseMock.progress.map((item, index) => (
                        <ProgressBar
                          key={index}
                          progress={item.value}
                          label={item.label}
                        />
                    ))}
                  </div>
                </div>
              </div>
              <div className="enterprise-contact">
                <h3>CONTATO</h3>
                <p>Preencha os dados e em breve um consultor especialista entrará em contato.</p>
                <ContactForm/>
              </div>
            </div>
            <div className="side-bar">
                <div className="fixed-content">
                  <div className="content-title">
                    <Image src={palazzo} alt="Logo palazzo"/>
                    <div className="wrapper">
                      <div className="icon-info">
                        <Image src={roomIcon} alt="Ícone cama"/>
                        <span>2 ou 3 suítes</span>
                      </div>
                      <div className="icon-info">
                        <Image src={carIcon} alt="Ícone Estacionamento"/>
                        <span>2 vagas</span>
                      </div>
                      <div className="icon-info">
                        <Image src={sizeIcon} alt="Ícone Medidas"/>
                        <span>90 a 125 m²</span>
                      </div>
                    </div>
                  </div>
                  <div className="content-action">
                    <ButtonPrimary className="hover:bg-third text-third hover:text-secondary" text="TENHO INTERESSE" onClick={() => alert("click")}/>
                    <ButtonPrimary className="hover:bg-third text-white hover:text-secondary" text="FALE COM UM CONSULTOR" onClick={() => alert("click")}/>
                  </div>
                </div>
            </div>
          </div>
        </Container>
        <div className="recommended-buildings">
          <Container>
            <div className="content-build">
              <h1>Talvez você goste desses empreendimentos</h1>
              <div className="new-wrapper">
                {
                  recommended.map((item: any, i: number) => (
                      <BuildingCard key={`building-${i}`} image={imageTest} city="PORTO BELO"
                                    address="Porto Belo - Santa Catarina" title="Palazzo Reale" link=""
                                    rooms="2 ou 3 suítes" parks="2 vagas" size="90 a 125 m²" btn="CONHEÇA"/>
                  ))
                }
              </div>
            </div>
          </Container>
        </div>
    </main>
  );
}