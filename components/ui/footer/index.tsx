'use client';
import './index.css'
import Image from "next/image";
import bigLogo from "../../../assets/footer-logo.svg";
import SocialLink from "@/components/ui/social-link";
import instagram from "../../../assets/instagram.svg";
import facebook from "../../../assets/facebook.svg";
import youtube from "../../../assets/youtube.svg";

interface Address {
    city: string,
    phone: string
}

export default function Footer(){
    const addresses: Address[] = [
        {
            city: "CURITIBA - PR",
            phone: "(47) 3045-2100"
        },
        {
            city: "GUARAPUAVA - PR",
            phone: "(42) 3304-7000"
        },
        {
            city: "LARANJEIRAS DO SUL - PR",
            phone: "(42) 3635-5619"
        },
        {
            city: "PORTO BELO - SC",
            phone: "(47) 99172-3454"
        }
    ];

    return <footer className="footer">
        <div className="container">
            <div className="wrapper">
                <div className="logo">
                    <Image src={bigLogo} alt="Logo conrado" />
                </div>
                <div className="actions">
                    <div className="addresses">
                        {
                            addresses.map((item: Address) => (
                                <div className="address">
                                    <h3>{item.city}</h3>
                                    <p>{item.phone}</p>
                                </div>
                            ))
                        }
                    </div>
                    <div className="links">
                        <SocialLink key="instagram" link='#' icon={instagram}/>
                        <SocialLink key="facebook" link='#' icon={facebook}/>
                        <SocialLink key="youtube" link='#' icon={youtube}/>
                        <a className="nav-link" href="#">EDIFÍCIOS</a>
                        <a className="nav-link" href="#">LOTEAMENTOS</a>
                        <a className="nav-link" href="#">EXCLUSIVOS</a>
                        <a className="nav-link" href="#">A CONRADO</a>
                        <a className="nav-link" href="#">BLOG</a>
                        <a className="nav-link" href="#">CONTATO</a>
                    </div>
                </div>
            </div>
            <div className="wrapper">
                <p>CONRADO EMPREENDIMENTOS. TODOS OS DIREITOS RESERVADOS.</p>
                <p>PRIVACIDADE E SEGURANÇA. DESENVOLVIDO POR IMPACTE</p>
            </div>
        </div>
    </footer>
}