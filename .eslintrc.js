module.exports = {
	root: true,
	env: {
		browser: false,
		es2020: true,
		'cypress/globals': true,
	},
	plugins: ['cypress'],
	extends: ['plugin:cypress/recommended'],
	rules: {
		'cypress/no-assigning-return-values': 'error',
		'cypress/no-unnecessary-waiting': 'error',
		'cypress/assertion-before-screenshot': 'warn',
		'cypress/no-force': 'warn',
		'cypress/no-async-tests': 'error',
		'cypress/no-pause': 'error',
		'cypress/unsafe-to-chain-command': 'warn',
	},
};
