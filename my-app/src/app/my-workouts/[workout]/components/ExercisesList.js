import utilStyles from '../../../styles/utils.module.css'
import ExerciseCard from './ExerciseCard'

export default function ExercisesList({ exercises }) {
    return (
        <main>
            <h3 className={`${utilStyles.headingLg}`}>Exercises</h3>
            <ul className="borderflex flex-col">
                {exercises.map((exercise) => {
                    return (
                        <li key={exercise.id}><ExerciseCard exercise={exercise}/></li>
                    )
                })}
            </ul>
        </main>
    )
}