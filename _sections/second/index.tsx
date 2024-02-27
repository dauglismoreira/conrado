'use client';
import './index.css'
import ButtonPrimary from "@/components/ui/button-primary";
import {useState} from 'react';
import { MdKeyboardArrowUp } from "react-icons/md";

export default function Second(){
    const [filterOpen, setFilterOpen] = useState(false)

    return <div className="state-filter">
        <div className="container">
            <h3>Se preferir escolha um estado para ver os empreendimentos</h3>
            <div className="wrapper">
                <ButtonPrimary text="SANTA CATARINA" onClick={() => ""} classStyle="#5C635E" bgCol="#F1F2F4"/>
                <ButtonPrimary text="PARANA" onClick={() => ""} classStyle="#5C635E" bgCol="#F1F2F4"/>
                <ButtonPrimary text="TODOS OS ESTADOS" onClick={() => ""} classStyle="#5C635E" bgCol="#F1F2F4"/>
            </div>
            <div className={`filter-accordion ${filterOpen ? 'active' : ''}`}>
                <div className="accordion-title" onClick={() => setFilterOpen(!filterOpen)}>
                    <span>Filtro avançado</span>
                    <MdKeyboardArrowUp />
                </div>
                <div className="accordion-body">
                    <ButtonPrimary text="SANTA CATARINA" onClick={() => ""} classStyle="#5C635E" bgCol="#F1F2F4"/>
                    <ButtonPrimary text="PARANA" onClick={() => ""} classStyle="#5C635E" bgCol="#F1F2F4"/>
                    <ButtonPrimary text="TODOS OS ESTADOS" onClick={() => ""} classStyle="#5C635E" bgCol="#F1F2F4"/>
                </div>
            </div>
        </div>
    </div>
}