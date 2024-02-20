'use client';
import './index.css'
import ButtonPrimary from "@/components/ui/button-primary";

export default function Second(){
    return <div className="state-filter">
        <div className="container">
            <h3>Se preferir escolha um estado para ver os empreendimentos</h3>
            <div className="wrapper">
                <ButtonPrimary text="SANTA CATARINA" onClick={() => ""} classStyle="#5C635E" />
                <ButtonPrimary text="PARANA" onClick={() => ""} classStyle="#5C635E" />
                <ButtonPrimary text="TODOS OS ESTADOS" onClick={() => ""} classStyle="#5C635E" />
            </div>
        </div>
    </div>
}