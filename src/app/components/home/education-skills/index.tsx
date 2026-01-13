"use client";

import { getDataPath } from "@/utils/image";
import { useEffect, useState } from "react";

const EducationSkills = () => {
  const [educationData, setEducationData] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(getDataPath("/data/page-data.json"));
        if (!res.ok) throw new Error("Failed to fetch");
        const data = await res.json();
        setEducationData(data?.educationData);
      } catch (error) {
        console.error("Error fetching education data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <section id="skills">
      <div className="border-t border-black/10">
        <div className="container py-16 md:py-32">

          {/* Header */}
          <div className="flex items-center justify-between gap-2 border-b border-black/20 pb-7 mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-black">
              Skills & Background
            </h2>
            <p className="text-xl text-black/40 font-mono">( 03 )</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

            {/* Education */}
            <div>
              <p className="text-sm uppercase tracking-wide text-black/50 mb-4">
                Background
              </p>

              <div className="space-y-4">
                {educationData?.education?.map((item: any, index: number) => (
                  <div key={index}>
                    <h5 className="text-lg font-medium text-black">
                      {item.title}
                    </h5>
                    <p className="text-black/60">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Skills */}
            <div>
              <p className="text-sm uppercase tracking-wide text-black/50 mb-4">
                Core Skills
              </p>

              <div className="flex flex-wrap gap-3">
                {educationData?.skills?.map((skill: any, index: number) => (
                  <span
                    key={index}
                    className="
                      px-4 py-2
                      border border-black/10
                      rounded-md
                      text-sm
                      font-medium
                      text-black/70
                      bg-white
                    "
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSkills;
