// import { Link } from "react-router-dom"
import savings  from '../../img/savings.svg'
import styles from '../pages/Home.module.css'
import LinkButton from "../layout/LinkButton"

function Home() {
    return (
        <section className={styles.home_container}>
            <h1>Bem vindo ao <span>Costs</span></h1>
            <p>comece a gerenciar seus projetos agora mesmo!</p>
            <LinkButton url='/newproject'/>            
            <img src={savings} alt='costs'/>
        </section>
    )
}

export default Home