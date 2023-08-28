const { defineConfig } = require('cypress');

module.exports = defineConfig({
	e2e: {
		setupNodeEvents(on, config) {
			require('cypress-mochawesome-reporter/plugin')(on);
		},
		baseUrl: 'https://mostly.ai',
		viewportWidth: 1920,
		viewportHeight: 1080,
	},
	reporter: 'cypress-mochawesome-reporter',
	reporterOptions: {
		charts: true,
		reportPageTitle: 'MostlyAI test report',
		saveAllAttempts: true,
	},
	retries: {
		runMode: process.env.CI ? 2 : 0,
		openMode: 0,
	},
});
