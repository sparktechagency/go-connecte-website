"use client";

import Image from "next/image";
import { bgCovertImage } from "../../../public/images/AllImages";
import { IoIosArrowForward } from "react-icons/io";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function InfoPagesLayout({ children }) {
  const pathname = usePathname();

  const titleMap = {
    "/terms-and-conditions": "T&C",
    "/frequently-asked-questions": "FAQs",
    "/about-us": "About Us",
  };

  const slug = pathname.split("/").pop() || "Page";

  const fallbackTitle = slug
    .replace(/-/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());

  const pageTitle = titleMap[pathname] || fallbackTitle;

  return (
    <html lang="en">
      <body className="relative bg-white">
        <header className="relative h-64 sm:h-80 ">
          <div className="absolute inset-0">
            <Image
              src={bgCovertImage.bgCover}
              alt="Go Connecte - About Us"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/50" />

          {/* Title & Breadcrumb – Centered */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-4">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold drop-shadow-2xl text-center capitalize">
              {/* {pageName.replace("-", " ")} */}
              {fallbackTitle}
            </h1>
            <nav className="absolute -bottom-4 py-2 px-4 rounded-lg text-sm sm:text-base flex items-center gap-2 bg-white/95 text-black z-50 border border-[#DDE1DE]">
              <Link href="/" className="font-semibold hover:text-[#00AEA8]">
                Home
              </Link>

              <span className="">
                <IoIosArrowForward />
              </span>
              <span className="font-semibold capitalize hover:text-[#00AEA8]">
                {pageTitle}
              </span>
            </nav>
          </div>
        </header>

        <main className="relative py-5">{children}</main>
      </body>
    </html>
  );
}
