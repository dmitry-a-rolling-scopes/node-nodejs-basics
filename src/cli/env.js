const parseEnv = () => {
  const rssEnv = Object.entries(process.env).filter(([key]) => key.startsWith('RSS_'));
  const rssEnvStringParts = rssEnv.map(([key, value]) => `${key}=${value}`);
  const rssEnvString = rssEnvStringParts.join('; ');

  console.log(rssEnvString)
};

parseEnv();
