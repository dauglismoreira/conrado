'use client';
import './index.css'
import Image from "next/image";
import chevRight from "../../assets/chev-right.svg";
import waze from "../../assets/waze.svg";
import gmaps from "../../assets/googlemaps.svg";
import right from "../../assets/right.svg";
import ButtonPrimary from "@/components/ui/button-primary";
import { useState } from "react";
import useScreenSize from '@/components/hooks/useScreenSize';

export default function Contact() {
    const {isLargeScreen} = useScreenSize(1420)

    const contactCenter = [
        {
            label:'Curitiba - PR',
            address:'Rua Prof. Pedro Viriato Parigot de Souza, 3901 - Cidade Industrial',
            phone:'(41) 3045-2100',
            email:'contato@conradoempreendimentos.com.br'
        },
        {
            label:'Guarapuava - PR',
            address:'Rua Prof. Pedro Viriato Parigot de Souza, 3901 - Cidade Industrial',
            phone:'(41) 3045-2100',
            email:'contato@conradoempreendimentos.com.br'
        },
        {
            label:'Laranjeiras do Sul - PR',
            address:'Rua Prof. Pedro Viriato Parigot de Souza, 3901 - Cidade Industrial',
            phone:'(41) 3045-2100',
            email:'contato@conradoempreendimentos.com.br'
        },
        {
            label:'Porto Belo - SC',
            address:'Rua Prof. Pedro Viriato Parigot de Souza, 3901 - Cidade Industrial',
            phone:'(41) 3045-2100',
            email:'contato@conradoempreendimentos.com.br'
        },
    ]
    const [selectedCity, setSelectedCity] = useState(contactCenter[0].label)

    
    return (
        <main>
            <div className="contact">
                <div className="contact-list">
                    <h3>Contato</h3>
                    <p>Escolha com quem você deseja falar</p>
                    {isLargeScreen ? contactCenter.map((city, index) => (
                        <div
                            className={`city ${city.label === selectedCity ? 'active' : ''}`}
                            key={index}
                            onClick={() => setSelectedCity(city.label)}
                        >{city.label} <Image src={chevRight} alt="Ícone"/></div>
                    ))
                        :
                        <div className="select-container">
                            <select name="#" id="" value={selectedCity} onChange={(e) => setSelectedCity(e.target.value)}>
                                {contactCenter.map((city, index) => (
                                     <option key={index} value={city.label}>{city.label}</option>
                                ))}
                            </select>
                        </div>
                    }
                </div>
                <div className="contact-info">
                    {contactCenter.filter((cities:any) => cities.label === selectedCity).map((city:any, index:number) => (
                    <div key={index} className="address-info">
                        <h1 className="address-title">{city.label}</h1>
                        <p className="address-street">{city.address}</p>
                        <p className="address-route">Trace sua rota</p>
                        <div className="route">
                            <Image src={waze} alt="Ícone waze" />
                            <Image src={gmaps} alt="Ícone google maps" />
                        </div>
                        <p className="address-phone">{city.phone}</p>
                        <p className="address-mail">{city.email}</p>
                    </div>
                    ))}

                    <div className="message">
                        <div className="message-title-wrap">
                            <h1 className="message-title">MENSAGEM</h1>
                            <p className="message-info">Preencha os dados e em breve um consultor especialista entrará em contato.</p>
                        </div>
                        <div className="message-department">
                            <p className="message-info">Escolha o setor com o qual você deseja falar:</p>
                            <div className="select-container">
                                <select name="#" id="">
                                    <option value="Comercial" selected>Comercial</option>
                                </select>
                            </div>
                        </div>
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
                            <div className="right-container">
                                <input name='accept' type="checkbox" id="accept" />
                                <label htmlFor='accept'>
                                    A Conrado respeita sua privacidade e utiliza seus dados pessoais para contatá-lo por e-mail ou telefone aqui registrados. Para saber mais, acesse nossa Política de Privacidade. Ao clicar em "Enviar", você concorda em permitir que a Conrado armazene e processe os dados pessoais fornecidos por você para a finalidade informada.
                                </label>
                            </div>
                            <ButtonPrimary text="ENVIAR" onClick={() => alert("")} classStyle="#5C635E" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="map">
                mapa
            </div>
        </main>
    );
}
