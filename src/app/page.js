"use client";
import Contact from "@/components/Contact";
import Portfolio from "@/components/Portfolio";
import NavBar from "@/components/NavBar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Count from "@/components/Count";
import Faq from "@/components/Faq";
import Message from "@/components/Message";
import Footer from "@/components/Footer";
import ConnectSheet from "../components/ConnectSheet";
import Connect from "../components/Connect";
import { ToggleProvider } from "@/components/contexts/toggleContexts";
import BottomSheet from "@/components/BottomSheet";
import ContactContent from "@/components/ContactContent";
// import { imageData } from "./lib/data";
import { heroImages } from "./lib/data";
import ImageGrid from "@/components/Hero";
const Page = () => {
  return (
    <ToggleProvider>
      <main className="max-w-full">
        <NavBar />
        <ConnectSheet height="20svh">
          <Connect />
        </ConnectSheet>
        <BottomSheet height="20svh">
          <ContactContent />
        </BottomSheet>
        <ImageGrid images={heroImages} />
        <Count />
        <Portfolio />
        <About />
        <Contact />
        <Faq />
        <Message />
        <Footer />
      </main>
    </ToggleProvider>
  );
};
export default Page;
