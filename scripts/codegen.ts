import fs from 'fs';
import path from 'path';
import os from 'os';
import glob from 'glob';
import prettier from 'prettier';
import yargs from 'yargs';
import { download } from './utils/download';
import { generate } from './utils/generate';

yargs
  .option('abis', {
    normalize: true,
  })
  .option('release', {})
  .option('output', {
    type: 'string',
    normalize: true,
    default: path.relative(process.cwd(), path.resolve(__dirname, '..', 'src', 'contracts')),
  })
  .option('prettier', {
    normalize: true,
    default: process.cwd(),
    defaultDescription: 'Relative to current working directory.',
  })
  .check((args) => {
    if (!args.abis && !args.release) {
      throw new Error('You have to specificy a release or a build artifact location.');
    }

    return true;
  })
  .env('MELONJS')
  .pkgConf('codegen')
  .command(
    '$0',
    'Generate code',
    () => {},
    async (args) => {
      if (!fs.existsSync(args.output)) {
        fs.mkdirSync(args.output);
      }

      const abis = await (async () => {
        if (args.abis) {
          if (args.abis.indexOf('*') !== -1) {
            return glob.sync(args.abis);
          }

          if (fs.existsSync(args.abis)) {
            const stats = fs.lstatSync(args.abis);
            if (stats.isDirectory()) {
              return glob.sync(path.join(args.abis, '**/*.abi'));
            }

            if (stats.isFile()) {
              return [args.abis];
            }
          }

          throw new Error('Failed to recognize abis. Please pass the path to a file or directory or a glob pattern.');
        }

        try {
          const filename = `melon-protocol-${args.release}`;
          const organization = 'melonproject';
          const project = 'protocol';
          const release = `https://github.com/${organization}/${project}/releases/download/${args.release}/${filename}.tar.gz`;

          // Download and extract the build artifact from github.
          const tmp = fs.mkdtempSync(path.join(os.tmpdir(), 'melon-protocol-'));
          await download(release, tmp, `${filename}.tar.gz`);

          return glob.sync(path.join(tmp, '**/*.abi'));
        } catch (e) {
          throw new Error(`Failed to download build artifact for release ${args.release}.`);
        }
      })();

      const config = await prettier.resolveConfig(args.prettier);
      const result = abis.map((item) => {
        const name = path.basename(item).split('.', 1)[0];
        const content = fs.readFileSync(item).toString('utf8');
        const code = generate(name, JSON.parse(content));
        const output = prettier.format(code, { ...config, parser: 'typescript' });

        return { name, output };
      });

      result.forEach((item) => {
        fs.writeFileSync(path.join(args.output, `${item.name}.ts`), item.output, 'utf8');
      });

      const imports = result.map((item) => `export { ${item.name} } from './${item.name}';`);
      fs.writeFileSync(path.join(args.output, `index.ts`), `${imports.join('\n')}\n`, 'utf8');
    },
  ).argv;
