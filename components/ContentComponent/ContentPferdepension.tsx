'use client'

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const ContentPferdepension: React.FC = () => {
  return (
    <div className="mx-auto text-white px-4 pt-8 max-w-5xl">
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
      <section className="">
        <h3 className="font-bold text-gold mb-4">Für Reit- und Trainingsmöglichkeiten stehen zur Verfügung:</h3>
        <ul className="list-disc list-inside space-y-1 text-sm">
          <li>eine helle, moderne Reithalle 22m x 60m</li>
          <li>Reitplatz: Sand 35m x 60m</li>
          <li>Longierzirkel mit ∅ 20m</li>
          <li>wunderschönes, naturnahes Ausreitgelände</li>
        </ul>
      </section>      
    </div>
  )
}

export default ContentPferdepension
