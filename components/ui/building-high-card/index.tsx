import './styles.css'
import Image from "next/image";
import suite from "@/assets/suite.svg";
import park from "@/assets/park.svg";
import sizeIcon from "@/assets/size.svg";
import lazer from "@/assets/lazer.svg";
import ButtonPrimary from "@/components/ui/button-primary";

interface BuildingHighCardProps {
    data:any;
}

export default function BuildingHighCard({data}: BuildingHighCardProps){
    return <div className="card-container">
        <div className="content">
            <h3>{data.local}</h3>
            <h1>{data.title}</h1>
            <p>{data.description}
            </p>
            <ul>
                <li><span><Image src={suite} alt="Suítes imagem"/></span> {data.suites}</li>
                <li><span><Image src={park} alt="Suítes imagem"/></span> {data.vagas}</li>
                <li><span><Image src={sizeIcon} alt="Suítes imagem"/></span> {data.area}</li>
                <li><span><Image src={lazer} alt="Suítes imagem"/></span> {data.skill}</li>
            </ul>
            <ButtonPrimary text="CONHEÇA" onClick={() => window.location.href = `/empreendimentos/${data.slug}`} classStyle="#323C3D"/>
        </div>
        <Image className="image" src={data.image} alt="Foto empreendimento"/>
    </div>
}