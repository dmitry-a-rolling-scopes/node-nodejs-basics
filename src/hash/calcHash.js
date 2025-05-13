import { createHash } from 'crypto';
import fs from 'fs';
import path from 'path';

const calculateHash = async () => {
  const filePath = path.join(process.cwd(), 'src/hash/files/fileToCalculateHashFor.txt');
  const readStream = fs.createReadStream(filePath);
  const sha256 = await createHash('sha256');

  readStream.on('data', (chunk) => {
    sha256.update(chunk);
  });

  readStream.on('end', () => console.log(sha256.digest('hex')));
};

await calculateHash();
