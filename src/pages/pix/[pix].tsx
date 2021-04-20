import { useRouter } from "next/router";
import { useContext, useEffect } from "react";
import { BankContext } from "../../contexts/BankContext";


export default function Pix(){
    const router = useRouter();
    const {activeFriend} = useContext(BankContext);

    console.log("active: ",activeFriend.nome);
    return(
        <>
        olá{activeFriend.nome}
        </>
    );
}