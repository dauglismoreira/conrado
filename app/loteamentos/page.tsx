'use client';
import Header from "@/components/ui/header";
import Footer from "@/components/ui/footer";
import './index.css'
import Container from "@/components/ui/container";
import TitleFilter from "@/components/ui/title-filter";
import SubdivisionCard from "@/components/ui/subdivision-card";
import {placeholder} from "@/components/helpers/placeholder";


export default function SubdivisionList() {
    const subdivisionCard = [1,2,3,4,5,6,7,8,9];
  return (
    <main className="bg-[#F1F2F4]">
      <Header/>
      <Container>
          <div className="subdivisions">
            <TitleFilter title='Conheça nossos loteamentos' />
            <div className="grid-list">
                {
                    subdivisionCard.map((item: any, i: number) => (
                        <SubdivisionCard key={`subdivision-card-${i}`} image={placeholder.negative}
                                         address="Laranjeiras do Sul - Paraná" title="Loteamento Jabuticabal"
                                         size="Lotes a partir de 200 m²"
                                         link="/loteamentos/1"/>
                    ))
                }
            </div>
          </div>
      </Container>
      <Footer/>
    </main>
  );
}
