module.exports = {
  parser: 'babel-eslint',
  extends: [
    'airbnb',
    'prettier',
    'plugin:prettier/recommended',
    'prettier/react',
    'plugin:import/errors',
    'plugin:import/warnings',
  ],
  plugins: ['babel', 'import', 'prettier', 'security'],
  env: {},
  rules: {
    'linebreak-style': 0,
    'no-shadow': 0,
    // 'react-native/no-unused-styles': 2,
    // 'react-native/split-platform-components': 2,
    // 'react-native/no-inline-styles': 2,
    // 'react-native/no-color-literals': 2,
    'react/jsx-filename-extension': [
      1,
      {
        extensions: ['.js', '.jsx'],
      },
    ],
    'react/jsx-indent': [0, 2],
    // 'react/prefer-stateless-function': [0],
    'import/prefer-default-export': ['off'],
    'react/forbid-prop-types': [
      0,
      {
        forbid: ['any', 'array', 'object'],
      },
    ],
    'no-console': 0,
    // 'no-underscore-dangle': [
    //   1,
    //   {
    //     allowAfterThis: true,
    //   },
    // ],
    // 'arrow-parens': ['error', 'as-needed'],
    'object-curly-newline': [
      'error',
      {
        ObjectExpression: {
          consistent: true,
          minProperties: 10,
        },
        ObjectPattern: {
          consistent: true,
          minProperties: 10,
        },
      },
    ],
    // 'prettier/prettier': [
    //   'error',
    //   {
    //     singleQuote: true,
    //     trailingComma: 'all',
    //     bracketSpacing: true,
    //     jsxBracketSameLine: false,
    //     semi: true,
    //     printWidth: 100,
    //     tabWidth: 2,
    //     useTabs: false,
    //     parser: 'babylon',
    //     arrowParens: 'avoid',
    //   },
    // ],
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: true,
        optionalDependencies: true,
        peerDependencies: true,
      },
    ],
    // 'react/display-name': [0, { ignoreTranspilerName: false }],
    // 'react/destructuring-assignment': [0, 'always'],
    // 'react-native/split-platform-components': [0],
    'react/sort-comp': [
      2,
      {
        order: [
          'static-methods',
          'type-annotations',
          'instance-variables',
          'lifecycle',
          'instance-methods',
          'everything-else',
          'render',
        ],
      },
    ],
  },
  settings: {
    'import/resolver': {
      'babel-module': {
        config: '.babelrc',
      },
    },
  },
};
