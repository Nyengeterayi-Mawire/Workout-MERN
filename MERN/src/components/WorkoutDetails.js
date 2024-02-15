import{useWorkoutsContext} from '../hooks/useWorkoutsContext';
import formatDistanceToNow from 'date-fns/formatDistanceToNow'

const WorkoutDetails = ({workout}) => { 

    const {dispatch} = useWorkoutsContext()

    const handleClick = async() =>{
        const response = await fetch('/api/workouts/'+ workout._id,{
            method: 'DELETE'
        })
        const json = await response.json()

        if(response.ok){
            dispatch({type: 'DELETE_WORKOUT', payload: json})
        }
    }
    return(
        <div className='workoutDetailComp'>
            <h3>{workout.title}</h3>
            <p>Reps : {workout.reps}</p>
            <p>Sets : {workout.load}</p> 
            <p>{formatDistanceToNow(new Date(workout.createdAt),{addSufix : true})}</p>  
            <button onClick={handleClick}>delete</button>                   
        </div>
    )
} 
export default WorkoutDetails