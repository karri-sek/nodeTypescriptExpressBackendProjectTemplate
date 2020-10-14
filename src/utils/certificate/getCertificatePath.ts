import path from 'path';

export default (isProduction: boolean, currentWorkingDirectory: string) => {
  const certPath = process.env.CERTIFICATE_PATH || '';
  const certKeyPath = process.env.CERTIFICATE_KEY_PATH || '';
  const caCertPath = process.env.CERTIFICATE_CA_KEY_PATH || '';
  if (isProduction) {
    return {
      certPath,
      certKeyPath,
      caCertPath
    };
  }

  return {
    certPath: path.join(currentWorkingDirectory, certPath),
    certKeyPath: path.join(currentWorkingDirectory, certKeyPath),
    caCertPath: path.join(currentWorkingDirectory, caCertPath)
  };
};
