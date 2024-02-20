'use client';
import './index.css'
import {useState} from "react";

interface TitleFilter {
    title: string
}

export default function TitleFilter({title}: TitleFilter){
    const [filters, setFilters] = useState<any>([]);

    return <div className="title-filter">
        <div className="wrapper">
            <h1>{title}</h1>
            <div className="filters">
                <select name="#" id="#" key="select-1" defaultValue='#'>
                    <option value="#">ESTÁGIO DA OBRA</option>
                    <option value="LANÇAMENTO">LANÇAMENTO</option>
                </select>
                <select name="#" id="#" key="select-2" defaultValue='#'>
                    <option value="#">CIDADE</option>
                    <option value="BALNEÁRIO CAMBORIÚ">BALNEÁRIO CAMBORIÚ</option>
                </select>
                <select name="#" id="#" key="select-3" defaultValue='#'>
                    <option value="#">ESTADO</option>
                    <option value="SANTA CATARINA">SANTA CATARINA</option>
                </select>
            </div>
        </div>
        <div className="active-filters">
            {
                filters.map((item: any, i: number) => (
                    <span key={`filter-${i}`}>{item} X</span>
                ))
            }
            <span>SANTA CATARINA X</span>
            <span>LANÇAMENTO X</span>
            <span>LIMPAR TODOS OS FILTROS</span>
        </div>
    </div>
}