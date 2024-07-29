// ============= Test Cases =============
import type { Equal, Expect } from "./test-utils";

type cases = [
  Expect<Equal<TupleToUnion<[123, "456", true]>, 123 | "456" | true>>,
  Expect<Equal<TupleToUnion<[123]>, 123>>
];

// ============= Your Code Here =============
// 知识点
type TupleToUnion<T> = T extends [infer U, ...infer P]
  ? U | TupleToUnion<P>
  : never;