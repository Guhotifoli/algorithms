export function testSortAlgorithms(sortAlgorithm: Function, algorithmName: string) {
  describe(algorithmName, () => {
    let norSortArray = [13, 45, 2, 76, 32, 90, 5, 31];
    const sortedArray = [2, 5, 13, 31, 32, 45, 76, 90];

    it(`${algorithmName}--测试空数组`, () => {
      expect(sortAlgorithm([])).toEqual([]);
    });

    it(`${algorithmName}--测试无序数组能否正常排序`, () => {
      expect(sortAlgorithm(norSortArray)).toEqual(sortedArray);
    });

    it(`${algorithmName}--测试有序数组能否正常排序`, () => {
      expect(sortAlgorithm(sortedArray)).toEqual(sortedArray);
    });
  });
}
