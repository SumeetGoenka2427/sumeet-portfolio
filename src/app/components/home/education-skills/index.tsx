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

            {/* Background */}
            <div>
              <p className="text-sm uppercase tracking-wide text-black/50 mb-5">
                Background
              </p>

              <div className="space-y-4">
                {educationData?.education?.map(
                  (item: any, index: number) => (
                    <div key={index}>
                      <h5 className="text-lg font-medium text-black">
                        {item.title}
                      </h5>
                      <p className="text-black/60">
                        {item.description}
                      </p>
                    </div>
                  )
                )}
              </div>
            </div>

            {/* Skills */}
            <div>
              <p className="text-sm uppercase tracking-wide text-black/50 mb-5">
                Core Skills
              </p>

              <div className="space-y-5">

                <div className="flex items-start gap-4">
                  <span className="text-sm font-medium text-black min-w-[120px]">
                    Frontend
                  </span>
                  <p className="text-sm text-black/70">
                    React, Next.js, HTML, CSS, Responsive UI
                  </p>
                </div>

                <div className="flex items-start gap-4">
                  <span className="text-sm font-medium text-black min-w-[120px]">
                    Backend
                  </span>
                  <p className="text-sm text-black/70">
                    Laravel, PHP, Node.js, Golang
                  </p>
                </div>

                <div className="flex items-start gap-4">
                  <span className="text-sm font-medium text-black min-w-[120px]">
                    APIs
                  </span>
                  <p className="text-sm text-black/70">
                    REST APIs, AJAX, FastAPI
                  </p>
                </div>

                <div className="flex items-start gap-4">
                  <span className="text-sm font-medium text-black min-w-[120px]">
                    Databases
                  </span>
                  <p className="text-sm text-black/70">
                    MySQL, PostgreSQL, Query optimization
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-sm font-medium text-black min-w-[120px]">
                    Cloud
                  </span>
                  <p className="text-sm text-black/70">
                    AWS (EC2), Lambda functions
                  </p>
                </div>

                <div className="flex items-start gap-4">
                  <span className="text-sm font-medium text-black min-w-[120px]">
                    DevOps
                  </span>
                  <p className="text-sm text-black/70">
                    Docker, Git, GitHub, CI/CD basics
                  </p>
                </div>

                <div className="flex items-start gap-4">
                  <span className="text-sm font-medium text-black min-w-[120px]">
                    Deployment
                  </span>
                  <p className="text-sm text-black/70">
                    Vercel, Linux servers, environment setup
                  </p>
                </div>

                <div className="flex items-start gap-4">
                  <span className="text-sm font-medium text-black min-w-[120px]">
                    Third-Party
                  </span>
                  <p className="text-sm text-black/70">
                    SMS, Email, Payment gateways
                  </p>
                </div>

              </div>

              {/* Freelance reassurance */}
              <p className="mt-6 text-sm text-black/50">
                Comfortable working independently or alongside existing teams.
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSkills;
