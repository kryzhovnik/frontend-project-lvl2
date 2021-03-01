#!/usr/bin/env node

const { program } = require('commander');

const run = (filepath1, filepath2, options) => {
  console.log(`The first file: ${filepath1}`);
  console.log(`The second file: ${filepath2}`);
  console.log(`Options: ${JSON.stringify(options)}`);
};

program.description('Compares two configuration files and shows a difference.')
  .version('1.0.0')
  .helpOption('-h, --help', 'output usage information')
  .arguments('<filepath1> <filepath2>')
  .option('-f, --format [type]', 'output format')
  .action(run);

program.parse(process.argv);
