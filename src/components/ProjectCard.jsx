import React from 'react'

const ProjectCard = ({ title, description, icon: Icon, tags, githubLink }) => {

    return (
        <div className="project-card border border-gray-210 shadow-sm rounded-2xl p-6">
            <div className="card-header flex items-center gap-4 ">
                {Icon && <Icon className="project-icon" size={48} />}
                <h3 className="text-2xl font-bold">{title}</h3>
            </div>
            <p>{description}</p>
            <div className="tags font-semibold">
                {tags.map(tag => <span key={tag}>{tag}, </span>)}
            </div>
            <div className="links">
                {githubLink && <a href={githubLink} target='_blank' rel="noreferrer">Code</a>}
            </div>
        </div>
    )
}

export default ProjectCard;