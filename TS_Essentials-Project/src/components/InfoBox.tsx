import { type ReactNode } from "react";


type hintBoxProps = {
    mode: 'hint';
    children: ReactNode;
}

type warnBoxProps = {
    mode: 'warning';
    severity: 'low' | 'medium' | 'high';
    children: ReactNode;
}

type infoProps = hintBoxProps | warnBoxProps


export default function InfoBox(props:infoProps){

    if(props.mode === 'hint'){
        return (
            <aside className="infobox infobox-hint">
                <p>{props.children}</p>
            </aside>
        )
    }

    const severity = props.severity;

    return(
        <aside className={`infobox infobox-warning warning--${severity}`}>
            <h2>Warning!</h2>
            <p>{props.children}</p>
        </aside>
    )
}