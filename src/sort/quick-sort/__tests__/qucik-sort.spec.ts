import { testSortAlgorithms } from '@/test-utils/test-sort-algorithms';
import { quickSort, quickSort2 } from '@/sort/quick-sort';

testSortAlgorithms(quickSort, '快速排序');
testSortAlgorithms(quickSort2, '快速排序2');
