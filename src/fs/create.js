import exists from './utils/filesystem.exists.js'
import fs from 'fs/promises';
import path from 'path';

const create = async () => {
  const filePath = path.join(process.cwd(), 'src/fs/files/fresh.txt');

  if (await exists(filePath)) {
    throw new Error('FS operation failed');
  }

  await fs.appendFile(filePath, 'I am fresh and young');
}

await create();
