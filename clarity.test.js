/* This is free and unencumbered software released into the public domain. */

import * as clarity from './clarity.js';

test('append', () => {
  expect(clarity.append([], 1)).toEqual([1])
  expect(clarity.append([1], 2)).toEqual([1, 2])
  expect(clarity.append([1, 2, 3], 4)).toEqual([1, 2, 3, 4])
});

test('asContract', () => {
  // TODO
});

test('atBlock', () => {
  // TODO
});

test('blockHeight', () => {
  // TODO
});

test('concat (list)', () => {
  expect(clarity.concat([], [])).toEqual([])
  expect(clarity.concat([1], [])).toEqual([1])
  expect(clarity.concat([], [1])).toEqual([1])
  expect(clarity.concat([1], [2])).toEqual([1, 2])
  expect(clarity.concat([1, 2], [3, 4])).toEqual([1, 2, 3, 4])
});

test('concat (buff)', () => {
  expect(clarity.concat(Uint8Array.of(), Uint8Array.of())).toEqual(Uint8Array.of())
  expect(clarity.concat(Uint8Array.of(1), Uint8Array.of())).toEqual(Uint8Array.of(1))
  expect(clarity.concat(Uint8Array.of(), Uint8Array.of(1))).toEqual(Uint8Array.of(1))
  expect(clarity.concat(Uint8Array.of(1), Uint8Array.of(2))).toEqual(Uint8Array.of(1, 2))
  expect(clarity.concat(Uint8Array.of(1, 2), Uint8Array.of(3, 4))).toEqual(Uint8Array.of(1, 2, 3, 4))
});
