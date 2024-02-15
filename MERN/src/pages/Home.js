import { useEffect } from "react";
import{useWorkoutsContext} from '../hooks/useWorkoutsContext';
import WorkoutForm from "../components/WorkoutForm"; 
import WorkoutDetails from '../components/WorkoutDetails';

function Home (){  

    const {workouts,dispatch} = useWorkoutsContext()
    

    // // const [workouts,setWorkouts] = useState(null) 
    // const [title,setTitle] = useState('')
    // const [reps,setReps] = useState('')
    // const [load,setLoad] = useState('')
    // const [error,setError] = useState(null)

    // const createWorkout = async(e) => { 
    //     e.preventDefault()

    //     const workout = {title, load, reps}

    //     const response = await fetch('/api/workouts', {
    //         method :'POST',
    //         body: JSON.stringify(workout),
    //         headers:{
    //             'Content-Type': 'application/json'
    //         }
    //     })
    //     const json = await response.json()

    //     if(!response.ok){
    //         setError(json.error)
    //     } 
    //     if(response.ok){
    //         setTitle('')
    //         setLoad('')
    //         setReps('')
    //         setError(null)
    //         console.log('new workout added')
    //     } 
    // }
       

    useEffect(() => {
        const fetchWorkouts = async () => {
            const response = await fetch('/api/workouts')
            const json = await response.json()

            if(response.ok){
                // setWorkouts(json) 
                dispatch({type:'SET_WORKOUTS',payload: json})
            }

        } 

        fetchWorkouts() 
        
        
    },[dispatch]) 

    

    return(
        <div className="home"> 
            {/* <form onSubmit={createWorkout}>
            <input type="text" placeholder="Workout Type" onChange={(e)=>{setTitle(e.target.value)}}/>
            <input type="number" placeholder="Number of Reps" onChange={(e)=>{setReps(e.target.value)}}></input>
            <input type="number" placeholder="Number of Sets" onChange={(e)=>{setLoad(e.target.value)}}></input> 
            <button>Submit</button> 

            {error && <div className="error">{error}</div>}

            </form>   */} 
            <h3 className="upper">Eat GYM</h3>
            <h3 className="middle">Sleep GYM</h3>
            <h3 className="bottom">Dream GYM</h3>

            <WorkoutForm/>


            
            <div className="workouts">
                {workouts && workouts.map((workout) => (  
                    <WorkoutDetails key={workout._id} workout = {workout}/>
                    
                ))}
            </div>
        </div>
    )
} 


export default Home;