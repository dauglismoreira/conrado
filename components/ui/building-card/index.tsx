'use client';
import './index.css'
import Image from "next/image";
import ButtonPrimary from "@/components/ui/button-primary";
import roomsIcon from "../../../assets/room.svg";
import parksIcon from "../../../assets/park.svg";
import sizeIcon from "../../../assets/size.svg";

interface BuildingCard {
    image: any,
    city: string,
    address: string,
    title: string,
    link: string,
    rooms: string,
    parks: string,
    size: string,
    btn: string
}

export default function BuildingCard({image, city, address, title, link, rooms, parks, size, btn}: BuildingCard){
    return <div className="building-card">
        <span className="span-city">{city}</span>
        <Image className="image-building" src={image} alt="Blog Imagem" onClick={() => window.location.href = link} />
        <div className="wrapper">
            <div className="content">
                <h3>{address}</h3>
                <h1>{title}</h1>
                <div className="info">
                    <span><Image src={roomsIcon} alt="Quartos ícone"/> {rooms}</span>
                    <span><Image src={parksIcon} alt="Estacionamento ícone"/> {parks}</span>
                    <span><Image src={sizeIcon} alt="Medidas ícone"/> {size}</span>
                </div>
            </div>
            <ButtonPrimary text={btn} onClick={() => window.location.href = link} classStyle='#5C635E' />
        </div>
    </div>
}