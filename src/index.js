import fs from 'fs';
import path from 'path';
import _ from 'lodash';

const readJSON = (filepath) => {
  const resolvedPath = path.resolve(filepath);

  const data = fs.readFileSync(resolvedPath, { encoding: 'utf8' });

  return JSON.parse(data);
};

const gendiff = (filepath1, filepath2) => {
  const obj1 = readJSON(filepath1);
  const obj2 = readJSON(filepath2);

  const keys = _.uniq(_.keys(obj1).concat(_.keys(obj2)));
  const sortedKeys = _.sortBy(keys, (e) => e);

  const lines = sortedKeys.map((key) => {
    if (_.has(obj1, key)) {
      if (_.has(obj2, key)) {
        if (obj1[key] === obj2[key]) {
          return `    ${key}: ${obj1[key]}`;
        }
        return [
          `  - ${key}: ${obj1[key]}`,
          `  + ${key}: ${obj2[key]}`,
        ].join('\n');
      }

      return `  - ${key}: ${obj1[key]}`;
    }

    return `  + ${key}: ${obj2[key]}`;
  });

  return `{\n${lines.join('\n')}\n}`;
};

export default gendiff;
