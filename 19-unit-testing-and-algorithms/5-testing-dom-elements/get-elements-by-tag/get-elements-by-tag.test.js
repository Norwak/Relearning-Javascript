const getElementsByTag = require('./get-elements-by-tag.js');

describe('Get Elements By Tag', function() {
  it('should be a function', function() {
    expect(typeof getElementsByTag).toEqual('function');
  });

  it('should return an array', function() {
    expect(Array.isArray(getElementsByTag())).toEqual(true);
  });

  it('should return an empty array if no root is passed in', function() {
    expect(getElementsByTag()).toEqual(new Array());
  });

  it('should return only the root element if no tag name is passed in', function() {
    const root = document.createElement('div');
    expect(getElementsByTag(root)).toEqual([root]);
  });

  it('should return elements matching specified tag name', function() {
    const root = document.createElement('div');

    const p1 = document.createElement('p');
    const p2 = document.createElement('p');
    const p3 = document.createElement('p');
    const span = document.createElement('span');
    const strong = document.createElement('strong');

    root.appendChild(p1);
    root.appendChild(p2);
    root.appendChild(span);
    span.appendChild(strong);
    root.appendChild(p3);

    expect(getElementsByTag(root, 'div')).toEqual([root]);
    expect(getElementsByTag(root, 'p')).toEqual([p1, p2, p3]);
    expect(getElementsByTag(root, 'span')).toEqual([span]);
    expect(getElementsByTag(root, 'strong')).toEqual([strong]);
    expect(getElementsByTag(root, 'div, span')).toEqual([]);
  });
});