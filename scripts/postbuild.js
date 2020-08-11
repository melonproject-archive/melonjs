const fs = require('fs-extra');
const path = require('path');

const package = require('../package.json');
const root = path.resolve(__dirname, '..');
const out = path.join(root, 'dist');

fs.copySync(path.join(root, 'LICENSE'), path.join(out, 'LICENSE'));
fs.copySync(path.join(root, 'README.md'), path.join(out, 'README.md'));
fs.copySync(
  path.join(root, 'CODE_OF_CONDUCT.md'),
  path.join(out, 'CODE_OF_CONDUCT.md'),
);

fs.writeJSON(
  path.join(out, 'package.json'),
  {
    name: package.name,
    version: package.version,
    description: package.description,
    author: package.author,
    license: package.license,
    homepage: package.homepage,
    repository: package.repository,
    bugs: package.bugs,
    keywords: package.keywords,
    dependencies: package.dependencies,
  },
  {
    spaces: 2,
  },
);
