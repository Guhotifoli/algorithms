import { compareBiggerThan } from '@/helpers/compare';

function partition<T>(
  array: T[],
  compareFn = compareBiggerThan,
  left: number,
  right: number,
) {
  const pivot = array[left];
  while (left < right) {
    while (left < right && compareFn(array[right], pivot)) {
      --right;
    }
    array[left] = array[right];
    while (left < right && !compareFn(array[left], pivot)) {
      ++left;
    }
    array[right] = array[left];
  }
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
