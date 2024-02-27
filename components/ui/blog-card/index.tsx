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
        <Image src={image} alt="Blog Imagem" onClick={() => window.location.href = link} />
        <div className="wrapper">
            <div className="content">
                <h3>{dateTime}</h3>
                <h1>{title}</h1>
            </div>
            <ButtonPrimary text="LEIA MAIS" onClick={() => window.location.href = link} classStyle='#5C635E' bgCol="unset"/>
        </div>
    </div>
}