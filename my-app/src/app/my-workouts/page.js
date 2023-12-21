import Link from 'next/link'
import utilStyles from '../styles/utils.module.css'
import WorkoutCard from './components/WorkoutCard'
import POST from './api/route'   

export default function Page() {
    const workouts = [
        {id: 1, name: 'Push',},
        {id: 2, name: 'Pull',},
        {id: 3, name: 'Legs',},
        {id: 4, name: 'Upper',},
        {id: 5, name: 'Lower',},
        {id: 6, name: 'Monday',},
    ]
    return (
        <>
            <h1 className={`${utilStyles.headingXl}`}>My Workouts</h1>
            <ul>
                {workouts.map((workout) => {
                    return (
                        <>
                            <li className='border rounded-lg px-2 py-2 mb-3' key={workout.id}>
                                <Link href={`/my-workouts/${workout.name}`} className='flex justify-between'>
                                    <WorkoutCard workout={workout}/>
                                </Link>
                            </li>
                        </>
                    )
                })}
            </ul>
            <button className='border'>Add Workout</button>
        </>
    )
}