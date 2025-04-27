"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FOOTER_CONTACT_INFO, SOCIALS } from "@/constants";

const InfoCard = () => {
  const emailInfo = FOOTER_CONTACT_INFO.links.find(link => link.label.toLowerCase().includes("e-mail"));
  const phoneInfo = FOOTER_CONTACT_INFO.links.find(link => link.label.toLowerCase().includes("telefon"));
  const addressInfo = FOOTER_CONTACT_INFO.links.find(link => link.label.toLowerCase().includes("adresse"));

  return (
    <aside className="relative max-h-fit bg-primary shadow-md rounded-2xl p-6 space-y-4 text-sm text-white flex flex-col items-center text-center">
      <Image
        src="/Bosel-Logo.webp"
        alt="Logo"
        width={96}
        height={96}
        className="mb-2 h-auto w-24"
        loading="lazy"
      />
      <div className="h-[1px] w-[50%] bg-gold" />

      <p className="font-semibold text-base text-gold">
        Reitsportanlage &quot;An der Bosel&quot;
      </p>

      {/* Adresse */}
      {addressInfo && (
        <p>
          {addressInfo.value.split(",").map((line, idx) => (
            <React.Fragment key={idx}>
              {line.trim()}
              <br />
            </React.Fragment>
          ))}
        </p>
      )}

      {/* Telefon */}
      {phoneInfo && (
        <p>
          Tel:{" "}
          <a href={`tel:${phoneInfo.value}`} className="text-gold underline">
            {phoneInfo.value}
          </a>
        </p>
      )}

      {/* E-Mail */}
      {emailInfo && (
        <p>
          Email:{" "}
          <Link href={`mailto:${emailInfo.value}`} target="_blank" className="text-gold underline">
            {emailInfo.value}
          </Link>
        </p>
      )}

      {/* Website */}
      <p>
        Website:{" "}
        <Link
          href="/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gold underline"
        >
          www.reitanlage-bosel.de
        </Link>
      </p>
      <div>
        {SOCIALS.links.map((link, i) => (
          <Link href={link.href} key={i} target="_blank" rel="noopener noreferrer" className="inline-block mx-2 mt-3">
            <Image src={link.icon} alt="social" width={30} height={30} loading="lazy" />
          </Link>
        ))}
      </div>
    </aside>
  );
};

export default InfoCard;
