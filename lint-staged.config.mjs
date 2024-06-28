/** @type {import('lint-staged').Configuration} */
const lintStagedConfig = {
  '*.{js,jsx,ts,tsx}': 'eslint',
};

export default lintStagedConfig;
