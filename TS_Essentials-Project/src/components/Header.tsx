import { ReactNode } from "react";

type headerProps = {
    image: {
        src:string; 
        alt:string
    }; 
    children: ReactNode
}

//Function declaration types
export default function HeaderComp({image, children}:headerProps){
    return (
        <header>
            <img src={image.src} alt={image.alt}/>
            {children}
        </header>
    )
}