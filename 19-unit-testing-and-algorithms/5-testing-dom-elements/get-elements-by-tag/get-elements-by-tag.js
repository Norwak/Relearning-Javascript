function getElementsByTag(root, tagName) {
  if (!root) return new Array();
  if (!tagName) return new Array(root);

  let result = new Array();

  // if root is a tag we're looking for
  if (root.tagName.toLowerCase() === tagName.toLowerCase()) {
    result.push(root);
  }

  if (root.hasChildNodes()) {
    for (const child of root.children) {
      result = result.concat(getElementsByTag(child, tagName));
    }
  }

  return result;
}

module.exports = getElementsByTag;