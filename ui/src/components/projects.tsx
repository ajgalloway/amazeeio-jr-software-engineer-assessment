import React from 'react';
import { useQuery, gql } from '@apollo/client';


const allProjects = gql`
{
  allProjects{
    id,name
  }
}
`;


function Projects() {

  /*

      Use similar query syntax to the hello query in the App.tsx file to get the list of projects from that API.
      Reference: https://www.apollographql.com/docs/react/get-started/#request-data

  */

  return (
    <div className="Projects">

      TODO: List out the projects here

    </div>
  );
}

export default Projects;
