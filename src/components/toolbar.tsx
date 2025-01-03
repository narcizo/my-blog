
import { Github } from "lucide-react";

import { Button } from "@/components/ui/button";

import Image from "next/image";

import logoImg from '@/../public/medium.png';
import ToggleTheme from "./toggle-theme";

export default function Toolbar (){
    return (
        <>
        <div className="sticky z-50 top-0 p-6 bg-black">
            <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                    <Image className="pb-2" src={logoImg} alt="logo" width={200}></Image> {/*TODO colocar logo de verdade*/}
                    <Button variant="ghost">All Posts</Button>
                </div>
                <div className="flex items-center justify-center space-x-4">
                    <Button variant="ghost"> 
                        <Github />
                    </Button>
                    <ToggleTheme/>
                </div>
            </div>
        </div>
        </>
    );
}