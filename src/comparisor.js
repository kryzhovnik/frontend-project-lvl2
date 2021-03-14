import _ from 'lodash';

const compareObjects = (obj1, obj2) => {
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

export default compareObjects;
