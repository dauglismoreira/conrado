'use client';
import Header from "@/components/ui/header";
import Footer from "@/components/ui/footer";
import './index.css'
import Image from "next/image";
import chevRight from "../../assets/chev-right.svg";
import waze from "../../assets/waze.svg";
import gmaps from "../../assets/googlemaps.svg";
import right from "../../assets/right.svg";
import ButtonPrimary from "@/components/ui/button-primary";

export default function Contact() {
    return (
        <main>
            <Header/>
            <div className="contact">
                <div className="contact-list">
                    <h3>Contato</h3>
                    <p>Escolha com quem você deseja falar</p>
                    <a href="#">Curitiba - PR <Image src={chevRight} alt="Ícone"/></a>
                    <a href="#">Guarapuava - PR <Image src={chevRight} alt="Ícone"/></a>
                    <a href="#">Laranjeiras do Sul - PR <Image src={chevRight} alt="Ícone"/></a>
                    <a href="#">Porto Belo - SC <Image src={chevRight} alt="Ícone"/></a>
                </div>
                <div className="contact-info">
                    <div className="address-info">
                        <h1 className="address-title">Curitiba - PR</h1>
                        <p className="address-street">Rua Prof. Pedro Viriato Parigot de Souza, 3901 - Cidade Industrial</p>
                        <p className="address-route">Trace sua rota</p>
                        <div className="route">
                            <Image src={waze} alt="Ícone waze" />
                            <Image src={gmaps} alt="Ícone google maps" />
                        </div>
                        <p className="address-phone">(41) 3045-2100</p>
                        <p className="address-mail">contato@conradoempreendimentos.com.br</p>
                    </div>
                    <div className="message">
                        <div className="message-title-wrap">
                            <h1 className="message-title">MENSAGEM</h1>
                            <p className="message-info">Preencha os dados e em breve um consultor especialista entrará em contato.</p>
                        </div>
                        <div className="message-department">
                            <p className="message-info">Escolha o setor com o qual você deseja falar:</p>
                            <select name="#" id="">
                                <option value="Comercial" selected>Comercial</option>
                            </select>
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
                            <Image src={right} alt='right-image' />
                            <p>A Conrado respeita sua privacidade e utiliza seus dados pessoais para contatá-lo por e-mail ou telefone aqui registrados. Para saber mais, acesse nossa Política de Privacidade.A o clicar em "Enviar", você concorda em permitir que a Conrado armazene e processe os dados pessoais fornecidos por você para a finalidade informada.</p>
                            <ButtonPrimary text="ENVIAR" onClick={() => alert("")} classStyle="#5C635E" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="map">
                mapa
            </div>
            <Footer/>
        </main>
    );
}
