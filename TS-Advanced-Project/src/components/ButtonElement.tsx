import { ComponentPropsWithoutRef } from "react";

type ButtonProps = {
    el: 'button';
} & ComponentPropsWithoutRef<'button'>


type AnchorProps = {
    el: 'anchor';
} & ComponentPropsWithoutRef<'a'>

type elementProps = AnchorProps | ButtonProps;


export default function ButtonEl(props: elementProps){
    if(props.el === 'anchor'){
        return <a {...props}></a>
    }

    return <button {...props}></button>
}