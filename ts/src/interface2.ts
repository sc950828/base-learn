// interface ToString {
//   (): string;
// }

// declare const sometingToString: ToString;

// sometingToString(); // ok

interface ToString {
  new (): string;
}

declare const sometingToString: ToString;

new sometingToString(); // ok
