
const ExtraKonakt = () => {
  return (
    <div className="flex flex-col md:flex-row w-full justify-between gap-6 md:gap-10 items-center p-2 pt-0">
      <div className="space-y-4 text-sm text-white">
        <p className="font-semibold text-base text-gold">
          Reitsportanlage &quot;An der Bosel&quot;
        </p>

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

        {/* Google Map */}
      </div>
      <div className="flex-1 shadow-lg rounded-lg p-3 w-full">
        <iframe
          title="Bosel Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2463.184444735795!2d13.544490315894801!3d51.13759947957551!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4708939994db7c63%3A0x9f18a2e5794aa542!2sReitsportanlage%20%22An%20der%20Bosel%22!5e0!3m2!1sen!2sde!4v1713200000000!5m2!1sen!2sde"
          width="100%"
          height="300"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="rounded-xl shadow"
        ></iframe>
      </div>
    </div>
  )
}

export default ExtraKonakt