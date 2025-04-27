const parseArgs = () => {
  const args = process.argv.slice(2);
  const argsStringParts = [];

  let index = 0;

  do {
    const key = args[index].replace('--', '');
    const value = args[index + 1];

    argsStringParts.push(`${key} is ${value}`);

    index += 2;
  } while (index !== args.length);

  console.log(argsStringParts.join(', '));
};

parseArgs();
