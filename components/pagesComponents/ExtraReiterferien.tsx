'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { ferienData } from '@/constants/pagesContents';

export default function ExtraReiterferien() {
  return (
    <div className="container mx-auto py-10 space-y-8">
      <motion.h1 
        className="title-gradient text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Termine / Preis:
      </motion.h1>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        {ferienData.map((ferien, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <Card className="rounded-2xl shadow-lg flex flex-col h-full">
              <CardHeader>
                <CardTitle className='text-gold'>{ferien.season}</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col justify-between flex-1 space-y-4">
                <div>
                  <p className="font-semibold">Preis:</p>
                  <p>{ferien.price}</p>
                </div>

                <div>
                  <p className="font-semibold">Termine:</p>
                  <ul className="list-disc list-inside">
                    {ferien.dates.map((date, i) => (
                      <li key={i}>
                        {date.week}: {date.from} bis {date.to}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-col gap-2 mt-4">
                  <Button asChild variant="default" className="text-primary underline">
                    <a href={ferien.registrationForm} target="_blank">
                      Anmeldung ausdrucken
                    </a>
                  </Button>
                  <Button asChild variant="default" className="text-green underline">
                    <a href="/mitbringen-liste.pdf" target="_blank">
                      Was muss mitgebracht werden
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      <motion.div 
        className="mt-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Card className="rounded-2xl shadow-lg">
          <CardHeader>
            <CardTitle className='text-gold'>Weitere Informationen</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <section>
              <h2 className="text-xl font-semibold mb-2">An- und Abreise</h2>
              <p>Die Anreise erfolgt am Anreisetag ab 10 Uhr, die Abreise erfolgt am Abreisetag bis 11 Uhr.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-2">Unterkunft</h2>
              <p>Im Mehrbettzimmer auf dem Gelände der Reitanlage mit WC und Dusche sowie Aufenthaltsraum.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-2">Verpflegung</h2>
              <p>Frühstück, Mittagessen und Abendbrot sind inklusive.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-2">Anmeldung</h2>
              <p>Die Reiterferien finden ab 8 teilnehmenden Kindern statt. Möchten Sie Ihre Kinder anmelden, drucken Sie bitte das Anmeldeformular aus und schicken Sie es per Post oder E-Mail ausgefüllt an uns zurück.</p>
            </section>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
