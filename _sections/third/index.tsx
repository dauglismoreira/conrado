'use client';
import './index.css'
import Container from "@/components/ui/container";
import TitleSection from "@/components/ui/title-section";
import BuildingHighCard from '@/components/ui/building-high-card';
import { Slide } from '@/components/ui/genericSlider/slide';
import { GenericSlider, GenericSliderRef } from '@/components/ui/genericSlider';
import { useRef, useState } from 'react';
import building from "../../assets/images/b437ad807514f9c928f5654b3aae7971.jpeg";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import useScreenSize from '@/components/hooks/useScreenSize';

export default function Third(){
    const {width, isLargeScreen} = useScreenSize(1420)

    const sliderMock = [
        {
            title:'Palazzo Reale',
            local:'Porto Belo - Santa Catarina',
            description:'Um edifício onde a verdadeira essência de viver em um refúgio real ganha vida. Este empreendimento é um verdadeiro ícone neoclássico, mantendo sempre nossa tradição de excelência.',
            suites:'2 ou 3 suítes',
            vagas:'2 vagas',
            area:'90 a 125 m²',
            skill:'Lazer no Rooftop',
            slug:'1',
            image:building,
            id:1
        },
        {
            title:'Palazzo Reale',
            local:'Porto Belo - Santa Catarina',
            description:'Um edifício onde a verdadeira essência de viver em um refúgio real ganha vida. Este empreendimento é um verdadeiro ícone neoclássico, mantendo sempre nossa tradição de excelência.',
            suites:'2 ou 3 suítes',
            vagas:'2 vagas',
            area:'90 a 125 m²',
            skill:'Lazer no Rooftop',
            slug:'2',
            image:building,
            id:2
        },
        {
            title:'Palazzo Reale',
            local:'Porto Belo - Santa Catarina',
            description:'Um edifício onde a verdadeira essência de viver em um refúgio real ganha vida. Este empreendimento é um verdadeiro ícone neoclássico, mantendo sempre nossa tradição de excelência.',
            suites:'2 ou 3 suítes',
            vagas:'2 vagas',
            area:'90 a 125 m²',
            skill:'Lazer no Rooftop',
            slug:'3',
            image:building,
            id:3
        },
    ]

    const [currentSlidesOrder, setCurrentSlidesOrder] = useState(sliderMock);
    const [slideAuto, setSlideAuto] = useState(true)

    const handleCurrentSlideChange = (slides: any) => {
        setCurrentSlidesOrder(slides)
    };

    const genericSliderRef = useRef<GenericSliderRef | null>(null);

    const handleNextClick = () => {
        genericSliderRef.current && genericSliderRef.current.nextAction();
    };

    const handlePrevClick = () => {
        genericSliderRef.current && genericSliderRef.current.prevAction();
    };


    return <Container>
        <div className="high-buildings">
            <TitleSection title="Edifícios - Lançamentos"
                          subtitle="Conheça os próximos empreendimentos da Conrado e escolha o seu."/>
            <div className="slider-box">
                <div className="slider-navigation">
                    <button onClick={handlePrevClick}><BsArrowLeft /></button>
                </div>
                <div className="slider-size" style={{width:`${!isLargeScreen ? width - 40 : 1180}px`}}>
                    <GenericSlider
                        ref={genericSliderRef}
                        slides={sliderMock}
                        transition={700}
                        containerWidth={!isLargeScreen ? width - 40 : 1180}
                        perView={1}
                        auto={slideAuto}
                        duration={5000}
                        // gap={20}
                        slidesNewOrder={handleCurrentSlideChange}
                    >
                        {currentSlidesOrder.map((slide, index) => (
                            <Slide key={index}>
                                <div
                                    onMouseOver={() => setSlideAuto(false)}
                                    onMouseLeave={() => setSlideAuto(true)}
                                >
                                    <BuildingHighCard data={slide}/>
                                </div>
                            </Slide>
                        ))}
                    </GenericSlider>
                </div>
                <div className="slider-navigation">
                    <button onClick={handleNextClick}><BsArrowRight /></button>
                </div>
            </div>
        </div>
    </Container>
}