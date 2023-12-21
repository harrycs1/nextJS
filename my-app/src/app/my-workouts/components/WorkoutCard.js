import utilStyles from '../../styles/utils.module.css'
import Image from 'next/image'

export default function WorkoutCard({ workout }) {
    return (
        <>
            <h2 className={`${utilStyles.headingLg}`}>{workout.name}</h2>
            <Image 
                src="/images/profile.jpg"
                height={144}
                width={144}
                alt="profile picture"
            />
        </>
    )
}