const set = new Set([1, 2, 2, 2, 3, 3, 4]);

console.log(set);

set.add(5);

console.log(set);

console.log(set.has(3));
console.log(set.has(6));

set.delete(5);

console.log(set);

const setArray = Array.from(set);
console.log(setArray);

for (const item of set) {
  console.log(item);
}

const iterator = set.values();

console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());

set.clear();

console.log(set);