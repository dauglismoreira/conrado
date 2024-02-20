import Header from "../components/ui/header";
import Footer from "@/components/ui/footer";
import Second from "../_sections/second";
import Third from "../_sections/third";
import Fourth from "../_sections/fourth";
import Sexth from "../_sections/sexth";
import Eighth from "../_sections/eighth";
import First from "@/_sections/first";
import Fiveth from "@/_sections/fiveth";
import Seventh from "@/_sections/seventh";

export default function Home() {
    return (
        <main>
            <Header/>
            <First />
            <Second />
            <Third />
            <Fourth />
            <Fiveth />
            <Sexth />
            <Seventh />
            <Eighth />
            <Footer/>
        </main>
    );
}
