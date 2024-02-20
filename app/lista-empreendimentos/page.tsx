'use client';
import Header from "@/components/ui/header";
import Footer from "@/components/ui/footer";
import './index.css'
import Container from "@/components/ui/container";
import TitleFilter from "@/components/ui/title-filter";
import imageTest from "@/assets/images/41a45a6ad8358faccf5aed62a29b9f56.png";
import BuildingCard from "@/components/ui/building-card";

export default function BuildingsList() {
    const buildings = [1,2,3,4,5,6];
  return (
    <main>
      <Header/>
      <Container>
          <>
            <TitleFilter title='Conheça nossos edifícios' />
            <div className="grid-list">
                {
                    buildings.map((item: any, i: number) => (
                        <BuildingCard key={`build-card-${i}`} image={imageTest} city="PORTO BELO" address="Porto Belo - Santa Catarina" title="Palazzo Reale" link="" rooms="2 ou 3 suítes" parks="2 vagas" size="90 a 125 m²" btn="SAIBA MAIS" />
                    ))
                }
            </div>
          </>
      </Container>
      <Footer/>
    </main>
  );
}
