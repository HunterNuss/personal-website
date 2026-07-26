import '../css/Projects.css'
import ProjectCard from "../components/ProjectCard"
import { getProjects } from "../data/projects"

export default function Projects() {
        const projects = getProjects()
        return (
        <div className="page"> 
            
            <div className="container">
                <h2 className="page-title">Projects</h2>
                <div className="project-list">
                    {projects.map((project) => (
                        <ProjectCard project={project}  key={project.id}/>
                    ))}
                </div>
            </div>
        </div>
    )
}