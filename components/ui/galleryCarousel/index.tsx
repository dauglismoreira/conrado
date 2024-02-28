import useScreenSize from '@/components/hooks/useScreenSize';
import './styles.css'
import { useRef, useState } from 'react';
import { GenericSlider, GenericSliderRef } from '../genericSlider';
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { Slide } from '../genericSlider/slide';
import Fancybox from '@/app/utils/Fancybox';

export const GalleryCarousel = ({data}: any) => {
    const {width, isLargeScreen} = useScreenSize(1420)

    const [currentSlidesOrder, setCurrentSlidesOrder] = useState(data);
    const [slideAuto, setSlideAuto] = useState(true)
    const [activeSlide, setActiveSlide] = useState(1)

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

    const handleSlideChange = (activeSlideId: number) => {
        setActiveSlide(activeSlideId);
    };

    return(
        <>
        <div className="enterprise-slider">
            <div className="slider-size" style={{width:`${!isLargeScreen ? width - 20 : 820}px`}}>
                <GenericSlider
                    ref={genericSliderRef}
                    slides={data}
                    transition={700}
                    containerWidth={!isLargeScreen ? width - 20 : 820}
                    perView={!isLargeScreen ? 1.7 : 2}
                    auto={slideAuto}
                    duration={5000}
                    gap={10}
                    onSlideChange={handleSlideChange}
                    slidesNewOrder={handleCurrentSlideChange}
                >
                    {currentSlidesOrder.map((slide:any, index:number) => (
                        <Slide key={index}>
                            <div
                                onMouseOver={() => setSlideAuto(false)}
                                onMouseLeave={() => setSlideAuto(true)}
                            >
                            <Fancybox
                                key={index}
                                options={{ infinite: false }}
                                href={slide.src.src}
                                delegate="[data-fancybox='gallery']"
                            >
                                {/*eslint-disable-next-line @next/next/no-img-element*/}
                                <img
                                    className="enterprise-photo"
                                    src={slide.src.src}
                                    alt={slide.alt}
                                    data-fancybox="gallery"
                                    data-src={slide.src.src}
                                ></img>
                            </Fancybox>
                            </div>
                        </Slide>
                    ))}
                </GenericSlider>
            </div>
        </div>
        <div className="slider-navigation">
            <div className="arrows">
                <button onClick={handlePrevClick}><BsArrowLeft /></button>
                <span>{activeSlide}/{data.length}</span>
                <button onClick={handleNextClick}><BsArrowRight /></button>
            </div>
            <p>clique para ampliar as imagens</p>
        </div>
        </>
    )
}