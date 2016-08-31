import Ember from 'ember';
import Immutable from 'immutable';
import { module, test } from 'qunit';

const { typeOf } = Ember;
module('Unit | Utility | Immutable');

test('it is properly shimmed', (assert) => {
  assert.ok(Immutable);
  assert.equal(typeOf(Immutable.Map), 'function');
  assert.equal(typeOf(Immutable.List), 'function');
});

test('we have shimmed the right stuff', (assert) => {
  const map = Immutable.Map();
  assert.ok(map);
  assert.equal(typeOf(map.get), 'function');
  assert.equal(typeOf(map.set), 'function');
});
