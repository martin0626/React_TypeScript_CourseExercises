import HeaderComp from "./components/Header";
import imageSrc from "./assets/goals.jpg"
import { useState } from "react";
import CourseGoalList from "./components/CourseGoalList";


export type CourseGoal = {
  name: string;
  description: string;
  id: number;
}

export default function App() {
  const [goals, setGoals] = useState<CourseGoal[]>([]);

  const handledAddGoal = ()=>{

    setGoals(goalsCurrent=>{
      let newGoal:CourseGoal = {
        name: 'New Goal',
        description: "Lorem asd",
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
      
      <HeaderComp image={{src: imageSrc, alt: 'A list of goals'}}>
        <h1>Your Cours Goals</h1>
      </HeaderComp>
      <button onClick={handledAddGoal}>Add Goal</button>
      <CourseGoalList goals={goals} onDelete={deleteGoalHandler}/>
    </main>
  )
}
