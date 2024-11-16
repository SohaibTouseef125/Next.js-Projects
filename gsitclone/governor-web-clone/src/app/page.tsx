import Courese from "@/components/Courese";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ImageSider from "@/components/ImageSider";
import Image from "next/image";

export default function Home() {
  return (
   <div>
    <Header/>
    <HeroSection/>
    <ImageSider/>
    <Courese/>
    <Footer/>
   </div>
  );
}
