"use client";

import { getDataPath, getImgPath } from "@/utils/image";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const ContactBar = () => {
  const [contactBarData, setContactBarData] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(getDataPath("/data/page-data.json"));
        if (!res.ok) throw new Error("Failed to fetch");
        const data = await res.json();
        setContactBarData(data?.contactBar);
      } catch (error) {
        console.error("Error fetching contact bar data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <section className="border-t border-black/10">
      <div className="container">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 py-5">

          {/* Contact Items */}
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4">

            {contactBarData?.contactItems?.map(
              (item: any, index: number) => {
                const href =
                  item.type === "email"
                    ? `mailto:${item.value}`
                    : item.type === "phone"
                      ? `tel:${item.value}`
                      : item.type === "whatsapp"
                        ? `https://wa.me/${item.value}`
                        : null;

                if (!href) return null;

                return (
                  <a
                    key={index}
                    href={href}
                    target={item.type === "whatsapp" ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="
                      flex items-center gap-2
                      text-sm md:text-base
                      text-black/70
                      hover:text-black
                      transition
                    "
                  >
                    <Image
                      src={getImgPath(item.icon)}
                      alt={item.label}
                      width={20}
                      height={20}
                    />
                    <span>{item.label}</span>
                  </a>
                );
              }
            )}
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            {contactBarData?.socialItems?.map(
              (
                item: {
                  platform: string;
                  icon: string;
                  link: string;
                },
                index: number
              ) => (
                <Link
                  key={index}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.platform}
                  className="opacity-70 hover:opacity-100 transition"
                >
                  <Image
                    src={item.icon}
                    alt={item.platform}
                    width={22}
                    height={22}
                  />
                </Link>
              )
            )}
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactBar;
