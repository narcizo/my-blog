import Toolbar from "@/components/toolbar";
import Footer from "@/components/footer";

import { Ghost, RefreshCcw } from "lucide-react"
import { Button } from "@/components/ui/button";

export default function Home() {
    return (
        <>
            <div className="flex flex-col min-h-screen">
                <Toolbar/>
                <div className="flex justify-center items-center flex-grow">
                    <h1>
                        Sorry, no posts to show :(
                    </h1>
                </div>
                <Footer/>
            </div>
        </>
    );
}