'use client';
import './index.css'
import Container from "@/components/ui/container";
import TitleSection from "@/components/ui/title-section";
import building from "../../assets/images/asdasdasdasd 1.png";
import {useState, useRef} from 'react';
import { GenericSlider, GenericSliderRef } from '@/components/ui/genericSlider';
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { Slide } from '@/components/ui/genericSlider/slide';
import BuildingHighCard from '@/components/ui/building-high-card';
import useScreenSize from '@/components/hooks/useScreenSize';

export default function Fiveth(){
    const {width, isLargeScreen} = useScreenSize(1420)

    const sliderMock = [
        {
            title:'Residencial Vista do Vale',
            local:'Laranjeiras do Sul - Paraná',
            description:'Empreendimento com infraestrutura de grandes centros, mas sem deixar de lado o contato com a natureza. O Residencial Vista do Vale traz à Guarapuava uma nova oportunidade para quem quer morar com segurança, tranquilidade e muito verde.',
            suites:'2 ou 3 suítes',
            vagas:'2 vagas',
            area:'90 a 125 m²',
            skill:'Lazer no Rooftop',
            slug:'1',
            image:building,
            id:1
        },
        {
            title:'Residencial Vista do Vale',
            local:'Laranjeiras do Sul - Paraná',
            description:'Empreendimento com infraestrutura de grandes centros, mas sem deixar de lado o contato com a natureza. O Residencial Vista do Vale traz à Guarapuava uma nova oportunidade para quem quer morar com segurança, tranquilidade e muito verde.',
            suites:'2 ou 3 suítes',
            vagas:'2 vagas',
            area:'Lotes a partir de 200 m²',
            skill:'Lazer no Rooftop',
            slug:'2',
            image:building,
            id:2
        },
        {
            title:'Residencial Vista do Vale',
            local:'Laranjeiras do Sul - Paraná',
            description:'Empreendimento com infraestrutura de grandes centros, mas sem deixar de lado o contato com a natureza. O Residencial Vista do Vale traz à Guarapuava uma nova oportunidade para quem quer morar com segurança, tranquilidade e muito verde.',
            suites:'2 ou 3 suítes',
            vagas:'2 vagas',
            area:'Lotes a partir de 200 m²',
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
            <TitleSection title="Loteamentos - Lançamentos" subtitle="Loteamentos completos da Conrado." />
            <div className="slider-box">
                <div className="slider-navigation">
                    <div onClick={handlePrevClick}><BsArrowLeft /></div>
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
                    <div onClick={handleNextClick}><BsArrowRight /></div>
                </div>
            </div>
        </div>
    </Container>
}