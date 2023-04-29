import ProjectForm from '../project/ProjectForm'
import styles from './newProject.module.css'

function NewProject(){
    return(
        <div className={styles.newproject_container}>
            <h1>Criar Projeto</h1>
            <p>Crie seu projeto para depois adicionar os serviços</p>
            <p>FORM</p>
            <ProjectForm/>
        </div>
    )
}

export default NewProject