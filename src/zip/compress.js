import fs from 'fs';
import path from 'path';
import zlib from 'zlib';

const compress = async () => {
  const gzip = zlib.createGzip();
  const sourceFilePath = path.join(process.cwd(), 'src/zip/files/fileToCompress.txt');
  const targetFilePath = path.join(process.cwd(), 'src/zip/files/archive.gz');

  const readStream = fs.createReadStream(sourceFilePath);
  const writeStream = fs.createWriteStream(targetFilePath);

  writeStream.on('finish', () => {
    fs.unlinkSync(sourceFilePath);
  });

  readStream.pipe(gzip).pipe(writeStream);
};

await compress();
