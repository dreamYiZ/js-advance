function generateArr(n, max = 1000) {
  let arr = [];
  while (n) {
    arr.push(Math.floor(Math.random() * max));
    n--;
  }
  return arr;
}

var arr = generateArr(100, 100);

console.log("数组长度：", arr.length);
console.log(arr);

function swap(a, b) {
  // console.log(`交换元素${arr[a]},${arr[b]}`);
  let temp = arr[a];
  arr[a] = b;
  arr[b] = temp;
  // console.log(`交换元素后${arr[a]},${arr[b]}`);
}

function partition(arr, lo, hi) {
  let pivot = arr[hi];
  let i = lo;
  for (let j = lo; j < hi; j++) {
    if (arr[j] < pivot) {
      if (j > i) {
        swap(i, j);
      }
      i++;
    } else {
      swap(j, hi);
    }
  }
  // swap(i, hi);
  return i;
}

function quickSort(arr, lo, hi) {
  console.log(`quickSort call arr:${arr}, lo:${lo}, hi:${hi}`);
  if (lo < hi) {
    let p = partition(arr, lo, hi);
    quickSort(arr, lo, p - 1);
    quickSort(arr, p + 1, hi);
  }
}

quickSort(arr, 0, arr.length - 1);

console.log("排序后：", arr);
