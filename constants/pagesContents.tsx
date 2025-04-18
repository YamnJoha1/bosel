import ContentReitanlage from "@/components/ContentComponent/ContentReitanlage";
import ContentReiterferien from "@/components/ContentComponent/ContentReiterferien";
import ExtraKonakt from "@/components/pagesComponents/ExtraKontakt";
import ExtraReiterferien from "@/components/pagesComponents/ExtraReiterferien";
import { ReactNode } from "react";

type PageContent = {
  title: string;
  description: string;
  images?: string[];
  extra?: ReactNode;
  content?: ReactNode;
};

export const pageContents: Record<string, PageContent> = {
  "reitanlage": {
    title: "Unsere Reitanlage",
    description: `Hier finden Sie alles über unsere Trainingsmöglichkeiten, Außenanlagen und mehr.`,
    content: (
      <ContentReitanlage />    
    ),
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
    title: "Reitsportverein",
    description: `Gemeinsam stark – unser Reitverein fördert Sport, Gemeinschaft und Nachwuchs.`,
    images: ["/verein.jpg"],
  },

 "kontakt": {
  title: "Kontakt",
  description: 'Melde dich einfach-wir freuen uns, von dir zu hören oder dich mal zu sehen',
  images: ["/kontakt.jpg"],
  extra: (
    <ExtraKonakt />
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
  content: (
    <ContentReiterferien />    
  ),
  extra: (
    <ExtraReiterferien />
  ),
  images: ["/Features/feature-1.jpg", "/Features/feature-2.jpg"],
  },
};
