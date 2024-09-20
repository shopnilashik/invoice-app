"use client";
import { environment } from "../../../../environment";
import { useRouter, useSearchParams, useParams } from "next/navigation";
import { useEffect, useState } from "react";

const CustomerDetails = () => {
    const params = useParams();
    const id = params.id;

    const [customer, setCustomer] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (id) {
            // Fetch customer data from an API
            const fetchCustomer = async () => {
                try {
                    const response = await fetch(
                        `${environment.apiURL}/customer/${id}`
                    ); // Adjust this URL according to your API
                    const data = await response.json();
                    setCustomer(data);
                } catch (error) {
                    console.error("Error fetching customer:", error);
                } finally {
                    setLoading(false);
                }
            };

            fetchCustomer();
        }
    }, [id]);

    if (loading) return <div>Loading...</div>;
    if (!customer as any) return <div>Customer not found</div>;

    return (
        <div>
            <h1>Customer Details</h1>
            <p>Id: {customer?.id}</p>
            <p>Name: {customer?.name}</p>
            <p>Address: {customer?.address}</p>
            <p>Contact: {customer?.contact}</p>
        </div>
    );
};

export default CustomerDetails;
