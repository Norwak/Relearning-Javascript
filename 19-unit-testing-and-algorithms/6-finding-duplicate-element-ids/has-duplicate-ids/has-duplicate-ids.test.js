const hasDuplicateIds = require('./has-duplicate-ids.js');

describe('DOM tree has duplicate ids', function() {
  let root;
  let child1;
  let child2;

  beforeEach(function() {
    root = document.createElement('div');

    child1 = document.createElement('div');
    child2 = document.createElement('div');

    root.appendChild(child1);
    root.appendChild(child2);
  });

  afterEach(function() {
    root = null;
    child1 = null;
    child2 = null;
  });



  it('should be a function', function() {
    expect(typeof hasDuplicateIds).toEqual('function');
  });

  it('should return a boolean', function() {
    expect(typeof hasDuplicateIds()).toEqual('boolean');
  });

  it('should return false if no root element is passed in', function() {
    expect(hasDuplicateIds()).toEqual(false);
  });



  it('should return true if there are duplicate ids', function() {
    root.setAttribute('id', 'root');
    child1.setAttribute('id', 'child');
    child2.setAttribute('id', 'child');

    expect(hasDuplicateIds(root)).toEqual(true);

    root.setAttribute('id', 'child');
    child1.setAttribute('id', 'child');
    child2.setAttribute('id', 'child-new');

    expect(hasDuplicateIds(root)).toEqual(true);

    root.setAttribute('id', 'child');
    child1.setAttribute('id', 'child');
    child2.removeAttribute('id');

    expect(hasDuplicateIds(root)).toEqual(true);
  });
  


  it('should return false if there are no duplicate ids', function() {
    root.setAttribute('id', 'root');
    child1.setAttribute('id', 'child1');
    child2.setAttribute('id', 'child2');

    expect(hasDuplicateIds(root)).toEqual(false);

    root.setAttribute('id', '');
    child1.setAttribute('id', '');
    child2.setAttribute('id', '');

    expect(hasDuplicateIds(root)).toEqual(false);

    root.removeAttribute('id');
    child1.removeAttribute('id');
    child2.removeAttribute('id');

    expect(hasDuplicateIds(root)).toEqual(false);
  });
});