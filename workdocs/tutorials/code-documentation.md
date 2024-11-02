```
/**
 * @summary Function summary
 * @description Function description
 *
 * @mermaid
 *   sequenceDiagram
 *     Alice ->> Bob: Hello Bob, how are you?
 *     Bob-->>John: How about you John?
 *     Bob--x Alice: I am good thanks!
 *     Bob-x John: I am good thanks!
 *     Note right of John: Bob thinks a long<br/>long time, so long<br/>that the text does<br/>not fit on a row.
 *
 *     Bob-->Alice: Checking with John...
 *     Alice->John: Yes... John, how are you?
 *
 * @param {string} [arg1] defaults to 'default'
 *
 * @function helloWorld
 * @memberOf module:ts-workspace
 */
export function complexFunction(arg1: string = "default",) {
  return "Hello World" + arg1;
}

```

```
/**
 * @summary Module summary
 * @description Module description
 * @module ts-workspace
 */

/**
 * @summary Namespace summary
 * @description Namespace description
 * @namespace Namespace
 * @memberOf module:ts-workspace
 */

/**
 * @summary stores the current package version
 * @description this is how you should document a constant
 * @const VERSION
 * @memberOf module:ts-workspace
 */


 /**
 * @summary type summary
 * @description type description
 *
 * @typedef T the description of the type
 *
 * @memberOf module:ts-workspace.Namespace
 */
export type Type<T> = string | T;


/**
 * @summary Interface summary
 * @description Interface description
 *
 * @interface Interface
 *
 * @memberOf module:ts-workspace.Namespace
 */
export interface Interface {
  /**
   * @summary Interface method summary
   * @description Interface method description
   *
   * @param {T} arg1
   */
  method<T>(arg1: T): Promise<string>;
}



/**
 * @summary child namespace summary
 * @description child namespace description
 * @namespace ChildNamespace
 * @memberOf module:ts-workspace.Namespace
 */


 /**
 * @summary This is how you document a class
 * @description
 *
 * @mermaid
 *   sequenceDiagram
 *     Alice ->> Bob: Hello Bob, how are you?
 *     Bob-->>John: How about you John?
 *     Bob--x Alice: I am good, thanks!
 *     Bob-x John: I am good, thanks!
 *     Note right of John: Bob thinks a long<br/>long time, so long<br/>that the text does<br/>not fit on a row.
 *
 *     Bob-->Alice: Checking with John...
 *     Alice->John: Yes... John, how are you?
 *
 * @typedef T
 *
 * @param {T} arg1 constructor argument description
 * @param {string} [arg2] optional constructor argument description
 *
 * @class Class
 * @implements Interface
 *
 * @memberOf module:ts-workspace.Namespace
 */
import { Interface } from "./Interface";

export class Class implements Interface {
  /**
   * @summary class property summary
   * @description class property description
   *
   * @property {any} prop
   *
   * @private
   */
  private prop!: unknown;

  constructor(arg1: unknown, arg2: string) {
    console.log(arg1, arg2);
  }

  /**
   * @summary async class method summary
   * @description async class method description
   *
   * @throws {Error} it always throws an error
   */
  async method<T>(): Promise<string> {
    throw new Error("error" as T as unknown as string);
  }

  /**
   * @summary static class method summary
   * @description static class method description
   *
   * @throws {Error} it always throws an error
   */
  static method() {
    throw new Error("error");
  }
}


import { Class } from "../Class";
import { Type } from "../type";

/**
 * @summary function summary
 * @description function description
 *
 * @typedef T extends {@link Class}
 * @typedef V args
 *
 * @param {V[]} args
 *
 * @see Type
 *
 * @memberOf module:ts-workspace.Namespace.ChildNameSpace
 */
export function something<T extends Class, V>(this: T, ...args: V[]): Type<T> {
  console.log(...args);
  return this;
}

/**
 * @summary enum summary
 * @description enum description
 *
 * @property {string} OPTION1 enum value description
 * @memberOf module:ts-workspace.Namespace.ChildNameSpace
 */
export enum Enum {
  OPTION1 = "something",
}

/**
 * @summary Interface summary
 * @description Interface description
 * @category Namespace
 */
import { Interface } from "../Interface";
/**
 * @summary Interface summary
 * @description Interface description
 *
 * @typedef T
 *
 * @interface ChildInterface
 * @extends Interface
 *
 * @memberOf module:ts-workspace.Namespace.ChildNameSpace
 */
export interface ChildInterface<T> extends Interface {
  /**
   * @summary Interface method summary
   * @description Interface method description
   *
   * @param {T} arg1
   */
  method2(arg1: T): Promise<string>;
}

import { Class } from "../Class";
import { ChildInterface } from "./ChildInterface";

/**
 * @summary child class summary
 * @description child class description
 *
 * @param {T} arg1 constructor argument description
 * @param {string} [arg2] optional constructor argument description
 *
 * @class ChildClass
 * @extends Class
 * @implements ChildInterface<T>
 *
 * @memberOf module:ts-workspace.Namespace.ChildNameSpace
 */
export class ChildClass<T> extends Class implements ChildInterface<T> {
  /**
   * @summary child class property summary
   * @description child class property description
   *
   * @property {T} [prop]
   *
   * @private
   */
  private prop2?: T;

  constructor(arg1: T, arg2: string) {
    super(arg1, arg2);
    this.prop2 = arg1;
  }

  /**
   * @summary overridden class method summary
   * @description overridden class method description
   *
   * @throws {Error} always
   */
  async method<V>(): Promise<string> {
    return "ok" as unknown as V as unknown as string;
  }

  /**
   * @summary class method summary
   * @description class method description
   *
   * @param {T} arg1
   *
   * @throws {Error} always
   */
  method2(arg1: T): Promise<string> {
    throw new Error("error" + arg1);
  }
}



```
