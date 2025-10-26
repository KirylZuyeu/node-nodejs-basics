import { Transform } from 'stream';

const transform = async () => {
  const reverse = new Transform({
    transform(chunk, encoding, callback) {
      const transformResult = chunk.toString().split('').reverse().join('').trim();
      callback(null, `${transformResult + '\n'}`);
    },
  });

  process.stdin.pipe(reverse).pipe(process.stdout);
};

await transform();
