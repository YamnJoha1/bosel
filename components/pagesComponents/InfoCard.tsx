import React from 'react'

const InfoCard = () => {
  return (
    <aside className="bg-green-800 border shadow-md rounded-2xl p-6 space-y-4 text-sm text-white flex flex-col items-center text-center">
      <img src="/Bosel-Logo.png" alt="Logo" className="w-24 h-auto mb-2" />
      <div className='h-[1px] w-[50%] bg-gold' />
      <p className="font-semibold text-base text-green-800">
        Reitsportanlage "An der Bosel"
      </p>

      <p>
        Köhlerstraße 107<br />
        01640 Coswig<br />
        OT Neusörnewitz
      </p>

      <p>
        Tel:  <span className='text-gold'>03523-77 45 00</span><br />
        Funk: <span className='text-gold'>0172/4417297</span> 
      </p>

      <p>
        Email:{" "}
        <a
          href="mailto:info@reitanlage-bosel.de"
          className="text-blue-600 underline"
        >
          info@reitanlage-bosel.de
        </a>
      </p>

      <p>
        Website:{" "}
        <a
          href="https://www.reitanlage-bosel.de"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 underline"
        >
          www.reitanlage-bosel.de
        </a>
      </p>
    </aside>
  )
}

export default InfoCard