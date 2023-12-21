import ExercisesList from "./components/ExercisesList"
import utilStyles from '../../styles/utils.module.css'
import getData from "./models/getData"

export default async function Page({ params }) {
    const exercises = await getData();

    return (
        <>
            <h2 className={`${utilStyles.headingXl}`}>{params.workout}</h2>
            <ExercisesList exercises={exercises}/>
            <button>Add Exercise</button>
        </>
    )
}