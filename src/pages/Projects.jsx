import React from "react";
import ProjectCard from "../components/ProjectCard";

const projects = []; //later use a projectsData.js file

const Projects = () => (
    <div className="projects-grid">
        {projects.map((p) => <ProjectCard key={p.title} {...p} />)}
    </div>
)
 export default Projects;