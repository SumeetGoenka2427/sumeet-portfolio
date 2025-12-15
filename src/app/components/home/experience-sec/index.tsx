import React from 'react';

const ExperienceSec = () => {
    const experiences = [
        {
            year: "10/2024 – Present",
            title: "Developer",
            company: "QDegrees Services Pvt. Ltd.",
            type: "Full-time",
            description: "Driving SaaS innovation by integrating React for dynamic dashboards and Node.js for high-concurrency notification systems. Managing 10+ multi-tenant instances while ensuring high availability and seamless platform performance."
        },
        {
            year: "05/2022 – 09/2024",
            title: "Junior Developer",
            company: "QDegrees Services Pvt. Ltd.",
            type: "Full-time",
            description: "Spearheaded the optimization of survey distribution systems using Laravel, resulting in a 40-50% increase in application speed. Integrated complex third-party APIs and built automated scheduling workflows."
        },
        {
            year: "10/2021 – 04/2022",
            title: "PHP Intern",
            company: "QDegrees Services Pvt. Ltd.",
            type: "Internship",
            description: "Gained core expertise in the Laravel ecosystem, focusing on secure access management (RBAC) and assisting in the deployment of scalable web application modules."
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
                                        <div className={`w-[14px] h-[14px] rounded-full border-2 bg-white flex items-center justify-center ${
                                            index === 0 ? 'border-primary' : 'border-black'
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
