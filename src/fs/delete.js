import exists from './utils/filesystem.exists.js'
import fs from 'fs/promises';
import path from 'path';

const remove = async () => {
  const filePath = path.join(process.cwd(), 'src/fs/files/fileToRemove.txt');

  if (!await exists(filePath)) {
    throw new Error('FS operation failed');
  }

  await fs.unlink(filePath);
};

await remove();
