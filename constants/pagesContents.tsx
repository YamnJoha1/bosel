import ContentAusbildung from "@/components/ContentComponent/ContenetAusbildung";
import ContentBewegungsplaetze from "@/components/ContentComponent/ContentBewegungsplaetze";
import ContentPferdepension from "@/components/ContentComponent/ContentPferdepension";
import ContentReitanlage from "@/components/ContentComponent/ContentReitanlage";
import ContentReiterferien from "@/components/ContentComponent/ContentReiterferien";
import ContentReitverein from "@/components/ContentComponent/ContentReiterverein";
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
    title: "Reitanlage",
    description: `Hier finden Sie alles über unsere Trainingsmöglichkeiten, Außenanlagen und mehr.`,
    content: (
      <ContentReitanlage />    
    ),
    images: ["/hero.jpg", "/Home.jpg"],
  },

  "reitanlage/trainingsmoeglichkeiten": {
    title: "Trainingsmöglichkeiten",
    description: `fdsfsdcken im Grünen – perfekt für jede Reiteinheit.`,
    
  },

 "reitanlage/reithalle": {
    title: "Reithalle",
    description: `Herzstück unserer Reitanlage bildet die im Jahr 2013 erbaute Reithalle mit den Maßen 22m x 60m. Äu­ßerlich punktet sie durch eine der Landschaft an­gepassten Gestaltung in Holzbaukonstruktion. Großzügige Rundumverglasung, ein Lichtband im Dachfirst und gute Beleuchtung für die Abendstunden gewährleisten jeder­zeit ideale Lichtver­hältnisse und eine taghelle Atmosphäre.

      Das wärmeisolierende Dach reguliert die Temperaturen und bietet somit bei jeder Jahreszeit optimale Trainingsbedingungen. Besonders innovativ ist die Ausführung der Hufschlagbande in Tropfenform. Durch ihr ab­gerundetes Profil, welches dem Körper des Pferdes angepasst ist, gibt sie den Pferden eine sichere Anlehnung.

                    Ein hochwertiger Hallenreitboden, bestehend aus einer abgestimmten Mischung aus speziellem Fein­sand und synthetischen Stoffen, bietet eine hohe Elastizität und ist somit für jede Art des Reitsports ausgerichtet. Selbst bei Belastung und dem Reiten von anspruchsvollen Aufgaben bleibt unser Reitboden trittstabil und ermöglicht einen hervorragenden Reitkomfort. Die Gelenke der Pferde werden geschont, Bänder und Knochen ent­lastet, Schwung sowie Durchlässigkeit werden aktiviert.

                 Eine automatische Beregnungsanlage in der Reithalle trägt wesentlich zur Verbesserung der Elastizität der Tret­schicht bei, vermeidet Staubbildung und sorgt so­mit zur Verbesserung des Hallenklimas.

                        Unsere Zuschauerplätze auf einer seitlichen Tribüne sind für den perfekten Überblick konstruiert.`,
    images: ["/Reithalle/rh1.jpg","/Reithalle/rh2.jpg","/Reithalle/rh3.jpg","/Reithalle/rh4.jpg"],
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
    description: `Sie suchen ein liebevolles und fürsorgliches Zuhause für Ihr Pferd bzw. Pony? - Bei uns sind Sie genau richtig!`,
    content: (
      <ContentPferdepension  />
    ),
  },

  "pferdepension/stallungen": {
    title: "Stallungen",
    description: `Unser Ziel: Glückliche Pferde und ein rundum zufriedener Kunde!
Unserer Pferdepension steht eine Vielzahl großräumiger, komfortabler Boxen zur Verfügung. Zahlreiche Glaselemente, weitläufige Lichtfronten und breite Stallgassen sorgen für viel Hellig- und Großräumigkeit. Ein perfek­tes Abluftsystem sorgt für eine gute Belüftung und ein angenehmes Stallklima zu jeder Jahreszeit. Die Aufteilung in verschiedene Stallbereiche gewährleistet, dass die unterschiedlichen Funktionsbereiche wie Schulbetrieb, Jungpferdetraining und private Einstaller mit einem gewissen Abstand voneinander stattfinden können. Somit wird sichergestellt, dass jedes Pferd eine stressfreie Umgebung genießen und genügend Ruhe bekommen kann.

Alle Stallanlagen verfügen über eigene Sattelkammern mit abschließbaren Sattelschränken zur Unterbringung Ihrer persönlichen Reitutensili­en.

Vor bzw. in jedem Stallgebäude befinden sich Putzplätze für die Pflege Ihres Pferdes. Für eine wohlwollende Abkühlung nach dem Trai­ning oder an heißen Sommertagen sorgt unsere Pferdedusche im Außenbereich.`,
    images: ["/Stallungen/st1.jpg", "/Stallungen/st2.jpg","/Stallungen/st3.jpg", "/Stallungen/st4.jpg","/Stallungen/st5.jpg", "/Stallungen/st6.jpg","/Stallungen/st7.jpg", "/Stallungen/st8.jpg","/Stallungen/st9.jpg", "/Stallungen/st10.jpg","/Stallungen/st11.jpg", "/Stallungen/st12.jpg","/Stallungen/st13.jpg", "/Stallungen/st14.jpg"],
  },

 "pferdepension/betreuung-und-fuetterung": {
    title: "Betreuung & Fütterung",
    description: `Die uns anvertrauten Pferde genießen unsere ganze Aufmerksamkeit und Fürsorge. Ein Team aus erfahrenen Helfern und langjährigen Mitarbeitern sorgt sich fachkundig um das Wohl und die Gesundheit sowie um eine liebevolle Betreuung der Pferde. Die Pferdeboxen werden täglich gemistet und frische Einstreu eingebracht. Durch regelmäßige Boxen- und Stallreini­gungen sichern wir eine saubere, optimale Stallatmo­sphäre. Die Futtergabe erfolgt nach individuellem Bedarf mit Raufutter (Heu, Stroh) und Kraftfutter (Hafer, Gerste etc.). Das Raufutter stammt aus eigener Herstellung und zeichnet sich durch eine hohe Qualität aus. Die Menge an Kraftfutter wird individuell auf den Bedarf Ihres Pferdes abgestimmt. Beheizte Selbsttränken in jeder Box versorgen die Pferde mit frischem und temperiertem Wasser.

Ein wesentlicher Baustein einer artgerechten Pferdehaltung ist die Gesundheit des Tieres zu erhalten bzw. wiederherzustellen. Externe Partner unterstützen uns hier umfassend in der medizinischen Betreuung (Tierarzt, Hufschmied, -orthopädie) und therapeutischen Behandlung (Physiotherapie, Osteopathie, Akupunktur).`,
    images: ["/Betreuung & Fütterung/bf1.jpg","/Betreuung & Fütterung/bf2.jpg","/Betreuung & Fütterung/bf3.jpg","/Betreuung & Fütterung/bf4.jpg","/Betreuung & Fütterung/bf5.jpg","/Betreuung & Fütterung/bf6.jpg","/Betreuung & Fütterung/bf7.jpg","/Betreuung & Fütterung/bf8.jpg"],
  },

  "pferdepension/reit-und-bewegungsplaetze": {
    title: "Reit- & Bewegungsplätze",
    description: `Eine Vielzahl an Trainings- und Bewegungsmöglichkeiten für Ihr Pferd stellen wir Ihnen in unserer Reit­anlage zur Verfügung:`,
    images: ["/Reit- & Bewegungsplätze/rb1.jpg","/Reit- & Bewegungsplätze/rb2.jpg","/Reit- & Bewegungsplätze/rb3.jpg","/Reit- & Bewegungsplätze/rb4.jpg","/Reit- & Bewegungsplätze/rb5.jpg"],
    content: (
      <ContentBewegungsplaetze />
    ),
    
  },

 "ausbildung": {
    title: "Ausbildung",
    description: `Die Ausbildung eines jungen Pferdes ist prägend für die gesamte Entwicklung des Pferdes. Hauptsächlich wird ein Pferd nach seiner Reitausbildung bzw. Reiteignung bewertet. Wir können Ihr Pferd professionell und behutsam auf seinen Weg als Reit- bzw.  Sportpferd vorbereiten, fördern und begleiten.

Mit viel Geduld, Behutsamkeit und besonderem Feeling für Jungtiere reiten unsere erfahrenen Reiter Ihren Youngster an. Gefühlvoll lernen sie dabei Ihrem jungen Pferd den Reiter auf seinem Rücken zu akzeptieren, seine Hilfen zu respektieren und folgsam dem Wunsch des Reiters nach zu kommen.

Je nach physischer und psychischer Eignung sowie unter Beachtung des Alters, des Charakters, der Neigung und des Talents des Pferdes bilden wir es gezielt, solide und nachhaltig gemäß den Grundsätzen der Ausbildungsskala der klassischen Reitlehre aus. Vertrauen, Freude an der Arbeit und die Harmonie zwischen Pferd und Reiter bilden dabei die Grundlage für das Erreichen sportlicher Erfolge.`,
    images: ["/Ausbildung/aus1.jpg","/Ausbildung/aus2.jpg","/Ausbildung/aus3.jpg","/Ausbildung/aus4.jpg"],
    content: (
      <ContentAusbildung />
    ),
  },

  "reitschule": {
    title: "Reitschule",
    description: `Guter Reitunterricht bildet die Basis für dauerhafte Freude und Spaß am Reiten!
Unser Ziel ist es:  Kindern (ab 8 Jahre), den Umgang mit dem Pferd zu ermöglichen und Ihnen den Reitsport näher zu brin­gen.

Sie möchten erste Erfahrungen auf dem Pferderücken sammeln, sich weiterbilden. Wir bieten fachkundigen Reitunterricht auf lieben, gut ausgebildeten Schulpferden (Ponys) bei qualifizierten, erfah­renen Reitlehrern. Großen Wert legen unsere Ausbilder auf eine vielseitige Grundausbildung und einen abwechslungsrei­chen Unterricht, denn sie sind beste Garanten, um dem Reitschüler sowohl Fertigkeiten als auch Freude im Sattel zu vermitteln.`,
    
  },

  "reitverein": {
    title: "Reitsportverein",
    description: `Am 09. Februar 2014 gründete sich unser Reitsportverein „RSV- An der Bosel e.V.“ und ist im Vereinsregister Dresden unter der Nummer VR 6914 eingetragen.

Unser Verein hat es sich zur Aufgabe gemacht, vor allem die Reiterjugend an ein umweltverträgliches und im Einklang mit der Natur befindliches Reiten heranzuführen und Reitern jeden Alters ein Umfeld zur Ausübung ihres Hobbys zu schaffen. In unserem Reitsportverein finden die Reiterjugend sowie die gestande­nen Reiterinnen und Reiter einen Heimatverein für die ersten und weite­ren sportlichen Erfolge. Und nicht zuletzt pflegen wir ein geselliges und freundschaftliches Mit­einander zwischen Jung und Alt, Reiter und Nichtreiter, Pferdebesitzer oder Pferdefreund.

Jeder kann unserem Verein beitreten, der die Ziele und Interessen des Vereins, die in der Satzung niedergelegt sind, anerkennt.`,
    images: ["/Reitverein/rv1.jpg","/Reitverein/rv2.jpg","/Reitverein/rv3.jpg","/Reitverein/rv4.jpg","/Reitverein/rv5.jpg","/Reitverein/rv6.jpg"],
    content: (
      <ContentReitverein  />
    ),
  },

 "kontakt": {
  title: "Kontakt",
  description: 'Melde dich einfach-wir freuen uns, von dir zu hören oder dich mal zu sehen',
  
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
  images: ["/Features/feature-1.jpg", "/Features/feature-2.jpg"],
  content: (
    <ContentReiterferien />    
  ),
 
  
  },
};
