import fs from 'fs';
import path from 'path';
import gendiff from '../src/index.js';

const readFixture = (relativePath) => {
  const resolvedPath = path.resolve('__fixtures__', relativePath);
  const data = fs.readFileSync(resolvedPath, { encoding: 'utf8' });

  return data;
};

test('gendiff makes flat JSON comparison', () => {
  const file1Path = '__fixtures__/file1.json';
  const file2Path = '__fixtures__/file2.json';

  const wrongDiffFile = readFixture('wrong-file1-file2.diff');
  const diffFile = readFixture('file1-file2.diff');

  const diff = gendiff(file1Path, file2Path);
  expect(diff).not.toEqual(wrongDiffFile);
  expect(diff).toEqual(diffFile);
});

test('gendiff makes flat YAML comparison', () => {
  const file1Path = '__fixtures__/file1.yml';
  const file2Path = '__fixtures__/file2.yml';

  const wrongDiffFile = readFixture('wrong-file1-file2.diff');
  const diffFile = readFixture('file1-file2.diff');

  const diff = gendiff(file1Path, file2Path);
  expect(diff).not.toEqual(wrongDiffFile);
  expect(diff).toEqual(diffFile);
});
