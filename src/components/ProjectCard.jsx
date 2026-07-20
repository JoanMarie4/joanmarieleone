import React from 'react'
import { FaGithub} from "react-icons/fa";

const ProjectCard = ({ title, description, icon: Icon, tags, githubLink }) => {

    return (
        <div className="project-card border border-gray-210 shadow-sm rounded-2xl p-6 transcition-transform duration-200 hover:-translate-y-2 hover:shadow-md">
            <div className="card-header flex items-center gap-4 ">
                {Icon && <Icon className="project-icon text-accent" size={48} />}
                <h3 className="text-2xl font-bold">{title}</h3>
            </div>
            <p>{description}</p>
            <div className="tags font-semibold flex flex-wrap gap-2">
                {tags.map(tag => 
                    <span 
                        key={tag}
                        className="border border-gray-100 rounded-2xl px-3 py-1 text-accent"
                    >
                        {tag} 
                    </span>)}
            </div>
            <div className="links">
                {githubLink && 
                <a href={githubLink} target='_blank' rel="noreferrer" className="flex items-center gap-1 font-semibold">
                    <FaGithub/> Code
                </a>}
            </div>
        </div>
    )
}

export default ProjectCard;