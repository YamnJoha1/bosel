import { ReactNode } from "react";

type PageContent = {
  title: string;
  description: string;
  images?: string[];
  extra?: ReactNode;
};

export const pageContents: Record<string, PageContent> = {
  "reitanlage": {
    title: "Unsere Reitanlage",
    description: `Hier finden Sie alles über unsere Trainingsmöglichkeiten, Außenanlagen und mehr.`,
    images: ["/hero.jpg", "/Home.jpg"],
  },

  "reitanlage/trainingsmoeglichkeiten": {
    title: "Trainingsmöglichkeiten",
    description: `Ein Überblick über unsere Reithalle, Longierzirkel und Außenplätze.`,
    images: ["/theater1.jpg", "/theater2.jpg"],
  },

  "reitanlage/reithalle": {
    title: "Reithalle",
    description: `Unsere moderne Reithalle ist ganzjährig nutzbar und bietet ideale Trainingsbedingungen.`,
    images: ["/reithalle1.jpg"],
  },

  "reitanlage/aussenanlage": {
    title: "Außenanlage",
    description: `Großzügige Außenplätze und Galoppstrecken im Grünen – perfekt für jede Reiteinheit.`,
    images: ["/aussen1.jpg", "/aussen2.jpg"],
  },

  "reitanlage/theater-show-2016": {
    title: "Theater Pferde Show 2016",
    description: `Ein Rückblick auf unsere spektakuläre Pferdeshow im Jahr 2016.`,
    images: ["/show1.jpg", "/show2.jpg"],
  },

  "reitanlage/hoffest-2015": {
    title: "Hoffest 2015",
    description: `Ein gelungenes Hoffest mit tollen Vorführungen, Musik und kulinarischem Genuss.`,
    images: ["/hoffest1.jpg", "/hoffest2.jpg"],
  },

  "pferdepension": {
    title: "Pferdepension",
    description: `Wir bieten liebevolle Betreuung, moderne Stallungen und individuelle Fütterung.`,
    images: ["/pension1.jpg"],
  },

  "pferdepension/stallungen": {
    title: "Stallungen",
    description: `Helle, luftige Boxen mit täglichem Auslauf und bester Pflege.`,
    images: ["/stall1.jpg", "/stall2.jpg"],
  },

  "pferdepension/betreuung-und-fuetterung": {
    title: "Betreuung & Fütterung",
    description: `Individuelle Futterpläne und liebevolle Betreuung durch erfahrenes Personal.`,
    images: ["/fuetterung.jpg"],
  },

  "pferdepension/reit-und-bewegungsplaetze": {
    title: "Reit- & Bewegungsplätze",
    description: `Abwechslungsreiche Bewegungsmöglichkeiten: Longierzirkel, Führanlage, Sandplatz.`,
    images: ["/reitplatz1.jpg"],
  },

  "ausbildung": {
    title: "Ausbildung",
    description: `Ob Anfänger oder Fortgeschrittene – wir bieten qualifizierten Reitunterricht für alle Altersgruppen.`,
    images: ["/ausbildung.jpg"],
  },

  "reitschule": {
    title: "Reitschule",
    description: `Unsere Reitschule vermittelt Freude am Reiten mit professionellen Trainern und gut ausgebildeten Pferden.`,
    images: ["/schule.jpg"],
  },

  "reitverein": {
    title: "Reitverein",
    description: `Gemeinsam stark – unser Reitverein fördert Sport, Gemeinschaft und Nachwuchs.`,
    images: ["/verein.jpg"],
  },

 "kontakt": {
  title: "Kontakt",
  description: `So erreichen Sie uns – wir freuen uns auf Ihre Nachricht oder Ihren Besuch!`,
  images: ["/kontakt.jpg"],
  extra: (
    <div className="flex flex-col md:flex-row w-full justify-between gap-6 md:gap-10 items-center p-2">
      <div className="space-y-4 text-sm text-gray-700">
        <p className="font-semibold text-base text-green-800">
          Reitsportanlage "An der Bosel"
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
          <a href="mailto:info@reitanlage-bosel.de" className="text-blue-600 underline">
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
  ),
},


  "reiterferien": {
    title: "Reiterferien 2025",
    description: `Osterferien, Sommerferien und Herbstferien – hier finden Sie alle Termine und Preise.

An-/Abreise:
Die Anreise erfolgt am Anreisetag ab 10 Uhr, die Abreise erfolgt am Abreisetag bis 11 Uhr.

Unterkunft:
Mehrbettzimmer auf dem Gelände der Reitanlage, WC, Dusche, Aufenthaltsraum.

Verpflegung:
Frühstück, Mittagessen, Abendbrot.

Möchten Sie Ihre Kinder anmelden? Bitte Formular ausdrucken und senden.`,
    extra: (
      <div className="grid md:grid-cols-3 gap-4">
        <div className="bg-green-50 p-4 rounded-xl shadow">
          <h3 className="font-bold text-green-800 mb-2">Osterferien 2025</h3>
          <p>21.04 – 26.04.2025</p>
          <p className="font-semibold">400,00 € pro Kind</p>
        </div>
        <div className="bg-yellow-50 p-4 rounded-xl shadow">
          <h3 className="font-bold text-yellow-800 mb-2">Sommerferien 2025</h3>
          <ul className="list-disc list-inside space-y-1 text-sm">
            <li>30.06 – 05.07</li>
            <li>07.07 – 12.07</li>
            <li>14.07 – 19.07</li>
            <li>21.07 – 26.07</li>
            <li>28.07 – 01.08</li>
            <li>04.08 – 09.08</li>
          </ul>
          <p className="font-semibold mt-2">400,00 € pro Woche</p>
        </div>
        <div className="bg-orange-50 p-4 rounded-xl shadow">
          <h3 className="font-bold text-orange-800 mb-2">Herbstferien 2025</h3>
          <div className="flex flex-1 flex-col justify-between">
          <p>06.10 – 18.10.2025</p>
          <p className="font-semibold">400,00 € pro Kind</p>
          </div>
        </div>
      </div>
    ),
    images: ["/ferien1.jpg", "/ferien2.jpg"],
  },
};
