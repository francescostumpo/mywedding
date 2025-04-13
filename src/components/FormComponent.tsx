import {useState} from "react";
import {FaLocationArrow, FaTimes, FaUserPlus} from "react-icons/fa";
import {Button} from "@/components/ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import {toast, Toaster} from "sonner";

export function FormComponent(){
    const [formVisible, setFormVisible] = useState(true);
    const [participants, setParticipants] = useState([]);
    const [mainParticipant, setMainParticipant] = useState({ name: "", surname: "", intolerance: "" });

    const addParticipant = () => {
        setParticipants([...participants, { name: "", surname: "", intolerance: "" }]);
    };

    const removeParticipant = (index: number) => {
        setParticipants(participants.filter((_, i) => i !== index));
    };

    const handleMainInputChange = (field: string, value: string) => {
        setMainParticipant({ ...mainParticipant, [field]: value });
    };

    const handleInputChange = (index: number, field: string, value: string) => {
        const updatedParticipants = [...participants];
        updatedParticipants[index][field] = value;
        setParticipants(updatedParticipants);
    };

    const sendParticipants = () => {
        participants.push(mainParticipant)
        if(mainParticipant.name === ''){
            toast.error("Non hai compilato correttamente il form, per favore riprova.")
            setParticipants([]);
            setMainParticipant({ name: "", surname: "", intolerance: "" });
            return;
        }
        console.log("Participants:", participants);
        setParticipants([]);
        setFormVisible(false);
    };

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