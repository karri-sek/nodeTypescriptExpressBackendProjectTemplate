import path from 'path';
import getCertificatePath from './getCertificatePath';

describe('getCertificatePath', () => {
  beforeAll(() => {
    process.env.CERTIFICATE_PATH = path.join('path', 'to', 'certificate');
    process.env.CERTIFICATE_KEY_PATH = path.join(
      'path',
      'to',
      'certificate',
      'key'
    );
  });

  test('return values from env variable in production mode', () => {
    const isProduction = true;
    const currentWorkingDirectory = 'fake/path/to/cwd';
    expect(getCertificatePath(isProduction, currentWorkingDirectory)).toEqual({
      certPath: path.join('path', 'to', 'certificate'),
      certKeyPath: path.join('path', 'to', 'certificate', 'key')
    });
  });

  test('return values from env variables and cwd when not in production mode', () => {
    const isProduction = false;
    const currentWorkingDirectory = 'fake/path/to/cwd';
    expect(getCertificatePath(isProduction, currentWorkingDirectory)).toEqual({
      certPath: path.join(
        'fake',
        'path',
        'to',
        'cwd',
        'path',
        'to',
        'certificate'
      ),
      certKeyPath: path.join(
        'fake',
        'path',
        'to',
        'cwd',
        'path',
        'to',
        'certificate',
        'key'
      )
    });
  });
});
