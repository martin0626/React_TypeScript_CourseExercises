import CourseGoals from "./CourseGoalsComp";
import { type CourseGoal } from "../App";

type propsLis = {
    goals: CourseGoal[];
    onDelete: (id:number)=>void;
}

export default function CourseGoalList({goals, onDelete}:propsLis){
    return(
        <ul>
        {goals.map(goal=>(
          <li key={goal.id}>
            <CourseGoals title={goal.name} description={goal.description} onDelete={onDelete} id={goal.id}/>
          </li>
        )
        )}
      </ul>
    )
}

