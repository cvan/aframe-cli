#!/usr/bin/env node

const logger = require('loggy');

const publishTemplates = require('../lib/publish-templates');

if (module.parent) {
  logger.error('`npm run release-templates` should be called from the command line');
  process.exit(1);
}

const argv = process.argv.slice(2);
let version = argv[1];

if (!version) {
  version = require('../package.json').version;
}

publishTemplates(version);
