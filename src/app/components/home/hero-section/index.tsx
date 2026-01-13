"use client";

import Image from "next/image";
import { getImgPath } from "@/utils/image";

const Hero = () => {
  const resumeUrl = "/resume/Sumeet-Goenka-Resume.pdf";

  const whatsappNumber = "917014700834";
  const whatsappMessage =
    "Hi Sumeet, I reviewed your portfolio and would like to connect.";

  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  return (
    <section className="relative hero-section overflow-hidden min-h-screen pt-12 pb-12 lg:pb-30">
      <div className="container mx-auto px-4 pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

          {/* Text */}
          <div className="flex flex-col gap-6 max-w-2xl z-10 text-center lg:text-left items-center lg:items-start">

            <div className="flex items-center gap-4">
              <h1 className="text-4xl md:text-6xl font-bold">
                Hi, I’m Sumeet
              </h1>
              <Image
                src={getImgPath("/images/home/banner/wave-icon.svg")}
                alt="wave"
                width={40}
                height={40}
              />
            </div>

            <h2 className="text-3xl md:text-5xl font-semibold text-primary">
              Full Stack Developer
            </h2>

            <p className="text-secondary max-w-xl text-base md:text-lg">
              I design and build fast, reliable websites and web applications for startups
              and growing businesses, with a strong focus on performance, clean design,
              and great user experience.
            </p>

            {/* Minimal CTA */}
            <div className="w-full mt-6 flex flex-col sm:flex-row gap-3 sm:gap-4">

              {/* Primary */}
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="
      w-full sm:w-auto
      px-6 py-3.5
      rounded-lg
      bg-black text-white
      font-medium
      text-center
      hover:bg-black/90
      transition
    "
              >
                Chat on WhatsApp
              </a>

              {/* Secondary */}
              <a
                href="#projects"
                className="
      w-full sm:w-auto
      px-6 py-3.5
      rounded-lg
      border border-black/20
      text-black
      font-medium
      text-center
      hover:border-black
      transition
    "
              >
                View Projects
              </a>

              {/* Tertiary */}
              {/* <a
                href={resumeUrl}
                download
                className="
      w-full sm:w-auto
      px-6 py-3.5
      rounded-lg
      text-black/70
      font-medium
      text-center
      hover:text-black
      transition
    "
              >
                Download Resume
              </a> */}

            </div>

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
          alt="Sumeet Goenka"
          width={685}
          height={650}
        />
      </div>
    </section>
  );
};

export default Hero;
