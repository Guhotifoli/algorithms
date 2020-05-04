import { compareBiggerThan } from '@/helpers/compare';

export function inserttionSort<T>(array: T[], compareFn = compareBiggerThan): T[] {
  const length = array.length;

  // 先将起点设为1，取出来跟前面的比较
  for (let i = 1; i < length; i++) {
    // 将当前的位置提出来
    let current = array[i];
    // 取出前一位元素来比较，前面n-1个元素当它们已经排好序
    let j = i - 1;
    // 保证前一个位置存在，并且当前j位置的元素与当前提出来的元素
    // 相比较时要大，当前的元素与当前元素后面的元素换位
    while (j >= 0 && compareFn(array[j], current)) {
      array[j + 1] = array[j];
      j--; // 让j递减，向前遍历
    }
    // 将空出来的位置插入开始循环的元素
    array[j + 1] = current;
  }

  return array;
}
