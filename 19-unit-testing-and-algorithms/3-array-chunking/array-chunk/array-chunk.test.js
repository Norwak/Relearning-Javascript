const assert = require('assert');
const arrayChunk = require('./array-chunk.js');

describe('Array Chunking', function() {
  it('should create chunks of a specific size', function() {
    assert.deepEqual(arrayChunk([1, 2, 3, 4, 5, 6], 2), [[1, 2], [3, 4], [5, 6]]);
    assert.deepEqual(arrayChunk([1, 2, 3, 4], 3), [[1, 2, 3], [4]]);
  });
});