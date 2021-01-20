import { promises as fs } from 'fs';

async function readFile() {
  try {
    const data = await fs.readFile('./names.json', 'utf8');
    return JSON.parse(data);
  } catch (e) {
    return e;
  }
}

export default readFile;
