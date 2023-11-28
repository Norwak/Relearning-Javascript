function hasDuplicateIds(root, idSet = new Set()) {
  if (!root) return false;

  if (idSet.has(root.id)) return true;

  if (root.id) idSet.add(root.id);

  if (root.hasChildNodes()) {
    for (const child of root.children) {
      if (hasDuplicateIds(child, idSet)) {
        return true;
      };
    }
  }

  return false;
}

module.exports = hasDuplicateIds;