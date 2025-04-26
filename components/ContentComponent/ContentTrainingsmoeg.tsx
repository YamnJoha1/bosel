import Image from 'next/image'
import React from 'react'

const ContentTrainingsmoeg = () => {
  return (
    <div className='text-white gap-10 flex flex-col '>
      <div>
        <h1 className='text-gold text-xl mb-4 font-semibold'>Außenreitplatz</h1>
        <p>
          Die Reitanlage verfügt über ein großzügigen angelegten Sandreitplatz in der
          Größe von 35m x 60m, welcher regelmäßiger Pflege unterlieg um optimale Trainingsbedingungen
          für Pferd und Reiter zu gewährleisten. Der Reitplatz ist durch eine Umzäumung abgegrenzt,
          die vor allem die Arbeit mit jungen Pferden erleichtert, indem sie Anlehnung erzielen und
          ein Herausspringen der Pferde verhindert. Der Platz bietet eine optimale Möglichkeit, die Pferde durch
          Konditions- und Ausdauertraining bestens auf Turniersituationen bzw. auf Prüfungen in Dressur und Springen
          bis zur Schweren Klasse vorzubereiten.
        </p>
      </div>

      <div>
        <h1 className='text-gold text-xl mb-4 font-semibold'>Longierzirkel</h1>
        <div className='flex items-center justify-between gap-5 md:flex-row flex-col-reverse'>
          <Image
            src="/reitanlage/ra1.jpg"
            alt='image'
            width={340}
            height={80}
            loading='lazy'
            objectFit='cover'
            objectPosition='top'
            className='rounded-md border-gold border w-fit h-60'
            />
          <p>
            Den Pferden, Reiterinnen und Reitern steht ein umzäunter Longierzirkel  Ø 20m zur Verfügung.
            Zum einen ist damit ein sehr gutes Arbeiten mit dem Pferd an der Hand möglich und zum anderen
            ist ein weiteres Bewegungsfeld für unsere Pferde geschaffen.
          </p>
        </div>
      </div>

      <div>
        <h1 className='text-gold text-xl mb-4 font-semibold'>Ausreitgelände</h1>
        <p>
          Auf die Genießer von Flora und Fauna  wartet ein wunderschönes Ausreitgelände und lässt
          jedes naturverbundene Reiterherz höher schlagen. Es bietet die Möglichkeit, Ritte
          von unterschiedlicher Länge und unterschiedlichen Schwierigkeitsgraden zu unternehmen z.B.
          für den gemütlichen Ritt durch den Wald sowie flotte Ritte entlang der Elbe und der Nassau.
        </p>
      </div>
    </div>
  )
}

export default ContentTrainingsmoeg