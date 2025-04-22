'use client'

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const ContentPferdepension: React.FC = () => {
  return (
    <div className="mx-auto text-white px-4 py-8 max-w-5xl">
      {/* Abschnitt 1 */}
      <section className="mb-10">
        <h3 className="font-bold text-gold mb-4">Wir bieten Ihrem Pferd oder Pony:</h3>
        <ul className="list-disc list-inside space-y-1 text-sm">
          <li>ideale Bedingungen für eine artgerechte Pferdehaltung</li>
          <li>großräumige und gepflegte Unterkünfte</li>
          <li>bedarfsgerechte, qualitätsvolle Fütterung</li>
          <li>liebevolle und fachkundige Betreuung</li>
          <li>vielfältige Trainings- und Ausbildungsmöglichkeiten</li>
          <li>
            Bewegung und Sozialkontakt auf arrondierenden Sommerweiden (halb- und
            ganztags) bzw. Allwetterpaddocks mit Heuraufen
          </li>
        </ul>
      </section>

      {/* Abschnitt 2 */}
      <section className="mb-10">
        <h3 className="font-bold text-gold mb-4">Für Reit- und Trainingsmöglichkeiten stehen zur Verfügung:</h3>
        <ul className="list-disc list-inside space-y-1 text-sm">
          <li>eine helle, moderne Reithalle 22m x 60m</li>
          <li>Reitplatz: Sand 35m x 60m</li>
          <li>Longierzirkel mit ∅ 20m</li>
          <li>wunderschönes, naturnahes Ausreitgelände</li>
        </ul>
      </section>

      {/* Preis */}
      <section className="mb-12">
        <h5 className="font-bold text-gold">Preis auf Anfrage</h5>
      </section>

      {/* Bilder & Links */}
      <section className="flex justify-center items-center gap-6 mb-16 flex-wrap">
        {/* Stallungen */}
        <Link
          href="/pferdepension/stallungen"
          className="text-green-500 hover:underline text-center mt-2 block"
        >
          <Image
            src="/Stallungen/st14.jpg"
            alt="Pferd 1"
            width={136}
            height={136}
            className="object-cover rounded-full mx-auto"
          />
          Stallungen
        </Link>

        {/* Betreuung */}
          <Link
            href="/pferdepension/betreuung-und-fuetterung"
            className="text-green-500 hover:underline mt-2 block text-center"
          >
            <Image
              src="/Betreuung & Fütterung/bf2.jpg"
              alt="Pferd 2"
              width={136}
              height={136}
              className="object-cover rounded-full mx-auto"
            />
            Betreuung
          </Link>

        {/* Bewegungsplätze */}
          <Link
            href="/pferdepension/reit-und-bewegungsplaetze"
            className="text-green-500 hover:underline mt-2 block text-center"
          >
            <Image
              src="/Reit- & Bewegungsplätze/rb2.jpg"
              alt="Pferd 3"
              width={136}
              height={136}
              className="object-cover rounded-full mx-auto"
            />
            Bewegungsplätze
          </Link>
      </section>

      {/* Abschlussbox */}
      <section className="bg-[#1a1a1a]/70 p-6 rounded-xl shadow text-gold">
        <p className="text-left leading-relaxed">
          Weitere Informationen über die Einstellung Ihres Pferdes in unserer
          Pferdepension erfragen Sie bitte telefonisch oder vor Ort!
        </p>
      </section>
    </div>
  )
}

export default ContentPferdepension
