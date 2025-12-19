"use client";

import Image from "next/image";
import { getImgPath } from "@/utils/image";

const Hero = () => {
  const handleDownloadPDF = () => {
    window.print();
  };

  return (
    <section className="relative hero-section overflow-hidden min-h-screen pt-12 pb-12 lg:pb-30">

      <div className="container mx-auto px-4 pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

          {/* Text Content */}
          <div className="flex flex-col gap-4 md:gap-6 max-w-2xl z-10 text-center lg:text-left items-center lg:items-start">
            <div>
              <div className="flex items-center justify-center lg:justify-start gap-4 md:gap-8 mb-2">
                <h1 className="text-4xl md:text-6xl font-bold">
                  I'm Sumeet
                </h1>
                <div className="wave w-10 h-10 md:w-16 md:h-16">
                  <Image
                    src={getImgPath("/images/home/banner/wave-icon.svg")}
                    alt="wave-icon"
                    width={62}
                    height={62}
                  />
                </div>
              </div>

              <h2 className="text-3xl md:text-5xl font-semibold text-primary">
                Full Stack Developer
              </h2>
            </div>

            <p className="text-secondary max-w-md xl:max-w-xl text-base md:text-lg">
              Specializing in building scalable SaaS platforms and high-performance web applications.
              With 3+ years of experience in Laravel and MySQL, I focus on delivering
              seamless, user-centric solutions.
            </p>

            {/* PDF DOWNLOAD BUTTON IN HERO */}
            <button
              onClick={handleDownloadPDF}
              aria-label="Download PDF Resume"
              title="Download PDF Resume"
              className="mt-4 group flex items-center gap-3 border border-primary px-6 py-3 rounded-full hover:bg-primary transition"
            >
              <span className="text-primary group-hover:text-white transition">
                Download Resume
              </span>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-5 h-5 text-primary group-hover:text-white transition"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
            </button>

          </div>

          {/* Mobile Image */}
          <div className="block lg:hidden w-full max-w-sm mx-auto">
            <Image
              src={getImgPath("/images/home/banner/banner-img.png")}
              alt="Sumeet Goenka"
              width={685}
              height={650}
              priority
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>

      {/* Desktop Image */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 hidden lg:block lg:w-1/2 xl:w-[45%]">
        <Image
          src={getImgPath("/images/home/banner/banner-img.png")}
          alt="banner-img"
          width={685}
          height={650}
        />
      </div>
    </section>
  );
};

export default Hero;
