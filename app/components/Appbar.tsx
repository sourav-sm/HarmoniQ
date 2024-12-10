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

export function Appbar() {
    const { data: session, status } = useSession();

    // Loading state
    if (status === "loading") {
        return <div>Loading...</div>;
    }

    return (
        <div className="flex justify-between items-center p-4 bg-gray-100">
            <div className="text-xl font-bold">
                Harmoniq
            </div>
            <div>
                {session?.user ? (
                    <button
                        className="m-2 p-2 bg-blue-400 text-white rounded"
                        onClick={async () => {
                            await signOut();
                        }}
                        aria-label="Logout"
                    >
                        Logout
                    </button>
                ) : (
                    <button
                        className="m-2 p-2 bg-blue-400 text-white rounded"
                        onClick={async () => {
                            await signIn();
                        }}
                        aria-label="Signin"
                    >
                        Signin
                    </button>
                )}
            </div>
        </div>
    );
}
