import https from 'https';
import url from 'url';
import zlib from 'zlib';
import tar from 'tar';
import fs from 'fs';
import path from 'path';

export function download(from: string, to: string, filename: string) {
  return new Promise<string>((resolve, reject) => {
    https.get(from, async (response) => {
      try {
        if (response.statusCode >= 400) {
          return reject(response);
        }

        if (response.statusCode > 300 && response.statusCode < 400 && response.headers.location) {
          if (url.parse(response.headers.location).hostname) {
            return resolve(await download(response.headers.location, to, filename));
          }

          return resolve(
            await download(url.resolve(url.parse(from).hostname, response.headers.location), to, filename),
          );
        }

        const file = path.join(to, filename);
        return response
          .pipe(fs.createWriteStream(file))
          .on('error', reject)
          .on('finish', async () => resolve(await extract(file, to)));
      } catch (e) {
        reject(e);
      }
    });
  });
}

function extract(from: string, to: string): Promise<string> {
  return new Promise<string>((resolve, reject) => {
    let stream = fs.createReadStream(from);
    if (/(gz|tgz)$/i.test(from)) {
      stream = stream.pipe(zlib.createGunzip()) as any;
    }

    stream
      .pipe(tar.extract({ cwd: to }))
      .on('error', reject)
      .on('finish', () => resolve(to));
  });
}
