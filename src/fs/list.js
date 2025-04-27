import exists from './utils/filesystem.exists.js'
import fs from 'fs/promises';
import path from 'path';

const list = async () => {
  const sourceDirectoryPath = path.join(process.cwd(), 'src/fs/files');

  if (!await exists(sourceDirectoryPath)) {
    throw new Error('FS operation failed');
  }

  console.log(await fs.readdir(sourceDirectoryPath));
};

await list();
