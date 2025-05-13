import fs from 'fs';
import path from 'path';

const read = async () => {
  const filePath = path.join(process.cwd(), 'src/streams/files/fileToRead.txt');
  const readStream = fs.createReadStream(filePath);

  readStream.on('data', data => {
    process.stdout.write(`${data}\n`);
  })
};

await read();
