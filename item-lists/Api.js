function* genItems() {
  let cnt = 0;
  while (true) {
    yield `Item ${cnt++}`;
  }
}
let data = [];
let items = genItems();

export function fetchItems() {
  newData = new Array(20).fill(null).map(() => items.next().value)
  data = [...data, ...newData]
  return Promise.resolve({
    json: () =>
      Promise.resolve(
        {items:data}
      )
  });
}