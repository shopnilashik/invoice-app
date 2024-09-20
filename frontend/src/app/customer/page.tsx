"use client"; 
import { environment } from "../../../environment";

// export default async function Customer() {
//     const url = `${environment.apiURL}/customer`
//     const res = await fetch(url);
//     const users: any[] = await res.json();
//     console.log("url", url);
//     return (
//         <div className="mt-10 w-full flex justify-center">
//             <div className="relative flex flex-col text-gray-700 bg-white shadow-md rounded-xl bg-clip-border w-[95%]">
//                 <nav className="flex min-w-[240px] flex-col gap-1 p-2 font-sans text-base font-normal text-blue-gray-700">
//                     {users.length > 0 ? (
//                         users.map((user) => (
//                             <div
//                                 key={user.id}
//                                 className="hover:bg-gray-100 leading-tight p-3 rounded-lg"
//                             >
//                                 <h6 className="block font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-blue-gray-900">
//                                     {user.name}
//                                 </h6>
//                                 <p className="block font-sans text-sm antialiased font-normal leading-normal text-gray-700">
//                                     {user.email}
//                                 </p>
//                             </div>
//                         ))
//                     ) : (
//                         <p className="text-gray-500">No users found.</p>
//                     )}
//                 </nav>
//             </div>
//         </div>
//     );
// }




import { useState, useEffect } from "react";
export default function Customer() {
    const [customer, setCustomer] = useState<any[]>([]);
    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch(`${environment.apiURL}/customer`);
                const data = await response.json();
                setCustomer(data);
            } catch (error) {
                console.error("Error fetching customer data:", error);
            }
        }
        fetchData();
    }, []);
    return (
        <div className="mt-10 w-full flex justify-center">
            <div className="relative flex flex-col text-gray-700 bg-white shadow-md rounded-xl bg-clip-border w-[95%]">
                <nav className="flex min-w-[240px] flex-col gap-1 p-2 font-sans text-base font-normal text-blue-gray-700">
                    {customer.length ? (
                        customer.map((customerData) => (
                            <div
                                key={customerData.id}
                                className="hover:bg-gray-100 leading-tight p-3 rounded-lg"
                            >
                                <h6 className="block font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-blue-gray-900">
                                    {customerData.name}
                                </h6>
                                <p className="block font-sans text-sm antialiased font-normal leading-normal text-gray-700">
                                    {`${customerData.address} - ${customerData.job_location}`}
                                </p>
                            </div>
                        ))
                    ) : (
                        <p className="text-gray-500">Loading...</p>
                    )}
                </nav>
            </div>
        </div>
    );
}

