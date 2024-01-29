const parseEnv = () => {
  const allEnv = process.env;
  const suitableEnv = Object.keys(allEnv)
    .filter((key) => key.startsWith('RSS_'))
    .map((key) => `${key}=${process.env[key]}`);

  console.log(suitableEnv.join('; '));
};

parseEnv();
