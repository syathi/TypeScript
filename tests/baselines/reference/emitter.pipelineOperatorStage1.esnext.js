//// [emitter.pipelineOperatorStage1.esnext.ts]
declare const ar: Iterable<number>;
declare function map<T, U>(ar: Iterable<T>, fn: (v: T) => U): Iterable<U>;
declare function identity<T>(value: T): T;

const x = ar |> (_ => map(_, x => x + 1));
const y = ar |> identity;


//// [emitter.pipelineOperatorStage1.esnext.js]
const x = ar |> (_ => map(_, x => x + 1));
const y = ar |> identity;
