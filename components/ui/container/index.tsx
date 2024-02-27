'use client';
import './index.css'
import {ReactElement} from "react";

interface Container {
    children: ReactElement,
    margin?:string
}

export default function Container({children, margin}: Container){
    return <div className={`main-container ${margin ? margin : 'mb-12 lg:mb-32'}`}>
        <div className="container-max">
            {
                children
            }
        </div>
    </div>
}