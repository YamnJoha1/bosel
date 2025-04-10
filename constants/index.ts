export const NAV_LINKS = [
  {
    key: "reitanlage",
    label: "Reitanlage",
    href: "/reitanlage",
    sublinks: [
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
    question: "Wo befindet sich der Pferdehof?",
    answer: "Der Hof liegt im Herzen der deutschen Landschaft in der Nähe von München.",
  },
  {
    question: "Welche Pferderassen sind verfügbar?",
    answer: "Wir haben eine Auswahl an edlen arabischen Vollblütern und gut ausgebildeten deutschen Pferden.",
  },
  {
    question: "Kann man einen Besuch buchen?",
    answer: "Ja, Besuche können über unser Buchungsformular oder telefonisch vereinbart werden.",
  },
];

// FOOTER SECTION
export const FOOTER_LINKS = [
  {
    title: 'Mehr Erfahren',
    links: [
      'Über uns',
      'Presse',
      'Datenschutz',
      'AGB',
      'Impressum',
      'Kontakt',
    ],
  },
  {
    title: 'Unsere Community',
    links: ['Reiterverein', 'Reiterferien', 'Reitschule'],
  },
];

export const FOOTER_CONTACT_INFO = {
  title: 'Kontakt',
  links: [
    { label: 'Telefon', value: '+49 123 456789' },
    { label: 'E-Mail', value: 'info@pferdehof.de' },
  ],
};

export const SOCIALS = {
  title: 'Folgen Sie uns',
  links: [
    'icons/facebook.svg',
    'icons/instagram.svg',
    'icons/youtube.svg',
    'icons/twitter.svg',
  ],
};

export const FEATURES_CARD_CONTENT = [
    {
      title: "Reitanlage",
      description:
        "Moderne Reithallen und weitläufige Außenplätze für jedes Trainingsniveau.",
      image: "/Home.jpg",
    },
    {
      title: "Pferdepension",
      description:
        "Komfortable Stallungen und liebevolle Betreuung für Ihr Pferd.",
      image: "/Home.jpg",
    },
    {
      title: "Reiterferien",
      description:
        "Unvergessliche Ferien für Kinder und Jugendliche mit Pferden und Natur.",
      image: "/Home.jpg",
    },
  ];
