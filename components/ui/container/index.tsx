'use client';
import './index.css'
import {ReactElement} from "react";

interface Container {
    children: ReactElement,
}

export default function Container({children}: Container){
    return <div className="main-container">
        <div className="container-max">
            {
                children
            }
        </div>
    </div>
}