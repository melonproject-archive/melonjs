import sourcemaps from 'rollup-plugin-sourcemaps';
import node from 'rollup-plugin-node-resolve';

export default [
  {
    input: 'dist/index.js',
    output: {
      file: 'dist/bundle.umd.js',
      format: 'umd',
      name: 'melonJs',
      sourcemap: true,
      exports: 'named',
    },
    plugins: [node(), sourcemaps()],
    onwarn,
  },
  {
    input: 'dist/index.js',
    output: {
      file: 'dist/bundle.esm.js',
      format: 'esm',
      sourcemap: true,
    },
    plugins: [node(), sourcemaps()],
    onwarn,
  },
  {
    input: 'dist/bundle.esm.js',
    output: {
      file: 'dist/bundle.cjs.js',
      format: 'cjs',
      sourcemap: true,
    },
    onwarn,
  },
];

export function onwarn(message) {
  const suppressed = ['UNRESOLVED_IMPORT', 'THIS_IS_UNDEFINED'];

  if (!suppressed.find(code => message.code === code)) {
    return console.warn(message.message);
  }
}
