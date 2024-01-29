const parseArgs = () => {
  const myArgs = process.argv.slice(2);

  const result = myArgs
    .reduce((acc, arg, index) => {
      if (index % 2 === 0) {
        const propName = arg.slice(2);
        const propValue = myArgs[index + 1];
        acc.push(`${propName} is ${propValue}`);
      }
      return acc;
    }, [])
    .join(', ');

  console.log(result);
};

parseArgs();
