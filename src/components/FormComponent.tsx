import {useState} from "react";


export function FormComponent(){

    return (
        <div className="space-y-6 mt-10">
            <p className="text-lg text-gray-700 mb-6">
                Per permetterci di organizzare la festa del nostro matrimonio al meglio, ti chiediamo di confermare
                la tua partecipazione <b>entro il 31 Maggio 2025</b>.
            </p>
            <p className="text-lg text-gray-700 mb-6">
                Compila il modulo sottostante o contattaci direttamente ai nostri numeri personali.
            </p>
            <a href={"https://forms.gle/4FkHj2ARwAvkNzJz6"} target="_blank" rel="noopener noreferrer" style={{cursor: "pointer"}} className="font-bold">Modulo Google</a>
        </div>
    )
}