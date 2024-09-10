import { Button } from "@ui5/webcomponents-react";
import Link from "next/link";
export default function Home() {
    return (
        <main>
            <div className="m-10">
                <Link href={"/customer"}>
                    <div className="h-[170px] w-[170px] rounded-lg bg-white hover:bg-gray-50 flex flex-row justify-center items-center">
                        <p>All Customer</p>
                    </div>
                </Link>
            </div>
        </main>
    );
}
