import { getFormat } from '../src/parsers.js';

test('getFormat recognizes the format of the input file', () => {
  expect(getFormat('file.yml')).toEqual('YAML');
  expect(getFormat('file.yaml')).toEqual('YAML');
  expect(getFormat('file.json')).toEqual('JSON');
  expect(() => getFormat('file.fail')).toThrow(/Unknown format/);
});
