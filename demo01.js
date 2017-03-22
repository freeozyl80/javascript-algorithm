/*
  算法题： 找出整型数组中乘积最大的三个数
*/
var unsorted_array = [-10, 7, 29, 30, 5, -10, -70];

console.log(computeProduct(unsorted_array)); // 21000

function sortIntegers(a, b) {
  return a - b;
}

// greatest product is either (min1 * min2 * max1 || max1 * max2 * max3)
function computeProduct(unsorted) {
  var sorted_array = unsorted.sort(sortIntegers),
    product1 = 1,
    product2 = 1,
    array_n_element = sorted_array.length - 1;

  // Get the product of three largest integers in sorted array
  for (var x = array_n_element; x > array_n_element - 3; x--) {
      product1 = product1 * sorted_array[x];
      console.log(product1,x);
  }
  product2 = sorted_array[0] * sorted_array[1] * sorted_array[array_n_element];
  // 算法题就是特别考验逻辑性，既然前面算出正数最大的了，那么负负得正最大就只有最小的两个数和最大的那个数了
  if (product1 > product2) return product1;

  return product2
};