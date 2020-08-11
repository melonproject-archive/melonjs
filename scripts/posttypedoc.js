const fs = require('fs-extra');
const path = require('path');

const root = path.resolve(__dirname, '..');
const out = path.join(root, 'typedocs');

fs.copySync(path.join(root, '.typedocs.yaml'), path.join(out, '_config.yaml'));
