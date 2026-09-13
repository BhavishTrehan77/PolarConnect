
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model News
 * 
 */
export type News = $Result.DefaultSelection<Prisma.$NewsPayload>
/**
 * Model Expedition
 * 
 */
export type Expedition = $Result.DefaultSelection<Prisma.$ExpeditionPayload>
/**
 * Model Researcher
 * 
 */
export type Researcher = $Result.DefaultSelection<Prisma.$ResearcherPayload>
/**
 * Model Photo
 * 
 */
export type Photo = $Result.DefaultSelection<Prisma.$PhotoPayload>
/**
 * Model PublicSummary
 * 
 */
export type PublicSummary = $Result.DefaultSelection<Prisma.$PublicSummaryPayload>
/**
 * Model Tag
 * 
 */
export type Tag = $Result.DefaultSelection<Prisma.$TagPayload>
/**
 * Model NewsTag
 * 
 */
export type NewsTag = $Result.DefaultSelection<Prisma.$NewsTagPayload>
/**
 * Model ExpeditionResearcher
 * 
 */
export type ExpeditionResearcher = $Result.DefaultSelection<Prisma.$ExpeditionResearcherPayload>
/**
 * Model ExpeditionTag
 * 
 */
export type ExpeditionTag = $Result.DefaultSelection<Prisma.$ExpeditionTagPayload>
/**
 * Model ResearcherTag
 * 
 */
export type ResearcherTag = $Result.DefaultSelection<Prisma.$ResearcherTagPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more News
 * const news = await prisma.news.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more News
   * const news = await prisma.news.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.PrismaClientConstructorArgs<ClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.news`: Exposes CRUD operations for the **News** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more News
    * const news = await prisma.news.findMany()
    * ```
    */
  get news(): Prisma.NewsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.expedition`: Exposes CRUD operations for the **Expedition** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Expeditions
    * const expeditions = await prisma.expedition.findMany()
    * ```
    */
  get expedition(): Prisma.ExpeditionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.researcher`: Exposes CRUD operations for the **Researcher** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Researchers
    * const researchers = await prisma.researcher.findMany()
    * ```
    */
  get researcher(): Prisma.ResearcherDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.photo`: Exposes CRUD operations for the **Photo** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Photos
    * const photos = await prisma.photo.findMany()
    * ```
    */
  get photo(): Prisma.PhotoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.publicSummary`: Exposes CRUD operations for the **PublicSummary** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PublicSummaries
    * const publicSummaries = await prisma.publicSummary.findMany()
    * ```
    */
  get publicSummary(): Prisma.PublicSummaryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tag`: Exposes CRUD operations for the **Tag** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tags
    * const tags = await prisma.tag.findMany()
    * ```
    */
  get tag(): Prisma.TagDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.newsTag`: Exposes CRUD operations for the **NewsTag** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more NewsTags
    * const newsTags = await prisma.newsTag.findMany()
    * ```
    */
  get newsTag(): Prisma.NewsTagDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.expeditionResearcher`: Exposes CRUD operations for the **ExpeditionResearcher** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ExpeditionResearchers
    * const expeditionResearchers = await prisma.expeditionResearcher.findMany()
    * ```
    */
  get expeditionResearcher(): Prisma.ExpeditionResearcherDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.expeditionTag`: Exposes CRUD operations for the **ExpeditionTag** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ExpeditionTags
    * const expeditionTags = await prisma.expeditionTag.findMany()
    * ```
    */
  get expeditionTag(): Prisma.ExpeditionTagDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.researcherTag`: Exposes CRUD operations for the **ResearcherTag** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ResearcherTags
    * const researcherTags = await prisma.researcherTag.findMany()
    * ```
    */
  get researcherTag(): Prisma.ResearcherTagDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.10.0
   * Query Engine version: 0edf323efd1d98336f3f0a68684b56f689b900d3
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * Resolved type of the argument passed to the `PrismaClient` constructor.
   *
   * When called without a narrower options type (the common case), this resolves
   * to `PrismaClientOptions` directly, which produces a clear TypeScript error
   * message (`not assignable to parameter of type 'PrismaClientOptions'`) when
   * the argument is missing or incomplete. When the user supplies a narrower
   * options type (e.g. via a literal), it falls back to `Subset` to keep
   * filtering out unknown properties.
   */
  export type PrismaClientConstructorArgs<Options extends PrismaClientOptions> =
    [PrismaClientOptions] extends [Options] ? PrismaClientOptions : Subset<Options, PrismaClientOptions>;

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      ((Without<T, U> & U) | (Without<U, T> & T)) & object
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    News: 'News',
    Expedition: 'Expedition',
    Researcher: 'Researcher',
    Photo: 'Photo',
    PublicSummary: 'PublicSummary',
    Tag: 'Tag',
    NewsTag: 'NewsTag',
    ExpeditionResearcher: 'ExpeditionResearcher',
    ExpeditionTag: 'ExpeditionTag',
    ResearcherTag: 'ResearcherTag'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "news" | "expedition" | "researcher" | "photo" | "publicSummary" | "tag" | "newsTag" | "expeditionResearcher" | "expeditionTag" | "researcherTag"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      News: {
        payload: Prisma.$NewsPayload<ExtArgs>
        fields: Prisma.NewsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NewsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NewsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsPayload>
          }
          findFirst: {
            args: Prisma.NewsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NewsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsPayload>
          }
          findMany: {
            args: Prisma.NewsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsPayload>[]
          }
          create: {
            args: Prisma.NewsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsPayload>
          }
          createMany: {
            args: Prisma.NewsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.NewsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsPayload>[]
          }
          delete: {
            args: Prisma.NewsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsPayload>
          }
          update: {
            args: Prisma.NewsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsPayload>
          }
          deleteMany: {
            args: Prisma.NewsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NewsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.NewsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsPayload>[]
          }
          upsert: {
            args: Prisma.NewsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsPayload>
          }
          aggregate: {
            args: Prisma.NewsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNews>
          }
          groupBy: {
            args: Prisma.NewsGroupByArgs<ExtArgs>
            result: $Utils.Optional<NewsGroupByOutputType>[]
          }
          count: {
            args: Prisma.NewsCountArgs<ExtArgs>
            result: $Utils.Optional<NewsCountAggregateOutputType> | number
          }
        }
      }
      Expedition: {
        payload: Prisma.$ExpeditionPayload<ExtArgs>
        fields: Prisma.ExpeditionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ExpeditionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpeditionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ExpeditionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpeditionPayload>
          }
          findFirst: {
            args: Prisma.ExpeditionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpeditionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ExpeditionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpeditionPayload>
          }
          findMany: {
            args: Prisma.ExpeditionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpeditionPayload>[]
          }
          create: {
            args: Prisma.ExpeditionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpeditionPayload>
          }
          createMany: {
            args: Prisma.ExpeditionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ExpeditionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpeditionPayload>[]
          }
          delete: {
            args: Prisma.ExpeditionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpeditionPayload>
          }
          update: {
            args: Prisma.ExpeditionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpeditionPayload>
          }
          deleteMany: {
            args: Prisma.ExpeditionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ExpeditionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ExpeditionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpeditionPayload>[]
          }
          upsert: {
            args: Prisma.ExpeditionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpeditionPayload>
          }
          aggregate: {
            args: Prisma.ExpeditionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateExpedition>
          }
          groupBy: {
            args: Prisma.ExpeditionGroupByArgs<ExtArgs>
            result: $Utils.Optional<ExpeditionGroupByOutputType>[]
          }
          count: {
            args: Prisma.ExpeditionCountArgs<ExtArgs>
            result: $Utils.Optional<ExpeditionCountAggregateOutputType> | number
          }
        }
      }
      Researcher: {
        payload: Prisma.$ResearcherPayload<ExtArgs>
        fields: Prisma.ResearcherFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ResearcherFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResearcherPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ResearcherFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResearcherPayload>
          }
          findFirst: {
            args: Prisma.ResearcherFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResearcherPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ResearcherFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResearcherPayload>
          }
          findMany: {
            args: Prisma.ResearcherFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResearcherPayload>[]
          }
          create: {
            args: Prisma.ResearcherCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResearcherPayload>
          }
          createMany: {
            args: Prisma.ResearcherCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ResearcherCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResearcherPayload>[]
          }
          delete: {
            args: Prisma.ResearcherDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResearcherPayload>
          }
          update: {
            args: Prisma.ResearcherUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResearcherPayload>
          }
          deleteMany: {
            args: Prisma.ResearcherDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ResearcherUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ResearcherUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResearcherPayload>[]
          }
          upsert: {
            args: Prisma.ResearcherUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResearcherPayload>
          }
          aggregate: {
            args: Prisma.ResearcherAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateResearcher>
          }
          groupBy: {
            args: Prisma.ResearcherGroupByArgs<ExtArgs>
            result: $Utils.Optional<ResearcherGroupByOutputType>[]
          }
          count: {
            args: Prisma.ResearcherCountArgs<ExtArgs>
            result: $Utils.Optional<ResearcherCountAggregateOutputType> | number
          }
        }
      }
      Photo: {
        payload: Prisma.$PhotoPayload<ExtArgs>
        fields: Prisma.PhotoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PhotoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhotoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PhotoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhotoPayload>
          }
          findFirst: {
            args: Prisma.PhotoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhotoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PhotoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhotoPayload>
          }
          findMany: {
            args: Prisma.PhotoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhotoPayload>[]
          }
          create: {
            args: Prisma.PhotoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhotoPayload>
          }
          createMany: {
            args: Prisma.PhotoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PhotoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhotoPayload>[]
          }
          delete: {
            args: Prisma.PhotoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhotoPayload>
          }
          update: {
            args: Prisma.PhotoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhotoPayload>
          }
          deleteMany: {
            args: Prisma.PhotoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PhotoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PhotoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhotoPayload>[]
          }
          upsert: {
            args: Prisma.PhotoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhotoPayload>
          }
          aggregate: {
            args: Prisma.PhotoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePhoto>
          }
          groupBy: {
            args: Prisma.PhotoGroupByArgs<ExtArgs>
            result: $Utils.Optional<PhotoGroupByOutputType>[]
          }
          count: {
            args: Prisma.PhotoCountArgs<ExtArgs>
            result: $Utils.Optional<PhotoCountAggregateOutputType> | number
          }
        }
      }
      PublicSummary: {
        payload: Prisma.$PublicSummaryPayload<ExtArgs>
        fields: Prisma.PublicSummaryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PublicSummaryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PublicSummaryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PublicSummaryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PublicSummaryPayload>
          }
          findFirst: {
            args: Prisma.PublicSummaryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PublicSummaryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PublicSummaryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PublicSummaryPayload>
          }
          findMany: {
            args: Prisma.PublicSummaryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PublicSummaryPayload>[]
          }
          create: {
            args: Prisma.PublicSummaryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PublicSummaryPayload>
          }
          createMany: {
            args: Prisma.PublicSummaryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PublicSummaryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PublicSummaryPayload>[]
          }
          delete: {
            args: Prisma.PublicSummaryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PublicSummaryPayload>
          }
          update: {
            args: Prisma.PublicSummaryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PublicSummaryPayload>
          }
          deleteMany: {
            args: Prisma.PublicSummaryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PublicSummaryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PublicSummaryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PublicSummaryPayload>[]
          }
          upsert: {
            args: Prisma.PublicSummaryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PublicSummaryPayload>
          }
          aggregate: {
            args: Prisma.PublicSummaryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePublicSummary>
          }
          groupBy: {
            args: Prisma.PublicSummaryGroupByArgs<ExtArgs>
            result: $Utils.Optional<PublicSummaryGroupByOutputType>[]
          }
          count: {
            args: Prisma.PublicSummaryCountArgs<ExtArgs>
            result: $Utils.Optional<PublicSummaryCountAggregateOutputType> | number
          }
        }
      }
      Tag: {
        payload: Prisma.$TagPayload<ExtArgs>
        fields: Prisma.TagFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TagFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TagFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          findFirst: {
            args: Prisma.TagFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TagFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          findMany: {
            args: Prisma.TagFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>[]
          }
          create: {
            args: Prisma.TagCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          createMany: {
            args: Prisma.TagCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TagCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>[]
          }
          delete: {
            args: Prisma.TagDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          update: {
            args: Prisma.TagUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          deleteMany: {
            args: Prisma.TagDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TagUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TagUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>[]
          }
          upsert: {
            args: Prisma.TagUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          aggregate: {
            args: Prisma.TagAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTag>
          }
          groupBy: {
            args: Prisma.TagGroupByArgs<ExtArgs>
            result: $Utils.Optional<TagGroupByOutputType>[]
          }
          count: {
            args: Prisma.TagCountArgs<ExtArgs>
            result: $Utils.Optional<TagCountAggregateOutputType> | number
          }
        }
      }
      NewsTag: {
        payload: Prisma.$NewsTagPayload<ExtArgs>
        fields: Prisma.NewsTagFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NewsTagFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsTagPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NewsTagFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsTagPayload>
          }
          findFirst: {
            args: Prisma.NewsTagFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsTagPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NewsTagFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsTagPayload>
          }
          findMany: {
            args: Prisma.NewsTagFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsTagPayload>[]
          }
          create: {
            args: Prisma.NewsTagCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsTagPayload>
          }
          createMany: {
            args: Prisma.NewsTagCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.NewsTagCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsTagPayload>[]
          }
          delete: {
            args: Prisma.NewsTagDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsTagPayload>
          }
          update: {
            args: Prisma.NewsTagUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsTagPayload>
          }
          deleteMany: {
            args: Prisma.NewsTagDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NewsTagUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.NewsTagUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsTagPayload>[]
          }
          upsert: {
            args: Prisma.NewsTagUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsTagPayload>
          }
          aggregate: {
            args: Prisma.NewsTagAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNewsTag>
          }
          groupBy: {
            args: Prisma.NewsTagGroupByArgs<ExtArgs>
            result: $Utils.Optional<NewsTagGroupByOutputType>[]
          }
          count: {
            args: Prisma.NewsTagCountArgs<ExtArgs>
            result: $Utils.Optional<NewsTagCountAggregateOutputType> | number
          }
        }
      }
      ExpeditionResearcher: {
        payload: Prisma.$ExpeditionResearcherPayload<ExtArgs>
        fields: Prisma.ExpeditionResearcherFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ExpeditionResearcherFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpeditionResearcherPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ExpeditionResearcherFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpeditionResearcherPayload>
          }
          findFirst: {
            args: Prisma.ExpeditionResearcherFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpeditionResearcherPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ExpeditionResearcherFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpeditionResearcherPayload>
          }
          findMany: {
            args: Prisma.ExpeditionResearcherFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpeditionResearcherPayload>[]
          }
          create: {
            args: Prisma.ExpeditionResearcherCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpeditionResearcherPayload>
          }
          createMany: {
            args: Prisma.ExpeditionResearcherCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ExpeditionResearcherCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpeditionResearcherPayload>[]
          }
          delete: {
            args: Prisma.ExpeditionResearcherDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpeditionResearcherPayload>
          }
          update: {
            args: Prisma.ExpeditionResearcherUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpeditionResearcherPayload>
          }
          deleteMany: {
            args: Prisma.ExpeditionResearcherDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ExpeditionResearcherUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ExpeditionResearcherUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpeditionResearcherPayload>[]
          }
          upsert: {
            args: Prisma.ExpeditionResearcherUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpeditionResearcherPayload>
          }
          aggregate: {
            args: Prisma.ExpeditionResearcherAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateExpeditionResearcher>
          }
          groupBy: {
            args: Prisma.ExpeditionResearcherGroupByArgs<ExtArgs>
            result: $Utils.Optional<ExpeditionResearcherGroupByOutputType>[]
          }
          count: {
            args: Prisma.ExpeditionResearcherCountArgs<ExtArgs>
            result: $Utils.Optional<ExpeditionResearcherCountAggregateOutputType> | number
          }
        }
      }
      ExpeditionTag: {
        payload: Prisma.$ExpeditionTagPayload<ExtArgs>
        fields: Prisma.ExpeditionTagFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ExpeditionTagFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpeditionTagPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ExpeditionTagFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpeditionTagPayload>
          }
          findFirst: {
            args: Prisma.ExpeditionTagFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpeditionTagPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ExpeditionTagFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpeditionTagPayload>
          }
          findMany: {
            args: Prisma.ExpeditionTagFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpeditionTagPayload>[]
          }
          create: {
            args: Prisma.ExpeditionTagCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpeditionTagPayload>
          }
          createMany: {
            args: Prisma.ExpeditionTagCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ExpeditionTagCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpeditionTagPayload>[]
          }
          delete: {
            args: Prisma.ExpeditionTagDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpeditionTagPayload>
          }
          update: {
            args: Prisma.ExpeditionTagUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpeditionTagPayload>
          }
          deleteMany: {
            args: Prisma.ExpeditionTagDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ExpeditionTagUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ExpeditionTagUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpeditionTagPayload>[]
          }
          upsert: {
            args: Prisma.ExpeditionTagUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpeditionTagPayload>
          }
          aggregate: {
            args: Prisma.ExpeditionTagAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateExpeditionTag>
          }
          groupBy: {
            args: Prisma.ExpeditionTagGroupByArgs<ExtArgs>
            result: $Utils.Optional<ExpeditionTagGroupByOutputType>[]
          }
          count: {
            args: Prisma.ExpeditionTagCountArgs<ExtArgs>
            result: $Utils.Optional<ExpeditionTagCountAggregateOutputType> | number
          }
        }
      }
      ResearcherTag: {
        payload: Prisma.$ResearcherTagPayload<ExtArgs>
        fields: Prisma.ResearcherTagFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ResearcherTagFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResearcherTagPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ResearcherTagFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResearcherTagPayload>
          }
          findFirst: {
            args: Prisma.ResearcherTagFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResearcherTagPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ResearcherTagFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResearcherTagPayload>
          }
          findMany: {
            args: Prisma.ResearcherTagFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResearcherTagPayload>[]
          }
          create: {
            args: Prisma.ResearcherTagCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResearcherTagPayload>
          }
          createMany: {
            args: Prisma.ResearcherTagCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ResearcherTagCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResearcherTagPayload>[]
          }
          delete: {
            args: Prisma.ResearcherTagDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResearcherTagPayload>
          }
          update: {
            args: Prisma.ResearcherTagUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResearcherTagPayload>
          }
          deleteMany: {
            args: Prisma.ResearcherTagDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ResearcherTagUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ResearcherTagUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResearcherTagPayload>[]
          }
          upsert: {
            args: Prisma.ResearcherTagUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResearcherTagPayload>
          }
          aggregate: {
            args: Prisma.ResearcherTagAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateResearcherTag>
          }
          groupBy: {
            args: Prisma.ResearcherTagGroupByArgs<ExtArgs>
            result: $Utils.Optional<ResearcherTagGroupByOutputType>[]
          }
          count: {
            args: Prisma.ResearcherTagCountArgs<ExtArgs>
            result: $Utils.Optional<ResearcherTagCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * A driver adapter that PrismaClient uses to connect to your database, such as the ones provided by `@prisma/adapter-pg`, `@prisma/adapter-libsql`, `@prisma/adapter-planetscale`, etc.
     * 
     * A driver adapter is **required** unless you connect to your database through Prisma Accelerate (in which case use `accelerateUrl` instead).
     * 
     * Learn more: https://pris.ly/d/driver-adapters
     * 
     * @example
     * ```ts
     * import { PrismaPg } from '@prisma/adapter-pg'
     * import { PrismaClient } from './generated/prisma/client'
     * 
     * const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL })
     * const prisma = new PrismaClient({ adapter })
     * ```
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * The Prisma Accelerate connection URL. Use this option to connect to your database through Prisma Accelerate instead of using a driver adapter to connect directly.
     * 
     * Learn more: https://pris.ly/d/accelerate
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    news?: NewsOmit
    expedition?: ExpeditionOmit
    researcher?: ResearcherOmit
    photo?: PhotoOmit
    publicSummary?: PublicSummaryOmit
    tag?: TagOmit
    newsTag?: NewsTagOmit
    expeditionResearcher?: ExpeditionResearcherOmit
    expeditionTag?: ExpeditionTagOmit
    researcherTag?: ResearcherTagOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type NewsCountOutputType
   */

  export type NewsCountOutputType = {
    photos: number
    tags: number
  }

  export type NewsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    photos?: boolean | NewsCountOutputTypeCountPhotosArgs
    tags?: boolean | NewsCountOutputTypeCountTagsArgs
  }

  // Custom InputTypes
  /**
   * NewsCountOutputType without action
   */
  export type NewsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsCountOutputType
     */
    select?: NewsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * NewsCountOutputType without action
   */
  export type NewsCountOutputTypeCountPhotosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PhotoWhereInput
  }

  /**
   * NewsCountOutputType without action
   */
  export type NewsCountOutputTypeCountTagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NewsTagWhereInput
  }


  /**
   * Count Type ExpeditionCountOutputType
   */

  export type ExpeditionCountOutputType = {
    researchers: number
    photos: number
    tags: number
  }

  export type ExpeditionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    researchers?: boolean | ExpeditionCountOutputTypeCountResearchersArgs
    photos?: boolean | ExpeditionCountOutputTypeCountPhotosArgs
    tags?: boolean | ExpeditionCountOutputTypeCountTagsArgs
  }

  // Custom InputTypes
  /**
   * ExpeditionCountOutputType without action
   */
  export type ExpeditionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExpeditionCountOutputType
     */
    select?: ExpeditionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ExpeditionCountOutputType without action
   */
  export type ExpeditionCountOutputTypeCountResearchersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExpeditionResearcherWhereInput
  }

  /**
   * ExpeditionCountOutputType without action
   */
  export type ExpeditionCountOutputTypeCountPhotosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PhotoWhereInput
  }

  /**
   * ExpeditionCountOutputType without action
   */
  export type ExpeditionCountOutputTypeCountTagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExpeditionTagWhereInput
  }


  /**
   * Count Type ResearcherCountOutputType
   */

  export type ResearcherCountOutputType = {
    expeditions: number
    tags: number
  }

  export type ResearcherCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    expeditions?: boolean | ResearcherCountOutputTypeCountExpeditionsArgs
    tags?: boolean | ResearcherCountOutputTypeCountTagsArgs
  }

  // Custom InputTypes
  /**
   * ResearcherCountOutputType without action
   */
  export type ResearcherCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResearcherCountOutputType
     */
    select?: ResearcherCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ResearcherCountOutputType without action
   */
  export type ResearcherCountOutputTypeCountExpeditionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExpeditionResearcherWhereInput
  }

  /**
   * ResearcherCountOutputType without action
   */
  export type ResearcherCountOutputTypeCountTagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ResearcherTagWhereInput
  }


  /**
   * Count Type TagCountOutputType
   */

  export type TagCountOutputType = {
    news: number
    expeditions: number
    researchers: number
  }

  export type TagCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    news?: boolean | TagCountOutputTypeCountNewsArgs
    expeditions?: boolean | TagCountOutputTypeCountExpeditionsArgs
    researchers?: boolean | TagCountOutputTypeCountResearchersArgs
  }

  // Custom InputTypes
  /**
   * TagCountOutputType without action
   */
  export type TagCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TagCountOutputType
     */
    select?: TagCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TagCountOutputType without action
   */
  export type TagCountOutputTypeCountNewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NewsTagWhereInput
  }

  /**
   * TagCountOutputType without action
   */
  export type TagCountOutputTypeCountExpeditionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExpeditionTagWhereInput
  }

  /**
   * TagCountOutputType without action
   */
  export type TagCountOutputTypeCountResearchersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ResearcherTagWhereInput
  }


  /**
   * Models
   */

  /**
   * Model News
   */

  export type AggregateNews = {
    _count: NewsCountAggregateOutputType | null
    _avg: NewsAvgAggregateOutputType | null
    _sum: NewsSumAggregateOutputType | null
    _min: NewsMinAggregateOutputType | null
    _max: NewsMaxAggregateOutputType | null
  }

  export type NewsAvgAggregateOutputType = {
    year: number | null
  }

  export type NewsSumAggregateOutputType = {
    year: number | null
  }

  export type NewsMinAggregateOutputType = {
    id: string | null
    title: string | null
    slug: string | null
    summaryShort: string | null
    sourceDescription: string | null
    contentFull: string | null
    region: string | null
    theme: string | null
    year: number | null
    type: string | null
    publishedDate: Date | null
    sourceUrl: string | null
    sourceItemKey: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type NewsMaxAggregateOutputType = {
    id: string | null
    title: string | null
    slug: string | null
    summaryShort: string | null
    sourceDescription: string | null
    contentFull: string | null
    region: string | null
    theme: string | null
    year: number | null
    type: string | null
    publishedDate: Date | null
    sourceUrl: string | null
    sourceItemKey: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type NewsCountAggregateOutputType = {
    id: number
    title: number
    slug: number
    summaryShort: number
    sourceDescription: number
    contentFull: number
    region: number
    theme: number
    year: number
    type: number
    publishedDate: number
    sourceUrl: number
    sourceItemKey: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type NewsAvgAggregateInputType = {
    year?: true
  }

  export type NewsSumAggregateInputType = {
    year?: true
  }

  export type NewsMinAggregateInputType = {
    id?: true
    title?: true
    slug?: true
    summaryShort?: true
    sourceDescription?: true
    contentFull?: true
    region?: true
    theme?: true
    year?: true
    type?: true
    publishedDate?: true
    sourceUrl?: true
    sourceItemKey?: true
    createdAt?: true
    updatedAt?: true
  }

  export type NewsMaxAggregateInputType = {
    id?: true
    title?: true
    slug?: true
    summaryShort?: true
    sourceDescription?: true
    contentFull?: true
    region?: true
    theme?: true
    year?: true
    type?: true
    publishedDate?: true
    sourceUrl?: true
    sourceItemKey?: true
    createdAt?: true
    updatedAt?: true
  }

  export type NewsCountAggregateInputType = {
    id?: true
    title?: true
    slug?: true
    summaryShort?: true
    sourceDescription?: true
    contentFull?: true
    region?: true
    theme?: true
    year?: true
    type?: true
    publishedDate?: true
    sourceUrl?: true
    sourceItemKey?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type NewsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which News to aggregate.
     */
    where?: NewsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of News to fetch.
     */
    orderBy?: NewsOrderByWithRelationInput | NewsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NewsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` News from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` News.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned News
    **/
    _count?: true | NewsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: NewsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: NewsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NewsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NewsMaxAggregateInputType
  }

  export type GetNewsAggregateType<T extends NewsAggregateArgs> = {
        [P in keyof T & keyof AggregateNews]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNews[P]>
      : GetScalarType<T[P], AggregateNews[P]>
  }




  export type NewsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NewsWhereInput
    orderBy?: NewsOrderByWithAggregationInput | NewsOrderByWithAggregationInput[]
    by: NewsScalarFieldEnum[] | NewsScalarFieldEnum
    having?: NewsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NewsCountAggregateInputType | true
    _avg?: NewsAvgAggregateInputType
    _sum?: NewsSumAggregateInputType
    _min?: NewsMinAggregateInputType
    _max?: NewsMaxAggregateInputType
  }

  export type NewsGroupByOutputType = {
    id: string
    title: string
    slug: string
    summaryShort: string | null
    sourceDescription: string | null
    contentFull: string | null
    region: string
    theme: string
    year: number
    type: string | null
    publishedDate: Date
    sourceUrl: string
    sourceItemKey: string
    createdAt: Date
    updatedAt: Date
    _count: NewsCountAggregateOutputType | null
    _avg: NewsAvgAggregateOutputType | null
    _sum: NewsSumAggregateOutputType | null
    _min: NewsMinAggregateOutputType | null
    _max: NewsMaxAggregateOutputType | null
  }

  type GetNewsGroupByPayload<T extends NewsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NewsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NewsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NewsGroupByOutputType[P]>
            : GetScalarType<T[P], NewsGroupByOutputType[P]>
        }
      >
    >


  export type NewsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    slug?: boolean
    summaryShort?: boolean
    sourceDescription?: boolean
    contentFull?: boolean
    region?: boolean
    theme?: boolean
    year?: boolean
    type?: boolean
    publishedDate?: boolean
    sourceUrl?: boolean
    sourceItemKey?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    publicSummary?: boolean | News$publicSummaryArgs<ExtArgs>
    photos?: boolean | News$photosArgs<ExtArgs>
    tags?: boolean | News$tagsArgs<ExtArgs>
    _count?: boolean | NewsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["news"]>

  export type NewsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    slug?: boolean
    summaryShort?: boolean
    sourceDescription?: boolean
    contentFull?: boolean
    region?: boolean
    theme?: boolean
    year?: boolean
    type?: boolean
    publishedDate?: boolean
    sourceUrl?: boolean
    sourceItemKey?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["news"]>

  export type NewsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    slug?: boolean
    summaryShort?: boolean
    sourceDescription?: boolean
    contentFull?: boolean
    region?: boolean
    theme?: boolean
    year?: boolean
    type?: boolean
    publishedDate?: boolean
    sourceUrl?: boolean
    sourceItemKey?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["news"]>

  export type NewsSelectScalar = {
    id?: boolean
    title?: boolean
    slug?: boolean
    summaryShort?: boolean
    sourceDescription?: boolean
    contentFull?: boolean
    region?: boolean
    theme?: boolean
    year?: boolean
    type?: boolean
    publishedDate?: boolean
    sourceUrl?: boolean
    sourceItemKey?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type NewsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "slug" | "summaryShort" | "sourceDescription" | "contentFull" | "region" | "theme" | "year" | "type" | "publishedDate" | "sourceUrl" | "sourceItemKey" | "createdAt" | "updatedAt", ExtArgs["result"]["news"]>
  export type NewsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    publicSummary?: boolean | News$publicSummaryArgs<ExtArgs>
    photos?: boolean | News$photosArgs<ExtArgs>
    tags?: boolean | News$tagsArgs<ExtArgs>
    _count?: boolean | NewsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type NewsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type NewsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $NewsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "News"
    objects: {
      publicSummary: Prisma.$PublicSummaryPayload<ExtArgs> | null
      photos: Prisma.$PhotoPayload<ExtArgs>[]
      tags: Prisma.$NewsTagPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      slug: string
      summaryShort: string | null
      sourceDescription: string | null
      contentFull: string | null
      region: string
      theme: string
      year: number
      type: string | null
      publishedDate: Date
      sourceUrl: string
      sourceItemKey: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["news"]>
    composites: {}
  }

  type NewsGetPayload<S extends boolean | null | undefined | NewsDefaultArgs> = $Result.GetResult<Prisma.$NewsPayload, S>

  type NewsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<NewsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NewsCountAggregateInputType | true
    }

  export interface NewsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['News'], meta: { name: 'News' } }
    /**
     * Find zero or one News that matches the filter.
     * @param {NewsFindUniqueArgs} args - Arguments to find a News
     * @example
     * // Get one News
     * const news = await prisma.news.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NewsFindUniqueArgs>(args: SelectSubset<T, NewsFindUniqueArgs<ExtArgs>>): Prisma__NewsClient<$Result.GetResult<Prisma.$NewsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one News that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NewsFindUniqueOrThrowArgs} args - Arguments to find a News
     * @example
     * // Get one News
     * const news = await prisma.news.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NewsFindUniqueOrThrowArgs>(args: SelectSubset<T, NewsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NewsClient<$Result.GetResult<Prisma.$NewsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first News that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsFindFirstArgs} args - Arguments to find a News
     * @example
     * // Get one News
     * const news = await prisma.news.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NewsFindFirstArgs>(args?: SelectSubset<T, NewsFindFirstArgs<ExtArgs>>): Prisma__NewsClient<$Result.GetResult<Prisma.$NewsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first News that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsFindFirstOrThrowArgs} args - Arguments to find a News
     * @example
     * // Get one News
     * const news = await prisma.news.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NewsFindFirstOrThrowArgs>(args?: SelectSubset<T, NewsFindFirstOrThrowArgs<ExtArgs>>): Prisma__NewsClient<$Result.GetResult<Prisma.$NewsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more News that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all News
     * const news = await prisma.news.findMany()
     * 
     * // Get first 10 News
     * const news = await prisma.news.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const newsWithIdOnly = await prisma.news.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NewsFindManyArgs>(args?: SelectSubset<T, NewsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NewsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a News.
     * @param {NewsCreateArgs} args - Arguments to create a News.
     * @example
     * // Create one News
     * const News = await prisma.news.create({
     *   data: {
     *     // ... data to create a News
     *   }
     * })
     * 
     */
    create<T extends NewsCreateArgs>(args: SelectSubset<T, NewsCreateArgs<ExtArgs>>): Prisma__NewsClient<$Result.GetResult<Prisma.$NewsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many News.
     * @param {NewsCreateManyArgs} args - Arguments to create many News.
     * @example
     * // Create many News
     * const news = await prisma.news.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NewsCreateManyArgs>(args?: SelectSubset<T, NewsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many News and returns the data saved in the database.
     * @param {NewsCreateManyAndReturnArgs} args - Arguments to create many News.
     * @example
     * // Create many News
     * const news = await prisma.news.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many News and only return the `id`
     * const newsWithIdOnly = await prisma.news.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends NewsCreateManyAndReturnArgs>(args?: SelectSubset<T, NewsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NewsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a News.
     * @param {NewsDeleteArgs} args - Arguments to delete one News.
     * @example
     * // Delete one News
     * const News = await prisma.news.delete({
     *   where: {
     *     // ... filter to delete one News
     *   }
     * })
     * 
     */
    delete<T extends NewsDeleteArgs>(args: SelectSubset<T, NewsDeleteArgs<ExtArgs>>): Prisma__NewsClient<$Result.GetResult<Prisma.$NewsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one News.
     * @param {NewsUpdateArgs} args - Arguments to update one News.
     * @example
     * // Update one News
     * const news = await prisma.news.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NewsUpdateArgs>(args: SelectSubset<T, NewsUpdateArgs<ExtArgs>>): Prisma__NewsClient<$Result.GetResult<Prisma.$NewsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more News.
     * @param {NewsDeleteManyArgs} args - Arguments to filter News to delete.
     * @example
     * // Delete a few News
     * const { count } = await prisma.news.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NewsDeleteManyArgs>(args?: SelectSubset<T, NewsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more News.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many News
     * const news = await prisma.news.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NewsUpdateManyArgs>(args: SelectSubset<T, NewsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more News and returns the data updated in the database.
     * @param {NewsUpdateManyAndReturnArgs} args - Arguments to update many News.
     * @example
     * // Update many News
     * const news = await prisma.news.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more News and only return the `id`
     * const newsWithIdOnly = await prisma.news.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends NewsUpdateManyAndReturnArgs>(args: SelectSubset<T, NewsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NewsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one News.
     * @param {NewsUpsertArgs} args - Arguments to update or create a News.
     * @example
     * // Update or create a News
     * const news = await prisma.news.upsert({
     *   create: {
     *     // ... data to create a News
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the News we want to update
     *   }
     * })
     */
    upsert<T extends NewsUpsertArgs>(args: SelectSubset<T, NewsUpsertArgs<ExtArgs>>): Prisma__NewsClient<$Result.GetResult<Prisma.$NewsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of News.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsCountArgs} args - Arguments to filter News to count.
     * @example
     * // Count the number of News
     * const count = await prisma.news.count({
     *   where: {
     *     // ... the filter for the News we want to count
     *   }
     * })
    **/
    count<T extends NewsCountArgs>(
      args?: Subset<T, NewsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NewsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a News.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends NewsAggregateArgs>(args: Subset<T, NewsAggregateArgs>): Prisma.PrismaPromise<GetNewsAggregateType<T>>

    /**
     * Group by News.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends NewsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NewsGroupByArgs['orderBy'] }
        : { orderBy?: NewsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, NewsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNewsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the News model
   */
  readonly fields: NewsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for News.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NewsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    publicSummary<T extends News$publicSummaryArgs<ExtArgs> = {}>(args?: Subset<T, News$publicSummaryArgs<ExtArgs>>): Prisma__PublicSummaryClient<$Result.GetResult<Prisma.$PublicSummaryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    photos<T extends News$photosArgs<ExtArgs> = {}>(args?: Subset<T, News$photosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PhotoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    tags<T extends News$tagsArgs<ExtArgs> = {}>(args?: Subset<T, News$tagsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NewsTagPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the News model
   */
  interface NewsFieldRefs {
    readonly id: FieldRef<"News", 'String'>
    readonly title: FieldRef<"News", 'String'>
    readonly slug: FieldRef<"News", 'String'>
    readonly summaryShort: FieldRef<"News", 'String'>
    readonly sourceDescription: FieldRef<"News", 'String'>
    readonly contentFull: FieldRef<"News", 'String'>
    readonly region: FieldRef<"News", 'String'>
    readonly theme: FieldRef<"News", 'String'>
    readonly year: FieldRef<"News", 'Int'>
    readonly type: FieldRef<"News", 'String'>
    readonly publishedDate: FieldRef<"News", 'DateTime'>
    readonly sourceUrl: FieldRef<"News", 'String'>
    readonly sourceItemKey: FieldRef<"News", 'String'>
    readonly createdAt: FieldRef<"News", 'DateTime'>
    readonly updatedAt: FieldRef<"News", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * News findUnique
   */
  export type NewsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the News
     */
    select?: NewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the News
     */
    omit?: NewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsInclude<ExtArgs> | null
    /**
     * Filter, which News to fetch.
     */
    where: NewsWhereUniqueInput
  }

  /**
   * News findUniqueOrThrow
   */
  export type NewsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the News
     */
    select?: NewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the News
     */
    omit?: NewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsInclude<ExtArgs> | null
    /**
     * Filter, which News to fetch.
     */
    where: NewsWhereUniqueInput
  }

  /**
   * News findFirst
   */
  export type NewsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the News
     */
    select?: NewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the News
     */
    omit?: NewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsInclude<ExtArgs> | null
    /**
     * Filter, which News to fetch.
     */
    where?: NewsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of News to fetch.
     */
    orderBy?: NewsOrderByWithRelationInput | NewsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for News.
     */
    cursor?: NewsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` News from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` News.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of News.
     */
    distinct?: NewsScalarFieldEnum | NewsScalarFieldEnum[]
  }

  /**
   * News findFirstOrThrow
   */
  export type NewsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the News
     */
    select?: NewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the News
     */
    omit?: NewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsInclude<ExtArgs> | null
    /**
     * Filter, which News to fetch.
     */
    where?: NewsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of News to fetch.
     */
    orderBy?: NewsOrderByWithRelationInput | NewsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for News.
     */
    cursor?: NewsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` News from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` News.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of News.
     */
    distinct?: NewsScalarFieldEnum | NewsScalarFieldEnum[]
  }

  /**
   * News findMany
   */
  export type NewsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the News
     */
    select?: NewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the News
     */
    omit?: NewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsInclude<ExtArgs> | null
    /**
     * Filter, which News to fetch.
     */
    where?: NewsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of News to fetch.
     */
    orderBy?: NewsOrderByWithRelationInput | NewsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing News.
     */
    cursor?: NewsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` News from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` News.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of News.
     */
    distinct?: NewsScalarFieldEnum | NewsScalarFieldEnum[]
  }

  /**
   * News create
   */
  export type NewsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the News
     */
    select?: NewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the News
     */
    omit?: NewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsInclude<ExtArgs> | null
    /**
     * The data needed to create a News.
     */
    data: XOR<NewsCreateInput, NewsUncheckedCreateInput>
  }

  /**
   * News createMany
   */
  export type NewsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many News.
     */
    data: NewsCreateManyInput | NewsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * News createManyAndReturn
   */
  export type NewsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the News
     */
    select?: NewsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the News
     */
    omit?: NewsOmit<ExtArgs> | null
    /**
     * The data used to create many News.
     */
    data: NewsCreateManyInput | NewsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * News update
   */
  export type NewsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the News
     */
    select?: NewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the News
     */
    omit?: NewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsInclude<ExtArgs> | null
    /**
     * The data needed to update a News.
     */
    data: XOR<NewsUpdateInput, NewsUncheckedUpdateInput>
    /**
     * Choose, which News to update.
     */
    where: NewsWhereUniqueInput
  }

  /**
   * News updateMany
   */
  export type NewsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update News.
     */
    data: XOR<NewsUpdateManyMutationInput, NewsUncheckedUpdateManyInput>
    /**
     * Filter which News to update
     */
    where?: NewsWhereInput
    /**
     * Limit how many News to update.
     */
    limit?: number
  }

  /**
   * News updateManyAndReturn
   */
  export type NewsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the News
     */
    select?: NewsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the News
     */
    omit?: NewsOmit<ExtArgs> | null
    /**
     * The data used to update News.
     */
    data: XOR<NewsUpdateManyMutationInput, NewsUncheckedUpdateManyInput>
    /**
     * Filter which News to update
     */
    where?: NewsWhereInput
    /**
     * Limit how many News to update.
     */
    limit?: number
  }

  /**
   * News upsert
   */
  export type NewsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the News
     */
    select?: NewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the News
     */
    omit?: NewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsInclude<ExtArgs> | null
    /**
     * The filter to search for the News to update in case it exists.
     */
    where: NewsWhereUniqueInput
    /**
     * In case the News found by the `where` argument doesn't exist, create a new News with this data.
     */
    create: XOR<NewsCreateInput, NewsUncheckedCreateInput>
    /**
     * In case the News was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NewsUpdateInput, NewsUncheckedUpdateInput>
  }

  /**
   * News delete
   */
  export type NewsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the News
     */
    select?: NewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the News
     */
    omit?: NewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsInclude<ExtArgs> | null
    /**
     * Filter which News to delete.
     */
    where: NewsWhereUniqueInput
  }

  /**
   * News deleteMany
   */
  export type NewsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which News to delete
     */
    where?: NewsWhereInput
    /**
     * Limit how many News to delete.
     */
    limit?: number
  }

  /**
   * News.publicSummary
   */
  export type News$publicSummaryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PublicSummary
     */
    select?: PublicSummarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PublicSummary
     */
    omit?: PublicSummaryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PublicSummaryInclude<ExtArgs> | null
    where?: PublicSummaryWhereInput
  }

  /**
   * News.photos
   */
  export type News$photosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Photo
     */
    select?: PhotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Photo
     */
    omit?: PhotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhotoInclude<ExtArgs> | null
    where?: PhotoWhereInput
    orderBy?: PhotoOrderByWithRelationInput | PhotoOrderByWithRelationInput[]
    cursor?: PhotoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PhotoScalarFieldEnum | PhotoScalarFieldEnum[]
  }

  /**
   * News.tags
   */
  export type News$tagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsTag
     */
    select?: NewsTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsTag
     */
    omit?: NewsTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsTagInclude<ExtArgs> | null
    where?: NewsTagWhereInput
    orderBy?: NewsTagOrderByWithRelationInput | NewsTagOrderByWithRelationInput[]
    cursor?: NewsTagWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NewsTagScalarFieldEnum | NewsTagScalarFieldEnum[]
  }

  /**
   * News without action
   */
  export type NewsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the News
     */
    select?: NewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the News
     */
    omit?: NewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsInclude<ExtArgs> | null
  }


  /**
   * Model Expedition
   */

  export type AggregateExpedition = {
    _count: ExpeditionCountAggregateOutputType | null
    _min: ExpeditionMinAggregateOutputType | null
    _max: ExpeditionMaxAggregateOutputType | null
  }

  export type ExpeditionMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    region: string | null
    startDate: Date | null
    endDate: Date | null
    sourceUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ExpeditionMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    region: string | null
    startDate: Date | null
    endDate: Date | null
    sourceUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ExpeditionCountAggregateOutputType = {
    id: number
    name: number
    description: number
    region: number
    startDate: number
    endDate: number
    sourceUrl: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ExpeditionMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    region?: true
    startDate?: true
    endDate?: true
    sourceUrl?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ExpeditionMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    region?: true
    startDate?: true
    endDate?: true
    sourceUrl?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ExpeditionCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    region?: true
    startDate?: true
    endDate?: true
    sourceUrl?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ExpeditionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Expedition to aggregate.
     */
    where?: ExpeditionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Expeditions to fetch.
     */
    orderBy?: ExpeditionOrderByWithRelationInput | ExpeditionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ExpeditionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Expeditions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Expeditions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Expeditions
    **/
    _count?: true | ExpeditionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ExpeditionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ExpeditionMaxAggregateInputType
  }

  export type GetExpeditionAggregateType<T extends ExpeditionAggregateArgs> = {
        [P in keyof T & keyof AggregateExpedition]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateExpedition[P]>
      : GetScalarType<T[P], AggregateExpedition[P]>
  }




  export type ExpeditionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExpeditionWhereInput
    orderBy?: ExpeditionOrderByWithAggregationInput | ExpeditionOrderByWithAggregationInput[]
    by: ExpeditionScalarFieldEnum[] | ExpeditionScalarFieldEnum
    having?: ExpeditionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ExpeditionCountAggregateInputType | true
    _min?: ExpeditionMinAggregateInputType
    _max?: ExpeditionMaxAggregateInputType
  }

  export type ExpeditionGroupByOutputType = {
    id: string
    name: string
    description: string | null
    region: string
    startDate: Date | null
    endDate: Date | null
    sourceUrl: string | null
    createdAt: Date
    updatedAt: Date
    _count: ExpeditionCountAggregateOutputType | null
    _min: ExpeditionMinAggregateOutputType | null
    _max: ExpeditionMaxAggregateOutputType | null
  }

  type GetExpeditionGroupByPayload<T extends ExpeditionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ExpeditionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ExpeditionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ExpeditionGroupByOutputType[P]>
            : GetScalarType<T[P], ExpeditionGroupByOutputType[P]>
        }
      >
    >


  export type ExpeditionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    region?: boolean
    startDate?: boolean
    endDate?: boolean
    sourceUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    researchers?: boolean | Expedition$researchersArgs<ExtArgs>
    photos?: boolean | Expedition$photosArgs<ExtArgs>
    tags?: boolean | Expedition$tagsArgs<ExtArgs>
    _count?: boolean | ExpeditionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["expedition"]>

  export type ExpeditionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    region?: boolean
    startDate?: boolean
    endDate?: boolean
    sourceUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["expedition"]>

  export type ExpeditionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    region?: boolean
    startDate?: boolean
    endDate?: boolean
    sourceUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["expedition"]>

  export type ExpeditionSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    region?: boolean
    startDate?: boolean
    endDate?: boolean
    sourceUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ExpeditionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "region" | "startDate" | "endDate" | "sourceUrl" | "createdAt" | "updatedAt", ExtArgs["result"]["expedition"]>
  export type ExpeditionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    researchers?: boolean | Expedition$researchersArgs<ExtArgs>
    photos?: boolean | Expedition$photosArgs<ExtArgs>
    tags?: boolean | Expedition$tagsArgs<ExtArgs>
    _count?: boolean | ExpeditionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ExpeditionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ExpeditionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ExpeditionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Expedition"
    objects: {
      researchers: Prisma.$ExpeditionResearcherPayload<ExtArgs>[]
      photos: Prisma.$PhotoPayload<ExtArgs>[]
      tags: Prisma.$ExpeditionTagPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string | null
      region: string
      startDate: Date | null
      endDate: Date | null
      sourceUrl: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["expedition"]>
    composites: {}
  }

  type ExpeditionGetPayload<S extends boolean | null | undefined | ExpeditionDefaultArgs> = $Result.GetResult<Prisma.$ExpeditionPayload, S>

  type ExpeditionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ExpeditionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ExpeditionCountAggregateInputType | true
    }

  export interface ExpeditionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Expedition'], meta: { name: 'Expedition' } }
    /**
     * Find zero or one Expedition that matches the filter.
     * @param {ExpeditionFindUniqueArgs} args - Arguments to find a Expedition
     * @example
     * // Get one Expedition
     * const expedition = await prisma.expedition.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ExpeditionFindUniqueArgs>(args: SelectSubset<T, ExpeditionFindUniqueArgs<ExtArgs>>): Prisma__ExpeditionClient<$Result.GetResult<Prisma.$ExpeditionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Expedition that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ExpeditionFindUniqueOrThrowArgs} args - Arguments to find a Expedition
     * @example
     * // Get one Expedition
     * const expedition = await prisma.expedition.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ExpeditionFindUniqueOrThrowArgs>(args: SelectSubset<T, ExpeditionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ExpeditionClient<$Result.GetResult<Prisma.$ExpeditionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Expedition that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpeditionFindFirstArgs} args - Arguments to find a Expedition
     * @example
     * // Get one Expedition
     * const expedition = await prisma.expedition.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ExpeditionFindFirstArgs>(args?: SelectSubset<T, ExpeditionFindFirstArgs<ExtArgs>>): Prisma__ExpeditionClient<$Result.GetResult<Prisma.$ExpeditionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Expedition that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpeditionFindFirstOrThrowArgs} args - Arguments to find a Expedition
     * @example
     * // Get one Expedition
     * const expedition = await prisma.expedition.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ExpeditionFindFirstOrThrowArgs>(args?: SelectSubset<T, ExpeditionFindFirstOrThrowArgs<ExtArgs>>): Prisma__ExpeditionClient<$Result.GetResult<Prisma.$ExpeditionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Expeditions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpeditionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Expeditions
     * const expeditions = await prisma.expedition.findMany()
     * 
     * // Get first 10 Expeditions
     * const expeditions = await prisma.expedition.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const expeditionWithIdOnly = await prisma.expedition.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ExpeditionFindManyArgs>(args?: SelectSubset<T, ExpeditionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExpeditionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Expedition.
     * @param {ExpeditionCreateArgs} args - Arguments to create a Expedition.
     * @example
     * // Create one Expedition
     * const Expedition = await prisma.expedition.create({
     *   data: {
     *     // ... data to create a Expedition
     *   }
     * })
     * 
     */
    create<T extends ExpeditionCreateArgs>(args: SelectSubset<T, ExpeditionCreateArgs<ExtArgs>>): Prisma__ExpeditionClient<$Result.GetResult<Prisma.$ExpeditionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Expeditions.
     * @param {ExpeditionCreateManyArgs} args - Arguments to create many Expeditions.
     * @example
     * // Create many Expeditions
     * const expedition = await prisma.expedition.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ExpeditionCreateManyArgs>(args?: SelectSubset<T, ExpeditionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Expeditions and returns the data saved in the database.
     * @param {ExpeditionCreateManyAndReturnArgs} args - Arguments to create many Expeditions.
     * @example
     * // Create many Expeditions
     * const expedition = await prisma.expedition.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Expeditions and only return the `id`
     * const expeditionWithIdOnly = await prisma.expedition.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ExpeditionCreateManyAndReturnArgs>(args?: SelectSubset<T, ExpeditionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExpeditionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Expedition.
     * @param {ExpeditionDeleteArgs} args - Arguments to delete one Expedition.
     * @example
     * // Delete one Expedition
     * const Expedition = await prisma.expedition.delete({
     *   where: {
     *     // ... filter to delete one Expedition
     *   }
     * })
     * 
     */
    delete<T extends ExpeditionDeleteArgs>(args: SelectSubset<T, ExpeditionDeleteArgs<ExtArgs>>): Prisma__ExpeditionClient<$Result.GetResult<Prisma.$ExpeditionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Expedition.
     * @param {ExpeditionUpdateArgs} args - Arguments to update one Expedition.
     * @example
     * // Update one Expedition
     * const expedition = await prisma.expedition.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ExpeditionUpdateArgs>(args: SelectSubset<T, ExpeditionUpdateArgs<ExtArgs>>): Prisma__ExpeditionClient<$Result.GetResult<Prisma.$ExpeditionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Expeditions.
     * @param {ExpeditionDeleteManyArgs} args - Arguments to filter Expeditions to delete.
     * @example
     * // Delete a few Expeditions
     * const { count } = await prisma.expedition.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ExpeditionDeleteManyArgs>(args?: SelectSubset<T, ExpeditionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Expeditions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpeditionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Expeditions
     * const expedition = await prisma.expedition.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ExpeditionUpdateManyArgs>(args: SelectSubset<T, ExpeditionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Expeditions and returns the data updated in the database.
     * @param {ExpeditionUpdateManyAndReturnArgs} args - Arguments to update many Expeditions.
     * @example
     * // Update many Expeditions
     * const expedition = await prisma.expedition.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Expeditions and only return the `id`
     * const expeditionWithIdOnly = await prisma.expedition.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ExpeditionUpdateManyAndReturnArgs>(args: SelectSubset<T, ExpeditionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExpeditionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Expedition.
     * @param {ExpeditionUpsertArgs} args - Arguments to update or create a Expedition.
     * @example
     * // Update or create a Expedition
     * const expedition = await prisma.expedition.upsert({
     *   create: {
     *     // ... data to create a Expedition
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Expedition we want to update
     *   }
     * })
     */
    upsert<T extends ExpeditionUpsertArgs>(args: SelectSubset<T, ExpeditionUpsertArgs<ExtArgs>>): Prisma__ExpeditionClient<$Result.GetResult<Prisma.$ExpeditionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Expeditions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpeditionCountArgs} args - Arguments to filter Expeditions to count.
     * @example
     * // Count the number of Expeditions
     * const count = await prisma.expedition.count({
     *   where: {
     *     // ... the filter for the Expeditions we want to count
     *   }
     * })
    **/
    count<T extends ExpeditionCountArgs>(
      args?: Subset<T, ExpeditionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ExpeditionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Expedition.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpeditionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ExpeditionAggregateArgs>(args: Subset<T, ExpeditionAggregateArgs>): Prisma.PrismaPromise<GetExpeditionAggregateType<T>>

    /**
     * Group by Expedition.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpeditionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ExpeditionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ExpeditionGroupByArgs['orderBy'] }
        : { orderBy?: ExpeditionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ExpeditionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetExpeditionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Expedition model
   */
  readonly fields: ExpeditionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Expedition.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ExpeditionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    researchers<T extends Expedition$researchersArgs<ExtArgs> = {}>(args?: Subset<T, Expedition$researchersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExpeditionResearcherPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    photos<T extends Expedition$photosArgs<ExtArgs> = {}>(args?: Subset<T, Expedition$photosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PhotoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    tags<T extends Expedition$tagsArgs<ExtArgs> = {}>(args?: Subset<T, Expedition$tagsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExpeditionTagPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Expedition model
   */
  interface ExpeditionFieldRefs {
    readonly id: FieldRef<"Expedition", 'String'>
    readonly name: FieldRef<"Expedition", 'String'>
    readonly description: FieldRef<"Expedition", 'String'>
    readonly region: FieldRef<"Expedition", 'String'>
    readonly startDate: FieldRef<"Expedition", 'DateTime'>
    readonly endDate: FieldRef<"Expedition", 'DateTime'>
    readonly sourceUrl: FieldRef<"Expedition", 'String'>
    readonly createdAt: FieldRef<"Expedition", 'DateTime'>
    readonly updatedAt: FieldRef<"Expedition", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Expedition findUnique
   */
  export type ExpeditionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expedition
     */
    select?: ExpeditionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expedition
     */
    omit?: ExpeditionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpeditionInclude<ExtArgs> | null
    /**
     * Filter, which Expedition to fetch.
     */
    where: ExpeditionWhereUniqueInput
  }

  /**
   * Expedition findUniqueOrThrow
   */
  export type ExpeditionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expedition
     */
    select?: ExpeditionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expedition
     */
    omit?: ExpeditionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpeditionInclude<ExtArgs> | null
    /**
     * Filter, which Expedition to fetch.
     */
    where: ExpeditionWhereUniqueInput
  }

  /**
   * Expedition findFirst
   */
  export type ExpeditionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expedition
     */
    select?: ExpeditionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expedition
     */
    omit?: ExpeditionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpeditionInclude<ExtArgs> | null
    /**
     * Filter, which Expedition to fetch.
     */
    where?: ExpeditionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Expeditions to fetch.
     */
    orderBy?: ExpeditionOrderByWithRelationInput | ExpeditionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Expeditions.
     */
    cursor?: ExpeditionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Expeditions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Expeditions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Expeditions.
     */
    distinct?: ExpeditionScalarFieldEnum | ExpeditionScalarFieldEnum[]
  }

  /**
   * Expedition findFirstOrThrow
   */
  export type ExpeditionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expedition
     */
    select?: ExpeditionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expedition
     */
    omit?: ExpeditionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpeditionInclude<ExtArgs> | null
    /**
     * Filter, which Expedition to fetch.
     */
    where?: ExpeditionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Expeditions to fetch.
     */
    orderBy?: ExpeditionOrderByWithRelationInput | ExpeditionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Expeditions.
     */
    cursor?: ExpeditionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Expeditions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Expeditions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Expeditions.
     */
    distinct?: ExpeditionScalarFieldEnum | ExpeditionScalarFieldEnum[]
  }

  /**
   * Expedition findMany
   */
  export type ExpeditionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expedition
     */
    select?: ExpeditionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expedition
     */
    omit?: ExpeditionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpeditionInclude<ExtArgs> | null
    /**
     * Filter, which Expeditions to fetch.
     */
    where?: ExpeditionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Expeditions to fetch.
     */
    orderBy?: ExpeditionOrderByWithRelationInput | ExpeditionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Expeditions.
     */
    cursor?: ExpeditionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Expeditions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Expeditions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Expeditions.
     */
    distinct?: ExpeditionScalarFieldEnum | ExpeditionScalarFieldEnum[]
  }

  /**
   * Expedition create
   */
  export type ExpeditionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expedition
     */
    select?: ExpeditionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expedition
     */
    omit?: ExpeditionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpeditionInclude<ExtArgs> | null
    /**
     * The data needed to create a Expedition.
     */
    data: XOR<ExpeditionCreateInput, ExpeditionUncheckedCreateInput>
  }

  /**
   * Expedition createMany
   */
  export type ExpeditionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Expeditions.
     */
    data: ExpeditionCreateManyInput | ExpeditionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Expedition createManyAndReturn
   */
  export type ExpeditionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expedition
     */
    select?: ExpeditionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Expedition
     */
    omit?: ExpeditionOmit<ExtArgs> | null
    /**
     * The data used to create many Expeditions.
     */
    data: ExpeditionCreateManyInput | ExpeditionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Expedition update
   */
  export type ExpeditionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expedition
     */
    select?: ExpeditionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expedition
     */
    omit?: ExpeditionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpeditionInclude<ExtArgs> | null
    /**
     * The data needed to update a Expedition.
     */
    data: XOR<ExpeditionUpdateInput, ExpeditionUncheckedUpdateInput>
    /**
     * Choose, which Expedition to update.
     */
    where: ExpeditionWhereUniqueInput
  }

  /**
   * Expedition updateMany
   */
  export type ExpeditionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Expeditions.
     */
    data: XOR<ExpeditionUpdateManyMutationInput, ExpeditionUncheckedUpdateManyInput>
    /**
     * Filter which Expeditions to update
     */
    where?: ExpeditionWhereInput
    /**
     * Limit how many Expeditions to update.
     */
    limit?: number
  }

  /**
   * Expedition updateManyAndReturn
   */
  export type ExpeditionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expedition
     */
    select?: ExpeditionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Expedition
     */
    omit?: ExpeditionOmit<ExtArgs> | null
    /**
     * The data used to update Expeditions.
     */
    data: XOR<ExpeditionUpdateManyMutationInput, ExpeditionUncheckedUpdateManyInput>
    /**
     * Filter which Expeditions to update
     */
    where?: ExpeditionWhereInput
    /**
     * Limit how many Expeditions to update.
     */
    limit?: number
  }

  /**
   * Expedition upsert
   */
  export type ExpeditionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expedition
     */
    select?: ExpeditionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expedition
     */
    omit?: ExpeditionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpeditionInclude<ExtArgs> | null
    /**
     * The filter to search for the Expedition to update in case it exists.
     */
    where: ExpeditionWhereUniqueInput
    /**
     * In case the Expedition found by the `where` argument doesn't exist, create a new Expedition with this data.
     */
    create: XOR<ExpeditionCreateInput, ExpeditionUncheckedCreateInput>
    /**
     * In case the Expedition was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ExpeditionUpdateInput, ExpeditionUncheckedUpdateInput>
  }

  /**
   * Expedition delete
   */
  export type ExpeditionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expedition
     */
    select?: ExpeditionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expedition
     */
    omit?: ExpeditionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpeditionInclude<ExtArgs> | null
    /**
     * Filter which Expedition to delete.
     */
    where: ExpeditionWhereUniqueInput
  }

  /**
   * Expedition deleteMany
   */
  export type ExpeditionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Expeditions to delete
     */
    where?: ExpeditionWhereInput
    /**
     * Limit how many Expeditions to delete.
     */
    limit?: number
  }

  /**
   * Expedition.researchers
   */
  export type Expedition$researchersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExpeditionResearcher
     */
    select?: ExpeditionResearcherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExpeditionResearcher
     */
    omit?: ExpeditionResearcherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpeditionResearcherInclude<ExtArgs> | null
    where?: ExpeditionResearcherWhereInput
    orderBy?: ExpeditionResearcherOrderByWithRelationInput | ExpeditionResearcherOrderByWithRelationInput[]
    cursor?: ExpeditionResearcherWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ExpeditionResearcherScalarFieldEnum | ExpeditionResearcherScalarFieldEnum[]
  }

  /**
   * Expedition.photos
   */
  export type Expedition$photosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Photo
     */
    select?: PhotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Photo
     */
    omit?: PhotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhotoInclude<ExtArgs> | null
    where?: PhotoWhereInput
    orderBy?: PhotoOrderByWithRelationInput | PhotoOrderByWithRelationInput[]
    cursor?: PhotoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PhotoScalarFieldEnum | PhotoScalarFieldEnum[]
  }

  /**
   * Expedition.tags
   */
  export type Expedition$tagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExpeditionTag
     */
    select?: ExpeditionTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExpeditionTag
     */
    omit?: ExpeditionTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpeditionTagInclude<ExtArgs> | null
    where?: ExpeditionTagWhereInput
    orderBy?: ExpeditionTagOrderByWithRelationInput | ExpeditionTagOrderByWithRelationInput[]
    cursor?: ExpeditionTagWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ExpeditionTagScalarFieldEnum | ExpeditionTagScalarFieldEnum[]
  }

  /**
   * Expedition without action
   */
  export type ExpeditionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expedition
     */
    select?: ExpeditionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expedition
     */
    omit?: ExpeditionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpeditionInclude<ExtArgs> | null
  }


  /**
   * Model Researcher
   */

  export type AggregateResearcher = {
    _count: ResearcherCountAggregateOutputType | null
    _min: ResearcherMinAggregateOutputType | null
    _max: ResearcherMaxAggregateOutputType | null
  }

  export type ResearcherMinAggregateOutputType = {
    id: string | null
    name: string | null
    affiliation: string | null
    bio: string | null
    profileUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ResearcherMaxAggregateOutputType = {
    id: string | null
    name: string | null
    affiliation: string | null
    bio: string | null
    profileUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ResearcherCountAggregateOutputType = {
    id: number
    name: number
    affiliation: number
    bio: number
    profileUrl: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ResearcherMinAggregateInputType = {
    id?: true
    name?: true
    affiliation?: true
    bio?: true
    profileUrl?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ResearcherMaxAggregateInputType = {
    id?: true
    name?: true
    affiliation?: true
    bio?: true
    profileUrl?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ResearcherCountAggregateInputType = {
    id?: true
    name?: true
    affiliation?: true
    bio?: true
    profileUrl?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ResearcherAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Researcher to aggregate.
     */
    where?: ResearcherWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Researchers to fetch.
     */
    orderBy?: ResearcherOrderByWithRelationInput | ResearcherOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ResearcherWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Researchers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Researchers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Researchers
    **/
    _count?: true | ResearcherCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ResearcherMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ResearcherMaxAggregateInputType
  }

  export type GetResearcherAggregateType<T extends ResearcherAggregateArgs> = {
        [P in keyof T & keyof AggregateResearcher]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateResearcher[P]>
      : GetScalarType<T[P], AggregateResearcher[P]>
  }




  export type ResearcherGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ResearcherWhereInput
    orderBy?: ResearcherOrderByWithAggregationInput | ResearcherOrderByWithAggregationInput[]
    by: ResearcherScalarFieldEnum[] | ResearcherScalarFieldEnum
    having?: ResearcherScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ResearcherCountAggregateInputType | true
    _min?: ResearcherMinAggregateInputType
    _max?: ResearcherMaxAggregateInputType
  }

  export type ResearcherGroupByOutputType = {
    id: string
    name: string
    affiliation: string | null
    bio: string | null
    profileUrl: string | null
    createdAt: Date
    updatedAt: Date
    _count: ResearcherCountAggregateOutputType | null
    _min: ResearcherMinAggregateOutputType | null
    _max: ResearcherMaxAggregateOutputType | null
  }

  type GetResearcherGroupByPayload<T extends ResearcherGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ResearcherGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ResearcherGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ResearcherGroupByOutputType[P]>
            : GetScalarType<T[P], ResearcherGroupByOutputType[P]>
        }
      >
    >


  export type ResearcherSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    affiliation?: boolean
    bio?: boolean
    profileUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    expeditions?: boolean | Researcher$expeditionsArgs<ExtArgs>
    tags?: boolean | Researcher$tagsArgs<ExtArgs>
    _count?: boolean | ResearcherCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["researcher"]>

  export type ResearcherSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    affiliation?: boolean
    bio?: boolean
    profileUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["researcher"]>

  export type ResearcherSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    affiliation?: boolean
    bio?: boolean
    profileUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["researcher"]>

  export type ResearcherSelectScalar = {
    id?: boolean
    name?: boolean
    affiliation?: boolean
    bio?: boolean
    profileUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ResearcherOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "affiliation" | "bio" | "profileUrl" | "createdAt" | "updatedAt", ExtArgs["result"]["researcher"]>
  export type ResearcherInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    expeditions?: boolean | Researcher$expeditionsArgs<ExtArgs>
    tags?: boolean | Researcher$tagsArgs<ExtArgs>
    _count?: boolean | ResearcherCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ResearcherIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ResearcherIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ResearcherPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Researcher"
    objects: {
      expeditions: Prisma.$ExpeditionResearcherPayload<ExtArgs>[]
      tags: Prisma.$ResearcherTagPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      affiliation: string | null
      bio: string | null
      profileUrl: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["researcher"]>
    composites: {}
  }

  type ResearcherGetPayload<S extends boolean | null | undefined | ResearcherDefaultArgs> = $Result.GetResult<Prisma.$ResearcherPayload, S>

  type ResearcherCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ResearcherFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ResearcherCountAggregateInputType | true
    }

  export interface ResearcherDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Researcher'], meta: { name: 'Researcher' } }
    /**
     * Find zero or one Researcher that matches the filter.
     * @param {ResearcherFindUniqueArgs} args - Arguments to find a Researcher
     * @example
     * // Get one Researcher
     * const researcher = await prisma.researcher.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ResearcherFindUniqueArgs>(args: SelectSubset<T, ResearcherFindUniqueArgs<ExtArgs>>): Prisma__ResearcherClient<$Result.GetResult<Prisma.$ResearcherPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Researcher that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ResearcherFindUniqueOrThrowArgs} args - Arguments to find a Researcher
     * @example
     * // Get one Researcher
     * const researcher = await prisma.researcher.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ResearcherFindUniqueOrThrowArgs>(args: SelectSubset<T, ResearcherFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ResearcherClient<$Result.GetResult<Prisma.$ResearcherPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Researcher that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResearcherFindFirstArgs} args - Arguments to find a Researcher
     * @example
     * // Get one Researcher
     * const researcher = await prisma.researcher.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ResearcherFindFirstArgs>(args?: SelectSubset<T, ResearcherFindFirstArgs<ExtArgs>>): Prisma__ResearcherClient<$Result.GetResult<Prisma.$ResearcherPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Researcher that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResearcherFindFirstOrThrowArgs} args - Arguments to find a Researcher
     * @example
     * // Get one Researcher
     * const researcher = await prisma.researcher.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ResearcherFindFirstOrThrowArgs>(args?: SelectSubset<T, ResearcherFindFirstOrThrowArgs<ExtArgs>>): Prisma__ResearcherClient<$Result.GetResult<Prisma.$ResearcherPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Researchers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResearcherFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Researchers
     * const researchers = await prisma.researcher.findMany()
     * 
     * // Get first 10 Researchers
     * const researchers = await prisma.researcher.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const researcherWithIdOnly = await prisma.researcher.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ResearcherFindManyArgs>(args?: SelectSubset<T, ResearcherFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResearcherPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Researcher.
     * @param {ResearcherCreateArgs} args - Arguments to create a Researcher.
     * @example
     * // Create one Researcher
     * const Researcher = await prisma.researcher.create({
     *   data: {
     *     // ... data to create a Researcher
     *   }
     * })
     * 
     */
    create<T extends ResearcherCreateArgs>(args: SelectSubset<T, ResearcherCreateArgs<ExtArgs>>): Prisma__ResearcherClient<$Result.GetResult<Prisma.$ResearcherPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Researchers.
     * @param {ResearcherCreateManyArgs} args - Arguments to create many Researchers.
     * @example
     * // Create many Researchers
     * const researcher = await prisma.researcher.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ResearcherCreateManyArgs>(args?: SelectSubset<T, ResearcherCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Researchers and returns the data saved in the database.
     * @param {ResearcherCreateManyAndReturnArgs} args - Arguments to create many Researchers.
     * @example
     * // Create many Researchers
     * const researcher = await prisma.researcher.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Researchers and only return the `id`
     * const researcherWithIdOnly = await prisma.researcher.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ResearcherCreateManyAndReturnArgs>(args?: SelectSubset<T, ResearcherCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResearcherPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Researcher.
     * @param {ResearcherDeleteArgs} args - Arguments to delete one Researcher.
     * @example
     * // Delete one Researcher
     * const Researcher = await prisma.researcher.delete({
     *   where: {
     *     // ... filter to delete one Researcher
     *   }
     * })
     * 
     */
    delete<T extends ResearcherDeleteArgs>(args: SelectSubset<T, ResearcherDeleteArgs<ExtArgs>>): Prisma__ResearcherClient<$Result.GetResult<Prisma.$ResearcherPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Researcher.
     * @param {ResearcherUpdateArgs} args - Arguments to update one Researcher.
     * @example
     * // Update one Researcher
     * const researcher = await prisma.researcher.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ResearcherUpdateArgs>(args: SelectSubset<T, ResearcherUpdateArgs<ExtArgs>>): Prisma__ResearcherClient<$Result.GetResult<Prisma.$ResearcherPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Researchers.
     * @param {ResearcherDeleteManyArgs} args - Arguments to filter Researchers to delete.
     * @example
     * // Delete a few Researchers
     * const { count } = await prisma.researcher.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ResearcherDeleteManyArgs>(args?: SelectSubset<T, ResearcherDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Researchers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResearcherUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Researchers
     * const researcher = await prisma.researcher.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ResearcherUpdateManyArgs>(args: SelectSubset<T, ResearcherUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Researchers and returns the data updated in the database.
     * @param {ResearcherUpdateManyAndReturnArgs} args - Arguments to update many Researchers.
     * @example
     * // Update many Researchers
     * const researcher = await prisma.researcher.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Researchers and only return the `id`
     * const researcherWithIdOnly = await prisma.researcher.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ResearcherUpdateManyAndReturnArgs>(args: SelectSubset<T, ResearcherUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResearcherPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Researcher.
     * @param {ResearcherUpsertArgs} args - Arguments to update or create a Researcher.
     * @example
     * // Update or create a Researcher
     * const researcher = await prisma.researcher.upsert({
     *   create: {
     *     // ... data to create a Researcher
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Researcher we want to update
     *   }
     * })
     */
    upsert<T extends ResearcherUpsertArgs>(args: SelectSubset<T, ResearcherUpsertArgs<ExtArgs>>): Prisma__ResearcherClient<$Result.GetResult<Prisma.$ResearcherPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Researchers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResearcherCountArgs} args - Arguments to filter Researchers to count.
     * @example
     * // Count the number of Researchers
     * const count = await prisma.researcher.count({
     *   where: {
     *     // ... the filter for the Researchers we want to count
     *   }
     * })
    **/
    count<T extends ResearcherCountArgs>(
      args?: Subset<T, ResearcherCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ResearcherCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Researcher.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResearcherAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ResearcherAggregateArgs>(args: Subset<T, ResearcherAggregateArgs>): Prisma.PrismaPromise<GetResearcherAggregateType<T>>

    /**
     * Group by Researcher.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResearcherGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ResearcherGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ResearcherGroupByArgs['orderBy'] }
        : { orderBy?: ResearcherGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ResearcherGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetResearcherGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Researcher model
   */
  readonly fields: ResearcherFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Researcher.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ResearcherClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    expeditions<T extends Researcher$expeditionsArgs<ExtArgs> = {}>(args?: Subset<T, Researcher$expeditionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExpeditionResearcherPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    tags<T extends Researcher$tagsArgs<ExtArgs> = {}>(args?: Subset<T, Researcher$tagsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResearcherTagPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Researcher model
   */
  interface ResearcherFieldRefs {
    readonly id: FieldRef<"Researcher", 'String'>
    readonly name: FieldRef<"Researcher", 'String'>
    readonly affiliation: FieldRef<"Researcher", 'String'>
    readonly bio: FieldRef<"Researcher", 'String'>
    readonly profileUrl: FieldRef<"Researcher", 'String'>
    readonly createdAt: FieldRef<"Researcher", 'DateTime'>
    readonly updatedAt: FieldRef<"Researcher", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Researcher findUnique
   */
  export type ResearcherFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Researcher
     */
    select?: ResearcherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Researcher
     */
    omit?: ResearcherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResearcherInclude<ExtArgs> | null
    /**
     * Filter, which Researcher to fetch.
     */
    where: ResearcherWhereUniqueInput
  }

  /**
   * Researcher findUniqueOrThrow
   */
  export type ResearcherFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Researcher
     */
    select?: ResearcherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Researcher
     */
    omit?: ResearcherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResearcherInclude<ExtArgs> | null
    /**
     * Filter, which Researcher to fetch.
     */
    where: ResearcherWhereUniqueInput
  }

  /**
   * Researcher findFirst
   */
  export type ResearcherFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Researcher
     */
    select?: ResearcherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Researcher
     */
    omit?: ResearcherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResearcherInclude<ExtArgs> | null
    /**
     * Filter, which Researcher to fetch.
     */
    where?: ResearcherWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Researchers to fetch.
     */
    orderBy?: ResearcherOrderByWithRelationInput | ResearcherOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Researchers.
     */
    cursor?: ResearcherWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Researchers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Researchers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Researchers.
     */
    distinct?: ResearcherScalarFieldEnum | ResearcherScalarFieldEnum[]
  }

  /**
   * Researcher findFirstOrThrow
   */
  export type ResearcherFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Researcher
     */
    select?: ResearcherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Researcher
     */
    omit?: ResearcherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResearcherInclude<ExtArgs> | null
    /**
     * Filter, which Researcher to fetch.
     */
    where?: ResearcherWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Researchers to fetch.
     */
    orderBy?: ResearcherOrderByWithRelationInput | ResearcherOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Researchers.
     */
    cursor?: ResearcherWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Researchers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Researchers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Researchers.
     */
    distinct?: ResearcherScalarFieldEnum | ResearcherScalarFieldEnum[]
  }

  /**
   * Researcher findMany
   */
  export type ResearcherFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Researcher
     */
    select?: ResearcherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Researcher
     */
    omit?: ResearcherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResearcherInclude<ExtArgs> | null
    /**
     * Filter, which Researchers to fetch.
     */
    where?: ResearcherWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Researchers to fetch.
     */
    orderBy?: ResearcherOrderByWithRelationInput | ResearcherOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Researchers.
     */
    cursor?: ResearcherWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Researchers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Researchers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Researchers.
     */
    distinct?: ResearcherScalarFieldEnum | ResearcherScalarFieldEnum[]
  }

  /**
   * Researcher create
   */
  export type ResearcherCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Researcher
     */
    select?: ResearcherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Researcher
     */
    omit?: ResearcherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResearcherInclude<ExtArgs> | null
    /**
     * The data needed to create a Researcher.
     */
    data: XOR<ResearcherCreateInput, ResearcherUncheckedCreateInput>
  }

  /**
   * Researcher createMany
   */
  export type ResearcherCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Researchers.
     */
    data: ResearcherCreateManyInput | ResearcherCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Researcher createManyAndReturn
   */
  export type ResearcherCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Researcher
     */
    select?: ResearcherSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Researcher
     */
    omit?: ResearcherOmit<ExtArgs> | null
    /**
     * The data used to create many Researchers.
     */
    data: ResearcherCreateManyInput | ResearcherCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Researcher update
   */
  export type ResearcherUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Researcher
     */
    select?: ResearcherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Researcher
     */
    omit?: ResearcherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResearcherInclude<ExtArgs> | null
    /**
     * The data needed to update a Researcher.
     */
    data: XOR<ResearcherUpdateInput, ResearcherUncheckedUpdateInput>
    /**
     * Choose, which Researcher to update.
     */
    where: ResearcherWhereUniqueInput
  }

  /**
   * Researcher updateMany
   */
  export type ResearcherUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Researchers.
     */
    data: XOR<ResearcherUpdateManyMutationInput, ResearcherUncheckedUpdateManyInput>
    /**
     * Filter which Researchers to update
     */
    where?: ResearcherWhereInput
    /**
     * Limit how many Researchers to update.
     */
    limit?: number
  }

  /**
   * Researcher updateManyAndReturn
   */
  export type ResearcherUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Researcher
     */
    select?: ResearcherSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Researcher
     */
    omit?: ResearcherOmit<ExtArgs> | null
    /**
     * The data used to update Researchers.
     */
    data: XOR<ResearcherUpdateManyMutationInput, ResearcherUncheckedUpdateManyInput>
    /**
     * Filter which Researchers to update
     */
    where?: ResearcherWhereInput
    /**
     * Limit how many Researchers to update.
     */
    limit?: number
  }

  /**
   * Researcher upsert
   */
  export type ResearcherUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Researcher
     */
    select?: ResearcherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Researcher
     */
    omit?: ResearcherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResearcherInclude<ExtArgs> | null
    /**
     * The filter to search for the Researcher to update in case it exists.
     */
    where: ResearcherWhereUniqueInput
    /**
     * In case the Researcher found by the `where` argument doesn't exist, create a new Researcher with this data.
     */
    create: XOR<ResearcherCreateInput, ResearcherUncheckedCreateInput>
    /**
     * In case the Researcher was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ResearcherUpdateInput, ResearcherUncheckedUpdateInput>
  }

  /**
   * Researcher delete
   */
  export type ResearcherDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Researcher
     */
    select?: ResearcherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Researcher
     */
    omit?: ResearcherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResearcherInclude<ExtArgs> | null
    /**
     * Filter which Researcher to delete.
     */
    where: ResearcherWhereUniqueInput
  }

  /**
   * Researcher deleteMany
   */
  export type ResearcherDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Researchers to delete
     */
    where?: ResearcherWhereInput
    /**
     * Limit how many Researchers to delete.
     */
    limit?: number
  }

  /**
   * Researcher.expeditions
   */
  export type Researcher$expeditionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExpeditionResearcher
     */
    select?: ExpeditionResearcherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExpeditionResearcher
     */
    omit?: ExpeditionResearcherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpeditionResearcherInclude<ExtArgs> | null
    where?: ExpeditionResearcherWhereInput
    orderBy?: ExpeditionResearcherOrderByWithRelationInput | ExpeditionResearcherOrderByWithRelationInput[]
    cursor?: ExpeditionResearcherWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ExpeditionResearcherScalarFieldEnum | ExpeditionResearcherScalarFieldEnum[]
  }

  /**
   * Researcher.tags
   */
  export type Researcher$tagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResearcherTag
     */
    select?: ResearcherTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ResearcherTag
     */
    omit?: ResearcherTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResearcherTagInclude<ExtArgs> | null
    where?: ResearcherTagWhereInput
    orderBy?: ResearcherTagOrderByWithRelationInput | ResearcherTagOrderByWithRelationInput[]
    cursor?: ResearcherTagWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ResearcherTagScalarFieldEnum | ResearcherTagScalarFieldEnum[]
  }

  /**
   * Researcher without action
   */
  export type ResearcherDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Researcher
     */
    select?: ResearcherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Researcher
     */
    omit?: ResearcherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResearcherInclude<ExtArgs> | null
  }


  /**
   * Model Photo
   */

  export type AggregatePhoto = {
    _count: PhotoCountAggregateOutputType | null
    _min: PhotoMinAggregateOutputType | null
    _max: PhotoMaxAggregateOutputType | null
  }

  export type PhotoMinAggregateOutputType = {
    id: string | null
    url: string | null
    caption: string | null
    altText: string | null
    credit: string | null
    sourceUrl: string | null
    sourceType: string | null
    newsId: string | null
    expeditionId: string | null
    createdAt: Date | null
  }

  export type PhotoMaxAggregateOutputType = {
    id: string | null
    url: string | null
    caption: string | null
    altText: string | null
    credit: string | null
    sourceUrl: string | null
    sourceType: string | null
    newsId: string | null
    expeditionId: string | null
    createdAt: Date | null
  }

  export type PhotoCountAggregateOutputType = {
    id: number
    url: number
    caption: number
    altText: number
    credit: number
    sourceUrl: number
    sourceType: number
    newsId: number
    expeditionId: number
    createdAt: number
    _all: number
  }


  export type PhotoMinAggregateInputType = {
    id?: true
    url?: true
    caption?: true
    altText?: true
    credit?: true
    sourceUrl?: true
    sourceType?: true
    newsId?: true
    expeditionId?: true
    createdAt?: true
  }

  export type PhotoMaxAggregateInputType = {
    id?: true
    url?: true
    caption?: true
    altText?: true
    credit?: true
    sourceUrl?: true
    sourceType?: true
    newsId?: true
    expeditionId?: true
    createdAt?: true
  }

  export type PhotoCountAggregateInputType = {
    id?: true
    url?: true
    caption?: true
    altText?: true
    credit?: true
    sourceUrl?: true
    sourceType?: true
    newsId?: true
    expeditionId?: true
    createdAt?: true
    _all?: true
  }

  export type PhotoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Photo to aggregate.
     */
    where?: PhotoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Photos to fetch.
     */
    orderBy?: PhotoOrderByWithRelationInput | PhotoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PhotoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Photos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Photos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Photos
    **/
    _count?: true | PhotoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PhotoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PhotoMaxAggregateInputType
  }

  export type GetPhotoAggregateType<T extends PhotoAggregateArgs> = {
        [P in keyof T & keyof AggregatePhoto]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePhoto[P]>
      : GetScalarType<T[P], AggregatePhoto[P]>
  }




  export type PhotoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PhotoWhereInput
    orderBy?: PhotoOrderByWithAggregationInput | PhotoOrderByWithAggregationInput[]
    by: PhotoScalarFieldEnum[] | PhotoScalarFieldEnum
    having?: PhotoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PhotoCountAggregateInputType | true
    _min?: PhotoMinAggregateInputType
    _max?: PhotoMaxAggregateInputType
  }

  export type PhotoGroupByOutputType = {
    id: string
    url: string
    caption: string | null
    altText: string | null
    credit: string | null
    sourceUrl: string | null
    sourceType: string | null
    newsId: string | null
    expeditionId: string | null
    createdAt: Date
    _count: PhotoCountAggregateOutputType | null
    _min: PhotoMinAggregateOutputType | null
    _max: PhotoMaxAggregateOutputType | null
  }

  type GetPhotoGroupByPayload<T extends PhotoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PhotoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PhotoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PhotoGroupByOutputType[P]>
            : GetScalarType<T[P], PhotoGroupByOutputType[P]>
        }
      >
    >


  export type PhotoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
    caption?: boolean
    altText?: boolean
    credit?: boolean
    sourceUrl?: boolean
    sourceType?: boolean
    newsId?: boolean
    expeditionId?: boolean
    createdAt?: boolean
    news?: boolean | Photo$newsArgs<ExtArgs>
    expedition?: boolean | Photo$expeditionArgs<ExtArgs>
  }, ExtArgs["result"]["photo"]>

  export type PhotoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
    caption?: boolean
    altText?: boolean
    credit?: boolean
    sourceUrl?: boolean
    sourceType?: boolean
    newsId?: boolean
    expeditionId?: boolean
    createdAt?: boolean
    news?: boolean | Photo$newsArgs<ExtArgs>
    expedition?: boolean | Photo$expeditionArgs<ExtArgs>
  }, ExtArgs["result"]["photo"]>

  export type PhotoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
    caption?: boolean
    altText?: boolean
    credit?: boolean
    sourceUrl?: boolean
    sourceType?: boolean
    newsId?: boolean
    expeditionId?: boolean
    createdAt?: boolean
    news?: boolean | Photo$newsArgs<ExtArgs>
    expedition?: boolean | Photo$expeditionArgs<ExtArgs>
  }, ExtArgs["result"]["photo"]>

  export type PhotoSelectScalar = {
    id?: boolean
    url?: boolean
    caption?: boolean
    altText?: boolean
    credit?: boolean
    sourceUrl?: boolean
    sourceType?: boolean
    newsId?: boolean
    expeditionId?: boolean
    createdAt?: boolean
  }

  export type PhotoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "url" | "caption" | "altText" | "credit" | "sourceUrl" | "sourceType" | "newsId" | "expeditionId" | "createdAt", ExtArgs["result"]["photo"]>
  export type PhotoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    news?: boolean | Photo$newsArgs<ExtArgs>
    expedition?: boolean | Photo$expeditionArgs<ExtArgs>
  }
  export type PhotoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    news?: boolean | Photo$newsArgs<ExtArgs>
    expedition?: boolean | Photo$expeditionArgs<ExtArgs>
  }
  export type PhotoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    news?: boolean | Photo$newsArgs<ExtArgs>
    expedition?: boolean | Photo$expeditionArgs<ExtArgs>
  }

  export type $PhotoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Photo"
    objects: {
      news: Prisma.$NewsPayload<ExtArgs> | null
      expedition: Prisma.$ExpeditionPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      url: string
      caption: string | null
      altText: string | null
      credit: string | null
      sourceUrl: string | null
      sourceType: string | null
      newsId: string | null
      expeditionId: string | null
      createdAt: Date
    }, ExtArgs["result"]["photo"]>
    composites: {}
  }

  type PhotoGetPayload<S extends boolean | null | undefined | PhotoDefaultArgs> = $Result.GetResult<Prisma.$PhotoPayload, S>

  type PhotoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PhotoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PhotoCountAggregateInputType | true
    }

  export interface PhotoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Photo'], meta: { name: 'Photo' } }
    /**
     * Find zero or one Photo that matches the filter.
     * @param {PhotoFindUniqueArgs} args - Arguments to find a Photo
     * @example
     * // Get one Photo
     * const photo = await prisma.photo.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PhotoFindUniqueArgs>(args: SelectSubset<T, PhotoFindUniqueArgs<ExtArgs>>): Prisma__PhotoClient<$Result.GetResult<Prisma.$PhotoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Photo that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PhotoFindUniqueOrThrowArgs} args - Arguments to find a Photo
     * @example
     * // Get one Photo
     * const photo = await prisma.photo.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PhotoFindUniqueOrThrowArgs>(args: SelectSubset<T, PhotoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PhotoClient<$Result.GetResult<Prisma.$PhotoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Photo that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhotoFindFirstArgs} args - Arguments to find a Photo
     * @example
     * // Get one Photo
     * const photo = await prisma.photo.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PhotoFindFirstArgs>(args?: SelectSubset<T, PhotoFindFirstArgs<ExtArgs>>): Prisma__PhotoClient<$Result.GetResult<Prisma.$PhotoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Photo that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhotoFindFirstOrThrowArgs} args - Arguments to find a Photo
     * @example
     * // Get one Photo
     * const photo = await prisma.photo.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PhotoFindFirstOrThrowArgs>(args?: SelectSubset<T, PhotoFindFirstOrThrowArgs<ExtArgs>>): Prisma__PhotoClient<$Result.GetResult<Prisma.$PhotoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Photos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhotoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Photos
     * const photos = await prisma.photo.findMany()
     * 
     * // Get first 10 Photos
     * const photos = await prisma.photo.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const photoWithIdOnly = await prisma.photo.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PhotoFindManyArgs>(args?: SelectSubset<T, PhotoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PhotoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Photo.
     * @param {PhotoCreateArgs} args - Arguments to create a Photo.
     * @example
     * // Create one Photo
     * const Photo = await prisma.photo.create({
     *   data: {
     *     // ... data to create a Photo
     *   }
     * })
     * 
     */
    create<T extends PhotoCreateArgs>(args: SelectSubset<T, PhotoCreateArgs<ExtArgs>>): Prisma__PhotoClient<$Result.GetResult<Prisma.$PhotoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Photos.
     * @param {PhotoCreateManyArgs} args - Arguments to create many Photos.
     * @example
     * // Create many Photos
     * const photo = await prisma.photo.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PhotoCreateManyArgs>(args?: SelectSubset<T, PhotoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Photos and returns the data saved in the database.
     * @param {PhotoCreateManyAndReturnArgs} args - Arguments to create many Photos.
     * @example
     * // Create many Photos
     * const photo = await prisma.photo.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Photos and only return the `id`
     * const photoWithIdOnly = await prisma.photo.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PhotoCreateManyAndReturnArgs>(args?: SelectSubset<T, PhotoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PhotoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Photo.
     * @param {PhotoDeleteArgs} args - Arguments to delete one Photo.
     * @example
     * // Delete one Photo
     * const Photo = await prisma.photo.delete({
     *   where: {
     *     // ... filter to delete one Photo
     *   }
     * })
     * 
     */
    delete<T extends PhotoDeleteArgs>(args: SelectSubset<T, PhotoDeleteArgs<ExtArgs>>): Prisma__PhotoClient<$Result.GetResult<Prisma.$PhotoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Photo.
     * @param {PhotoUpdateArgs} args - Arguments to update one Photo.
     * @example
     * // Update one Photo
     * const photo = await prisma.photo.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PhotoUpdateArgs>(args: SelectSubset<T, PhotoUpdateArgs<ExtArgs>>): Prisma__PhotoClient<$Result.GetResult<Prisma.$PhotoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Photos.
     * @param {PhotoDeleteManyArgs} args - Arguments to filter Photos to delete.
     * @example
     * // Delete a few Photos
     * const { count } = await prisma.photo.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PhotoDeleteManyArgs>(args?: SelectSubset<T, PhotoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Photos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhotoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Photos
     * const photo = await prisma.photo.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PhotoUpdateManyArgs>(args: SelectSubset<T, PhotoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Photos and returns the data updated in the database.
     * @param {PhotoUpdateManyAndReturnArgs} args - Arguments to update many Photos.
     * @example
     * // Update many Photos
     * const photo = await prisma.photo.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Photos and only return the `id`
     * const photoWithIdOnly = await prisma.photo.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PhotoUpdateManyAndReturnArgs>(args: SelectSubset<T, PhotoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PhotoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Photo.
     * @param {PhotoUpsertArgs} args - Arguments to update or create a Photo.
     * @example
     * // Update or create a Photo
     * const photo = await prisma.photo.upsert({
     *   create: {
     *     // ... data to create a Photo
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Photo we want to update
     *   }
     * })
     */
    upsert<T extends PhotoUpsertArgs>(args: SelectSubset<T, PhotoUpsertArgs<ExtArgs>>): Prisma__PhotoClient<$Result.GetResult<Prisma.$PhotoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Photos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhotoCountArgs} args - Arguments to filter Photos to count.
     * @example
     * // Count the number of Photos
     * const count = await prisma.photo.count({
     *   where: {
     *     // ... the filter for the Photos we want to count
     *   }
     * })
    **/
    count<T extends PhotoCountArgs>(
      args?: Subset<T, PhotoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PhotoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Photo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhotoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PhotoAggregateArgs>(args: Subset<T, PhotoAggregateArgs>): Prisma.PrismaPromise<GetPhotoAggregateType<T>>

    /**
     * Group by Photo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhotoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PhotoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PhotoGroupByArgs['orderBy'] }
        : { orderBy?: PhotoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PhotoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPhotoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Photo model
   */
  readonly fields: PhotoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Photo.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PhotoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    news<T extends Photo$newsArgs<ExtArgs> = {}>(args?: Subset<T, Photo$newsArgs<ExtArgs>>): Prisma__NewsClient<$Result.GetResult<Prisma.$NewsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    expedition<T extends Photo$expeditionArgs<ExtArgs> = {}>(args?: Subset<T, Photo$expeditionArgs<ExtArgs>>): Prisma__ExpeditionClient<$Result.GetResult<Prisma.$ExpeditionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Photo model
   */
  interface PhotoFieldRefs {
    readonly id: FieldRef<"Photo", 'String'>
    readonly url: FieldRef<"Photo", 'String'>
    readonly caption: FieldRef<"Photo", 'String'>
    readonly altText: FieldRef<"Photo", 'String'>
    readonly credit: FieldRef<"Photo", 'String'>
    readonly sourceUrl: FieldRef<"Photo", 'String'>
    readonly sourceType: FieldRef<"Photo", 'String'>
    readonly newsId: FieldRef<"Photo", 'String'>
    readonly expeditionId: FieldRef<"Photo", 'String'>
    readonly createdAt: FieldRef<"Photo", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Photo findUnique
   */
  export type PhotoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Photo
     */
    select?: PhotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Photo
     */
    omit?: PhotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhotoInclude<ExtArgs> | null
    /**
     * Filter, which Photo to fetch.
     */
    where: PhotoWhereUniqueInput
  }

  /**
   * Photo findUniqueOrThrow
   */
  export type PhotoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Photo
     */
    select?: PhotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Photo
     */
    omit?: PhotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhotoInclude<ExtArgs> | null
    /**
     * Filter, which Photo to fetch.
     */
    where: PhotoWhereUniqueInput
  }

  /**
   * Photo findFirst
   */
  export type PhotoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Photo
     */
    select?: PhotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Photo
     */
    omit?: PhotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhotoInclude<ExtArgs> | null
    /**
     * Filter, which Photo to fetch.
     */
    where?: PhotoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Photos to fetch.
     */
    orderBy?: PhotoOrderByWithRelationInput | PhotoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Photos.
     */
    cursor?: PhotoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Photos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Photos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Photos.
     */
    distinct?: PhotoScalarFieldEnum | PhotoScalarFieldEnum[]
  }

  /**
   * Photo findFirstOrThrow
   */
  export type PhotoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Photo
     */
    select?: PhotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Photo
     */
    omit?: PhotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhotoInclude<ExtArgs> | null
    /**
     * Filter, which Photo to fetch.
     */
    where?: PhotoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Photos to fetch.
     */
    orderBy?: PhotoOrderByWithRelationInput | PhotoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Photos.
     */
    cursor?: PhotoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Photos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Photos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Photos.
     */
    distinct?: PhotoScalarFieldEnum | PhotoScalarFieldEnum[]
  }

  /**
   * Photo findMany
   */
  export type PhotoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Photo
     */
    select?: PhotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Photo
     */
    omit?: PhotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhotoInclude<ExtArgs> | null
    /**
     * Filter, which Photos to fetch.
     */
    where?: PhotoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Photos to fetch.
     */
    orderBy?: PhotoOrderByWithRelationInput | PhotoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Photos.
     */
    cursor?: PhotoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Photos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Photos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Photos.
     */
    distinct?: PhotoScalarFieldEnum | PhotoScalarFieldEnum[]
  }

  /**
   * Photo create
   */
  export type PhotoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Photo
     */
    select?: PhotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Photo
     */
    omit?: PhotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhotoInclude<ExtArgs> | null
    /**
     * The data needed to create a Photo.
     */
    data: XOR<PhotoCreateInput, PhotoUncheckedCreateInput>
  }

  /**
   * Photo createMany
   */
  export type PhotoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Photos.
     */
    data: PhotoCreateManyInput | PhotoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Photo createManyAndReturn
   */
  export type PhotoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Photo
     */
    select?: PhotoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Photo
     */
    omit?: PhotoOmit<ExtArgs> | null
    /**
     * The data used to create many Photos.
     */
    data: PhotoCreateManyInput | PhotoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhotoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Photo update
   */
  export type PhotoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Photo
     */
    select?: PhotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Photo
     */
    omit?: PhotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhotoInclude<ExtArgs> | null
    /**
     * The data needed to update a Photo.
     */
    data: XOR<PhotoUpdateInput, PhotoUncheckedUpdateInput>
    /**
     * Choose, which Photo to update.
     */
    where: PhotoWhereUniqueInput
  }

  /**
   * Photo updateMany
   */
  export type PhotoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Photos.
     */
    data: XOR<PhotoUpdateManyMutationInput, PhotoUncheckedUpdateManyInput>
    /**
     * Filter which Photos to update
     */
    where?: PhotoWhereInput
    /**
     * Limit how many Photos to update.
     */
    limit?: number
  }

  /**
   * Photo updateManyAndReturn
   */
  export type PhotoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Photo
     */
    select?: PhotoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Photo
     */
    omit?: PhotoOmit<ExtArgs> | null
    /**
     * The data used to update Photos.
     */
    data: XOR<PhotoUpdateManyMutationInput, PhotoUncheckedUpdateManyInput>
    /**
     * Filter which Photos to update
     */
    where?: PhotoWhereInput
    /**
     * Limit how many Photos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhotoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Photo upsert
   */
  export type PhotoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Photo
     */
    select?: PhotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Photo
     */
    omit?: PhotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhotoInclude<ExtArgs> | null
    /**
     * The filter to search for the Photo to update in case it exists.
     */
    where: PhotoWhereUniqueInput
    /**
     * In case the Photo found by the `where` argument doesn't exist, create a new Photo with this data.
     */
    create: XOR<PhotoCreateInput, PhotoUncheckedCreateInput>
    /**
     * In case the Photo was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PhotoUpdateInput, PhotoUncheckedUpdateInput>
  }

  /**
   * Photo delete
   */
  export type PhotoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Photo
     */
    select?: PhotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Photo
     */
    omit?: PhotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhotoInclude<ExtArgs> | null
    /**
     * Filter which Photo to delete.
     */
    where: PhotoWhereUniqueInput
  }

  /**
   * Photo deleteMany
   */
  export type PhotoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Photos to delete
     */
    where?: PhotoWhereInput
    /**
     * Limit how many Photos to delete.
     */
    limit?: number
  }

  /**
   * Photo.news
   */
  export type Photo$newsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the News
     */
    select?: NewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the News
     */
    omit?: NewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsInclude<ExtArgs> | null
    where?: NewsWhereInput
  }

  /**
   * Photo.expedition
   */
  export type Photo$expeditionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expedition
     */
    select?: ExpeditionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expedition
     */
    omit?: ExpeditionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpeditionInclude<ExtArgs> | null
    where?: ExpeditionWhereInput
  }

  /**
   * Photo without action
   */
  export type PhotoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Photo
     */
    select?: PhotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Photo
     */
    omit?: PhotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhotoInclude<ExtArgs> | null
  }


  /**
   * Model PublicSummary
   */

  export type AggregatePublicSummary = {
    _count: PublicSummaryCountAggregateOutputType | null
    _min: PublicSummaryMinAggregateOutputType | null
    _max: PublicSummaryMaxAggregateOutputType | null
  }

  export type PublicSummaryMinAggregateOutputType = {
    id: string | null
    summary: string | null
    language: string | null
    model: string | null
    generatedAt: Date | null
    newsId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PublicSummaryMaxAggregateOutputType = {
    id: string | null
    summary: string | null
    language: string | null
    model: string | null
    generatedAt: Date | null
    newsId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PublicSummaryCountAggregateOutputType = {
    id: number
    summary: number
    language: number
    model: number
    generatedAt: number
    newsId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PublicSummaryMinAggregateInputType = {
    id?: true
    summary?: true
    language?: true
    model?: true
    generatedAt?: true
    newsId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PublicSummaryMaxAggregateInputType = {
    id?: true
    summary?: true
    language?: true
    model?: true
    generatedAt?: true
    newsId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PublicSummaryCountAggregateInputType = {
    id?: true
    summary?: true
    language?: true
    model?: true
    generatedAt?: true
    newsId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PublicSummaryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PublicSummary to aggregate.
     */
    where?: PublicSummaryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PublicSummaries to fetch.
     */
    orderBy?: PublicSummaryOrderByWithRelationInput | PublicSummaryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PublicSummaryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PublicSummaries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PublicSummaries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PublicSummaries
    **/
    _count?: true | PublicSummaryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PublicSummaryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PublicSummaryMaxAggregateInputType
  }

  export type GetPublicSummaryAggregateType<T extends PublicSummaryAggregateArgs> = {
        [P in keyof T & keyof AggregatePublicSummary]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePublicSummary[P]>
      : GetScalarType<T[P], AggregatePublicSummary[P]>
  }




  export type PublicSummaryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PublicSummaryWhereInput
    orderBy?: PublicSummaryOrderByWithAggregationInput | PublicSummaryOrderByWithAggregationInput[]
    by: PublicSummaryScalarFieldEnum[] | PublicSummaryScalarFieldEnum
    having?: PublicSummaryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PublicSummaryCountAggregateInputType | true
    _min?: PublicSummaryMinAggregateInputType
    _max?: PublicSummaryMaxAggregateInputType
  }

  export type PublicSummaryGroupByOutputType = {
    id: string
    summary: string
    language: string
    model: string | null
    generatedAt: Date
    newsId: string
    createdAt: Date
    updatedAt: Date
    _count: PublicSummaryCountAggregateOutputType | null
    _min: PublicSummaryMinAggregateOutputType | null
    _max: PublicSummaryMaxAggregateOutputType | null
  }

  type GetPublicSummaryGroupByPayload<T extends PublicSummaryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PublicSummaryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PublicSummaryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PublicSummaryGroupByOutputType[P]>
            : GetScalarType<T[P], PublicSummaryGroupByOutputType[P]>
        }
      >
    >


  export type PublicSummarySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    summary?: boolean
    language?: boolean
    model?: boolean
    generatedAt?: boolean
    newsId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    news?: boolean | NewsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["publicSummary"]>

  export type PublicSummarySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    summary?: boolean
    language?: boolean
    model?: boolean
    generatedAt?: boolean
    newsId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    news?: boolean | NewsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["publicSummary"]>

  export type PublicSummarySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    summary?: boolean
    language?: boolean
    model?: boolean
    generatedAt?: boolean
    newsId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    news?: boolean | NewsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["publicSummary"]>

  export type PublicSummarySelectScalar = {
    id?: boolean
    summary?: boolean
    language?: boolean
    model?: boolean
    generatedAt?: boolean
    newsId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PublicSummaryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "summary" | "language" | "model" | "generatedAt" | "newsId" | "createdAt" | "updatedAt", ExtArgs["result"]["publicSummary"]>
  export type PublicSummaryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    news?: boolean | NewsDefaultArgs<ExtArgs>
  }
  export type PublicSummaryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    news?: boolean | NewsDefaultArgs<ExtArgs>
  }
  export type PublicSummaryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    news?: boolean | NewsDefaultArgs<ExtArgs>
  }

  export type $PublicSummaryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PublicSummary"
    objects: {
      news: Prisma.$NewsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      summary: string
      language: string
      model: string | null
      generatedAt: Date
      newsId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["publicSummary"]>
    composites: {}
  }

  type PublicSummaryGetPayload<S extends boolean | null | undefined | PublicSummaryDefaultArgs> = $Result.GetResult<Prisma.$PublicSummaryPayload, S>

  type PublicSummaryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PublicSummaryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PublicSummaryCountAggregateInputType | true
    }

  export interface PublicSummaryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PublicSummary'], meta: { name: 'PublicSummary' } }
    /**
     * Find zero or one PublicSummary that matches the filter.
     * @param {PublicSummaryFindUniqueArgs} args - Arguments to find a PublicSummary
     * @example
     * // Get one PublicSummary
     * const publicSummary = await prisma.publicSummary.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PublicSummaryFindUniqueArgs>(args: SelectSubset<T, PublicSummaryFindUniqueArgs<ExtArgs>>): Prisma__PublicSummaryClient<$Result.GetResult<Prisma.$PublicSummaryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PublicSummary that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PublicSummaryFindUniqueOrThrowArgs} args - Arguments to find a PublicSummary
     * @example
     * // Get one PublicSummary
     * const publicSummary = await prisma.publicSummary.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PublicSummaryFindUniqueOrThrowArgs>(args: SelectSubset<T, PublicSummaryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PublicSummaryClient<$Result.GetResult<Prisma.$PublicSummaryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PublicSummary that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PublicSummaryFindFirstArgs} args - Arguments to find a PublicSummary
     * @example
     * // Get one PublicSummary
     * const publicSummary = await prisma.publicSummary.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PublicSummaryFindFirstArgs>(args?: SelectSubset<T, PublicSummaryFindFirstArgs<ExtArgs>>): Prisma__PublicSummaryClient<$Result.GetResult<Prisma.$PublicSummaryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PublicSummary that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PublicSummaryFindFirstOrThrowArgs} args - Arguments to find a PublicSummary
     * @example
     * // Get one PublicSummary
     * const publicSummary = await prisma.publicSummary.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PublicSummaryFindFirstOrThrowArgs>(args?: SelectSubset<T, PublicSummaryFindFirstOrThrowArgs<ExtArgs>>): Prisma__PublicSummaryClient<$Result.GetResult<Prisma.$PublicSummaryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PublicSummaries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PublicSummaryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PublicSummaries
     * const publicSummaries = await prisma.publicSummary.findMany()
     * 
     * // Get first 10 PublicSummaries
     * const publicSummaries = await prisma.publicSummary.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const publicSummaryWithIdOnly = await prisma.publicSummary.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PublicSummaryFindManyArgs>(args?: SelectSubset<T, PublicSummaryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PublicSummaryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PublicSummary.
     * @param {PublicSummaryCreateArgs} args - Arguments to create a PublicSummary.
     * @example
     * // Create one PublicSummary
     * const PublicSummary = await prisma.publicSummary.create({
     *   data: {
     *     // ... data to create a PublicSummary
     *   }
     * })
     * 
     */
    create<T extends PublicSummaryCreateArgs>(args: SelectSubset<T, PublicSummaryCreateArgs<ExtArgs>>): Prisma__PublicSummaryClient<$Result.GetResult<Prisma.$PublicSummaryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PublicSummaries.
     * @param {PublicSummaryCreateManyArgs} args - Arguments to create many PublicSummaries.
     * @example
     * // Create many PublicSummaries
     * const publicSummary = await prisma.publicSummary.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PublicSummaryCreateManyArgs>(args?: SelectSubset<T, PublicSummaryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PublicSummaries and returns the data saved in the database.
     * @param {PublicSummaryCreateManyAndReturnArgs} args - Arguments to create many PublicSummaries.
     * @example
     * // Create many PublicSummaries
     * const publicSummary = await prisma.publicSummary.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PublicSummaries and only return the `id`
     * const publicSummaryWithIdOnly = await prisma.publicSummary.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PublicSummaryCreateManyAndReturnArgs>(args?: SelectSubset<T, PublicSummaryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PublicSummaryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PublicSummary.
     * @param {PublicSummaryDeleteArgs} args - Arguments to delete one PublicSummary.
     * @example
     * // Delete one PublicSummary
     * const PublicSummary = await prisma.publicSummary.delete({
     *   where: {
     *     // ... filter to delete one PublicSummary
     *   }
     * })
     * 
     */
    delete<T extends PublicSummaryDeleteArgs>(args: SelectSubset<T, PublicSummaryDeleteArgs<ExtArgs>>): Prisma__PublicSummaryClient<$Result.GetResult<Prisma.$PublicSummaryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PublicSummary.
     * @param {PublicSummaryUpdateArgs} args - Arguments to update one PublicSummary.
     * @example
     * // Update one PublicSummary
     * const publicSummary = await prisma.publicSummary.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PublicSummaryUpdateArgs>(args: SelectSubset<T, PublicSummaryUpdateArgs<ExtArgs>>): Prisma__PublicSummaryClient<$Result.GetResult<Prisma.$PublicSummaryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PublicSummaries.
     * @param {PublicSummaryDeleteManyArgs} args - Arguments to filter PublicSummaries to delete.
     * @example
     * // Delete a few PublicSummaries
     * const { count } = await prisma.publicSummary.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PublicSummaryDeleteManyArgs>(args?: SelectSubset<T, PublicSummaryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PublicSummaries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PublicSummaryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PublicSummaries
     * const publicSummary = await prisma.publicSummary.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PublicSummaryUpdateManyArgs>(args: SelectSubset<T, PublicSummaryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PublicSummaries and returns the data updated in the database.
     * @param {PublicSummaryUpdateManyAndReturnArgs} args - Arguments to update many PublicSummaries.
     * @example
     * // Update many PublicSummaries
     * const publicSummary = await prisma.publicSummary.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PublicSummaries and only return the `id`
     * const publicSummaryWithIdOnly = await prisma.publicSummary.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PublicSummaryUpdateManyAndReturnArgs>(args: SelectSubset<T, PublicSummaryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PublicSummaryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PublicSummary.
     * @param {PublicSummaryUpsertArgs} args - Arguments to update or create a PublicSummary.
     * @example
     * // Update or create a PublicSummary
     * const publicSummary = await prisma.publicSummary.upsert({
     *   create: {
     *     // ... data to create a PublicSummary
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PublicSummary we want to update
     *   }
     * })
     */
    upsert<T extends PublicSummaryUpsertArgs>(args: SelectSubset<T, PublicSummaryUpsertArgs<ExtArgs>>): Prisma__PublicSummaryClient<$Result.GetResult<Prisma.$PublicSummaryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PublicSummaries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PublicSummaryCountArgs} args - Arguments to filter PublicSummaries to count.
     * @example
     * // Count the number of PublicSummaries
     * const count = await prisma.publicSummary.count({
     *   where: {
     *     // ... the filter for the PublicSummaries we want to count
     *   }
     * })
    **/
    count<T extends PublicSummaryCountArgs>(
      args?: Subset<T, PublicSummaryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PublicSummaryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PublicSummary.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PublicSummaryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PublicSummaryAggregateArgs>(args: Subset<T, PublicSummaryAggregateArgs>): Prisma.PrismaPromise<GetPublicSummaryAggregateType<T>>

    /**
     * Group by PublicSummary.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PublicSummaryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PublicSummaryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PublicSummaryGroupByArgs['orderBy'] }
        : { orderBy?: PublicSummaryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PublicSummaryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPublicSummaryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PublicSummary model
   */
  readonly fields: PublicSummaryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PublicSummary.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PublicSummaryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    news<T extends NewsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, NewsDefaultArgs<ExtArgs>>): Prisma__NewsClient<$Result.GetResult<Prisma.$NewsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PublicSummary model
   */
  interface PublicSummaryFieldRefs {
    readonly id: FieldRef<"PublicSummary", 'String'>
    readonly summary: FieldRef<"PublicSummary", 'String'>
    readonly language: FieldRef<"PublicSummary", 'String'>
    readonly model: FieldRef<"PublicSummary", 'String'>
    readonly generatedAt: FieldRef<"PublicSummary", 'DateTime'>
    readonly newsId: FieldRef<"PublicSummary", 'String'>
    readonly createdAt: FieldRef<"PublicSummary", 'DateTime'>
    readonly updatedAt: FieldRef<"PublicSummary", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PublicSummary findUnique
   */
  export type PublicSummaryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PublicSummary
     */
    select?: PublicSummarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PublicSummary
     */
    omit?: PublicSummaryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PublicSummaryInclude<ExtArgs> | null
    /**
     * Filter, which PublicSummary to fetch.
     */
    where: PublicSummaryWhereUniqueInput
  }

  /**
   * PublicSummary findUniqueOrThrow
   */
  export type PublicSummaryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PublicSummary
     */
    select?: PublicSummarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PublicSummary
     */
    omit?: PublicSummaryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PublicSummaryInclude<ExtArgs> | null
    /**
     * Filter, which PublicSummary to fetch.
     */
    where: PublicSummaryWhereUniqueInput
  }

  /**
   * PublicSummary findFirst
   */
  export type PublicSummaryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PublicSummary
     */
    select?: PublicSummarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PublicSummary
     */
    omit?: PublicSummaryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PublicSummaryInclude<ExtArgs> | null
    /**
     * Filter, which PublicSummary to fetch.
     */
    where?: PublicSummaryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PublicSummaries to fetch.
     */
    orderBy?: PublicSummaryOrderByWithRelationInput | PublicSummaryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PublicSummaries.
     */
    cursor?: PublicSummaryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PublicSummaries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PublicSummaries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PublicSummaries.
     */
    distinct?: PublicSummaryScalarFieldEnum | PublicSummaryScalarFieldEnum[]
  }

  /**
   * PublicSummary findFirstOrThrow
   */
  export type PublicSummaryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PublicSummary
     */
    select?: PublicSummarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PublicSummary
     */
    omit?: PublicSummaryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PublicSummaryInclude<ExtArgs> | null
    /**
     * Filter, which PublicSummary to fetch.
     */
    where?: PublicSummaryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PublicSummaries to fetch.
     */
    orderBy?: PublicSummaryOrderByWithRelationInput | PublicSummaryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PublicSummaries.
     */
    cursor?: PublicSummaryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PublicSummaries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PublicSummaries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PublicSummaries.
     */
    distinct?: PublicSummaryScalarFieldEnum | PublicSummaryScalarFieldEnum[]
  }

  /**
   * PublicSummary findMany
   */
  export type PublicSummaryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PublicSummary
     */
    select?: PublicSummarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PublicSummary
     */
    omit?: PublicSummaryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PublicSummaryInclude<ExtArgs> | null
    /**
     * Filter, which PublicSummaries to fetch.
     */
    where?: PublicSummaryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PublicSummaries to fetch.
     */
    orderBy?: PublicSummaryOrderByWithRelationInput | PublicSummaryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PublicSummaries.
     */
    cursor?: PublicSummaryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PublicSummaries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PublicSummaries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PublicSummaries.
     */
    distinct?: PublicSummaryScalarFieldEnum | PublicSummaryScalarFieldEnum[]
  }

  /**
   * PublicSummary create
   */
  export type PublicSummaryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PublicSummary
     */
    select?: PublicSummarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PublicSummary
     */
    omit?: PublicSummaryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PublicSummaryInclude<ExtArgs> | null
    /**
     * The data needed to create a PublicSummary.
     */
    data: XOR<PublicSummaryCreateInput, PublicSummaryUncheckedCreateInput>
  }

  /**
   * PublicSummary createMany
   */
  export type PublicSummaryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PublicSummaries.
     */
    data: PublicSummaryCreateManyInput | PublicSummaryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PublicSummary createManyAndReturn
   */
  export type PublicSummaryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PublicSummary
     */
    select?: PublicSummarySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PublicSummary
     */
    omit?: PublicSummaryOmit<ExtArgs> | null
    /**
     * The data used to create many PublicSummaries.
     */
    data: PublicSummaryCreateManyInput | PublicSummaryCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PublicSummaryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PublicSummary update
   */
  export type PublicSummaryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PublicSummary
     */
    select?: PublicSummarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PublicSummary
     */
    omit?: PublicSummaryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PublicSummaryInclude<ExtArgs> | null
    /**
     * The data needed to update a PublicSummary.
     */
    data: XOR<PublicSummaryUpdateInput, PublicSummaryUncheckedUpdateInput>
    /**
     * Choose, which PublicSummary to update.
     */
    where: PublicSummaryWhereUniqueInput
  }

  /**
   * PublicSummary updateMany
   */
  export type PublicSummaryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PublicSummaries.
     */
    data: XOR<PublicSummaryUpdateManyMutationInput, PublicSummaryUncheckedUpdateManyInput>
    /**
     * Filter which PublicSummaries to update
     */
    where?: PublicSummaryWhereInput
    /**
     * Limit how many PublicSummaries to update.
     */
    limit?: number
  }

  /**
   * PublicSummary updateManyAndReturn
   */
  export type PublicSummaryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PublicSummary
     */
    select?: PublicSummarySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PublicSummary
     */
    omit?: PublicSummaryOmit<ExtArgs> | null
    /**
     * The data used to update PublicSummaries.
     */
    data: XOR<PublicSummaryUpdateManyMutationInput, PublicSummaryUncheckedUpdateManyInput>
    /**
     * Filter which PublicSummaries to update
     */
    where?: PublicSummaryWhereInput
    /**
     * Limit how many PublicSummaries to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PublicSummaryIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PublicSummary upsert
   */
  export type PublicSummaryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PublicSummary
     */
    select?: PublicSummarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PublicSummary
     */
    omit?: PublicSummaryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PublicSummaryInclude<ExtArgs> | null
    /**
     * The filter to search for the PublicSummary to update in case it exists.
     */
    where: PublicSummaryWhereUniqueInput
    /**
     * In case the PublicSummary found by the `where` argument doesn't exist, create a new PublicSummary with this data.
     */
    create: XOR<PublicSummaryCreateInput, PublicSummaryUncheckedCreateInput>
    /**
     * In case the PublicSummary was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PublicSummaryUpdateInput, PublicSummaryUncheckedUpdateInput>
  }

  /**
   * PublicSummary delete
   */
  export type PublicSummaryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PublicSummary
     */
    select?: PublicSummarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PublicSummary
     */
    omit?: PublicSummaryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PublicSummaryInclude<ExtArgs> | null
    /**
     * Filter which PublicSummary to delete.
     */
    where: PublicSummaryWhereUniqueInput
  }

  /**
   * PublicSummary deleteMany
   */
  export type PublicSummaryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PublicSummaries to delete
     */
    where?: PublicSummaryWhereInput
    /**
     * Limit how many PublicSummaries to delete.
     */
    limit?: number
  }

  /**
   * PublicSummary without action
   */
  export type PublicSummaryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PublicSummary
     */
    select?: PublicSummarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PublicSummary
     */
    omit?: PublicSummaryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PublicSummaryInclude<ExtArgs> | null
  }


  /**
   * Model Tag
   */

  export type AggregateTag = {
    _count: TagCountAggregateOutputType | null
    _min: TagMinAggregateOutputType | null
    _max: TagMaxAggregateOutputType | null
  }

  export type TagMinAggregateOutputType = {
    id: string | null
    name: string | null
    slug: string | null
    createdAt: Date | null
  }

  export type TagMaxAggregateOutputType = {
    id: string | null
    name: string | null
    slug: string | null
    createdAt: Date | null
  }

  export type TagCountAggregateOutputType = {
    id: number
    name: number
    slug: number
    createdAt: number
    _all: number
  }


  export type TagMinAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    createdAt?: true
  }

  export type TagMaxAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    createdAt?: true
  }

  export type TagCountAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    createdAt?: true
    _all?: true
  }

  export type TagAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tag to aggregate.
     */
    where?: TagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tags to fetch.
     */
    orderBy?: TagOrderByWithRelationInput | TagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tags
    **/
    _count?: true | TagCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TagMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TagMaxAggregateInputType
  }

  export type GetTagAggregateType<T extends TagAggregateArgs> = {
        [P in keyof T & keyof AggregateTag]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTag[P]>
      : GetScalarType<T[P], AggregateTag[P]>
  }




  export type TagGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TagWhereInput
    orderBy?: TagOrderByWithAggregationInput | TagOrderByWithAggregationInput[]
    by: TagScalarFieldEnum[] | TagScalarFieldEnum
    having?: TagScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TagCountAggregateInputType | true
    _min?: TagMinAggregateInputType
    _max?: TagMaxAggregateInputType
  }

  export type TagGroupByOutputType = {
    id: string
    name: string
    slug: string
    createdAt: Date
    _count: TagCountAggregateOutputType | null
    _min: TagMinAggregateOutputType | null
    _max: TagMaxAggregateOutputType | null
  }

  type GetTagGroupByPayload<T extends TagGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TagGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TagGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TagGroupByOutputType[P]>
            : GetScalarType<T[P], TagGroupByOutputType[P]>
        }
      >
    >


  export type TagSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    createdAt?: boolean
    news?: boolean | Tag$newsArgs<ExtArgs>
    expeditions?: boolean | Tag$expeditionsArgs<ExtArgs>
    researchers?: boolean | Tag$researchersArgs<ExtArgs>
    _count?: boolean | TagCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tag"]>

  export type TagSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["tag"]>

  export type TagSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["tag"]>

  export type TagSelectScalar = {
    id?: boolean
    name?: boolean
    slug?: boolean
    createdAt?: boolean
  }

  export type TagOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "slug" | "createdAt", ExtArgs["result"]["tag"]>
  export type TagInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    news?: boolean | Tag$newsArgs<ExtArgs>
    expeditions?: boolean | Tag$expeditionsArgs<ExtArgs>
    researchers?: boolean | Tag$researchersArgs<ExtArgs>
    _count?: boolean | TagCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TagIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type TagIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $TagPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Tag"
    objects: {
      news: Prisma.$NewsTagPayload<ExtArgs>[]
      expeditions: Prisma.$ExpeditionTagPayload<ExtArgs>[]
      researchers: Prisma.$ResearcherTagPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      slug: string
      createdAt: Date
    }, ExtArgs["result"]["tag"]>
    composites: {}
  }

  type TagGetPayload<S extends boolean | null | undefined | TagDefaultArgs> = $Result.GetResult<Prisma.$TagPayload, S>

  type TagCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TagFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TagCountAggregateInputType | true
    }

  export interface TagDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Tag'], meta: { name: 'Tag' } }
    /**
     * Find zero or one Tag that matches the filter.
     * @param {TagFindUniqueArgs} args - Arguments to find a Tag
     * @example
     * // Get one Tag
     * const tag = await prisma.tag.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TagFindUniqueArgs>(args: SelectSubset<T, TagFindUniqueArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tag that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TagFindUniqueOrThrowArgs} args - Arguments to find a Tag
     * @example
     * // Get one Tag
     * const tag = await prisma.tag.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TagFindUniqueOrThrowArgs>(args: SelectSubset<T, TagFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tag that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagFindFirstArgs} args - Arguments to find a Tag
     * @example
     * // Get one Tag
     * const tag = await prisma.tag.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TagFindFirstArgs>(args?: SelectSubset<T, TagFindFirstArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tag that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagFindFirstOrThrowArgs} args - Arguments to find a Tag
     * @example
     * // Get one Tag
     * const tag = await prisma.tag.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TagFindFirstOrThrowArgs>(args?: SelectSubset<T, TagFindFirstOrThrowArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tags that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tags
     * const tags = await prisma.tag.findMany()
     * 
     * // Get first 10 Tags
     * const tags = await prisma.tag.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tagWithIdOnly = await prisma.tag.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TagFindManyArgs>(args?: SelectSubset<T, TagFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tag.
     * @param {TagCreateArgs} args - Arguments to create a Tag.
     * @example
     * // Create one Tag
     * const Tag = await prisma.tag.create({
     *   data: {
     *     // ... data to create a Tag
     *   }
     * })
     * 
     */
    create<T extends TagCreateArgs>(args: SelectSubset<T, TagCreateArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tags.
     * @param {TagCreateManyArgs} args - Arguments to create many Tags.
     * @example
     * // Create many Tags
     * const tag = await prisma.tag.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TagCreateManyArgs>(args?: SelectSubset<T, TagCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tags and returns the data saved in the database.
     * @param {TagCreateManyAndReturnArgs} args - Arguments to create many Tags.
     * @example
     * // Create many Tags
     * const tag = await prisma.tag.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tags and only return the `id`
     * const tagWithIdOnly = await prisma.tag.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TagCreateManyAndReturnArgs>(args?: SelectSubset<T, TagCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Tag.
     * @param {TagDeleteArgs} args - Arguments to delete one Tag.
     * @example
     * // Delete one Tag
     * const Tag = await prisma.tag.delete({
     *   where: {
     *     // ... filter to delete one Tag
     *   }
     * })
     * 
     */
    delete<T extends TagDeleteArgs>(args: SelectSubset<T, TagDeleteArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tag.
     * @param {TagUpdateArgs} args - Arguments to update one Tag.
     * @example
     * // Update one Tag
     * const tag = await prisma.tag.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TagUpdateArgs>(args: SelectSubset<T, TagUpdateArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tags.
     * @param {TagDeleteManyArgs} args - Arguments to filter Tags to delete.
     * @example
     * // Delete a few Tags
     * const { count } = await prisma.tag.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TagDeleteManyArgs>(args?: SelectSubset<T, TagDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tags
     * const tag = await prisma.tag.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TagUpdateManyArgs>(args: SelectSubset<T, TagUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tags and returns the data updated in the database.
     * @param {TagUpdateManyAndReturnArgs} args - Arguments to update many Tags.
     * @example
     * // Update many Tags
     * const tag = await prisma.tag.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tags and only return the `id`
     * const tagWithIdOnly = await prisma.tag.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TagUpdateManyAndReturnArgs>(args: SelectSubset<T, TagUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Tag.
     * @param {TagUpsertArgs} args - Arguments to update or create a Tag.
     * @example
     * // Update or create a Tag
     * const tag = await prisma.tag.upsert({
     *   create: {
     *     // ... data to create a Tag
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tag we want to update
     *   }
     * })
     */
    upsert<T extends TagUpsertArgs>(args: SelectSubset<T, TagUpsertArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagCountArgs} args - Arguments to filter Tags to count.
     * @example
     * // Count the number of Tags
     * const count = await prisma.tag.count({
     *   where: {
     *     // ... the filter for the Tags we want to count
     *   }
     * })
    **/
    count<T extends TagCountArgs>(
      args?: Subset<T, TagCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TagCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TagAggregateArgs>(args: Subset<T, TagAggregateArgs>): Prisma.PrismaPromise<GetTagAggregateType<T>>

    /**
     * Group by Tag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TagGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TagGroupByArgs['orderBy'] }
        : { orderBy?: TagGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TagGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTagGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Tag model
   */
  readonly fields: TagFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Tag.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TagClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    news<T extends Tag$newsArgs<ExtArgs> = {}>(args?: Subset<T, Tag$newsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NewsTagPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    expeditions<T extends Tag$expeditionsArgs<ExtArgs> = {}>(args?: Subset<T, Tag$expeditionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExpeditionTagPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    researchers<T extends Tag$researchersArgs<ExtArgs> = {}>(args?: Subset<T, Tag$researchersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResearcherTagPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Tag model
   */
  interface TagFieldRefs {
    readonly id: FieldRef<"Tag", 'String'>
    readonly name: FieldRef<"Tag", 'String'>
    readonly slug: FieldRef<"Tag", 'String'>
    readonly createdAt: FieldRef<"Tag", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Tag findUnique
   */
  export type TagFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter, which Tag to fetch.
     */
    where: TagWhereUniqueInput
  }

  /**
   * Tag findUniqueOrThrow
   */
  export type TagFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter, which Tag to fetch.
     */
    where: TagWhereUniqueInput
  }

  /**
   * Tag findFirst
   */
  export type TagFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter, which Tag to fetch.
     */
    where?: TagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tags to fetch.
     */
    orderBy?: TagOrderByWithRelationInput | TagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tags.
     */
    cursor?: TagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tags.
     */
    distinct?: TagScalarFieldEnum | TagScalarFieldEnum[]
  }

  /**
   * Tag findFirstOrThrow
   */
  export type TagFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter, which Tag to fetch.
     */
    where?: TagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tags to fetch.
     */
    orderBy?: TagOrderByWithRelationInput | TagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tags.
     */
    cursor?: TagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tags.
     */
    distinct?: TagScalarFieldEnum | TagScalarFieldEnum[]
  }

  /**
   * Tag findMany
   */
  export type TagFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter, which Tags to fetch.
     */
    where?: TagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tags to fetch.
     */
    orderBy?: TagOrderByWithRelationInput | TagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tags.
     */
    cursor?: TagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tags.
     */
    distinct?: TagScalarFieldEnum | TagScalarFieldEnum[]
  }

  /**
   * Tag create
   */
  export type TagCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * The data needed to create a Tag.
     */
    data: XOR<TagCreateInput, TagUncheckedCreateInput>
  }

  /**
   * Tag createMany
   */
  export type TagCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tags.
     */
    data: TagCreateManyInput | TagCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Tag createManyAndReturn
   */
  export type TagCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * The data used to create many Tags.
     */
    data: TagCreateManyInput | TagCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Tag update
   */
  export type TagUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * The data needed to update a Tag.
     */
    data: XOR<TagUpdateInput, TagUncheckedUpdateInput>
    /**
     * Choose, which Tag to update.
     */
    where: TagWhereUniqueInput
  }

  /**
   * Tag updateMany
   */
  export type TagUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tags.
     */
    data: XOR<TagUpdateManyMutationInput, TagUncheckedUpdateManyInput>
    /**
     * Filter which Tags to update
     */
    where?: TagWhereInput
    /**
     * Limit how many Tags to update.
     */
    limit?: number
  }

  /**
   * Tag updateManyAndReturn
   */
  export type TagUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * The data used to update Tags.
     */
    data: XOR<TagUpdateManyMutationInput, TagUncheckedUpdateManyInput>
    /**
     * Filter which Tags to update
     */
    where?: TagWhereInput
    /**
     * Limit how many Tags to update.
     */
    limit?: number
  }

  /**
   * Tag upsert
   */
  export type TagUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * The filter to search for the Tag to update in case it exists.
     */
    where: TagWhereUniqueInput
    /**
     * In case the Tag found by the `where` argument doesn't exist, create a new Tag with this data.
     */
    create: XOR<TagCreateInput, TagUncheckedCreateInput>
    /**
     * In case the Tag was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TagUpdateInput, TagUncheckedUpdateInput>
  }

  /**
   * Tag delete
   */
  export type TagDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter which Tag to delete.
     */
    where: TagWhereUniqueInput
  }

  /**
   * Tag deleteMany
   */
  export type TagDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tags to delete
     */
    where?: TagWhereInput
    /**
     * Limit how many Tags to delete.
     */
    limit?: number
  }

  /**
   * Tag.news
   */
  export type Tag$newsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsTag
     */
    select?: NewsTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsTag
     */
    omit?: NewsTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsTagInclude<ExtArgs> | null
    where?: NewsTagWhereInput
    orderBy?: NewsTagOrderByWithRelationInput | NewsTagOrderByWithRelationInput[]
    cursor?: NewsTagWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NewsTagScalarFieldEnum | NewsTagScalarFieldEnum[]
  }

  /**
   * Tag.expeditions
   */
  export type Tag$expeditionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExpeditionTag
     */
    select?: ExpeditionTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExpeditionTag
     */
    omit?: ExpeditionTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpeditionTagInclude<ExtArgs> | null
    where?: ExpeditionTagWhereInput
    orderBy?: ExpeditionTagOrderByWithRelationInput | ExpeditionTagOrderByWithRelationInput[]
    cursor?: ExpeditionTagWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ExpeditionTagScalarFieldEnum | ExpeditionTagScalarFieldEnum[]
  }

  /**
   * Tag.researchers
   */
  export type Tag$researchersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResearcherTag
     */
    select?: ResearcherTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ResearcherTag
     */
    omit?: ResearcherTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResearcherTagInclude<ExtArgs> | null
    where?: ResearcherTagWhereInput
    orderBy?: ResearcherTagOrderByWithRelationInput | ResearcherTagOrderByWithRelationInput[]
    cursor?: ResearcherTagWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ResearcherTagScalarFieldEnum | ResearcherTagScalarFieldEnum[]
  }

  /**
   * Tag without action
   */
  export type TagDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
  }


  /**
   * Model NewsTag
   */

  export type AggregateNewsTag = {
    _count: NewsTagCountAggregateOutputType | null
    _min: NewsTagMinAggregateOutputType | null
    _max: NewsTagMaxAggregateOutputType | null
  }

  export type NewsTagMinAggregateOutputType = {
    newsId: string | null
    tagId: string | null
  }

  export type NewsTagMaxAggregateOutputType = {
    newsId: string | null
    tagId: string | null
  }

  export type NewsTagCountAggregateOutputType = {
    newsId: number
    tagId: number
    _all: number
  }


  export type NewsTagMinAggregateInputType = {
    newsId?: true
    tagId?: true
  }

  export type NewsTagMaxAggregateInputType = {
    newsId?: true
    tagId?: true
  }

  export type NewsTagCountAggregateInputType = {
    newsId?: true
    tagId?: true
    _all?: true
  }

  export type NewsTagAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which NewsTag to aggregate.
     */
    where?: NewsTagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NewsTags to fetch.
     */
    orderBy?: NewsTagOrderByWithRelationInput | NewsTagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NewsTagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NewsTags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NewsTags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned NewsTags
    **/
    _count?: true | NewsTagCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NewsTagMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NewsTagMaxAggregateInputType
  }

  export type GetNewsTagAggregateType<T extends NewsTagAggregateArgs> = {
        [P in keyof T & keyof AggregateNewsTag]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNewsTag[P]>
      : GetScalarType<T[P], AggregateNewsTag[P]>
  }




  export type NewsTagGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NewsTagWhereInput
    orderBy?: NewsTagOrderByWithAggregationInput | NewsTagOrderByWithAggregationInput[]
    by: NewsTagScalarFieldEnum[] | NewsTagScalarFieldEnum
    having?: NewsTagScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NewsTagCountAggregateInputType | true
    _min?: NewsTagMinAggregateInputType
    _max?: NewsTagMaxAggregateInputType
  }

  export type NewsTagGroupByOutputType = {
    newsId: string
    tagId: string
    _count: NewsTagCountAggregateOutputType | null
    _min: NewsTagMinAggregateOutputType | null
    _max: NewsTagMaxAggregateOutputType | null
  }

  type GetNewsTagGroupByPayload<T extends NewsTagGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NewsTagGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NewsTagGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NewsTagGroupByOutputType[P]>
            : GetScalarType<T[P], NewsTagGroupByOutputType[P]>
        }
      >
    >


  export type NewsTagSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    newsId?: boolean
    tagId?: boolean
    news?: boolean | NewsDefaultArgs<ExtArgs>
    tag?: boolean | TagDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["newsTag"]>

  export type NewsTagSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    newsId?: boolean
    tagId?: boolean
    news?: boolean | NewsDefaultArgs<ExtArgs>
    tag?: boolean | TagDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["newsTag"]>

  export type NewsTagSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    newsId?: boolean
    tagId?: boolean
    news?: boolean | NewsDefaultArgs<ExtArgs>
    tag?: boolean | TagDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["newsTag"]>

  export type NewsTagSelectScalar = {
    newsId?: boolean
    tagId?: boolean
  }

  export type NewsTagOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"newsId" | "tagId", ExtArgs["result"]["newsTag"]>
  export type NewsTagInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    news?: boolean | NewsDefaultArgs<ExtArgs>
    tag?: boolean | TagDefaultArgs<ExtArgs>
  }
  export type NewsTagIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    news?: boolean | NewsDefaultArgs<ExtArgs>
    tag?: boolean | TagDefaultArgs<ExtArgs>
  }
  export type NewsTagIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    news?: boolean | NewsDefaultArgs<ExtArgs>
    tag?: boolean | TagDefaultArgs<ExtArgs>
  }

  export type $NewsTagPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "NewsTag"
    objects: {
      news: Prisma.$NewsPayload<ExtArgs>
      tag: Prisma.$TagPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      newsId: string
      tagId: string
    }, ExtArgs["result"]["newsTag"]>
    composites: {}
  }

  type NewsTagGetPayload<S extends boolean | null | undefined | NewsTagDefaultArgs> = $Result.GetResult<Prisma.$NewsTagPayload, S>

  type NewsTagCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<NewsTagFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NewsTagCountAggregateInputType | true
    }

  export interface NewsTagDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['NewsTag'], meta: { name: 'NewsTag' } }
    /**
     * Find zero or one NewsTag that matches the filter.
     * @param {NewsTagFindUniqueArgs} args - Arguments to find a NewsTag
     * @example
     * // Get one NewsTag
     * const newsTag = await prisma.newsTag.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NewsTagFindUniqueArgs>(args: SelectSubset<T, NewsTagFindUniqueArgs<ExtArgs>>): Prisma__NewsTagClient<$Result.GetResult<Prisma.$NewsTagPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one NewsTag that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NewsTagFindUniqueOrThrowArgs} args - Arguments to find a NewsTag
     * @example
     * // Get one NewsTag
     * const newsTag = await prisma.newsTag.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NewsTagFindUniqueOrThrowArgs>(args: SelectSubset<T, NewsTagFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NewsTagClient<$Result.GetResult<Prisma.$NewsTagPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first NewsTag that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsTagFindFirstArgs} args - Arguments to find a NewsTag
     * @example
     * // Get one NewsTag
     * const newsTag = await prisma.newsTag.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NewsTagFindFirstArgs>(args?: SelectSubset<T, NewsTagFindFirstArgs<ExtArgs>>): Prisma__NewsTagClient<$Result.GetResult<Prisma.$NewsTagPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first NewsTag that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsTagFindFirstOrThrowArgs} args - Arguments to find a NewsTag
     * @example
     * // Get one NewsTag
     * const newsTag = await prisma.newsTag.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NewsTagFindFirstOrThrowArgs>(args?: SelectSubset<T, NewsTagFindFirstOrThrowArgs<ExtArgs>>): Prisma__NewsTagClient<$Result.GetResult<Prisma.$NewsTagPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more NewsTags that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsTagFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all NewsTags
     * const newsTags = await prisma.newsTag.findMany()
     * 
     * // Get first 10 NewsTags
     * const newsTags = await prisma.newsTag.findMany({ take: 10 })
     * 
     * // Only select the `newsId`
     * const newsTagWithNewsIdOnly = await prisma.newsTag.findMany({ select: { newsId: true } })
     * 
     */
    findMany<T extends NewsTagFindManyArgs>(args?: SelectSubset<T, NewsTagFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NewsTagPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a NewsTag.
     * @param {NewsTagCreateArgs} args - Arguments to create a NewsTag.
     * @example
     * // Create one NewsTag
     * const NewsTag = await prisma.newsTag.create({
     *   data: {
     *     // ... data to create a NewsTag
     *   }
     * })
     * 
     */
    create<T extends NewsTagCreateArgs>(args: SelectSubset<T, NewsTagCreateArgs<ExtArgs>>): Prisma__NewsTagClient<$Result.GetResult<Prisma.$NewsTagPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many NewsTags.
     * @param {NewsTagCreateManyArgs} args - Arguments to create many NewsTags.
     * @example
     * // Create many NewsTags
     * const newsTag = await prisma.newsTag.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NewsTagCreateManyArgs>(args?: SelectSubset<T, NewsTagCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many NewsTags and returns the data saved in the database.
     * @param {NewsTagCreateManyAndReturnArgs} args - Arguments to create many NewsTags.
     * @example
     * // Create many NewsTags
     * const newsTag = await prisma.newsTag.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many NewsTags and only return the `newsId`
     * const newsTagWithNewsIdOnly = await prisma.newsTag.createManyAndReturn({
     *   select: { newsId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends NewsTagCreateManyAndReturnArgs>(args?: SelectSubset<T, NewsTagCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NewsTagPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a NewsTag.
     * @param {NewsTagDeleteArgs} args - Arguments to delete one NewsTag.
     * @example
     * // Delete one NewsTag
     * const NewsTag = await prisma.newsTag.delete({
     *   where: {
     *     // ... filter to delete one NewsTag
     *   }
     * })
     * 
     */
    delete<T extends NewsTagDeleteArgs>(args: SelectSubset<T, NewsTagDeleteArgs<ExtArgs>>): Prisma__NewsTagClient<$Result.GetResult<Prisma.$NewsTagPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one NewsTag.
     * @param {NewsTagUpdateArgs} args - Arguments to update one NewsTag.
     * @example
     * // Update one NewsTag
     * const newsTag = await prisma.newsTag.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NewsTagUpdateArgs>(args: SelectSubset<T, NewsTagUpdateArgs<ExtArgs>>): Prisma__NewsTagClient<$Result.GetResult<Prisma.$NewsTagPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more NewsTags.
     * @param {NewsTagDeleteManyArgs} args - Arguments to filter NewsTags to delete.
     * @example
     * // Delete a few NewsTags
     * const { count } = await prisma.newsTag.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NewsTagDeleteManyArgs>(args?: SelectSubset<T, NewsTagDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more NewsTags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsTagUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many NewsTags
     * const newsTag = await prisma.newsTag.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NewsTagUpdateManyArgs>(args: SelectSubset<T, NewsTagUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more NewsTags and returns the data updated in the database.
     * @param {NewsTagUpdateManyAndReturnArgs} args - Arguments to update many NewsTags.
     * @example
     * // Update many NewsTags
     * const newsTag = await prisma.newsTag.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more NewsTags and only return the `newsId`
     * const newsTagWithNewsIdOnly = await prisma.newsTag.updateManyAndReturn({
     *   select: { newsId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends NewsTagUpdateManyAndReturnArgs>(args: SelectSubset<T, NewsTagUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NewsTagPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one NewsTag.
     * @param {NewsTagUpsertArgs} args - Arguments to update or create a NewsTag.
     * @example
     * // Update or create a NewsTag
     * const newsTag = await prisma.newsTag.upsert({
     *   create: {
     *     // ... data to create a NewsTag
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the NewsTag we want to update
     *   }
     * })
     */
    upsert<T extends NewsTagUpsertArgs>(args: SelectSubset<T, NewsTagUpsertArgs<ExtArgs>>): Prisma__NewsTagClient<$Result.GetResult<Prisma.$NewsTagPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of NewsTags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsTagCountArgs} args - Arguments to filter NewsTags to count.
     * @example
     * // Count the number of NewsTags
     * const count = await prisma.newsTag.count({
     *   where: {
     *     // ... the filter for the NewsTags we want to count
     *   }
     * })
    **/
    count<T extends NewsTagCountArgs>(
      args?: Subset<T, NewsTagCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NewsTagCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a NewsTag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsTagAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends NewsTagAggregateArgs>(args: Subset<T, NewsTagAggregateArgs>): Prisma.PrismaPromise<GetNewsTagAggregateType<T>>

    /**
     * Group by NewsTag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsTagGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends NewsTagGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NewsTagGroupByArgs['orderBy'] }
        : { orderBy?: NewsTagGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, NewsTagGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNewsTagGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the NewsTag model
   */
  readonly fields: NewsTagFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for NewsTag.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NewsTagClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    news<T extends NewsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, NewsDefaultArgs<ExtArgs>>): Prisma__NewsClient<$Result.GetResult<Prisma.$NewsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    tag<T extends TagDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TagDefaultArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the NewsTag model
   */
  interface NewsTagFieldRefs {
    readonly newsId: FieldRef<"NewsTag", 'String'>
    readonly tagId: FieldRef<"NewsTag", 'String'>
  }
    

  // Custom InputTypes
  /**
   * NewsTag findUnique
   */
  export type NewsTagFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsTag
     */
    select?: NewsTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsTag
     */
    omit?: NewsTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsTagInclude<ExtArgs> | null
    /**
     * Filter, which NewsTag to fetch.
     */
    where: NewsTagWhereUniqueInput
  }

  /**
   * NewsTag findUniqueOrThrow
   */
  export type NewsTagFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsTag
     */
    select?: NewsTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsTag
     */
    omit?: NewsTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsTagInclude<ExtArgs> | null
    /**
     * Filter, which NewsTag to fetch.
     */
    where: NewsTagWhereUniqueInput
  }

  /**
   * NewsTag findFirst
   */
  export type NewsTagFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsTag
     */
    select?: NewsTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsTag
     */
    omit?: NewsTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsTagInclude<ExtArgs> | null
    /**
     * Filter, which NewsTag to fetch.
     */
    where?: NewsTagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NewsTags to fetch.
     */
    orderBy?: NewsTagOrderByWithRelationInput | NewsTagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NewsTags.
     */
    cursor?: NewsTagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NewsTags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NewsTags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NewsTags.
     */
    distinct?: NewsTagScalarFieldEnum | NewsTagScalarFieldEnum[]
  }

  /**
   * NewsTag findFirstOrThrow
   */
  export type NewsTagFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsTag
     */
    select?: NewsTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsTag
     */
    omit?: NewsTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsTagInclude<ExtArgs> | null
    /**
     * Filter, which NewsTag to fetch.
     */
    where?: NewsTagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NewsTags to fetch.
     */
    orderBy?: NewsTagOrderByWithRelationInput | NewsTagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NewsTags.
     */
    cursor?: NewsTagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NewsTags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NewsTags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NewsTags.
     */
    distinct?: NewsTagScalarFieldEnum | NewsTagScalarFieldEnum[]
  }

  /**
   * NewsTag findMany
   */
  export type NewsTagFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsTag
     */
    select?: NewsTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsTag
     */
    omit?: NewsTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsTagInclude<ExtArgs> | null
    /**
     * Filter, which NewsTags to fetch.
     */
    where?: NewsTagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NewsTags to fetch.
     */
    orderBy?: NewsTagOrderByWithRelationInput | NewsTagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing NewsTags.
     */
    cursor?: NewsTagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NewsTags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NewsTags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NewsTags.
     */
    distinct?: NewsTagScalarFieldEnum | NewsTagScalarFieldEnum[]
  }

  /**
   * NewsTag create
   */
  export type NewsTagCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsTag
     */
    select?: NewsTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsTag
     */
    omit?: NewsTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsTagInclude<ExtArgs> | null
    /**
     * The data needed to create a NewsTag.
     */
    data: XOR<NewsTagCreateInput, NewsTagUncheckedCreateInput>
  }

  /**
   * NewsTag createMany
   */
  export type NewsTagCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many NewsTags.
     */
    data: NewsTagCreateManyInput | NewsTagCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * NewsTag createManyAndReturn
   */
  export type NewsTagCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsTag
     */
    select?: NewsTagSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the NewsTag
     */
    omit?: NewsTagOmit<ExtArgs> | null
    /**
     * The data used to create many NewsTags.
     */
    data: NewsTagCreateManyInput | NewsTagCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsTagIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * NewsTag update
   */
  export type NewsTagUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsTag
     */
    select?: NewsTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsTag
     */
    omit?: NewsTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsTagInclude<ExtArgs> | null
    /**
     * The data needed to update a NewsTag.
     */
    data: XOR<NewsTagUpdateInput, NewsTagUncheckedUpdateInput>
    /**
     * Choose, which NewsTag to update.
     */
    where: NewsTagWhereUniqueInput
  }

  /**
   * NewsTag updateMany
   */
  export type NewsTagUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update NewsTags.
     */
    data: XOR<NewsTagUpdateManyMutationInput, NewsTagUncheckedUpdateManyInput>
    /**
     * Filter which NewsTags to update
     */
    where?: NewsTagWhereInput
    /**
     * Limit how many NewsTags to update.
     */
    limit?: number
  }

  /**
   * NewsTag updateManyAndReturn
   */
  export type NewsTagUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsTag
     */
    select?: NewsTagSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the NewsTag
     */
    omit?: NewsTagOmit<ExtArgs> | null
    /**
     * The data used to update NewsTags.
     */
    data: XOR<NewsTagUpdateManyMutationInput, NewsTagUncheckedUpdateManyInput>
    /**
     * Filter which NewsTags to update
     */
    where?: NewsTagWhereInput
    /**
     * Limit how many NewsTags to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsTagIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * NewsTag upsert
   */
  export type NewsTagUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsTag
     */
    select?: NewsTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsTag
     */
    omit?: NewsTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsTagInclude<ExtArgs> | null
    /**
     * The filter to search for the NewsTag to update in case it exists.
     */
    where: NewsTagWhereUniqueInput
    /**
     * In case the NewsTag found by the `where` argument doesn't exist, create a new NewsTag with this data.
     */
    create: XOR<NewsTagCreateInput, NewsTagUncheckedCreateInput>
    /**
     * In case the NewsTag was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NewsTagUpdateInput, NewsTagUncheckedUpdateInput>
  }

  /**
   * NewsTag delete
   */
  export type NewsTagDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsTag
     */
    select?: NewsTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsTag
     */
    omit?: NewsTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsTagInclude<ExtArgs> | null
    /**
     * Filter which NewsTag to delete.
     */
    where: NewsTagWhereUniqueInput
  }

  /**
   * NewsTag deleteMany
   */
  export type NewsTagDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which NewsTags to delete
     */
    where?: NewsTagWhereInput
    /**
     * Limit how many NewsTags to delete.
     */
    limit?: number
  }

  /**
   * NewsTag without action
   */
  export type NewsTagDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsTag
     */
    select?: NewsTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsTag
     */
    omit?: NewsTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsTagInclude<ExtArgs> | null
  }


  /**
   * Model ExpeditionResearcher
   */

  export type AggregateExpeditionResearcher = {
    _count: ExpeditionResearcherCountAggregateOutputType | null
    _min: ExpeditionResearcherMinAggregateOutputType | null
    _max: ExpeditionResearcherMaxAggregateOutputType | null
  }

  export type ExpeditionResearcherMinAggregateOutputType = {
    expeditionId: string | null
    researcherId: string | null
  }

  export type ExpeditionResearcherMaxAggregateOutputType = {
    expeditionId: string | null
    researcherId: string | null
  }

  export type ExpeditionResearcherCountAggregateOutputType = {
    expeditionId: number
    researcherId: number
    _all: number
  }


  export type ExpeditionResearcherMinAggregateInputType = {
    expeditionId?: true
    researcherId?: true
  }

  export type ExpeditionResearcherMaxAggregateInputType = {
    expeditionId?: true
    researcherId?: true
  }

  export type ExpeditionResearcherCountAggregateInputType = {
    expeditionId?: true
    researcherId?: true
    _all?: true
  }

  export type ExpeditionResearcherAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ExpeditionResearcher to aggregate.
     */
    where?: ExpeditionResearcherWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExpeditionResearchers to fetch.
     */
    orderBy?: ExpeditionResearcherOrderByWithRelationInput | ExpeditionResearcherOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ExpeditionResearcherWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExpeditionResearchers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExpeditionResearchers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ExpeditionResearchers
    **/
    _count?: true | ExpeditionResearcherCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ExpeditionResearcherMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ExpeditionResearcherMaxAggregateInputType
  }

  export type GetExpeditionResearcherAggregateType<T extends ExpeditionResearcherAggregateArgs> = {
        [P in keyof T & keyof AggregateExpeditionResearcher]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateExpeditionResearcher[P]>
      : GetScalarType<T[P], AggregateExpeditionResearcher[P]>
  }




  export type ExpeditionResearcherGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExpeditionResearcherWhereInput
    orderBy?: ExpeditionResearcherOrderByWithAggregationInput | ExpeditionResearcherOrderByWithAggregationInput[]
    by: ExpeditionResearcherScalarFieldEnum[] | ExpeditionResearcherScalarFieldEnum
    having?: ExpeditionResearcherScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ExpeditionResearcherCountAggregateInputType | true
    _min?: ExpeditionResearcherMinAggregateInputType
    _max?: ExpeditionResearcherMaxAggregateInputType
  }

  export type ExpeditionResearcherGroupByOutputType = {
    expeditionId: string
    researcherId: string
    _count: ExpeditionResearcherCountAggregateOutputType | null
    _min: ExpeditionResearcherMinAggregateOutputType | null
    _max: ExpeditionResearcherMaxAggregateOutputType | null
  }

  type GetExpeditionResearcherGroupByPayload<T extends ExpeditionResearcherGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ExpeditionResearcherGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ExpeditionResearcherGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ExpeditionResearcherGroupByOutputType[P]>
            : GetScalarType<T[P], ExpeditionResearcherGroupByOutputType[P]>
        }
      >
    >


  export type ExpeditionResearcherSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    expeditionId?: boolean
    researcherId?: boolean
    expedition?: boolean | ExpeditionDefaultArgs<ExtArgs>
    researcher?: boolean | ResearcherDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["expeditionResearcher"]>

  export type ExpeditionResearcherSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    expeditionId?: boolean
    researcherId?: boolean
    expedition?: boolean | ExpeditionDefaultArgs<ExtArgs>
    researcher?: boolean | ResearcherDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["expeditionResearcher"]>

  export type ExpeditionResearcherSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    expeditionId?: boolean
    researcherId?: boolean
    expedition?: boolean | ExpeditionDefaultArgs<ExtArgs>
    researcher?: boolean | ResearcherDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["expeditionResearcher"]>

  export type ExpeditionResearcherSelectScalar = {
    expeditionId?: boolean
    researcherId?: boolean
  }

  export type ExpeditionResearcherOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"expeditionId" | "researcherId", ExtArgs["result"]["expeditionResearcher"]>
  export type ExpeditionResearcherInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    expedition?: boolean | ExpeditionDefaultArgs<ExtArgs>
    researcher?: boolean | ResearcherDefaultArgs<ExtArgs>
  }
  export type ExpeditionResearcherIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    expedition?: boolean | ExpeditionDefaultArgs<ExtArgs>
    researcher?: boolean | ResearcherDefaultArgs<ExtArgs>
  }
  export type ExpeditionResearcherIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    expedition?: boolean | ExpeditionDefaultArgs<ExtArgs>
    researcher?: boolean | ResearcherDefaultArgs<ExtArgs>
  }

  export type $ExpeditionResearcherPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ExpeditionResearcher"
    objects: {
      expedition: Prisma.$ExpeditionPayload<ExtArgs>
      researcher: Prisma.$ResearcherPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      expeditionId: string
      researcherId: string
    }, ExtArgs["result"]["expeditionResearcher"]>
    composites: {}
  }

  type ExpeditionResearcherGetPayload<S extends boolean | null | undefined | ExpeditionResearcherDefaultArgs> = $Result.GetResult<Prisma.$ExpeditionResearcherPayload, S>

  type ExpeditionResearcherCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ExpeditionResearcherFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ExpeditionResearcherCountAggregateInputType | true
    }

  export interface ExpeditionResearcherDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ExpeditionResearcher'], meta: { name: 'ExpeditionResearcher' } }
    /**
     * Find zero or one ExpeditionResearcher that matches the filter.
     * @param {ExpeditionResearcherFindUniqueArgs} args - Arguments to find a ExpeditionResearcher
     * @example
     * // Get one ExpeditionResearcher
     * const expeditionResearcher = await prisma.expeditionResearcher.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ExpeditionResearcherFindUniqueArgs>(args: SelectSubset<T, ExpeditionResearcherFindUniqueArgs<ExtArgs>>): Prisma__ExpeditionResearcherClient<$Result.GetResult<Prisma.$ExpeditionResearcherPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ExpeditionResearcher that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ExpeditionResearcherFindUniqueOrThrowArgs} args - Arguments to find a ExpeditionResearcher
     * @example
     * // Get one ExpeditionResearcher
     * const expeditionResearcher = await prisma.expeditionResearcher.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ExpeditionResearcherFindUniqueOrThrowArgs>(args: SelectSubset<T, ExpeditionResearcherFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ExpeditionResearcherClient<$Result.GetResult<Prisma.$ExpeditionResearcherPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ExpeditionResearcher that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpeditionResearcherFindFirstArgs} args - Arguments to find a ExpeditionResearcher
     * @example
     * // Get one ExpeditionResearcher
     * const expeditionResearcher = await prisma.expeditionResearcher.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ExpeditionResearcherFindFirstArgs>(args?: SelectSubset<T, ExpeditionResearcherFindFirstArgs<ExtArgs>>): Prisma__ExpeditionResearcherClient<$Result.GetResult<Prisma.$ExpeditionResearcherPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ExpeditionResearcher that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpeditionResearcherFindFirstOrThrowArgs} args - Arguments to find a ExpeditionResearcher
     * @example
     * // Get one ExpeditionResearcher
     * const expeditionResearcher = await prisma.expeditionResearcher.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ExpeditionResearcherFindFirstOrThrowArgs>(args?: SelectSubset<T, ExpeditionResearcherFindFirstOrThrowArgs<ExtArgs>>): Prisma__ExpeditionResearcherClient<$Result.GetResult<Prisma.$ExpeditionResearcherPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ExpeditionResearchers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpeditionResearcherFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ExpeditionResearchers
     * const expeditionResearchers = await prisma.expeditionResearcher.findMany()
     * 
     * // Get first 10 ExpeditionResearchers
     * const expeditionResearchers = await prisma.expeditionResearcher.findMany({ take: 10 })
     * 
     * // Only select the `expeditionId`
     * const expeditionResearcherWithExpeditionIdOnly = await prisma.expeditionResearcher.findMany({ select: { expeditionId: true } })
     * 
     */
    findMany<T extends ExpeditionResearcherFindManyArgs>(args?: SelectSubset<T, ExpeditionResearcherFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExpeditionResearcherPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ExpeditionResearcher.
     * @param {ExpeditionResearcherCreateArgs} args - Arguments to create a ExpeditionResearcher.
     * @example
     * // Create one ExpeditionResearcher
     * const ExpeditionResearcher = await prisma.expeditionResearcher.create({
     *   data: {
     *     // ... data to create a ExpeditionResearcher
     *   }
     * })
     * 
     */
    create<T extends ExpeditionResearcherCreateArgs>(args: SelectSubset<T, ExpeditionResearcherCreateArgs<ExtArgs>>): Prisma__ExpeditionResearcherClient<$Result.GetResult<Prisma.$ExpeditionResearcherPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ExpeditionResearchers.
     * @param {ExpeditionResearcherCreateManyArgs} args - Arguments to create many ExpeditionResearchers.
     * @example
     * // Create many ExpeditionResearchers
     * const expeditionResearcher = await prisma.expeditionResearcher.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ExpeditionResearcherCreateManyArgs>(args?: SelectSubset<T, ExpeditionResearcherCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ExpeditionResearchers and returns the data saved in the database.
     * @param {ExpeditionResearcherCreateManyAndReturnArgs} args - Arguments to create many ExpeditionResearchers.
     * @example
     * // Create many ExpeditionResearchers
     * const expeditionResearcher = await prisma.expeditionResearcher.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ExpeditionResearchers and only return the `expeditionId`
     * const expeditionResearcherWithExpeditionIdOnly = await prisma.expeditionResearcher.createManyAndReturn({
     *   select: { expeditionId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ExpeditionResearcherCreateManyAndReturnArgs>(args?: SelectSubset<T, ExpeditionResearcherCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExpeditionResearcherPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ExpeditionResearcher.
     * @param {ExpeditionResearcherDeleteArgs} args - Arguments to delete one ExpeditionResearcher.
     * @example
     * // Delete one ExpeditionResearcher
     * const ExpeditionResearcher = await prisma.expeditionResearcher.delete({
     *   where: {
     *     // ... filter to delete one ExpeditionResearcher
     *   }
     * })
     * 
     */
    delete<T extends ExpeditionResearcherDeleteArgs>(args: SelectSubset<T, ExpeditionResearcherDeleteArgs<ExtArgs>>): Prisma__ExpeditionResearcherClient<$Result.GetResult<Prisma.$ExpeditionResearcherPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ExpeditionResearcher.
     * @param {ExpeditionResearcherUpdateArgs} args - Arguments to update one ExpeditionResearcher.
     * @example
     * // Update one ExpeditionResearcher
     * const expeditionResearcher = await prisma.expeditionResearcher.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ExpeditionResearcherUpdateArgs>(args: SelectSubset<T, ExpeditionResearcherUpdateArgs<ExtArgs>>): Prisma__ExpeditionResearcherClient<$Result.GetResult<Prisma.$ExpeditionResearcherPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ExpeditionResearchers.
     * @param {ExpeditionResearcherDeleteManyArgs} args - Arguments to filter ExpeditionResearchers to delete.
     * @example
     * // Delete a few ExpeditionResearchers
     * const { count } = await prisma.expeditionResearcher.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ExpeditionResearcherDeleteManyArgs>(args?: SelectSubset<T, ExpeditionResearcherDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ExpeditionResearchers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpeditionResearcherUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ExpeditionResearchers
     * const expeditionResearcher = await prisma.expeditionResearcher.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ExpeditionResearcherUpdateManyArgs>(args: SelectSubset<T, ExpeditionResearcherUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ExpeditionResearchers and returns the data updated in the database.
     * @param {ExpeditionResearcherUpdateManyAndReturnArgs} args - Arguments to update many ExpeditionResearchers.
     * @example
     * // Update many ExpeditionResearchers
     * const expeditionResearcher = await prisma.expeditionResearcher.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ExpeditionResearchers and only return the `expeditionId`
     * const expeditionResearcherWithExpeditionIdOnly = await prisma.expeditionResearcher.updateManyAndReturn({
     *   select: { expeditionId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ExpeditionResearcherUpdateManyAndReturnArgs>(args: SelectSubset<T, ExpeditionResearcherUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExpeditionResearcherPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ExpeditionResearcher.
     * @param {ExpeditionResearcherUpsertArgs} args - Arguments to update or create a ExpeditionResearcher.
     * @example
     * // Update or create a ExpeditionResearcher
     * const expeditionResearcher = await prisma.expeditionResearcher.upsert({
     *   create: {
     *     // ... data to create a ExpeditionResearcher
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ExpeditionResearcher we want to update
     *   }
     * })
     */
    upsert<T extends ExpeditionResearcherUpsertArgs>(args: SelectSubset<T, ExpeditionResearcherUpsertArgs<ExtArgs>>): Prisma__ExpeditionResearcherClient<$Result.GetResult<Prisma.$ExpeditionResearcherPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ExpeditionResearchers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpeditionResearcherCountArgs} args - Arguments to filter ExpeditionResearchers to count.
     * @example
     * // Count the number of ExpeditionResearchers
     * const count = await prisma.expeditionResearcher.count({
     *   where: {
     *     // ... the filter for the ExpeditionResearchers we want to count
     *   }
     * })
    **/
    count<T extends ExpeditionResearcherCountArgs>(
      args?: Subset<T, ExpeditionResearcherCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ExpeditionResearcherCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ExpeditionResearcher.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpeditionResearcherAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ExpeditionResearcherAggregateArgs>(args: Subset<T, ExpeditionResearcherAggregateArgs>): Prisma.PrismaPromise<GetExpeditionResearcherAggregateType<T>>

    /**
     * Group by ExpeditionResearcher.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpeditionResearcherGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ExpeditionResearcherGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ExpeditionResearcherGroupByArgs['orderBy'] }
        : { orderBy?: ExpeditionResearcherGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ExpeditionResearcherGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetExpeditionResearcherGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ExpeditionResearcher model
   */
  readonly fields: ExpeditionResearcherFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ExpeditionResearcher.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ExpeditionResearcherClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    expedition<T extends ExpeditionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ExpeditionDefaultArgs<ExtArgs>>): Prisma__ExpeditionClient<$Result.GetResult<Prisma.$ExpeditionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    researcher<T extends ResearcherDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ResearcherDefaultArgs<ExtArgs>>): Prisma__ResearcherClient<$Result.GetResult<Prisma.$ResearcherPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ExpeditionResearcher model
   */
  interface ExpeditionResearcherFieldRefs {
    readonly expeditionId: FieldRef<"ExpeditionResearcher", 'String'>
    readonly researcherId: FieldRef<"ExpeditionResearcher", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ExpeditionResearcher findUnique
   */
  export type ExpeditionResearcherFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExpeditionResearcher
     */
    select?: ExpeditionResearcherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExpeditionResearcher
     */
    omit?: ExpeditionResearcherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpeditionResearcherInclude<ExtArgs> | null
    /**
     * Filter, which ExpeditionResearcher to fetch.
     */
    where: ExpeditionResearcherWhereUniqueInput
  }

  /**
   * ExpeditionResearcher findUniqueOrThrow
   */
  export type ExpeditionResearcherFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExpeditionResearcher
     */
    select?: ExpeditionResearcherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExpeditionResearcher
     */
    omit?: ExpeditionResearcherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpeditionResearcherInclude<ExtArgs> | null
    /**
     * Filter, which ExpeditionResearcher to fetch.
     */
    where: ExpeditionResearcherWhereUniqueInput
  }

  /**
   * ExpeditionResearcher findFirst
   */
  export type ExpeditionResearcherFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExpeditionResearcher
     */
    select?: ExpeditionResearcherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExpeditionResearcher
     */
    omit?: ExpeditionResearcherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpeditionResearcherInclude<ExtArgs> | null
    /**
     * Filter, which ExpeditionResearcher to fetch.
     */
    where?: ExpeditionResearcherWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExpeditionResearchers to fetch.
     */
    orderBy?: ExpeditionResearcherOrderByWithRelationInput | ExpeditionResearcherOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ExpeditionResearchers.
     */
    cursor?: ExpeditionResearcherWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExpeditionResearchers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExpeditionResearchers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ExpeditionResearchers.
     */
    distinct?: ExpeditionResearcherScalarFieldEnum | ExpeditionResearcherScalarFieldEnum[]
  }

  /**
   * ExpeditionResearcher findFirstOrThrow
   */
  export type ExpeditionResearcherFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExpeditionResearcher
     */
    select?: ExpeditionResearcherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExpeditionResearcher
     */
    omit?: ExpeditionResearcherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpeditionResearcherInclude<ExtArgs> | null
    /**
     * Filter, which ExpeditionResearcher to fetch.
     */
    where?: ExpeditionResearcherWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExpeditionResearchers to fetch.
     */
    orderBy?: ExpeditionResearcherOrderByWithRelationInput | ExpeditionResearcherOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ExpeditionResearchers.
     */
    cursor?: ExpeditionResearcherWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExpeditionResearchers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExpeditionResearchers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ExpeditionResearchers.
     */
    distinct?: ExpeditionResearcherScalarFieldEnum | ExpeditionResearcherScalarFieldEnum[]
  }

  /**
   * ExpeditionResearcher findMany
   */
  export type ExpeditionResearcherFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExpeditionResearcher
     */
    select?: ExpeditionResearcherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExpeditionResearcher
     */
    omit?: ExpeditionResearcherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpeditionResearcherInclude<ExtArgs> | null
    /**
     * Filter, which ExpeditionResearchers to fetch.
     */
    where?: ExpeditionResearcherWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExpeditionResearchers to fetch.
     */
    orderBy?: ExpeditionResearcherOrderByWithRelationInput | ExpeditionResearcherOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ExpeditionResearchers.
     */
    cursor?: ExpeditionResearcherWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExpeditionResearchers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExpeditionResearchers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ExpeditionResearchers.
     */
    distinct?: ExpeditionResearcherScalarFieldEnum | ExpeditionResearcherScalarFieldEnum[]
  }

  /**
   * ExpeditionResearcher create
   */
  export type ExpeditionResearcherCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExpeditionResearcher
     */
    select?: ExpeditionResearcherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExpeditionResearcher
     */
    omit?: ExpeditionResearcherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpeditionResearcherInclude<ExtArgs> | null
    /**
     * The data needed to create a ExpeditionResearcher.
     */
    data: XOR<ExpeditionResearcherCreateInput, ExpeditionResearcherUncheckedCreateInput>
  }

  /**
   * ExpeditionResearcher createMany
   */
  export type ExpeditionResearcherCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ExpeditionResearchers.
     */
    data: ExpeditionResearcherCreateManyInput | ExpeditionResearcherCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ExpeditionResearcher createManyAndReturn
   */
  export type ExpeditionResearcherCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExpeditionResearcher
     */
    select?: ExpeditionResearcherSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ExpeditionResearcher
     */
    omit?: ExpeditionResearcherOmit<ExtArgs> | null
    /**
     * The data used to create many ExpeditionResearchers.
     */
    data: ExpeditionResearcherCreateManyInput | ExpeditionResearcherCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpeditionResearcherIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ExpeditionResearcher update
   */
  export type ExpeditionResearcherUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExpeditionResearcher
     */
    select?: ExpeditionResearcherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExpeditionResearcher
     */
    omit?: ExpeditionResearcherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpeditionResearcherInclude<ExtArgs> | null
    /**
     * The data needed to update a ExpeditionResearcher.
     */
    data: XOR<ExpeditionResearcherUpdateInput, ExpeditionResearcherUncheckedUpdateInput>
    /**
     * Choose, which ExpeditionResearcher to update.
     */
    where: ExpeditionResearcherWhereUniqueInput
  }

  /**
   * ExpeditionResearcher updateMany
   */
  export type ExpeditionResearcherUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ExpeditionResearchers.
     */
    data: XOR<ExpeditionResearcherUpdateManyMutationInput, ExpeditionResearcherUncheckedUpdateManyInput>
    /**
     * Filter which ExpeditionResearchers to update
     */
    where?: ExpeditionResearcherWhereInput
    /**
     * Limit how many ExpeditionResearchers to update.
     */
    limit?: number
  }

  /**
   * ExpeditionResearcher updateManyAndReturn
   */
  export type ExpeditionResearcherUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExpeditionResearcher
     */
    select?: ExpeditionResearcherSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ExpeditionResearcher
     */
    omit?: ExpeditionResearcherOmit<ExtArgs> | null
    /**
     * The data used to update ExpeditionResearchers.
     */
    data: XOR<ExpeditionResearcherUpdateManyMutationInput, ExpeditionResearcherUncheckedUpdateManyInput>
    /**
     * Filter which ExpeditionResearchers to update
     */
    where?: ExpeditionResearcherWhereInput
    /**
     * Limit how many ExpeditionResearchers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpeditionResearcherIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ExpeditionResearcher upsert
   */
  export type ExpeditionResearcherUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExpeditionResearcher
     */
    select?: ExpeditionResearcherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExpeditionResearcher
     */
    omit?: ExpeditionResearcherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpeditionResearcherInclude<ExtArgs> | null
    /**
     * The filter to search for the ExpeditionResearcher to update in case it exists.
     */
    where: ExpeditionResearcherWhereUniqueInput
    /**
     * In case the ExpeditionResearcher found by the `where` argument doesn't exist, create a new ExpeditionResearcher with this data.
     */
    create: XOR<ExpeditionResearcherCreateInput, ExpeditionResearcherUncheckedCreateInput>
    /**
     * In case the ExpeditionResearcher was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ExpeditionResearcherUpdateInput, ExpeditionResearcherUncheckedUpdateInput>
  }

  /**
   * ExpeditionResearcher delete
   */
  export type ExpeditionResearcherDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExpeditionResearcher
     */
    select?: ExpeditionResearcherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExpeditionResearcher
     */
    omit?: ExpeditionResearcherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpeditionResearcherInclude<ExtArgs> | null
    /**
     * Filter which ExpeditionResearcher to delete.
     */
    where: ExpeditionResearcherWhereUniqueInput
  }

  /**
   * ExpeditionResearcher deleteMany
   */
  export type ExpeditionResearcherDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ExpeditionResearchers to delete
     */
    where?: ExpeditionResearcherWhereInput
    /**
     * Limit how many ExpeditionResearchers to delete.
     */
    limit?: number
  }

  /**
   * ExpeditionResearcher without action
   */
  export type ExpeditionResearcherDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExpeditionResearcher
     */
    select?: ExpeditionResearcherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExpeditionResearcher
     */
    omit?: ExpeditionResearcherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpeditionResearcherInclude<ExtArgs> | null
  }


  /**
   * Model ExpeditionTag
   */

  export type AggregateExpeditionTag = {
    _count: ExpeditionTagCountAggregateOutputType | null
    _min: ExpeditionTagMinAggregateOutputType | null
    _max: ExpeditionTagMaxAggregateOutputType | null
  }

  export type ExpeditionTagMinAggregateOutputType = {
    expeditionId: string | null
    tagId: string | null
  }

  export type ExpeditionTagMaxAggregateOutputType = {
    expeditionId: string | null
    tagId: string | null
  }

  export type ExpeditionTagCountAggregateOutputType = {
    expeditionId: number
    tagId: number
    _all: number
  }


  export type ExpeditionTagMinAggregateInputType = {
    expeditionId?: true
    tagId?: true
  }

  export type ExpeditionTagMaxAggregateInputType = {
    expeditionId?: true
    tagId?: true
  }

  export type ExpeditionTagCountAggregateInputType = {
    expeditionId?: true
    tagId?: true
    _all?: true
  }

  export type ExpeditionTagAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ExpeditionTag to aggregate.
     */
    where?: ExpeditionTagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExpeditionTags to fetch.
     */
    orderBy?: ExpeditionTagOrderByWithRelationInput | ExpeditionTagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ExpeditionTagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExpeditionTags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExpeditionTags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ExpeditionTags
    **/
    _count?: true | ExpeditionTagCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ExpeditionTagMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ExpeditionTagMaxAggregateInputType
  }

  export type GetExpeditionTagAggregateType<T extends ExpeditionTagAggregateArgs> = {
        [P in keyof T & keyof AggregateExpeditionTag]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateExpeditionTag[P]>
      : GetScalarType<T[P], AggregateExpeditionTag[P]>
  }




  export type ExpeditionTagGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExpeditionTagWhereInput
    orderBy?: ExpeditionTagOrderByWithAggregationInput | ExpeditionTagOrderByWithAggregationInput[]
    by: ExpeditionTagScalarFieldEnum[] | ExpeditionTagScalarFieldEnum
    having?: ExpeditionTagScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ExpeditionTagCountAggregateInputType | true
    _min?: ExpeditionTagMinAggregateInputType
    _max?: ExpeditionTagMaxAggregateInputType
  }

  export type ExpeditionTagGroupByOutputType = {
    expeditionId: string
    tagId: string
    _count: ExpeditionTagCountAggregateOutputType | null
    _min: ExpeditionTagMinAggregateOutputType | null
    _max: ExpeditionTagMaxAggregateOutputType | null
  }

  type GetExpeditionTagGroupByPayload<T extends ExpeditionTagGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ExpeditionTagGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ExpeditionTagGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ExpeditionTagGroupByOutputType[P]>
            : GetScalarType<T[P], ExpeditionTagGroupByOutputType[P]>
        }
      >
    >


  export type ExpeditionTagSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    expeditionId?: boolean
    tagId?: boolean
    expedition?: boolean | ExpeditionDefaultArgs<ExtArgs>
    tag?: boolean | TagDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["expeditionTag"]>

  export type ExpeditionTagSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    expeditionId?: boolean
    tagId?: boolean
    expedition?: boolean | ExpeditionDefaultArgs<ExtArgs>
    tag?: boolean | TagDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["expeditionTag"]>

  export type ExpeditionTagSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    expeditionId?: boolean
    tagId?: boolean
    expedition?: boolean | ExpeditionDefaultArgs<ExtArgs>
    tag?: boolean | TagDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["expeditionTag"]>

  export type ExpeditionTagSelectScalar = {
    expeditionId?: boolean
    tagId?: boolean
  }

  export type ExpeditionTagOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"expeditionId" | "tagId", ExtArgs["result"]["expeditionTag"]>
  export type ExpeditionTagInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    expedition?: boolean | ExpeditionDefaultArgs<ExtArgs>
    tag?: boolean | TagDefaultArgs<ExtArgs>
  }
  export type ExpeditionTagIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    expedition?: boolean | ExpeditionDefaultArgs<ExtArgs>
    tag?: boolean | TagDefaultArgs<ExtArgs>
  }
  export type ExpeditionTagIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    expedition?: boolean | ExpeditionDefaultArgs<ExtArgs>
    tag?: boolean | TagDefaultArgs<ExtArgs>
  }

  export type $ExpeditionTagPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ExpeditionTag"
    objects: {
      expedition: Prisma.$ExpeditionPayload<ExtArgs>
      tag: Prisma.$TagPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      expeditionId: string
      tagId: string
    }, ExtArgs["result"]["expeditionTag"]>
    composites: {}
  }

  type ExpeditionTagGetPayload<S extends boolean | null | undefined | ExpeditionTagDefaultArgs> = $Result.GetResult<Prisma.$ExpeditionTagPayload, S>

  type ExpeditionTagCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ExpeditionTagFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ExpeditionTagCountAggregateInputType | true
    }

  export interface ExpeditionTagDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ExpeditionTag'], meta: { name: 'ExpeditionTag' } }
    /**
     * Find zero or one ExpeditionTag that matches the filter.
     * @param {ExpeditionTagFindUniqueArgs} args - Arguments to find a ExpeditionTag
     * @example
     * // Get one ExpeditionTag
     * const expeditionTag = await prisma.expeditionTag.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ExpeditionTagFindUniqueArgs>(args: SelectSubset<T, ExpeditionTagFindUniqueArgs<ExtArgs>>): Prisma__ExpeditionTagClient<$Result.GetResult<Prisma.$ExpeditionTagPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ExpeditionTag that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ExpeditionTagFindUniqueOrThrowArgs} args - Arguments to find a ExpeditionTag
     * @example
     * // Get one ExpeditionTag
     * const expeditionTag = await prisma.expeditionTag.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ExpeditionTagFindUniqueOrThrowArgs>(args: SelectSubset<T, ExpeditionTagFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ExpeditionTagClient<$Result.GetResult<Prisma.$ExpeditionTagPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ExpeditionTag that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpeditionTagFindFirstArgs} args - Arguments to find a ExpeditionTag
     * @example
     * // Get one ExpeditionTag
     * const expeditionTag = await prisma.expeditionTag.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ExpeditionTagFindFirstArgs>(args?: SelectSubset<T, ExpeditionTagFindFirstArgs<ExtArgs>>): Prisma__ExpeditionTagClient<$Result.GetResult<Prisma.$ExpeditionTagPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ExpeditionTag that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpeditionTagFindFirstOrThrowArgs} args - Arguments to find a ExpeditionTag
     * @example
     * // Get one ExpeditionTag
     * const expeditionTag = await prisma.expeditionTag.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ExpeditionTagFindFirstOrThrowArgs>(args?: SelectSubset<T, ExpeditionTagFindFirstOrThrowArgs<ExtArgs>>): Prisma__ExpeditionTagClient<$Result.GetResult<Prisma.$ExpeditionTagPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ExpeditionTags that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpeditionTagFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ExpeditionTags
     * const expeditionTags = await prisma.expeditionTag.findMany()
     * 
     * // Get first 10 ExpeditionTags
     * const expeditionTags = await prisma.expeditionTag.findMany({ take: 10 })
     * 
     * // Only select the `expeditionId`
     * const expeditionTagWithExpeditionIdOnly = await prisma.expeditionTag.findMany({ select: { expeditionId: true } })
     * 
     */
    findMany<T extends ExpeditionTagFindManyArgs>(args?: SelectSubset<T, ExpeditionTagFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExpeditionTagPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ExpeditionTag.
     * @param {ExpeditionTagCreateArgs} args - Arguments to create a ExpeditionTag.
     * @example
     * // Create one ExpeditionTag
     * const ExpeditionTag = await prisma.expeditionTag.create({
     *   data: {
     *     // ... data to create a ExpeditionTag
     *   }
     * })
     * 
     */
    create<T extends ExpeditionTagCreateArgs>(args: SelectSubset<T, ExpeditionTagCreateArgs<ExtArgs>>): Prisma__ExpeditionTagClient<$Result.GetResult<Prisma.$ExpeditionTagPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ExpeditionTags.
     * @param {ExpeditionTagCreateManyArgs} args - Arguments to create many ExpeditionTags.
     * @example
     * // Create many ExpeditionTags
     * const expeditionTag = await prisma.expeditionTag.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ExpeditionTagCreateManyArgs>(args?: SelectSubset<T, ExpeditionTagCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ExpeditionTags and returns the data saved in the database.
     * @param {ExpeditionTagCreateManyAndReturnArgs} args - Arguments to create many ExpeditionTags.
     * @example
     * // Create many ExpeditionTags
     * const expeditionTag = await prisma.expeditionTag.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ExpeditionTags and only return the `expeditionId`
     * const expeditionTagWithExpeditionIdOnly = await prisma.expeditionTag.createManyAndReturn({
     *   select: { expeditionId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ExpeditionTagCreateManyAndReturnArgs>(args?: SelectSubset<T, ExpeditionTagCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExpeditionTagPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ExpeditionTag.
     * @param {ExpeditionTagDeleteArgs} args - Arguments to delete one ExpeditionTag.
     * @example
     * // Delete one ExpeditionTag
     * const ExpeditionTag = await prisma.expeditionTag.delete({
     *   where: {
     *     // ... filter to delete one ExpeditionTag
     *   }
     * })
     * 
     */
    delete<T extends ExpeditionTagDeleteArgs>(args: SelectSubset<T, ExpeditionTagDeleteArgs<ExtArgs>>): Prisma__ExpeditionTagClient<$Result.GetResult<Prisma.$ExpeditionTagPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ExpeditionTag.
     * @param {ExpeditionTagUpdateArgs} args - Arguments to update one ExpeditionTag.
     * @example
     * // Update one ExpeditionTag
     * const expeditionTag = await prisma.expeditionTag.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ExpeditionTagUpdateArgs>(args: SelectSubset<T, ExpeditionTagUpdateArgs<ExtArgs>>): Prisma__ExpeditionTagClient<$Result.GetResult<Prisma.$ExpeditionTagPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ExpeditionTags.
     * @param {ExpeditionTagDeleteManyArgs} args - Arguments to filter ExpeditionTags to delete.
     * @example
     * // Delete a few ExpeditionTags
     * const { count } = await prisma.expeditionTag.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ExpeditionTagDeleteManyArgs>(args?: SelectSubset<T, ExpeditionTagDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ExpeditionTags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpeditionTagUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ExpeditionTags
     * const expeditionTag = await prisma.expeditionTag.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ExpeditionTagUpdateManyArgs>(args: SelectSubset<T, ExpeditionTagUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ExpeditionTags and returns the data updated in the database.
     * @param {ExpeditionTagUpdateManyAndReturnArgs} args - Arguments to update many ExpeditionTags.
     * @example
     * // Update many ExpeditionTags
     * const expeditionTag = await prisma.expeditionTag.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ExpeditionTags and only return the `expeditionId`
     * const expeditionTagWithExpeditionIdOnly = await prisma.expeditionTag.updateManyAndReturn({
     *   select: { expeditionId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ExpeditionTagUpdateManyAndReturnArgs>(args: SelectSubset<T, ExpeditionTagUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExpeditionTagPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ExpeditionTag.
     * @param {ExpeditionTagUpsertArgs} args - Arguments to update or create a ExpeditionTag.
     * @example
     * // Update or create a ExpeditionTag
     * const expeditionTag = await prisma.expeditionTag.upsert({
     *   create: {
     *     // ... data to create a ExpeditionTag
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ExpeditionTag we want to update
     *   }
     * })
     */
    upsert<T extends ExpeditionTagUpsertArgs>(args: SelectSubset<T, ExpeditionTagUpsertArgs<ExtArgs>>): Prisma__ExpeditionTagClient<$Result.GetResult<Prisma.$ExpeditionTagPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ExpeditionTags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpeditionTagCountArgs} args - Arguments to filter ExpeditionTags to count.
     * @example
     * // Count the number of ExpeditionTags
     * const count = await prisma.expeditionTag.count({
     *   where: {
     *     // ... the filter for the ExpeditionTags we want to count
     *   }
     * })
    **/
    count<T extends ExpeditionTagCountArgs>(
      args?: Subset<T, ExpeditionTagCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ExpeditionTagCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ExpeditionTag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpeditionTagAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ExpeditionTagAggregateArgs>(args: Subset<T, ExpeditionTagAggregateArgs>): Prisma.PrismaPromise<GetExpeditionTagAggregateType<T>>

    /**
     * Group by ExpeditionTag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpeditionTagGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ExpeditionTagGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ExpeditionTagGroupByArgs['orderBy'] }
        : { orderBy?: ExpeditionTagGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ExpeditionTagGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetExpeditionTagGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ExpeditionTag model
   */
  readonly fields: ExpeditionTagFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ExpeditionTag.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ExpeditionTagClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    expedition<T extends ExpeditionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ExpeditionDefaultArgs<ExtArgs>>): Prisma__ExpeditionClient<$Result.GetResult<Prisma.$ExpeditionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    tag<T extends TagDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TagDefaultArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ExpeditionTag model
   */
  interface ExpeditionTagFieldRefs {
    readonly expeditionId: FieldRef<"ExpeditionTag", 'String'>
    readonly tagId: FieldRef<"ExpeditionTag", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ExpeditionTag findUnique
   */
  export type ExpeditionTagFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExpeditionTag
     */
    select?: ExpeditionTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExpeditionTag
     */
    omit?: ExpeditionTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpeditionTagInclude<ExtArgs> | null
    /**
     * Filter, which ExpeditionTag to fetch.
     */
    where: ExpeditionTagWhereUniqueInput
  }

  /**
   * ExpeditionTag findUniqueOrThrow
   */
  export type ExpeditionTagFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExpeditionTag
     */
    select?: ExpeditionTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExpeditionTag
     */
    omit?: ExpeditionTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpeditionTagInclude<ExtArgs> | null
    /**
     * Filter, which ExpeditionTag to fetch.
     */
    where: ExpeditionTagWhereUniqueInput
  }

  /**
   * ExpeditionTag findFirst
   */
  export type ExpeditionTagFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExpeditionTag
     */
    select?: ExpeditionTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExpeditionTag
     */
    omit?: ExpeditionTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpeditionTagInclude<ExtArgs> | null
    /**
     * Filter, which ExpeditionTag to fetch.
     */
    where?: ExpeditionTagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExpeditionTags to fetch.
     */
    orderBy?: ExpeditionTagOrderByWithRelationInput | ExpeditionTagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ExpeditionTags.
     */
    cursor?: ExpeditionTagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExpeditionTags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExpeditionTags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ExpeditionTags.
     */
    distinct?: ExpeditionTagScalarFieldEnum | ExpeditionTagScalarFieldEnum[]
  }

  /**
   * ExpeditionTag findFirstOrThrow
   */
  export type ExpeditionTagFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExpeditionTag
     */
    select?: ExpeditionTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExpeditionTag
     */
    omit?: ExpeditionTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpeditionTagInclude<ExtArgs> | null
    /**
     * Filter, which ExpeditionTag to fetch.
     */
    where?: ExpeditionTagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExpeditionTags to fetch.
     */
    orderBy?: ExpeditionTagOrderByWithRelationInput | ExpeditionTagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ExpeditionTags.
     */
    cursor?: ExpeditionTagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExpeditionTags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExpeditionTags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ExpeditionTags.
     */
    distinct?: ExpeditionTagScalarFieldEnum | ExpeditionTagScalarFieldEnum[]
  }

  /**
   * ExpeditionTag findMany
   */
  export type ExpeditionTagFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExpeditionTag
     */
    select?: ExpeditionTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExpeditionTag
     */
    omit?: ExpeditionTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpeditionTagInclude<ExtArgs> | null
    /**
     * Filter, which ExpeditionTags to fetch.
     */
    where?: ExpeditionTagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExpeditionTags to fetch.
     */
    orderBy?: ExpeditionTagOrderByWithRelationInput | ExpeditionTagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ExpeditionTags.
     */
    cursor?: ExpeditionTagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExpeditionTags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExpeditionTags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ExpeditionTags.
     */
    distinct?: ExpeditionTagScalarFieldEnum | ExpeditionTagScalarFieldEnum[]
  }

  /**
   * ExpeditionTag create
   */
  export type ExpeditionTagCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExpeditionTag
     */
    select?: ExpeditionTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExpeditionTag
     */
    omit?: ExpeditionTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpeditionTagInclude<ExtArgs> | null
    /**
     * The data needed to create a ExpeditionTag.
     */
    data: XOR<ExpeditionTagCreateInput, ExpeditionTagUncheckedCreateInput>
  }

  /**
   * ExpeditionTag createMany
   */
  export type ExpeditionTagCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ExpeditionTags.
     */
    data: ExpeditionTagCreateManyInput | ExpeditionTagCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ExpeditionTag createManyAndReturn
   */
  export type ExpeditionTagCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExpeditionTag
     */
    select?: ExpeditionTagSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ExpeditionTag
     */
    omit?: ExpeditionTagOmit<ExtArgs> | null
    /**
     * The data used to create many ExpeditionTags.
     */
    data: ExpeditionTagCreateManyInput | ExpeditionTagCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpeditionTagIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ExpeditionTag update
   */
  export type ExpeditionTagUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExpeditionTag
     */
    select?: ExpeditionTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExpeditionTag
     */
    omit?: ExpeditionTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpeditionTagInclude<ExtArgs> | null
    /**
     * The data needed to update a ExpeditionTag.
     */
    data: XOR<ExpeditionTagUpdateInput, ExpeditionTagUncheckedUpdateInput>
    /**
     * Choose, which ExpeditionTag to update.
     */
    where: ExpeditionTagWhereUniqueInput
  }

  /**
   * ExpeditionTag updateMany
   */
  export type ExpeditionTagUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ExpeditionTags.
     */
    data: XOR<ExpeditionTagUpdateManyMutationInput, ExpeditionTagUncheckedUpdateManyInput>
    /**
     * Filter which ExpeditionTags to update
     */
    where?: ExpeditionTagWhereInput
    /**
     * Limit how many ExpeditionTags to update.
     */
    limit?: number
  }

  /**
   * ExpeditionTag updateManyAndReturn
   */
  export type ExpeditionTagUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExpeditionTag
     */
    select?: ExpeditionTagSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ExpeditionTag
     */
    omit?: ExpeditionTagOmit<ExtArgs> | null
    /**
     * The data used to update ExpeditionTags.
     */
    data: XOR<ExpeditionTagUpdateManyMutationInput, ExpeditionTagUncheckedUpdateManyInput>
    /**
     * Filter which ExpeditionTags to update
     */
    where?: ExpeditionTagWhereInput
    /**
     * Limit how many ExpeditionTags to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpeditionTagIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ExpeditionTag upsert
   */
  export type ExpeditionTagUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExpeditionTag
     */
    select?: ExpeditionTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExpeditionTag
     */
    omit?: ExpeditionTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpeditionTagInclude<ExtArgs> | null
    /**
     * The filter to search for the ExpeditionTag to update in case it exists.
     */
    where: ExpeditionTagWhereUniqueInput
    /**
     * In case the ExpeditionTag found by the `where` argument doesn't exist, create a new ExpeditionTag with this data.
     */
    create: XOR<ExpeditionTagCreateInput, ExpeditionTagUncheckedCreateInput>
    /**
     * In case the ExpeditionTag was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ExpeditionTagUpdateInput, ExpeditionTagUncheckedUpdateInput>
  }

  /**
   * ExpeditionTag delete
   */
  export type ExpeditionTagDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExpeditionTag
     */
    select?: ExpeditionTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExpeditionTag
     */
    omit?: ExpeditionTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpeditionTagInclude<ExtArgs> | null
    /**
     * Filter which ExpeditionTag to delete.
     */
    where: ExpeditionTagWhereUniqueInput
  }

  /**
   * ExpeditionTag deleteMany
   */
  export type ExpeditionTagDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ExpeditionTags to delete
     */
    where?: ExpeditionTagWhereInput
    /**
     * Limit how many ExpeditionTags to delete.
     */
    limit?: number
  }

  /**
   * ExpeditionTag without action
   */
  export type ExpeditionTagDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExpeditionTag
     */
    select?: ExpeditionTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExpeditionTag
     */
    omit?: ExpeditionTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpeditionTagInclude<ExtArgs> | null
  }


  /**
   * Model ResearcherTag
   */

  export type AggregateResearcherTag = {
    _count: ResearcherTagCountAggregateOutputType | null
    _min: ResearcherTagMinAggregateOutputType | null
    _max: ResearcherTagMaxAggregateOutputType | null
  }

  export type ResearcherTagMinAggregateOutputType = {
    researcherId: string | null
    tagId: string | null
  }

  export type ResearcherTagMaxAggregateOutputType = {
    researcherId: string | null
    tagId: string | null
  }

  export type ResearcherTagCountAggregateOutputType = {
    researcherId: number
    tagId: number
    _all: number
  }


  export type ResearcherTagMinAggregateInputType = {
    researcherId?: true
    tagId?: true
  }

  export type ResearcherTagMaxAggregateInputType = {
    researcherId?: true
    tagId?: true
  }

  export type ResearcherTagCountAggregateInputType = {
    researcherId?: true
    tagId?: true
    _all?: true
  }

  export type ResearcherTagAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ResearcherTag to aggregate.
     */
    where?: ResearcherTagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ResearcherTags to fetch.
     */
    orderBy?: ResearcherTagOrderByWithRelationInput | ResearcherTagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ResearcherTagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ResearcherTags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ResearcherTags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ResearcherTags
    **/
    _count?: true | ResearcherTagCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ResearcherTagMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ResearcherTagMaxAggregateInputType
  }

  export type GetResearcherTagAggregateType<T extends ResearcherTagAggregateArgs> = {
        [P in keyof T & keyof AggregateResearcherTag]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateResearcherTag[P]>
      : GetScalarType<T[P], AggregateResearcherTag[P]>
  }




  export type ResearcherTagGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ResearcherTagWhereInput
    orderBy?: ResearcherTagOrderByWithAggregationInput | ResearcherTagOrderByWithAggregationInput[]
    by: ResearcherTagScalarFieldEnum[] | ResearcherTagScalarFieldEnum
    having?: ResearcherTagScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ResearcherTagCountAggregateInputType | true
    _min?: ResearcherTagMinAggregateInputType
    _max?: ResearcherTagMaxAggregateInputType
  }

  export type ResearcherTagGroupByOutputType = {
    researcherId: string
    tagId: string
    _count: ResearcherTagCountAggregateOutputType | null
    _min: ResearcherTagMinAggregateOutputType | null
    _max: ResearcherTagMaxAggregateOutputType | null
  }

  type GetResearcherTagGroupByPayload<T extends ResearcherTagGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ResearcherTagGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ResearcherTagGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ResearcherTagGroupByOutputType[P]>
            : GetScalarType<T[P], ResearcherTagGroupByOutputType[P]>
        }
      >
    >


  export type ResearcherTagSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    researcherId?: boolean
    tagId?: boolean
    researcher?: boolean | ResearcherDefaultArgs<ExtArgs>
    tag?: boolean | TagDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["researcherTag"]>

  export type ResearcherTagSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    researcherId?: boolean
    tagId?: boolean
    researcher?: boolean | ResearcherDefaultArgs<ExtArgs>
    tag?: boolean | TagDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["researcherTag"]>

  export type ResearcherTagSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    researcherId?: boolean
    tagId?: boolean
    researcher?: boolean | ResearcherDefaultArgs<ExtArgs>
    tag?: boolean | TagDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["researcherTag"]>

  export type ResearcherTagSelectScalar = {
    researcherId?: boolean
    tagId?: boolean
  }

  export type ResearcherTagOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"researcherId" | "tagId", ExtArgs["result"]["researcherTag"]>
  export type ResearcherTagInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    researcher?: boolean | ResearcherDefaultArgs<ExtArgs>
    tag?: boolean | TagDefaultArgs<ExtArgs>
  }
  export type ResearcherTagIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    researcher?: boolean | ResearcherDefaultArgs<ExtArgs>
    tag?: boolean | TagDefaultArgs<ExtArgs>
  }
  export type ResearcherTagIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    researcher?: boolean | ResearcherDefaultArgs<ExtArgs>
    tag?: boolean | TagDefaultArgs<ExtArgs>
  }

  export type $ResearcherTagPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ResearcherTag"
    objects: {
      researcher: Prisma.$ResearcherPayload<ExtArgs>
      tag: Prisma.$TagPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      researcherId: string
      tagId: string
    }, ExtArgs["result"]["researcherTag"]>
    composites: {}
  }

  type ResearcherTagGetPayload<S extends boolean | null | undefined | ResearcherTagDefaultArgs> = $Result.GetResult<Prisma.$ResearcherTagPayload, S>

  type ResearcherTagCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ResearcherTagFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ResearcherTagCountAggregateInputType | true
    }

  export interface ResearcherTagDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ResearcherTag'], meta: { name: 'ResearcherTag' } }
    /**
     * Find zero or one ResearcherTag that matches the filter.
     * @param {ResearcherTagFindUniqueArgs} args - Arguments to find a ResearcherTag
     * @example
     * // Get one ResearcherTag
     * const researcherTag = await prisma.researcherTag.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ResearcherTagFindUniqueArgs>(args: SelectSubset<T, ResearcherTagFindUniqueArgs<ExtArgs>>): Prisma__ResearcherTagClient<$Result.GetResult<Prisma.$ResearcherTagPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ResearcherTag that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ResearcherTagFindUniqueOrThrowArgs} args - Arguments to find a ResearcherTag
     * @example
     * // Get one ResearcherTag
     * const researcherTag = await prisma.researcherTag.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ResearcherTagFindUniqueOrThrowArgs>(args: SelectSubset<T, ResearcherTagFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ResearcherTagClient<$Result.GetResult<Prisma.$ResearcherTagPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ResearcherTag that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResearcherTagFindFirstArgs} args - Arguments to find a ResearcherTag
     * @example
     * // Get one ResearcherTag
     * const researcherTag = await prisma.researcherTag.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ResearcherTagFindFirstArgs>(args?: SelectSubset<T, ResearcherTagFindFirstArgs<ExtArgs>>): Prisma__ResearcherTagClient<$Result.GetResult<Prisma.$ResearcherTagPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ResearcherTag that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResearcherTagFindFirstOrThrowArgs} args - Arguments to find a ResearcherTag
     * @example
     * // Get one ResearcherTag
     * const researcherTag = await prisma.researcherTag.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ResearcherTagFindFirstOrThrowArgs>(args?: SelectSubset<T, ResearcherTagFindFirstOrThrowArgs<ExtArgs>>): Prisma__ResearcherTagClient<$Result.GetResult<Prisma.$ResearcherTagPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ResearcherTags that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResearcherTagFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ResearcherTags
     * const researcherTags = await prisma.researcherTag.findMany()
     * 
     * // Get first 10 ResearcherTags
     * const researcherTags = await prisma.researcherTag.findMany({ take: 10 })
     * 
     * // Only select the `researcherId`
     * const researcherTagWithResearcherIdOnly = await prisma.researcherTag.findMany({ select: { researcherId: true } })
     * 
     */
    findMany<T extends ResearcherTagFindManyArgs>(args?: SelectSubset<T, ResearcherTagFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResearcherTagPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ResearcherTag.
     * @param {ResearcherTagCreateArgs} args - Arguments to create a ResearcherTag.
     * @example
     * // Create one ResearcherTag
     * const ResearcherTag = await prisma.researcherTag.create({
     *   data: {
     *     // ... data to create a ResearcherTag
     *   }
     * })
     * 
     */
    create<T extends ResearcherTagCreateArgs>(args: SelectSubset<T, ResearcherTagCreateArgs<ExtArgs>>): Prisma__ResearcherTagClient<$Result.GetResult<Prisma.$ResearcherTagPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ResearcherTags.
     * @param {ResearcherTagCreateManyArgs} args - Arguments to create many ResearcherTags.
     * @example
     * // Create many ResearcherTags
     * const researcherTag = await prisma.researcherTag.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ResearcherTagCreateManyArgs>(args?: SelectSubset<T, ResearcherTagCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ResearcherTags and returns the data saved in the database.
     * @param {ResearcherTagCreateManyAndReturnArgs} args - Arguments to create many ResearcherTags.
     * @example
     * // Create many ResearcherTags
     * const researcherTag = await prisma.researcherTag.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ResearcherTags and only return the `researcherId`
     * const researcherTagWithResearcherIdOnly = await prisma.researcherTag.createManyAndReturn({
     *   select: { researcherId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ResearcherTagCreateManyAndReturnArgs>(args?: SelectSubset<T, ResearcherTagCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResearcherTagPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ResearcherTag.
     * @param {ResearcherTagDeleteArgs} args - Arguments to delete one ResearcherTag.
     * @example
     * // Delete one ResearcherTag
     * const ResearcherTag = await prisma.researcherTag.delete({
     *   where: {
     *     // ... filter to delete one ResearcherTag
     *   }
     * })
     * 
     */
    delete<T extends ResearcherTagDeleteArgs>(args: SelectSubset<T, ResearcherTagDeleteArgs<ExtArgs>>): Prisma__ResearcherTagClient<$Result.GetResult<Prisma.$ResearcherTagPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ResearcherTag.
     * @param {ResearcherTagUpdateArgs} args - Arguments to update one ResearcherTag.
     * @example
     * // Update one ResearcherTag
     * const researcherTag = await prisma.researcherTag.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ResearcherTagUpdateArgs>(args: SelectSubset<T, ResearcherTagUpdateArgs<ExtArgs>>): Prisma__ResearcherTagClient<$Result.GetResult<Prisma.$ResearcherTagPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ResearcherTags.
     * @param {ResearcherTagDeleteManyArgs} args - Arguments to filter ResearcherTags to delete.
     * @example
     * // Delete a few ResearcherTags
     * const { count } = await prisma.researcherTag.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ResearcherTagDeleteManyArgs>(args?: SelectSubset<T, ResearcherTagDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ResearcherTags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResearcherTagUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ResearcherTags
     * const researcherTag = await prisma.researcherTag.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ResearcherTagUpdateManyArgs>(args: SelectSubset<T, ResearcherTagUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ResearcherTags and returns the data updated in the database.
     * @param {ResearcherTagUpdateManyAndReturnArgs} args - Arguments to update many ResearcherTags.
     * @example
     * // Update many ResearcherTags
     * const researcherTag = await prisma.researcherTag.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ResearcherTags and only return the `researcherId`
     * const researcherTagWithResearcherIdOnly = await prisma.researcherTag.updateManyAndReturn({
     *   select: { researcherId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ResearcherTagUpdateManyAndReturnArgs>(args: SelectSubset<T, ResearcherTagUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResearcherTagPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ResearcherTag.
     * @param {ResearcherTagUpsertArgs} args - Arguments to update or create a ResearcherTag.
     * @example
     * // Update or create a ResearcherTag
     * const researcherTag = await prisma.researcherTag.upsert({
     *   create: {
     *     // ... data to create a ResearcherTag
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ResearcherTag we want to update
     *   }
     * })
     */
    upsert<T extends ResearcherTagUpsertArgs>(args: SelectSubset<T, ResearcherTagUpsertArgs<ExtArgs>>): Prisma__ResearcherTagClient<$Result.GetResult<Prisma.$ResearcherTagPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ResearcherTags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResearcherTagCountArgs} args - Arguments to filter ResearcherTags to count.
     * @example
     * // Count the number of ResearcherTags
     * const count = await prisma.researcherTag.count({
     *   where: {
     *     // ... the filter for the ResearcherTags we want to count
     *   }
     * })
    **/
    count<T extends ResearcherTagCountArgs>(
      args?: Subset<T, ResearcherTagCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ResearcherTagCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ResearcherTag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResearcherTagAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ResearcherTagAggregateArgs>(args: Subset<T, ResearcherTagAggregateArgs>): Prisma.PrismaPromise<GetResearcherTagAggregateType<T>>

    /**
     * Group by ResearcherTag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResearcherTagGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ResearcherTagGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ResearcherTagGroupByArgs['orderBy'] }
        : { orderBy?: ResearcherTagGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ResearcherTagGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetResearcherTagGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ResearcherTag model
   */
  readonly fields: ResearcherTagFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ResearcherTag.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ResearcherTagClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    researcher<T extends ResearcherDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ResearcherDefaultArgs<ExtArgs>>): Prisma__ResearcherClient<$Result.GetResult<Prisma.$ResearcherPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    tag<T extends TagDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TagDefaultArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ResearcherTag model
   */
  interface ResearcherTagFieldRefs {
    readonly researcherId: FieldRef<"ResearcherTag", 'String'>
    readonly tagId: FieldRef<"ResearcherTag", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ResearcherTag findUnique
   */
  export type ResearcherTagFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResearcherTag
     */
    select?: ResearcherTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ResearcherTag
     */
    omit?: ResearcherTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResearcherTagInclude<ExtArgs> | null
    /**
     * Filter, which ResearcherTag to fetch.
     */
    where: ResearcherTagWhereUniqueInput
  }

  /**
   * ResearcherTag findUniqueOrThrow
   */
  export type ResearcherTagFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResearcherTag
     */
    select?: ResearcherTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ResearcherTag
     */
    omit?: ResearcherTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResearcherTagInclude<ExtArgs> | null
    /**
     * Filter, which ResearcherTag to fetch.
     */
    where: ResearcherTagWhereUniqueInput
  }

  /**
   * ResearcherTag findFirst
   */
  export type ResearcherTagFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResearcherTag
     */
    select?: ResearcherTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ResearcherTag
     */
    omit?: ResearcherTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResearcherTagInclude<ExtArgs> | null
    /**
     * Filter, which ResearcherTag to fetch.
     */
    where?: ResearcherTagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ResearcherTags to fetch.
     */
    orderBy?: ResearcherTagOrderByWithRelationInput | ResearcherTagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ResearcherTags.
     */
    cursor?: ResearcherTagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ResearcherTags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ResearcherTags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ResearcherTags.
     */
    distinct?: ResearcherTagScalarFieldEnum | ResearcherTagScalarFieldEnum[]
  }

  /**
   * ResearcherTag findFirstOrThrow
   */
  export type ResearcherTagFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResearcherTag
     */
    select?: ResearcherTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ResearcherTag
     */
    omit?: ResearcherTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResearcherTagInclude<ExtArgs> | null
    /**
     * Filter, which ResearcherTag to fetch.
     */
    where?: ResearcherTagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ResearcherTags to fetch.
     */
    orderBy?: ResearcherTagOrderByWithRelationInput | ResearcherTagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ResearcherTags.
     */
    cursor?: ResearcherTagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ResearcherTags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ResearcherTags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ResearcherTags.
     */
    distinct?: ResearcherTagScalarFieldEnum | ResearcherTagScalarFieldEnum[]
  }

  /**
   * ResearcherTag findMany
   */
  export type ResearcherTagFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResearcherTag
     */
    select?: ResearcherTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ResearcherTag
     */
    omit?: ResearcherTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResearcherTagInclude<ExtArgs> | null
    /**
     * Filter, which ResearcherTags to fetch.
     */
    where?: ResearcherTagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ResearcherTags to fetch.
     */
    orderBy?: ResearcherTagOrderByWithRelationInput | ResearcherTagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ResearcherTags.
     */
    cursor?: ResearcherTagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ResearcherTags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ResearcherTags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ResearcherTags.
     */
    distinct?: ResearcherTagScalarFieldEnum | ResearcherTagScalarFieldEnum[]
  }

  /**
   * ResearcherTag create
   */
  export type ResearcherTagCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResearcherTag
     */
    select?: ResearcherTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ResearcherTag
     */
    omit?: ResearcherTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResearcherTagInclude<ExtArgs> | null
    /**
     * The data needed to create a ResearcherTag.
     */
    data: XOR<ResearcherTagCreateInput, ResearcherTagUncheckedCreateInput>
  }

  /**
   * ResearcherTag createMany
   */
  export type ResearcherTagCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ResearcherTags.
     */
    data: ResearcherTagCreateManyInput | ResearcherTagCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ResearcherTag createManyAndReturn
   */
  export type ResearcherTagCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResearcherTag
     */
    select?: ResearcherTagSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ResearcherTag
     */
    omit?: ResearcherTagOmit<ExtArgs> | null
    /**
     * The data used to create many ResearcherTags.
     */
    data: ResearcherTagCreateManyInput | ResearcherTagCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResearcherTagIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ResearcherTag update
   */
  export type ResearcherTagUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResearcherTag
     */
    select?: ResearcherTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ResearcherTag
     */
    omit?: ResearcherTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResearcherTagInclude<ExtArgs> | null
    /**
     * The data needed to update a ResearcherTag.
     */
    data: XOR<ResearcherTagUpdateInput, ResearcherTagUncheckedUpdateInput>
    /**
     * Choose, which ResearcherTag to update.
     */
    where: ResearcherTagWhereUniqueInput
  }

  /**
   * ResearcherTag updateMany
   */
  export type ResearcherTagUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ResearcherTags.
     */
    data: XOR<ResearcherTagUpdateManyMutationInput, ResearcherTagUncheckedUpdateManyInput>
    /**
     * Filter which ResearcherTags to update
     */
    where?: ResearcherTagWhereInput
    /**
     * Limit how many ResearcherTags to update.
     */
    limit?: number
  }

  /**
   * ResearcherTag updateManyAndReturn
   */
  export type ResearcherTagUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResearcherTag
     */
    select?: ResearcherTagSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ResearcherTag
     */
    omit?: ResearcherTagOmit<ExtArgs> | null
    /**
     * The data used to update ResearcherTags.
     */
    data: XOR<ResearcherTagUpdateManyMutationInput, ResearcherTagUncheckedUpdateManyInput>
    /**
     * Filter which ResearcherTags to update
     */
    where?: ResearcherTagWhereInput
    /**
     * Limit how many ResearcherTags to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResearcherTagIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ResearcherTag upsert
   */
  export type ResearcherTagUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResearcherTag
     */
    select?: ResearcherTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ResearcherTag
     */
    omit?: ResearcherTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResearcherTagInclude<ExtArgs> | null
    /**
     * The filter to search for the ResearcherTag to update in case it exists.
     */
    where: ResearcherTagWhereUniqueInput
    /**
     * In case the ResearcherTag found by the `where` argument doesn't exist, create a new ResearcherTag with this data.
     */
    create: XOR<ResearcherTagCreateInput, ResearcherTagUncheckedCreateInput>
    /**
     * In case the ResearcherTag was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ResearcherTagUpdateInput, ResearcherTagUncheckedUpdateInput>
  }

  /**
   * ResearcherTag delete
   */
  export type ResearcherTagDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResearcherTag
     */
    select?: ResearcherTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ResearcherTag
     */
    omit?: ResearcherTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResearcherTagInclude<ExtArgs> | null
    /**
     * Filter which ResearcherTag to delete.
     */
    where: ResearcherTagWhereUniqueInput
  }

  /**
   * ResearcherTag deleteMany
   */
  export type ResearcherTagDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ResearcherTags to delete
     */
    where?: ResearcherTagWhereInput
    /**
     * Limit how many ResearcherTags to delete.
     */
    limit?: number
  }

  /**
   * ResearcherTag without action
   */
  export type ResearcherTagDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResearcherTag
     */
    select?: ResearcherTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ResearcherTag
     */
    omit?: ResearcherTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResearcherTagInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const NewsScalarFieldEnum: {
    id: 'id',
    title: 'title',
    slug: 'slug',
    summaryShort: 'summaryShort',
    sourceDescription: 'sourceDescription',
    contentFull: 'contentFull',
    region: 'region',
    theme: 'theme',
    year: 'year',
    type: 'type',
    publishedDate: 'publishedDate',
    sourceUrl: 'sourceUrl',
    sourceItemKey: 'sourceItemKey',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type NewsScalarFieldEnum = (typeof NewsScalarFieldEnum)[keyof typeof NewsScalarFieldEnum]


  export const ExpeditionScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    region: 'region',
    startDate: 'startDate',
    endDate: 'endDate',
    sourceUrl: 'sourceUrl',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ExpeditionScalarFieldEnum = (typeof ExpeditionScalarFieldEnum)[keyof typeof ExpeditionScalarFieldEnum]


  export const ResearcherScalarFieldEnum: {
    id: 'id',
    name: 'name',
    affiliation: 'affiliation',
    bio: 'bio',
    profileUrl: 'profileUrl',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ResearcherScalarFieldEnum = (typeof ResearcherScalarFieldEnum)[keyof typeof ResearcherScalarFieldEnum]


  export const PhotoScalarFieldEnum: {
    id: 'id',
    url: 'url',
    caption: 'caption',
    altText: 'altText',
    credit: 'credit',
    sourceUrl: 'sourceUrl',
    sourceType: 'sourceType',
    newsId: 'newsId',
    expeditionId: 'expeditionId',
    createdAt: 'createdAt'
  };

  export type PhotoScalarFieldEnum = (typeof PhotoScalarFieldEnum)[keyof typeof PhotoScalarFieldEnum]


  export const PublicSummaryScalarFieldEnum: {
    id: 'id',
    summary: 'summary',
    language: 'language',
    model: 'model',
    generatedAt: 'generatedAt',
    newsId: 'newsId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PublicSummaryScalarFieldEnum = (typeof PublicSummaryScalarFieldEnum)[keyof typeof PublicSummaryScalarFieldEnum]


  export const TagScalarFieldEnum: {
    id: 'id',
    name: 'name',
    slug: 'slug',
    createdAt: 'createdAt'
  };

  export type TagScalarFieldEnum = (typeof TagScalarFieldEnum)[keyof typeof TagScalarFieldEnum]


  export const NewsTagScalarFieldEnum: {
    newsId: 'newsId',
    tagId: 'tagId'
  };

  export type NewsTagScalarFieldEnum = (typeof NewsTagScalarFieldEnum)[keyof typeof NewsTagScalarFieldEnum]


  export const ExpeditionResearcherScalarFieldEnum: {
    expeditionId: 'expeditionId',
    researcherId: 'researcherId'
  };

  export type ExpeditionResearcherScalarFieldEnum = (typeof ExpeditionResearcherScalarFieldEnum)[keyof typeof ExpeditionResearcherScalarFieldEnum]


  export const ExpeditionTagScalarFieldEnum: {
    expeditionId: 'expeditionId',
    tagId: 'tagId'
  };

  export type ExpeditionTagScalarFieldEnum = (typeof ExpeditionTagScalarFieldEnum)[keyof typeof ExpeditionTagScalarFieldEnum]


  export const ResearcherTagScalarFieldEnum: {
    researcherId: 'researcherId',
    tagId: 'tagId'
  };

  export type ResearcherTagScalarFieldEnum = (typeof ResearcherTagScalarFieldEnum)[keyof typeof ResearcherTagScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type NewsWhereInput = {
    AND?: NewsWhereInput | NewsWhereInput[]
    OR?: NewsWhereInput[]
    NOT?: NewsWhereInput | NewsWhereInput[]
    id?: StringFilter<"News"> | string
    title?: StringFilter<"News"> | string
    slug?: StringFilter<"News"> | string
    summaryShort?: StringNullableFilter<"News"> | string | null
    sourceDescription?: StringNullableFilter<"News"> | string | null
    contentFull?: StringNullableFilter<"News"> | string | null
    region?: StringFilter<"News"> | string
    theme?: StringFilter<"News"> | string
    year?: IntFilter<"News"> | number
    type?: StringNullableFilter<"News"> | string | null
    publishedDate?: DateTimeFilter<"News"> | Date | string
    sourceUrl?: StringFilter<"News"> | string
    sourceItemKey?: StringFilter<"News"> | string
    createdAt?: DateTimeFilter<"News"> | Date | string
    updatedAt?: DateTimeFilter<"News"> | Date | string
    publicSummary?: XOR<PublicSummaryNullableScalarRelationFilter, PublicSummaryWhereInput> | null
    photos?: PhotoListRelationFilter
    tags?: NewsTagListRelationFilter
  }

  export type NewsOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    summaryShort?: SortOrderInput | SortOrder
    sourceDescription?: SortOrderInput | SortOrder
    contentFull?: SortOrderInput | SortOrder
    region?: SortOrder
    theme?: SortOrder
    year?: SortOrder
    type?: SortOrderInput | SortOrder
    publishedDate?: SortOrder
    sourceUrl?: SortOrder
    sourceItemKey?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    publicSummary?: PublicSummaryOrderByWithRelationInput
    photos?: PhotoOrderByRelationAggregateInput
    tags?: NewsTagOrderByRelationAggregateInput
  }

  export type NewsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    slug?: string
    sourceItemKey?: string
    AND?: NewsWhereInput | NewsWhereInput[]
    OR?: NewsWhereInput[]
    NOT?: NewsWhereInput | NewsWhereInput[]
    title?: StringFilter<"News"> | string
    summaryShort?: StringNullableFilter<"News"> | string | null
    sourceDescription?: StringNullableFilter<"News"> | string | null
    contentFull?: StringNullableFilter<"News"> | string | null
    region?: StringFilter<"News"> | string
    theme?: StringFilter<"News"> | string
    year?: IntFilter<"News"> | number
    type?: StringNullableFilter<"News"> | string | null
    publishedDate?: DateTimeFilter<"News"> | Date | string
    sourceUrl?: StringFilter<"News"> | string
    createdAt?: DateTimeFilter<"News"> | Date | string
    updatedAt?: DateTimeFilter<"News"> | Date | string
    publicSummary?: XOR<PublicSummaryNullableScalarRelationFilter, PublicSummaryWhereInput> | null
    photos?: PhotoListRelationFilter
    tags?: NewsTagListRelationFilter
  }, "id" | "slug" | "sourceItemKey">

  export type NewsOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    summaryShort?: SortOrderInput | SortOrder
    sourceDescription?: SortOrderInput | SortOrder
    contentFull?: SortOrderInput | SortOrder
    region?: SortOrder
    theme?: SortOrder
    year?: SortOrder
    type?: SortOrderInput | SortOrder
    publishedDate?: SortOrder
    sourceUrl?: SortOrder
    sourceItemKey?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: NewsCountOrderByAggregateInput
    _avg?: NewsAvgOrderByAggregateInput
    _max?: NewsMaxOrderByAggregateInput
    _min?: NewsMinOrderByAggregateInput
    _sum?: NewsSumOrderByAggregateInput
  }

  export type NewsScalarWhereWithAggregatesInput = {
    AND?: NewsScalarWhereWithAggregatesInput | NewsScalarWhereWithAggregatesInput[]
    OR?: NewsScalarWhereWithAggregatesInput[]
    NOT?: NewsScalarWhereWithAggregatesInput | NewsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"News"> | string
    title?: StringWithAggregatesFilter<"News"> | string
    slug?: StringWithAggregatesFilter<"News"> | string
    summaryShort?: StringNullableWithAggregatesFilter<"News"> | string | null
    sourceDescription?: StringNullableWithAggregatesFilter<"News"> | string | null
    contentFull?: StringNullableWithAggregatesFilter<"News"> | string | null
    region?: StringWithAggregatesFilter<"News"> | string
    theme?: StringWithAggregatesFilter<"News"> | string
    year?: IntWithAggregatesFilter<"News"> | number
    type?: StringNullableWithAggregatesFilter<"News"> | string | null
    publishedDate?: DateTimeWithAggregatesFilter<"News"> | Date | string
    sourceUrl?: StringWithAggregatesFilter<"News"> | string
    sourceItemKey?: StringWithAggregatesFilter<"News"> | string
    createdAt?: DateTimeWithAggregatesFilter<"News"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"News"> | Date | string
  }

  export type ExpeditionWhereInput = {
    AND?: ExpeditionWhereInput | ExpeditionWhereInput[]
    OR?: ExpeditionWhereInput[]
    NOT?: ExpeditionWhereInput | ExpeditionWhereInput[]
    id?: StringFilter<"Expedition"> | string
    name?: StringFilter<"Expedition"> | string
    description?: StringNullableFilter<"Expedition"> | string | null
    region?: StringFilter<"Expedition"> | string
    startDate?: DateTimeNullableFilter<"Expedition"> | Date | string | null
    endDate?: DateTimeNullableFilter<"Expedition"> | Date | string | null
    sourceUrl?: StringNullableFilter<"Expedition"> | string | null
    createdAt?: DateTimeFilter<"Expedition"> | Date | string
    updatedAt?: DateTimeFilter<"Expedition"> | Date | string
    researchers?: ExpeditionResearcherListRelationFilter
    photos?: PhotoListRelationFilter
    tags?: ExpeditionTagListRelationFilter
  }

  export type ExpeditionOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    region?: SortOrder
    startDate?: SortOrderInput | SortOrder
    endDate?: SortOrderInput | SortOrder
    sourceUrl?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    researchers?: ExpeditionResearcherOrderByRelationAggregateInput
    photos?: PhotoOrderByRelationAggregateInput
    tags?: ExpeditionTagOrderByRelationAggregateInput
  }

  export type ExpeditionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ExpeditionWhereInput | ExpeditionWhereInput[]
    OR?: ExpeditionWhereInput[]
    NOT?: ExpeditionWhereInput | ExpeditionWhereInput[]
    name?: StringFilter<"Expedition"> | string
    description?: StringNullableFilter<"Expedition"> | string | null
    region?: StringFilter<"Expedition"> | string
    startDate?: DateTimeNullableFilter<"Expedition"> | Date | string | null
    endDate?: DateTimeNullableFilter<"Expedition"> | Date | string | null
    sourceUrl?: StringNullableFilter<"Expedition"> | string | null
    createdAt?: DateTimeFilter<"Expedition"> | Date | string
    updatedAt?: DateTimeFilter<"Expedition"> | Date | string
    researchers?: ExpeditionResearcherListRelationFilter
    photos?: PhotoListRelationFilter
    tags?: ExpeditionTagListRelationFilter
  }, "id">

  export type ExpeditionOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    region?: SortOrder
    startDate?: SortOrderInput | SortOrder
    endDate?: SortOrderInput | SortOrder
    sourceUrl?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ExpeditionCountOrderByAggregateInput
    _max?: ExpeditionMaxOrderByAggregateInput
    _min?: ExpeditionMinOrderByAggregateInput
  }

  export type ExpeditionScalarWhereWithAggregatesInput = {
    AND?: ExpeditionScalarWhereWithAggregatesInput | ExpeditionScalarWhereWithAggregatesInput[]
    OR?: ExpeditionScalarWhereWithAggregatesInput[]
    NOT?: ExpeditionScalarWhereWithAggregatesInput | ExpeditionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Expedition"> | string
    name?: StringWithAggregatesFilter<"Expedition"> | string
    description?: StringNullableWithAggregatesFilter<"Expedition"> | string | null
    region?: StringWithAggregatesFilter<"Expedition"> | string
    startDate?: DateTimeNullableWithAggregatesFilter<"Expedition"> | Date | string | null
    endDate?: DateTimeNullableWithAggregatesFilter<"Expedition"> | Date | string | null
    sourceUrl?: StringNullableWithAggregatesFilter<"Expedition"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Expedition"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Expedition"> | Date | string
  }

  export type ResearcherWhereInput = {
    AND?: ResearcherWhereInput | ResearcherWhereInput[]
    OR?: ResearcherWhereInput[]
    NOT?: ResearcherWhereInput | ResearcherWhereInput[]
    id?: StringFilter<"Researcher"> | string
    name?: StringFilter<"Researcher"> | string
    affiliation?: StringNullableFilter<"Researcher"> | string | null
    bio?: StringNullableFilter<"Researcher"> | string | null
    profileUrl?: StringNullableFilter<"Researcher"> | string | null
    createdAt?: DateTimeFilter<"Researcher"> | Date | string
    updatedAt?: DateTimeFilter<"Researcher"> | Date | string
    expeditions?: ExpeditionResearcherListRelationFilter
    tags?: ResearcherTagListRelationFilter
  }

  export type ResearcherOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    affiliation?: SortOrderInput | SortOrder
    bio?: SortOrderInput | SortOrder
    profileUrl?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    expeditions?: ExpeditionResearcherOrderByRelationAggregateInput
    tags?: ResearcherTagOrderByRelationAggregateInput
  }

  export type ResearcherWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ResearcherWhereInput | ResearcherWhereInput[]
    OR?: ResearcherWhereInput[]
    NOT?: ResearcherWhereInput | ResearcherWhereInput[]
    name?: StringFilter<"Researcher"> | string
    affiliation?: StringNullableFilter<"Researcher"> | string | null
    bio?: StringNullableFilter<"Researcher"> | string | null
    profileUrl?: StringNullableFilter<"Researcher"> | string | null
    createdAt?: DateTimeFilter<"Researcher"> | Date | string
    updatedAt?: DateTimeFilter<"Researcher"> | Date | string
    expeditions?: ExpeditionResearcherListRelationFilter
    tags?: ResearcherTagListRelationFilter
  }, "id">

  export type ResearcherOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    affiliation?: SortOrderInput | SortOrder
    bio?: SortOrderInput | SortOrder
    profileUrl?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ResearcherCountOrderByAggregateInput
    _max?: ResearcherMaxOrderByAggregateInput
    _min?: ResearcherMinOrderByAggregateInput
  }

  export type ResearcherScalarWhereWithAggregatesInput = {
    AND?: ResearcherScalarWhereWithAggregatesInput | ResearcherScalarWhereWithAggregatesInput[]
    OR?: ResearcherScalarWhereWithAggregatesInput[]
    NOT?: ResearcherScalarWhereWithAggregatesInput | ResearcherScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Researcher"> | string
    name?: StringWithAggregatesFilter<"Researcher"> | string
    affiliation?: StringNullableWithAggregatesFilter<"Researcher"> | string | null
    bio?: StringNullableWithAggregatesFilter<"Researcher"> | string | null
    profileUrl?: StringNullableWithAggregatesFilter<"Researcher"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Researcher"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Researcher"> | Date | string
  }

  export type PhotoWhereInput = {
    AND?: PhotoWhereInput | PhotoWhereInput[]
    OR?: PhotoWhereInput[]
    NOT?: PhotoWhereInput | PhotoWhereInput[]
    id?: StringFilter<"Photo"> | string
    url?: StringFilter<"Photo"> | string
    caption?: StringNullableFilter<"Photo"> | string | null
    altText?: StringNullableFilter<"Photo"> | string | null
    credit?: StringNullableFilter<"Photo"> | string | null
    sourceUrl?: StringNullableFilter<"Photo"> | string | null
    sourceType?: StringNullableFilter<"Photo"> | string | null
    newsId?: StringNullableFilter<"Photo"> | string | null
    expeditionId?: StringNullableFilter<"Photo"> | string | null
    createdAt?: DateTimeFilter<"Photo"> | Date | string
    news?: XOR<NewsNullableScalarRelationFilter, NewsWhereInput> | null
    expedition?: XOR<ExpeditionNullableScalarRelationFilter, ExpeditionWhereInput> | null
  }

  export type PhotoOrderByWithRelationInput = {
    id?: SortOrder
    url?: SortOrder
    caption?: SortOrderInput | SortOrder
    altText?: SortOrderInput | SortOrder
    credit?: SortOrderInput | SortOrder
    sourceUrl?: SortOrderInput | SortOrder
    sourceType?: SortOrderInput | SortOrder
    newsId?: SortOrderInput | SortOrder
    expeditionId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    news?: NewsOrderByWithRelationInput
    expedition?: ExpeditionOrderByWithRelationInput
  }

  export type PhotoWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PhotoWhereInput | PhotoWhereInput[]
    OR?: PhotoWhereInput[]
    NOT?: PhotoWhereInput | PhotoWhereInput[]
    url?: StringFilter<"Photo"> | string
    caption?: StringNullableFilter<"Photo"> | string | null
    altText?: StringNullableFilter<"Photo"> | string | null
    credit?: StringNullableFilter<"Photo"> | string | null
    sourceUrl?: StringNullableFilter<"Photo"> | string | null
    sourceType?: StringNullableFilter<"Photo"> | string | null
    newsId?: StringNullableFilter<"Photo"> | string | null
    expeditionId?: StringNullableFilter<"Photo"> | string | null
    createdAt?: DateTimeFilter<"Photo"> | Date | string
    news?: XOR<NewsNullableScalarRelationFilter, NewsWhereInput> | null
    expedition?: XOR<ExpeditionNullableScalarRelationFilter, ExpeditionWhereInput> | null
  }, "id">

  export type PhotoOrderByWithAggregationInput = {
    id?: SortOrder
    url?: SortOrder
    caption?: SortOrderInput | SortOrder
    altText?: SortOrderInput | SortOrder
    credit?: SortOrderInput | SortOrder
    sourceUrl?: SortOrderInput | SortOrder
    sourceType?: SortOrderInput | SortOrder
    newsId?: SortOrderInput | SortOrder
    expeditionId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: PhotoCountOrderByAggregateInput
    _max?: PhotoMaxOrderByAggregateInput
    _min?: PhotoMinOrderByAggregateInput
  }

  export type PhotoScalarWhereWithAggregatesInput = {
    AND?: PhotoScalarWhereWithAggregatesInput | PhotoScalarWhereWithAggregatesInput[]
    OR?: PhotoScalarWhereWithAggregatesInput[]
    NOT?: PhotoScalarWhereWithAggregatesInput | PhotoScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Photo"> | string
    url?: StringWithAggregatesFilter<"Photo"> | string
    caption?: StringNullableWithAggregatesFilter<"Photo"> | string | null
    altText?: StringNullableWithAggregatesFilter<"Photo"> | string | null
    credit?: StringNullableWithAggregatesFilter<"Photo"> | string | null
    sourceUrl?: StringNullableWithAggregatesFilter<"Photo"> | string | null
    sourceType?: StringNullableWithAggregatesFilter<"Photo"> | string | null
    newsId?: StringNullableWithAggregatesFilter<"Photo"> | string | null
    expeditionId?: StringNullableWithAggregatesFilter<"Photo"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Photo"> | Date | string
  }

  export type PublicSummaryWhereInput = {
    AND?: PublicSummaryWhereInput | PublicSummaryWhereInput[]
    OR?: PublicSummaryWhereInput[]
    NOT?: PublicSummaryWhereInput | PublicSummaryWhereInput[]
    id?: StringFilter<"PublicSummary"> | string
    summary?: StringFilter<"PublicSummary"> | string
    language?: StringFilter<"PublicSummary"> | string
    model?: StringNullableFilter<"PublicSummary"> | string | null
    generatedAt?: DateTimeFilter<"PublicSummary"> | Date | string
    newsId?: StringFilter<"PublicSummary"> | string
    createdAt?: DateTimeFilter<"PublicSummary"> | Date | string
    updatedAt?: DateTimeFilter<"PublicSummary"> | Date | string
    news?: XOR<NewsScalarRelationFilter, NewsWhereInput>
  }

  export type PublicSummaryOrderByWithRelationInput = {
    id?: SortOrder
    summary?: SortOrder
    language?: SortOrder
    model?: SortOrderInput | SortOrder
    generatedAt?: SortOrder
    newsId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    news?: NewsOrderByWithRelationInput
  }

  export type PublicSummaryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    newsId?: string
    AND?: PublicSummaryWhereInput | PublicSummaryWhereInput[]
    OR?: PublicSummaryWhereInput[]
    NOT?: PublicSummaryWhereInput | PublicSummaryWhereInput[]
    summary?: StringFilter<"PublicSummary"> | string
    language?: StringFilter<"PublicSummary"> | string
    model?: StringNullableFilter<"PublicSummary"> | string | null
    generatedAt?: DateTimeFilter<"PublicSummary"> | Date | string
    createdAt?: DateTimeFilter<"PublicSummary"> | Date | string
    updatedAt?: DateTimeFilter<"PublicSummary"> | Date | string
    news?: XOR<NewsScalarRelationFilter, NewsWhereInput>
  }, "id" | "newsId">

  export type PublicSummaryOrderByWithAggregationInput = {
    id?: SortOrder
    summary?: SortOrder
    language?: SortOrder
    model?: SortOrderInput | SortOrder
    generatedAt?: SortOrder
    newsId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PublicSummaryCountOrderByAggregateInput
    _max?: PublicSummaryMaxOrderByAggregateInput
    _min?: PublicSummaryMinOrderByAggregateInput
  }

  export type PublicSummaryScalarWhereWithAggregatesInput = {
    AND?: PublicSummaryScalarWhereWithAggregatesInput | PublicSummaryScalarWhereWithAggregatesInput[]
    OR?: PublicSummaryScalarWhereWithAggregatesInput[]
    NOT?: PublicSummaryScalarWhereWithAggregatesInput | PublicSummaryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PublicSummary"> | string
    summary?: StringWithAggregatesFilter<"PublicSummary"> | string
    language?: StringWithAggregatesFilter<"PublicSummary"> | string
    model?: StringNullableWithAggregatesFilter<"PublicSummary"> | string | null
    generatedAt?: DateTimeWithAggregatesFilter<"PublicSummary"> | Date | string
    newsId?: StringWithAggregatesFilter<"PublicSummary"> | string
    createdAt?: DateTimeWithAggregatesFilter<"PublicSummary"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"PublicSummary"> | Date | string
  }

  export type TagWhereInput = {
    AND?: TagWhereInput | TagWhereInput[]
    OR?: TagWhereInput[]
    NOT?: TagWhereInput | TagWhereInput[]
    id?: StringFilter<"Tag"> | string
    name?: StringFilter<"Tag"> | string
    slug?: StringFilter<"Tag"> | string
    createdAt?: DateTimeFilter<"Tag"> | Date | string
    news?: NewsTagListRelationFilter
    expeditions?: ExpeditionTagListRelationFilter
    researchers?: ResearcherTagListRelationFilter
  }

  export type TagOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    createdAt?: SortOrder
    news?: NewsTagOrderByRelationAggregateInput
    expeditions?: ExpeditionTagOrderByRelationAggregateInput
    researchers?: ResearcherTagOrderByRelationAggregateInput
  }

  export type TagWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    slug?: string
    AND?: TagWhereInput | TagWhereInput[]
    OR?: TagWhereInput[]
    NOT?: TagWhereInput | TagWhereInput[]
    createdAt?: DateTimeFilter<"Tag"> | Date | string
    news?: NewsTagListRelationFilter
    expeditions?: ExpeditionTagListRelationFilter
    researchers?: ResearcherTagListRelationFilter
  }, "id" | "name" | "slug">

  export type TagOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    createdAt?: SortOrder
    _count?: TagCountOrderByAggregateInput
    _max?: TagMaxOrderByAggregateInput
    _min?: TagMinOrderByAggregateInput
  }

  export type TagScalarWhereWithAggregatesInput = {
    AND?: TagScalarWhereWithAggregatesInput | TagScalarWhereWithAggregatesInput[]
    OR?: TagScalarWhereWithAggregatesInput[]
    NOT?: TagScalarWhereWithAggregatesInput | TagScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Tag"> | string
    name?: StringWithAggregatesFilter<"Tag"> | string
    slug?: StringWithAggregatesFilter<"Tag"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Tag"> | Date | string
  }

  export type NewsTagWhereInput = {
    AND?: NewsTagWhereInput | NewsTagWhereInput[]
    OR?: NewsTagWhereInput[]
    NOT?: NewsTagWhereInput | NewsTagWhereInput[]
    newsId?: StringFilter<"NewsTag"> | string
    tagId?: StringFilter<"NewsTag"> | string
    news?: XOR<NewsScalarRelationFilter, NewsWhereInput>
    tag?: XOR<TagScalarRelationFilter, TagWhereInput>
  }

  export type NewsTagOrderByWithRelationInput = {
    newsId?: SortOrder
    tagId?: SortOrder
    news?: NewsOrderByWithRelationInput
    tag?: TagOrderByWithRelationInput
  }

  export type NewsTagWhereUniqueInput = Prisma.AtLeast<{
    newsId_tagId?: NewsTagNewsIdTagIdCompoundUniqueInput
    AND?: NewsTagWhereInput | NewsTagWhereInput[]
    OR?: NewsTagWhereInput[]
    NOT?: NewsTagWhereInput | NewsTagWhereInput[]
    newsId?: StringFilter<"NewsTag"> | string
    tagId?: StringFilter<"NewsTag"> | string
    news?: XOR<NewsScalarRelationFilter, NewsWhereInput>
    tag?: XOR<TagScalarRelationFilter, TagWhereInput>
  }, "newsId_tagId">

  export type NewsTagOrderByWithAggregationInput = {
    newsId?: SortOrder
    tagId?: SortOrder
    _count?: NewsTagCountOrderByAggregateInput
    _max?: NewsTagMaxOrderByAggregateInput
    _min?: NewsTagMinOrderByAggregateInput
  }

  export type NewsTagScalarWhereWithAggregatesInput = {
    AND?: NewsTagScalarWhereWithAggregatesInput | NewsTagScalarWhereWithAggregatesInput[]
    OR?: NewsTagScalarWhereWithAggregatesInput[]
    NOT?: NewsTagScalarWhereWithAggregatesInput | NewsTagScalarWhereWithAggregatesInput[]
    newsId?: StringWithAggregatesFilter<"NewsTag"> | string
    tagId?: StringWithAggregatesFilter<"NewsTag"> | string
  }

  export type ExpeditionResearcherWhereInput = {
    AND?: ExpeditionResearcherWhereInput | ExpeditionResearcherWhereInput[]
    OR?: ExpeditionResearcherWhereInput[]
    NOT?: ExpeditionResearcherWhereInput | ExpeditionResearcherWhereInput[]
    expeditionId?: StringFilter<"ExpeditionResearcher"> | string
    researcherId?: StringFilter<"ExpeditionResearcher"> | string
    expedition?: XOR<ExpeditionScalarRelationFilter, ExpeditionWhereInput>
    researcher?: XOR<ResearcherScalarRelationFilter, ResearcherWhereInput>
  }

  export type ExpeditionResearcherOrderByWithRelationInput = {
    expeditionId?: SortOrder
    researcherId?: SortOrder
    expedition?: ExpeditionOrderByWithRelationInput
    researcher?: ResearcherOrderByWithRelationInput
  }

  export type ExpeditionResearcherWhereUniqueInput = Prisma.AtLeast<{
    expeditionId_researcherId?: ExpeditionResearcherExpeditionIdResearcherIdCompoundUniqueInput
    AND?: ExpeditionResearcherWhereInput | ExpeditionResearcherWhereInput[]
    OR?: ExpeditionResearcherWhereInput[]
    NOT?: ExpeditionResearcherWhereInput | ExpeditionResearcherWhereInput[]
    expeditionId?: StringFilter<"ExpeditionResearcher"> | string
    researcherId?: StringFilter<"ExpeditionResearcher"> | string
    expedition?: XOR<ExpeditionScalarRelationFilter, ExpeditionWhereInput>
    researcher?: XOR<ResearcherScalarRelationFilter, ResearcherWhereInput>
  }, "expeditionId_researcherId">

  export type ExpeditionResearcherOrderByWithAggregationInput = {
    expeditionId?: SortOrder
    researcherId?: SortOrder
    _count?: ExpeditionResearcherCountOrderByAggregateInput
    _max?: ExpeditionResearcherMaxOrderByAggregateInput
    _min?: ExpeditionResearcherMinOrderByAggregateInput
  }

  export type ExpeditionResearcherScalarWhereWithAggregatesInput = {
    AND?: ExpeditionResearcherScalarWhereWithAggregatesInput | ExpeditionResearcherScalarWhereWithAggregatesInput[]
    OR?: ExpeditionResearcherScalarWhereWithAggregatesInput[]
    NOT?: ExpeditionResearcherScalarWhereWithAggregatesInput | ExpeditionResearcherScalarWhereWithAggregatesInput[]
    expeditionId?: StringWithAggregatesFilter<"ExpeditionResearcher"> | string
    researcherId?: StringWithAggregatesFilter<"ExpeditionResearcher"> | string
  }

  export type ExpeditionTagWhereInput = {
    AND?: ExpeditionTagWhereInput | ExpeditionTagWhereInput[]
    OR?: ExpeditionTagWhereInput[]
    NOT?: ExpeditionTagWhereInput | ExpeditionTagWhereInput[]
    expeditionId?: StringFilter<"ExpeditionTag"> | string
    tagId?: StringFilter<"ExpeditionTag"> | string
    expedition?: XOR<ExpeditionScalarRelationFilter, ExpeditionWhereInput>
    tag?: XOR<TagScalarRelationFilter, TagWhereInput>
  }

  export type ExpeditionTagOrderByWithRelationInput = {
    expeditionId?: SortOrder
    tagId?: SortOrder
    expedition?: ExpeditionOrderByWithRelationInput
    tag?: TagOrderByWithRelationInput
  }

  export type ExpeditionTagWhereUniqueInput = Prisma.AtLeast<{
    expeditionId_tagId?: ExpeditionTagExpeditionIdTagIdCompoundUniqueInput
    AND?: ExpeditionTagWhereInput | ExpeditionTagWhereInput[]
    OR?: ExpeditionTagWhereInput[]
    NOT?: ExpeditionTagWhereInput | ExpeditionTagWhereInput[]
    expeditionId?: StringFilter<"ExpeditionTag"> | string
    tagId?: StringFilter<"ExpeditionTag"> | string
    expedition?: XOR<ExpeditionScalarRelationFilter, ExpeditionWhereInput>
    tag?: XOR<TagScalarRelationFilter, TagWhereInput>
  }, "expeditionId_tagId">

  export type ExpeditionTagOrderByWithAggregationInput = {
    expeditionId?: SortOrder
    tagId?: SortOrder
    _count?: ExpeditionTagCountOrderByAggregateInput
    _max?: ExpeditionTagMaxOrderByAggregateInput
    _min?: ExpeditionTagMinOrderByAggregateInput
  }

  export type ExpeditionTagScalarWhereWithAggregatesInput = {
    AND?: ExpeditionTagScalarWhereWithAggregatesInput | ExpeditionTagScalarWhereWithAggregatesInput[]
    OR?: ExpeditionTagScalarWhereWithAggregatesInput[]
    NOT?: ExpeditionTagScalarWhereWithAggregatesInput | ExpeditionTagScalarWhereWithAggregatesInput[]
    expeditionId?: StringWithAggregatesFilter<"ExpeditionTag"> | string
    tagId?: StringWithAggregatesFilter<"ExpeditionTag"> | string
  }

  export type ResearcherTagWhereInput = {
    AND?: ResearcherTagWhereInput | ResearcherTagWhereInput[]
    OR?: ResearcherTagWhereInput[]
    NOT?: ResearcherTagWhereInput | ResearcherTagWhereInput[]
    researcherId?: StringFilter<"ResearcherTag"> | string
    tagId?: StringFilter<"ResearcherTag"> | string
    researcher?: XOR<ResearcherScalarRelationFilter, ResearcherWhereInput>
    tag?: XOR<TagScalarRelationFilter, TagWhereInput>
  }

  export type ResearcherTagOrderByWithRelationInput = {
    researcherId?: SortOrder
    tagId?: SortOrder
    researcher?: ResearcherOrderByWithRelationInput
    tag?: TagOrderByWithRelationInput
  }

  export type ResearcherTagWhereUniqueInput = Prisma.AtLeast<{
    researcherId_tagId?: ResearcherTagResearcherIdTagIdCompoundUniqueInput
    AND?: ResearcherTagWhereInput | ResearcherTagWhereInput[]
    OR?: ResearcherTagWhereInput[]
    NOT?: ResearcherTagWhereInput | ResearcherTagWhereInput[]
    researcherId?: StringFilter<"ResearcherTag"> | string
    tagId?: StringFilter<"ResearcherTag"> | string
    researcher?: XOR<ResearcherScalarRelationFilter, ResearcherWhereInput>
    tag?: XOR<TagScalarRelationFilter, TagWhereInput>
  }, "researcherId_tagId">

  export type ResearcherTagOrderByWithAggregationInput = {
    researcherId?: SortOrder
    tagId?: SortOrder
    _count?: ResearcherTagCountOrderByAggregateInput
    _max?: ResearcherTagMaxOrderByAggregateInput
    _min?: ResearcherTagMinOrderByAggregateInput
  }

  export type ResearcherTagScalarWhereWithAggregatesInput = {
    AND?: ResearcherTagScalarWhereWithAggregatesInput | ResearcherTagScalarWhereWithAggregatesInput[]
    OR?: ResearcherTagScalarWhereWithAggregatesInput[]
    NOT?: ResearcherTagScalarWhereWithAggregatesInput | ResearcherTagScalarWhereWithAggregatesInput[]
    researcherId?: StringWithAggregatesFilter<"ResearcherTag"> | string
    tagId?: StringWithAggregatesFilter<"ResearcherTag"> | string
  }

  export type NewsCreateInput = {
    id?: string
    title: string
    slug: string
    summaryShort?: string | null
    sourceDescription?: string | null
    contentFull?: string | null
    region: string
    theme: string
    year: number
    type?: string | null
    publishedDate: Date | string
    sourceUrl: string
    sourceItemKey: string
    createdAt?: Date | string
    updatedAt?: Date | string
    publicSummary?: PublicSummaryCreateNestedOneWithoutNewsInput
    photos?: PhotoCreateNestedManyWithoutNewsInput
    tags?: NewsTagCreateNestedManyWithoutNewsInput
  }

  export type NewsUncheckedCreateInput = {
    id?: string
    title: string
    slug: string
    summaryShort?: string | null
    sourceDescription?: string | null
    contentFull?: string | null
    region: string
    theme: string
    year: number
    type?: string | null
    publishedDate: Date | string
    sourceUrl: string
    sourceItemKey: string
    createdAt?: Date | string
    updatedAt?: Date | string
    publicSummary?: PublicSummaryUncheckedCreateNestedOneWithoutNewsInput
    photos?: PhotoUncheckedCreateNestedManyWithoutNewsInput
    tags?: NewsTagUncheckedCreateNestedManyWithoutNewsInput
  }

  export type NewsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    summaryShort?: NullableStringFieldUpdateOperationsInput | string | null
    sourceDescription?: NullableStringFieldUpdateOperationsInput | string | null
    contentFull?: NullableStringFieldUpdateOperationsInput | string | null
    region?: StringFieldUpdateOperationsInput | string
    theme?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    type?: NullableStringFieldUpdateOperationsInput | string | null
    publishedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    sourceUrl?: StringFieldUpdateOperationsInput | string
    sourceItemKey?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    publicSummary?: PublicSummaryUpdateOneWithoutNewsNestedInput
    photos?: PhotoUpdateManyWithoutNewsNestedInput
    tags?: NewsTagUpdateManyWithoutNewsNestedInput
  }

  export type NewsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    summaryShort?: NullableStringFieldUpdateOperationsInput | string | null
    sourceDescription?: NullableStringFieldUpdateOperationsInput | string | null
    contentFull?: NullableStringFieldUpdateOperationsInput | string | null
    region?: StringFieldUpdateOperationsInput | string
    theme?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    type?: NullableStringFieldUpdateOperationsInput | string | null
    publishedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    sourceUrl?: StringFieldUpdateOperationsInput | string
    sourceItemKey?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    publicSummary?: PublicSummaryUncheckedUpdateOneWithoutNewsNestedInput
    photos?: PhotoUncheckedUpdateManyWithoutNewsNestedInput
    tags?: NewsTagUncheckedUpdateManyWithoutNewsNestedInput
  }

  export type NewsCreateManyInput = {
    id?: string
    title: string
    slug: string
    summaryShort?: string | null
    sourceDescription?: string | null
    contentFull?: string | null
    region: string
    theme: string
    year: number
    type?: string | null
    publishedDate: Date | string
    sourceUrl: string
    sourceItemKey: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NewsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    summaryShort?: NullableStringFieldUpdateOperationsInput | string | null
    sourceDescription?: NullableStringFieldUpdateOperationsInput | string | null
    contentFull?: NullableStringFieldUpdateOperationsInput | string | null
    region?: StringFieldUpdateOperationsInput | string
    theme?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    type?: NullableStringFieldUpdateOperationsInput | string | null
    publishedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    sourceUrl?: StringFieldUpdateOperationsInput | string
    sourceItemKey?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NewsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    summaryShort?: NullableStringFieldUpdateOperationsInput | string | null
    sourceDescription?: NullableStringFieldUpdateOperationsInput | string | null
    contentFull?: NullableStringFieldUpdateOperationsInput | string | null
    region?: StringFieldUpdateOperationsInput | string
    theme?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    type?: NullableStringFieldUpdateOperationsInput | string | null
    publishedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    sourceUrl?: StringFieldUpdateOperationsInput | string
    sourceItemKey?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExpeditionCreateInput = {
    id?: string
    name: string
    description?: string | null
    region: string
    startDate?: Date | string | null
    endDate?: Date | string | null
    sourceUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    researchers?: ExpeditionResearcherCreateNestedManyWithoutExpeditionInput
    photos?: PhotoCreateNestedManyWithoutExpeditionInput
    tags?: ExpeditionTagCreateNestedManyWithoutExpeditionInput
  }

  export type ExpeditionUncheckedCreateInput = {
    id?: string
    name: string
    description?: string | null
    region: string
    startDate?: Date | string | null
    endDate?: Date | string | null
    sourceUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    researchers?: ExpeditionResearcherUncheckedCreateNestedManyWithoutExpeditionInput
    photos?: PhotoUncheckedCreateNestedManyWithoutExpeditionInput
    tags?: ExpeditionTagUncheckedCreateNestedManyWithoutExpeditionInput
  }

  export type ExpeditionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    region?: StringFieldUpdateOperationsInput | string
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sourceUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    researchers?: ExpeditionResearcherUpdateManyWithoutExpeditionNestedInput
    photos?: PhotoUpdateManyWithoutExpeditionNestedInput
    tags?: ExpeditionTagUpdateManyWithoutExpeditionNestedInput
  }

  export type ExpeditionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    region?: StringFieldUpdateOperationsInput | string
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sourceUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    researchers?: ExpeditionResearcherUncheckedUpdateManyWithoutExpeditionNestedInput
    photos?: PhotoUncheckedUpdateManyWithoutExpeditionNestedInput
    tags?: ExpeditionTagUncheckedUpdateManyWithoutExpeditionNestedInput
  }

  export type ExpeditionCreateManyInput = {
    id?: string
    name: string
    description?: string | null
    region: string
    startDate?: Date | string | null
    endDate?: Date | string | null
    sourceUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ExpeditionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    region?: StringFieldUpdateOperationsInput | string
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sourceUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExpeditionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    region?: StringFieldUpdateOperationsInput | string
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sourceUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ResearcherCreateInput = {
    id?: string
    name: string
    affiliation?: string | null
    bio?: string | null
    profileUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    expeditions?: ExpeditionResearcherCreateNestedManyWithoutResearcherInput
    tags?: ResearcherTagCreateNestedManyWithoutResearcherInput
  }

  export type ResearcherUncheckedCreateInput = {
    id?: string
    name: string
    affiliation?: string | null
    bio?: string | null
    profileUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    expeditions?: ExpeditionResearcherUncheckedCreateNestedManyWithoutResearcherInput
    tags?: ResearcherTagUncheckedCreateNestedManyWithoutResearcherInput
  }

  export type ResearcherUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    affiliation?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    profileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expeditions?: ExpeditionResearcherUpdateManyWithoutResearcherNestedInput
    tags?: ResearcherTagUpdateManyWithoutResearcherNestedInput
  }

  export type ResearcherUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    affiliation?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    profileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expeditions?: ExpeditionResearcherUncheckedUpdateManyWithoutResearcherNestedInput
    tags?: ResearcherTagUncheckedUpdateManyWithoutResearcherNestedInput
  }

  export type ResearcherCreateManyInput = {
    id?: string
    name: string
    affiliation?: string | null
    bio?: string | null
    profileUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ResearcherUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    affiliation?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    profileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ResearcherUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    affiliation?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    profileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PhotoCreateInput = {
    id?: string
    url: string
    caption?: string | null
    altText?: string | null
    credit?: string | null
    sourceUrl?: string | null
    sourceType?: string | null
    createdAt?: Date | string
    news?: NewsCreateNestedOneWithoutPhotosInput
    expedition?: ExpeditionCreateNestedOneWithoutPhotosInput
  }

  export type PhotoUncheckedCreateInput = {
    id?: string
    url: string
    caption?: string | null
    altText?: string | null
    credit?: string | null
    sourceUrl?: string | null
    sourceType?: string | null
    newsId?: string | null
    expeditionId?: string | null
    createdAt?: Date | string
  }

  export type PhotoUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    altText?: NullableStringFieldUpdateOperationsInput | string | null
    credit?: NullableStringFieldUpdateOperationsInput | string | null
    sourceUrl?: NullableStringFieldUpdateOperationsInput | string | null
    sourceType?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    news?: NewsUpdateOneWithoutPhotosNestedInput
    expedition?: ExpeditionUpdateOneWithoutPhotosNestedInput
  }

  export type PhotoUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    altText?: NullableStringFieldUpdateOperationsInput | string | null
    credit?: NullableStringFieldUpdateOperationsInput | string | null
    sourceUrl?: NullableStringFieldUpdateOperationsInput | string | null
    sourceType?: NullableStringFieldUpdateOperationsInput | string | null
    newsId?: NullableStringFieldUpdateOperationsInput | string | null
    expeditionId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PhotoCreateManyInput = {
    id?: string
    url: string
    caption?: string | null
    altText?: string | null
    credit?: string | null
    sourceUrl?: string | null
    sourceType?: string | null
    newsId?: string | null
    expeditionId?: string | null
    createdAt?: Date | string
  }

  export type PhotoUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    altText?: NullableStringFieldUpdateOperationsInput | string | null
    credit?: NullableStringFieldUpdateOperationsInput | string | null
    sourceUrl?: NullableStringFieldUpdateOperationsInput | string | null
    sourceType?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PhotoUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    altText?: NullableStringFieldUpdateOperationsInput | string | null
    credit?: NullableStringFieldUpdateOperationsInput | string | null
    sourceUrl?: NullableStringFieldUpdateOperationsInput | string | null
    sourceType?: NullableStringFieldUpdateOperationsInput | string | null
    newsId?: NullableStringFieldUpdateOperationsInput | string | null
    expeditionId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PublicSummaryCreateInput = {
    id?: string
    summary: string
    language?: string
    model?: string | null
    generatedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    news: NewsCreateNestedOneWithoutPublicSummaryInput
  }

  export type PublicSummaryUncheckedCreateInput = {
    id?: string
    summary: string
    language?: string
    model?: string | null
    generatedAt?: Date | string
    newsId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PublicSummaryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    summary?: StringFieldUpdateOperationsInput | string
    language?: StringFieldUpdateOperationsInput | string
    model?: NullableStringFieldUpdateOperationsInput | string | null
    generatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    news?: NewsUpdateOneRequiredWithoutPublicSummaryNestedInput
  }

  export type PublicSummaryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    summary?: StringFieldUpdateOperationsInput | string
    language?: StringFieldUpdateOperationsInput | string
    model?: NullableStringFieldUpdateOperationsInput | string | null
    generatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    newsId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PublicSummaryCreateManyInput = {
    id?: string
    summary: string
    language?: string
    model?: string | null
    generatedAt?: Date | string
    newsId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PublicSummaryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    summary?: StringFieldUpdateOperationsInput | string
    language?: StringFieldUpdateOperationsInput | string
    model?: NullableStringFieldUpdateOperationsInput | string | null
    generatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PublicSummaryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    summary?: StringFieldUpdateOperationsInput | string
    language?: StringFieldUpdateOperationsInput | string
    model?: NullableStringFieldUpdateOperationsInput | string | null
    generatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    newsId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TagCreateInput = {
    id?: string
    name: string
    slug: string
    createdAt?: Date | string
    news?: NewsTagCreateNestedManyWithoutTagInput
    expeditions?: ExpeditionTagCreateNestedManyWithoutTagInput
    researchers?: ResearcherTagCreateNestedManyWithoutTagInput
  }

  export type TagUncheckedCreateInput = {
    id?: string
    name: string
    slug: string
    createdAt?: Date | string
    news?: NewsTagUncheckedCreateNestedManyWithoutTagInput
    expeditions?: ExpeditionTagUncheckedCreateNestedManyWithoutTagInput
    researchers?: ResearcherTagUncheckedCreateNestedManyWithoutTagInput
  }

  export type TagUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    news?: NewsTagUpdateManyWithoutTagNestedInput
    expeditions?: ExpeditionTagUpdateManyWithoutTagNestedInput
    researchers?: ResearcherTagUpdateManyWithoutTagNestedInput
  }

  export type TagUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    news?: NewsTagUncheckedUpdateManyWithoutTagNestedInput
    expeditions?: ExpeditionTagUncheckedUpdateManyWithoutTagNestedInput
    researchers?: ResearcherTagUncheckedUpdateManyWithoutTagNestedInput
  }

  export type TagCreateManyInput = {
    id?: string
    name: string
    slug: string
    createdAt?: Date | string
  }

  export type TagUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TagUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NewsTagCreateInput = {
    news: NewsCreateNestedOneWithoutTagsInput
    tag: TagCreateNestedOneWithoutNewsInput
  }

  export type NewsTagUncheckedCreateInput = {
    newsId: string
    tagId: string
  }

  export type NewsTagUpdateInput = {
    news?: NewsUpdateOneRequiredWithoutTagsNestedInput
    tag?: TagUpdateOneRequiredWithoutNewsNestedInput
  }

  export type NewsTagUncheckedUpdateInput = {
    newsId?: StringFieldUpdateOperationsInput | string
    tagId?: StringFieldUpdateOperationsInput | string
  }

  export type NewsTagCreateManyInput = {
    newsId: string
    tagId: string
  }

  export type NewsTagUpdateManyMutationInput = {

  }

  export type NewsTagUncheckedUpdateManyInput = {
    newsId?: StringFieldUpdateOperationsInput | string
    tagId?: StringFieldUpdateOperationsInput | string
  }

  export type ExpeditionResearcherCreateInput = {
    expedition: ExpeditionCreateNestedOneWithoutResearchersInput
    researcher: ResearcherCreateNestedOneWithoutExpeditionsInput
  }

  export type ExpeditionResearcherUncheckedCreateInput = {
    expeditionId: string
    researcherId: string
  }

  export type ExpeditionResearcherUpdateInput = {
    expedition?: ExpeditionUpdateOneRequiredWithoutResearchersNestedInput
    researcher?: ResearcherUpdateOneRequiredWithoutExpeditionsNestedInput
  }

  export type ExpeditionResearcherUncheckedUpdateInput = {
    expeditionId?: StringFieldUpdateOperationsInput | string
    researcherId?: StringFieldUpdateOperationsInput | string
  }

  export type ExpeditionResearcherCreateManyInput = {
    expeditionId: string
    researcherId: string
  }

  export type ExpeditionResearcherUpdateManyMutationInput = {

  }

  export type ExpeditionResearcherUncheckedUpdateManyInput = {
    expeditionId?: StringFieldUpdateOperationsInput | string
    researcherId?: StringFieldUpdateOperationsInput | string
  }

  export type ExpeditionTagCreateInput = {
    expedition: ExpeditionCreateNestedOneWithoutTagsInput
    tag: TagCreateNestedOneWithoutExpeditionsInput
  }

  export type ExpeditionTagUncheckedCreateInput = {
    expeditionId: string
    tagId: string
  }

  export type ExpeditionTagUpdateInput = {
    expedition?: ExpeditionUpdateOneRequiredWithoutTagsNestedInput
    tag?: TagUpdateOneRequiredWithoutExpeditionsNestedInput
  }

  export type ExpeditionTagUncheckedUpdateInput = {
    expeditionId?: StringFieldUpdateOperationsInput | string
    tagId?: StringFieldUpdateOperationsInput | string
  }

  export type ExpeditionTagCreateManyInput = {
    expeditionId: string
    tagId: string
  }

  export type ExpeditionTagUpdateManyMutationInput = {

  }

  export type ExpeditionTagUncheckedUpdateManyInput = {
    expeditionId?: StringFieldUpdateOperationsInput | string
    tagId?: StringFieldUpdateOperationsInput | string
  }

  export type ResearcherTagCreateInput = {
    researcher: ResearcherCreateNestedOneWithoutTagsInput
    tag: TagCreateNestedOneWithoutResearchersInput
  }

  export type ResearcherTagUncheckedCreateInput = {
    researcherId: string
    tagId: string
  }

  export type ResearcherTagUpdateInput = {
    researcher?: ResearcherUpdateOneRequiredWithoutTagsNestedInput
    tag?: TagUpdateOneRequiredWithoutResearchersNestedInput
  }

  export type ResearcherTagUncheckedUpdateInput = {
    researcherId?: StringFieldUpdateOperationsInput | string
    tagId?: StringFieldUpdateOperationsInput | string
  }

  export type ResearcherTagCreateManyInput = {
    researcherId: string
    tagId: string
  }

  export type ResearcherTagUpdateManyMutationInput = {

  }

  export type ResearcherTagUncheckedUpdateManyInput = {
    researcherId?: StringFieldUpdateOperationsInput | string
    tagId?: StringFieldUpdateOperationsInput | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type PublicSummaryNullableScalarRelationFilter = {
    is?: PublicSummaryWhereInput | null
    isNot?: PublicSummaryWhereInput | null
  }

  export type PhotoListRelationFilter = {
    every?: PhotoWhereInput
    some?: PhotoWhereInput
    none?: PhotoWhereInput
  }

  export type NewsTagListRelationFilter = {
    every?: NewsTagWhereInput
    some?: NewsTagWhereInput
    none?: NewsTagWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type PhotoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type NewsTagOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type NewsCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    summaryShort?: SortOrder
    sourceDescription?: SortOrder
    contentFull?: SortOrder
    region?: SortOrder
    theme?: SortOrder
    year?: SortOrder
    type?: SortOrder
    publishedDate?: SortOrder
    sourceUrl?: SortOrder
    sourceItemKey?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type NewsAvgOrderByAggregateInput = {
    year?: SortOrder
  }

  export type NewsMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    summaryShort?: SortOrder
    sourceDescription?: SortOrder
    contentFull?: SortOrder
    region?: SortOrder
    theme?: SortOrder
    year?: SortOrder
    type?: SortOrder
    publishedDate?: SortOrder
    sourceUrl?: SortOrder
    sourceItemKey?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type NewsMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    summaryShort?: SortOrder
    sourceDescription?: SortOrder
    contentFull?: SortOrder
    region?: SortOrder
    theme?: SortOrder
    year?: SortOrder
    type?: SortOrder
    publishedDate?: SortOrder
    sourceUrl?: SortOrder
    sourceItemKey?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type NewsSumOrderByAggregateInput = {
    year?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type ExpeditionResearcherListRelationFilter = {
    every?: ExpeditionResearcherWhereInput
    some?: ExpeditionResearcherWhereInput
    none?: ExpeditionResearcherWhereInput
  }

  export type ExpeditionTagListRelationFilter = {
    every?: ExpeditionTagWhereInput
    some?: ExpeditionTagWhereInput
    none?: ExpeditionTagWhereInput
  }

  export type ExpeditionResearcherOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ExpeditionTagOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ExpeditionCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    region?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    sourceUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ExpeditionMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    region?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    sourceUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ExpeditionMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    region?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    sourceUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type ResearcherTagListRelationFilter = {
    every?: ResearcherTagWhereInput
    some?: ResearcherTagWhereInput
    none?: ResearcherTagWhereInput
  }

  export type ResearcherTagOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ResearcherCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    affiliation?: SortOrder
    bio?: SortOrder
    profileUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ResearcherMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    affiliation?: SortOrder
    bio?: SortOrder
    profileUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ResearcherMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    affiliation?: SortOrder
    bio?: SortOrder
    profileUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type NewsNullableScalarRelationFilter = {
    is?: NewsWhereInput | null
    isNot?: NewsWhereInput | null
  }

  export type ExpeditionNullableScalarRelationFilter = {
    is?: ExpeditionWhereInput | null
    isNot?: ExpeditionWhereInput | null
  }

  export type PhotoCountOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    caption?: SortOrder
    altText?: SortOrder
    credit?: SortOrder
    sourceUrl?: SortOrder
    sourceType?: SortOrder
    newsId?: SortOrder
    expeditionId?: SortOrder
    createdAt?: SortOrder
  }

  export type PhotoMaxOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    caption?: SortOrder
    altText?: SortOrder
    credit?: SortOrder
    sourceUrl?: SortOrder
    sourceType?: SortOrder
    newsId?: SortOrder
    expeditionId?: SortOrder
    createdAt?: SortOrder
  }

  export type PhotoMinOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    caption?: SortOrder
    altText?: SortOrder
    credit?: SortOrder
    sourceUrl?: SortOrder
    sourceType?: SortOrder
    newsId?: SortOrder
    expeditionId?: SortOrder
    createdAt?: SortOrder
  }

  export type NewsScalarRelationFilter = {
    is?: NewsWhereInput
    isNot?: NewsWhereInput
  }

  export type PublicSummaryCountOrderByAggregateInput = {
    id?: SortOrder
    summary?: SortOrder
    language?: SortOrder
    model?: SortOrder
    generatedAt?: SortOrder
    newsId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PublicSummaryMaxOrderByAggregateInput = {
    id?: SortOrder
    summary?: SortOrder
    language?: SortOrder
    model?: SortOrder
    generatedAt?: SortOrder
    newsId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PublicSummaryMinOrderByAggregateInput = {
    id?: SortOrder
    summary?: SortOrder
    language?: SortOrder
    model?: SortOrder
    generatedAt?: SortOrder
    newsId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TagCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    createdAt?: SortOrder
  }

  export type TagMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    createdAt?: SortOrder
  }

  export type TagMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    createdAt?: SortOrder
  }

  export type TagScalarRelationFilter = {
    is?: TagWhereInput
    isNot?: TagWhereInput
  }

  export type NewsTagNewsIdTagIdCompoundUniqueInput = {
    newsId: string
    tagId: string
  }

  export type NewsTagCountOrderByAggregateInput = {
    newsId?: SortOrder
    tagId?: SortOrder
  }

  export type NewsTagMaxOrderByAggregateInput = {
    newsId?: SortOrder
    tagId?: SortOrder
  }

  export type NewsTagMinOrderByAggregateInput = {
    newsId?: SortOrder
    tagId?: SortOrder
  }

  export type ExpeditionScalarRelationFilter = {
    is?: ExpeditionWhereInput
    isNot?: ExpeditionWhereInput
  }

  export type ResearcherScalarRelationFilter = {
    is?: ResearcherWhereInput
    isNot?: ResearcherWhereInput
  }

  export type ExpeditionResearcherExpeditionIdResearcherIdCompoundUniqueInput = {
    expeditionId: string
    researcherId: string
  }

  export type ExpeditionResearcherCountOrderByAggregateInput = {
    expeditionId?: SortOrder
    researcherId?: SortOrder
  }

  export type ExpeditionResearcherMaxOrderByAggregateInput = {
    expeditionId?: SortOrder
    researcherId?: SortOrder
  }

  export type ExpeditionResearcherMinOrderByAggregateInput = {
    expeditionId?: SortOrder
    researcherId?: SortOrder
  }

  export type ExpeditionTagExpeditionIdTagIdCompoundUniqueInput = {
    expeditionId: string
    tagId: string
  }

  export type ExpeditionTagCountOrderByAggregateInput = {
    expeditionId?: SortOrder
    tagId?: SortOrder
  }

  export type ExpeditionTagMaxOrderByAggregateInput = {
    expeditionId?: SortOrder
    tagId?: SortOrder
  }

  export type ExpeditionTagMinOrderByAggregateInput = {
    expeditionId?: SortOrder
    tagId?: SortOrder
  }

  export type ResearcherTagResearcherIdTagIdCompoundUniqueInput = {
    researcherId: string
    tagId: string
  }

  export type ResearcherTagCountOrderByAggregateInput = {
    researcherId?: SortOrder
    tagId?: SortOrder
  }

  export type ResearcherTagMaxOrderByAggregateInput = {
    researcherId?: SortOrder
    tagId?: SortOrder
  }

  export type ResearcherTagMinOrderByAggregateInput = {
    researcherId?: SortOrder
    tagId?: SortOrder
  }

  export type PublicSummaryCreateNestedOneWithoutNewsInput = {
    create?: XOR<PublicSummaryCreateWithoutNewsInput, PublicSummaryUncheckedCreateWithoutNewsInput>
    connectOrCreate?: PublicSummaryCreateOrConnectWithoutNewsInput
    connect?: PublicSummaryWhereUniqueInput
  }

  export type PhotoCreateNestedManyWithoutNewsInput = {
    create?: XOR<PhotoCreateWithoutNewsInput, PhotoUncheckedCreateWithoutNewsInput> | PhotoCreateWithoutNewsInput[] | PhotoUncheckedCreateWithoutNewsInput[]
    connectOrCreate?: PhotoCreateOrConnectWithoutNewsInput | PhotoCreateOrConnectWithoutNewsInput[]
    createMany?: PhotoCreateManyNewsInputEnvelope
    connect?: PhotoWhereUniqueInput | PhotoWhereUniqueInput[]
  }

  export type NewsTagCreateNestedManyWithoutNewsInput = {
    create?: XOR<NewsTagCreateWithoutNewsInput, NewsTagUncheckedCreateWithoutNewsInput> | NewsTagCreateWithoutNewsInput[] | NewsTagUncheckedCreateWithoutNewsInput[]
    connectOrCreate?: NewsTagCreateOrConnectWithoutNewsInput | NewsTagCreateOrConnectWithoutNewsInput[]
    createMany?: NewsTagCreateManyNewsInputEnvelope
    connect?: NewsTagWhereUniqueInput | NewsTagWhereUniqueInput[]
  }

  export type PublicSummaryUncheckedCreateNestedOneWithoutNewsInput = {
    create?: XOR<PublicSummaryCreateWithoutNewsInput, PublicSummaryUncheckedCreateWithoutNewsInput>
    connectOrCreate?: PublicSummaryCreateOrConnectWithoutNewsInput
    connect?: PublicSummaryWhereUniqueInput
  }

  export type PhotoUncheckedCreateNestedManyWithoutNewsInput = {
    create?: XOR<PhotoCreateWithoutNewsInput, PhotoUncheckedCreateWithoutNewsInput> | PhotoCreateWithoutNewsInput[] | PhotoUncheckedCreateWithoutNewsInput[]
    connectOrCreate?: PhotoCreateOrConnectWithoutNewsInput | PhotoCreateOrConnectWithoutNewsInput[]
    createMany?: PhotoCreateManyNewsInputEnvelope
    connect?: PhotoWhereUniqueInput | PhotoWhereUniqueInput[]
  }

  export type NewsTagUncheckedCreateNestedManyWithoutNewsInput = {
    create?: XOR<NewsTagCreateWithoutNewsInput, NewsTagUncheckedCreateWithoutNewsInput> | NewsTagCreateWithoutNewsInput[] | NewsTagUncheckedCreateWithoutNewsInput[]
    connectOrCreate?: NewsTagCreateOrConnectWithoutNewsInput | NewsTagCreateOrConnectWithoutNewsInput[]
    createMany?: NewsTagCreateManyNewsInputEnvelope
    connect?: NewsTagWhereUniqueInput | NewsTagWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type PublicSummaryUpdateOneWithoutNewsNestedInput = {
    create?: XOR<PublicSummaryCreateWithoutNewsInput, PublicSummaryUncheckedCreateWithoutNewsInput>
    connectOrCreate?: PublicSummaryCreateOrConnectWithoutNewsInput
    upsert?: PublicSummaryUpsertWithoutNewsInput
    disconnect?: PublicSummaryWhereInput | boolean
    delete?: PublicSummaryWhereInput | boolean
    connect?: PublicSummaryWhereUniqueInput
    update?: XOR<XOR<PublicSummaryUpdateToOneWithWhereWithoutNewsInput, PublicSummaryUpdateWithoutNewsInput>, PublicSummaryUncheckedUpdateWithoutNewsInput>
  }

  export type PhotoUpdateManyWithoutNewsNestedInput = {
    create?: XOR<PhotoCreateWithoutNewsInput, PhotoUncheckedCreateWithoutNewsInput> | PhotoCreateWithoutNewsInput[] | PhotoUncheckedCreateWithoutNewsInput[]
    connectOrCreate?: PhotoCreateOrConnectWithoutNewsInput | PhotoCreateOrConnectWithoutNewsInput[]
    upsert?: PhotoUpsertWithWhereUniqueWithoutNewsInput | PhotoUpsertWithWhereUniqueWithoutNewsInput[]
    createMany?: PhotoCreateManyNewsInputEnvelope
    set?: PhotoWhereUniqueInput | PhotoWhereUniqueInput[]
    disconnect?: PhotoWhereUniqueInput | PhotoWhereUniqueInput[]
    delete?: PhotoWhereUniqueInput | PhotoWhereUniqueInput[]
    connect?: PhotoWhereUniqueInput | PhotoWhereUniqueInput[]
    update?: PhotoUpdateWithWhereUniqueWithoutNewsInput | PhotoUpdateWithWhereUniqueWithoutNewsInput[]
    updateMany?: PhotoUpdateManyWithWhereWithoutNewsInput | PhotoUpdateManyWithWhereWithoutNewsInput[]
    deleteMany?: PhotoScalarWhereInput | PhotoScalarWhereInput[]
  }

  export type NewsTagUpdateManyWithoutNewsNestedInput = {
    create?: XOR<NewsTagCreateWithoutNewsInput, NewsTagUncheckedCreateWithoutNewsInput> | NewsTagCreateWithoutNewsInput[] | NewsTagUncheckedCreateWithoutNewsInput[]
    connectOrCreate?: NewsTagCreateOrConnectWithoutNewsInput | NewsTagCreateOrConnectWithoutNewsInput[]
    upsert?: NewsTagUpsertWithWhereUniqueWithoutNewsInput | NewsTagUpsertWithWhereUniqueWithoutNewsInput[]
    createMany?: NewsTagCreateManyNewsInputEnvelope
    set?: NewsTagWhereUniqueInput | NewsTagWhereUniqueInput[]
    disconnect?: NewsTagWhereUniqueInput | NewsTagWhereUniqueInput[]
    delete?: NewsTagWhereUniqueInput | NewsTagWhereUniqueInput[]
    connect?: NewsTagWhereUniqueInput | NewsTagWhereUniqueInput[]
    update?: NewsTagUpdateWithWhereUniqueWithoutNewsInput | NewsTagUpdateWithWhereUniqueWithoutNewsInput[]
    updateMany?: NewsTagUpdateManyWithWhereWithoutNewsInput | NewsTagUpdateManyWithWhereWithoutNewsInput[]
    deleteMany?: NewsTagScalarWhereInput | NewsTagScalarWhereInput[]
  }

  export type PublicSummaryUncheckedUpdateOneWithoutNewsNestedInput = {
    create?: XOR<PublicSummaryCreateWithoutNewsInput, PublicSummaryUncheckedCreateWithoutNewsInput>
    connectOrCreate?: PublicSummaryCreateOrConnectWithoutNewsInput
    upsert?: PublicSummaryUpsertWithoutNewsInput
    disconnect?: PublicSummaryWhereInput | boolean
    delete?: PublicSummaryWhereInput | boolean
    connect?: PublicSummaryWhereUniqueInput
    update?: XOR<XOR<PublicSummaryUpdateToOneWithWhereWithoutNewsInput, PublicSummaryUpdateWithoutNewsInput>, PublicSummaryUncheckedUpdateWithoutNewsInput>
  }

  export type PhotoUncheckedUpdateManyWithoutNewsNestedInput = {
    create?: XOR<PhotoCreateWithoutNewsInput, PhotoUncheckedCreateWithoutNewsInput> | PhotoCreateWithoutNewsInput[] | PhotoUncheckedCreateWithoutNewsInput[]
    connectOrCreate?: PhotoCreateOrConnectWithoutNewsInput | PhotoCreateOrConnectWithoutNewsInput[]
    upsert?: PhotoUpsertWithWhereUniqueWithoutNewsInput | PhotoUpsertWithWhereUniqueWithoutNewsInput[]
    createMany?: PhotoCreateManyNewsInputEnvelope
    set?: PhotoWhereUniqueInput | PhotoWhereUniqueInput[]
    disconnect?: PhotoWhereUniqueInput | PhotoWhereUniqueInput[]
    delete?: PhotoWhereUniqueInput | PhotoWhereUniqueInput[]
    connect?: PhotoWhereUniqueInput | PhotoWhereUniqueInput[]
    update?: PhotoUpdateWithWhereUniqueWithoutNewsInput | PhotoUpdateWithWhereUniqueWithoutNewsInput[]
    updateMany?: PhotoUpdateManyWithWhereWithoutNewsInput | PhotoUpdateManyWithWhereWithoutNewsInput[]
    deleteMany?: PhotoScalarWhereInput | PhotoScalarWhereInput[]
  }

  export type NewsTagUncheckedUpdateManyWithoutNewsNestedInput = {
    create?: XOR<NewsTagCreateWithoutNewsInput, NewsTagUncheckedCreateWithoutNewsInput> | NewsTagCreateWithoutNewsInput[] | NewsTagUncheckedCreateWithoutNewsInput[]
    connectOrCreate?: NewsTagCreateOrConnectWithoutNewsInput | NewsTagCreateOrConnectWithoutNewsInput[]
    upsert?: NewsTagUpsertWithWhereUniqueWithoutNewsInput | NewsTagUpsertWithWhereUniqueWithoutNewsInput[]
    createMany?: NewsTagCreateManyNewsInputEnvelope
    set?: NewsTagWhereUniqueInput | NewsTagWhereUniqueInput[]
    disconnect?: NewsTagWhereUniqueInput | NewsTagWhereUniqueInput[]
    delete?: NewsTagWhereUniqueInput | NewsTagWhereUniqueInput[]
    connect?: NewsTagWhereUniqueInput | NewsTagWhereUniqueInput[]
    update?: NewsTagUpdateWithWhereUniqueWithoutNewsInput | NewsTagUpdateWithWhereUniqueWithoutNewsInput[]
    updateMany?: NewsTagUpdateManyWithWhereWithoutNewsInput | NewsTagUpdateManyWithWhereWithoutNewsInput[]
    deleteMany?: NewsTagScalarWhereInput | NewsTagScalarWhereInput[]
  }

  export type ExpeditionResearcherCreateNestedManyWithoutExpeditionInput = {
    create?: XOR<ExpeditionResearcherCreateWithoutExpeditionInput, ExpeditionResearcherUncheckedCreateWithoutExpeditionInput> | ExpeditionResearcherCreateWithoutExpeditionInput[] | ExpeditionResearcherUncheckedCreateWithoutExpeditionInput[]
    connectOrCreate?: ExpeditionResearcherCreateOrConnectWithoutExpeditionInput | ExpeditionResearcherCreateOrConnectWithoutExpeditionInput[]
    createMany?: ExpeditionResearcherCreateManyExpeditionInputEnvelope
    connect?: ExpeditionResearcherWhereUniqueInput | ExpeditionResearcherWhereUniqueInput[]
  }

  export type PhotoCreateNestedManyWithoutExpeditionInput = {
    create?: XOR<PhotoCreateWithoutExpeditionInput, PhotoUncheckedCreateWithoutExpeditionInput> | PhotoCreateWithoutExpeditionInput[] | PhotoUncheckedCreateWithoutExpeditionInput[]
    connectOrCreate?: PhotoCreateOrConnectWithoutExpeditionInput | PhotoCreateOrConnectWithoutExpeditionInput[]
    createMany?: PhotoCreateManyExpeditionInputEnvelope
    connect?: PhotoWhereUniqueInput | PhotoWhereUniqueInput[]
  }

  export type ExpeditionTagCreateNestedManyWithoutExpeditionInput = {
    create?: XOR<ExpeditionTagCreateWithoutExpeditionInput, ExpeditionTagUncheckedCreateWithoutExpeditionInput> | ExpeditionTagCreateWithoutExpeditionInput[] | ExpeditionTagUncheckedCreateWithoutExpeditionInput[]
    connectOrCreate?: ExpeditionTagCreateOrConnectWithoutExpeditionInput | ExpeditionTagCreateOrConnectWithoutExpeditionInput[]
    createMany?: ExpeditionTagCreateManyExpeditionInputEnvelope
    connect?: ExpeditionTagWhereUniqueInput | ExpeditionTagWhereUniqueInput[]
  }

  export type ExpeditionResearcherUncheckedCreateNestedManyWithoutExpeditionInput = {
    create?: XOR<ExpeditionResearcherCreateWithoutExpeditionInput, ExpeditionResearcherUncheckedCreateWithoutExpeditionInput> | ExpeditionResearcherCreateWithoutExpeditionInput[] | ExpeditionResearcherUncheckedCreateWithoutExpeditionInput[]
    connectOrCreate?: ExpeditionResearcherCreateOrConnectWithoutExpeditionInput | ExpeditionResearcherCreateOrConnectWithoutExpeditionInput[]
    createMany?: ExpeditionResearcherCreateManyExpeditionInputEnvelope
    connect?: ExpeditionResearcherWhereUniqueInput | ExpeditionResearcherWhereUniqueInput[]
  }

  export type PhotoUncheckedCreateNestedManyWithoutExpeditionInput = {
    create?: XOR<PhotoCreateWithoutExpeditionInput, PhotoUncheckedCreateWithoutExpeditionInput> | PhotoCreateWithoutExpeditionInput[] | PhotoUncheckedCreateWithoutExpeditionInput[]
    connectOrCreate?: PhotoCreateOrConnectWithoutExpeditionInput | PhotoCreateOrConnectWithoutExpeditionInput[]
    createMany?: PhotoCreateManyExpeditionInputEnvelope
    connect?: PhotoWhereUniqueInput | PhotoWhereUniqueInput[]
  }

  export type ExpeditionTagUncheckedCreateNestedManyWithoutExpeditionInput = {
    create?: XOR<ExpeditionTagCreateWithoutExpeditionInput, ExpeditionTagUncheckedCreateWithoutExpeditionInput> | ExpeditionTagCreateWithoutExpeditionInput[] | ExpeditionTagUncheckedCreateWithoutExpeditionInput[]
    connectOrCreate?: ExpeditionTagCreateOrConnectWithoutExpeditionInput | ExpeditionTagCreateOrConnectWithoutExpeditionInput[]
    createMany?: ExpeditionTagCreateManyExpeditionInputEnvelope
    connect?: ExpeditionTagWhereUniqueInput | ExpeditionTagWhereUniqueInput[]
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type ExpeditionResearcherUpdateManyWithoutExpeditionNestedInput = {
    create?: XOR<ExpeditionResearcherCreateWithoutExpeditionInput, ExpeditionResearcherUncheckedCreateWithoutExpeditionInput> | ExpeditionResearcherCreateWithoutExpeditionInput[] | ExpeditionResearcherUncheckedCreateWithoutExpeditionInput[]
    connectOrCreate?: ExpeditionResearcherCreateOrConnectWithoutExpeditionInput | ExpeditionResearcherCreateOrConnectWithoutExpeditionInput[]
    upsert?: ExpeditionResearcherUpsertWithWhereUniqueWithoutExpeditionInput | ExpeditionResearcherUpsertWithWhereUniqueWithoutExpeditionInput[]
    createMany?: ExpeditionResearcherCreateManyExpeditionInputEnvelope
    set?: ExpeditionResearcherWhereUniqueInput | ExpeditionResearcherWhereUniqueInput[]
    disconnect?: ExpeditionResearcherWhereUniqueInput | ExpeditionResearcherWhereUniqueInput[]
    delete?: ExpeditionResearcherWhereUniqueInput | ExpeditionResearcherWhereUniqueInput[]
    connect?: ExpeditionResearcherWhereUniqueInput | ExpeditionResearcherWhereUniqueInput[]
    update?: ExpeditionResearcherUpdateWithWhereUniqueWithoutExpeditionInput | ExpeditionResearcherUpdateWithWhereUniqueWithoutExpeditionInput[]
    updateMany?: ExpeditionResearcherUpdateManyWithWhereWithoutExpeditionInput | ExpeditionResearcherUpdateManyWithWhereWithoutExpeditionInput[]
    deleteMany?: ExpeditionResearcherScalarWhereInput | ExpeditionResearcherScalarWhereInput[]
  }

  export type PhotoUpdateManyWithoutExpeditionNestedInput = {
    create?: XOR<PhotoCreateWithoutExpeditionInput, PhotoUncheckedCreateWithoutExpeditionInput> | PhotoCreateWithoutExpeditionInput[] | PhotoUncheckedCreateWithoutExpeditionInput[]
    connectOrCreate?: PhotoCreateOrConnectWithoutExpeditionInput | PhotoCreateOrConnectWithoutExpeditionInput[]
    upsert?: PhotoUpsertWithWhereUniqueWithoutExpeditionInput | PhotoUpsertWithWhereUniqueWithoutExpeditionInput[]
    createMany?: PhotoCreateManyExpeditionInputEnvelope
    set?: PhotoWhereUniqueInput | PhotoWhereUniqueInput[]
    disconnect?: PhotoWhereUniqueInput | PhotoWhereUniqueInput[]
    delete?: PhotoWhereUniqueInput | PhotoWhereUniqueInput[]
    connect?: PhotoWhereUniqueInput | PhotoWhereUniqueInput[]
    update?: PhotoUpdateWithWhereUniqueWithoutExpeditionInput | PhotoUpdateWithWhereUniqueWithoutExpeditionInput[]
    updateMany?: PhotoUpdateManyWithWhereWithoutExpeditionInput | PhotoUpdateManyWithWhereWithoutExpeditionInput[]
    deleteMany?: PhotoScalarWhereInput | PhotoScalarWhereInput[]
  }

  export type ExpeditionTagUpdateManyWithoutExpeditionNestedInput = {
    create?: XOR<ExpeditionTagCreateWithoutExpeditionInput, ExpeditionTagUncheckedCreateWithoutExpeditionInput> | ExpeditionTagCreateWithoutExpeditionInput[] | ExpeditionTagUncheckedCreateWithoutExpeditionInput[]
    connectOrCreate?: ExpeditionTagCreateOrConnectWithoutExpeditionInput | ExpeditionTagCreateOrConnectWithoutExpeditionInput[]
    upsert?: ExpeditionTagUpsertWithWhereUniqueWithoutExpeditionInput | ExpeditionTagUpsertWithWhereUniqueWithoutExpeditionInput[]
    createMany?: ExpeditionTagCreateManyExpeditionInputEnvelope
    set?: ExpeditionTagWhereUniqueInput | ExpeditionTagWhereUniqueInput[]
    disconnect?: ExpeditionTagWhereUniqueInput | ExpeditionTagWhereUniqueInput[]
    delete?: ExpeditionTagWhereUniqueInput | ExpeditionTagWhereUniqueInput[]
    connect?: ExpeditionTagWhereUniqueInput | ExpeditionTagWhereUniqueInput[]
    update?: ExpeditionTagUpdateWithWhereUniqueWithoutExpeditionInput | ExpeditionTagUpdateWithWhereUniqueWithoutExpeditionInput[]
    updateMany?: ExpeditionTagUpdateManyWithWhereWithoutExpeditionInput | ExpeditionTagUpdateManyWithWhereWithoutExpeditionInput[]
    deleteMany?: ExpeditionTagScalarWhereInput | ExpeditionTagScalarWhereInput[]
  }

  export type ExpeditionResearcherUncheckedUpdateManyWithoutExpeditionNestedInput = {
    create?: XOR<ExpeditionResearcherCreateWithoutExpeditionInput, ExpeditionResearcherUncheckedCreateWithoutExpeditionInput> | ExpeditionResearcherCreateWithoutExpeditionInput[] | ExpeditionResearcherUncheckedCreateWithoutExpeditionInput[]
    connectOrCreate?: ExpeditionResearcherCreateOrConnectWithoutExpeditionInput | ExpeditionResearcherCreateOrConnectWithoutExpeditionInput[]
    upsert?: ExpeditionResearcherUpsertWithWhereUniqueWithoutExpeditionInput | ExpeditionResearcherUpsertWithWhereUniqueWithoutExpeditionInput[]
    createMany?: ExpeditionResearcherCreateManyExpeditionInputEnvelope
    set?: ExpeditionResearcherWhereUniqueInput | ExpeditionResearcherWhereUniqueInput[]
    disconnect?: ExpeditionResearcherWhereUniqueInput | ExpeditionResearcherWhereUniqueInput[]
    delete?: ExpeditionResearcherWhereUniqueInput | ExpeditionResearcherWhereUniqueInput[]
    connect?: ExpeditionResearcherWhereUniqueInput | ExpeditionResearcherWhereUniqueInput[]
    update?: ExpeditionResearcherUpdateWithWhereUniqueWithoutExpeditionInput | ExpeditionResearcherUpdateWithWhereUniqueWithoutExpeditionInput[]
    updateMany?: ExpeditionResearcherUpdateManyWithWhereWithoutExpeditionInput | ExpeditionResearcherUpdateManyWithWhereWithoutExpeditionInput[]
    deleteMany?: ExpeditionResearcherScalarWhereInput | ExpeditionResearcherScalarWhereInput[]
  }

  export type PhotoUncheckedUpdateManyWithoutExpeditionNestedInput = {
    create?: XOR<PhotoCreateWithoutExpeditionInput, PhotoUncheckedCreateWithoutExpeditionInput> | PhotoCreateWithoutExpeditionInput[] | PhotoUncheckedCreateWithoutExpeditionInput[]
    connectOrCreate?: PhotoCreateOrConnectWithoutExpeditionInput | PhotoCreateOrConnectWithoutExpeditionInput[]
    upsert?: PhotoUpsertWithWhereUniqueWithoutExpeditionInput | PhotoUpsertWithWhereUniqueWithoutExpeditionInput[]
    createMany?: PhotoCreateManyExpeditionInputEnvelope
    set?: PhotoWhereUniqueInput | PhotoWhereUniqueInput[]
    disconnect?: PhotoWhereUniqueInput | PhotoWhereUniqueInput[]
    delete?: PhotoWhereUniqueInput | PhotoWhereUniqueInput[]
    connect?: PhotoWhereUniqueInput | PhotoWhereUniqueInput[]
    update?: PhotoUpdateWithWhereUniqueWithoutExpeditionInput | PhotoUpdateWithWhereUniqueWithoutExpeditionInput[]
    updateMany?: PhotoUpdateManyWithWhereWithoutExpeditionInput | PhotoUpdateManyWithWhereWithoutExpeditionInput[]
    deleteMany?: PhotoScalarWhereInput | PhotoScalarWhereInput[]
  }

  export type ExpeditionTagUncheckedUpdateManyWithoutExpeditionNestedInput = {
    create?: XOR<ExpeditionTagCreateWithoutExpeditionInput, ExpeditionTagUncheckedCreateWithoutExpeditionInput> | ExpeditionTagCreateWithoutExpeditionInput[] | ExpeditionTagUncheckedCreateWithoutExpeditionInput[]
    connectOrCreate?: ExpeditionTagCreateOrConnectWithoutExpeditionInput | ExpeditionTagCreateOrConnectWithoutExpeditionInput[]
    upsert?: ExpeditionTagUpsertWithWhereUniqueWithoutExpeditionInput | ExpeditionTagUpsertWithWhereUniqueWithoutExpeditionInput[]
    createMany?: ExpeditionTagCreateManyExpeditionInputEnvelope
    set?: ExpeditionTagWhereUniqueInput | ExpeditionTagWhereUniqueInput[]
    disconnect?: ExpeditionTagWhereUniqueInput | ExpeditionTagWhereUniqueInput[]
    delete?: ExpeditionTagWhereUniqueInput | ExpeditionTagWhereUniqueInput[]
    connect?: ExpeditionTagWhereUniqueInput | ExpeditionTagWhereUniqueInput[]
    update?: ExpeditionTagUpdateWithWhereUniqueWithoutExpeditionInput | ExpeditionTagUpdateWithWhereUniqueWithoutExpeditionInput[]
    updateMany?: ExpeditionTagUpdateManyWithWhereWithoutExpeditionInput | ExpeditionTagUpdateManyWithWhereWithoutExpeditionInput[]
    deleteMany?: ExpeditionTagScalarWhereInput | ExpeditionTagScalarWhereInput[]
  }

  export type ExpeditionResearcherCreateNestedManyWithoutResearcherInput = {
    create?: XOR<ExpeditionResearcherCreateWithoutResearcherInput, ExpeditionResearcherUncheckedCreateWithoutResearcherInput> | ExpeditionResearcherCreateWithoutResearcherInput[] | ExpeditionResearcherUncheckedCreateWithoutResearcherInput[]
    connectOrCreate?: ExpeditionResearcherCreateOrConnectWithoutResearcherInput | ExpeditionResearcherCreateOrConnectWithoutResearcherInput[]
    createMany?: ExpeditionResearcherCreateManyResearcherInputEnvelope
    connect?: ExpeditionResearcherWhereUniqueInput | ExpeditionResearcherWhereUniqueInput[]
  }

  export type ResearcherTagCreateNestedManyWithoutResearcherInput = {
    create?: XOR<ResearcherTagCreateWithoutResearcherInput, ResearcherTagUncheckedCreateWithoutResearcherInput> | ResearcherTagCreateWithoutResearcherInput[] | ResearcherTagUncheckedCreateWithoutResearcherInput[]
    connectOrCreate?: ResearcherTagCreateOrConnectWithoutResearcherInput | ResearcherTagCreateOrConnectWithoutResearcherInput[]
    createMany?: ResearcherTagCreateManyResearcherInputEnvelope
    connect?: ResearcherTagWhereUniqueInput | ResearcherTagWhereUniqueInput[]
  }

  export type ExpeditionResearcherUncheckedCreateNestedManyWithoutResearcherInput = {
    create?: XOR<ExpeditionResearcherCreateWithoutResearcherInput, ExpeditionResearcherUncheckedCreateWithoutResearcherInput> | ExpeditionResearcherCreateWithoutResearcherInput[] | ExpeditionResearcherUncheckedCreateWithoutResearcherInput[]
    connectOrCreate?: ExpeditionResearcherCreateOrConnectWithoutResearcherInput | ExpeditionResearcherCreateOrConnectWithoutResearcherInput[]
    createMany?: ExpeditionResearcherCreateManyResearcherInputEnvelope
    connect?: ExpeditionResearcherWhereUniqueInput | ExpeditionResearcherWhereUniqueInput[]
  }

  export type ResearcherTagUncheckedCreateNestedManyWithoutResearcherInput = {
    create?: XOR<ResearcherTagCreateWithoutResearcherInput, ResearcherTagUncheckedCreateWithoutResearcherInput> | ResearcherTagCreateWithoutResearcherInput[] | ResearcherTagUncheckedCreateWithoutResearcherInput[]
    connectOrCreate?: ResearcherTagCreateOrConnectWithoutResearcherInput | ResearcherTagCreateOrConnectWithoutResearcherInput[]
    createMany?: ResearcherTagCreateManyResearcherInputEnvelope
    connect?: ResearcherTagWhereUniqueInput | ResearcherTagWhereUniqueInput[]
  }

  export type ExpeditionResearcherUpdateManyWithoutResearcherNestedInput = {
    create?: XOR<ExpeditionResearcherCreateWithoutResearcherInput, ExpeditionResearcherUncheckedCreateWithoutResearcherInput> | ExpeditionResearcherCreateWithoutResearcherInput[] | ExpeditionResearcherUncheckedCreateWithoutResearcherInput[]
    connectOrCreate?: ExpeditionResearcherCreateOrConnectWithoutResearcherInput | ExpeditionResearcherCreateOrConnectWithoutResearcherInput[]
    upsert?: ExpeditionResearcherUpsertWithWhereUniqueWithoutResearcherInput | ExpeditionResearcherUpsertWithWhereUniqueWithoutResearcherInput[]
    createMany?: ExpeditionResearcherCreateManyResearcherInputEnvelope
    set?: ExpeditionResearcherWhereUniqueInput | ExpeditionResearcherWhereUniqueInput[]
    disconnect?: ExpeditionResearcherWhereUniqueInput | ExpeditionResearcherWhereUniqueInput[]
    delete?: ExpeditionResearcherWhereUniqueInput | ExpeditionResearcherWhereUniqueInput[]
    connect?: ExpeditionResearcherWhereUniqueInput | ExpeditionResearcherWhereUniqueInput[]
    update?: ExpeditionResearcherUpdateWithWhereUniqueWithoutResearcherInput | ExpeditionResearcherUpdateWithWhereUniqueWithoutResearcherInput[]
    updateMany?: ExpeditionResearcherUpdateManyWithWhereWithoutResearcherInput | ExpeditionResearcherUpdateManyWithWhereWithoutResearcherInput[]
    deleteMany?: ExpeditionResearcherScalarWhereInput | ExpeditionResearcherScalarWhereInput[]
  }

  export type ResearcherTagUpdateManyWithoutResearcherNestedInput = {
    create?: XOR<ResearcherTagCreateWithoutResearcherInput, ResearcherTagUncheckedCreateWithoutResearcherInput> | ResearcherTagCreateWithoutResearcherInput[] | ResearcherTagUncheckedCreateWithoutResearcherInput[]
    connectOrCreate?: ResearcherTagCreateOrConnectWithoutResearcherInput | ResearcherTagCreateOrConnectWithoutResearcherInput[]
    upsert?: ResearcherTagUpsertWithWhereUniqueWithoutResearcherInput | ResearcherTagUpsertWithWhereUniqueWithoutResearcherInput[]
    createMany?: ResearcherTagCreateManyResearcherInputEnvelope
    set?: ResearcherTagWhereUniqueInput | ResearcherTagWhereUniqueInput[]
    disconnect?: ResearcherTagWhereUniqueInput | ResearcherTagWhereUniqueInput[]
    delete?: ResearcherTagWhereUniqueInput | ResearcherTagWhereUniqueInput[]
    connect?: ResearcherTagWhereUniqueInput | ResearcherTagWhereUniqueInput[]
    update?: ResearcherTagUpdateWithWhereUniqueWithoutResearcherInput | ResearcherTagUpdateWithWhereUniqueWithoutResearcherInput[]
    updateMany?: ResearcherTagUpdateManyWithWhereWithoutResearcherInput | ResearcherTagUpdateManyWithWhereWithoutResearcherInput[]
    deleteMany?: ResearcherTagScalarWhereInput | ResearcherTagScalarWhereInput[]
  }

  export type ExpeditionResearcherUncheckedUpdateManyWithoutResearcherNestedInput = {
    create?: XOR<ExpeditionResearcherCreateWithoutResearcherInput, ExpeditionResearcherUncheckedCreateWithoutResearcherInput> | ExpeditionResearcherCreateWithoutResearcherInput[] | ExpeditionResearcherUncheckedCreateWithoutResearcherInput[]
    connectOrCreate?: ExpeditionResearcherCreateOrConnectWithoutResearcherInput | ExpeditionResearcherCreateOrConnectWithoutResearcherInput[]
    upsert?: ExpeditionResearcherUpsertWithWhereUniqueWithoutResearcherInput | ExpeditionResearcherUpsertWithWhereUniqueWithoutResearcherInput[]
    createMany?: ExpeditionResearcherCreateManyResearcherInputEnvelope
    set?: ExpeditionResearcherWhereUniqueInput | ExpeditionResearcherWhereUniqueInput[]
    disconnect?: ExpeditionResearcherWhereUniqueInput | ExpeditionResearcherWhereUniqueInput[]
    delete?: ExpeditionResearcherWhereUniqueInput | ExpeditionResearcherWhereUniqueInput[]
    connect?: ExpeditionResearcherWhereUniqueInput | ExpeditionResearcherWhereUniqueInput[]
    update?: ExpeditionResearcherUpdateWithWhereUniqueWithoutResearcherInput | ExpeditionResearcherUpdateWithWhereUniqueWithoutResearcherInput[]
    updateMany?: ExpeditionResearcherUpdateManyWithWhereWithoutResearcherInput | ExpeditionResearcherUpdateManyWithWhereWithoutResearcherInput[]
    deleteMany?: ExpeditionResearcherScalarWhereInput | ExpeditionResearcherScalarWhereInput[]
  }

  export type ResearcherTagUncheckedUpdateManyWithoutResearcherNestedInput = {
    create?: XOR<ResearcherTagCreateWithoutResearcherInput, ResearcherTagUncheckedCreateWithoutResearcherInput> | ResearcherTagCreateWithoutResearcherInput[] | ResearcherTagUncheckedCreateWithoutResearcherInput[]
    connectOrCreate?: ResearcherTagCreateOrConnectWithoutResearcherInput | ResearcherTagCreateOrConnectWithoutResearcherInput[]
    upsert?: ResearcherTagUpsertWithWhereUniqueWithoutResearcherInput | ResearcherTagUpsertWithWhereUniqueWithoutResearcherInput[]
    createMany?: ResearcherTagCreateManyResearcherInputEnvelope
    set?: ResearcherTagWhereUniqueInput | ResearcherTagWhereUniqueInput[]
    disconnect?: ResearcherTagWhereUniqueInput | ResearcherTagWhereUniqueInput[]
    delete?: ResearcherTagWhereUniqueInput | ResearcherTagWhereUniqueInput[]
    connect?: ResearcherTagWhereUniqueInput | ResearcherTagWhereUniqueInput[]
    update?: ResearcherTagUpdateWithWhereUniqueWithoutResearcherInput | ResearcherTagUpdateWithWhereUniqueWithoutResearcherInput[]
    updateMany?: ResearcherTagUpdateManyWithWhereWithoutResearcherInput | ResearcherTagUpdateManyWithWhereWithoutResearcherInput[]
    deleteMany?: ResearcherTagScalarWhereInput | ResearcherTagScalarWhereInput[]
  }

  export type NewsCreateNestedOneWithoutPhotosInput = {
    create?: XOR<NewsCreateWithoutPhotosInput, NewsUncheckedCreateWithoutPhotosInput>
    connectOrCreate?: NewsCreateOrConnectWithoutPhotosInput
    connect?: NewsWhereUniqueInput
  }

  export type ExpeditionCreateNestedOneWithoutPhotosInput = {
    create?: XOR<ExpeditionCreateWithoutPhotosInput, ExpeditionUncheckedCreateWithoutPhotosInput>
    connectOrCreate?: ExpeditionCreateOrConnectWithoutPhotosInput
    connect?: ExpeditionWhereUniqueInput
  }

  export type NewsUpdateOneWithoutPhotosNestedInput = {
    create?: XOR<NewsCreateWithoutPhotosInput, NewsUncheckedCreateWithoutPhotosInput>
    connectOrCreate?: NewsCreateOrConnectWithoutPhotosInput
    upsert?: NewsUpsertWithoutPhotosInput
    disconnect?: NewsWhereInput | boolean
    delete?: NewsWhereInput | boolean
    connect?: NewsWhereUniqueInput
    update?: XOR<XOR<NewsUpdateToOneWithWhereWithoutPhotosInput, NewsUpdateWithoutPhotosInput>, NewsUncheckedUpdateWithoutPhotosInput>
  }

  export type ExpeditionUpdateOneWithoutPhotosNestedInput = {
    create?: XOR<ExpeditionCreateWithoutPhotosInput, ExpeditionUncheckedCreateWithoutPhotosInput>
    connectOrCreate?: ExpeditionCreateOrConnectWithoutPhotosInput
    upsert?: ExpeditionUpsertWithoutPhotosInput
    disconnect?: ExpeditionWhereInput | boolean
    delete?: ExpeditionWhereInput | boolean
    connect?: ExpeditionWhereUniqueInput
    update?: XOR<XOR<ExpeditionUpdateToOneWithWhereWithoutPhotosInput, ExpeditionUpdateWithoutPhotosInput>, ExpeditionUncheckedUpdateWithoutPhotosInput>
  }

  export type NewsCreateNestedOneWithoutPublicSummaryInput = {
    create?: XOR<NewsCreateWithoutPublicSummaryInput, NewsUncheckedCreateWithoutPublicSummaryInput>
    connectOrCreate?: NewsCreateOrConnectWithoutPublicSummaryInput
    connect?: NewsWhereUniqueInput
  }

  export type NewsUpdateOneRequiredWithoutPublicSummaryNestedInput = {
    create?: XOR<NewsCreateWithoutPublicSummaryInput, NewsUncheckedCreateWithoutPublicSummaryInput>
    connectOrCreate?: NewsCreateOrConnectWithoutPublicSummaryInput
    upsert?: NewsUpsertWithoutPublicSummaryInput
    connect?: NewsWhereUniqueInput
    update?: XOR<XOR<NewsUpdateToOneWithWhereWithoutPublicSummaryInput, NewsUpdateWithoutPublicSummaryInput>, NewsUncheckedUpdateWithoutPublicSummaryInput>
  }

  export type NewsTagCreateNestedManyWithoutTagInput = {
    create?: XOR<NewsTagCreateWithoutTagInput, NewsTagUncheckedCreateWithoutTagInput> | NewsTagCreateWithoutTagInput[] | NewsTagUncheckedCreateWithoutTagInput[]
    connectOrCreate?: NewsTagCreateOrConnectWithoutTagInput | NewsTagCreateOrConnectWithoutTagInput[]
    createMany?: NewsTagCreateManyTagInputEnvelope
    connect?: NewsTagWhereUniqueInput | NewsTagWhereUniqueInput[]
  }

  export type ExpeditionTagCreateNestedManyWithoutTagInput = {
    create?: XOR<ExpeditionTagCreateWithoutTagInput, ExpeditionTagUncheckedCreateWithoutTagInput> | ExpeditionTagCreateWithoutTagInput[] | ExpeditionTagUncheckedCreateWithoutTagInput[]
    connectOrCreate?: ExpeditionTagCreateOrConnectWithoutTagInput | ExpeditionTagCreateOrConnectWithoutTagInput[]
    createMany?: ExpeditionTagCreateManyTagInputEnvelope
    connect?: ExpeditionTagWhereUniqueInput | ExpeditionTagWhereUniqueInput[]
  }

  export type ResearcherTagCreateNestedManyWithoutTagInput = {
    create?: XOR<ResearcherTagCreateWithoutTagInput, ResearcherTagUncheckedCreateWithoutTagInput> | ResearcherTagCreateWithoutTagInput[] | ResearcherTagUncheckedCreateWithoutTagInput[]
    connectOrCreate?: ResearcherTagCreateOrConnectWithoutTagInput | ResearcherTagCreateOrConnectWithoutTagInput[]
    createMany?: ResearcherTagCreateManyTagInputEnvelope
    connect?: ResearcherTagWhereUniqueInput | ResearcherTagWhereUniqueInput[]
  }

  export type NewsTagUncheckedCreateNestedManyWithoutTagInput = {
    create?: XOR<NewsTagCreateWithoutTagInput, NewsTagUncheckedCreateWithoutTagInput> | NewsTagCreateWithoutTagInput[] | NewsTagUncheckedCreateWithoutTagInput[]
    connectOrCreate?: NewsTagCreateOrConnectWithoutTagInput | NewsTagCreateOrConnectWithoutTagInput[]
    createMany?: NewsTagCreateManyTagInputEnvelope
    connect?: NewsTagWhereUniqueInput | NewsTagWhereUniqueInput[]
  }

  export type ExpeditionTagUncheckedCreateNestedManyWithoutTagInput = {
    create?: XOR<ExpeditionTagCreateWithoutTagInput, ExpeditionTagUncheckedCreateWithoutTagInput> | ExpeditionTagCreateWithoutTagInput[] | ExpeditionTagUncheckedCreateWithoutTagInput[]
    connectOrCreate?: ExpeditionTagCreateOrConnectWithoutTagInput | ExpeditionTagCreateOrConnectWithoutTagInput[]
    createMany?: ExpeditionTagCreateManyTagInputEnvelope
    connect?: ExpeditionTagWhereUniqueInput | ExpeditionTagWhereUniqueInput[]
  }

  export type ResearcherTagUncheckedCreateNestedManyWithoutTagInput = {
    create?: XOR<ResearcherTagCreateWithoutTagInput, ResearcherTagUncheckedCreateWithoutTagInput> | ResearcherTagCreateWithoutTagInput[] | ResearcherTagUncheckedCreateWithoutTagInput[]
    connectOrCreate?: ResearcherTagCreateOrConnectWithoutTagInput | ResearcherTagCreateOrConnectWithoutTagInput[]
    createMany?: ResearcherTagCreateManyTagInputEnvelope
    connect?: ResearcherTagWhereUniqueInput | ResearcherTagWhereUniqueInput[]
  }

  export type NewsTagUpdateManyWithoutTagNestedInput = {
    create?: XOR<NewsTagCreateWithoutTagInput, NewsTagUncheckedCreateWithoutTagInput> | NewsTagCreateWithoutTagInput[] | NewsTagUncheckedCreateWithoutTagInput[]
    connectOrCreate?: NewsTagCreateOrConnectWithoutTagInput | NewsTagCreateOrConnectWithoutTagInput[]
    upsert?: NewsTagUpsertWithWhereUniqueWithoutTagInput | NewsTagUpsertWithWhereUniqueWithoutTagInput[]
    createMany?: NewsTagCreateManyTagInputEnvelope
    set?: NewsTagWhereUniqueInput | NewsTagWhereUniqueInput[]
    disconnect?: NewsTagWhereUniqueInput | NewsTagWhereUniqueInput[]
    delete?: NewsTagWhereUniqueInput | NewsTagWhereUniqueInput[]
    connect?: NewsTagWhereUniqueInput | NewsTagWhereUniqueInput[]
    update?: NewsTagUpdateWithWhereUniqueWithoutTagInput | NewsTagUpdateWithWhereUniqueWithoutTagInput[]
    updateMany?: NewsTagUpdateManyWithWhereWithoutTagInput | NewsTagUpdateManyWithWhereWithoutTagInput[]
    deleteMany?: NewsTagScalarWhereInput | NewsTagScalarWhereInput[]
  }

  export type ExpeditionTagUpdateManyWithoutTagNestedInput = {
    create?: XOR<ExpeditionTagCreateWithoutTagInput, ExpeditionTagUncheckedCreateWithoutTagInput> | ExpeditionTagCreateWithoutTagInput[] | ExpeditionTagUncheckedCreateWithoutTagInput[]
    connectOrCreate?: ExpeditionTagCreateOrConnectWithoutTagInput | ExpeditionTagCreateOrConnectWithoutTagInput[]
    upsert?: ExpeditionTagUpsertWithWhereUniqueWithoutTagInput | ExpeditionTagUpsertWithWhereUniqueWithoutTagInput[]
    createMany?: ExpeditionTagCreateManyTagInputEnvelope
    set?: ExpeditionTagWhereUniqueInput | ExpeditionTagWhereUniqueInput[]
    disconnect?: ExpeditionTagWhereUniqueInput | ExpeditionTagWhereUniqueInput[]
    delete?: ExpeditionTagWhereUniqueInput | ExpeditionTagWhereUniqueInput[]
    connect?: ExpeditionTagWhereUniqueInput | ExpeditionTagWhereUniqueInput[]
    update?: ExpeditionTagUpdateWithWhereUniqueWithoutTagInput | ExpeditionTagUpdateWithWhereUniqueWithoutTagInput[]
    updateMany?: ExpeditionTagUpdateManyWithWhereWithoutTagInput | ExpeditionTagUpdateManyWithWhereWithoutTagInput[]
    deleteMany?: ExpeditionTagScalarWhereInput | ExpeditionTagScalarWhereInput[]
  }

  export type ResearcherTagUpdateManyWithoutTagNestedInput = {
    create?: XOR<ResearcherTagCreateWithoutTagInput, ResearcherTagUncheckedCreateWithoutTagInput> | ResearcherTagCreateWithoutTagInput[] | ResearcherTagUncheckedCreateWithoutTagInput[]
    connectOrCreate?: ResearcherTagCreateOrConnectWithoutTagInput | ResearcherTagCreateOrConnectWithoutTagInput[]
    upsert?: ResearcherTagUpsertWithWhereUniqueWithoutTagInput | ResearcherTagUpsertWithWhereUniqueWithoutTagInput[]
    createMany?: ResearcherTagCreateManyTagInputEnvelope
    set?: ResearcherTagWhereUniqueInput | ResearcherTagWhereUniqueInput[]
    disconnect?: ResearcherTagWhereUniqueInput | ResearcherTagWhereUniqueInput[]
    delete?: ResearcherTagWhereUniqueInput | ResearcherTagWhereUniqueInput[]
    connect?: ResearcherTagWhereUniqueInput | ResearcherTagWhereUniqueInput[]
    update?: ResearcherTagUpdateWithWhereUniqueWithoutTagInput | ResearcherTagUpdateWithWhereUniqueWithoutTagInput[]
    updateMany?: ResearcherTagUpdateManyWithWhereWithoutTagInput | ResearcherTagUpdateManyWithWhereWithoutTagInput[]
    deleteMany?: ResearcherTagScalarWhereInput | ResearcherTagScalarWhereInput[]
  }

  export type NewsTagUncheckedUpdateManyWithoutTagNestedInput = {
    create?: XOR<NewsTagCreateWithoutTagInput, NewsTagUncheckedCreateWithoutTagInput> | NewsTagCreateWithoutTagInput[] | NewsTagUncheckedCreateWithoutTagInput[]
    connectOrCreate?: NewsTagCreateOrConnectWithoutTagInput | NewsTagCreateOrConnectWithoutTagInput[]
    upsert?: NewsTagUpsertWithWhereUniqueWithoutTagInput | NewsTagUpsertWithWhereUniqueWithoutTagInput[]
    createMany?: NewsTagCreateManyTagInputEnvelope
    set?: NewsTagWhereUniqueInput | NewsTagWhereUniqueInput[]
    disconnect?: NewsTagWhereUniqueInput | NewsTagWhereUniqueInput[]
    delete?: NewsTagWhereUniqueInput | NewsTagWhereUniqueInput[]
    connect?: NewsTagWhereUniqueInput | NewsTagWhereUniqueInput[]
    update?: NewsTagUpdateWithWhereUniqueWithoutTagInput | NewsTagUpdateWithWhereUniqueWithoutTagInput[]
    updateMany?: NewsTagUpdateManyWithWhereWithoutTagInput | NewsTagUpdateManyWithWhereWithoutTagInput[]
    deleteMany?: NewsTagScalarWhereInput | NewsTagScalarWhereInput[]
  }

  export type ExpeditionTagUncheckedUpdateManyWithoutTagNestedInput = {
    create?: XOR<ExpeditionTagCreateWithoutTagInput, ExpeditionTagUncheckedCreateWithoutTagInput> | ExpeditionTagCreateWithoutTagInput[] | ExpeditionTagUncheckedCreateWithoutTagInput[]
    connectOrCreate?: ExpeditionTagCreateOrConnectWithoutTagInput | ExpeditionTagCreateOrConnectWithoutTagInput[]
    upsert?: ExpeditionTagUpsertWithWhereUniqueWithoutTagInput | ExpeditionTagUpsertWithWhereUniqueWithoutTagInput[]
    createMany?: ExpeditionTagCreateManyTagInputEnvelope
    set?: ExpeditionTagWhereUniqueInput | ExpeditionTagWhereUniqueInput[]
    disconnect?: ExpeditionTagWhereUniqueInput | ExpeditionTagWhereUniqueInput[]
    delete?: ExpeditionTagWhereUniqueInput | ExpeditionTagWhereUniqueInput[]
    connect?: ExpeditionTagWhereUniqueInput | ExpeditionTagWhereUniqueInput[]
    update?: ExpeditionTagUpdateWithWhereUniqueWithoutTagInput | ExpeditionTagUpdateWithWhereUniqueWithoutTagInput[]
    updateMany?: ExpeditionTagUpdateManyWithWhereWithoutTagInput | ExpeditionTagUpdateManyWithWhereWithoutTagInput[]
    deleteMany?: ExpeditionTagScalarWhereInput | ExpeditionTagScalarWhereInput[]
  }

  export type ResearcherTagUncheckedUpdateManyWithoutTagNestedInput = {
    create?: XOR<ResearcherTagCreateWithoutTagInput, ResearcherTagUncheckedCreateWithoutTagInput> | ResearcherTagCreateWithoutTagInput[] | ResearcherTagUncheckedCreateWithoutTagInput[]
    connectOrCreate?: ResearcherTagCreateOrConnectWithoutTagInput | ResearcherTagCreateOrConnectWithoutTagInput[]
    upsert?: ResearcherTagUpsertWithWhereUniqueWithoutTagInput | ResearcherTagUpsertWithWhereUniqueWithoutTagInput[]
    createMany?: ResearcherTagCreateManyTagInputEnvelope
    set?: ResearcherTagWhereUniqueInput | ResearcherTagWhereUniqueInput[]
    disconnect?: ResearcherTagWhereUniqueInput | ResearcherTagWhereUniqueInput[]
    delete?: ResearcherTagWhereUniqueInput | ResearcherTagWhereUniqueInput[]
    connect?: ResearcherTagWhereUniqueInput | ResearcherTagWhereUniqueInput[]
    update?: ResearcherTagUpdateWithWhereUniqueWithoutTagInput | ResearcherTagUpdateWithWhereUniqueWithoutTagInput[]
    updateMany?: ResearcherTagUpdateManyWithWhereWithoutTagInput | ResearcherTagUpdateManyWithWhereWithoutTagInput[]
    deleteMany?: ResearcherTagScalarWhereInput | ResearcherTagScalarWhereInput[]
  }

  export type NewsCreateNestedOneWithoutTagsInput = {
    create?: XOR<NewsCreateWithoutTagsInput, NewsUncheckedCreateWithoutTagsInput>
    connectOrCreate?: NewsCreateOrConnectWithoutTagsInput
    connect?: NewsWhereUniqueInput
  }

  export type TagCreateNestedOneWithoutNewsInput = {
    create?: XOR<TagCreateWithoutNewsInput, TagUncheckedCreateWithoutNewsInput>
    connectOrCreate?: TagCreateOrConnectWithoutNewsInput
    connect?: TagWhereUniqueInput
  }

  export type NewsUpdateOneRequiredWithoutTagsNestedInput = {
    create?: XOR<NewsCreateWithoutTagsInput, NewsUncheckedCreateWithoutTagsInput>
    connectOrCreate?: NewsCreateOrConnectWithoutTagsInput
    upsert?: NewsUpsertWithoutTagsInput
    connect?: NewsWhereUniqueInput
    update?: XOR<XOR<NewsUpdateToOneWithWhereWithoutTagsInput, NewsUpdateWithoutTagsInput>, NewsUncheckedUpdateWithoutTagsInput>
  }

  export type TagUpdateOneRequiredWithoutNewsNestedInput = {
    create?: XOR<TagCreateWithoutNewsInput, TagUncheckedCreateWithoutNewsInput>
    connectOrCreate?: TagCreateOrConnectWithoutNewsInput
    upsert?: TagUpsertWithoutNewsInput
    connect?: TagWhereUniqueInput
    update?: XOR<XOR<TagUpdateToOneWithWhereWithoutNewsInput, TagUpdateWithoutNewsInput>, TagUncheckedUpdateWithoutNewsInput>
  }

  export type ExpeditionCreateNestedOneWithoutResearchersInput = {
    create?: XOR<ExpeditionCreateWithoutResearchersInput, ExpeditionUncheckedCreateWithoutResearchersInput>
    connectOrCreate?: ExpeditionCreateOrConnectWithoutResearchersInput
    connect?: ExpeditionWhereUniqueInput
  }

  export type ResearcherCreateNestedOneWithoutExpeditionsInput = {
    create?: XOR<ResearcherCreateWithoutExpeditionsInput, ResearcherUncheckedCreateWithoutExpeditionsInput>
    connectOrCreate?: ResearcherCreateOrConnectWithoutExpeditionsInput
    connect?: ResearcherWhereUniqueInput
  }

  export type ExpeditionUpdateOneRequiredWithoutResearchersNestedInput = {
    create?: XOR<ExpeditionCreateWithoutResearchersInput, ExpeditionUncheckedCreateWithoutResearchersInput>
    connectOrCreate?: ExpeditionCreateOrConnectWithoutResearchersInput
    upsert?: ExpeditionUpsertWithoutResearchersInput
    connect?: ExpeditionWhereUniqueInput
    update?: XOR<XOR<ExpeditionUpdateToOneWithWhereWithoutResearchersInput, ExpeditionUpdateWithoutResearchersInput>, ExpeditionUncheckedUpdateWithoutResearchersInput>
  }

  export type ResearcherUpdateOneRequiredWithoutExpeditionsNestedInput = {
    create?: XOR<ResearcherCreateWithoutExpeditionsInput, ResearcherUncheckedCreateWithoutExpeditionsInput>
    connectOrCreate?: ResearcherCreateOrConnectWithoutExpeditionsInput
    upsert?: ResearcherUpsertWithoutExpeditionsInput
    connect?: ResearcherWhereUniqueInput
    update?: XOR<XOR<ResearcherUpdateToOneWithWhereWithoutExpeditionsInput, ResearcherUpdateWithoutExpeditionsInput>, ResearcherUncheckedUpdateWithoutExpeditionsInput>
  }

  export type ExpeditionCreateNestedOneWithoutTagsInput = {
    create?: XOR<ExpeditionCreateWithoutTagsInput, ExpeditionUncheckedCreateWithoutTagsInput>
    connectOrCreate?: ExpeditionCreateOrConnectWithoutTagsInput
    connect?: ExpeditionWhereUniqueInput
  }

  export type TagCreateNestedOneWithoutExpeditionsInput = {
    create?: XOR<TagCreateWithoutExpeditionsInput, TagUncheckedCreateWithoutExpeditionsInput>
    connectOrCreate?: TagCreateOrConnectWithoutExpeditionsInput
    connect?: TagWhereUniqueInput
  }

  export type ExpeditionUpdateOneRequiredWithoutTagsNestedInput = {
    create?: XOR<ExpeditionCreateWithoutTagsInput, ExpeditionUncheckedCreateWithoutTagsInput>
    connectOrCreate?: ExpeditionCreateOrConnectWithoutTagsInput
    upsert?: ExpeditionUpsertWithoutTagsInput
    connect?: ExpeditionWhereUniqueInput
    update?: XOR<XOR<ExpeditionUpdateToOneWithWhereWithoutTagsInput, ExpeditionUpdateWithoutTagsInput>, ExpeditionUncheckedUpdateWithoutTagsInput>
  }

  export type TagUpdateOneRequiredWithoutExpeditionsNestedInput = {
    create?: XOR<TagCreateWithoutExpeditionsInput, TagUncheckedCreateWithoutExpeditionsInput>
    connectOrCreate?: TagCreateOrConnectWithoutExpeditionsInput
    upsert?: TagUpsertWithoutExpeditionsInput
    connect?: TagWhereUniqueInput
    update?: XOR<XOR<TagUpdateToOneWithWhereWithoutExpeditionsInput, TagUpdateWithoutExpeditionsInput>, TagUncheckedUpdateWithoutExpeditionsInput>
  }

  export type ResearcherCreateNestedOneWithoutTagsInput = {
    create?: XOR<ResearcherCreateWithoutTagsInput, ResearcherUncheckedCreateWithoutTagsInput>
    connectOrCreate?: ResearcherCreateOrConnectWithoutTagsInput
    connect?: ResearcherWhereUniqueInput
  }

  export type TagCreateNestedOneWithoutResearchersInput = {
    create?: XOR<TagCreateWithoutResearchersInput, TagUncheckedCreateWithoutResearchersInput>
    connectOrCreate?: TagCreateOrConnectWithoutResearchersInput
    connect?: TagWhereUniqueInput
  }

  export type ResearcherUpdateOneRequiredWithoutTagsNestedInput = {
    create?: XOR<ResearcherCreateWithoutTagsInput, ResearcherUncheckedCreateWithoutTagsInput>
    connectOrCreate?: ResearcherCreateOrConnectWithoutTagsInput
    upsert?: ResearcherUpsertWithoutTagsInput
    connect?: ResearcherWhereUniqueInput
    update?: XOR<XOR<ResearcherUpdateToOneWithWhereWithoutTagsInput, ResearcherUpdateWithoutTagsInput>, ResearcherUncheckedUpdateWithoutTagsInput>
  }

  export type TagUpdateOneRequiredWithoutResearchersNestedInput = {
    create?: XOR<TagCreateWithoutResearchersInput, TagUncheckedCreateWithoutResearchersInput>
    connectOrCreate?: TagCreateOrConnectWithoutResearchersInput
    upsert?: TagUpsertWithoutResearchersInput
    connect?: TagWhereUniqueInput
    update?: XOR<XOR<TagUpdateToOneWithWhereWithoutResearchersInput, TagUpdateWithoutResearchersInput>, TagUncheckedUpdateWithoutResearchersInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type PublicSummaryCreateWithoutNewsInput = {
    id?: string
    summary: string
    language?: string
    model?: string | null
    generatedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PublicSummaryUncheckedCreateWithoutNewsInput = {
    id?: string
    summary: string
    language?: string
    model?: string | null
    generatedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PublicSummaryCreateOrConnectWithoutNewsInput = {
    where: PublicSummaryWhereUniqueInput
    create: XOR<PublicSummaryCreateWithoutNewsInput, PublicSummaryUncheckedCreateWithoutNewsInput>
  }

  export type PhotoCreateWithoutNewsInput = {
    id?: string
    url: string
    caption?: string | null
    altText?: string | null
    credit?: string | null
    sourceUrl?: string | null
    sourceType?: string | null
    createdAt?: Date | string
    expedition?: ExpeditionCreateNestedOneWithoutPhotosInput
  }

  export type PhotoUncheckedCreateWithoutNewsInput = {
    id?: string
    url: string
    caption?: string | null
    altText?: string | null
    credit?: string | null
    sourceUrl?: string | null
    sourceType?: string | null
    expeditionId?: string | null
    createdAt?: Date | string
  }

  export type PhotoCreateOrConnectWithoutNewsInput = {
    where: PhotoWhereUniqueInput
    create: XOR<PhotoCreateWithoutNewsInput, PhotoUncheckedCreateWithoutNewsInput>
  }

  export type PhotoCreateManyNewsInputEnvelope = {
    data: PhotoCreateManyNewsInput | PhotoCreateManyNewsInput[]
    skipDuplicates?: boolean
  }

  export type NewsTagCreateWithoutNewsInput = {
    tag: TagCreateNestedOneWithoutNewsInput
  }

  export type NewsTagUncheckedCreateWithoutNewsInput = {
    tagId: string
  }

  export type NewsTagCreateOrConnectWithoutNewsInput = {
    where: NewsTagWhereUniqueInput
    create: XOR<NewsTagCreateWithoutNewsInput, NewsTagUncheckedCreateWithoutNewsInput>
  }

  export type NewsTagCreateManyNewsInputEnvelope = {
    data: NewsTagCreateManyNewsInput | NewsTagCreateManyNewsInput[]
    skipDuplicates?: boolean
  }

  export type PublicSummaryUpsertWithoutNewsInput = {
    update: XOR<PublicSummaryUpdateWithoutNewsInput, PublicSummaryUncheckedUpdateWithoutNewsInput>
    create: XOR<PublicSummaryCreateWithoutNewsInput, PublicSummaryUncheckedCreateWithoutNewsInput>
    where?: PublicSummaryWhereInput
  }

  export type PublicSummaryUpdateToOneWithWhereWithoutNewsInput = {
    where?: PublicSummaryWhereInput
    data: XOR<PublicSummaryUpdateWithoutNewsInput, PublicSummaryUncheckedUpdateWithoutNewsInput>
  }

  export type PublicSummaryUpdateWithoutNewsInput = {
    id?: StringFieldUpdateOperationsInput | string
    summary?: StringFieldUpdateOperationsInput | string
    language?: StringFieldUpdateOperationsInput | string
    model?: NullableStringFieldUpdateOperationsInput | string | null
    generatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PublicSummaryUncheckedUpdateWithoutNewsInput = {
    id?: StringFieldUpdateOperationsInput | string
    summary?: StringFieldUpdateOperationsInput | string
    language?: StringFieldUpdateOperationsInput | string
    model?: NullableStringFieldUpdateOperationsInput | string | null
    generatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PhotoUpsertWithWhereUniqueWithoutNewsInput = {
    where: PhotoWhereUniqueInput
    update: XOR<PhotoUpdateWithoutNewsInput, PhotoUncheckedUpdateWithoutNewsInput>
    create: XOR<PhotoCreateWithoutNewsInput, PhotoUncheckedCreateWithoutNewsInput>
  }

  export type PhotoUpdateWithWhereUniqueWithoutNewsInput = {
    where: PhotoWhereUniqueInput
    data: XOR<PhotoUpdateWithoutNewsInput, PhotoUncheckedUpdateWithoutNewsInput>
  }

  export type PhotoUpdateManyWithWhereWithoutNewsInput = {
    where: PhotoScalarWhereInput
    data: XOR<PhotoUpdateManyMutationInput, PhotoUncheckedUpdateManyWithoutNewsInput>
  }

  export type PhotoScalarWhereInput = {
    AND?: PhotoScalarWhereInput | PhotoScalarWhereInput[]
    OR?: PhotoScalarWhereInput[]
    NOT?: PhotoScalarWhereInput | PhotoScalarWhereInput[]
    id?: StringFilter<"Photo"> | string
    url?: StringFilter<"Photo"> | string
    caption?: StringNullableFilter<"Photo"> | string | null
    altText?: StringNullableFilter<"Photo"> | string | null
    credit?: StringNullableFilter<"Photo"> | string | null
    sourceUrl?: StringNullableFilter<"Photo"> | string | null
    sourceType?: StringNullableFilter<"Photo"> | string | null
    newsId?: StringNullableFilter<"Photo"> | string | null
    expeditionId?: StringNullableFilter<"Photo"> | string | null
    createdAt?: DateTimeFilter<"Photo"> | Date | string
  }

  export type NewsTagUpsertWithWhereUniqueWithoutNewsInput = {
    where: NewsTagWhereUniqueInput
    update: XOR<NewsTagUpdateWithoutNewsInput, NewsTagUncheckedUpdateWithoutNewsInput>
    create: XOR<NewsTagCreateWithoutNewsInput, NewsTagUncheckedCreateWithoutNewsInput>
  }

  export type NewsTagUpdateWithWhereUniqueWithoutNewsInput = {
    where: NewsTagWhereUniqueInput
    data: XOR<NewsTagUpdateWithoutNewsInput, NewsTagUncheckedUpdateWithoutNewsInput>
  }

  export type NewsTagUpdateManyWithWhereWithoutNewsInput = {
    where: NewsTagScalarWhereInput
    data: XOR<NewsTagUpdateManyMutationInput, NewsTagUncheckedUpdateManyWithoutNewsInput>
  }

  export type NewsTagScalarWhereInput = {
    AND?: NewsTagScalarWhereInput | NewsTagScalarWhereInput[]
    OR?: NewsTagScalarWhereInput[]
    NOT?: NewsTagScalarWhereInput | NewsTagScalarWhereInput[]
    newsId?: StringFilter<"NewsTag"> | string
    tagId?: StringFilter<"NewsTag"> | string
  }

  export type ExpeditionResearcherCreateWithoutExpeditionInput = {
    researcher: ResearcherCreateNestedOneWithoutExpeditionsInput
  }

  export type ExpeditionResearcherUncheckedCreateWithoutExpeditionInput = {
    researcherId: string
  }

  export type ExpeditionResearcherCreateOrConnectWithoutExpeditionInput = {
    where: ExpeditionResearcherWhereUniqueInput
    create: XOR<ExpeditionResearcherCreateWithoutExpeditionInput, ExpeditionResearcherUncheckedCreateWithoutExpeditionInput>
  }

  export type ExpeditionResearcherCreateManyExpeditionInputEnvelope = {
    data: ExpeditionResearcherCreateManyExpeditionInput | ExpeditionResearcherCreateManyExpeditionInput[]
    skipDuplicates?: boolean
  }

  export type PhotoCreateWithoutExpeditionInput = {
    id?: string
    url: string
    caption?: string | null
    altText?: string | null
    credit?: string | null
    sourceUrl?: string | null
    sourceType?: string | null
    createdAt?: Date | string
    news?: NewsCreateNestedOneWithoutPhotosInput
  }

  export type PhotoUncheckedCreateWithoutExpeditionInput = {
    id?: string
    url: string
    caption?: string | null
    altText?: string | null
    credit?: string | null
    sourceUrl?: string | null
    sourceType?: string | null
    newsId?: string | null
    createdAt?: Date | string
  }

  export type PhotoCreateOrConnectWithoutExpeditionInput = {
    where: PhotoWhereUniqueInput
    create: XOR<PhotoCreateWithoutExpeditionInput, PhotoUncheckedCreateWithoutExpeditionInput>
  }

  export type PhotoCreateManyExpeditionInputEnvelope = {
    data: PhotoCreateManyExpeditionInput | PhotoCreateManyExpeditionInput[]
    skipDuplicates?: boolean
  }

  export type ExpeditionTagCreateWithoutExpeditionInput = {
    tag: TagCreateNestedOneWithoutExpeditionsInput
  }

  export type ExpeditionTagUncheckedCreateWithoutExpeditionInput = {
    tagId: string
  }

  export type ExpeditionTagCreateOrConnectWithoutExpeditionInput = {
    where: ExpeditionTagWhereUniqueInput
    create: XOR<ExpeditionTagCreateWithoutExpeditionInput, ExpeditionTagUncheckedCreateWithoutExpeditionInput>
  }

  export type ExpeditionTagCreateManyExpeditionInputEnvelope = {
    data: ExpeditionTagCreateManyExpeditionInput | ExpeditionTagCreateManyExpeditionInput[]
    skipDuplicates?: boolean
  }

  export type ExpeditionResearcherUpsertWithWhereUniqueWithoutExpeditionInput = {
    where: ExpeditionResearcherWhereUniqueInput
    update: XOR<ExpeditionResearcherUpdateWithoutExpeditionInput, ExpeditionResearcherUncheckedUpdateWithoutExpeditionInput>
    create: XOR<ExpeditionResearcherCreateWithoutExpeditionInput, ExpeditionResearcherUncheckedCreateWithoutExpeditionInput>
  }

  export type ExpeditionResearcherUpdateWithWhereUniqueWithoutExpeditionInput = {
    where: ExpeditionResearcherWhereUniqueInput
    data: XOR<ExpeditionResearcherUpdateWithoutExpeditionInput, ExpeditionResearcherUncheckedUpdateWithoutExpeditionInput>
  }

  export type ExpeditionResearcherUpdateManyWithWhereWithoutExpeditionInput = {
    where: ExpeditionResearcherScalarWhereInput
    data: XOR<ExpeditionResearcherUpdateManyMutationInput, ExpeditionResearcherUncheckedUpdateManyWithoutExpeditionInput>
  }

  export type ExpeditionResearcherScalarWhereInput = {
    AND?: ExpeditionResearcherScalarWhereInput | ExpeditionResearcherScalarWhereInput[]
    OR?: ExpeditionResearcherScalarWhereInput[]
    NOT?: ExpeditionResearcherScalarWhereInput | ExpeditionResearcherScalarWhereInput[]
    expeditionId?: StringFilter<"ExpeditionResearcher"> | string
    researcherId?: StringFilter<"ExpeditionResearcher"> | string
  }

  export type PhotoUpsertWithWhereUniqueWithoutExpeditionInput = {
    where: PhotoWhereUniqueInput
    update: XOR<PhotoUpdateWithoutExpeditionInput, PhotoUncheckedUpdateWithoutExpeditionInput>
    create: XOR<PhotoCreateWithoutExpeditionInput, PhotoUncheckedCreateWithoutExpeditionInput>
  }

  export type PhotoUpdateWithWhereUniqueWithoutExpeditionInput = {
    where: PhotoWhereUniqueInput
    data: XOR<PhotoUpdateWithoutExpeditionInput, PhotoUncheckedUpdateWithoutExpeditionInput>
  }

  export type PhotoUpdateManyWithWhereWithoutExpeditionInput = {
    where: PhotoScalarWhereInput
    data: XOR<PhotoUpdateManyMutationInput, PhotoUncheckedUpdateManyWithoutExpeditionInput>
  }

  export type ExpeditionTagUpsertWithWhereUniqueWithoutExpeditionInput = {
    where: ExpeditionTagWhereUniqueInput
    update: XOR<ExpeditionTagUpdateWithoutExpeditionInput, ExpeditionTagUncheckedUpdateWithoutExpeditionInput>
    create: XOR<ExpeditionTagCreateWithoutExpeditionInput, ExpeditionTagUncheckedCreateWithoutExpeditionInput>
  }

  export type ExpeditionTagUpdateWithWhereUniqueWithoutExpeditionInput = {
    where: ExpeditionTagWhereUniqueInput
    data: XOR<ExpeditionTagUpdateWithoutExpeditionInput, ExpeditionTagUncheckedUpdateWithoutExpeditionInput>
  }

  export type ExpeditionTagUpdateManyWithWhereWithoutExpeditionInput = {
    where: ExpeditionTagScalarWhereInput
    data: XOR<ExpeditionTagUpdateManyMutationInput, ExpeditionTagUncheckedUpdateManyWithoutExpeditionInput>
  }

  export type ExpeditionTagScalarWhereInput = {
    AND?: ExpeditionTagScalarWhereInput | ExpeditionTagScalarWhereInput[]
    OR?: ExpeditionTagScalarWhereInput[]
    NOT?: ExpeditionTagScalarWhereInput | ExpeditionTagScalarWhereInput[]
    expeditionId?: StringFilter<"ExpeditionTag"> | string
    tagId?: StringFilter<"ExpeditionTag"> | string
  }

  export type ExpeditionResearcherCreateWithoutResearcherInput = {
    expedition: ExpeditionCreateNestedOneWithoutResearchersInput
  }

  export type ExpeditionResearcherUncheckedCreateWithoutResearcherInput = {
    expeditionId: string
  }

  export type ExpeditionResearcherCreateOrConnectWithoutResearcherInput = {
    where: ExpeditionResearcherWhereUniqueInput
    create: XOR<ExpeditionResearcherCreateWithoutResearcherInput, ExpeditionResearcherUncheckedCreateWithoutResearcherInput>
  }

  export type ExpeditionResearcherCreateManyResearcherInputEnvelope = {
    data: ExpeditionResearcherCreateManyResearcherInput | ExpeditionResearcherCreateManyResearcherInput[]
    skipDuplicates?: boolean
  }

  export type ResearcherTagCreateWithoutResearcherInput = {
    tag: TagCreateNestedOneWithoutResearchersInput
  }

  export type ResearcherTagUncheckedCreateWithoutResearcherInput = {
    tagId: string
  }

  export type ResearcherTagCreateOrConnectWithoutResearcherInput = {
    where: ResearcherTagWhereUniqueInput
    create: XOR<ResearcherTagCreateWithoutResearcherInput, ResearcherTagUncheckedCreateWithoutResearcherInput>
  }

  export type ResearcherTagCreateManyResearcherInputEnvelope = {
    data: ResearcherTagCreateManyResearcherInput | ResearcherTagCreateManyResearcherInput[]
    skipDuplicates?: boolean
  }

  export type ExpeditionResearcherUpsertWithWhereUniqueWithoutResearcherInput = {
    where: ExpeditionResearcherWhereUniqueInput
    update: XOR<ExpeditionResearcherUpdateWithoutResearcherInput, ExpeditionResearcherUncheckedUpdateWithoutResearcherInput>
    create: XOR<ExpeditionResearcherCreateWithoutResearcherInput, ExpeditionResearcherUncheckedCreateWithoutResearcherInput>
  }

  export type ExpeditionResearcherUpdateWithWhereUniqueWithoutResearcherInput = {
    where: ExpeditionResearcherWhereUniqueInput
    data: XOR<ExpeditionResearcherUpdateWithoutResearcherInput, ExpeditionResearcherUncheckedUpdateWithoutResearcherInput>
  }

  export type ExpeditionResearcherUpdateManyWithWhereWithoutResearcherInput = {
    where: ExpeditionResearcherScalarWhereInput
    data: XOR<ExpeditionResearcherUpdateManyMutationInput, ExpeditionResearcherUncheckedUpdateManyWithoutResearcherInput>
  }

  export type ResearcherTagUpsertWithWhereUniqueWithoutResearcherInput = {
    where: ResearcherTagWhereUniqueInput
    update: XOR<ResearcherTagUpdateWithoutResearcherInput, ResearcherTagUncheckedUpdateWithoutResearcherInput>
    create: XOR<ResearcherTagCreateWithoutResearcherInput, ResearcherTagUncheckedCreateWithoutResearcherInput>
  }

  export type ResearcherTagUpdateWithWhereUniqueWithoutResearcherInput = {
    where: ResearcherTagWhereUniqueInput
    data: XOR<ResearcherTagUpdateWithoutResearcherInput, ResearcherTagUncheckedUpdateWithoutResearcherInput>
  }

  export type ResearcherTagUpdateManyWithWhereWithoutResearcherInput = {
    where: ResearcherTagScalarWhereInput
    data: XOR<ResearcherTagUpdateManyMutationInput, ResearcherTagUncheckedUpdateManyWithoutResearcherInput>
  }

  export type ResearcherTagScalarWhereInput = {
    AND?: ResearcherTagScalarWhereInput | ResearcherTagScalarWhereInput[]
    OR?: ResearcherTagScalarWhereInput[]
    NOT?: ResearcherTagScalarWhereInput | ResearcherTagScalarWhereInput[]
    researcherId?: StringFilter<"ResearcherTag"> | string
    tagId?: StringFilter<"ResearcherTag"> | string
  }

  export type NewsCreateWithoutPhotosInput = {
    id?: string
    title: string
    slug: string
    summaryShort?: string | null
    sourceDescription?: string | null
    contentFull?: string | null
    region: string
    theme: string
    year: number
    type?: string | null
    publishedDate: Date | string
    sourceUrl: string
    sourceItemKey: string
    createdAt?: Date | string
    updatedAt?: Date | string
    publicSummary?: PublicSummaryCreateNestedOneWithoutNewsInput
    tags?: NewsTagCreateNestedManyWithoutNewsInput
  }

  export type NewsUncheckedCreateWithoutPhotosInput = {
    id?: string
    title: string
    slug: string
    summaryShort?: string | null
    sourceDescription?: string | null
    contentFull?: string | null
    region: string
    theme: string
    year: number
    type?: string | null
    publishedDate: Date | string
    sourceUrl: string
    sourceItemKey: string
    createdAt?: Date | string
    updatedAt?: Date | string
    publicSummary?: PublicSummaryUncheckedCreateNestedOneWithoutNewsInput
    tags?: NewsTagUncheckedCreateNestedManyWithoutNewsInput
  }

  export type NewsCreateOrConnectWithoutPhotosInput = {
    where: NewsWhereUniqueInput
    create: XOR<NewsCreateWithoutPhotosInput, NewsUncheckedCreateWithoutPhotosInput>
  }

  export type ExpeditionCreateWithoutPhotosInput = {
    id?: string
    name: string
    description?: string | null
    region: string
    startDate?: Date | string | null
    endDate?: Date | string | null
    sourceUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    researchers?: ExpeditionResearcherCreateNestedManyWithoutExpeditionInput
    tags?: ExpeditionTagCreateNestedManyWithoutExpeditionInput
  }

  export type ExpeditionUncheckedCreateWithoutPhotosInput = {
    id?: string
    name: string
    description?: string | null
    region: string
    startDate?: Date | string | null
    endDate?: Date | string | null
    sourceUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    researchers?: ExpeditionResearcherUncheckedCreateNestedManyWithoutExpeditionInput
    tags?: ExpeditionTagUncheckedCreateNestedManyWithoutExpeditionInput
  }

  export type ExpeditionCreateOrConnectWithoutPhotosInput = {
    where: ExpeditionWhereUniqueInput
    create: XOR<ExpeditionCreateWithoutPhotosInput, ExpeditionUncheckedCreateWithoutPhotosInput>
  }

  export type NewsUpsertWithoutPhotosInput = {
    update: XOR<NewsUpdateWithoutPhotosInput, NewsUncheckedUpdateWithoutPhotosInput>
    create: XOR<NewsCreateWithoutPhotosInput, NewsUncheckedCreateWithoutPhotosInput>
    where?: NewsWhereInput
  }

  export type NewsUpdateToOneWithWhereWithoutPhotosInput = {
    where?: NewsWhereInput
    data: XOR<NewsUpdateWithoutPhotosInput, NewsUncheckedUpdateWithoutPhotosInput>
  }

  export type NewsUpdateWithoutPhotosInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    summaryShort?: NullableStringFieldUpdateOperationsInput | string | null
    sourceDescription?: NullableStringFieldUpdateOperationsInput | string | null
    contentFull?: NullableStringFieldUpdateOperationsInput | string | null
    region?: StringFieldUpdateOperationsInput | string
    theme?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    type?: NullableStringFieldUpdateOperationsInput | string | null
    publishedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    sourceUrl?: StringFieldUpdateOperationsInput | string
    sourceItemKey?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    publicSummary?: PublicSummaryUpdateOneWithoutNewsNestedInput
    tags?: NewsTagUpdateManyWithoutNewsNestedInput
  }

  export type NewsUncheckedUpdateWithoutPhotosInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    summaryShort?: NullableStringFieldUpdateOperationsInput | string | null
    sourceDescription?: NullableStringFieldUpdateOperationsInput | string | null
    contentFull?: NullableStringFieldUpdateOperationsInput | string | null
    region?: StringFieldUpdateOperationsInput | string
    theme?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    type?: NullableStringFieldUpdateOperationsInput | string | null
    publishedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    sourceUrl?: StringFieldUpdateOperationsInput | string
    sourceItemKey?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    publicSummary?: PublicSummaryUncheckedUpdateOneWithoutNewsNestedInput
    tags?: NewsTagUncheckedUpdateManyWithoutNewsNestedInput
  }

  export type ExpeditionUpsertWithoutPhotosInput = {
    update: XOR<ExpeditionUpdateWithoutPhotosInput, ExpeditionUncheckedUpdateWithoutPhotosInput>
    create: XOR<ExpeditionCreateWithoutPhotosInput, ExpeditionUncheckedCreateWithoutPhotosInput>
    where?: ExpeditionWhereInput
  }

  export type ExpeditionUpdateToOneWithWhereWithoutPhotosInput = {
    where?: ExpeditionWhereInput
    data: XOR<ExpeditionUpdateWithoutPhotosInput, ExpeditionUncheckedUpdateWithoutPhotosInput>
  }

  export type ExpeditionUpdateWithoutPhotosInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    region?: StringFieldUpdateOperationsInput | string
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sourceUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    researchers?: ExpeditionResearcherUpdateManyWithoutExpeditionNestedInput
    tags?: ExpeditionTagUpdateManyWithoutExpeditionNestedInput
  }

  export type ExpeditionUncheckedUpdateWithoutPhotosInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    region?: StringFieldUpdateOperationsInput | string
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sourceUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    researchers?: ExpeditionResearcherUncheckedUpdateManyWithoutExpeditionNestedInput
    tags?: ExpeditionTagUncheckedUpdateManyWithoutExpeditionNestedInput
  }

  export type NewsCreateWithoutPublicSummaryInput = {
    id?: string
    title: string
    slug: string
    summaryShort?: string | null
    sourceDescription?: string | null
    contentFull?: string | null
    region: string
    theme: string
    year: number
    type?: string | null
    publishedDate: Date | string
    sourceUrl: string
    sourceItemKey: string
    createdAt?: Date | string
    updatedAt?: Date | string
    photos?: PhotoCreateNestedManyWithoutNewsInput
    tags?: NewsTagCreateNestedManyWithoutNewsInput
  }

  export type NewsUncheckedCreateWithoutPublicSummaryInput = {
    id?: string
    title: string
    slug: string
    summaryShort?: string | null
    sourceDescription?: string | null
    contentFull?: string | null
    region: string
    theme: string
    year: number
    type?: string | null
    publishedDate: Date | string
    sourceUrl: string
    sourceItemKey: string
    createdAt?: Date | string
    updatedAt?: Date | string
    photos?: PhotoUncheckedCreateNestedManyWithoutNewsInput
    tags?: NewsTagUncheckedCreateNestedManyWithoutNewsInput
  }

  export type NewsCreateOrConnectWithoutPublicSummaryInput = {
    where: NewsWhereUniqueInput
    create: XOR<NewsCreateWithoutPublicSummaryInput, NewsUncheckedCreateWithoutPublicSummaryInput>
  }

  export type NewsUpsertWithoutPublicSummaryInput = {
    update: XOR<NewsUpdateWithoutPublicSummaryInput, NewsUncheckedUpdateWithoutPublicSummaryInput>
    create: XOR<NewsCreateWithoutPublicSummaryInput, NewsUncheckedCreateWithoutPublicSummaryInput>
    where?: NewsWhereInput
  }

  export type NewsUpdateToOneWithWhereWithoutPublicSummaryInput = {
    where?: NewsWhereInput
    data: XOR<NewsUpdateWithoutPublicSummaryInput, NewsUncheckedUpdateWithoutPublicSummaryInput>
  }

  export type NewsUpdateWithoutPublicSummaryInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    summaryShort?: NullableStringFieldUpdateOperationsInput | string | null
    sourceDescription?: NullableStringFieldUpdateOperationsInput | string | null
    contentFull?: NullableStringFieldUpdateOperationsInput | string | null
    region?: StringFieldUpdateOperationsInput | string
    theme?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    type?: NullableStringFieldUpdateOperationsInput | string | null
    publishedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    sourceUrl?: StringFieldUpdateOperationsInput | string
    sourceItemKey?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    photos?: PhotoUpdateManyWithoutNewsNestedInput
    tags?: NewsTagUpdateManyWithoutNewsNestedInput
  }

  export type NewsUncheckedUpdateWithoutPublicSummaryInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    summaryShort?: NullableStringFieldUpdateOperationsInput | string | null
    sourceDescription?: NullableStringFieldUpdateOperationsInput | string | null
    contentFull?: NullableStringFieldUpdateOperationsInput | string | null
    region?: StringFieldUpdateOperationsInput | string
    theme?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    type?: NullableStringFieldUpdateOperationsInput | string | null
    publishedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    sourceUrl?: StringFieldUpdateOperationsInput | string
    sourceItemKey?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    photos?: PhotoUncheckedUpdateManyWithoutNewsNestedInput
    tags?: NewsTagUncheckedUpdateManyWithoutNewsNestedInput
  }

  export type NewsTagCreateWithoutTagInput = {
    news: NewsCreateNestedOneWithoutTagsInput
  }

  export type NewsTagUncheckedCreateWithoutTagInput = {
    newsId: string
  }

  export type NewsTagCreateOrConnectWithoutTagInput = {
    where: NewsTagWhereUniqueInput
    create: XOR<NewsTagCreateWithoutTagInput, NewsTagUncheckedCreateWithoutTagInput>
  }

  export type NewsTagCreateManyTagInputEnvelope = {
    data: NewsTagCreateManyTagInput | NewsTagCreateManyTagInput[]
    skipDuplicates?: boolean
  }

  export type ExpeditionTagCreateWithoutTagInput = {
    expedition: ExpeditionCreateNestedOneWithoutTagsInput
  }

  export type ExpeditionTagUncheckedCreateWithoutTagInput = {
    expeditionId: string
  }

  export type ExpeditionTagCreateOrConnectWithoutTagInput = {
    where: ExpeditionTagWhereUniqueInput
    create: XOR<ExpeditionTagCreateWithoutTagInput, ExpeditionTagUncheckedCreateWithoutTagInput>
  }

  export type ExpeditionTagCreateManyTagInputEnvelope = {
    data: ExpeditionTagCreateManyTagInput | ExpeditionTagCreateManyTagInput[]
    skipDuplicates?: boolean
  }

  export type ResearcherTagCreateWithoutTagInput = {
    researcher: ResearcherCreateNestedOneWithoutTagsInput
  }

  export type ResearcherTagUncheckedCreateWithoutTagInput = {
    researcherId: string
  }

  export type ResearcherTagCreateOrConnectWithoutTagInput = {
    where: ResearcherTagWhereUniqueInput
    create: XOR<ResearcherTagCreateWithoutTagInput, ResearcherTagUncheckedCreateWithoutTagInput>
  }

  export type ResearcherTagCreateManyTagInputEnvelope = {
    data: ResearcherTagCreateManyTagInput | ResearcherTagCreateManyTagInput[]
    skipDuplicates?: boolean
  }

  export type NewsTagUpsertWithWhereUniqueWithoutTagInput = {
    where: NewsTagWhereUniqueInput
    update: XOR<NewsTagUpdateWithoutTagInput, NewsTagUncheckedUpdateWithoutTagInput>
    create: XOR<NewsTagCreateWithoutTagInput, NewsTagUncheckedCreateWithoutTagInput>
  }

  export type NewsTagUpdateWithWhereUniqueWithoutTagInput = {
    where: NewsTagWhereUniqueInput
    data: XOR<NewsTagUpdateWithoutTagInput, NewsTagUncheckedUpdateWithoutTagInput>
  }

  export type NewsTagUpdateManyWithWhereWithoutTagInput = {
    where: NewsTagScalarWhereInput
    data: XOR<NewsTagUpdateManyMutationInput, NewsTagUncheckedUpdateManyWithoutTagInput>
  }

  export type ExpeditionTagUpsertWithWhereUniqueWithoutTagInput = {
    where: ExpeditionTagWhereUniqueInput
    update: XOR<ExpeditionTagUpdateWithoutTagInput, ExpeditionTagUncheckedUpdateWithoutTagInput>
    create: XOR<ExpeditionTagCreateWithoutTagInput, ExpeditionTagUncheckedCreateWithoutTagInput>
  }

  export type ExpeditionTagUpdateWithWhereUniqueWithoutTagInput = {
    where: ExpeditionTagWhereUniqueInput
    data: XOR<ExpeditionTagUpdateWithoutTagInput, ExpeditionTagUncheckedUpdateWithoutTagInput>
  }

  export type ExpeditionTagUpdateManyWithWhereWithoutTagInput = {
    where: ExpeditionTagScalarWhereInput
    data: XOR<ExpeditionTagUpdateManyMutationInput, ExpeditionTagUncheckedUpdateManyWithoutTagInput>
  }

  export type ResearcherTagUpsertWithWhereUniqueWithoutTagInput = {
    where: ResearcherTagWhereUniqueInput
    update: XOR<ResearcherTagUpdateWithoutTagInput, ResearcherTagUncheckedUpdateWithoutTagInput>
    create: XOR<ResearcherTagCreateWithoutTagInput, ResearcherTagUncheckedCreateWithoutTagInput>
  }

  export type ResearcherTagUpdateWithWhereUniqueWithoutTagInput = {
    where: ResearcherTagWhereUniqueInput
    data: XOR<ResearcherTagUpdateWithoutTagInput, ResearcherTagUncheckedUpdateWithoutTagInput>
  }

  export type ResearcherTagUpdateManyWithWhereWithoutTagInput = {
    where: ResearcherTagScalarWhereInput
    data: XOR<ResearcherTagUpdateManyMutationInput, ResearcherTagUncheckedUpdateManyWithoutTagInput>
  }

  export type NewsCreateWithoutTagsInput = {
    id?: string
    title: string
    slug: string
    summaryShort?: string | null
    sourceDescription?: string | null
    contentFull?: string | null
    region: string
    theme: string
    year: number
    type?: string | null
    publishedDate: Date | string
    sourceUrl: string
    sourceItemKey: string
    createdAt?: Date | string
    updatedAt?: Date | string
    publicSummary?: PublicSummaryCreateNestedOneWithoutNewsInput
    photos?: PhotoCreateNestedManyWithoutNewsInput
  }

  export type NewsUncheckedCreateWithoutTagsInput = {
    id?: string
    title: string
    slug: string
    summaryShort?: string | null
    sourceDescription?: string | null
    contentFull?: string | null
    region: string
    theme: string
    year: number
    type?: string | null
    publishedDate: Date | string
    sourceUrl: string
    sourceItemKey: string
    createdAt?: Date | string
    updatedAt?: Date | string
    publicSummary?: PublicSummaryUncheckedCreateNestedOneWithoutNewsInput
    photos?: PhotoUncheckedCreateNestedManyWithoutNewsInput
  }

  export type NewsCreateOrConnectWithoutTagsInput = {
    where: NewsWhereUniqueInput
    create: XOR<NewsCreateWithoutTagsInput, NewsUncheckedCreateWithoutTagsInput>
  }

  export type TagCreateWithoutNewsInput = {
    id?: string
    name: string
    slug: string
    createdAt?: Date | string
    expeditions?: ExpeditionTagCreateNestedManyWithoutTagInput
    researchers?: ResearcherTagCreateNestedManyWithoutTagInput
  }

  export type TagUncheckedCreateWithoutNewsInput = {
    id?: string
    name: string
    slug: string
    createdAt?: Date | string
    expeditions?: ExpeditionTagUncheckedCreateNestedManyWithoutTagInput
    researchers?: ResearcherTagUncheckedCreateNestedManyWithoutTagInput
  }

  export type TagCreateOrConnectWithoutNewsInput = {
    where: TagWhereUniqueInput
    create: XOR<TagCreateWithoutNewsInput, TagUncheckedCreateWithoutNewsInput>
  }

  export type NewsUpsertWithoutTagsInput = {
    update: XOR<NewsUpdateWithoutTagsInput, NewsUncheckedUpdateWithoutTagsInput>
    create: XOR<NewsCreateWithoutTagsInput, NewsUncheckedCreateWithoutTagsInput>
    where?: NewsWhereInput
  }

  export type NewsUpdateToOneWithWhereWithoutTagsInput = {
    where?: NewsWhereInput
    data: XOR<NewsUpdateWithoutTagsInput, NewsUncheckedUpdateWithoutTagsInput>
  }

  export type NewsUpdateWithoutTagsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    summaryShort?: NullableStringFieldUpdateOperationsInput | string | null
    sourceDescription?: NullableStringFieldUpdateOperationsInput | string | null
    contentFull?: NullableStringFieldUpdateOperationsInput | string | null
    region?: StringFieldUpdateOperationsInput | string
    theme?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    type?: NullableStringFieldUpdateOperationsInput | string | null
    publishedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    sourceUrl?: StringFieldUpdateOperationsInput | string
    sourceItemKey?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    publicSummary?: PublicSummaryUpdateOneWithoutNewsNestedInput
    photos?: PhotoUpdateManyWithoutNewsNestedInput
  }

  export type NewsUncheckedUpdateWithoutTagsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    summaryShort?: NullableStringFieldUpdateOperationsInput | string | null
    sourceDescription?: NullableStringFieldUpdateOperationsInput | string | null
    contentFull?: NullableStringFieldUpdateOperationsInput | string | null
    region?: StringFieldUpdateOperationsInput | string
    theme?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    type?: NullableStringFieldUpdateOperationsInput | string | null
    publishedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    sourceUrl?: StringFieldUpdateOperationsInput | string
    sourceItemKey?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    publicSummary?: PublicSummaryUncheckedUpdateOneWithoutNewsNestedInput
    photos?: PhotoUncheckedUpdateManyWithoutNewsNestedInput
  }

  export type TagUpsertWithoutNewsInput = {
    update: XOR<TagUpdateWithoutNewsInput, TagUncheckedUpdateWithoutNewsInput>
    create: XOR<TagCreateWithoutNewsInput, TagUncheckedCreateWithoutNewsInput>
    where?: TagWhereInput
  }

  export type TagUpdateToOneWithWhereWithoutNewsInput = {
    where?: TagWhereInput
    data: XOR<TagUpdateWithoutNewsInput, TagUncheckedUpdateWithoutNewsInput>
  }

  export type TagUpdateWithoutNewsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expeditions?: ExpeditionTagUpdateManyWithoutTagNestedInput
    researchers?: ResearcherTagUpdateManyWithoutTagNestedInput
  }

  export type TagUncheckedUpdateWithoutNewsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expeditions?: ExpeditionTagUncheckedUpdateManyWithoutTagNestedInput
    researchers?: ResearcherTagUncheckedUpdateManyWithoutTagNestedInput
  }

  export type ExpeditionCreateWithoutResearchersInput = {
    id?: string
    name: string
    description?: string | null
    region: string
    startDate?: Date | string | null
    endDate?: Date | string | null
    sourceUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    photos?: PhotoCreateNestedManyWithoutExpeditionInput
    tags?: ExpeditionTagCreateNestedManyWithoutExpeditionInput
  }

  export type ExpeditionUncheckedCreateWithoutResearchersInput = {
    id?: string
    name: string
    description?: string | null
    region: string
    startDate?: Date | string | null
    endDate?: Date | string | null
    sourceUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    photos?: PhotoUncheckedCreateNestedManyWithoutExpeditionInput
    tags?: ExpeditionTagUncheckedCreateNestedManyWithoutExpeditionInput
  }

  export type ExpeditionCreateOrConnectWithoutResearchersInput = {
    where: ExpeditionWhereUniqueInput
    create: XOR<ExpeditionCreateWithoutResearchersInput, ExpeditionUncheckedCreateWithoutResearchersInput>
  }

  export type ResearcherCreateWithoutExpeditionsInput = {
    id?: string
    name: string
    affiliation?: string | null
    bio?: string | null
    profileUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tags?: ResearcherTagCreateNestedManyWithoutResearcherInput
  }

  export type ResearcherUncheckedCreateWithoutExpeditionsInput = {
    id?: string
    name: string
    affiliation?: string | null
    bio?: string | null
    profileUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tags?: ResearcherTagUncheckedCreateNestedManyWithoutResearcherInput
  }

  export type ResearcherCreateOrConnectWithoutExpeditionsInput = {
    where: ResearcherWhereUniqueInput
    create: XOR<ResearcherCreateWithoutExpeditionsInput, ResearcherUncheckedCreateWithoutExpeditionsInput>
  }

  export type ExpeditionUpsertWithoutResearchersInput = {
    update: XOR<ExpeditionUpdateWithoutResearchersInput, ExpeditionUncheckedUpdateWithoutResearchersInput>
    create: XOR<ExpeditionCreateWithoutResearchersInput, ExpeditionUncheckedCreateWithoutResearchersInput>
    where?: ExpeditionWhereInput
  }

  export type ExpeditionUpdateToOneWithWhereWithoutResearchersInput = {
    where?: ExpeditionWhereInput
    data: XOR<ExpeditionUpdateWithoutResearchersInput, ExpeditionUncheckedUpdateWithoutResearchersInput>
  }

  export type ExpeditionUpdateWithoutResearchersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    region?: StringFieldUpdateOperationsInput | string
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sourceUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    photos?: PhotoUpdateManyWithoutExpeditionNestedInput
    tags?: ExpeditionTagUpdateManyWithoutExpeditionNestedInput
  }

  export type ExpeditionUncheckedUpdateWithoutResearchersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    region?: StringFieldUpdateOperationsInput | string
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sourceUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    photos?: PhotoUncheckedUpdateManyWithoutExpeditionNestedInput
    tags?: ExpeditionTagUncheckedUpdateManyWithoutExpeditionNestedInput
  }

  export type ResearcherUpsertWithoutExpeditionsInput = {
    update: XOR<ResearcherUpdateWithoutExpeditionsInput, ResearcherUncheckedUpdateWithoutExpeditionsInput>
    create: XOR<ResearcherCreateWithoutExpeditionsInput, ResearcherUncheckedCreateWithoutExpeditionsInput>
    where?: ResearcherWhereInput
  }

  export type ResearcherUpdateToOneWithWhereWithoutExpeditionsInput = {
    where?: ResearcherWhereInput
    data: XOR<ResearcherUpdateWithoutExpeditionsInput, ResearcherUncheckedUpdateWithoutExpeditionsInput>
  }

  export type ResearcherUpdateWithoutExpeditionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    affiliation?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    profileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tags?: ResearcherTagUpdateManyWithoutResearcherNestedInput
  }

  export type ResearcherUncheckedUpdateWithoutExpeditionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    affiliation?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    profileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tags?: ResearcherTagUncheckedUpdateManyWithoutResearcherNestedInput
  }

  export type ExpeditionCreateWithoutTagsInput = {
    id?: string
    name: string
    description?: string | null
    region: string
    startDate?: Date | string | null
    endDate?: Date | string | null
    sourceUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    researchers?: ExpeditionResearcherCreateNestedManyWithoutExpeditionInput
    photos?: PhotoCreateNestedManyWithoutExpeditionInput
  }

  export type ExpeditionUncheckedCreateWithoutTagsInput = {
    id?: string
    name: string
    description?: string | null
    region: string
    startDate?: Date | string | null
    endDate?: Date | string | null
    sourceUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    researchers?: ExpeditionResearcherUncheckedCreateNestedManyWithoutExpeditionInput
    photos?: PhotoUncheckedCreateNestedManyWithoutExpeditionInput
  }

  export type ExpeditionCreateOrConnectWithoutTagsInput = {
    where: ExpeditionWhereUniqueInput
    create: XOR<ExpeditionCreateWithoutTagsInput, ExpeditionUncheckedCreateWithoutTagsInput>
  }

  export type TagCreateWithoutExpeditionsInput = {
    id?: string
    name: string
    slug: string
    createdAt?: Date | string
    news?: NewsTagCreateNestedManyWithoutTagInput
    researchers?: ResearcherTagCreateNestedManyWithoutTagInput
  }

  export type TagUncheckedCreateWithoutExpeditionsInput = {
    id?: string
    name: string
    slug: string
    createdAt?: Date | string
    news?: NewsTagUncheckedCreateNestedManyWithoutTagInput
    researchers?: ResearcherTagUncheckedCreateNestedManyWithoutTagInput
  }

  export type TagCreateOrConnectWithoutExpeditionsInput = {
    where: TagWhereUniqueInput
    create: XOR<TagCreateWithoutExpeditionsInput, TagUncheckedCreateWithoutExpeditionsInput>
  }

  export type ExpeditionUpsertWithoutTagsInput = {
    update: XOR<ExpeditionUpdateWithoutTagsInput, ExpeditionUncheckedUpdateWithoutTagsInput>
    create: XOR<ExpeditionCreateWithoutTagsInput, ExpeditionUncheckedCreateWithoutTagsInput>
    where?: ExpeditionWhereInput
  }

  export type ExpeditionUpdateToOneWithWhereWithoutTagsInput = {
    where?: ExpeditionWhereInput
    data: XOR<ExpeditionUpdateWithoutTagsInput, ExpeditionUncheckedUpdateWithoutTagsInput>
  }

  export type ExpeditionUpdateWithoutTagsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    region?: StringFieldUpdateOperationsInput | string
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sourceUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    researchers?: ExpeditionResearcherUpdateManyWithoutExpeditionNestedInput
    photos?: PhotoUpdateManyWithoutExpeditionNestedInput
  }

  export type ExpeditionUncheckedUpdateWithoutTagsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    region?: StringFieldUpdateOperationsInput | string
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sourceUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    researchers?: ExpeditionResearcherUncheckedUpdateManyWithoutExpeditionNestedInput
    photos?: PhotoUncheckedUpdateManyWithoutExpeditionNestedInput
  }

  export type TagUpsertWithoutExpeditionsInput = {
    update: XOR<TagUpdateWithoutExpeditionsInput, TagUncheckedUpdateWithoutExpeditionsInput>
    create: XOR<TagCreateWithoutExpeditionsInput, TagUncheckedCreateWithoutExpeditionsInput>
    where?: TagWhereInput
  }

  export type TagUpdateToOneWithWhereWithoutExpeditionsInput = {
    where?: TagWhereInput
    data: XOR<TagUpdateWithoutExpeditionsInput, TagUncheckedUpdateWithoutExpeditionsInput>
  }

  export type TagUpdateWithoutExpeditionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    news?: NewsTagUpdateManyWithoutTagNestedInput
    researchers?: ResearcherTagUpdateManyWithoutTagNestedInput
  }

  export type TagUncheckedUpdateWithoutExpeditionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    news?: NewsTagUncheckedUpdateManyWithoutTagNestedInput
    researchers?: ResearcherTagUncheckedUpdateManyWithoutTagNestedInput
  }

  export type ResearcherCreateWithoutTagsInput = {
    id?: string
    name: string
    affiliation?: string | null
    bio?: string | null
    profileUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    expeditions?: ExpeditionResearcherCreateNestedManyWithoutResearcherInput
  }

  export type ResearcherUncheckedCreateWithoutTagsInput = {
    id?: string
    name: string
    affiliation?: string | null
    bio?: string | null
    profileUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    expeditions?: ExpeditionResearcherUncheckedCreateNestedManyWithoutResearcherInput
  }

  export type ResearcherCreateOrConnectWithoutTagsInput = {
    where: ResearcherWhereUniqueInput
    create: XOR<ResearcherCreateWithoutTagsInput, ResearcherUncheckedCreateWithoutTagsInput>
  }

  export type TagCreateWithoutResearchersInput = {
    id?: string
    name: string
    slug: string
    createdAt?: Date | string
    news?: NewsTagCreateNestedManyWithoutTagInput
    expeditions?: ExpeditionTagCreateNestedManyWithoutTagInput
  }

  export type TagUncheckedCreateWithoutResearchersInput = {
    id?: string
    name: string
    slug: string
    createdAt?: Date | string
    news?: NewsTagUncheckedCreateNestedManyWithoutTagInput
    expeditions?: ExpeditionTagUncheckedCreateNestedManyWithoutTagInput
  }

  export type TagCreateOrConnectWithoutResearchersInput = {
    where: TagWhereUniqueInput
    create: XOR<TagCreateWithoutResearchersInput, TagUncheckedCreateWithoutResearchersInput>
  }

  export type ResearcherUpsertWithoutTagsInput = {
    update: XOR<ResearcherUpdateWithoutTagsInput, ResearcherUncheckedUpdateWithoutTagsInput>
    create: XOR<ResearcherCreateWithoutTagsInput, ResearcherUncheckedCreateWithoutTagsInput>
    where?: ResearcherWhereInput
  }

  export type ResearcherUpdateToOneWithWhereWithoutTagsInput = {
    where?: ResearcherWhereInput
    data: XOR<ResearcherUpdateWithoutTagsInput, ResearcherUncheckedUpdateWithoutTagsInput>
  }

  export type ResearcherUpdateWithoutTagsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    affiliation?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    profileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expeditions?: ExpeditionResearcherUpdateManyWithoutResearcherNestedInput
  }

  export type ResearcherUncheckedUpdateWithoutTagsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    affiliation?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    profileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expeditions?: ExpeditionResearcherUncheckedUpdateManyWithoutResearcherNestedInput
  }

  export type TagUpsertWithoutResearchersInput = {
    update: XOR<TagUpdateWithoutResearchersInput, TagUncheckedUpdateWithoutResearchersInput>
    create: XOR<TagCreateWithoutResearchersInput, TagUncheckedCreateWithoutResearchersInput>
    where?: TagWhereInput
  }

  export type TagUpdateToOneWithWhereWithoutResearchersInput = {
    where?: TagWhereInput
    data: XOR<TagUpdateWithoutResearchersInput, TagUncheckedUpdateWithoutResearchersInput>
  }

  export type TagUpdateWithoutResearchersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    news?: NewsTagUpdateManyWithoutTagNestedInput
    expeditions?: ExpeditionTagUpdateManyWithoutTagNestedInput
  }

  export type TagUncheckedUpdateWithoutResearchersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    news?: NewsTagUncheckedUpdateManyWithoutTagNestedInput
    expeditions?: ExpeditionTagUncheckedUpdateManyWithoutTagNestedInput
  }

  export type PhotoCreateManyNewsInput = {
    id?: string
    url: string
    caption?: string | null
    altText?: string | null
    credit?: string | null
    sourceUrl?: string | null
    sourceType?: string | null
    expeditionId?: string | null
    createdAt?: Date | string
  }

  export type NewsTagCreateManyNewsInput = {
    tagId: string
  }

  export type PhotoUpdateWithoutNewsInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    altText?: NullableStringFieldUpdateOperationsInput | string | null
    credit?: NullableStringFieldUpdateOperationsInput | string | null
    sourceUrl?: NullableStringFieldUpdateOperationsInput | string | null
    sourceType?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expedition?: ExpeditionUpdateOneWithoutPhotosNestedInput
  }

  export type PhotoUncheckedUpdateWithoutNewsInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    altText?: NullableStringFieldUpdateOperationsInput | string | null
    credit?: NullableStringFieldUpdateOperationsInput | string | null
    sourceUrl?: NullableStringFieldUpdateOperationsInput | string | null
    sourceType?: NullableStringFieldUpdateOperationsInput | string | null
    expeditionId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PhotoUncheckedUpdateManyWithoutNewsInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    altText?: NullableStringFieldUpdateOperationsInput | string | null
    credit?: NullableStringFieldUpdateOperationsInput | string | null
    sourceUrl?: NullableStringFieldUpdateOperationsInput | string | null
    sourceType?: NullableStringFieldUpdateOperationsInput | string | null
    expeditionId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NewsTagUpdateWithoutNewsInput = {
    tag?: TagUpdateOneRequiredWithoutNewsNestedInput
  }

  export type NewsTagUncheckedUpdateWithoutNewsInput = {
    tagId?: StringFieldUpdateOperationsInput | string
  }

  export type NewsTagUncheckedUpdateManyWithoutNewsInput = {
    tagId?: StringFieldUpdateOperationsInput | string
  }

  export type ExpeditionResearcherCreateManyExpeditionInput = {
    researcherId: string
  }

  export type PhotoCreateManyExpeditionInput = {
    id?: string
    url: string
    caption?: string | null
    altText?: string | null
    credit?: string | null
    sourceUrl?: string | null
    sourceType?: string | null
    newsId?: string | null
    createdAt?: Date | string
  }

  export type ExpeditionTagCreateManyExpeditionInput = {
    tagId: string
  }

  export type ExpeditionResearcherUpdateWithoutExpeditionInput = {
    researcher?: ResearcherUpdateOneRequiredWithoutExpeditionsNestedInput
  }

  export type ExpeditionResearcherUncheckedUpdateWithoutExpeditionInput = {
    researcherId?: StringFieldUpdateOperationsInput | string
  }

  export type ExpeditionResearcherUncheckedUpdateManyWithoutExpeditionInput = {
    researcherId?: StringFieldUpdateOperationsInput | string
  }

  export type PhotoUpdateWithoutExpeditionInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    altText?: NullableStringFieldUpdateOperationsInput | string | null
    credit?: NullableStringFieldUpdateOperationsInput | string | null
    sourceUrl?: NullableStringFieldUpdateOperationsInput | string | null
    sourceType?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    news?: NewsUpdateOneWithoutPhotosNestedInput
  }

  export type PhotoUncheckedUpdateWithoutExpeditionInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    altText?: NullableStringFieldUpdateOperationsInput | string | null
    credit?: NullableStringFieldUpdateOperationsInput | string | null
    sourceUrl?: NullableStringFieldUpdateOperationsInput | string | null
    sourceType?: NullableStringFieldUpdateOperationsInput | string | null
    newsId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PhotoUncheckedUpdateManyWithoutExpeditionInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    altText?: NullableStringFieldUpdateOperationsInput | string | null
    credit?: NullableStringFieldUpdateOperationsInput | string | null
    sourceUrl?: NullableStringFieldUpdateOperationsInput | string | null
    sourceType?: NullableStringFieldUpdateOperationsInput | string | null
    newsId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExpeditionTagUpdateWithoutExpeditionInput = {
    tag?: TagUpdateOneRequiredWithoutExpeditionsNestedInput
  }

  export type ExpeditionTagUncheckedUpdateWithoutExpeditionInput = {
    tagId?: StringFieldUpdateOperationsInput | string
  }

  export type ExpeditionTagUncheckedUpdateManyWithoutExpeditionInput = {
    tagId?: StringFieldUpdateOperationsInput | string
  }

  export type ExpeditionResearcherCreateManyResearcherInput = {
    expeditionId: string
  }

  export type ResearcherTagCreateManyResearcherInput = {
    tagId: string
  }

  export type ExpeditionResearcherUpdateWithoutResearcherInput = {
    expedition?: ExpeditionUpdateOneRequiredWithoutResearchersNestedInput
  }

  export type ExpeditionResearcherUncheckedUpdateWithoutResearcherInput = {
    expeditionId?: StringFieldUpdateOperationsInput | string
  }

  export type ExpeditionResearcherUncheckedUpdateManyWithoutResearcherInput = {
    expeditionId?: StringFieldUpdateOperationsInput | string
  }

  export type ResearcherTagUpdateWithoutResearcherInput = {
    tag?: TagUpdateOneRequiredWithoutResearchersNestedInput
  }

  export type ResearcherTagUncheckedUpdateWithoutResearcherInput = {
    tagId?: StringFieldUpdateOperationsInput | string
  }

  export type ResearcherTagUncheckedUpdateManyWithoutResearcherInput = {
    tagId?: StringFieldUpdateOperationsInput | string
  }

  export type NewsTagCreateManyTagInput = {
    newsId: string
  }

  export type ExpeditionTagCreateManyTagInput = {
    expeditionId: string
  }

  export type ResearcherTagCreateManyTagInput = {
    researcherId: string
  }

  export type NewsTagUpdateWithoutTagInput = {
    news?: NewsUpdateOneRequiredWithoutTagsNestedInput
  }

  export type NewsTagUncheckedUpdateWithoutTagInput = {
    newsId?: StringFieldUpdateOperationsInput | string
  }

  export type NewsTagUncheckedUpdateManyWithoutTagInput = {
    newsId?: StringFieldUpdateOperationsInput | string
  }

  export type ExpeditionTagUpdateWithoutTagInput = {
    expedition?: ExpeditionUpdateOneRequiredWithoutTagsNestedInput
  }

  export type ExpeditionTagUncheckedUpdateWithoutTagInput = {
    expeditionId?: StringFieldUpdateOperationsInput | string
  }

  export type ExpeditionTagUncheckedUpdateManyWithoutTagInput = {
    expeditionId?: StringFieldUpdateOperationsInput | string
  }

  export type ResearcherTagUpdateWithoutTagInput = {
    researcher?: ResearcherUpdateOneRequiredWithoutTagsNestedInput
  }

  export type ResearcherTagUncheckedUpdateWithoutTagInput = {
    researcherId?: StringFieldUpdateOperationsInput | string
  }

  export type ResearcherTagUncheckedUpdateManyWithoutTagInput = {
    researcherId?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}