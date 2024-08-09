import { ComponentPropsWithoutRef } from "react";

type inputProps = {
    label: string;
    id: string;
} & ComponentPropsWithoutRef<'input'>


export default function InputEl({label, id, ...props}:inputProps){


    return (
        <p>
            <label htmlFor={id}>{label}</label>
            <input id={id} type="text" {...props} />
        </p>
    )

}