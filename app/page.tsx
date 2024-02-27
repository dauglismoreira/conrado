import "./index.css";
import Second from "../_sections/second";
import Third from "../_sections/third";
import Fourth from "../_sections/fourth";
import Sexth from "../_sections/sexth";
import Eighth from "../_sections/eighth";
import First from "@/_sections/first";
import Fiveth from "@/_sections/fiveth";
import Seventh from "@/_sections/seventh";
import bgAsset from "@/assets/DETALHE-SIMBOOLO.png";

export default function Home() {
    return (
        <main className="main-home" style={{backgroundImage: `url("${bgAsset.src}"`}}>
            <First/>
            <Second/>
            <Third/>
            <Fourth/>
            <Fiveth/>
            <Sexth/>
            <Seventh/>
            <Eighth/>
        </main>
    );
}
