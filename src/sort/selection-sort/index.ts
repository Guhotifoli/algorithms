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

  for (let i = 0; i < length - 1; i++) {
    minElementIndex = i;

    for (let j = i; j < length; j++) {
      if (compareFn(array[minElementIndex], array[j])) {
        minElementIndex = j;
      }
    }

    if (i !== minElementIndex) {
      swap(i, minElementIndex, array);
    }
  }

  return array;
}
