import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const ExtraPferdepensio = () => {
  return (
    <div className='max-container flex flex-col items-center'>
      <h5 className="font-bold text-gold mb-12 mx-auto text-xl">Preis auf Anfrage</h5>

      {/* Bilder & Links */}
      <section className="flex justify-center items-center gap-6 mb-16 flex-wrap">
        {/* Stallungen */}
        <Link
          href="/pferdepension/stallungen"
          className="text-goldhover font-semibold hover:underline text-center mt-2 block"
        >
          <Image
            src="/Stallungen/st14.webp"
            alt="Pferd 1"
            width={120}
            height={120}
            className="object-cover rounded-full min-h-30 min-w-30"
            loading="lazy"
          />
          Stallungen
        </Link>

        {/* Betreuung */}
          <Link
            href="/pferdepension/betreuung-und-fuetterung"
            className="text-goldhover font-semibold hover:underline mt-2 block text-center"
          >
            <Image
              src="/Betreuung & Fütterung/bf2.webp"
              alt="Pferd 2"
              width={120}
              height={120}
              className="object-cover rounded-full min-h-30 min-w-30"
              loading="lazy"
            />
            Betreuung
          </Link>

        {/* Bewegungsplätze */}
          <Link
            href="/pferdepension/reit-und-bewegungsplaetze"
            className="text-goldhover font-semibold hover:underline mt-2 block text-center"
          >
            <Image
              src="/Reit- & Bewegungsplätze/rb2.webp"
              alt="Pferd 3"
              width={120}
              height={120}
              className="object-cover rounded-full min-h-30 min-w-30"
              loading="lazy"
            />
            Bewegungsplätze
          </Link>
      </section>

      {/* Abschlussbox */}
      <section className="bg-[#1a1a1a]/70 p-6 rounded-xl max-w-2xl shadow text-gold">
        <p className="text-center leading-relaxed">
          Weitere Informationen über die Einstellung Ihres Pferdes in unserer
          Pferdepension erfragen Sie bitte telefonisch oder vor Ort!
        </p>
      </section>
    </div>
  )
}

export default ExtraPferdepensio