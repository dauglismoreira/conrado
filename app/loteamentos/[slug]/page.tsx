'use client';
import Container from "@/components/ui/container";
import HeaderSingle from "@/components/ui/header-single";
import "./index.css";
import bgSingle from "../../../assets/images/Captura de Tela 2023-12-06 às 17.03 2.png";
import Image from "next/image";
import palazzo from "../../../assets/LOGO_PALAZO.png";
import ButtonPrimary from "@/components/ui/button-primary";
import {placeholder} from "@/components/helpers/placeholder";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import React, { useState, useEffect } from 'react';
import { ContactForm } from "@/components/ui/contact-form";
import { GalleryCarousel } from "@/components/ui/galleryCarousel";
import building from "@/assets/images/b437ad807514f9c928f5654b3aae7971.jpeg";
import { ProgressBar } from "@/components/ui/progressBar";
import SubdivisionCard from "@/components/ui/subdivision-card";


export default function Enterprise() {
  const recommended = [1,2,3];
  const [scrollPosition, setScrollPosition] = useState(0);
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
        title:'Loteamento Residencial do Vale',
        description:'Rua Matheus Piovesan, Bairro Cidade Alta | Laranjeiras do Sul/PR',
        tamanho:'a partir de 163m²',
        infra:'Infraestrutura de primeira',
        skill:'Uma linda vista para o vale',
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
        infraestrutura:[
          {label: 'Asfalto'},
          {label: 'Calçados em paver'},
          {label: 'Iluminação de LED'},
          {label: 'Galerias Pluviais'},
          {label: 'Rede de Esgoto'},
          {label: 'Paisagismo e Arborismo'},
          {label: 'Preservação Ambiental'},
        ],
        financiamento:[
          {label: 'Pagamento à vista com ótimos descontos.'},
          {label: 'Aquisição de terrenos em construção pela Caixa Econômica Federal.'},
          {label: 'Parcelado em até 60 vezes direto com a construtora.'},
          {label: 'Previsão de entrega: dezembro de 2022.'},
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
    <main className="loteamento">
        <HeaderSingle links={["SOBRE", "VIDEO", "GALERIA", "O LOTEAMENTO", "FINANCIAMENTO", "LOCALIZAÇÃO", "ANDAMENTO DA OBRA"]}/>
        <div className="single-cover" style={{backgroundImage: `url("${bgSingle.src}")`}}></div>
        <Container>
          <div className="enterprise-content">
            <div className="content">
              <div className="enterprise-title">
                <h1>{enterpriseMock.title}</h1>
                <p>{enterpriseMock.local.address}</p>
                <div className="wrapper">
                  <div className="box-info">
                    <label>Tamanhos de</label>
                    <div className="icon-info">
                      <svg width="24" height="23" viewBox="0 0 24 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7 14.6737L3 11.0053L7 7.33685L8.425 8.6208L6.825 10.0882H17.175L15.6 8.6208L17 7.33685L21 11.0053L17 14.6737L15.6 13.3898L17.175 11.9224H6.825L8.4 13.3898L7 14.6737Z" fill="#FAAF1D"/>
                      </svg>
                      <span>{enterpriseMock.tamanho}</span>
                    </div>
                  </div>
                  <div className="box-info">
                    <label>Infraestrutura</label>
                    <div className="icon-info">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18 23V20H15V18H18V15H20V18H23V20H20V23H18ZM18 13V4H20V13H18ZM4 20V4H6V20H4ZM11 8V4H13V8H11ZM11 14V10H13V14H11ZM11 20V16H13V20H11Z" fill="#FAAF1D"/>
                      </svg>
                      <span>{enterpriseMock.infra}</span>
                    </div>
                  </div>
                  <div className="box-info">
                    <label>Localização</label>
                    <div className="icon-info">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 16.475C13.65 15.1417 14.8958 13.8583 15.7375 12.625C16.5792 11.3917 17 10.2333 17 9.15C17 8.21667 16.8292 7.42083 16.4875 6.7625C16.1458 6.10417 15.725 5.57083 15.225 5.1625C14.725 4.75417 14.1833 4.45833 13.6 4.275C13.0167 4.09167 12.4833 4 12 4C11.5167 4 10.9833 4.09167 10.4 4.275C9.81667 4.45833 9.275 4.75417 8.775 5.1625C8.275 5.57083 7.85417 6.10417 7.5125 6.7625C7.17083 7.42083 7 8.21667 7 9.15C7 10.2333 7.42083 11.3917 8.2625 12.625C9.10417 13.8583 10.35 15.1417 12 16.475ZM12 19C9.65 17.2667 7.89583 15.5833 6.7375 13.95C5.57917 12.3167 5 10.7167 5 9.15C5 7.96667 5.2125 6.92917 5.6375 6.0375C6.0625 5.14583 6.60833 4.4 7.275 3.8C7.94167 3.2 8.69167 2.75 9.525 2.45C10.3583 2.15 11.1833 2 12 2C12.8167 2 13.6417 2.15 14.475 2.45C15.3083 2.75 16.0583 3.2 16.725 3.8C17.3917 4.4 17.9375 5.14583 18.3625 6.0375C18.7875 6.92917 19 7.96667 19 9.15C19 10.7167 18.4208 12.3167 17.2625 13.95C16.1042 15.5833 14.35 17.2667 12 19ZM12 11C12.55 11 13.0208 10.8042 13.4125 10.4125C13.8042 10.0208 14 9.55 14 9C14 8.45 13.8042 7.97917 13.4125 7.5875C13.0208 7.19583 12.55 7 12 7C11.45 7 10.9792 7.19583 10.5875 7.5875C10.1958 7.97917 10 8.45 10 9C10 9.55 10.1958 10.0208 10.5875 10.4125C10.9792 10.8042 11.45 11 12 11ZM5 22V20H19V22H5Z" fill="#FAAF1D"/>
                      </svg>
                      <span>{enterpriseMock.skill}</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="about-content" id="SOBRE">
                <h3>SOBRE</h3>
                <h1>Tranquilidade e segurança em contato com a natureza</h1>
                <p>Empreendimento com infraestrutura de grandes centros, mas sem deixar de lado o contato com a natureza. O Residencial Vista do Vale traz à Guarapuava uma nova oportunidade para quem quer morar com segurança, tranquilidade e muito verde.
                </p>
              </div>
              <div className="enterprise-video" id="VIDEO">
                <h3>VIDEO</h3>
                <div className="content-video">
                  <Image src={placeholder.negative} alt=""/>
                </div>
              </div>
              <div className="enterprise-gallery" id="GALERIA">
                <h3>GALERIA</h3>
                <div className="wrapper">
                  <div className="carousel-container">
                    <GalleryCarousel data={enterpriseMock.images}/>
                  </div>
                </div>
              </div>
              <div className="enterprise-info" id="O LOTEAMENTO">
                <div className="loteamento">
                  <h3>O LOTEAMENTO</h3>
                  <Image src={placeholder.negative} alt=""/>
                </div>
                <h3>INFRAESTRUTURA</h3>
                <div className="wrapper">
                  {enterpriseMock.infraestrutura.map((item, index) => (
                      <p key={index}><span>—</span>{item.label}</p>
                  ))}
                </div>
              </div>
              <div className="enterprise-info financiamento" id="FINANCIAMENTO">
                <h3>FINANCIAMENTO</h3>
                <div className="wrapper">
                  {enterpriseMock.financiamento.map((item, index) => (
                      <p key={index}><span>—</span>{item.label}</p>
                  ))}
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
                    <div className="box-info">
                      <label>Tamanhos de</label>
                      <div className="icon-info">
                        <svg width="24" height="23" viewBox="0 0 24 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M7 14.6737L3 11.0053L7 7.33685L8.425 8.6208L6.825 10.0882H17.175L15.6 8.6208L17 7.33685L21 11.0053L17 14.6737L15.6 13.3898L17.175 11.9224H6.825L8.4 13.3898L7 14.6737Z" fill="#FAAF1D"/>
                        </svg>
                        <span>{enterpriseMock.tamanho}</span>
                      </div>
                    </div>
                    <div className="box-info">
                      <label>Infraestrutura</label>
                      <div className="icon-info">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M18 23V20H15V18H18V15H20V18H23V20H20V23H18ZM18 13V4H20V13H18ZM4 20V4H6V20H4ZM11 8V4H13V8H11ZM11 14V10H13V14H11ZM11 20V16H13V20H11Z" fill="#FAAF1D"/>
                        </svg>
                        <span>{enterpriseMock.infra}</span>
                      </div>
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
              <h1>Talvez você goste desses loteamentos</h1>
              <div className="new-wrapper">
                {
                  recommended.map((item: any, i: number) => (
                    <SubdivisionCard key={`subdivision-card-${i}`} image={placeholder.negative}
                      address="Laranjeiras do Sul - Paraná" title="Loteamento Jabuticabal"
                      size="Lotes a partir de 200 m²"
                      link="/loteamentos/1"/>
                  ))
                }
              </div>
            </div>
          </Container>
        </div>
    </main>
  );
}