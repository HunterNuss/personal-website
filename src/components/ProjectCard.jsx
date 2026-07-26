import { Link } from "react-router-dom"

export default function ProjectCard({project}) {
    return (
        <div className="project-card-container">
            <div className="project-card">
                <div className="project-card-content">
                    <h3 className="project-card-name">{project.name}</h3>
                    <p className="project-card-name">{project.description}</p>
                </div>
            </div>
            <div className="project-card">
                <img 
                    src={project.image} 
                    alt={project.name} 
                    className="project-card-image"
                />
            </div>
                
            
        </div>

    )
}