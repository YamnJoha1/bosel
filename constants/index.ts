export const NAV_LINKS = [
  {
    key: "reitanlage",
    label: "Reitanlage",
    href: "/reitanlage",
    sublinks: [
      { key: "reithalle", label: "Reithalle", href: "/reitanlage/reithalle" },
      { key: "trainingsmoeglichkeiten", label: "Trainingsmöglichkeiten", href: "/reitanlage/trainingsmoeglichkeiten" },
      { key: "aussenanlage", label: "Außenanlage", href: "/reitanlage/aussenanlage" },
      { key: "theater-show", label: "Theater Pferde Show 2016", href: "/reitanlage/theater-show-2016" },
      { key: "hoffest-2015", label: "Hoffest 2015", href: "/reitanlage/hoffest-2015" },
    ],
  },
  {
    key: "pferdepension",
    label: "Pferdepension",
    href: "/pferdepension",
    sublinks: [
      { key: "stallungen", label: "Stallungen", href: "/pferdepension/stallungen" },
      { key: "betreuung", label: "Betreuung & Fütterung", href: "/pferdepension/betreuung-und-fuetterung" },
      { key: "reitplaetze", label: "Reit- & Bewegungsplätze", href: "/pferdepension/reit-und-bewegungsplaetze" },
    ],
  },
  { key: "ausbildung", label: "Ausbildung", href: "/ausbildung" },
  { key: "reitschule", label: "Reitschule", href: "/reitschule" },
  { key: "reiterferien", label: "Reiterferien", href: "/reiterferien" },
  { key: "reitverein", label: "Reitverein", href: "/reitverein" },
  { key: "kontakt", label: "Kontakt", href: "/kontakt" },
];

export const faqs = [
  {
    question: "Reiterferien für Kinder",
    answer: "Es werden Ferienprogramme für Kinder am Ostern ,Herbst und Sommer angeboten, die Reiten und Pferdepflege beinhalten.",
  },
  {
    question: "Pferdepension",
    answer: "Wir bieten Plätze für die Unterbringung von Pferden (aktuell freie Boxen).",
  },
  {
    question: "Reitschule",
    answer: "Es gibt Reitstunden für Anfänger und Fortgeschrittene.",
  },
  {
    question: "Ist unsere Anlage weitweg?",
    answer: "Nein ,jeder schafft es,weil es wertvoll ist",
  },
];


export const FOOTER_CONTACT_INFO = {
  title: 'Kontakt',
  links: [
    { label: 'Telefon', value: '03523-77 45 00' },
    { label: 'E-Mail', value: 'info@reitanlage-bosel.de' },
    { label: 'Adresse', value: 'Köhlerstraße 107, 01640 Coswig ' },
  ],
};

export const SOCIALS = {
  title: 'Folgen Sie uns',
  links: [
    'icons/facebook.svg',
    'icons/instagram.svg',
  ],
};

export const FEATURES_CARD_CONTENT = [
    {
      title: "Osterferien 2025",
      description:
        "1. Woche  21.04  bis  26.04.2025",
      image: "/Features/feature-1.webp",
    },
    {
      title: "Sommerferien 2025",
      description:{
        1:"Woche  30.06.  bis  05.07.2025.",
        2:"Woche  07.07.  bis  12.07.2025",
        3:"Woche  14.07.  bis  19.07.2025",
        4:"Woche  21.07.  bis  26.07.2025",
        5:"Woche  28.07.  bis  01.08.2025",
        6:"Woche  04.08.  bis  09.08.2025",
      },
      image: "/Features/feature-2.webp",
    },
    {
      title: "Herbstferien 2025",
      description:{
        1:"Woche  06.10 bis  11.10.2025 .",
        2:"Woche  13.10.  bis  18.10.2025"
      },
      image: "/Features/feature-3.webp",
    },
  ];