import { useLocation } from 'react-router-dom'
import Message from '../layout/Message'
import styles from './Projects.module.css'
import Container from '../layout/Container'
import LinkButton from '../layout/LinkButton'
import ProjectCard from '../project/ProjectCard'
import { useState, useEffect } from 'react'
import Loading from '../layout/Loading'

function Projects(){
const [projects, setProjects] = useState([])
const [removeLoading,setRemoveLoading] = useState(false)
const [projectMessage, setProjectsMessage] = useState('')

    const location = useLocation()
    let message = ''
    if(location.state){
        message = location.state.message
    }

    useEffect(() =>{
         setTimeout(() => {
            fetch('https://cost-api.vercel.app/projects',{
            method: 'GET',
            headers: {
                'Context-Type': 'application/json'
            },
        })
        .then((resp) => resp.json())
        .then((data) =>{
            console.log(data)
            setProjects(data)
            setRemoveLoading(true)
        })
        .catch((err) => console.log(err))
         }, 300);
    },[])

    function removeProject(id){

        fetch(`https://cost-api.vercel.app/projects/${id}`, {
            method:'DELETE',
            headers:{
                'Content-Type' : 'application/json'
            },
        }).then(resp => resp.json())
        .then(data => {
            setProjects(projects.filter((project) => project.id !== id ))
            setProjectsMessage('Projeto')
        })
    }

    return (
        <div className={styles.project_container}>
            <div className={styles.title_container}>
                <h1>Meus Projetos</h1>
                <LinkButton to='/newproject' text='Criar Projeto'/>                           
            </div>
            {message && <Message type='success' msg={message}/> }
            {projectMessage && <Message type='success' msg={projectMessage}/> }
            <Container customClass="start">
                 {projects.length > 0 && 
                  projects.map((project) => ( <ProjectCard 
                  id={project.id}
                  name={project.name}
                  budget={project.budget}
                  //zacessa json e pega o conteudo pelas suas propriedade 
                  //ex: pega name que ta dentro de category que ta dentro de project
                  category={project.category.name}
                  key={project.id} 
                  handleRemove={removeProject}
                  />
                  
                  ))}
                  {!removeLoading && <Loading />}
                  {removeLoading && projects.length === 0 &&(
                    <p>Não há projetos cadastrados</p>
                  ) }
            </Container>
        </div>
    )
}

export default Projects