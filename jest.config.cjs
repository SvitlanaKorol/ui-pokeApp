module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  "transformIgnorePatterns": [
    "/node_modules/",
    "\\.pnp\\.[^\\\/]+$",
    "\\.png$"
  ],
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  moduleNameMapper: {
    '\\.module\\.scss$': 'identity-obj-proxy',
  },
};