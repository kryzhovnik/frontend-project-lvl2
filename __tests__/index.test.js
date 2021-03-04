import { gendiff } from '../src/index.js';
import fs from 'fs';

test('gendiff', () => {
  const diffFilePath = '__tests__/fixtures/file1-file2.diff';
  const file1Path = '__tests__/fixtures/file1.json';
  const file2Path = '__tests__/fixtures/file2.json';
  const file1file2diff = fs.readFileSync(diffFilePath, { encoding:'utf8' });

  expect(gendiff(file1Path, file2Path)).toEqual(file1file2diff);
});
