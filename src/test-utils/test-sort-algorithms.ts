export function testSortAlgorithms(sortAlgorithm: Function, algorithmName: string) {
  describe(algorithmName, () => {
    // const noSortArray = [3, 2, 1];
    // const sortedArray = [1, 2, 3];
    const noSortArray = [13, 45, 2, 76, 32, 90, 5, 31];
    const sortedArray = [2, 5, 13, 31, 32, 45, 76, 90];
    const noSortStringArray = ['1', '15', '3764', '213'];
    const sortedStringArray = ['1', '15', '213', '3764'];

    it(`测试空数组`, () => {
      expect(sortAlgorithm([])).toEqual([]);
    });

    it(`测试无序数组能否正常排序`, () => {
      expect(sortAlgorithm(noSortArray)).toEqual(sortedArray);
    });

    it(`测试有序数组能否正常排序`, () => {
      expect(sortAlgorithm(sortedArray)).toEqual(sortedArray);
    });

    // it(`测试字符串类型的数组能否正常排序`, () => {
    //   const handleSort = (curr: string, next: string): boolean => {
    //     return curr.length > next.length;
    //   };

    //   expect(sortAlgorithm(noSortStringArray, handleSort)).toEqual(sortedStringArray);
    // });
  });
}
