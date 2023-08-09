import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';

function Projects() {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        async function fetchProjects() {
            try {
                const response = await axios.get('https://api.github.com/users/amelialane123/repos');
                const projectsWithData = response.data.map(project => ({
                    ...project,
                    previewImage: checkPreviewImage(project.name),
                }));
                setProjects(projectsWithData);
            } catch (error) {
                console.error('Error fetching projects:', error);
            }
        }

        fetchProjects();
    }, []);

    function checkPreviewImage(projectName) {
        // Construct the expected filename based on the project name
        const expectedFilename = `images/${projectName}-preview.png`;

        // Check if the file exists in the images folder
        try {
            require(`./${expectedFilename}`);
            return true; // Preview image exists
        } catch (error) {
            return false; // Preview image doesn't exist
        }
    }

    let projectOrder = (projects.map(project => (
        <div className ="project" key={project.id}>
            <a href={project.html_url} target="_blank" rel="noopener noreferrer">
                {project.name}
            </a>
            <p>{project.description}</p>
            {project.previewImage && (
                <img src={`images/${project.name}-preview.png`} alt={`${project.name} Preview`} />
            )}
        </div>
    ))).reverse();


    return (
        <div>
            <h2 className="subtitle">Projects</h2>
            <div className="project-gallery">
                {projectOrder}
            </div>
        </div>
    );
}

export default Projects;
