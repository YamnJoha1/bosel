import Image from 'next/image'

const ContentReiterferien = () => {
  return (
    <div>
      <div className='flex flex-col gap-3 mb-4 text-white'>
        <p>Anreise Montag  ab <span className='text-gold'>10:00-11:00</span> Uhr.</p>
        <p>Die Abreise ist am Samstag ab <span className='text-gold'>10:00 - 10:30</span></p>
        <p>Abenteuer & Erlebnis mit den Pferden!</p>
      </div>

      <p className='my-3 font-semibold'>Neben der täglichen Pferdepflege, dem Reiten und der Teilhabe am Stallalltag wird ein abwechslungsreiches, unterhaltsames und lehrreiches Programm geboten:</p>
      <div className='flex items-center justify-between gap-5 md:flex-row flex-col'>
        <ul className="list-disc list-inside space-y-2 text-md">
          <li>jeden Tag Theorie und Praxis rund ums Pferd</li>
          <li>Pferdepflege, Füttern, Stallalltag</li>
          <li>Bodenarbeit mit den Pferden, Reiten</li>
          <li>Spaziergänge mit und ohne Pferde</li>
          <li>Wettbewerbe (schönstes Pferd, sauberes Zimmer, Mannschaftsspiele)</li>
          <li>Spieleabende</li>
          <li>Nachtwanderung im Herbst</li>
        </ul>
        <Image
          src="/Reit- & Bewegungsplätze/rb2.webp"
          alt='image'
          width={300}
          height={70} 
          loading='lazy'
          objectFit='cover'
          objectPosition='center'
          className='rounded-md border-gold border w-fit h-45 mt-4'
        />
      </div>


    </div>
  )
}

export default ContentReiterferien