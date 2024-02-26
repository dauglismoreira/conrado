'use client';
import Header from "@/components/ui/header";
import Container from "@/components/ui/container";
import Footer from "@/components/ui/footer";
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
import right from "@/assets/right.svg";
import React, { useState, useEffect } from 'react';
import BuildingCard from "@/components/ui/building-card";
import imageTest from "@/assets/images/464639cb70ceb958cf5c6235e5b7fce3.png";


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
      document.querySelector<any>('.fixed-content').style.position = "absolute";
      document.querySelector<any>('.fixed-content').style.top = "unset";
    }
  }, [scrollPosition]);

  return (
    <main>
      <Header/>
        <HeaderSingle links={["SOBRE", "VIDEO", "GALERIA", "O LOTEAMENTO", "FINANCIAMENTO", "LOCALIZACAO", "ANDAMENTO DA OBRA"]}/>
        <div className="single-cover" style={{backgroundImage: `url("${bgSingle.src}")`}}></div>
        <Container>
          <div className="enterprise-content">
            <div className="content">
              <h1>Palazzo Reale</h1>
              <p>Rua Francisco Nieblas Martins, Balneario Perequê, Porto Belo - SC.</p>
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
                <div className="icon-info">
                  <Image src={swimIcon} alt="Ícone Lazer"/>
                  <span>Lazer no Rooftop</span>
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
                  <div className="col">
                    <p><span>—</span>2 ou 3 suítes</p>
                    <p><span>—</span>173,18 a 203,91 m²</p>
                    <p><span>—</span>Sacada com Churrasqueira</p>
                    <p><span>—</span>03 ou 04 Vagas</p>
                  </div>
                  <div className="col">
                    <p><span>—</span>2 ou 3 suítes</p>
                    <p><span>—</span>173,18 a 203,91 m²</p>
                    <p><span>—</span>Sacada com Churrasqueira</p>
                  </div>
                </div>
              </div>
              <div className="enterprise-info" id="O EDIFICIO">
                <h3>O EDIFÍCIO</h3>
                <div className="wrapper">
                  <div className="col">
                    <p><span>—</span>Piscina Adulto com Raia de 25m</p>
                    <p><span>—</span>Piscina Infantil</p>
                    <p><span>—</span>SPA Aquecido</p>
                    <p><span>—</span>Deck Molhado</p>
                    <p><span>—</span>Solarium</p>
                    <p><span>—</span>Quadra Poliesportiva com dimensões para Tenis</p>
                    <p><span>—</span>Academia</p>
                    <p><span>—</span>Espaço Massagem</p>
                    <p><span>—</span>Salão de Festas</p>
                    <p><span>—</span>Playground</p>
                    <p><span>—</span>Brinquedoteca</p>
                  </div>
                  <div className="col">
                    <p><span>—</span>Salão de Jogos</p>
                    <p><span>—</span>Espaços Gourmet</p>
                    <p><span>—</span>Sala Delivery e E-commerce</p>
                    <p><span>—</span>Bicicletário</p>
                    <p><span>—</span>Depósito Individual para todos os apartamentos</p>
                    <p><span>—</span>Pet Care</p>
                    <p><span>—</span>Pet Place</p>
                    <p><span>—</span>Guarita de Acesso Blindada</p>
                    <p><span>—</span>Fechadura Eletrônica</p>
                    <p><span>—</span>Clausura para Pedestre</p>
                    <p><span>—</span>Infraestrutura Circuito Interno de TV</p>
                  </div>
                </div>
              </div>
              <div className="enterprise-info" id="GALERIA">
                <h3>GALERIA</h3>
                <div className="btn-actions">
                  <ButtonPrimary text="FACHADA" onClick={() => alert("")} classStyle="#5C635E"/>
                  <ButtonPrimary text="ÁREA DE LAZER" onClick={() => alert("")} classStyle="#5C635E"/>
                  <ButtonPrimary text="APARTAMENTOS" onClick={() => alert("")} classStyle="#5C635E"/>
                </div>
                <div className="wrapper">
                  <div className="col-1">
                    <Image src={placeholder.negative} alt=""/>
                    <p>clique para ampliar as imagens</p>
                  </div>
                  <div className="col-1">
                    <Image src={placeholder.negative} alt=""/>
                    <p>clique para ampliar as imagens</p>
                  </div>
                </div>
              </div>
              <div className="enterprise-info" id="PLANTAS">
                <h3>PLANTAS</h3>
                <div className="btn-actions">
                  <ButtonPrimary text="TIPO 1" onClick={() => alert("")} classStyle="#5C635E"/>
                  <ButtonPrimary text="TIPO 2" onClick={() => alert("")} classStyle="#5C635E"/>
                  <ButtonPrimary text="TIPO 3" onClick={() => alert("")} classStyle="#5C635E"/>
                  <ButtonPrimary text="ÁREA DE LAZER" onClick={() => alert("")} classStyle="#5C635E"/>
                </div>
                <div className="content">
                  <Image src={placeholder.negative} alt=""/>
                </div>
              </div>
              <div className="enterprise-info" id="VIDEO">
                <h3>VIDEO</h3>
                <div className="content-video">
                  <Image src={placeholder.negative} alt=""/>
                </div>
              </div>
              <div className="enterprise-info" id="LOCALIZACAO">
                <h3>LOCALIZAÇÃO</h3>
                <p>Um edifício onde a verdadeira essência
                  de viver em um refúgio real ganha vida.

                  Este empreendimento é um verdadeiro
                  ícone neoclássico, mantendo sempre nossa tradição de excelência.
                </p>
                <div className="wrapper-3">
                  <p><span>—</span>Escola - aprox. 2 min</p>
                  <p><span>—</span>Mercado - aprox. 2 min</p>
                  <p><span>—</span>Centro da cidade - aprox. 25 min</p>
                  <p><span>—</span>Hospital - aprox. 5 min</p>
                  <p><span>—</span>Banco - aprox. 15 min</p>
                </div>
                <div className="content-video">
                  <Image src={placeholder.negative} alt=""/>
                </div>
              </div>
              <div className="enterprise-info" id="ANDAMENTO DA OBRA">
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
                    <div className="col">
                      <div className="wrapper-content">
                        <div className="bar">
                          <div className="progress" style={{width: "100%"}}></div>
                        </div>
                        <div className="info">
                          <span>Terraplanagem</span>
                          <span>100%</span>
                        </div>
                      </div>
                      <div className="wrapper-content">
                        <div className="bar">
                          <div className="progress" style={{width: "70%"}}></div>
                        </div>
                        <div className="info">
                          <span>Rede coletora de esgoto</span>
                          <span>70%</span>
                        </div>
                      </div>
                      <div className="wrapper-content">
                        <div className="bar">
                          <div className="progress" style={{width: "0%"}}></div>
                        </div>
                        <div className="info">
                          <span>Sinalização</span>
                          <span>0%</span>
                        </div>
                      </div>
                    </div>
                    <div className="col">
                      <div className="wrapper-content">
                        <div className="bar">
                          <div className="progress" style={{width: "100%"}}></div>
                        </div>
                        <div className="info">
                          <span>Sistema de Drenagem</span>
                          <span>100%</span>
                        </div>
                      </div>
                      <div className="wrapper-content">
                        <div className="bar">
                          <div className="progress" style={{width: "33%"}}></div>
                        </div>
                        <div className="info">
                          <span>Pavimentações</span>
                          <span>33%</span>
                        </div>
                      </div>
                      <div className="wrapper-content">
                        <div className="bar">
                          <div className="progress" style={{width: "0%"}}></div>
                        </div>
                        <div className="info">
                          <span>Revestimento</span>
                          <span>0%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="enterprise-info">
                <h3>CONTATO</h3>
                <p>Preencha os dados e em breve um consultor especialista entrará em contato.</p>
                <div className="contact">
                  <div className="message-contact">
                    <div className="message-contact-grid">
                      <div className="wrapper">
                        <div className="input-line">
                          <legend>NOME</legend>
                          <input type="text"/>
                        </div>
                        <div className="input-line">
                          <legend>TELEFONE</legend>
                          <input type="email"/>
                        </div>
                      </div>
                      <div className="wrapper">
                        <div className="input-line">
                          <legend>EMAIL</legend>
                          <input type="text"/>
                        </div>
                        <div className="input-line">
                          <legend>CIDADE</legend>
                          <input type="email"/>
                        </div>
                      </div>
                    </div>
                    <div className="wrapper">
                      <div className="input-line">
                        <legend>MENSAGEM</legend>
                        <textarea name="" id="" rows={6}></textarea>
                      </div>
                    </div>
                  </div>
                  <div className="message-send">
                    <Image src={right} alt='right-image'/>
                    <p>A Conrado respeita sua privacidade e utiliza seus dados pessoais para contatá-lo
                      por e-mail ou telefone aqui registrados. Para saber mais, acesse nossa Política
                      de Privacidade.A o clicar em "Enviar", você concorda em permitir que a Conrado
                      armazene e processe os dados pessoais fornecidos por você para a finalidade
                      informada.</p>
                    <ButtonPrimary text="ENVIAR" onClick={() => alert("")} classStyle="#5C635E"/>
                  </div>
                </div>
              </div>
            </div>
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
                <ButtonPrimary text="TENHO INTERESSE" onClick={() => alert("click")} classStyle="#FAAF1D"/>
                <ButtonPrimary text="FALE COM UM CONSULTOR" onClick={() => alert("click")} classStyle="#FFF"/>
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
      <Footer/>
    </main>
  );
}
