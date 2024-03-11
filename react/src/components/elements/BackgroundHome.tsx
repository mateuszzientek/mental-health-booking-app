import { ReactNode } from "react";

interface BackgroundMainProps {
    children: ReactNode
}

export default function BackgroundHome({ children }: BackgroundMainProps) {
    return (
        <div className="w-full h-full ">

            {children}

        </div>
    );
}