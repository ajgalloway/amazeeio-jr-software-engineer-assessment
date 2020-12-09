// import db from "../database/db.json";
import { readData, writeData } from "../database/util";

export type Project = {
  id?: number;
  name: string;
};

type Projects = Project[];

export const allProjects = () => {
  return readData() as Projects;
}

export const addProject = async ({ project: { name } }: {project: Project}) => {
  const data = readData() as Projects;
  const id = data.length + 1;
  await writeData([...data, { id, name }]);
  return { id , name };
}

export const updateProject = async ({patch: { id, name }}: { patch: Project}) => {
  const data = readData() as Projects;

  data.map((project,i) => {
    if (project.id == id) {
      data.splice(i,1,{id: id, name: name});
    }
  });

  await writeData(data);
  
  return {id: id, name: name};
}
