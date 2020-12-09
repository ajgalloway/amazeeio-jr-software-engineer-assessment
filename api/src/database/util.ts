import { readFileSync, writeFile } from "fs";
import { resolve as resolvePath } from "path";

export const readData = () => {
  const data = JSON.parse(readFileSync(resolvePath(__dirname, './db.json'), 'utf-8'));
  return data;
}

export const writeData = (data: any) => {
  return new Promise((resolve, reject) => {
    writeFile(resolvePath(__dirname, './db.json'), JSON.stringify(data, null, 4), (err) => {
      if (err) {  console.error(err);  reject(err); };
      console.log("File has been created");
      resolve('OK');
    });
  });
}