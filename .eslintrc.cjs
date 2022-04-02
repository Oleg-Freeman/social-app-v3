module.exports = {
	env: {
		es2021: true,
		node: true,
	},
	extends: [
		'xo',
		'prettier'
	],
	plugins: ['prettier'],
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	rules: {
		'prettier/prettier': ['error'],
		'capitalized-comments': ['off']
		// 'indent': ['error', 4]
	},
};
