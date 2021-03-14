import fs from 'fs';
import path from 'path';
import yaml from 'js-yaml';

const getFormat = (filepath) => {
  const extname = path.extname(filepath);

  switch (extname) {
    case '.json':
      return 'JSON';
    case '.yaml':
    case '.yml':
      return 'YAML';
    default:
      throw new Error(`Unknown format for "${extname}" extension.`);
  }
};

const parserJSON = (filepath) => {
  const resolvedPath = path.resolve(filepath);

  const data = fs.readFileSync(resolvedPath, { encoding: 'utf8' });

  return JSON.parse(data);
};

const parserYAML = (filepath) => {
  const resolvedPath = path.resolve(filepath);

  const data = fs.readFileSync(resolvedPath, { encoding: 'utf8' });

  return yaml.load(data);
};

const getParser = (format) => {
  switch (format) {
    case 'JSON':
      return parserJSON;
    case 'YAML':
      return parserYAML;
    default:
      throw new Error(`Unknown parser for the "${format}" format.`);
  }
};

const parseFiles = (filepath1, filepath2) => {
  const format = getFormat(filepath1);
  const parse = getParser(format);

  return [parse(filepath1), parse(filepath2)];
};

export { getFormat, parseFiles };
