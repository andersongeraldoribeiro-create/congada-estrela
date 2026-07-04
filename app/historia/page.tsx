import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

import HeroHistoria from "@/components/historia/HeroHistoria";
import OrigemCongada from "@/components/historia/OrigemCongada";
import HistoriaEstrela from "@/components/historia/HistoriaEstrela";
import EvolucaoFesta from "@/components/historia/EvolucaoFesta";
import IgrejaRosario from "@/components/historia/IgrejaRosario";
import Centenario from "@/components/historia/Centenario";
import CongadaHoje from "@/components/historia/CongadaHoje";
import LinhaTempo from "@/components/historia/LinhaTempo";

export default function HistoriaPage() {
  return (
    <>
      <Header />

      <main className="bg-[#F8F7F3] text-[#10233F]">
        <HeroHistoria />
        <HistoriaEstrela />
        <OrigemCongada />
        <EvolucaoFesta />
        <IgrejaRosario />
        <Centenario />
        <CongadaHoje />
        <LinhaTempo />
      </main>

      <Footer />
    </>
  );
}
