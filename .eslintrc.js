module.exports = {
	root: true,
	extends: ['@react-native-community', 'prettier', 'prettier/@typescript-eslint', 'prettier/react'],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		project: 'tsconfig.json',
		tsconfigRootDir: __dirname,
		sourceType: 'module'
	},
	env: {
		browser: true,
		es2021: true,
		node: true
	},
	plugins: ['@typescript-eslint'],
	ignorePatterns: ['.eslintrc.js'],
	overrides: [
		{
			files: ['*.ts', '*.tsx', '*.js', '*.jsx'],
			rules: {
				'@typescript-eslint/no-shadow': ['error'],
				'no-shadow': 'off',
				'no-undef': 'off'
			}
		}
	],
	rules: {
		'@typescript-eslint/interface-name-prefix': 'off',
		'@typescript-eslint/explicit-function-return-type': 'off',
		'@typescript-eslint/explicit-module-boundary-types': 'off',
		'@typescript-eslint/no-explicit-any': 'off',
		'array-bracket-spacing': ['error', 'never'],
		'arrow-parens': ['error', 'always'],
		'arrow-spacing': 'error',
		camelcase: 'error',
		'react-native/no-inline-styles': 0,
		'react-hooks/exhaustive-deps': 'warn',
		'comma-spacing': [
			'error',
			{
				after: true
			}
		],
		'comma-dangle': ['error', 'never'],
		'key-spacing': [
			'error',
			{
				afterColon: true
			}
		],
		'prettier/prettier': [
			'error',
			{
				printWidth: 120,
				tabWidth: 2,
				useTabs: true,
				semi: true,
				singleQuote: true,
				trailingComma: 'none',
				bracketSpacing: true,
				arrowParens: 'always',
				'no-inline-styles': false
			}
		],
		'no-console': ['error', { allow: ['warn', 'error', 'info'] }],
		'no-debugger': 'error',
		'no-duplicate-case': 'error',
		'object-curly-spacing': ['error', 'always'],
		'padding-line-between-statements': [
			'error',
			{
				blankLine: 'always',
				prev: '*',
				next: 'return'
			}
		],
		'prefer-const': 'error',
		'react/jsx-filename-extension': [
			0,
			{
				extensions: ['.{js,jsx}']
			}
		],
		quotes: [
			'error',
			'single',
			{
				avoidEscape: false,
				allowTemplateLiterals: true
			}
		],
		semi: ['error', 'always'],
		'sort-imports': [
			'error',
			{
				ignoreCase: true,
				allowSeparatedGroups: true,
				memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single']
			}
		]
	}
};
