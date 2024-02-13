import {WorkoutsContext} from '../context/WorkoutsContext'
import { useContext } from 'react'

export const useWorkoutsContext = () => {
    const context = useContext(WorkoutsContext)

    if (!context){
        throw Error('use workout context must be used in a WorkoutCOntextProvider')
    }

    return context
}