import { getImgPath } from "@/utils/image";
import Image from "next/image";

const AboutMe = () => {
  // Balanced data: Laravel (Experience) + React/Node (Modern Stack)
  const stats = [
    { count: "03+", label: "Years Experience" },
    { count: "Next.js", label: "Current Stack" }, // Highlights your move to Next.js
    { count: "40%", label: "Perf. Optimization" },
  ];

  const languages = ["English", "Hindi"];

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
            <div className="flex items-center justify-between gap-2 border-b border-dark/20 pb-7">
              <h2 className="text-3xl md:text-5xl font-bold text-dark">About Me</h2>
              <p className="text-xl text-primary font-mono font-medium">( 01 )</p>
            </div>

            <div className="pt-10 xl:pt-16 flex flex-col lg:flex-row gap-10 items-center justify-between">
              <div className="w-full max-w-[303px] h-auto lg:h-[440px] flex justify-center hidden lg:flex">
                <Image
                  src={getImgPath("/images/home/about-me/about-banner-img.svg")}
                  alt="Sumeet Goenka - Full Stack Developer"
                  width={303}
                  height={440}
                  className="w-full h-full object-contain"
                />
              </div>

              <div className="w-full lg:max-w-2xl flex-1 text-left">
                <p className="text-lg text-secondary leading-relaxed">
                  I am a <strong>Full Stack Developer</strong> and <strong>MCA Graduate</strong> with over{" "}
                  <strong>3 years of experience</strong> (May 2022 – Present) building scalable web
                  applications and SaaS platforms. My core expertise is in{" "}
                  <strong>Laravel, Livewire, and MySQL</strong>, with a strong focus on performance,
                  security, and clean architecture.
                </p>

                <p className="text-lg text-secondary mt-3 leading-relaxed">
                  I am also expanding my skills in the{" "}
                  <strong>modern JavaScript ecosystem</strong>, working with{" "}
                  <strong>React, Next.js, and Node.js</strong> to build seamless, user-centric
                  full-stack solutions.
                </p>

                <div className="pt-8 flex flex-col sm:flex-row items-start gap-4">
                  <div className="flex items-center gap-3.5">
                    <Image
                      src={getImgPath("/images/icon/lang-icon.svg")}
                      alt="Tech focus"
                      width={30}
                      height={30}
                    />
                    <p className="text-base xl:text-lg font-semibold text-dark">
                      Tech Focus:
                    </p>
                  </div>

                  <div className="flex flex-wrap items-center gap-2.5">
                    {["Laravel", "Livewire", "MySQL", "PHP","React", "Node.js"].map((tech) => (
                      <span
                        key={tech}
                        className="bg-white shadow-sm border border-gray-100 py-2 px-5 rounded-full text-sm md:text-base font-medium text-secondary"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
