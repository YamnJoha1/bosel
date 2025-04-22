import React from 'react';
import Link from 'next/link';

const ContentReitverein = () => {
  return (
      <ul className="list-disc list-inside space-y-2 text-gold">
        <li>
          <Link href="/Unterlagen/Mitgliedsschaft.pdf">
            <span className="underline cursor-pointer hover:text-goldHover font-semibold transition duration-200">
              Mitgliedsschaft
            </span>
          </Link>
        </li>
        <li>
          <Link href="/Unterlagen/Vereinssatzung_2023.pdf">
            <span className="underline cursor-pointer hover:text-goldHover font-semibold transition duration-200">
              Vereinssatzung hier ansehen
            </span>
          </Link>
        </li>
        <li>
          <Link href="/Unterlagen/Urkunden.pdf">
            <span className="underline cursor-pointer hover:text-goldHover font-semibold transition duration-200">
              Urkunden hier ansehen
            </span>
          </Link>
        </li>
      </ul>
  );
};

export default ContentReitverein;
