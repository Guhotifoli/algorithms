export function compareLessThan<T>(current: T, next: T): boolean {
  return current < next;
}
export function compareBiggerThan<T>(current: T, next: T): boolean {
  return current > next;
}
export function compareEqual<T>(current: T, next: T): boolean {
  return current === next;
}
