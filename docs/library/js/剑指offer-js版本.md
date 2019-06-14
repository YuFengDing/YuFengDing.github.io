## 二维数组中是否存在某一整数
题目描述:数组每一行递增，同一行上每一列递增
```
function dyadicArrayFindNumbers(arr, target) {
  let symbolY = arr.length - 1;
  let symbolX = 0;
  if (arr.length === 0 || arr[0].length === 0) return false;
  while (symbolY >= 0 && symbolX <= (arr[0].length - 1)) {
    if (arr[symbolY][symbolX] > target) {
      symbolY--;
    } else if (arr[symbolY][symbolX] < target) {
      symbolX++;
    } else {
      return true;
    }
  }
  return false;
}
console.log(dyadicArrayFindNumbers([[1, 2, 3], [4, 5, 6], [7, 8, 9]], 11));

```