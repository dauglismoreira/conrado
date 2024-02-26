'use client';
import './index.css'

interface HeaderSingle {
    links: string[]
}

export default function HeaderSingle({links}: HeaderSingle){
    return <div className="header-single">
        <div className="container">
            {
                links?.map((item: string, i: number) => (
                    <a key={item+"-"+i} href={"#"+item}>{item}</a>
                ))
            }
        </div>
    </div>
}