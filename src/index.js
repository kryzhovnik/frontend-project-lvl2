import { parseFiles } from './parsers.js';
import compareObjects from './comparisor.js';

const gendiff = (filepath1, filepath2) => {
  const [obj1, obj2] = [...parseFiles(filepath1, filepath2)];
  return compareObjects(obj1, obj2);
};

export default gendiff;
