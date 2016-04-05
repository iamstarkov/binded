import test from 'ava';
import binded from './index';

test('should binded', (t) =>
  t.same(binded('unicorns'), 'unicorns'));

test('should binded invalid input', (t) =>
  t.same(binded(), undefined));
