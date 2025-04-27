import exists from './utils/filesystem.exists.js'
import fs from 'fs/promises';
import path from 'path';

const read = async () => {
  const filePath = path.join(process.cwd(), 'src/fs/files/fileToRead.txt');

  if (!await exists(filePath)) {
    throw new Error('FS operation failed');
  }

  console.log(await fs.readFile(filePath, { encoding: 'utf8' }));
};

await read();
