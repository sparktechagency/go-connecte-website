import AboutUs from "@/components/AboutUs";
import Faq from "@/components/Faq";
import HeroSection from "@/components/HeroSection";
import Suggested from "@/components/Suggested";
import Testimonials from "@/components/Testimonials";
import WhyChooseUs from "@/components/WhyChooseUs";
import Image from "next/image";
import { FaStarOfLife } from "react-icons/fa";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <AboutUs />
      <div className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 ">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-10">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
              Suggested For You
            </h2>
            <p className="text-sm sm:text-base text-gray-600">
              Our top picks for comfort, style, and reliability.
            </p>
          </div>
          <Suggested />
        </div>
      </div>
      <WhyChooseUs />
      <div className="bg-gray-50 py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 ">
        {/* Header */}
        <div className="flex flex-col gap-2 text-center mb-8 sm:mb-12">
          <div className="flex items-center justify-center gap-2 mb-4 text-[#00AEA8]">
            <FaStarOfLife />
            <p className="text-sm sm:text-base font-medium ">Faq</p>
          </div>
          <p className="text-lg sm:text-2xl lg:text-4xl font-semibold">
            Frequently Asked Questions
          </p>
          <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto px-4">
            Find quick answers to common questions about our luxury car rentals.
            If you need more info, don&apos;t hesitate to contact us!
          </p>
        </div>
        <Faq />
      </div>
      <Testimonials />
    </div>
  );
}
