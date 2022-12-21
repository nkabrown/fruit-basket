import { litScss } from 'rollup-plugin-scss-lit';
import { fromRollup } from '@web/dev-server-rollup';

const scss = fromRollup(litScss);

export default {
  appIndex: 'lib/index.html',
  mimeTypes: {
    '**/*.scss': 'js'
  },
  nodeResolve: true,
  open: true,
  plugins: [scss()],
  port: 8004,
  rootDir: 'lib',
  watch: true
};
