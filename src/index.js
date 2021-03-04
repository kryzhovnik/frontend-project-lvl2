import fs from 'fs';
import _ from 'lodash';

const readJSON = (path) => {
  const data = fs.readFileSync(path, { encoding:'utf8' });
  return JSON.parse(data);
};

const gendiff = (filepath1, filepath2, options) => {
  const obj1 = readJSON(filepath1);
  const obj2 = readJSON(filepath2);

  const keys = _.uniq(_.keys(obj1).concat(_.keys(obj2))).sort();

  const lines = keys.map((key) => {
    if (obj1.hasOwnProperty(key)) {
      if (obj2.hasOwnProperty(key)) {
        if (obj1[key] === obj2[key]) {
          return "    " + key + ": " + obj1[key];
        } else {
          return [
            "  - " + key + ": " + obj1[key],
            "  + " + key + ": " + obj2[key]
          ].join("\n");
        }
      } else {
        return "  - " + key + ": " + obj1[key];
      };
    } else {
      return "  + " + key + ": " + obj2[key];
    }
  });

  return `{\n${lines.join("\n")}\n}`;
};

export { gendiff };
