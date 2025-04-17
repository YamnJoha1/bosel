import React from "react";
import Image from "next/image";

const InfoCard = () => {
  return (
    <aside className="bg-primary shadow-md rounded-2xl p-6 space-y-4 text-sm text-white flex flex-col items-center text-center">
      <Image
        src="/Bosel-Logo.png"
        alt="Logo"
        width={96}
        height={96}
        className="mb-2 h-auto w-24"
      />
      <div className="h-[1px] w-[50%] bg-gold" />
      <p className="font-semibold text-base text-gold">
        Reitsportanlage &quot;An der Bosel&quot;
      </p>

      <p>
        Köhlerstraße 107<br />
        01640 Coswig<br />
        OT Neusörnewitz
      </p>

      <p>
        Tel: <span className="text-gold">03523-77 45 00</span>
        <br />
        Funk: <span className="text-gold">0172/4417297</span>
      </p>

      <p>
        Email:{" "}
        <a href="mailto:info@reitanlage-bosel.de" className="text-gold underline">
          info@reitanlage-bosel.de
        </a>
      </p>

      <p>
        Website:{" "}
        <a
          href="/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gold underline"
        >
          www.reitanlage-bosel.de
        </a>
      </p>
    </aside>
  );
};

export default InfoCard;
