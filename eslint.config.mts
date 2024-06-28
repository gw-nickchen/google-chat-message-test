import { createConfig } from '@gateweb/eslint-config-gateweb';

export default createConfig({
  react: false,
  type: 'lib',
  prettier: true,
  rules: {
    camelcase: 'off',
    'import-x/no-cycle': 'off',
  },
});
