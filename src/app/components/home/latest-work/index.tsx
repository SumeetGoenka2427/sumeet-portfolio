"use client";
import { getDataPath } from "@/utils/image";
import Link from "next/link";
import { useEffect, useState } from "react";

interface Project {
  client: string;
  slug: string;
  title: string;
  description: string;
  tech?: string;
}

const LatestWork = () => {
  const [workData, setWorkData] = useState<Project[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(getDataPath("/data/work-data.json"));
        const data = await res.json();
        setWorkData(data?.workData || []);
      } catch (error) {
        console.error("Error fetching work data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <section id="projects" className="py-16 md:py-32 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex items-center justify-between gap-2 border-b border-black/10 pb-7 mb-12">
          <h2 className="text-3xl md:text-5xl font-bold">Latest Projects</h2>
          <p className="text-xl text-primary font-mono">( 04 )</p>
        </div>

        {/* Project List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {workData.map((project, index) => (
            <div
              key={index}
              className="group relative p-8 rounded-2xl border border-gray-100 bg-gray-50/50 hover:bg-white hover:border-primary/20 hover:shadow-xl transition-all duration-300"
            >
              <div className="flex flex-col h-full">
                <div className="flex justify-between items-start mb-4">
                  <span className="text-xs font-bold uppercase tracking-widest text-primary/60">
                    {project.client}
                  </span>

                  <Link href={`/projects/${project.slug}`}>
                    <div className="p-2 rounded-full bg-white group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <line x1="7" y1="17" x2="17" y2="7" />
                        <polyline points="7 7 17 7 17 17" />
                      </svg>
                    </div>
                  </Link>
                </div>

                <h3 className="text-2xl font-bold text-dark mb-3">
                  {project.title}
                </h3>

                <p className="text-secondary text-base mb-6 flex-grow">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 pt-4 border-t border-gray-200/60">
                  {project.tech?.split(",").map((tech, i) => (
                    <span
                      key={i}
                      className="text-[11px] font-bold text-gray-500 bg-gray-200/50 px-2 py-1 rounded"
                    >
                      {tech.trim()}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestWork;
