import { useNavigate } from 'react-router-dom'
import ProjectForm from '../project/ProjectForm'
import styles from '../pages/NewProject.module.css'



function NewProject() {
    const history = useNavigate()

    function createPost(project) {

        project.cost = 0;
        project.services = []

        fetch('https://cost-api.vercel.app/projects', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(project),
        })
            .then((resp)  => resp.json())
            .then((data) => {
            // console.log(data)

        history('/projects', { state: { message: 'Projeto criado com sucesso' }, });
        
    })
        .catch (err => console.log(err))

}


return (
    <div className={styles.newproject_container}>
        <h1>Criar Projeto</h1>
        <p>Crie seu projeto para depois adicionar os serviços</p>
        <p>FORM</p>
        <ProjectForm handleSubmit={createPost} btnText='Criar Projeto' />
    </div>
)
}

export default NewProject