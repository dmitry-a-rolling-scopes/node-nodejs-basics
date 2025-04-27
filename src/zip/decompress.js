import fs from 'fs';
import path from 'path';
import zlib from 'zlib';

const decompress = async () => {
  const gunzip = zlib.createGunzip();
  const sourceFilePath = path.join(process.cwd(), 'src/zip/files/archive.gz');
  const targetFilePath = path.join(process.cwd(), 'src/zip/files/fileToCompress.txt');

  const readStream = fs.createReadStream(sourceFilePath);
  const writeStream = fs.createWriteStream(targetFilePath);

  writeStream.on('finish', () => {
    fs.unlinkSync(sourceFilePath);
  });

  readStream.pipe(gunzip).pipe(writeStream);
};

await decompress();
