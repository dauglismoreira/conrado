'use client';
import Header from "@/components/ui/header";
import Footer from "@/components/ui/footer";
import './index.css'
import Container from "@/components/ui/container";
import Image from "next/image";
import ButtonPrimary from "@/components/ui/button-primary";
import BlogCard from "@/components/ui/blog-card";
import {placeholder} from "@/components/helpers/placeholder";
import TitleSection from "@/components/ui/title-section";

export default function New() {
    return (
        <main>
            <Header/>
            <Container>
            <div className="new">
                <div className="title-new">
                    <h3>Jul 20, 2023</h3>
                    <h1>Rooftop: benefícios de morar ou comprar apartamento
                        com área de lazer no alto do prédio</h1>
                </div>
            </div>
            </Container>
            <Footer/>
        </main>
    );
}
