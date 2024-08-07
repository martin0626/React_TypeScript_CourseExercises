// import { FC } from "react";

type compProps = {
    title: string; 
    description: string;
    id: number;
    onDelete: (id:number)=> void;
}

//Function declaration types
export default function CourseGoals({title, description, id, onDelete}:compProps){
    return (
        <article>
            <div>
                <h2>{title}</h2>
                <p>{description}</p>
                <button onClick={()=>onDelete(id)}>Delete</button>
            </div>
        </article>
    )
}

//Arrow Function Alternative

// const CourseGoals:FC<compProps> = ({title, description})=>{
//     return (
//         <article>
//             <div>
//                 <h2>{title}</h2>
//                 <p>{description}</p>
//                 <button>Delete</button>
//              </div>
//          </article>
//     )
// }

// export default CourseGoals;