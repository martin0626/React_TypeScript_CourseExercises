import HeaderComp from "./components/Header";
import imageSrc from "./assets/goals.jpg"
import { useState } from "react";
import CourseGoalList from "./components/CourseGoalList";
import NewGoal from "./components/NewGoal";


export type CourseGoal = {
  name: string;
  description: string;
  id: number;
}

export default function App() {
  const [goals, setGoals] = useState<CourseGoal[]>([]);

  const handledAddGoal = (name:string, description:string)=>{

    setGoals(goalsCurrent=>{
      let newGoal:CourseGoal = {
        name: name,
        description: description,
        id: Math.random(),
      }
      return [...goalsCurrent, newGoal]
    })
  }

  const deleteGoalHandler = (id:number)=>{
    setGoals(goals.filter(g=> g.id !== id));
  }
 
  return (
    <main>
      <NewGoal onCreate={handledAddGoal}/>
      <HeaderComp image={{src: imageSrc, alt: 'A list of goals'}}>
        <h1>Your Cours Goals</h1>
      </HeaderComp>
      <CourseGoalList goals={goals} onDelete={deleteGoalHandler}/>
    </main>
  )
}
