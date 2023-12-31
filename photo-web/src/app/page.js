import Hero from "./components/Hero";
import Image from "next/image";
import Navbar from "./components/Navbar";
import Slider from "./components/Slider";
import { SliderData } from "./components/SliderData";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero
        heading="ShutterVerse: Capturing Dreams"
        message="Capturing Moments, Creating Memories."
      />
      <Slider slides={SliderData} />
      <Contact />
    </div>
  );
}
