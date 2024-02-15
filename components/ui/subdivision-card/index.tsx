'use client';
import './index.css'
import Image from "next/image";
import ButtonPrimary from "@/components/ui/button-primary";
import sizeIcon from "../../../assets/size.svg";

interface SubdivisionCard {
    image: any,
    address: string,
    title: string,
    size: string,
    link: string
}

export default function SubdivisionCard({image, address, title, size, link}: SubdivisionCard){
    return <div className="subdivision-card">
        <Image src={image} alt="Blog Imagem" />
        <div className="container">
            <h3>{address}</h3>
            <h1>{title}</h1>
            <p><Image src={sizeIcon} alt="Ícone tamanho" /> {size}</p>
            <ButtonPrimary text="SAIBA MAIS" onClick={() => alert("click")} classStyle='#5C635E' />
        </div>
    </div>
}