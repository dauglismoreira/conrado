'use client';

import './index.css'
import Image from "next/image";
import logo from "../../../assets/logo-header.svg";
import ButtonPrimary from "@/components/ui/button-primary";
import search from "../../../assets/search.svg";
import SearchModal from "@/components/modal/search-modal";
import {useState} from "react";
import MenuModal from '@/components/modal/menu-modal';

export default function Header(){
    const [open, setOpen] = useState<boolean>(false);
    const [openMenu, setMenuOpen] = useState<boolean>(false);

    return <><header className="header">
        <div className="container">
            <Image src={logo} alt="Conrado Logo" onClick={() => window.location.href = '/'}/>
            <ul className="ul desktop-available">
                <li><a href="/empreendimentos">Edifícios</a></li>
                <li><a href="/loteamentos">Loteamentos</a></li>
                <li><a href="/exclusivos">Exclusivos</a></li>
                <li><a href="/sobre">A Conrado</a></li>
                <li><a href="/noticias">Notícias</a></li>
            </ul>
            <div className="action-header">
                <ButtonPrimary className="desktop-available" text="FALE COM A CONRADO" onClick={() => window.location.href = '/contato'} classStyle="#FAAF1D" />
                <button onClick={() => setOpen(!open)}><Image src={search} alt="Botão pesquisar"/></button>
                <div className={` toogle ${openMenu ? 'active' : ''}`} onClick={() => setMenuOpen(!openMenu)}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </div>
    </header>
    <div className="mt-16"></div>
    <SearchModal open={open} onClose={() => setOpen(false)}/>
    <MenuModal open={openMenu} onClose={() => setMenuOpen(false)}/>
    </>
}