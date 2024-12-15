// "use client";

// import { signIn, signOut, useSession } from "next-auth/react"

// export function Appbar(){
//     const session=useSession();
//     return <div>
//         <div>
//             Harmoniq
//         </div>
//         <div>
//             {session.data?.user && <button className="m-2 p-2 bg-blue-400" onClick={()=>signOut()}>Logout</button>}
//             {!session.data?.user && <button className="m-2 p-2 bg-blue-400" onClick={()=>signIn()}>Signin</button>}
//         </div>
//     </div>
// }

"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"


export function Appbar() {
    // const { data: session, status } = useSession();


    const session=useSession();
    // Loading state
    // if (status === "loading") {
    //     return <div>Loading...</div>;
    // }
    return ( 
    <div className="flex justify-between px-20 p-5">
        <div className="text-xl font-bold flex flex-col justify-center text-white">
            Harmoniq
        </div>
        <div>
            {session.data?.user && <Button className=" bg-purple-600 hover:bg-purple-700 text-white " onClick={()=>signOut()}>Logout</Button>}
            {!session.data?.user && <Button className="bg-purple-600 hover:bg-purple-700 text-white " onClick={()=>signIn()}>Signin</Button>}
        </div>
    </div>

    );
}
