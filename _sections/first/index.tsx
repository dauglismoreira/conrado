'use client';
import './index.css'
import ButtonPrimary from "@/components/ui/button-primary";
import gb from "../../assets/images/Fly bird - A - 02 1.png"

export default function First(){
    return <section className="cover" style={{backgroundImage: `url("${gb.src}")`}}>
        <div className="cover-degree"></div>
        <div className="title">
            <h3>LANÇAMENTO</h3>
            <h1>Residencial MontBlanc.</h1>
            <ButtonPrimary text='CONHEÇA' onClick={() => window.location.href = '/exclusivos/1'} classStyle='#F1F2F4' bgCol="unset"/>
        </div>
    </section>
}