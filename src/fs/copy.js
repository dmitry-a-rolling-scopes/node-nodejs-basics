import exists from './utils/filesystem.exists.js'
import fs from 'fs/promises';
import path from 'path';

const copy = async () => {
  const sourceDirectoryPath = path.join(process.cwd(), 'src/fs/files');
  const targetDirectoryPath = path.join(sourceDirectoryPath, '..', 'files_copy');

  if (!await exists(sourceDirectoryPath) || await exists(targetDirectoryPath)) {
    throw new Error('FS operation failed');
  }

  await copyFiles(sourceDirectoryPath, targetDirectoryPath);
};

const copyFiles = async (sourceDirectoryPath, targetDirectoryPath) => {
  await fs.mkdir(targetDirectoryPath);

  const sourceDirectoryFiles = await fs.readdir(sourceDirectoryPath);

  await Promise.all(
    sourceDirectoryFiles.map(async (sourceFileName) => {
      const sourceFilePath = path.join(sourceDirectoryPath, sourceFileName);
      const targetFilePath = path.join(targetDirectoryPath, sourceFileName);

      await fs.copyFile(sourceFilePath, targetFilePath);
    })
  );
}

await copy();
