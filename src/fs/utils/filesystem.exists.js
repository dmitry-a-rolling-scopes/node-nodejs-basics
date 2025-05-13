import fs from 'fs/promises';

export default async function exists(path) {
  try {
    await fs.access(path, fs.constants.F_OK);

    return true;
  } catch {
    return false;
  }
}
