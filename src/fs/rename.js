import exists from './utils/filesystem.exists.js'
import fs from 'fs/promises';
import path from 'path';

const rename = async () => {
  const sourceDirectoryPath = path.join(process.cwd(), 'src/fs/files');
  const sourceFilePath = path.join(sourceDirectoryPath, 'wrongFilename.txt');
  const targetFileName = 'properFilename';
  const targetFileExtension = 'md';
  const targetFilePath = path.join(sourceDirectoryPath, `${targetFileName}.${targetFileExtension}`);

  if (!await exists(sourceFilePath) || await exists(targetFilePath)) {
    throw new Error('FS operation failed');
  }

  await fs.rename(sourceFilePath, targetFilePath);
};

await rename();
