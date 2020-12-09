import React from 'react';
import { useQuery, gql } from '@apollo/client';

import Projects from "./components/projects";

import './App.css';


const helloQuery = gql`
{
  hello
}
`;


function App() {

  /* 

    EXAMPLE

    Hello API Query

  */ 
  const {loading, error, data} = useQuery(helloQuery);
  
  if (loading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>Error: {error}</div>
  }

  const { hello } = data
  console.log(`Hello ${hello}`);

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>

        {/* Here we print the value of the returned API query to the page */}        
        <p>Hello {hello}</p>
        <Projects />
      </header>
    </div>
  );
}

export default App;
