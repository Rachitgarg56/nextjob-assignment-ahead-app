import Image from "next/image";
import Navbar from "../components/Navbar";
import HeroSection from "@/components/HeroSection";
import EQbeatsIQ from "@/components/EQbeatsIQ";
import Carousel from "@/components/Carousel";
import MeetAheadCard from "@/components/MeetAheadCard";
import SelfImprovement from "@/components/SelfImprovement";
import BeBestYou from "@/components/BeBestYou";
import Wonder from "@/components/Wonder";
import Test from "@/components/Test";
import WorkWithUs from "@/components/WorkWithUs";
import OpenVacancies from "@/components/Openvacancies";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar/>
      <HeroSection/>
      <EQbeatsIQ/>
      <Carousel/>
      <MeetAheadCard/>
      <SelfImprovement/>
      <BeBestYou/>
      <Wonder/>
      <Test/>
      <WorkWithUs/>
      <OpenVacancies/>
      <Footer/>
    </>
  );
}
