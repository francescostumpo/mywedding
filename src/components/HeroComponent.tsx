"use client"

import Image from "next/image";
import {Button} from "@/components/ui/button";

export function HeroComponent() {
    // @ts-ignore
    // @ts-ignore
    // @ts-ignore
    // @ts-ignore
    return (
        <div className="relative w-full h-[60vh] flex items-center justify-center bg-black">
            <Image
                src="/hero.png"
                alt="Wedding Hero"
                layout="fill"
                objectFit="cover"
                className="opacity-30"
            />
            <div className="justify-items-center z-10">
                <h1 className="text-white text-4xl md:text-6xl font-bold">Il nostro matrimonio</h1>
                <p className="text-white text-center mt-3 p-4 font-bold">
                    Lucrezia e Francesco si uniranno in matrimonio il 20 settembre 2025 presso Villa Castiglioni-Fisogni
                    a Tradate. Vi invitiamo a condividere questo giorno speciale e seguire le istruzioni presenti
                    su questo sito.
                </p>
                <Button className="mt-4" variant="secondary" onClick={
                    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                    // @ts-expect-error
                    () => document.getElementById("rsvp").scrollIntoView({behavior: "smooth"})
                }>Conferma la partecipazione</Button>
            </div>
        </div>
    )
}