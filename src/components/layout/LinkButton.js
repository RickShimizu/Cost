// import { Link } from "react-router-dom"
import styles from './LinkButton.module.css'

function LinkButton(url) {

    return (
        
        <a href="/newproject" className={styles.btn} >
            Criar projeto
        </a>
        
    )

}
export default LinkButton