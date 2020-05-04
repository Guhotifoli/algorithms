import { compareLessThan, compareEqual, compareBiggerThan } from '@/helpers/compare';

describe('测试默认比较函数', () => {
  it('测试小于函数', () => {
    expect(compareLessThan(-1, 1)).toEqual(true);
    expect(compareLessThan(0, 1)).toEqual(true);
    expect(compareLessThan(1, -1)).toEqual(false);
    expect(compareLessThan(1, 1)).toEqual(false);
    expect(compareLessThan(-1, -1)).toEqual(false);
  });

  it('测试等于函数', () => {
    expect(compareEqual(-1, 1)).toEqual(false);
    expect(compareEqual(0, 1)).toEqual(false);
    expect(compareEqual(0, 0)).toEqual(true);
  });

  it('测试大于函数', () => {
    expect(compareBiggerThan(-1, 1)).toEqual(false);
    expect(compareBiggerThan(0, 1)).toEqual(false);
    expect(compareBiggerThan(1, -1)).toEqual(true);
    expect(compareLessThan(1, 1)).toEqual(false);
    expect(compareLessThan(-1, -1)).toEqual(false);
  });
});
