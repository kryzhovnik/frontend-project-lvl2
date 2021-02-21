#!/usr/bin/env node

const { program } = require('commander');

program.description('Compares two configuration files and shows a difference.')
program.version('1.0.0');
program.helpOption('-h, --help', 'output usage information');
program.parse(process.argv);

const options = program.opts();
