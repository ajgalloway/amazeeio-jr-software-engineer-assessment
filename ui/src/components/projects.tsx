import React from 'react';
import { useQuery, gql } from '@apollo/client';
import '../styles/projects.css';


const allProjects = gql`
{
  allProjects{
    id,name
  }
}
`;


function Projects() {

  const {loading, error, data} = useQuery(allProjects);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :</p>;

  let projects = data.allProjects;

  return (
    <div className="Projects">
      <p className="projects-title">Projects</p>
      <table>
        <thead>
          <tr className="projects-header-tr">
            <th>ID</th>
            <th>NAME</th>
          </tr>
        </thead>
        <tbody>
        {projects.map((project:any) => (
        <tr key={project.id}>
          <td>{project.id}</td>
          <td>{project.name}</td>
        </tr>
      ))}
        </tbody>
      </table>
    </div>
  );
}

export default Projects;
