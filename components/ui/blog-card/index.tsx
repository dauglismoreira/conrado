'use client';
import './index.css'
import Image from "next/image";
import ButtonPrimary from "@/components/ui/button-primary";

interface BlogCard {
    image: any,
    dateTime: string,
    title: string,
    link: string
}

export default function BlogCard({image, dateTime, title, link}: BlogCard){
    return <div className="blog-card">
        <Image src={image} alt="Blog Imagem" />
        <h3>{dateTime}</h3>
        <h1>{title}</h1>
        <ButtonPrimary text="LEIA MAIS" onClick={() => alert("click")} classStyle='#5C635E' />
    </div>
}