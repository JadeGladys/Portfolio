import { Navbar } from '../components/Navbar/Navbar'
import { Hero } from '../components/Hero/Hero'
import { About } from '../components/About/About'
import { Experience } from '../components/Experience/Experience'
import { Projects } from '../components/Projects/Projects'
import { Contact } from '../components/Contact/Contact'

export default function(){
    return(
        <>
            < Navbar />
            < Hero />
            < About />
            < Experience />
            < Projects />
            < Contact />
        </>
    )
}