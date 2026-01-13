import React from 'react';

const ExperienceSec = () => {
  const experiences = [
    {
      year: "10/2024 – Present",
      title: "Full Stack Developer",
      company: "QDegrees Services Pvt. Ltd.",
      type: "Full-time",
      description:
        "Building and maintaining modern web applications, including dashboards and internal tools. Focused on performance, scalability, and delivering reliable features used by multiple teams and clients."
    },
    {
      year: "05/2022 – 09/2024",
      title: "Software Developer",
      company: "QDegrees Services Pvt. Ltd.",
      type: "Full-time",
      description:
        "Improved application performance and stability across large-scale systems, integrated third-party services, and delivered features that supported daily business operations."
    },
    {
      year: "10/2021 – 04/2022",
      title: "Software Developer (Intern)",
      company: "QDegrees Services Pvt. Ltd.",
      type: "Internship",
      description:
        "Worked on real production features, assisted in building secure backend functionality, and gained hands-on experience in developing and deploying web applications."
    }
  ];


  return (
    <section id="experience">
      <div className="py-16 md:py-32">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="flex items-center justify-between gap-2 border-b border-black pb-7 mb-9 md:mb-16">
            <h2 className="text-3xl md:text-5xl font-bold">Experience</h2>
            <p className="text-xl text-primary font-mono">( 02 )</p>
          </div>

          {/* Timeline Container */}
          <div className="space-y-0">
            {experiences.map((exp, index) => (
              <div key={index} className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-8 items-start relative pb-12 md:pb-20 last:pb-0">

                {/* 1. Year and Title */}
                <div className="z-10 bg-white">
                  <h3 className="font-bold text-xl mb-1 text-black">{exp.year}</h3>
                  <h4 className="text-lg font-normal text-gray-600">{exp.title}</h4>
                </div>

                {/* 2. Dot and Line Column */}
                <div className="relative h-full flex items-start sm:justify-start">
                  {/* The Vertical Line */}
                  {index < experiences.length - 1 && (
                    <div
                      className="absolute left-[7px] top-[14px] w-[1px] h-full bg-gray-300 z-0"
                      style={{ height: 'calc(100% + 2rem)' }} // Adjusts for the space-y/padding
                    ></div>
                  )}

                  {/* The Dot Container */}
                  <div className="relative z-10 flex items-center h-[28px]">
                    {/* h-[28px] matches the line height of the Title text to keep dot centered with the first line of text */}
                    <div className={`w-[14px] h-[14px] rounded-full border-2 bg-white flex items-center justify-center ${index === 0 ? 'border-primary' : 'border-black'
                      }`}>
                      {index === 0 && (
                        <div className="w-[6px] h-[6px] rounded-full bg-primary"></div>
                      )}
                    </div>
                  </div>

                  {/* Company Name & Type */}
                  <div className="pl-6">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xl text-black font-semibold">{exp.company}</span>
                    </div>
                    <p className="text-sm font-medium px-3 py-0.5 rounded-full bg-gray-100 w-fit text-gray-500">
                      {exp.type}
                    </p>
                  </div>
                </div>

                {/* 3. Description Column */}
                <div className="pl-[38px] sm:pl-0">
                  <p className="leading-relaxed text-base text-secondary">
                    {exp.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSec;
