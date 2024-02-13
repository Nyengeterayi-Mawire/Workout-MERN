import { useState } from "react";  
import { useWorkoutsContext } from "../hooks/useWorkoutsContext";

function WorkoutForm(){
    const {dispatch} = useWorkoutsContext();

     // const [workouts,setWorkouts] = useState(null) 
     const [title,setTitle] = useState('')
     const [reps,setReps] = useState('')
     const [load,setLoad] = useState('')
     const [error,setError] = useState(null)
     const [emptyFields,setEmptyFields] = useState([])
 
     const createWorkout = async(e) => { 
         e.preventDefault()
 
         const workout = {title, load, reps}
 
         const response = await fetch('/api/workouts', {
             method :'POST',
             body: JSON.stringify(workout),
             headers:{
                 'Content-Type': 'application/json'
             }
         })
         const json = await response.json()
 
         if(!response.ok){
             setError(json.error) 
             setEmptyFields(json.emptyFields)
         } 
         if(response.ok){
             setTitle('')
             setLoad('')
             setReps('')
             setError(null)
             console.log('new workout added',json)
             dispatch({type: 'CREATE_WORKOUT', payload: json}) 
         } 
     }
        

    return(
        <form onSubmit={createWorkout}>
            <input type="text" placeholder="Workout Type" onChange={(e)=>{setTitle(e.target.value)}} className={emptyFields.includes('title') ? 'error' : ''} value={title}/>
            <input type="number" placeholder="Number of Reps" onChange={(e)=>{setReps(e.target.value)}} className={emptyFields.includes('reps') ? 'error' : ''} value={reps}></input>
            <input type="number" placeholder="Number of Sets" onChange={(e)=>{setLoad(e.target.value)}} className={emptyFields.includes('load') ? 'error' : ''} value={load}></input> 
            <button>Submit</button> 

            {error && <div className="error">{error}</div>}

        </form>
    )
}
export default WorkoutForm