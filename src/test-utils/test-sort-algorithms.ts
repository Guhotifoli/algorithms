export function testSortAlgorithms(sortAlgorithm: Function, algorithmName: string) {
  describe(algorithmName, () => {
    let norSortArray = [13, 45, 2, 76, 32, 90, 5, 31];
    const sortedArray = [2, 5, 13, 31, 32, 45, 76, 90];

    it(`${algorithmName}--测试空数组`, () => {
      expect(sortAlgorithm([])).toEqual([]);
    });

    it(`${algorithmName}--测试正常排序`, () => {
      expect(sortAlgorithm(norSortArray)).toEqual(sortedArray);
    });
  });
}
