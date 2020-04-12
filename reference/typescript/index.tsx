import { b, foo } from './b';

// Assignment

const a = b + 1;
const a2 = a;
const a3 = a2;
const a4 = { one: { two: 3 } } as {
  x: 1, b: 2, one: any
};

// Destructuring

const { one: { two: three } } = a4;
const [d1, { one: { two: d3 } }] = [1, a4];

three;

// Functions

const fn = (
  {
    one: {
      two: x = 3,
    },
  }: { one: any } = { one: { two: {} } },
) => {
  return x;
}

const fn2 = ({ one: { two: x = 3 } }) => x
const fn3 = (x1: string, x2: number) => x1

fn2({} as any)
fn3;

// Interfaces


export interface IFoo<A = any> {
  a: {
    x: string;
    a: A;
    b: IFoo<1>;
  }
}

type La = string | { b?: La }
const xx: { c?: string } | boolean = true;
