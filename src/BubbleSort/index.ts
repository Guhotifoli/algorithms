import { compareBiggerThan } from '../helpers/compare';
import { swap } from '../helpers/swap';

/**
 * @description 最简单的双循环冒泡排序
 * @description 最优：O(n) 平均：0(n^2) 最坏：0(n^2)
 * @param array 待排序数组
 * @param compareFn 传入的比较方法
 */
export function normalBubbleSort<T>(array: T[], compareFn = compareBiggerThan): T[] {
  const length = array.length;

  // 外层循环一遍
  for (let i = 0; i < length; i++) {
    // 内层也循环一遍
    for (let j = 0; j < length - 1; j++) {
      // 比较两个数，当发现前一个比后一个大的时候，交换位置
      if (compareFn(array[j], array[j + 1])) {
        // 交换两个数的位置
        swap(j, j + 1, array);
      }
    }
  }

  return array;
}

/**
 * @description 优化后的双循环冒泡排序
 * @description 最优：O(n) 平均：0(n^2) 最坏：0(n^2)
 * @param array 待排序数组
 * @param compareFn 传入的比较方法
 */
export function optimizeBubbleSort<T>(array: T[], compareFn = compareBiggerThan): T[] {
  const length = array.length;

  // 外层循环一遍
  for (let i = 0; i < length; i++) {
    // 内层也循环一遍，因为i轮会重复一遍比较，减去
    for (let j = 0; j < length - 1 - i; j++) {
      // 比较两个数，当发现前一个比后一个大的时候，交换位置
      if (compareFn(array[j], array[j + 1])) {
        // 交换两个数的位置
        swap(j, j + 1, array);
      }
    }
  }

  return array;
}
