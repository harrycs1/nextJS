import utilsStyles from '../styles/utils.module.css'
import Link from 'next/link'

export default function workoutsLayout({
    children,
}) {
    return (
        <section>
            {<h1 className={`${utilsStyles.heading2Xl}`}>GYMIE</h1>}
            {<Link href="/">Home</Link>}
            <nav></nav>
            {children}
        </section>
    )
}