"use client";

import { getDataPath } from "@/utils/image";
import Link from "next/link";
import { useEffect, useState } from "react";

interface Project {
  client: string;
  title: string;
  description: string;
  tech?: string;
  liveUrl?: string;
  confidential?: boolean;
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
          <h2 className="text-3xl md:text-5xl font-bold text-black">
            Selected Work
          </h2>
          <p className="text-xl text-black/40 font-mono">( 04 )</p>
        </div>

        {/* Projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {workData.map((project, index) => (
            <div
              key={index}
              className="p-6 md:p-8 border border-black/10 rounded-xl bg-white"
            >
              <p className="text-xs uppercase tracking-wide text-black/40 mb-2">
                {project.client}
              </p>

              <h3 className="text-xl md:text-2xl font-semibold text-black mb-3">
                {project.title}
              </h3>

              <p className="text-black/70 mb-5">
                {project.description}
              </p>

              {/* Footer */}
              <div className="flex items-center justify-between pt-4 border-t border-black/10">

                {/* Tech */}
                <div className="flex flex-wrap gap-2">
                  {project.tech?.split(",").slice(0, 3).map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs px-2.5 py-1 border border-black/10 rounded text-black/60"
                    >
                      {tech.trim()}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                {project.liveUrl ? (
                  <Link
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-black hover:underline"
                  >
                    Visit website →
                  </Link>
                ) : (
                  <span className="text-sm text-black/40">
                    Confidential project
                  </span>
                )}

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default LatestWork;
