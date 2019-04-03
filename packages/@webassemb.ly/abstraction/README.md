Signal Interface
================

Overview
--------

A common pattern in TypeScript is to define discrimnated unions for creating
signaling interfaces. There can be quite a lot of boilerplate associated with
defining and creating both the emitting and receiving sides of the interface.

This library attempts to automate the process of creating signalling interfaces.
While simultaneously enabling type safety.

Unfortunately, it is not possible to do this using the TypeScript type system.
This arises from the fact that in TypeScript it is impossible to create or
infer a unique interface at runtime.

**Signalling for functions**

```ts
function test(x: number, y: number) {
  x > y;
}

const emitter = createEmitter(test);
const receiver = createReceiver(test);

const result = receiver(emitter(0, 1)) // boolean
```

**Signalling for interface instances**

```ts
const { emitters, receivers } = createInterface({
  add(x: number, y: number) {
    return x + y;
  },
});

const sum = receivers.add(emitters.add(0, 1)); // number
```

Why
---

This library enables you to maintain type safety in functional interfaces which
use message passing to communicate between threads.

API
---

- [createEmitter](./src/utils/createEmitter.ts)
- [createReceiver](./src/utils/createReceiver.ts)
- [createEmitters](./src/utils/createEmitters.ts)
- [createReceivers](./src/utils/createReceivers.ts)
- [createSignalInterface](./src/utils/createSignalInterface.ts)

- [types](./src/types.ts)

TODO
----

1. Write unit tests