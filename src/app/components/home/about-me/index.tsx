import { getImgPath } from "@/utils/image";
import Image from "next/image";

const AboutMe = () => {
  return (
    <section id="about">
      <div className="relative bg-[#F8F9FA] py-16 md:py-32">
        <div className="absolute top-0 w-full px-4 md:px-9 opacity-50">
          <Image
            src={getImgPath("/images/home/about-me/resume-bg-img.svg")}
            alt="decoration"
            width={1200}
            height={348}
            className="w-full h-auto"
          />
        </div>

        <div className="relative z-10">
          <div className="container mx-auto px-4">
            {/* Header */}
            <div className="flex items-center justify-between gap-2 border-b border-black/20 pb-7">
              <h2 className="text-3xl md:text-5xl font-bold text-black">
                About Me
              </h2>
              <p className="text-xl text-black/40 font-mono">( 01 )</p>
            </div>

            <div className="pt-10 xl:pt-16 flex flex-col lg:flex-row gap-10 items-center justify-between">

              {/* Image */}
              <div className="w-full max-w-[303px] hidden lg:flex justify-center">
                <Image
                  src={getImgPath("/images/home/about-me/about-banner-img.svg")}
                  alt="Sumeet Goenka"
                  width={303}
                  height={440}
                  className="object-contain"
                />
              </div>

              {/* Content */}
              <div className="w-full lg:max-w-2xl flex-1 text-left space-y-4">

                <p className="text-lg text-black/70 leading-relaxed">
                  I’m a <strong>Full Stack Developer</strong> with over{" "}
                  <strong>3 years of experience</strong>, helping startups and small to
                  mid-sized businesses build fast, reliable websites and web applications.
                </p>

                <p className="text-lg text-black/70 leading-relaxed">
                  I focus on clean design, performance, and clear communication — so projects
                  move quickly and stay easy to maintain.
                </p>

                <p className="text-lg text-black/70 leading-relaxed">
                  Whether it’s a new website, a product dashboard, or improving an existing
                  system, I build solutions that support real business goals.
                </p>

              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
