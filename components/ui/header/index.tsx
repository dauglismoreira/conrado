'use client';
import './index.css'
import Image from "next/image";
import logo from "../../../assets/logo-header.svg";
import ButtonPrimary from "@/components/ui/button-primary";
import search from "../../../assets/search.svg";
import SearchModal from "@/components/modal/search-modal";
import {useState} from "react";

export default function Header(){
    const [open, setOpen] = useState<boolean>(false);

    return <header className="header">
        <div className="container">
            <Image src={logo} alt="Conrado Logo" onClick={() => window.location.href = '/'}/>
            <ul className="ul">
                <li><a href="/lista-empreendimentos">Edifícios</a></li>
                <li><a href="/lista-loteamentos">Loteamentos</a></li>
                <li><a href="/lista-exclusivos">Excluisivos</a></li>
                <li><a href="/sobre">A Conrado</a></li>
                <li><a href="/noticias">Notícias</a></li>
            </ul>
            <div className="action-header">
                <ButtonPrimary text="FALE COM A CONRADO" onClick={() => alert("click")} classStyle="#FAAF1D" />
                <button onClick={() => setOpen(true)}><Image src={search} alt="Botão pesquisar"/></button>
            </div>
        </div>
        <SearchModal open={open} onClose={() => setOpen(false)}/>
    </header>
}