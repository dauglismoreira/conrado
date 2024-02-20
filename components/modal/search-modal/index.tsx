import './index.css'
import Image from "next/image";
import search from "../../../assets/searchOr.svg";
import close from "../../../assets/close.svg";
import {useEffect, useState} from "react";

interface SearchModal {
    open: boolean,
    onClose: () => void
}

export default function SearchModal({open, onClose}: SearchModal){
    const handleCloseModal = () => {
        onClose();
    };

    return <>
        {
            open &&
            <div className="search-modal">
                <button onClick={handleCloseModal} className="close"><Image src={close} alt="Botão Fechar" /></button>
                <div className="container">
                    <div className="search-box">
                        <input type="text" placeholder="O que você procura?"/>
                        <Image src={search} alt='Ícone pesquisar'/>
                    </div>
                </div>
            </div>
        }
    </>
}