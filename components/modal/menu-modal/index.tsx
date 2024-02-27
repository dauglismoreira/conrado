import './index.css'
import SocialLink from "@/components/ui/social-link";
import instagram from "../../../assets/instagram.svg";
import facebook from "../../../assets/facebook.svg";
import youtube from "../../../assets/youtube.svg";
import Link from 'next/link';

interface MenuModal {
    open: boolean,
}

export default function MenuModal({open}: MenuModal){

    return <>
            <div className={`menu-modal ${open ? 'active' : ''}`}>
                <div className="container">
                    <svg width="43" height="47" viewBox="0 0 43 47" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M32.7671 2.91212V9.32708C32.7671 10.9331 31.4611 12.2392 29.8643 12.2392H14.0438C12.4423 12.2392 11.1409 10.9331 11.1409 9.32708V7.43951H13.7807V9.32708C13.7807 9.47476 13.8961 9.59937 14.0438 9.59937H29.8596C29.9981 9.59937 30.1227 9.47476 30.1227 9.32708V2.91212C30.1227 2.76443 29.9981 2.63983 29.8596 2.63983H14.0438C13.8961 2.63983 13.7807 2.76443 13.7807 2.91212V4.79969H11.1409V2.91212C11.1409 1.30607 12.4469 0 14.0438 0H29.8596C31.4611 0 32.7625 1.30607 32.7625 2.91212H32.7671Z" fill="#F1F2F4"/>
                        <path d="M15.982 9.59937V7.70257C15.982 7.55489 15.8574 7.43951 15.719 7.43951H2.90289C2.76443 7.43951 2.64906 7.55489 2.64906 7.70257V36.5053C2.64906 36.6437 2.76443 36.7591 2.90289 36.7591H15.719C15.8574 36.7591 15.982 36.6437 15.982 36.5053V12.2392H18.6219V36.5053C18.6219 38.1067 17.3158 39.399 15.719 39.399H2.90289C1.30145 39.399 0 38.1021 0 36.5053V7.70257C0 6.09652 1.30607 4.79968 2.90289 4.79968H15.719C17.3204 4.79968 18.6219 6.09652 18.6219 7.70257V9.59937H15.982Z" fill="#FAAF1D"/>
                        <path d="M10.4162 46.88C8.8194 46.88 7.51794 45.5786 7.51794 43.9817V31.1657C7.51794 29.5642 8.8194 28.2628 10.4162 28.2628H39.2236C40.8204 28.2628 42.1218 29.5642 42.1218 31.1657V43.9817C42.1218 45.5786 40.8204 46.88 39.2236 46.88H10.4162ZM10.4162 30.9072C10.2731 30.9072 10.1578 31.0226 10.1578 31.1657V43.9817C10.1578 44.1248 10.2731 44.2402 10.4162 44.2402H39.2236C39.3666 44.2402 39.482 44.1248 39.482 43.9817V31.1657C39.482 31.0226 39.3666 30.9072 39.2236 30.9072H10.4162Z" fill="#F1F2F4"/>
                    </svg>
                    <ul className="ul mobile-available">
                        <li><a href="/empreendimentos">Edifícios</a></li>
                        <li><a href="/loteamentos">Loteamentos</a></li>
                        <li><a href="/exclusivos">Excluisivos</a></li>
                        <li><a href="/sobre">A Conrado</a></li>
                        <li><a href="/noticias">Notícias</a></li>
                    </ul>
                    <div className="social-mobile-container">
                        <div className="social-links">
                            <SocialLink key="instagram" link='#' icon={instagram}/>
                            <SocialLink key="facebook" link='#' icon={facebook}/>
                            <SocialLink key="youtube" link='#' icon={youtube}/>
                        </div>
                        <Link className="contact-button" href="/contato"><button>Fale com a Conrado</button></Link>
                    </div>
                </div>
            </div>
    </>
}