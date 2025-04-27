import fs from 'fs';
import path from 'path';

const write = async () => {
  const filePath = path.join(process.cwd(), 'src/streams/files/fileToWrite.txt');
  const writeStream = fs.createWriteStream(filePath);

  process.stdin.on('data', data => {
    writeStream.write(data);

    process.exit();
  });
};

await write();
