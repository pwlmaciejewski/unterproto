var config = module.exports;

config.main = {
  rootPath: "../"
};

config.node = {
	extends: 'main',
  environment: "node",    
  tests: ["test/test*.js"]
};

config.browser = {
	extends: 'main',
	environment: 'browser',
	sources: ['lib/unterproto.js'],
	tests: ['test/test*.js']
};

config.amd = {
	extends: 'main',
	autoRun: false,
	deps: ['test/amd/require.js'],
	environment: 'browser',
	resources: ['lib/unterproto.js'],
	tests: ['test/test*.js']
};