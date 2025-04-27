import { Transform } from 'stream';

const transform = async () => {
  const transformStream = new Transform({
    transform(chunk) {
      const reversedChunk = chunk.toString().split('').reverse().slice(1).join('');

      this.push(`${reversedChunk}\n`);

      process.exit();
    },
  });

  process.stdin.pipe(transformStream).pipe(process.stdout);
};

await transform();
