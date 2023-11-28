function arrayChunk(array, size) {
  const chunked = new Array();

  for (const elem of array) {
    const last = chunked[chunked.length - 1];
    console.log(last);

    if (!last || last.length === size) {
      chunked.push([elem]);
    } else {
      last.push(elem);
    }
  }

  return chunked;
}

module.exports = arrayChunk;