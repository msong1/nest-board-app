import antfu from '@antfu/eslint-config';

export default antfu({
  stylistic: {
    semi: true,
  },
  rules: {
    'no-console': 'off',
    'ts/consistent-type-imports': 'off',
  },
});
