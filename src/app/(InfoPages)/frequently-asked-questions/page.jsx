import Image from "next/image";
import React from "react";
import { imageFaq } from "../../../../public/images/AllImages";
import FAQSection from "@/components/Faq";

export default function FAQ() {
  return (
    <div className="w-full py-8 sm:py-12 lg:py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-14 items-center px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Image Section */}
        <div className="w-full order-2 lg:order-1">
          <div className="relative w-full aspect-square sm:aspect-4/3 lg:aspect-square rounded-xl overflow-hidden shadow-lg">
            <Image
              src={imageFaq.faqImage}
              alt="Faq Image"
              fill
              className="object-cover"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 50vw"
              priority
            />
          </div>
        </div>

        {/* FAQ Section */}
        <div className="w-full order-1 lg:order-2">
          <FAQSection />
        </div>
      </div>
    </div>
  );
}
