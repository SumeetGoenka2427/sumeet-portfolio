import { getImgPath } from "@/utils/image";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="relative hero-section overflow-hidden pt-28 md:pt-40 pb-12 lg:pb-30 xl:pt-52">
      <div className="container mx-auto px-4">
        {/* Main Grid: 1 column on mobile, 2 columns on large screens */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

          {/* Text Content */}
          <div className="flex flex-col gap-4 md:gap-7 max-w-2xl z-10 text-center lg:text-left items-center lg:items-start">
            <div>
              <div className="flex items-center justify-center lg:justify-start gap-4 md:gap-8 mb-2">
                <h1 className="text-4xl md:text-6xl font-bold">I'm Sumeet</h1>
                <div className="wave w-10 h-10 md:w-16 md:h-16">
                  <Image
                    src={getImgPath("/images/home/banner/wave-icon.svg")}
                    alt="wave-icon"
                    width={62}
                    height={62}
                    className="w-full h-full"
                  />
                </div>
              </div>
              <h2 className="text-3xl md:text-5xl font-semibold text-primary">
                Full Stack Developer
              </h2>
            </div>

            <p className="text-secondary font-normal max-w-md xl:max-w-xl text-base md:text-lg">
              Specializing in building scalable SaaS platforms and high-performance web applications.
              With 3+ years of experience in Laravel and MySQL, I focus on delivering
              seamless, user-centric solutions.
            </p>

            {/* CTA Button Example (Recommended for Portfolios) */}
            <div className="mt-4">
               <a href="#contact" className="bg-blue-600 text-white px-8 py-3 rounded-full font-medium hover:bg-blue-700 transition">
                 View My Work
               </a>
            </div>
          </div>

          {/* Image for Mobile/Tablet (Shows below text on small screens) */}
          <div className="block lg:hidden w-full max-w-sm mx-auto">
            <Image
              src={getImgPath("/images/home/banner/banner-img.png")}
              alt="Sumeet Goenka"
              width={685}
              height={650}
              priority
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      </div>

      {/* Background Image for Desktop (Absolute Positioned) */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 hidden lg:block lg:w-1/2 xl:w-[45%]">
        <Image
          src={getImgPath("/images/home/banner/banner-img.png")}
          alt="banner-img"
          width={685}
          height={650}
          className="w-full h-auto"
        />
      </div>
    </section>
  );
};

export default Hero;
