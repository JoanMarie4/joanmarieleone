import React from 'react'

const ProjectCard = ({title, description, image, tags, githubLink}) => {

    return(
        <div className = "project-card">
            <img src={image} alt={title} />
            <h3>{title}</h3>
            <p>{description}</p>
            <div className="tags">
                {tags.map(tag => <span key={tag}>{tag}</span>)}
            </div>
            <div className="links">
                {githubLink && <a href={githubLink} target='_blank' rel="noreferrer">Code</a>}
            </div>
        </div>
    )
}

export default ProjectCard;