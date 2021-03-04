#!/usr/bin/env node
import program from 'commander';
import gendiff from '../src/index.js';

const run = (filepath1, filepath2, options) => {
  const diff = gendiff(filepath1, filepath2, options);
  console.log(diff);
};

program.description('Compares two configuration files and shows a difference.')
  .version('1.0.0')
  .helpOption('-h, --help', 'output usage information')
  .arguments('<filepath1> <filepath2>')
  .option('-f, --format [type]', 'output format')
  .action(run);

program.parse(process.argv);
