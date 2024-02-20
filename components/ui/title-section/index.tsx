'use client';
import './index.css'

interface TitleSection {
    title: string,
    subtitle: string
}

export default function TitleSection({title, subtitle}: TitleSection){
    return <div className="title-section">
        <h1>{title}</h1>
        <h3>{subtitle}</h3>
    </div>
}