export const b = 123;

export default {
  bbb: 333,
  foo: 1,
} as { foo: 1 };

type C = any;

export const foo: C = <T extends {}>(): {
  a: 1;
} => {
  return { a: 1 };
};
