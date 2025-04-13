"use client"

import Image from "next/image";
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
//import {FaCamera, FaHeart} from "react-icons/fa";
//import {FaHouse} from "react-icons/fa6";
import {Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious} from "@/components/ui/carousel";
import {FormComponent} from "@/components/FormComponent";
import {HeroComponent} from "@/components/HeroComponent";

export default function Home() {
  return (
      <div className="min-h-screen flex flex-col items-center">
        {/* Hero Section */}
        <HeroComponent />

          {/* Story Section - Timeline */}
          {/*<section className="w-full max-w-3xl p-6 text-center">
              <h2 className="text-3xl font-bold">La nostra storia</h2>
              <div className="mt-10 space-y-8">

                  <div className="flex flex-col items-center">
                      <Card className="w-full mt-1">
                          <CardHeader className="justify-items-center">
                              <FaHeart className="text-red-500 text-2xl" />
                              <CardTitle>Come ci siamo incontrati</CardTitle>
                          </CardHeader>
                          <CardContent>
                              <p className="text-gray-700">Lorem ipsum...</p>
                          </CardContent>
                      </Card>
                  </div>

                  <div className="flex flex-col items-center">
                      <Card className="w-full mt-1">
                          <CardHeader className="justify-items-center">
                              <FaCamera className="text-fuchsia-300 text-2xl" />
                              <CardTitle>Momenti bellissimi</CardTitle>
                          </CardHeader>
                          <CardContent>
                              <p className="text-gray-700">Lorem ipsum...</p>
                          </CardContent>
                      </Card>
                  </div>

                  <div className="flex flex-col items-center">
                      <Card className="w-full mt-2">
                          <CardHeader className="justify-items-center">
                              <FaHouse className="text-blue-950 text-2xl" />
                              <CardTitle>Costruiamo la nostra vita</CardTitle>
                          </CardHeader>
                          <CardContent>
                              <p className="text-gray-700">Lorem ipsum...</p>
                          </CardContent>
                      </Card>
                  </div>
              </div>
          </section>*/}

          {/* Divider */}
          {/*<div className="w-full max-w-3xl my-12 border-t-2 border-gray-300"></div>*/}

          {/* Program of the Day */}
          <section className="w-full max-w-3xl p-6 text-center">
              <h2 className="text-3xl font-bold">Programma del giorno</h2>
              <div className="space-y-6 mt-10">
                  {[
                      { time: "17:00", event: "Cerimonia 💍", description: "La cerimonia si terrà direttamente in villa. " +
                              "Vi preghiamo di arrivare con 20-30 minuti di anticipo." },
                      { time: "18:00", event: "Aperitivo 🫒", description: "Dopo la cerimonia si terrà un aperitivo nel meraviglioso " +
                              "parco della villa, sarà organizzato ad isole e soddisferà ogni gusto." },
                      { time: "19:30", event: "Ricevimento 🍽️", description: "Il ricevimento si terrà nella storica corte." +
                              " Il menù offrirà un'occasione per deliziare il palato." },
                      { time: "21:30", event: "Torta Nuziale 🍰", description: "Il famigerato taglio della torta accompagnato da un buffet ricco di dolci e bollicine." },
                      { time: "24:00", event: "Chiusura 🎊", description: "Come cenerentola, a mezzanotte chiuderemo questa (ci auguriamo) piacevole giornata" +
                              " senza dimenticare di prenderci qualche digestivo ed ascoltare un po' di musica insieme!" }
                  ].map((item, index) => (
                      <Card key={index} className="w-full">
                          <CardHeader>
                            <CardTitle className="text-2xl">{item.time} - {item.event}</CardTitle>
                          </CardHeader>
                          <CardContent className="p-4 flex items-center justify-between">
                              <p>{item.description}</p>
                          </CardContent>
                      </Card>
                  ))}
              </div>
          </section>

          {/* Divider */}
          <div className="w-full max-w-3xl my-12 border-t-2 border-gray-300"></div>
          {/* Where it is */}
          <section className="w-full max-w-3xl p-6 text-center">
              <h2 className="text-3xl font-bold">Location - La Villa</h2>
              <div className="space-y-6 mt-10">
                  <p className="text-lg text-gray-700 mb-6">Immersa in un rigoglioso parco secolare ampio 15.000 mq,
                      Villa Castiglioni-Fisogni possiede ampi saloni in stile Liberty dove poter godere di momenti di festa
                      e di relax. Scopri maggiori dettagli sul sito di <a href="https://www.villacastiglionifisogni.com/villa-matrimoni-tradate/">Villa Castiglioni-Fisogni</a>
                  </p>

                  {/* Carousel of Photos */}
                  <Carousel>
                      <CarouselContent>
                          {["/carousel-3.png", "/carousel-2.png", "/carousel-1.png"].map((src, index) => (
                              <CarouselItem key={index} className="relative w-full h-64">
                                  <Image src={src} alt={`Location ${index + 1}`} layout="fill" objectFit="cover" className="rounded-lg" />
                              </CarouselItem>
                          ))}
                      </CarouselContent>
                      <CarouselPrevious />
                      <CarouselNext />
                  </Carousel>
              </div>
          </section>

          {/* Divider */}
          <div className="w-full max-w-3xl my-12 border-t-2 border-gray-300"></div>

          <section id="rsvp" className="w-full max-w-3xl p-6 text-center">
              <h2 className="text-3xl font-bold">Conferma la tua partecipazione</h2>
              <FormComponent />
          </section>
      </div>
    );
}
