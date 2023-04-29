import { Link } from 'react-router-dom'
import Container from './Container'
import styles from './Navbar.module.css'
import logo from '../../img/costs_logo.png'


function Navbar() {
    return (
        <nav className={styles.navbar}>
            <Container>
                <Link to='/'><img src={logo} alt='imagem' /></Link>
                <ul className={styles.list}>
                    <li className={styles.item}><Link to='/'>Home</Link></li>
                    <li className={styles.item}><Link to='/contact'>contact</Link></li>
                    <li className={styles.item}><Link to='/company'>company</Link></li>
                    <li className={styles.item}><Link to='/newproject'>new Project</Link></li>                                        
                </ul>                                
            </Container>
        </nav>
    )

}
export default Navbar