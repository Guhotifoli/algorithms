export function swap<T>(firstIndex: number, secondIndex: number, array: T[]) {
  [array[firstIndex], array[secondIndex]] = [array[secondIndex], array[firstIndex]];
}
