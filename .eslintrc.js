module.exports = {
    parser: '@babel/eslint-parser',
    env: {},
    extends: 'frontend-rules',
    globals: {
        window: true,
        document: true,
        test: true,
        expect: true,
        describe: true
    },
    rules: {
        camelcase: 0,
        'no-console': 0,
        'no-var': 0,
        'arrow-body-style': 0,
        'react/forbid-prop-types': 0,
        'react/prop-types': 0,
        'react/destructuring-assignment': 0,
        'no-underscore-dangle': 0,
        'no-unsafe-optional-chaining': 0,
        'no-param-reassign': 0
    }
};
