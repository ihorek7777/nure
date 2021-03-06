// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: true,
  },
  extends: 'airbnb-base',
  // required to lint *.vue files
  plugins: [
    'html'
  ],
  // check if imports actually resolve
  settings: {
    'import/resolver': {
      webpack: {
        config: 'build/webpack.base.conf.js'
      }
    }
  },
  // add your custom rules here
  rules: {
    // don't require .vue extension when importing
    'import/extensions': ['error', 'always', {
      js: 'never',
      vue: 'never'
    }],
    // disallow reassignment of function parameters
    // disallow parameter object manipulation except for specific exclusions
    'no-param-reassign': ['error', {
      props: true,
      ignorePropertyModificationsFor: [
        'state', // for vuex state
        'acc', // for reduce accumulators
        'e' // for e.returnvalue
      ]
    }],
    // allow optionalDependencies
    /*
    'import/no-extraneous-dependencies': ['error', {
      optionalDependencies: ['test/unit/index.js']
    }],
    */
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-new': 'off',
    'semi': 'off',
    //'comma-dangle': 'off',
    'no-return-await': 'off',
    'comma-dangle': 'off',
    'no-trailing-space': 'off',
    'no-console': 'off',
    'import/no-extraneous-dependencies': 'off',
    'import/export': 'off',
    'import/prefer-default-export': 'off',
    'no-else-return': 'off',
    'consistent-return': 'off',
    'arrow-body-style': 'off',
    'max-len': 'off',
    'no-underscore-dangle': 'off',
    'prefer-const': 'off',
    'arrow-parens': 'off',
    'no-confusing-arrow': 'off',
  }
}
