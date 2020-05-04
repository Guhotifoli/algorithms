import { normalBubbleSort, optimizeBubbleSort } from '..';
import { testSortAlgorithms } from '../../test-utils/test-sort-algorithms';

testSortAlgorithms(normalBubbleSort, '普通冒泡排序');
testSortAlgorithms(optimizeBubbleSort, '优化后冒泡排序');
