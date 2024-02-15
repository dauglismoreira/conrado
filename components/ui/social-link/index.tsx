'use client';
import './index.css'
import Image from "next/image";

interface SocialLink {
    link: string,
    icon: any
}

export default function SocialLink({link, icon}: SocialLink){
    return <a className="social-link" href={link}><Image src={icon} alt='Botão Link' /></a>
}