const { defineConfig } = require('cypress');

module.exports = defineConfig({
	e2e: {
		setupNodeEvents(on, config) {},
		baseUrl: 'https://mostly.ai',
		viewportWidth: 1920,
		viewportHeight: 1080,
	},
});
