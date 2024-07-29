// ============= Test Cases =============
import type { Equal, Expect } from "./test-utils";

type cases = [
  Expect<Equal<Last<[2]>, 2>>,
  Expect<Equal<Last<[3, 2, 1]>, 1>>,
  Expect<Equal<Last<[() => 123, { a: string }]>, { a: string }>>
];

// ============= Your Code Here =============
// 考点：infer的用法，后置的用法

// type Last<T extends any[]> = T extends [infer U, ...infer R]
//   ? R extends []
//     ? U
//     : Last<R>
//   : never;

// more elegant
type Last<T extends any[]> = T extends [...infer U, infer R] ? R : never;
