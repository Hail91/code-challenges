const squareList = (arr) => {
  let filteredArr = arr.filter((e) => {
    return e > 0 && e % 1 === 0;
  });
  let squaredArr = filteredArr.map((element) => {
    return element * element;
  });
  return squaredArr;
};

const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
console.log(squaredIntegers);
