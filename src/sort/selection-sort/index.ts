import { compareBiggerThan } from '@/helpers/compare';
import { swap } from '@/helpers/swap';

/**
 * @description 双循环选择排序
 * @description 最优：O(n^2) 平均：0(n^2) 最坏：0(n^2)
 * @param array 待排序数组
 * @param compareFn 传入的比较方法
 */
export function selectionSort<T>(array: T[], compareFn = compareBiggerThan): T[] {
  let minElementIndex: number;
  const length = array.length;

  // 开始外层循环，因为有最后一轮比较，外层循环不遍历到最后一个元素
  for (let i = 0; i < length - 1; i++) {
    // 先将最小值的位置指向每次外层循环的索引
    minElementIndex = i;
    // 开始内层循环，内层循环
    for (let j = i; j < length; j++) {
      // 找到内层循环的当前最小值的位置
      if (compareFn(array[minElementIndex], array[j])) {
        minElementIndex = j;
      }
    }
    // 判断当前循环的起点是否为最小值的位置，如果不是就交换位置
    if (i !== minElementIndex) {
      swap(i, minElementIndex, array);
    }
  }

  return array;
}
