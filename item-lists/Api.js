function* genItems() {
  let cnt = 0;
  while (true) {
    yield `Item ${cnt++}`;
  }
}

const items = genItems();

function filterAndSort(data, text, asc) {
  return data
    .filter(i => text.length === 0 || i.includes(text))
    .sort(
      asc
        ? (a, b) => (b > a ? -1 : a === b ? 0 : 1)
        : (a, b) => (a > b ? -1 : a === b ? 0 : 1)
    );
}

export function fetchItems(filter, asc) {
  return new Promise(resolve => {
    resolve({
      json: () =>
        Promise.resolve({
          items: new Array(20)
            .fill(null)
            .map(() => items.next().value)
        })
    });
  });
}