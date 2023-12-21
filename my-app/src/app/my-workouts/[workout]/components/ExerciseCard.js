import utilStyles from '../../../styles/utils.module.css'

export default function ExerciseCard({ exercise }) {
    return (
        <section className='border mb-2 rounded-lg px-3 py-3 flex justify-between'>
            <div className='pr-4'>
                <h4 className={`${utilStyles.headingMd}`}>{exercise.name}</h4>
                <p>{exercise.target}</p>
                <p>{exercise.instructions}</p>
            </div>
            <img src={exercise.gifUrl}></img>
        </section>
    )
}