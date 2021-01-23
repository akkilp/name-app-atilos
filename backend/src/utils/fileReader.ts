import { promises as fs } from 'fs';

async function readFile() {
  try {
    const jsonData = await fs.readFile('./names.json', 'utf8');
    const data = JSON.parse(jsonData);
    return data.names.map((item) => ({
      ...item,
      name: item.name.toLowerCase(),
    }));
  } catch (e) {
    throw Error(`error occurred while reading .json file. e:${e}`);
  }
}

export default readFile;
