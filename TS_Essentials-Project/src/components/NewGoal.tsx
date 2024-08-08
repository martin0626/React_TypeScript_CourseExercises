import { useRef, type FormEvent } from "react"

type propsNEwGoal = {
    onCreate: (name:string, description:string)=>void
}

export default function NewGoal({onCreate}:propsNEwGoal){

    const goal = useRef<HTMLInputElement>(null);
    const summary = useRef<HTMLInputElement>(null);

    const submitHandler = (e:FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        
        // let name:string = e.target.elements.goal.value;
        // let description:string = e.target.elements.summary.value;


        onCreate(goal.current!.value, summary.current!.value);
        e.currentTarget.reset();
    }

    return(
        <form action="submit" onSubmit={submitHandler}>
            <p>
                <label htmlFor="goal">Your Goal</label>
                <input ref={goal} id="goal" type="text" />
            </p>
            <p>
                <label htmlFor="summary">Short Summary</label>
                <input ref={summary} id="summary" type="text" />
            </p>
            <button type="submit">Add Goal</button>
        </form>
    )
}