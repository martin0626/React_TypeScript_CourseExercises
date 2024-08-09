import { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";

type containerProps<T extends ElementType>  = {
    as?: T;
    children: ReactNode;
} & ComponentPropsWithoutRef<T>


export default function ContainerEl<C extends ElementType>({as, children, ...props}:containerProps<C>){

    const Component = as || 'div';

    return (    
        <Component {...props}>{children}</Component>
    )

}