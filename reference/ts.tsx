// tslint:disable

/**
 *
 * IMPORT & EXPORTS
 *
 */

import { A as b, c } from './asdasd';
import A from './a'
import { C, b } from 'b'

export const foo = async function test() { }
export default {
  "a": 1,
  b: {
    1: "c",
    fn() {
      return 1;
    },
    fn: function () {

    },
    fn: () => { },
  }
}

export const a = { c: 1 }


/**
 * TS
 */

export interface IFoo<A = any> {
  a: {
    x: string;
    a: A;
    b: IFoo<1>;
  }
}

type La = string | { b?: La }
const xx: { c?: string } | boolean = true;
function aaa<T>(c: Array<T>): T { return; }

/**
 * DECLARATION STRUCTURES
 */

const a = []
const b = a[1][2]
const c = [
  {
    a() {
      let b = { a: [] }
      return a[1]
    }
  }
];
const d = { a: 1 }

/**
 *
 * CONDITIONALS
 *
 */

switch (true) {
  case: {
    return 1;
  }
}

if (a === 2) {
  1;
} else
  if (5) { throw 1; }

try { a; } catch (err) { }

/**
 *
 * VARIABLE DECLARATIONS
 *
 */

const a = a;
const b = aaa.bbb.ccc.d().aa.bb.cc;
const b = aaa.s.bbb.ccc.d().aa.bb.cc;

class Test extends Test { }
class test extends test { }
function a() { }
const a = () => { };
const A = (a, b) => 1;
const a = [...a];
let a = arr[0][1];
new Test();
Test.a;
const arr = [
  1, 2, (a) => 1,
  4, 5, '6',
];
const a = 1;

class InAClass {
  static a = 1;
  static b;
  c = 1;

  fn() { }
  fn = () => 1;
  fn = function () { };

  constructor() {
    a.b = 1;
    this.a = 1;
    const a = () => 1.3331231;
  }
}

/**
 *
 * CONSTANTS, GLOBALS
 *
 */

String;
Object.keys();
console.info;
process;
__dirname;
true;
null;
Infinity;
class A {
  constructor() {
    super();
    this.a = 1;
  }
}

/**
 *
 * TEMPLATES, STRINGS & COMPUTED PROPS
 *
 */

const str = 'aaa${s}';
const str = 'asdasd';
const str = `aaa${aaa}aaa`;

const obj = {
  [`aaa${prop[1]}`]: param().a,
};

const a = arr[`aaa ${a.c.d('w', 1.33)} aaa`];

/**
 *
 * DESTRUCTURING
 *
 */

const three = 1;
const assignment = { one: { two: three } };
const { one: { two: three } } = assignment;
const [a, { one: { two: three } }] = [1, assignment];

const fn = ([a, { c: d }], { one: { two: three = 1 } } = { one: { two: {} } }) => {
  return three;
};

const fn = (
  {
    one: {
      two: three = 1,
    },
  } = { one: { two: {} } },
) => {
  return three;
};

/**
 *
 * FUNCTIONS
 *
 */

const fn = () => {
  fn();
  method.fn();
  fn(fn(method.fn(1, fn())));
  fn(
    fn(
      method.fn(),
    ),
  );
};

console.log();
console.log;

class Test2 extends s {
  static prop = 1;
  prop = [];

  fn(param, ...params) { param(); }

  async fn(param, ...params) { param(aaaa); }

  fn = async ({ a = 1.3331231, b: { c } } = { a: 0x012331 }) => {
    const obj = fn({
      [`aaa${prop[`a${'test'}a`]}`]: param().a,
    });

    const arr = [
      1, 2, 3,
      4, 5, 6,
      `${wew[1]}`,
    ];

    const test = arr[0][1];

    process.env.NODE_ENV;
    process.exit;
    __dirname;

    this.fn();

    const [{ aaaa: { baa } }] = new Promise();

    const fn2 = fn(({ destruc: { stuff } }) => {
      const obj2 = { prop: { a: param().prototype.a } };
      console.log();
    });
  }

}
const { a: { baa } } = new Promise();
const { a: [c] } = new Promise();
const [c] = new Promise();

typeOf.Function();
typeOf.function = 1 % 22;
Object.keys();

const newObj = {
  a: b.c.d, // wew
  onChange: (value) => this.onChangeControl(control.id, value),
};

console.log();
console.log;
new Promise();
fn((param, { a: { param2 } }) => {
  console.log();
});

function myFn() {

}
