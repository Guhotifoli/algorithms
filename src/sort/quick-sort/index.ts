import { compareBiggerThan } from '@/helpers/compare';

function partition<T>(array: T[], compareFn: Function, left: number, right: number) {
  // 先指定一个基准值
  const pivot = array[left];
  // 判断左右指针是否重合，重合就停止循环
  while (left < right) {
    // 右指针循环，从右往左
    while (left < right && compareFn(array[right], pivot)) {
      // 继续向左
      --right;
    }
    // 发现大于基准值的值，放到右边
    array[left] = array[right];
    // 左指针循环，从左往右
    while (left < right && !compareFn(array[left], pivot)) {
      // 继续向右
      ++left;
    }
    // 发现小于等于基准值的值，放到左边
    array[right] = array[left];
  }
  // 当左右指针停止的时候，将当前基准值的位置赋值为基准值
  // 当左右指针停止的时候，此时的位置就是基准值的位置
  array[left] = pivot;
  return left;
}

export function quickSort<T>(
  array: T[],
  compareFn = compareBiggerThan,
  left = 0,
  right = array.length - 1,
) {
  if (left < right) {
    const pivot = partition(array, compareFn, left, right);
    quickSort(array, compareFn, left, pivot - 1);
    quickSort(array, compareFn, pivot + 1, right);
  }
  return array;
}
