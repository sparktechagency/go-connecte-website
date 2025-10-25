import AboutUs from "@/components/AboutUs";
import Faq from "@/components/Faq";
import HeroSection from "@/components/HeroSection";
import Suggested from "@/components/Suggested";
import Testimonials from "@/components/Testimonials";
import WhyChooseUs from "@/components/WhyChooseUs";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <AboutUs />
      <Suggested />
      <WhyChooseUs />
      <Faq />
      <Testimonials />
    </div>
  );
}
