Array.prototype.myFilter = function(cb, array = this) {
    const result = [];
    for (let i = 0; i < array.length; i++) {
    if (cb(array[i], i, array )) result.push(array[i]);
    }
    return result;
  }

  const arr = [1, 2, 3, 4];
  const kek = [5, 6, 7, 8, 9, 10];
  const words = ['lala', 'kokoko', 'da', 'net'];

  const test = words.myFilter((item, index, array) => {
      console.log(item, index, array);
      return item.length > 3;
  });

  console.log(test);