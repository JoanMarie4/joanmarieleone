import React from "react";
import ProjectCard from "../components/ProjectCard";
import projects from "../data/projectCards";


const Projects = () => (
    <div className="wrapper">
        <div className="projects-list mx-auto w-full px-10 lg:px-20 py-16 flex flex-col md:flex-row gap-12 items-center">
            {projects.map((p) => <ProjectCard key={p.title} {...p} />)}
        </div>
    </div>
    
)
 export default Projects;