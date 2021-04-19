import { useRouter } from "next/router";


export default function Pix(){
    const router = useRouter();
    return(
        <>
        olá{router.query.pix}
        </>
    );
}