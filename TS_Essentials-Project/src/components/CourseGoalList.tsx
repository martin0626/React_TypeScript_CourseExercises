import CourseGoals from "./CourseGoalsComp";
import { type CourseGoal } from "../App";
import InfoBox from "./InfoBox";

type propsLis = {
    goals: CourseGoal[];
    onDelete: (id:number)=>void;
}



export default function CourseGoalList({goals, onDelete}:propsLis){

    if(goals.length === 0){
      return (
        <InfoBox mode="hint">
          You have no course goals yet. Start adding some!
        </InfoBox>
      )
    }

    return(
      <>
        {goals.length > 4 
          && 
        <InfoBox mode="warning" severity="high">
          You have too much goal on your plate!
        </InfoBox>
        }
        <ul>

        
          {goals.map(goal=>(
            <li key={goal.id}>
              <CourseGoals title={goal.name} description={goal.description} onDelete={onDelete} id={goal.id}/>
            </li>
            )
          )}
        </ul>
      </>
    )
}

