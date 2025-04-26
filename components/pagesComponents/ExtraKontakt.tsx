"use client"
import { useState } from "react";
import { Skeleton } from "../ui/skeleton";

const ExtraKonakt = () => {
  const [loading, setLoading] = useState(true);

  return (
    <div className="flex flex-col md:flex-row max-w-full justify-between gap-6 md:gap-10 items-left md:items-center p-2 pt-0">
      <div className="space-y-4 text-sm text-white text-center px-20 md:px-0 md:text-left">
        <p className="font-semibold text-base text-gold">
          Reitsportanlage &quot;An der Bosel&quot;
        </p>

        <div className="flex md:flex-col gap-4 justify-between">
          <p>
            Köhlerstraße 107<br />
            01640 Coswig<br />
            OT Neusörnewitz
          </p>

          <p>
            Tel.: 03523-77 45 00<br />
            Fax: 03523-77 45 01<br />
            Funk: 0172/44 17 297
          </p>
        </div>

        <p>
          Email:{" "}
          <a href="mailto:info@reitanlage-bosel.de" className="text-gold underline">
            info@reitanlage-bosel.de
          </a>
        </p>

        <p>
          Website:{" "}
          <a
            href="https://www.reitanlage-bosel.de"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gold underline"
          >
            www.reitanlage-bosel.de
          </a>
        </p>
      </div>

      {/* Google Map */}
      <div className="flex-1 shadow-lg rounded-lg p-3 w-full relative overflow-hidden">
        {loading && (
          <div className="absolute inset-0 z-10 p-3 flex items-center justify-center">
            <Skeleton className="w-full h-full rounded-xl animate-pulse bg-gray-200" />
          </div>
          )}
        <iframe
          title="Bosel Map"
          src="https://www.google.com/maps?q=Reitsportanlage+An+der+Bosel,+Coswig&output=embed"
          width="100%"
          height="300"
          style={{ border: 0 }}
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
          className="rounded-xl shadow relative z-0"
          onLoad={() => setLoading(false)}
        />
      </div>
    </div>
  );
};

export default ExtraKonakt;
