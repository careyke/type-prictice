// ============= Test Cases =============
import type { Equal, Expect } from "./test-utils";

type cases = [
  Expect<Equal<TrimLeft<"str">, "str">>,
  Expect<Equal<TrimLeft<" str">, "str">>,
  Expect<Equal<TrimLeft<"     str">, "str">>,
  Expect<Equal<TrimLeft<"     str     ">, "str     ">>,
  Expect<Equal<TrimLeft<"   \n\t foo bar ">, "foo bar ">>,
  Expect<Equal<TrimLeft<"">, "">>,
  Expect<Equal<TrimLeft<" \n\t">, "">>
];

// ============= Your Code Here =============
// 考点：infer在字符串中的用法
type TrimLeft<S extends string> = S extends `${infer T}${infer U}`
  ? T extends " " | "\n" | "\t"
    ? TrimLeft<U>
    : S
  : S;

type S = TrimLeft<"   123">;
