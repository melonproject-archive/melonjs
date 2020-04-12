import fs from 'fs';
import path from 'path';
import glob from 'glob';
import prettier from 'prettier';
import yargs from 'yargs';
import rimraf from 'rimraf';
import { generate } from './utils/generate';

const args = yargs
  .option('input', {
    array: true,
    normalize: true,
    demandOption: true,
  })
  .option('output', {
    type: 'string',
    normalize: true,
    default: path.relative(process.cwd(), path.resolve(__dirname, '..', 'src', 'contracts')),
    demandOption: true,
  })
  .option('clean', {
    type: 'boolean',
    default: true,
  })
  .option('prettier', {
    normalize: true,
    default: process.cwd(),
    defaultDescription: 'Relative to current working directory.',
    demandOption: true,
  })
  .pkgConf('codegen').argv;

(async () => {
  if (args.clean) {
    rimraf.sync(args.output);
  }

  if (!fs.existsSync(args.output)) {
    fs.mkdirSync(args.output);
  }

  const input = await (async () => {
    if (args.input && args.input.length) {
      const nested = args.input.map((item) => {
        if (item.indexOf('*') !== -1 || item.indexOf('{') !== -1) {
          return glob.sync(item);
        }

        if (fs.existsSync(item)) {
          const stats = fs.lstatSync(item);
          if (stats.isDirectory()) {
            return glob.sync(path.join(item, '**/*.json'));
          }

          if (stats.isFile()) {
            return [item];
          }
        }

        throw new Error(
          'Failed to recognize input path. Please pass the path to a file or directory or a glob pattern.',
        );
      });

      // @ts-ignore
      return nested.flat();
    }
  })();

  if (!input.length) {
    return;
  }

  const config = await prettier.resolveConfig(args.prettier);
  const result = input.map((item) => {
    const name = path.basename(item).split('.', 1)[0];
    const file = path.resolve(path.join(args.output, `${name}.ts`));
    const root = path.dirname(path.relative(file, path.normalize(path.resolve(__dirname, '..', 'src'))));

    const content = fs.readFileSync(item).toString('utf8');
    const input = JSON.parse(content);
    const code = generate(root, name, input.abi, input.userdoc, input.devdoc);
    const output = prettier.format(code, { ...config, parser: 'typescript' });

    return { name, output, file };
  });

  result.forEach((item) => {
    fs.writeFileSync(item.file, item.output, 'utf8');
  });

  const index = path.join(args.output, `index.ts`);
  const imports = result.map((item) => `export { ${item.name} } from './${item.name}';`);
  if (!fs.existsSync(index)) {
    fs.writeFileSync(index, `${imports.join('\n')}\n`, 'utf8');
  } else {
    fs.appendFileSync(index, `${imports.join('\n')}\n`, 'utf8');
  }
})();
