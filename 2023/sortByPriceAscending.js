function sortByPriceAscending(jsonStr) {
  const data = JSON.parse(jsonStr);

  data.sort((a, b) => {
    if (a.price < b.price) {
      return -1;
    } else if (a.price > b.price) {
      return 1;
    } else {
      return a.name.localeCompare(b.name);
    }
  });

  return JSON.stringify(data);
}

const jsonStr = '[{"name": "apple", "price": 1.25}, {"name": "banana", "price": 0.75}, {"name": "pear", "price": 1.25}]';
const sortedJsonStr = sortByPriceAscending(jsonStr);

console.log(sortedJsonStr);
