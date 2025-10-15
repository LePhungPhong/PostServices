
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Users
 * 
 */
export type Users = $Result.DefaultSelection<Prisma.$UsersPayload>
/**
 * Model Posts
 * 
 */
export type Posts = $Result.DefaultSelection<Prisma.$PostsPayload>
/**
 * Model Viewer
 * 
 */
export type Viewer = $Result.DefaultSelection<Prisma.$ViewerPayload>
/**
 * Model Hashtag
 * 
 */
export type Hashtag = $Result.DefaultSelection<Prisma.$HashtagPayload>
/**
 * Model PostHashtags
 * 
 */
export type PostHashtags = $Result.DefaultSelection<Prisma.$PostHashtagsPayload>
/**
 * Model PostTagFriend
 * 
 */
export type PostTagFriend = $Result.DefaultSelection<Prisma.$PostTagFriendPayload>
/**
 * Model Media
 * 
 */
export type Media = $Result.DefaultSelection<Prisma.$MediaPayload>
/**
 * Model Likes
 * 
 */
export type Likes = $Result.DefaultSelection<Prisma.$LikesPayload>
/**
 * Model Comments
 * 
 */
export type Comments = $Result.DefaultSelection<Prisma.$CommentsPayload>
/**
 * Model Shares
 * 
 */
export type Shares = $Result.DefaultSelection<Prisma.$SharesPayload>
/**
 * Model NewsFeed
 * 
 */
export type NewsFeed = $Result.DefaultSelection<Prisma.$NewsFeedPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const VisibilityEnum: {
  public: 'public',
  private: 'private',
  friends: 'friends'
};

export type VisibilityEnum = (typeof VisibilityEnum)[keyof typeof VisibilityEnum]


export const CensorEnum: {
  approved: 'approved',
  pending: 'pending',
  rejected: 'rejected',
  under_review: 'under_review'
};

export type CensorEnum = (typeof CensorEnum)[keyof typeof CensorEnum]


export const MediaTypeEnum: {
  image: 'image',
  video: 'video',
  file: 'file'
};

export type MediaTypeEnum = (typeof MediaTypeEnum)[keyof typeof MediaTypeEnum]


export const NotificationTypeEnum: {
  like: 'like',
  comment: 'comment',
  share: 'share'
};

export type NotificationTypeEnum = (typeof NotificationTypeEnum)[keyof typeof NotificationTypeEnum]


export const PostTypeEnum: {
  post: 'post',
  reel: 'reel',
  story: 'story'
};

export type PostTypeEnum = (typeof PostTypeEnum)[keyof typeof PostTypeEnum]

}

export type VisibilityEnum = $Enums.VisibilityEnum

export const VisibilityEnum: typeof $Enums.VisibilityEnum

export type CensorEnum = $Enums.CensorEnum

export const CensorEnum: typeof $Enums.CensorEnum

export type MediaTypeEnum = $Enums.MediaTypeEnum

export const MediaTypeEnum: typeof $Enums.MediaTypeEnum

export type NotificationTypeEnum = $Enums.NotificationTypeEnum

export const NotificationTypeEnum: typeof $Enums.NotificationTypeEnum

export type PostTypeEnum = $Enums.PostTypeEnum

export const PostTypeEnum: typeof $Enums.PostTypeEnum

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.users.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
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
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.users.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.users`: Exposes CRUD operations for the **Users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.UsersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.posts`: Exposes CRUD operations for the **Posts** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Posts
    * const posts = await prisma.posts.findMany()
    * ```
    */
  get posts(): Prisma.PostsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.viewer`: Exposes CRUD operations for the **Viewer** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Viewers
    * const viewers = await prisma.viewer.findMany()
    * ```
    */
  get viewer(): Prisma.ViewerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.hashtag`: Exposes CRUD operations for the **Hashtag** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Hashtags
    * const hashtags = await prisma.hashtag.findMany()
    * ```
    */
  get hashtag(): Prisma.HashtagDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.postHashtags`: Exposes CRUD operations for the **PostHashtags** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PostHashtags
    * const postHashtags = await prisma.postHashtags.findMany()
    * ```
    */
  get postHashtags(): Prisma.PostHashtagsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.postTagFriend`: Exposes CRUD operations for the **PostTagFriend** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PostTagFriends
    * const postTagFriends = await prisma.postTagFriend.findMany()
    * ```
    */
  get postTagFriend(): Prisma.PostTagFriendDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.media`: Exposes CRUD operations for the **Media** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Media
    * const media = await prisma.media.findMany()
    * ```
    */
  get media(): Prisma.MediaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.likes`: Exposes CRUD operations for the **Likes** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Likes
    * const likes = await prisma.likes.findMany()
    * ```
    */
  get likes(): Prisma.LikesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.comments`: Exposes CRUD operations for the **Comments** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Comments
    * const comments = await prisma.comments.findMany()
    * ```
    */
  get comments(): Prisma.CommentsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.shares`: Exposes CRUD operations for the **Shares** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Shares
    * const shares = await prisma.shares.findMany()
    * ```
    */
  get shares(): Prisma.SharesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.newsFeed`: Exposes CRUD operations for the **NewsFeed** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more NewsFeeds
    * const newsFeeds = await prisma.newsFeed.findMany()
    * ```
    */
  get newsFeed(): Prisma.NewsFeedDelegate<ExtArgs, ClientOptions>;
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
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

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
   * Prisma Client JS version: 6.17.1
   * Query Engine version: 272a37d34178c2894197e17273bf937f25acdeac
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


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
      (Without<T, U> & U) | (Without<U, T> & T)
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
    Users: 'Users',
    Posts: 'Posts',
    Viewer: 'Viewer',
    Hashtag: 'Hashtag',
    PostHashtags: 'PostHashtags',
    PostTagFriend: 'PostTagFriend',
    Media: 'Media',
    Likes: 'Likes',
    Comments: 'Comments',
    Shares: 'Shares',
    NewsFeed: 'NewsFeed'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "users" | "posts" | "viewer" | "hashtag" | "postHashtags" | "postTagFriend" | "media" | "likes" | "comments" | "shares" | "newsFeed"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Users: {
        payload: Prisma.$UsersPayload<ExtArgs>
        fields: Prisma.UsersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UsersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UsersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          findFirst: {
            args: Prisma.UsersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UsersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          findMany: {
            args: Prisma.UsersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>[]
          }
          create: {
            args: Prisma.UsersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          createMany: {
            args: Prisma.UsersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UsersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>[]
          }
          delete: {
            args: Prisma.UsersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          update: {
            args: Prisma.UsersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          deleteMany: {
            args: Prisma.UsersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UsersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UsersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>[]
          }
          upsert: {
            args: Prisma.UsersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          aggregate: {
            args: Prisma.UsersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsers>
          }
          groupBy: {
            args: Prisma.UsersGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsersGroupByOutputType>[]
          }
          count: {
            args: Prisma.UsersCountArgs<ExtArgs>
            result: $Utils.Optional<UsersCountAggregateOutputType> | number
          }
        }
      }
      Posts: {
        payload: Prisma.$PostsPayload<ExtArgs>
        fields: Prisma.PostsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PostsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PostsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostsPayload>
          }
          findFirst: {
            args: Prisma.PostsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PostsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostsPayload>
          }
          findMany: {
            args: Prisma.PostsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostsPayload>[]
          }
          create: {
            args: Prisma.PostsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostsPayload>
          }
          createMany: {
            args: Prisma.PostsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PostsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostsPayload>[]
          }
          delete: {
            args: Prisma.PostsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostsPayload>
          }
          update: {
            args: Prisma.PostsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostsPayload>
          }
          deleteMany: {
            args: Prisma.PostsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PostsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PostsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostsPayload>[]
          }
          upsert: {
            args: Prisma.PostsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostsPayload>
          }
          aggregate: {
            args: Prisma.PostsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePosts>
          }
          groupBy: {
            args: Prisma.PostsGroupByArgs<ExtArgs>
            result: $Utils.Optional<PostsGroupByOutputType>[]
          }
          count: {
            args: Prisma.PostsCountArgs<ExtArgs>
            result: $Utils.Optional<PostsCountAggregateOutputType> | number
          }
        }
      }
      Viewer: {
        payload: Prisma.$ViewerPayload<ExtArgs>
        fields: Prisma.ViewerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ViewerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ViewerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ViewerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ViewerPayload>
          }
          findFirst: {
            args: Prisma.ViewerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ViewerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ViewerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ViewerPayload>
          }
          findMany: {
            args: Prisma.ViewerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ViewerPayload>[]
          }
          create: {
            args: Prisma.ViewerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ViewerPayload>
          }
          createMany: {
            args: Prisma.ViewerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ViewerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ViewerPayload>[]
          }
          delete: {
            args: Prisma.ViewerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ViewerPayload>
          }
          update: {
            args: Prisma.ViewerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ViewerPayload>
          }
          deleteMany: {
            args: Prisma.ViewerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ViewerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ViewerUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ViewerPayload>[]
          }
          upsert: {
            args: Prisma.ViewerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ViewerPayload>
          }
          aggregate: {
            args: Prisma.ViewerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateViewer>
          }
          groupBy: {
            args: Prisma.ViewerGroupByArgs<ExtArgs>
            result: $Utils.Optional<ViewerGroupByOutputType>[]
          }
          count: {
            args: Prisma.ViewerCountArgs<ExtArgs>
            result: $Utils.Optional<ViewerCountAggregateOutputType> | number
          }
        }
      }
      Hashtag: {
        payload: Prisma.$HashtagPayload<ExtArgs>
        fields: Prisma.HashtagFieldRefs
        operations: {
          findUnique: {
            args: Prisma.HashtagFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HashtagPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.HashtagFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HashtagPayload>
          }
          findFirst: {
            args: Prisma.HashtagFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HashtagPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.HashtagFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HashtagPayload>
          }
          findMany: {
            args: Prisma.HashtagFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HashtagPayload>[]
          }
          create: {
            args: Prisma.HashtagCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HashtagPayload>
          }
          createMany: {
            args: Prisma.HashtagCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.HashtagCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HashtagPayload>[]
          }
          delete: {
            args: Prisma.HashtagDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HashtagPayload>
          }
          update: {
            args: Prisma.HashtagUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HashtagPayload>
          }
          deleteMany: {
            args: Prisma.HashtagDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.HashtagUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.HashtagUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HashtagPayload>[]
          }
          upsert: {
            args: Prisma.HashtagUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HashtagPayload>
          }
          aggregate: {
            args: Prisma.HashtagAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateHashtag>
          }
          groupBy: {
            args: Prisma.HashtagGroupByArgs<ExtArgs>
            result: $Utils.Optional<HashtagGroupByOutputType>[]
          }
          count: {
            args: Prisma.HashtagCountArgs<ExtArgs>
            result: $Utils.Optional<HashtagCountAggregateOutputType> | number
          }
        }
      }
      PostHashtags: {
        payload: Prisma.$PostHashtagsPayload<ExtArgs>
        fields: Prisma.PostHashtagsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PostHashtagsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostHashtagsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PostHashtagsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostHashtagsPayload>
          }
          findFirst: {
            args: Prisma.PostHashtagsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostHashtagsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PostHashtagsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostHashtagsPayload>
          }
          findMany: {
            args: Prisma.PostHashtagsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostHashtagsPayload>[]
          }
          create: {
            args: Prisma.PostHashtagsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostHashtagsPayload>
          }
          createMany: {
            args: Prisma.PostHashtagsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PostHashtagsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostHashtagsPayload>[]
          }
          delete: {
            args: Prisma.PostHashtagsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostHashtagsPayload>
          }
          update: {
            args: Prisma.PostHashtagsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostHashtagsPayload>
          }
          deleteMany: {
            args: Prisma.PostHashtagsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PostHashtagsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PostHashtagsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostHashtagsPayload>[]
          }
          upsert: {
            args: Prisma.PostHashtagsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostHashtagsPayload>
          }
          aggregate: {
            args: Prisma.PostHashtagsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePostHashtags>
          }
          groupBy: {
            args: Prisma.PostHashtagsGroupByArgs<ExtArgs>
            result: $Utils.Optional<PostHashtagsGroupByOutputType>[]
          }
          count: {
            args: Prisma.PostHashtagsCountArgs<ExtArgs>
            result: $Utils.Optional<PostHashtagsCountAggregateOutputType> | number
          }
        }
      }
      PostTagFriend: {
        payload: Prisma.$PostTagFriendPayload<ExtArgs>
        fields: Prisma.PostTagFriendFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PostTagFriendFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostTagFriendPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PostTagFriendFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostTagFriendPayload>
          }
          findFirst: {
            args: Prisma.PostTagFriendFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostTagFriendPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PostTagFriendFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostTagFriendPayload>
          }
          findMany: {
            args: Prisma.PostTagFriendFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostTagFriendPayload>[]
          }
          create: {
            args: Prisma.PostTagFriendCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostTagFriendPayload>
          }
          createMany: {
            args: Prisma.PostTagFriendCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PostTagFriendCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostTagFriendPayload>[]
          }
          delete: {
            args: Prisma.PostTagFriendDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostTagFriendPayload>
          }
          update: {
            args: Prisma.PostTagFriendUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostTagFriendPayload>
          }
          deleteMany: {
            args: Prisma.PostTagFriendDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PostTagFriendUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PostTagFriendUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostTagFriendPayload>[]
          }
          upsert: {
            args: Prisma.PostTagFriendUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostTagFriendPayload>
          }
          aggregate: {
            args: Prisma.PostTagFriendAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePostTagFriend>
          }
          groupBy: {
            args: Prisma.PostTagFriendGroupByArgs<ExtArgs>
            result: $Utils.Optional<PostTagFriendGroupByOutputType>[]
          }
          count: {
            args: Prisma.PostTagFriendCountArgs<ExtArgs>
            result: $Utils.Optional<PostTagFriendCountAggregateOutputType> | number
          }
        }
      }
      Media: {
        payload: Prisma.$MediaPayload<ExtArgs>
        fields: Prisma.MediaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MediaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MediaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaPayload>
          }
          findFirst: {
            args: Prisma.MediaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MediaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaPayload>
          }
          findMany: {
            args: Prisma.MediaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaPayload>[]
          }
          create: {
            args: Prisma.MediaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaPayload>
          }
          createMany: {
            args: Prisma.MediaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MediaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaPayload>[]
          }
          delete: {
            args: Prisma.MediaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaPayload>
          }
          update: {
            args: Prisma.MediaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaPayload>
          }
          deleteMany: {
            args: Prisma.MediaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MediaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MediaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaPayload>[]
          }
          upsert: {
            args: Prisma.MediaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaPayload>
          }
          aggregate: {
            args: Prisma.MediaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMedia>
          }
          groupBy: {
            args: Prisma.MediaGroupByArgs<ExtArgs>
            result: $Utils.Optional<MediaGroupByOutputType>[]
          }
          count: {
            args: Prisma.MediaCountArgs<ExtArgs>
            result: $Utils.Optional<MediaCountAggregateOutputType> | number
          }
        }
      }
      Likes: {
        payload: Prisma.$LikesPayload<ExtArgs>
        fields: Prisma.LikesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LikesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LikesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikesPayload>
          }
          findFirst: {
            args: Prisma.LikesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LikesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikesPayload>
          }
          findMany: {
            args: Prisma.LikesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikesPayload>[]
          }
          create: {
            args: Prisma.LikesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikesPayload>
          }
          createMany: {
            args: Prisma.LikesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LikesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikesPayload>[]
          }
          delete: {
            args: Prisma.LikesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikesPayload>
          }
          update: {
            args: Prisma.LikesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikesPayload>
          }
          deleteMany: {
            args: Prisma.LikesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LikesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LikesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikesPayload>[]
          }
          upsert: {
            args: Prisma.LikesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikesPayload>
          }
          aggregate: {
            args: Prisma.LikesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLikes>
          }
          groupBy: {
            args: Prisma.LikesGroupByArgs<ExtArgs>
            result: $Utils.Optional<LikesGroupByOutputType>[]
          }
          count: {
            args: Prisma.LikesCountArgs<ExtArgs>
            result: $Utils.Optional<LikesCountAggregateOutputType> | number
          }
        }
      }
      Comments: {
        payload: Prisma.$CommentsPayload<ExtArgs>
        fields: Prisma.CommentsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CommentsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CommentsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentsPayload>
          }
          findFirst: {
            args: Prisma.CommentsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CommentsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentsPayload>
          }
          findMany: {
            args: Prisma.CommentsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentsPayload>[]
          }
          create: {
            args: Prisma.CommentsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentsPayload>
          }
          createMany: {
            args: Prisma.CommentsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CommentsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentsPayload>[]
          }
          delete: {
            args: Prisma.CommentsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentsPayload>
          }
          update: {
            args: Prisma.CommentsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentsPayload>
          }
          deleteMany: {
            args: Prisma.CommentsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CommentsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CommentsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentsPayload>[]
          }
          upsert: {
            args: Prisma.CommentsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentsPayload>
          }
          aggregate: {
            args: Prisma.CommentsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateComments>
          }
          groupBy: {
            args: Prisma.CommentsGroupByArgs<ExtArgs>
            result: $Utils.Optional<CommentsGroupByOutputType>[]
          }
          count: {
            args: Prisma.CommentsCountArgs<ExtArgs>
            result: $Utils.Optional<CommentsCountAggregateOutputType> | number
          }
        }
      }
      Shares: {
        payload: Prisma.$SharesPayload<ExtArgs>
        fields: Prisma.SharesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SharesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SharesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SharesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SharesPayload>
          }
          findFirst: {
            args: Prisma.SharesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SharesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SharesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SharesPayload>
          }
          findMany: {
            args: Prisma.SharesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SharesPayload>[]
          }
          create: {
            args: Prisma.SharesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SharesPayload>
          }
          createMany: {
            args: Prisma.SharesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SharesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SharesPayload>[]
          }
          delete: {
            args: Prisma.SharesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SharesPayload>
          }
          update: {
            args: Prisma.SharesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SharesPayload>
          }
          deleteMany: {
            args: Prisma.SharesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SharesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SharesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SharesPayload>[]
          }
          upsert: {
            args: Prisma.SharesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SharesPayload>
          }
          aggregate: {
            args: Prisma.SharesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateShares>
          }
          groupBy: {
            args: Prisma.SharesGroupByArgs<ExtArgs>
            result: $Utils.Optional<SharesGroupByOutputType>[]
          }
          count: {
            args: Prisma.SharesCountArgs<ExtArgs>
            result: $Utils.Optional<SharesCountAggregateOutputType> | number
          }
        }
      }
      NewsFeed: {
        payload: Prisma.$NewsFeedPayload<ExtArgs>
        fields: Prisma.NewsFeedFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NewsFeedFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsFeedPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NewsFeedFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsFeedPayload>
          }
          findFirst: {
            args: Prisma.NewsFeedFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsFeedPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NewsFeedFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsFeedPayload>
          }
          findMany: {
            args: Prisma.NewsFeedFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsFeedPayload>[]
          }
          create: {
            args: Prisma.NewsFeedCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsFeedPayload>
          }
          createMany: {
            args: Prisma.NewsFeedCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.NewsFeedCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsFeedPayload>[]
          }
          delete: {
            args: Prisma.NewsFeedDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsFeedPayload>
          }
          update: {
            args: Prisma.NewsFeedUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsFeedPayload>
          }
          deleteMany: {
            args: Prisma.NewsFeedDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NewsFeedUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.NewsFeedUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsFeedPayload>[]
          }
          upsert: {
            args: Prisma.NewsFeedUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsFeedPayload>
          }
          aggregate: {
            args: Prisma.NewsFeedAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNewsFeed>
          }
          groupBy: {
            args: Prisma.NewsFeedGroupByArgs<ExtArgs>
            result: $Utils.Optional<NewsFeedGroupByOutputType>[]
          }
          count: {
            args: Prisma.NewsFeedCountArgs<ExtArgs>
            result: $Utils.Optional<NewsFeedCountAggregateOutputType> | number
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
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
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
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
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
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
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
  }
  export type GlobalOmitConfig = {
    users?: UsersOmit
    posts?: PostsOmit
    viewer?: ViewerOmit
    hashtag?: HashtagOmit
    postHashtags?: PostHashtagsOmit
    postTagFriend?: PostTagFriendOmit
    media?: MediaOmit
    likes?: LikesOmit
    comments?: CommentsOmit
    shares?: SharesOmit
    newsFeed?: NewsFeedOmit
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
   * Count Type UsersCountOutputType
   */

  export type UsersCountOutputType = {
    posts: number
    likes: number
    comments: number
    shares: number
    newsFeed: number
    taggedInPosts: number
    taggedByPosts: number
    viewedPosts: number
  }

  export type UsersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    posts?: boolean | UsersCountOutputTypeCountPostsArgs
    likes?: boolean | UsersCountOutputTypeCountLikesArgs
    comments?: boolean | UsersCountOutputTypeCountCommentsArgs
    shares?: boolean | UsersCountOutputTypeCountSharesArgs
    newsFeed?: boolean | UsersCountOutputTypeCountNewsFeedArgs
    taggedInPosts?: boolean | UsersCountOutputTypeCountTaggedInPostsArgs
    taggedByPosts?: boolean | UsersCountOutputTypeCountTaggedByPostsArgs
    viewedPosts?: boolean | UsersCountOutputTypeCountViewedPostsArgs
  }

  // Custom InputTypes
  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersCountOutputType
     */
    select?: UsersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountPostsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostsWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountLikesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LikesWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountCommentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommentsWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountSharesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SharesWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountNewsFeedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NewsFeedWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountTaggedInPostsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostTagFriendWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountTaggedByPostsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostTagFriendWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountViewedPostsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ViewerWhereInput
  }


  /**
   * Count Type PostsCountOutputType
   */

  export type PostsCountOutputType = {
    hashtags: number
    taggedFriends: number
    media: number
    likes: number
    comments: number
    shares: number
    newsFeed: number
    viewers: number
  }

  export type PostsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    hashtags?: boolean | PostsCountOutputTypeCountHashtagsArgs
    taggedFriends?: boolean | PostsCountOutputTypeCountTaggedFriendsArgs
    media?: boolean | PostsCountOutputTypeCountMediaArgs
    likes?: boolean | PostsCountOutputTypeCountLikesArgs
    comments?: boolean | PostsCountOutputTypeCountCommentsArgs
    shares?: boolean | PostsCountOutputTypeCountSharesArgs
    newsFeed?: boolean | PostsCountOutputTypeCountNewsFeedArgs
    viewers?: boolean | PostsCountOutputTypeCountViewersArgs
  }

  // Custom InputTypes
  /**
   * PostsCountOutputType without action
   */
  export type PostsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostsCountOutputType
     */
    select?: PostsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PostsCountOutputType without action
   */
  export type PostsCountOutputTypeCountHashtagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostHashtagsWhereInput
  }

  /**
   * PostsCountOutputType without action
   */
  export type PostsCountOutputTypeCountTaggedFriendsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostTagFriendWhereInput
  }

  /**
   * PostsCountOutputType without action
   */
  export type PostsCountOutputTypeCountMediaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MediaWhereInput
  }

  /**
   * PostsCountOutputType without action
   */
  export type PostsCountOutputTypeCountLikesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LikesWhereInput
  }

  /**
   * PostsCountOutputType without action
   */
  export type PostsCountOutputTypeCountCommentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommentsWhereInput
  }

  /**
   * PostsCountOutputType without action
   */
  export type PostsCountOutputTypeCountSharesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SharesWhereInput
  }

  /**
   * PostsCountOutputType without action
   */
  export type PostsCountOutputTypeCountNewsFeedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NewsFeedWhereInput
  }

  /**
   * PostsCountOutputType without action
   */
  export type PostsCountOutputTypeCountViewersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ViewerWhereInput
  }


  /**
   * Count Type HashtagCountOutputType
   */

  export type HashtagCountOutputType = {
    posts: number
  }

  export type HashtagCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    posts?: boolean | HashtagCountOutputTypeCountPostsArgs
  }

  // Custom InputTypes
  /**
   * HashtagCountOutputType without action
   */
  export type HashtagCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HashtagCountOutputType
     */
    select?: HashtagCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * HashtagCountOutputType without action
   */
  export type HashtagCountOutputTypeCountPostsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostHashtagsWhereInput
  }


  /**
   * Count Type CommentsCountOutputType
   */

  export type CommentsCountOutputType = {
    replies: number
  }

  export type CommentsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    replies?: boolean | CommentsCountOutputTypeCountRepliesArgs
  }

  // Custom InputTypes
  /**
   * CommentsCountOutputType without action
   */
  export type CommentsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommentsCountOutputType
     */
    select?: CommentsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CommentsCountOutputType without action
   */
  export type CommentsCountOutputTypeCountRepliesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommentsWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Users
   */

  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  export type UsersMinAggregateOutputType = {
    id: string | null
    username: string | null
    fullname: string | null
    avatarUrl: string | null
  }

  export type UsersMaxAggregateOutputType = {
    id: string | null
    username: string | null
    fullname: string | null
    avatarUrl: string | null
  }

  export type UsersCountAggregateOutputType = {
    id: number
    username: number
    fullname: number
    avatarUrl: number
    _all: number
  }


  export type UsersMinAggregateInputType = {
    id?: true
    username?: true
    fullname?: true
    avatarUrl?: true
  }

  export type UsersMaxAggregateInputType = {
    id?: true
    username?: true
    fullname?: true
    avatarUrl?: true
  }

  export type UsersCountAggregateInputType = {
    id?: true
    username?: true
    fullname?: true
    avatarUrl?: true
    _all?: true
  }

  export type UsersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to aggregate.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersMaxAggregateInputType
  }

  export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
        [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers[P]>
      : GetScalarType<T[P], AggregateUsers[P]>
  }




  export type UsersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsersWhereInput
    orderBy?: UsersOrderByWithAggregationInput | UsersOrderByWithAggregationInput[]
    by: UsersScalarFieldEnum[] | UsersScalarFieldEnum
    having?: UsersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersCountAggregateInputType | true
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }

  export type UsersGroupByOutputType = {
    id: string
    username: string
    fullname: string | null
    avatarUrl: string | null
    _count: UsersCountAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends UsersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersGroupByOutputType[P]>
            : GetScalarType<T[P], UsersGroupByOutputType[P]>
        }
      >
    >


  export type UsersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    fullname?: boolean
    avatarUrl?: boolean
    posts?: boolean | Users$postsArgs<ExtArgs>
    likes?: boolean | Users$likesArgs<ExtArgs>
    comments?: boolean | Users$commentsArgs<ExtArgs>
    shares?: boolean | Users$sharesArgs<ExtArgs>
    newsFeed?: boolean | Users$newsFeedArgs<ExtArgs>
    taggedInPosts?: boolean | Users$taggedInPostsArgs<ExtArgs>
    taggedByPosts?: boolean | Users$taggedByPostsArgs<ExtArgs>
    viewedPosts?: boolean | Users$viewedPostsArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["users"]>

  export type UsersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    fullname?: boolean
    avatarUrl?: boolean
  }, ExtArgs["result"]["users"]>

  export type UsersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    fullname?: boolean
    avatarUrl?: boolean
  }, ExtArgs["result"]["users"]>

  export type UsersSelectScalar = {
    id?: boolean
    username?: boolean
    fullname?: boolean
    avatarUrl?: boolean
  }

  export type UsersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "username" | "fullname" | "avatarUrl", ExtArgs["result"]["users"]>
  export type UsersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    posts?: boolean | Users$postsArgs<ExtArgs>
    likes?: boolean | Users$likesArgs<ExtArgs>
    comments?: boolean | Users$commentsArgs<ExtArgs>
    shares?: boolean | Users$sharesArgs<ExtArgs>
    newsFeed?: boolean | Users$newsFeedArgs<ExtArgs>
    taggedInPosts?: boolean | Users$taggedInPostsArgs<ExtArgs>
    taggedByPosts?: boolean | Users$taggedByPostsArgs<ExtArgs>
    viewedPosts?: boolean | Users$viewedPostsArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UsersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UsersIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UsersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Users"
    objects: {
      posts: Prisma.$PostsPayload<ExtArgs>[]
      likes: Prisma.$LikesPayload<ExtArgs>[]
      comments: Prisma.$CommentsPayload<ExtArgs>[]
      shares: Prisma.$SharesPayload<ExtArgs>[]
      newsFeed: Prisma.$NewsFeedPayload<ExtArgs>[]
      taggedInPosts: Prisma.$PostTagFriendPayload<ExtArgs>[]
      taggedByPosts: Prisma.$PostTagFriendPayload<ExtArgs>[]
      viewedPosts: Prisma.$ViewerPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      username: string
      fullname: string | null
      avatarUrl: string | null
    }, ExtArgs["result"]["users"]>
    composites: {}
  }

  type UsersGetPayload<S extends boolean | null | undefined | UsersDefaultArgs> = $Result.GetResult<Prisma.$UsersPayload, S>

  type UsersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UsersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsersCountAggregateInputType | true
    }

  export interface UsersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Users'], meta: { name: 'Users' } }
    /**
     * Find zero or one Users that matches the filter.
     * @param {UsersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UsersFindUniqueArgs>(args: SelectSubset<T, UsersFindUniqueArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Users that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UsersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UsersFindUniqueOrThrowArgs>(args: SelectSubset<T, UsersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UsersFindFirstArgs>(args?: SelectSubset<T, UsersFindFirstArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindFirstOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UsersFindFirstOrThrowArgs>(args?: SelectSubset<T, UsersFindFirstOrThrowArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.users.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.users.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usersWithIdOnly = await prisma.users.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UsersFindManyArgs>(args?: SelectSubset<T, UsersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Users.
     * @param {UsersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     * 
     */
    create<T extends UsersCreateArgs>(args: SelectSubset<T, UsersCreateArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UsersCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UsersCreateManyArgs>(args?: SelectSubset<T, UsersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UsersCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const usersWithIdOnly = await prisma.users.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UsersCreateManyAndReturnArgs>(args?: SelectSubset<T, UsersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Users.
     * @param {UsersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     * 
     */
    delete<T extends UsersDeleteArgs>(args: SelectSubset<T, UsersDeleteArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Users.
     * @param {UsersUpdateArgs} args - Arguments to update one Users.
     * @example
     * // Update one Users
     * const users = await prisma.users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UsersUpdateArgs>(args: SelectSubset<T, UsersUpdateArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UsersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UsersDeleteManyArgs>(args?: SelectSubset<T, UsersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UsersUpdateManyArgs>(args: SelectSubset<T, UsersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UsersUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const usersWithIdOnly = await prisma.users.updateManyAndReturn({
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
    updateManyAndReturn<T extends UsersUpdateManyAndReturnArgs>(args: SelectSubset<T, UsersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Users.
     * @param {UsersUpsertArgs} args - Arguments to update or create a Users.
     * @example
     * // Update or create a Users
     * const users = await prisma.users.upsert({
     *   create: {
     *     // ... data to create a Users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users we want to update
     *   }
     * })
     */
    upsert<T extends UsersUpsertArgs>(args: SelectSubset<T, UsersUpsertArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UsersCountArgs>(
      args?: Subset<T, UsersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UsersAggregateArgs>(args: Subset<T, UsersAggregateArgs>): Prisma.PrismaPromise<GetUsersAggregateType<T>>

    /**
     * Group by Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersGroupByArgs} args - Group by arguments.
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
      T extends UsersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsersGroupByArgs['orderBy'] }
        : { orderBy?: UsersGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UsersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Users model
   */
  readonly fields: UsersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UsersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    posts<T extends Users$postsArgs<ExtArgs> = {}>(args?: Subset<T, Users$postsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    likes<T extends Users$likesArgs<ExtArgs> = {}>(args?: Subset<T, Users$likesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LikesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    comments<T extends Users$commentsArgs<ExtArgs> = {}>(args?: Subset<T, Users$commentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    shares<T extends Users$sharesArgs<ExtArgs> = {}>(args?: Subset<T, Users$sharesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SharesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    newsFeed<T extends Users$newsFeedArgs<ExtArgs> = {}>(args?: Subset<T, Users$newsFeedArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NewsFeedPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    taggedInPosts<T extends Users$taggedInPostsArgs<ExtArgs> = {}>(args?: Subset<T, Users$taggedInPostsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostTagFriendPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    taggedByPosts<T extends Users$taggedByPostsArgs<ExtArgs> = {}>(args?: Subset<T, Users$taggedByPostsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostTagFriendPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    viewedPosts<T extends Users$viewedPostsArgs<ExtArgs> = {}>(args?: Subset<T, Users$viewedPostsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ViewerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Users model
   */
  interface UsersFieldRefs {
    readonly id: FieldRef<"Users", 'String'>
    readonly username: FieldRef<"Users", 'String'>
    readonly fullname: FieldRef<"Users", 'String'>
    readonly avatarUrl: FieldRef<"Users", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Users findUnique
   */
  export type UsersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users findUniqueOrThrow
   */
  export type UsersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users findFirst
   */
  export type UsersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Users findFirstOrThrow
   */
  export type UsersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Users findMany
   */
  export type UsersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Users create
   */
  export type UsersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * The data needed to create a Users.
     */
    data: XOR<UsersCreateInput, UsersUncheckedCreateInput>
  }

  /**
   * Users createMany
   */
  export type UsersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UsersCreateManyInput | UsersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Users createManyAndReturn
   */
  export type UsersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UsersCreateManyInput | UsersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Users update
   */
  export type UsersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * The data needed to update a Users.
     */
    data: XOR<UsersUpdateInput, UsersUncheckedUpdateInput>
    /**
     * Choose, which Users to update.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users updateMany
   */
  export type UsersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UsersUpdateManyMutationInput, UsersUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UsersWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * Users updateManyAndReturn
   */
  export type UsersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UsersUpdateManyMutationInput, UsersUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UsersWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * Users upsert
   */
  export type UsersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * The filter to search for the Users to update in case it exists.
     */
    where: UsersWhereUniqueInput
    /**
     * In case the Users found by the `where` argument doesn't exist, create a new Users with this data.
     */
    create: XOR<UsersCreateInput, UsersUncheckedCreateInput>
    /**
     * In case the Users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UsersUpdateInput, UsersUncheckedUpdateInput>
  }

  /**
   * Users delete
   */
  export type UsersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter which Users to delete.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users deleteMany
   */
  export type UsersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UsersWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * Users.posts
   */
  export type Users$postsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Posts
     */
    select?: PostsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Posts
     */
    omit?: PostsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostsInclude<ExtArgs> | null
    where?: PostsWhereInput
    orderBy?: PostsOrderByWithRelationInput | PostsOrderByWithRelationInput[]
    cursor?: PostsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PostsScalarFieldEnum | PostsScalarFieldEnum[]
  }

  /**
   * Users.likes
   */
  export type Users$likesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Likes
     */
    select?: LikesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Likes
     */
    omit?: LikesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikesInclude<ExtArgs> | null
    where?: LikesWhereInput
    orderBy?: LikesOrderByWithRelationInput | LikesOrderByWithRelationInput[]
    cursor?: LikesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LikesScalarFieldEnum | LikesScalarFieldEnum[]
  }

  /**
   * Users.comments
   */
  export type Users$commentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comments
     */
    select?: CommentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comments
     */
    omit?: CommentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentsInclude<ExtArgs> | null
    where?: CommentsWhereInput
    orderBy?: CommentsOrderByWithRelationInput | CommentsOrderByWithRelationInput[]
    cursor?: CommentsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CommentsScalarFieldEnum | CommentsScalarFieldEnum[]
  }

  /**
   * Users.shares
   */
  export type Users$sharesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shares
     */
    select?: SharesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shares
     */
    omit?: SharesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SharesInclude<ExtArgs> | null
    where?: SharesWhereInput
    orderBy?: SharesOrderByWithRelationInput | SharesOrderByWithRelationInput[]
    cursor?: SharesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SharesScalarFieldEnum | SharesScalarFieldEnum[]
  }

  /**
   * Users.newsFeed
   */
  export type Users$newsFeedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsFeed
     */
    select?: NewsFeedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsFeed
     */
    omit?: NewsFeedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsFeedInclude<ExtArgs> | null
    where?: NewsFeedWhereInput
    orderBy?: NewsFeedOrderByWithRelationInput | NewsFeedOrderByWithRelationInput[]
    cursor?: NewsFeedWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NewsFeedScalarFieldEnum | NewsFeedScalarFieldEnum[]
  }

  /**
   * Users.taggedInPosts
   */
  export type Users$taggedInPostsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostTagFriend
     */
    select?: PostTagFriendSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostTagFriend
     */
    omit?: PostTagFriendOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostTagFriendInclude<ExtArgs> | null
    where?: PostTagFriendWhereInput
    orderBy?: PostTagFriendOrderByWithRelationInput | PostTagFriendOrderByWithRelationInput[]
    cursor?: PostTagFriendWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PostTagFriendScalarFieldEnum | PostTagFriendScalarFieldEnum[]
  }

  /**
   * Users.taggedByPosts
   */
  export type Users$taggedByPostsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostTagFriend
     */
    select?: PostTagFriendSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostTagFriend
     */
    omit?: PostTagFriendOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostTagFriendInclude<ExtArgs> | null
    where?: PostTagFriendWhereInput
    orderBy?: PostTagFriendOrderByWithRelationInput | PostTagFriendOrderByWithRelationInput[]
    cursor?: PostTagFriendWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PostTagFriendScalarFieldEnum | PostTagFriendScalarFieldEnum[]
  }

  /**
   * Users.viewedPosts
   */
  export type Users$viewedPostsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Viewer
     */
    select?: ViewerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Viewer
     */
    omit?: ViewerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViewerInclude<ExtArgs> | null
    where?: ViewerWhereInput
    orderBy?: ViewerOrderByWithRelationInput | ViewerOrderByWithRelationInput[]
    cursor?: ViewerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ViewerScalarFieldEnum | ViewerScalarFieldEnum[]
  }

  /**
   * Users without action
   */
  export type UsersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
  }


  /**
   * Model Posts
   */

  export type AggregatePosts = {
    _count: PostsCountAggregateOutputType | null
    _avg: PostsAvgAggregateOutputType | null
    _sum: PostsSumAggregateOutputType | null
    _min: PostsMinAggregateOutputType | null
    _max: PostsMaxAggregateOutputType | null
  }

  export type PostsAvgAggregateOutputType = {
    shareCount: number | null
    likeCount: number | null
    commentCount: number | null
  }

  export type PostsSumAggregateOutputType = {
    shareCount: number | null
    likeCount: number | null
    commentCount: number | null
  }

  export type PostsMinAggregateOutputType = {
    id: string | null
    userId: string | null
    title: string | null
    content: string | null
    postType: $Enums.PostTypeEnum | null
    visibility: $Enums.VisibilityEnum | null
    censor: $Enums.CensorEnum | null
    shareCount: number | null
    likeCount: number | null
    commentCount: number | null
    createdAt: Date | null
    expired_at: Date | null
    updatedAt: Date | null
  }

  export type PostsMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    title: string | null
    content: string | null
    postType: $Enums.PostTypeEnum | null
    visibility: $Enums.VisibilityEnum | null
    censor: $Enums.CensorEnum | null
    shareCount: number | null
    likeCount: number | null
    commentCount: number | null
    createdAt: Date | null
    expired_at: Date | null
    updatedAt: Date | null
  }

  export type PostsCountAggregateOutputType = {
    id: number
    userId: number
    title: number
    content: number
    postType: number
    visibility: number
    censor: number
    shareCount: number
    likeCount: number
    commentCount: number
    createdAt: number
    expired_at: number
    updatedAt: number
    _all: number
  }


  export type PostsAvgAggregateInputType = {
    shareCount?: true
    likeCount?: true
    commentCount?: true
  }

  export type PostsSumAggregateInputType = {
    shareCount?: true
    likeCount?: true
    commentCount?: true
  }

  export type PostsMinAggregateInputType = {
    id?: true
    userId?: true
    title?: true
    content?: true
    postType?: true
    visibility?: true
    censor?: true
    shareCount?: true
    likeCount?: true
    commentCount?: true
    createdAt?: true
    expired_at?: true
    updatedAt?: true
  }

  export type PostsMaxAggregateInputType = {
    id?: true
    userId?: true
    title?: true
    content?: true
    postType?: true
    visibility?: true
    censor?: true
    shareCount?: true
    likeCount?: true
    commentCount?: true
    createdAt?: true
    expired_at?: true
    updatedAt?: true
  }

  export type PostsCountAggregateInputType = {
    id?: true
    userId?: true
    title?: true
    content?: true
    postType?: true
    visibility?: true
    censor?: true
    shareCount?: true
    likeCount?: true
    commentCount?: true
    createdAt?: true
    expired_at?: true
    updatedAt?: true
    _all?: true
  }

  export type PostsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Posts to aggregate.
     */
    where?: PostsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostsOrderByWithRelationInput | PostsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PostsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Posts
    **/
    _count?: true | PostsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PostsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PostsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PostsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PostsMaxAggregateInputType
  }

  export type GetPostsAggregateType<T extends PostsAggregateArgs> = {
        [P in keyof T & keyof AggregatePosts]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePosts[P]>
      : GetScalarType<T[P], AggregatePosts[P]>
  }




  export type PostsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostsWhereInput
    orderBy?: PostsOrderByWithAggregationInput | PostsOrderByWithAggregationInput[]
    by: PostsScalarFieldEnum[] | PostsScalarFieldEnum
    having?: PostsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PostsCountAggregateInputType | true
    _avg?: PostsAvgAggregateInputType
    _sum?: PostsSumAggregateInputType
    _min?: PostsMinAggregateInputType
    _max?: PostsMaxAggregateInputType
  }

  export type PostsGroupByOutputType = {
    id: string
    userId: string
    title: string | null
    content: string | null
    postType: $Enums.PostTypeEnum
    visibility: $Enums.VisibilityEnum
    censor: $Enums.CensorEnum
    shareCount: number
    likeCount: number
    commentCount: number
    createdAt: Date
    expired_at: Date | null
    updatedAt: Date
    _count: PostsCountAggregateOutputType | null
    _avg: PostsAvgAggregateOutputType | null
    _sum: PostsSumAggregateOutputType | null
    _min: PostsMinAggregateOutputType | null
    _max: PostsMaxAggregateOutputType | null
  }

  type GetPostsGroupByPayload<T extends PostsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PostsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PostsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PostsGroupByOutputType[P]>
            : GetScalarType<T[P], PostsGroupByOutputType[P]>
        }
      >
    >


  export type PostsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    title?: boolean
    content?: boolean
    postType?: boolean
    visibility?: boolean
    censor?: boolean
    shareCount?: boolean
    likeCount?: boolean
    commentCount?: boolean
    createdAt?: boolean
    expired_at?: boolean
    updatedAt?: boolean
    user?: boolean | UsersDefaultArgs<ExtArgs>
    hashtags?: boolean | Posts$hashtagsArgs<ExtArgs>
    taggedFriends?: boolean | Posts$taggedFriendsArgs<ExtArgs>
    media?: boolean | Posts$mediaArgs<ExtArgs>
    likes?: boolean | Posts$likesArgs<ExtArgs>
    comments?: boolean | Posts$commentsArgs<ExtArgs>
    shares?: boolean | Posts$sharesArgs<ExtArgs>
    newsFeed?: boolean | Posts$newsFeedArgs<ExtArgs>
    viewers?: boolean | Posts$viewersArgs<ExtArgs>
    _count?: boolean | PostsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["posts"]>

  export type PostsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    title?: boolean
    content?: boolean
    postType?: boolean
    visibility?: boolean
    censor?: boolean
    shareCount?: boolean
    likeCount?: boolean
    commentCount?: boolean
    createdAt?: boolean
    expired_at?: boolean
    updatedAt?: boolean
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["posts"]>

  export type PostsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    title?: boolean
    content?: boolean
    postType?: boolean
    visibility?: boolean
    censor?: boolean
    shareCount?: boolean
    likeCount?: boolean
    commentCount?: boolean
    createdAt?: boolean
    expired_at?: boolean
    updatedAt?: boolean
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["posts"]>

  export type PostsSelectScalar = {
    id?: boolean
    userId?: boolean
    title?: boolean
    content?: boolean
    postType?: boolean
    visibility?: boolean
    censor?: boolean
    shareCount?: boolean
    likeCount?: boolean
    commentCount?: boolean
    createdAt?: boolean
    expired_at?: boolean
    updatedAt?: boolean
  }

  export type PostsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "title" | "content" | "postType" | "visibility" | "censor" | "shareCount" | "likeCount" | "commentCount" | "createdAt" | "expired_at" | "updatedAt", ExtArgs["result"]["posts"]>
  export type PostsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsersDefaultArgs<ExtArgs>
    hashtags?: boolean | Posts$hashtagsArgs<ExtArgs>
    taggedFriends?: boolean | Posts$taggedFriendsArgs<ExtArgs>
    media?: boolean | Posts$mediaArgs<ExtArgs>
    likes?: boolean | Posts$likesArgs<ExtArgs>
    comments?: boolean | Posts$commentsArgs<ExtArgs>
    shares?: boolean | Posts$sharesArgs<ExtArgs>
    newsFeed?: boolean | Posts$newsFeedArgs<ExtArgs>
    viewers?: boolean | Posts$viewersArgs<ExtArgs>
    _count?: boolean | PostsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PostsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }
  export type PostsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }

  export type $PostsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Posts"
    objects: {
      user: Prisma.$UsersPayload<ExtArgs>
      hashtags: Prisma.$PostHashtagsPayload<ExtArgs>[]
      taggedFriends: Prisma.$PostTagFriendPayload<ExtArgs>[]
      media: Prisma.$MediaPayload<ExtArgs>[]
      likes: Prisma.$LikesPayload<ExtArgs>[]
      comments: Prisma.$CommentsPayload<ExtArgs>[]
      shares: Prisma.$SharesPayload<ExtArgs>[]
      newsFeed: Prisma.$NewsFeedPayload<ExtArgs>[]
      viewers: Prisma.$ViewerPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      title: string | null
      content: string | null
      postType: $Enums.PostTypeEnum
      visibility: $Enums.VisibilityEnum
      censor: $Enums.CensorEnum
      shareCount: number
      likeCount: number
      commentCount: number
      createdAt: Date
      expired_at: Date | null
      updatedAt: Date
    }, ExtArgs["result"]["posts"]>
    composites: {}
  }

  type PostsGetPayload<S extends boolean | null | undefined | PostsDefaultArgs> = $Result.GetResult<Prisma.$PostsPayload, S>

  type PostsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PostsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PostsCountAggregateInputType | true
    }

  export interface PostsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Posts'], meta: { name: 'Posts' } }
    /**
     * Find zero or one Posts that matches the filter.
     * @param {PostsFindUniqueArgs} args - Arguments to find a Posts
     * @example
     * // Get one Posts
     * const posts = await prisma.posts.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PostsFindUniqueArgs>(args: SelectSubset<T, PostsFindUniqueArgs<ExtArgs>>): Prisma__PostsClient<$Result.GetResult<Prisma.$PostsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Posts that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PostsFindUniqueOrThrowArgs} args - Arguments to find a Posts
     * @example
     * // Get one Posts
     * const posts = await prisma.posts.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PostsFindUniqueOrThrowArgs>(args: SelectSubset<T, PostsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PostsClient<$Result.GetResult<Prisma.$PostsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Posts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostsFindFirstArgs} args - Arguments to find a Posts
     * @example
     * // Get one Posts
     * const posts = await prisma.posts.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PostsFindFirstArgs>(args?: SelectSubset<T, PostsFindFirstArgs<ExtArgs>>): Prisma__PostsClient<$Result.GetResult<Prisma.$PostsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Posts that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostsFindFirstOrThrowArgs} args - Arguments to find a Posts
     * @example
     * // Get one Posts
     * const posts = await prisma.posts.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PostsFindFirstOrThrowArgs>(args?: SelectSubset<T, PostsFindFirstOrThrowArgs<ExtArgs>>): Prisma__PostsClient<$Result.GetResult<Prisma.$PostsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Posts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Posts
     * const posts = await prisma.posts.findMany()
     * 
     * // Get first 10 Posts
     * const posts = await prisma.posts.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const postsWithIdOnly = await prisma.posts.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PostsFindManyArgs>(args?: SelectSubset<T, PostsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Posts.
     * @param {PostsCreateArgs} args - Arguments to create a Posts.
     * @example
     * // Create one Posts
     * const Posts = await prisma.posts.create({
     *   data: {
     *     // ... data to create a Posts
     *   }
     * })
     * 
     */
    create<T extends PostsCreateArgs>(args: SelectSubset<T, PostsCreateArgs<ExtArgs>>): Prisma__PostsClient<$Result.GetResult<Prisma.$PostsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Posts.
     * @param {PostsCreateManyArgs} args - Arguments to create many Posts.
     * @example
     * // Create many Posts
     * const posts = await prisma.posts.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PostsCreateManyArgs>(args?: SelectSubset<T, PostsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Posts and returns the data saved in the database.
     * @param {PostsCreateManyAndReturnArgs} args - Arguments to create many Posts.
     * @example
     * // Create many Posts
     * const posts = await prisma.posts.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Posts and only return the `id`
     * const postsWithIdOnly = await prisma.posts.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PostsCreateManyAndReturnArgs>(args?: SelectSubset<T, PostsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Posts.
     * @param {PostsDeleteArgs} args - Arguments to delete one Posts.
     * @example
     * // Delete one Posts
     * const Posts = await prisma.posts.delete({
     *   where: {
     *     // ... filter to delete one Posts
     *   }
     * })
     * 
     */
    delete<T extends PostsDeleteArgs>(args: SelectSubset<T, PostsDeleteArgs<ExtArgs>>): Prisma__PostsClient<$Result.GetResult<Prisma.$PostsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Posts.
     * @param {PostsUpdateArgs} args - Arguments to update one Posts.
     * @example
     * // Update one Posts
     * const posts = await prisma.posts.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PostsUpdateArgs>(args: SelectSubset<T, PostsUpdateArgs<ExtArgs>>): Prisma__PostsClient<$Result.GetResult<Prisma.$PostsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Posts.
     * @param {PostsDeleteManyArgs} args - Arguments to filter Posts to delete.
     * @example
     * // Delete a few Posts
     * const { count } = await prisma.posts.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PostsDeleteManyArgs>(args?: SelectSubset<T, PostsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Posts
     * const posts = await prisma.posts.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PostsUpdateManyArgs>(args: SelectSubset<T, PostsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Posts and returns the data updated in the database.
     * @param {PostsUpdateManyAndReturnArgs} args - Arguments to update many Posts.
     * @example
     * // Update many Posts
     * const posts = await prisma.posts.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Posts and only return the `id`
     * const postsWithIdOnly = await prisma.posts.updateManyAndReturn({
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
    updateManyAndReturn<T extends PostsUpdateManyAndReturnArgs>(args: SelectSubset<T, PostsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Posts.
     * @param {PostsUpsertArgs} args - Arguments to update or create a Posts.
     * @example
     * // Update or create a Posts
     * const posts = await prisma.posts.upsert({
     *   create: {
     *     // ... data to create a Posts
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Posts we want to update
     *   }
     * })
     */
    upsert<T extends PostsUpsertArgs>(args: SelectSubset<T, PostsUpsertArgs<ExtArgs>>): Prisma__PostsClient<$Result.GetResult<Prisma.$PostsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostsCountArgs} args - Arguments to filter Posts to count.
     * @example
     * // Count the number of Posts
     * const count = await prisma.posts.count({
     *   where: {
     *     // ... the filter for the Posts we want to count
     *   }
     * })
    **/
    count<T extends PostsCountArgs>(
      args?: Subset<T, PostsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PostsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PostsAggregateArgs>(args: Subset<T, PostsAggregateArgs>): Prisma.PrismaPromise<GetPostsAggregateType<T>>

    /**
     * Group by Posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostsGroupByArgs} args - Group by arguments.
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
      T extends PostsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PostsGroupByArgs['orderBy'] }
        : { orderBy?: PostsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PostsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPostsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Posts model
   */
  readonly fields: PostsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Posts.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PostsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UsersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsersDefaultArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    hashtags<T extends Posts$hashtagsArgs<ExtArgs> = {}>(args?: Subset<T, Posts$hashtagsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostHashtagsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    taggedFriends<T extends Posts$taggedFriendsArgs<ExtArgs> = {}>(args?: Subset<T, Posts$taggedFriendsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostTagFriendPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    media<T extends Posts$mediaArgs<ExtArgs> = {}>(args?: Subset<T, Posts$mediaArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MediaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    likes<T extends Posts$likesArgs<ExtArgs> = {}>(args?: Subset<T, Posts$likesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LikesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    comments<T extends Posts$commentsArgs<ExtArgs> = {}>(args?: Subset<T, Posts$commentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    shares<T extends Posts$sharesArgs<ExtArgs> = {}>(args?: Subset<T, Posts$sharesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SharesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    newsFeed<T extends Posts$newsFeedArgs<ExtArgs> = {}>(args?: Subset<T, Posts$newsFeedArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NewsFeedPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    viewers<T extends Posts$viewersArgs<ExtArgs> = {}>(args?: Subset<T, Posts$viewersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ViewerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Posts model
   */
  interface PostsFieldRefs {
    readonly id: FieldRef<"Posts", 'String'>
    readonly userId: FieldRef<"Posts", 'String'>
    readonly title: FieldRef<"Posts", 'String'>
    readonly content: FieldRef<"Posts", 'String'>
    readonly postType: FieldRef<"Posts", 'PostTypeEnum'>
    readonly visibility: FieldRef<"Posts", 'VisibilityEnum'>
    readonly censor: FieldRef<"Posts", 'CensorEnum'>
    readonly shareCount: FieldRef<"Posts", 'Int'>
    readonly likeCount: FieldRef<"Posts", 'Int'>
    readonly commentCount: FieldRef<"Posts", 'Int'>
    readonly createdAt: FieldRef<"Posts", 'DateTime'>
    readonly expired_at: FieldRef<"Posts", 'DateTime'>
    readonly updatedAt: FieldRef<"Posts", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Posts findUnique
   */
  export type PostsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Posts
     */
    select?: PostsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Posts
     */
    omit?: PostsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostsInclude<ExtArgs> | null
    /**
     * Filter, which Posts to fetch.
     */
    where: PostsWhereUniqueInput
  }

  /**
   * Posts findUniqueOrThrow
   */
  export type PostsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Posts
     */
    select?: PostsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Posts
     */
    omit?: PostsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostsInclude<ExtArgs> | null
    /**
     * Filter, which Posts to fetch.
     */
    where: PostsWhereUniqueInput
  }

  /**
   * Posts findFirst
   */
  export type PostsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Posts
     */
    select?: PostsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Posts
     */
    omit?: PostsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostsInclude<ExtArgs> | null
    /**
     * Filter, which Posts to fetch.
     */
    where?: PostsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostsOrderByWithRelationInput | PostsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Posts.
     */
    cursor?: PostsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Posts.
     */
    distinct?: PostsScalarFieldEnum | PostsScalarFieldEnum[]
  }

  /**
   * Posts findFirstOrThrow
   */
  export type PostsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Posts
     */
    select?: PostsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Posts
     */
    omit?: PostsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostsInclude<ExtArgs> | null
    /**
     * Filter, which Posts to fetch.
     */
    where?: PostsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostsOrderByWithRelationInput | PostsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Posts.
     */
    cursor?: PostsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Posts.
     */
    distinct?: PostsScalarFieldEnum | PostsScalarFieldEnum[]
  }

  /**
   * Posts findMany
   */
  export type PostsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Posts
     */
    select?: PostsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Posts
     */
    omit?: PostsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostsInclude<ExtArgs> | null
    /**
     * Filter, which Posts to fetch.
     */
    where?: PostsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostsOrderByWithRelationInput | PostsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Posts.
     */
    cursor?: PostsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    distinct?: PostsScalarFieldEnum | PostsScalarFieldEnum[]
  }

  /**
   * Posts create
   */
  export type PostsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Posts
     */
    select?: PostsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Posts
     */
    omit?: PostsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostsInclude<ExtArgs> | null
    /**
     * The data needed to create a Posts.
     */
    data: XOR<PostsCreateInput, PostsUncheckedCreateInput>
  }

  /**
   * Posts createMany
   */
  export type PostsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Posts.
     */
    data: PostsCreateManyInput | PostsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Posts createManyAndReturn
   */
  export type PostsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Posts
     */
    select?: PostsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Posts
     */
    omit?: PostsOmit<ExtArgs> | null
    /**
     * The data used to create many Posts.
     */
    data: PostsCreateManyInput | PostsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Posts update
   */
  export type PostsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Posts
     */
    select?: PostsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Posts
     */
    omit?: PostsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostsInclude<ExtArgs> | null
    /**
     * The data needed to update a Posts.
     */
    data: XOR<PostsUpdateInput, PostsUncheckedUpdateInput>
    /**
     * Choose, which Posts to update.
     */
    where: PostsWhereUniqueInput
  }

  /**
   * Posts updateMany
   */
  export type PostsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Posts.
     */
    data: XOR<PostsUpdateManyMutationInput, PostsUncheckedUpdateManyInput>
    /**
     * Filter which Posts to update
     */
    where?: PostsWhereInput
    /**
     * Limit how many Posts to update.
     */
    limit?: number
  }

  /**
   * Posts updateManyAndReturn
   */
  export type PostsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Posts
     */
    select?: PostsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Posts
     */
    omit?: PostsOmit<ExtArgs> | null
    /**
     * The data used to update Posts.
     */
    data: XOR<PostsUpdateManyMutationInput, PostsUncheckedUpdateManyInput>
    /**
     * Filter which Posts to update
     */
    where?: PostsWhereInput
    /**
     * Limit how many Posts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Posts upsert
   */
  export type PostsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Posts
     */
    select?: PostsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Posts
     */
    omit?: PostsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostsInclude<ExtArgs> | null
    /**
     * The filter to search for the Posts to update in case it exists.
     */
    where: PostsWhereUniqueInput
    /**
     * In case the Posts found by the `where` argument doesn't exist, create a new Posts with this data.
     */
    create: XOR<PostsCreateInput, PostsUncheckedCreateInput>
    /**
     * In case the Posts was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PostsUpdateInput, PostsUncheckedUpdateInput>
  }

  /**
   * Posts delete
   */
  export type PostsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Posts
     */
    select?: PostsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Posts
     */
    omit?: PostsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostsInclude<ExtArgs> | null
    /**
     * Filter which Posts to delete.
     */
    where: PostsWhereUniqueInput
  }

  /**
   * Posts deleteMany
   */
  export type PostsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Posts to delete
     */
    where?: PostsWhereInput
    /**
     * Limit how many Posts to delete.
     */
    limit?: number
  }

  /**
   * Posts.hashtags
   */
  export type Posts$hashtagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostHashtags
     */
    select?: PostHashtagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostHashtags
     */
    omit?: PostHashtagsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostHashtagsInclude<ExtArgs> | null
    where?: PostHashtagsWhereInput
    orderBy?: PostHashtagsOrderByWithRelationInput | PostHashtagsOrderByWithRelationInput[]
    cursor?: PostHashtagsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PostHashtagsScalarFieldEnum | PostHashtagsScalarFieldEnum[]
  }

  /**
   * Posts.taggedFriends
   */
  export type Posts$taggedFriendsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostTagFriend
     */
    select?: PostTagFriendSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostTagFriend
     */
    omit?: PostTagFriendOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostTagFriendInclude<ExtArgs> | null
    where?: PostTagFriendWhereInput
    orderBy?: PostTagFriendOrderByWithRelationInput | PostTagFriendOrderByWithRelationInput[]
    cursor?: PostTagFriendWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PostTagFriendScalarFieldEnum | PostTagFriendScalarFieldEnum[]
  }

  /**
   * Posts.media
   */
  export type Posts$mediaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Media
     */
    select?: MediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Media
     */
    omit?: MediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaInclude<ExtArgs> | null
    where?: MediaWhereInput
    orderBy?: MediaOrderByWithRelationInput | MediaOrderByWithRelationInput[]
    cursor?: MediaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MediaScalarFieldEnum | MediaScalarFieldEnum[]
  }

  /**
   * Posts.likes
   */
  export type Posts$likesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Likes
     */
    select?: LikesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Likes
     */
    omit?: LikesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikesInclude<ExtArgs> | null
    where?: LikesWhereInput
    orderBy?: LikesOrderByWithRelationInput | LikesOrderByWithRelationInput[]
    cursor?: LikesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LikesScalarFieldEnum | LikesScalarFieldEnum[]
  }

  /**
   * Posts.comments
   */
  export type Posts$commentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comments
     */
    select?: CommentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comments
     */
    omit?: CommentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentsInclude<ExtArgs> | null
    where?: CommentsWhereInput
    orderBy?: CommentsOrderByWithRelationInput | CommentsOrderByWithRelationInput[]
    cursor?: CommentsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CommentsScalarFieldEnum | CommentsScalarFieldEnum[]
  }

  /**
   * Posts.shares
   */
  export type Posts$sharesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shares
     */
    select?: SharesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shares
     */
    omit?: SharesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SharesInclude<ExtArgs> | null
    where?: SharesWhereInput
    orderBy?: SharesOrderByWithRelationInput | SharesOrderByWithRelationInput[]
    cursor?: SharesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SharesScalarFieldEnum | SharesScalarFieldEnum[]
  }

  /**
   * Posts.newsFeed
   */
  export type Posts$newsFeedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsFeed
     */
    select?: NewsFeedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsFeed
     */
    omit?: NewsFeedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsFeedInclude<ExtArgs> | null
    where?: NewsFeedWhereInput
    orderBy?: NewsFeedOrderByWithRelationInput | NewsFeedOrderByWithRelationInput[]
    cursor?: NewsFeedWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NewsFeedScalarFieldEnum | NewsFeedScalarFieldEnum[]
  }

  /**
   * Posts.viewers
   */
  export type Posts$viewersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Viewer
     */
    select?: ViewerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Viewer
     */
    omit?: ViewerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViewerInclude<ExtArgs> | null
    where?: ViewerWhereInput
    orderBy?: ViewerOrderByWithRelationInput | ViewerOrderByWithRelationInput[]
    cursor?: ViewerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ViewerScalarFieldEnum | ViewerScalarFieldEnum[]
  }

  /**
   * Posts without action
   */
  export type PostsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Posts
     */
    select?: PostsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Posts
     */
    omit?: PostsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostsInclude<ExtArgs> | null
  }


  /**
   * Model Viewer
   */

  export type AggregateViewer = {
    _count: ViewerCountAggregateOutputType | null
    _avg: ViewerAvgAggregateOutputType | null
    _sum: ViewerSumAggregateOutputType | null
    _min: ViewerMinAggregateOutputType | null
    _max: ViewerMaxAggregateOutputType | null
  }

  export type ViewerAvgAggregateOutputType = {
    id: number | null
  }

  export type ViewerSumAggregateOutputType = {
    id: number | null
  }

  export type ViewerMinAggregateOutputType = {
    id: number | null
    userId: string | null
    postId: string | null
    viewedAt: Date | null
  }

  export type ViewerMaxAggregateOutputType = {
    id: number | null
    userId: string | null
    postId: string | null
    viewedAt: Date | null
  }

  export type ViewerCountAggregateOutputType = {
    id: number
    userId: number
    postId: number
    viewedAt: number
    _all: number
  }


  export type ViewerAvgAggregateInputType = {
    id?: true
  }

  export type ViewerSumAggregateInputType = {
    id?: true
  }

  export type ViewerMinAggregateInputType = {
    id?: true
    userId?: true
    postId?: true
    viewedAt?: true
  }

  export type ViewerMaxAggregateInputType = {
    id?: true
    userId?: true
    postId?: true
    viewedAt?: true
  }

  export type ViewerCountAggregateInputType = {
    id?: true
    userId?: true
    postId?: true
    viewedAt?: true
    _all?: true
  }

  export type ViewerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Viewer to aggregate.
     */
    where?: ViewerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Viewers to fetch.
     */
    orderBy?: ViewerOrderByWithRelationInput | ViewerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ViewerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Viewers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Viewers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Viewers
    **/
    _count?: true | ViewerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ViewerAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ViewerSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ViewerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ViewerMaxAggregateInputType
  }

  export type GetViewerAggregateType<T extends ViewerAggregateArgs> = {
        [P in keyof T & keyof AggregateViewer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateViewer[P]>
      : GetScalarType<T[P], AggregateViewer[P]>
  }




  export type ViewerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ViewerWhereInput
    orderBy?: ViewerOrderByWithAggregationInput | ViewerOrderByWithAggregationInput[]
    by: ViewerScalarFieldEnum[] | ViewerScalarFieldEnum
    having?: ViewerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ViewerCountAggregateInputType | true
    _avg?: ViewerAvgAggregateInputType
    _sum?: ViewerSumAggregateInputType
    _min?: ViewerMinAggregateInputType
    _max?: ViewerMaxAggregateInputType
  }

  export type ViewerGroupByOutputType = {
    id: number
    userId: string
    postId: string
    viewedAt: Date
    _count: ViewerCountAggregateOutputType | null
    _avg: ViewerAvgAggregateOutputType | null
    _sum: ViewerSumAggregateOutputType | null
    _min: ViewerMinAggregateOutputType | null
    _max: ViewerMaxAggregateOutputType | null
  }

  type GetViewerGroupByPayload<T extends ViewerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ViewerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ViewerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ViewerGroupByOutputType[P]>
            : GetScalarType<T[P], ViewerGroupByOutputType[P]>
        }
      >
    >


  export type ViewerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    postId?: boolean
    viewedAt?: boolean
    user?: boolean | UsersDefaultArgs<ExtArgs>
    post?: boolean | PostsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["viewer"]>

  export type ViewerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    postId?: boolean
    viewedAt?: boolean
    user?: boolean | UsersDefaultArgs<ExtArgs>
    post?: boolean | PostsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["viewer"]>

  export type ViewerSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    postId?: boolean
    viewedAt?: boolean
    user?: boolean | UsersDefaultArgs<ExtArgs>
    post?: boolean | PostsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["viewer"]>

  export type ViewerSelectScalar = {
    id?: boolean
    userId?: boolean
    postId?: boolean
    viewedAt?: boolean
  }

  export type ViewerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "postId" | "viewedAt", ExtArgs["result"]["viewer"]>
  export type ViewerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsersDefaultArgs<ExtArgs>
    post?: boolean | PostsDefaultArgs<ExtArgs>
  }
  export type ViewerIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsersDefaultArgs<ExtArgs>
    post?: boolean | PostsDefaultArgs<ExtArgs>
  }
  export type ViewerIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsersDefaultArgs<ExtArgs>
    post?: boolean | PostsDefaultArgs<ExtArgs>
  }

  export type $ViewerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Viewer"
    objects: {
      user: Prisma.$UsersPayload<ExtArgs>
      post: Prisma.$PostsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: string
      postId: string
      viewedAt: Date
    }, ExtArgs["result"]["viewer"]>
    composites: {}
  }

  type ViewerGetPayload<S extends boolean | null | undefined | ViewerDefaultArgs> = $Result.GetResult<Prisma.$ViewerPayload, S>

  type ViewerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ViewerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ViewerCountAggregateInputType | true
    }

  export interface ViewerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Viewer'], meta: { name: 'Viewer' } }
    /**
     * Find zero or one Viewer that matches the filter.
     * @param {ViewerFindUniqueArgs} args - Arguments to find a Viewer
     * @example
     * // Get one Viewer
     * const viewer = await prisma.viewer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ViewerFindUniqueArgs>(args: SelectSubset<T, ViewerFindUniqueArgs<ExtArgs>>): Prisma__ViewerClient<$Result.GetResult<Prisma.$ViewerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Viewer that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ViewerFindUniqueOrThrowArgs} args - Arguments to find a Viewer
     * @example
     * // Get one Viewer
     * const viewer = await prisma.viewer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ViewerFindUniqueOrThrowArgs>(args: SelectSubset<T, ViewerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ViewerClient<$Result.GetResult<Prisma.$ViewerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Viewer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ViewerFindFirstArgs} args - Arguments to find a Viewer
     * @example
     * // Get one Viewer
     * const viewer = await prisma.viewer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ViewerFindFirstArgs>(args?: SelectSubset<T, ViewerFindFirstArgs<ExtArgs>>): Prisma__ViewerClient<$Result.GetResult<Prisma.$ViewerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Viewer that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ViewerFindFirstOrThrowArgs} args - Arguments to find a Viewer
     * @example
     * // Get one Viewer
     * const viewer = await prisma.viewer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ViewerFindFirstOrThrowArgs>(args?: SelectSubset<T, ViewerFindFirstOrThrowArgs<ExtArgs>>): Prisma__ViewerClient<$Result.GetResult<Prisma.$ViewerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Viewers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ViewerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Viewers
     * const viewers = await prisma.viewer.findMany()
     * 
     * // Get first 10 Viewers
     * const viewers = await prisma.viewer.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const viewerWithIdOnly = await prisma.viewer.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ViewerFindManyArgs>(args?: SelectSubset<T, ViewerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ViewerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Viewer.
     * @param {ViewerCreateArgs} args - Arguments to create a Viewer.
     * @example
     * // Create one Viewer
     * const Viewer = await prisma.viewer.create({
     *   data: {
     *     // ... data to create a Viewer
     *   }
     * })
     * 
     */
    create<T extends ViewerCreateArgs>(args: SelectSubset<T, ViewerCreateArgs<ExtArgs>>): Prisma__ViewerClient<$Result.GetResult<Prisma.$ViewerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Viewers.
     * @param {ViewerCreateManyArgs} args - Arguments to create many Viewers.
     * @example
     * // Create many Viewers
     * const viewer = await prisma.viewer.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ViewerCreateManyArgs>(args?: SelectSubset<T, ViewerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Viewers and returns the data saved in the database.
     * @param {ViewerCreateManyAndReturnArgs} args - Arguments to create many Viewers.
     * @example
     * // Create many Viewers
     * const viewer = await prisma.viewer.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Viewers and only return the `id`
     * const viewerWithIdOnly = await prisma.viewer.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ViewerCreateManyAndReturnArgs>(args?: SelectSubset<T, ViewerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ViewerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Viewer.
     * @param {ViewerDeleteArgs} args - Arguments to delete one Viewer.
     * @example
     * // Delete one Viewer
     * const Viewer = await prisma.viewer.delete({
     *   where: {
     *     // ... filter to delete one Viewer
     *   }
     * })
     * 
     */
    delete<T extends ViewerDeleteArgs>(args: SelectSubset<T, ViewerDeleteArgs<ExtArgs>>): Prisma__ViewerClient<$Result.GetResult<Prisma.$ViewerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Viewer.
     * @param {ViewerUpdateArgs} args - Arguments to update one Viewer.
     * @example
     * // Update one Viewer
     * const viewer = await prisma.viewer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ViewerUpdateArgs>(args: SelectSubset<T, ViewerUpdateArgs<ExtArgs>>): Prisma__ViewerClient<$Result.GetResult<Prisma.$ViewerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Viewers.
     * @param {ViewerDeleteManyArgs} args - Arguments to filter Viewers to delete.
     * @example
     * // Delete a few Viewers
     * const { count } = await prisma.viewer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ViewerDeleteManyArgs>(args?: SelectSubset<T, ViewerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Viewers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ViewerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Viewers
     * const viewer = await prisma.viewer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ViewerUpdateManyArgs>(args: SelectSubset<T, ViewerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Viewers and returns the data updated in the database.
     * @param {ViewerUpdateManyAndReturnArgs} args - Arguments to update many Viewers.
     * @example
     * // Update many Viewers
     * const viewer = await prisma.viewer.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Viewers and only return the `id`
     * const viewerWithIdOnly = await prisma.viewer.updateManyAndReturn({
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
    updateManyAndReturn<T extends ViewerUpdateManyAndReturnArgs>(args: SelectSubset<T, ViewerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ViewerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Viewer.
     * @param {ViewerUpsertArgs} args - Arguments to update or create a Viewer.
     * @example
     * // Update or create a Viewer
     * const viewer = await prisma.viewer.upsert({
     *   create: {
     *     // ... data to create a Viewer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Viewer we want to update
     *   }
     * })
     */
    upsert<T extends ViewerUpsertArgs>(args: SelectSubset<T, ViewerUpsertArgs<ExtArgs>>): Prisma__ViewerClient<$Result.GetResult<Prisma.$ViewerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Viewers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ViewerCountArgs} args - Arguments to filter Viewers to count.
     * @example
     * // Count the number of Viewers
     * const count = await prisma.viewer.count({
     *   where: {
     *     // ... the filter for the Viewers we want to count
     *   }
     * })
    **/
    count<T extends ViewerCountArgs>(
      args?: Subset<T, ViewerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ViewerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Viewer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ViewerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ViewerAggregateArgs>(args: Subset<T, ViewerAggregateArgs>): Prisma.PrismaPromise<GetViewerAggregateType<T>>

    /**
     * Group by Viewer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ViewerGroupByArgs} args - Group by arguments.
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
      T extends ViewerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ViewerGroupByArgs['orderBy'] }
        : { orderBy?: ViewerGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ViewerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetViewerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Viewer model
   */
  readonly fields: ViewerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Viewer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ViewerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UsersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsersDefaultArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    post<T extends PostsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PostsDefaultArgs<ExtArgs>>): Prisma__PostsClient<$Result.GetResult<Prisma.$PostsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Viewer model
   */
  interface ViewerFieldRefs {
    readonly id: FieldRef<"Viewer", 'Int'>
    readonly userId: FieldRef<"Viewer", 'String'>
    readonly postId: FieldRef<"Viewer", 'String'>
    readonly viewedAt: FieldRef<"Viewer", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Viewer findUnique
   */
  export type ViewerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Viewer
     */
    select?: ViewerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Viewer
     */
    omit?: ViewerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViewerInclude<ExtArgs> | null
    /**
     * Filter, which Viewer to fetch.
     */
    where: ViewerWhereUniqueInput
  }

  /**
   * Viewer findUniqueOrThrow
   */
  export type ViewerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Viewer
     */
    select?: ViewerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Viewer
     */
    omit?: ViewerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViewerInclude<ExtArgs> | null
    /**
     * Filter, which Viewer to fetch.
     */
    where: ViewerWhereUniqueInput
  }

  /**
   * Viewer findFirst
   */
  export type ViewerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Viewer
     */
    select?: ViewerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Viewer
     */
    omit?: ViewerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViewerInclude<ExtArgs> | null
    /**
     * Filter, which Viewer to fetch.
     */
    where?: ViewerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Viewers to fetch.
     */
    orderBy?: ViewerOrderByWithRelationInput | ViewerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Viewers.
     */
    cursor?: ViewerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Viewers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Viewers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Viewers.
     */
    distinct?: ViewerScalarFieldEnum | ViewerScalarFieldEnum[]
  }

  /**
   * Viewer findFirstOrThrow
   */
  export type ViewerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Viewer
     */
    select?: ViewerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Viewer
     */
    omit?: ViewerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViewerInclude<ExtArgs> | null
    /**
     * Filter, which Viewer to fetch.
     */
    where?: ViewerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Viewers to fetch.
     */
    orderBy?: ViewerOrderByWithRelationInput | ViewerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Viewers.
     */
    cursor?: ViewerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Viewers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Viewers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Viewers.
     */
    distinct?: ViewerScalarFieldEnum | ViewerScalarFieldEnum[]
  }

  /**
   * Viewer findMany
   */
  export type ViewerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Viewer
     */
    select?: ViewerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Viewer
     */
    omit?: ViewerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViewerInclude<ExtArgs> | null
    /**
     * Filter, which Viewers to fetch.
     */
    where?: ViewerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Viewers to fetch.
     */
    orderBy?: ViewerOrderByWithRelationInput | ViewerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Viewers.
     */
    cursor?: ViewerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Viewers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Viewers.
     */
    skip?: number
    distinct?: ViewerScalarFieldEnum | ViewerScalarFieldEnum[]
  }

  /**
   * Viewer create
   */
  export type ViewerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Viewer
     */
    select?: ViewerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Viewer
     */
    omit?: ViewerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViewerInclude<ExtArgs> | null
    /**
     * The data needed to create a Viewer.
     */
    data: XOR<ViewerCreateInput, ViewerUncheckedCreateInput>
  }

  /**
   * Viewer createMany
   */
  export type ViewerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Viewers.
     */
    data: ViewerCreateManyInput | ViewerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Viewer createManyAndReturn
   */
  export type ViewerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Viewer
     */
    select?: ViewerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Viewer
     */
    omit?: ViewerOmit<ExtArgs> | null
    /**
     * The data used to create many Viewers.
     */
    data: ViewerCreateManyInput | ViewerCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViewerIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Viewer update
   */
  export type ViewerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Viewer
     */
    select?: ViewerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Viewer
     */
    omit?: ViewerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViewerInclude<ExtArgs> | null
    /**
     * The data needed to update a Viewer.
     */
    data: XOR<ViewerUpdateInput, ViewerUncheckedUpdateInput>
    /**
     * Choose, which Viewer to update.
     */
    where: ViewerWhereUniqueInput
  }

  /**
   * Viewer updateMany
   */
  export type ViewerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Viewers.
     */
    data: XOR<ViewerUpdateManyMutationInput, ViewerUncheckedUpdateManyInput>
    /**
     * Filter which Viewers to update
     */
    where?: ViewerWhereInput
    /**
     * Limit how many Viewers to update.
     */
    limit?: number
  }

  /**
   * Viewer updateManyAndReturn
   */
  export type ViewerUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Viewer
     */
    select?: ViewerSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Viewer
     */
    omit?: ViewerOmit<ExtArgs> | null
    /**
     * The data used to update Viewers.
     */
    data: XOR<ViewerUpdateManyMutationInput, ViewerUncheckedUpdateManyInput>
    /**
     * Filter which Viewers to update
     */
    where?: ViewerWhereInput
    /**
     * Limit how many Viewers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViewerIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Viewer upsert
   */
  export type ViewerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Viewer
     */
    select?: ViewerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Viewer
     */
    omit?: ViewerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViewerInclude<ExtArgs> | null
    /**
     * The filter to search for the Viewer to update in case it exists.
     */
    where: ViewerWhereUniqueInput
    /**
     * In case the Viewer found by the `where` argument doesn't exist, create a new Viewer with this data.
     */
    create: XOR<ViewerCreateInput, ViewerUncheckedCreateInput>
    /**
     * In case the Viewer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ViewerUpdateInput, ViewerUncheckedUpdateInput>
  }

  /**
   * Viewer delete
   */
  export type ViewerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Viewer
     */
    select?: ViewerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Viewer
     */
    omit?: ViewerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViewerInclude<ExtArgs> | null
    /**
     * Filter which Viewer to delete.
     */
    where: ViewerWhereUniqueInput
  }

  /**
   * Viewer deleteMany
   */
  export type ViewerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Viewers to delete
     */
    where?: ViewerWhereInput
    /**
     * Limit how many Viewers to delete.
     */
    limit?: number
  }

  /**
   * Viewer without action
   */
  export type ViewerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Viewer
     */
    select?: ViewerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Viewer
     */
    omit?: ViewerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViewerInclude<ExtArgs> | null
  }


  /**
   * Model Hashtag
   */

  export type AggregateHashtag = {
    _count: HashtagCountAggregateOutputType | null
    _min: HashtagMinAggregateOutputType | null
    _max: HashtagMaxAggregateOutputType | null
  }

  export type HashtagMinAggregateOutputType = {
    id: string | null
    name: string | null
    createdAt: Date | null
  }

  export type HashtagMaxAggregateOutputType = {
    id: string | null
    name: string | null
    createdAt: Date | null
  }

  export type HashtagCountAggregateOutputType = {
    id: number
    name: number
    createdAt: number
    _all: number
  }


  export type HashtagMinAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
  }

  export type HashtagMaxAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
  }

  export type HashtagCountAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    _all?: true
  }

  export type HashtagAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Hashtag to aggregate.
     */
    where?: HashtagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Hashtags to fetch.
     */
    orderBy?: HashtagOrderByWithRelationInput | HashtagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: HashtagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Hashtags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Hashtags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Hashtags
    **/
    _count?: true | HashtagCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HashtagMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HashtagMaxAggregateInputType
  }

  export type GetHashtagAggregateType<T extends HashtagAggregateArgs> = {
        [P in keyof T & keyof AggregateHashtag]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHashtag[P]>
      : GetScalarType<T[P], AggregateHashtag[P]>
  }




  export type HashtagGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HashtagWhereInput
    orderBy?: HashtagOrderByWithAggregationInput | HashtagOrderByWithAggregationInput[]
    by: HashtagScalarFieldEnum[] | HashtagScalarFieldEnum
    having?: HashtagScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HashtagCountAggregateInputType | true
    _min?: HashtagMinAggregateInputType
    _max?: HashtagMaxAggregateInputType
  }

  export type HashtagGroupByOutputType = {
    id: string
    name: string
    createdAt: Date
    _count: HashtagCountAggregateOutputType | null
    _min: HashtagMinAggregateOutputType | null
    _max: HashtagMaxAggregateOutputType | null
  }

  type GetHashtagGroupByPayload<T extends HashtagGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<HashtagGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof HashtagGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HashtagGroupByOutputType[P]>
            : GetScalarType<T[P], HashtagGroupByOutputType[P]>
        }
      >
    >


  export type HashtagSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    posts?: boolean | Hashtag$postsArgs<ExtArgs>
    _count?: boolean | HashtagCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["hashtag"]>

  export type HashtagSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["hashtag"]>

  export type HashtagSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["hashtag"]>

  export type HashtagSelectScalar = {
    id?: boolean
    name?: boolean
    createdAt?: boolean
  }

  export type HashtagOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "createdAt", ExtArgs["result"]["hashtag"]>
  export type HashtagInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    posts?: boolean | Hashtag$postsArgs<ExtArgs>
    _count?: boolean | HashtagCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type HashtagIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type HashtagIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $HashtagPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Hashtag"
    objects: {
      posts: Prisma.$PostHashtagsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      createdAt: Date
    }, ExtArgs["result"]["hashtag"]>
    composites: {}
  }

  type HashtagGetPayload<S extends boolean | null | undefined | HashtagDefaultArgs> = $Result.GetResult<Prisma.$HashtagPayload, S>

  type HashtagCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<HashtagFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: HashtagCountAggregateInputType | true
    }

  export interface HashtagDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Hashtag'], meta: { name: 'Hashtag' } }
    /**
     * Find zero or one Hashtag that matches the filter.
     * @param {HashtagFindUniqueArgs} args - Arguments to find a Hashtag
     * @example
     * // Get one Hashtag
     * const hashtag = await prisma.hashtag.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends HashtagFindUniqueArgs>(args: SelectSubset<T, HashtagFindUniqueArgs<ExtArgs>>): Prisma__HashtagClient<$Result.GetResult<Prisma.$HashtagPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Hashtag that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {HashtagFindUniqueOrThrowArgs} args - Arguments to find a Hashtag
     * @example
     * // Get one Hashtag
     * const hashtag = await prisma.hashtag.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends HashtagFindUniqueOrThrowArgs>(args: SelectSubset<T, HashtagFindUniqueOrThrowArgs<ExtArgs>>): Prisma__HashtagClient<$Result.GetResult<Prisma.$HashtagPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Hashtag that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HashtagFindFirstArgs} args - Arguments to find a Hashtag
     * @example
     * // Get one Hashtag
     * const hashtag = await prisma.hashtag.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends HashtagFindFirstArgs>(args?: SelectSubset<T, HashtagFindFirstArgs<ExtArgs>>): Prisma__HashtagClient<$Result.GetResult<Prisma.$HashtagPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Hashtag that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HashtagFindFirstOrThrowArgs} args - Arguments to find a Hashtag
     * @example
     * // Get one Hashtag
     * const hashtag = await prisma.hashtag.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends HashtagFindFirstOrThrowArgs>(args?: SelectSubset<T, HashtagFindFirstOrThrowArgs<ExtArgs>>): Prisma__HashtagClient<$Result.GetResult<Prisma.$HashtagPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Hashtags that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HashtagFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Hashtags
     * const hashtags = await prisma.hashtag.findMany()
     * 
     * // Get first 10 Hashtags
     * const hashtags = await prisma.hashtag.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const hashtagWithIdOnly = await prisma.hashtag.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends HashtagFindManyArgs>(args?: SelectSubset<T, HashtagFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HashtagPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Hashtag.
     * @param {HashtagCreateArgs} args - Arguments to create a Hashtag.
     * @example
     * // Create one Hashtag
     * const Hashtag = await prisma.hashtag.create({
     *   data: {
     *     // ... data to create a Hashtag
     *   }
     * })
     * 
     */
    create<T extends HashtagCreateArgs>(args: SelectSubset<T, HashtagCreateArgs<ExtArgs>>): Prisma__HashtagClient<$Result.GetResult<Prisma.$HashtagPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Hashtags.
     * @param {HashtagCreateManyArgs} args - Arguments to create many Hashtags.
     * @example
     * // Create many Hashtags
     * const hashtag = await prisma.hashtag.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends HashtagCreateManyArgs>(args?: SelectSubset<T, HashtagCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Hashtags and returns the data saved in the database.
     * @param {HashtagCreateManyAndReturnArgs} args - Arguments to create many Hashtags.
     * @example
     * // Create many Hashtags
     * const hashtag = await prisma.hashtag.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Hashtags and only return the `id`
     * const hashtagWithIdOnly = await prisma.hashtag.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends HashtagCreateManyAndReturnArgs>(args?: SelectSubset<T, HashtagCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HashtagPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Hashtag.
     * @param {HashtagDeleteArgs} args - Arguments to delete one Hashtag.
     * @example
     * // Delete one Hashtag
     * const Hashtag = await prisma.hashtag.delete({
     *   where: {
     *     // ... filter to delete one Hashtag
     *   }
     * })
     * 
     */
    delete<T extends HashtagDeleteArgs>(args: SelectSubset<T, HashtagDeleteArgs<ExtArgs>>): Prisma__HashtagClient<$Result.GetResult<Prisma.$HashtagPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Hashtag.
     * @param {HashtagUpdateArgs} args - Arguments to update one Hashtag.
     * @example
     * // Update one Hashtag
     * const hashtag = await prisma.hashtag.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends HashtagUpdateArgs>(args: SelectSubset<T, HashtagUpdateArgs<ExtArgs>>): Prisma__HashtagClient<$Result.GetResult<Prisma.$HashtagPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Hashtags.
     * @param {HashtagDeleteManyArgs} args - Arguments to filter Hashtags to delete.
     * @example
     * // Delete a few Hashtags
     * const { count } = await prisma.hashtag.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends HashtagDeleteManyArgs>(args?: SelectSubset<T, HashtagDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Hashtags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HashtagUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Hashtags
     * const hashtag = await prisma.hashtag.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends HashtagUpdateManyArgs>(args: SelectSubset<T, HashtagUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Hashtags and returns the data updated in the database.
     * @param {HashtagUpdateManyAndReturnArgs} args - Arguments to update many Hashtags.
     * @example
     * // Update many Hashtags
     * const hashtag = await prisma.hashtag.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Hashtags and only return the `id`
     * const hashtagWithIdOnly = await prisma.hashtag.updateManyAndReturn({
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
    updateManyAndReturn<T extends HashtagUpdateManyAndReturnArgs>(args: SelectSubset<T, HashtagUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HashtagPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Hashtag.
     * @param {HashtagUpsertArgs} args - Arguments to update or create a Hashtag.
     * @example
     * // Update or create a Hashtag
     * const hashtag = await prisma.hashtag.upsert({
     *   create: {
     *     // ... data to create a Hashtag
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Hashtag we want to update
     *   }
     * })
     */
    upsert<T extends HashtagUpsertArgs>(args: SelectSubset<T, HashtagUpsertArgs<ExtArgs>>): Prisma__HashtagClient<$Result.GetResult<Prisma.$HashtagPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Hashtags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HashtagCountArgs} args - Arguments to filter Hashtags to count.
     * @example
     * // Count the number of Hashtags
     * const count = await prisma.hashtag.count({
     *   where: {
     *     // ... the filter for the Hashtags we want to count
     *   }
     * })
    **/
    count<T extends HashtagCountArgs>(
      args?: Subset<T, HashtagCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HashtagCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Hashtag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HashtagAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends HashtagAggregateArgs>(args: Subset<T, HashtagAggregateArgs>): Prisma.PrismaPromise<GetHashtagAggregateType<T>>

    /**
     * Group by Hashtag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HashtagGroupByArgs} args - Group by arguments.
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
      T extends HashtagGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: HashtagGroupByArgs['orderBy'] }
        : { orderBy?: HashtagGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, HashtagGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHashtagGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Hashtag model
   */
  readonly fields: HashtagFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Hashtag.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__HashtagClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    posts<T extends Hashtag$postsArgs<ExtArgs> = {}>(args?: Subset<T, Hashtag$postsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostHashtagsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Hashtag model
   */
  interface HashtagFieldRefs {
    readonly id: FieldRef<"Hashtag", 'String'>
    readonly name: FieldRef<"Hashtag", 'String'>
    readonly createdAt: FieldRef<"Hashtag", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Hashtag findUnique
   */
  export type HashtagFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hashtag
     */
    select?: HashtagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hashtag
     */
    omit?: HashtagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HashtagInclude<ExtArgs> | null
    /**
     * Filter, which Hashtag to fetch.
     */
    where: HashtagWhereUniqueInput
  }

  /**
   * Hashtag findUniqueOrThrow
   */
  export type HashtagFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hashtag
     */
    select?: HashtagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hashtag
     */
    omit?: HashtagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HashtagInclude<ExtArgs> | null
    /**
     * Filter, which Hashtag to fetch.
     */
    where: HashtagWhereUniqueInput
  }

  /**
   * Hashtag findFirst
   */
  export type HashtagFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hashtag
     */
    select?: HashtagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hashtag
     */
    omit?: HashtagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HashtagInclude<ExtArgs> | null
    /**
     * Filter, which Hashtag to fetch.
     */
    where?: HashtagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Hashtags to fetch.
     */
    orderBy?: HashtagOrderByWithRelationInput | HashtagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Hashtags.
     */
    cursor?: HashtagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Hashtags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Hashtags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Hashtags.
     */
    distinct?: HashtagScalarFieldEnum | HashtagScalarFieldEnum[]
  }

  /**
   * Hashtag findFirstOrThrow
   */
  export type HashtagFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hashtag
     */
    select?: HashtagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hashtag
     */
    omit?: HashtagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HashtagInclude<ExtArgs> | null
    /**
     * Filter, which Hashtag to fetch.
     */
    where?: HashtagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Hashtags to fetch.
     */
    orderBy?: HashtagOrderByWithRelationInput | HashtagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Hashtags.
     */
    cursor?: HashtagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Hashtags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Hashtags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Hashtags.
     */
    distinct?: HashtagScalarFieldEnum | HashtagScalarFieldEnum[]
  }

  /**
   * Hashtag findMany
   */
  export type HashtagFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hashtag
     */
    select?: HashtagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hashtag
     */
    omit?: HashtagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HashtagInclude<ExtArgs> | null
    /**
     * Filter, which Hashtags to fetch.
     */
    where?: HashtagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Hashtags to fetch.
     */
    orderBy?: HashtagOrderByWithRelationInput | HashtagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Hashtags.
     */
    cursor?: HashtagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Hashtags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Hashtags.
     */
    skip?: number
    distinct?: HashtagScalarFieldEnum | HashtagScalarFieldEnum[]
  }

  /**
   * Hashtag create
   */
  export type HashtagCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hashtag
     */
    select?: HashtagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hashtag
     */
    omit?: HashtagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HashtagInclude<ExtArgs> | null
    /**
     * The data needed to create a Hashtag.
     */
    data: XOR<HashtagCreateInput, HashtagUncheckedCreateInput>
  }

  /**
   * Hashtag createMany
   */
  export type HashtagCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Hashtags.
     */
    data: HashtagCreateManyInput | HashtagCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Hashtag createManyAndReturn
   */
  export type HashtagCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hashtag
     */
    select?: HashtagSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Hashtag
     */
    omit?: HashtagOmit<ExtArgs> | null
    /**
     * The data used to create many Hashtags.
     */
    data: HashtagCreateManyInput | HashtagCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Hashtag update
   */
  export type HashtagUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hashtag
     */
    select?: HashtagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hashtag
     */
    omit?: HashtagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HashtagInclude<ExtArgs> | null
    /**
     * The data needed to update a Hashtag.
     */
    data: XOR<HashtagUpdateInput, HashtagUncheckedUpdateInput>
    /**
     * Choose, which Hashtag to update.
     */
    where: HashtagWhereUniqueInput
  }

  /**
   * Hashtag updateMany
   */
  export type HashtagUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Hashtags.
     */
    data: XOR<HashtagUpdateManyMutationInput, HashtagUncheckedUpdateManyInput>
    /**
     * Filter which Hashtags to update
     */
    where?: HashtagWhereInput
    /**
     * Limit how many Hashtags to update.
     */
    limit?: number
  }

  /**
   * Hashtag updateManyAndReturn
   */
  export type HashtagUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hashtag
     */
    select?: HashtagSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Hashtag
     */
    omit?: HashtagOmit<ExtArgs> | null
    /**
     * The data used to update Hashtags.
     */
    data: XOR<HashtagUpdateManyMutationInput, HashtagUncheckedUpdateManyInput>
    /**
     * Filter which Hashtags to update
     */
    where?: HashtagWhereInput
    /**
     * Limit how many Hashtags to update.
     */
    limit?: number
  }

  /**
   * Hashtag upsert
   */
  export type HashtagUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hashtag
     */
    select?: HashtagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hashtag
     */
    omit?: HashtagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HashtagInclude<ExtArgs> | null
    /**
     * The filter to search for the Hashtag to update in case it exists.
     */
    where: HashtagWhereUniqueInput
    /**
     * In case the Hashtag found by the `where` argument doesn't exist, create a new Hashtag with this data.
     */
    create: XOR<HashtagCreateInput, HashtagUncheckedCreateInput>
    /**
     * In case the Hashtag was found with the provided `where` argument, update it with this data.
     */
    update: XOR<HashtagUpdateInput, HashtagUncheckedUpdateInput>
  }

  /**
   * Hashtag delete
   */
  export type HashtagDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hashtag
     */
    select?: HashtagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hashtag
     */
    omit?: HashtagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HashtagInclude<ExtArgs> | null
    /**
     * Filter which Hashtag to delete.
     */
    where: HashtagWhereUniqueInput
  }

  /**
   * Hashtag deleteMany
   */
  export type HashtagDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Hashtags to delete
     */
    where?: HashtagWhereInput
    /**
     * Limit how many Hashtags to delete.
     */
    limit?: number
  }

  /**
   * Hashtag.posts
   */
  export type Hashtag$postsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostHashtags
     */
    select?: PostHashtagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostHashtags
     */
    omit?: PostHashtagsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostHashtagsInclude<ExtArgs> | null
    where?: PostHashtagsWhereInput
    orderBy?: PostHashtagsOrderByWithRelationInput | PostHashtagsOrderByWithRelationInput[]
    cursor?: PostHashtagsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PostHashtagsScalarFieldEnum | PostHashtagsScalarFieldEnum[]
  }

  /**
   * Hashtag without action
   */
  export type HashtagDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hashtag
     */
    select?: HashtagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hashtag
     */
    omit?: HashtagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HashtagInclude<ExtArgs> | null
  }


  /**
   * Model PostHashtags
   */

  export type AggregatePostHashtags = {
    _count: PostHashtagsCountAggregateOutputType | null
    _min: PostHashtagsMinAggregateOutputType | null
    _max: PostHashtagsMaxAggregateOutputType | null
  }

  export type PostHashtagsMinAggregateOutputType = {
    postId: string | null
    hashtagId: string | null
  }

  export type PostHashtagsMaxAggregateOutputType = {
    postId: string | null
    hashtagId: string | null
  }

  export type PostHashtagsCountAggregateOutputType = {
    postId: number
    hashtagId: number
    _all: number
  }


  export type PostHashtagsMinAggregateInputType = {
    postId?: true
    hashtagId?: true
  }

  export type PostHashtagsMaxAggregateInputType = {
    postId?: true
    hashtagId?: true
  }

  export type PostHashtagsCountAggregateInputType = {
    postId?: true
    hashtagId?: true
    _all?: true
  }

  export type PostHashtagsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PostHashtags to aggregate.
     */
    where?: PostHashtagsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PostHashtags to fetch.
     */
    orderBy?: PostHashtagsOrderByWithRelationInput | PostHashtagsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PostHashtagsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PostHashtags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PostHashtags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PostHashtags
    **/
    _count?: true | PostHashtagsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PostHashtagsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PostHashtagsMaxAggregateInputType
  }

  export type GetPostHashtagsAggregateType<T extends PostHashtagsAggregateArgs> = {
        [P in keyof T & keyof AggregatePostHashtags]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePostHashtags[P]>
      : GetScalarType<T[P], AggregatePostHashtags[P]>
  }




  export type PostHashtagsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostHashtagsWhereInput
    orderBy?: PostHashtagsOrderByWithAggregationInput | PostHashtagsOrderByWithAggregationInput[]
    by: PostHashtagsScalarFieldEnum[] | PostHashtagsScalarFieldEnum
    having?: PostHashtagsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PostHashtagsCountAggregateInputType | true
    _min?: PostHashtagsMinAggregateInputType
    _max?: PostHashtagsMaxAggregateInputType
  }

  export type PostHashtagsGroupByOutputType = {
    postId: string
    hashtagId: string
    _count: PostHashtagsCountAggregateOutputType | null
    _min: PostHashtagsMinAggregateOutputType | null
    _max: PostHashtagsMaxAggregateOutputType | null
  }

  type GetPostHashtagsGroupByPayload<T extends PostHashtagsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PostHashtagsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PostHashtagsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PostHashtagsGroupByOutputType[P]>
            : GetScalarType<T[P], PostHashtagsGroupByOutputType[P]>
        }
      >
    >


  export type PostHashtagsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    postId?: boolean
    hashtagId?: boolean
    post?: boolean | PostsDefaultArgs<ExtArgs>
    hashtag?: boolean | HashtagDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["postHashtags"]>

  export type PostHashtagsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    postId?: boolean
    hashtagId?: boolean
    post?: boolean | PostsDefaultArgs<ExtArgs>
    hashtag?: boolean | HashtagDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["postHashtags"]>

  export type PostHashtagsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    postId?: boolean
    hashtagId?: boolean
    post?: boolean | PostsDefaultArgs<ExtArgs>
    hashtag?: boolean | HashtagDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["postHashtags"]>

  export type PostHashtagsSelectScalar = {
    postId?: boolean
    hashtagId?: boolean
  }

  export type PostHashtagsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"postId" | "hashtagId", ExtArgs["result"]["postHashtags"]>
  export type PostHashtagsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    post?: boolean | PostsDefaultArgs<ExtArgs>
    hashtag?: boolean | HashtagDefaultArgs<ExtArgs>
  }
  export type PostHashtagsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    post?: boolean | PostsDefaultArgs<ExtArgs>
    hashtag?: boolean | HashtagDefaultArgs<ExtArgs>
  }
  export type PostHashtagsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    post?: boolean | PostsDefaultArgs<ExtArgs>
    hashtag?: boolean | HashtagDefaultArgs<ExtArgs>
  }

  export type $PostHashtagsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PostHashtags"
    objects: {
      post: Prisma.$PostsPayload<ExtArgs>
      hashtag: Prisma.$HashtagPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      postId: string
      hashtagId: string
    }, ExtArgs["result"]["postHashtags"]>
    composites: {}
  }

  type PostHashtagsGetPayload<S extends boolean | null | undefined | PostHashtagsDefaultArgs> = $Result.GetResult<Prisma.$PostHashtagsPayload, S>

  type PostHashtagsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PostHashtagsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PostHashtagsCountAggregateInputType | true
    }

  export interface PostHashtagsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PostHashtags'], meta: { name: 'PostHashtags' } }
    /**
     * Find zero or one PostHashtags that matches the filter.
     * @param {PostHashtagsFindUniqueArgs} args - Arguments to find a PostHashtags
     * @example
     * // Get one PostHashtags
     * const postHashtags = await prisma.postHashtags.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PostHashtagsFindUniqueArgs>(args: SelectSubset<T, PostHashtagsFindUniqueArgs<ExtArgs>>): Prisma__PostHashtagsClient<$Result.GetResult<Prisma.$PostHashtagsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PostHashtags that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PostHashtagsFindUniqueOrThrowArgs} args - Arguments to find a PostHashtags
     * @example
     * // Get one PostHashtags
     * const postHashtags = await prisma.postHashtags.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PostHashtagsFindUniqueOrThrowArgs>(args: SelectSubset<T, PostHashtagsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PostHashtagsClient<$Result.GetResult<Prisma.$PostHashtagsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PostHashtags that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostHashtagsFindFirstArgs} args - Arguments to find a PostHashtags
     * @example
     * // Get one PostHashtags
     * const postHashtags = await prisma.postHashtags.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PostHashtagsFindFirstArgs>(args?: SelectSubset<T, PostHashtagsFindFirstArgs<ExtArgs>>): Prisma__PostHashtagsClient<$Result.GetResult<Prisma.$PostHashtagsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PostHashtags that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostHashtagsFindFirstOrThrowArgs} args - Arguments to find a PostHashtags
     * @example
     * // Get one PostHashtags
     * const postHashtags = await prisma.postHashtags.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PostHashtagsFindFirstOrThrowArgs>(args?: SelectSubset<T, PostHashtagsFindFirstOrThrowArgs<ExtArgs>>): Prisma__PostHashtagsClient<$Result.GetResult<Prisma.$PostHashtagsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PostHashtags that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostHashtagsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PostHashtags
     * const postHashtags = await prisma.postHashtags.findMany()
     * 
     * // Get first 10 PostHashtags
     * const postHashtags = await prisma.postHashtags.findMany({ take: 10 })
     * 
     * // Only select the `postId`
     * const postHashtagsWithPostIdOnly = await prisma.postHashtags.findMany({ select: { postId: true } })
     * 
     */
    findMany<T extends PostHashtagsFindManyArgs>(args?: SelectSubset<T, PostHashtagsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostHashtagsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PostHashtags.
     * @param {PostHashtagsCreateArgs} args - Arguments to create a PostHashtags.
     * @example
     * // Create one PostHashtags
     * const PostHashtags = await prisma.postHashtags.create({
     *   data: {
     *     // ... data to create a PostHashtags
     *   }
     * })
     * 
     */
    create<T extends PostHashtagsCreateArgs>(args: SelectSubset<T, PostHashtagsCreateArgs<ExtArgs>>): Prisma__PostHashtagsClient<$Result.GetResult<Prisma.$PostHashtagsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PostHashtags.
     * @param {PostHashtagsCreateManyArgs} args - Arguments to create many PostHashtags.
     * @example
     * // Create many PostHashtags
     * const postHashtags = await prisma.postHashtags.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PostHashtagsCreateManyArgs>(args?: SelectSubset<T, PostHashtagsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PostHashtags and returns the data saved in the database.
     * @param {PostHashtagsCreateManyAndReturnArgs} args - Arguments to create many PostHashtags.
     * @example
     * // Create many PostHashtags
     * const postHashtags = await prisma.postHashtags.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PostHashtags and only return the `postId`
     * const postHashtagsWithPostIdOnly = await prisma.postHashtags.createManyAndReturn({
     *   select: { postId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PostHashtagsCreateManyAndReturnArgs>(args?: SelectSubset<T, PostHashtagsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostHashtagsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PostHashtags.
     * @param {PostHashtagsDeleteArgs} args - Arguments to delete one PostHashtags.
     * @example
     * // Delete one PostHashtags
     * const PostHashtags = await prisma.postHashtags.delete({
     *   where: {
     *     // ... filter to delete one PostHashtags
     *   }
     * })
     * 
     */
    delete<T extends PostHashtagsDeleteArgs>(args: SelectSubset<T, PostHashtagsDeleteArgs<ExtArgs>>): Prisma__PostHashtagsClient<$Result.GetResult<Prisma.$PostHashtagsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PostHashtags.
     * @param {PostHashtagsUpdateArgs} args - Arguments to update one PostHashtags.
     * @example
     * // Update one PostHashtags
     * const postHashtags = await prisma.postHashtags.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PostHashtagsUpdateArgs>(args: SelectSubset<T, PostHashtagsUpdateArgs<ExtArgs>>): Prisma__PostHashtagsClient<$Result.GetResult<Prisma.$PostHashtagsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PostHashtags.
     * @param {PostHashtagsDeleteManyArgs} args - Arguments to filter PostHashtags to delete.
     * @example
     * // Delete a few PostHashtags
     * const { count } = await prisma.postHashtags.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PostHashtagsDeleteManyArgs>(args?: SelectSubset<T, PostHashtagsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PostHashtags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostHashtagsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PostHashtags
     * const postHashtags = await prisma.postHashtags.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PostHashtagsUpdateManyArgs>(args: SelectSubset<T, PostHashtagsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PostHashtags and returns the data updated in the database.
     * @param {PostHashtagsUpdateManyAndReturnArgs} args - Arguments to update many PostHashtags.
     * @example
     * // Update many PostHashtags
     * const postHashtags = await prisma.postHashtags.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PostHashtags and only return the `postId`
     * const postHashtagsWithPostIdOnly = await prisma.postHashtags.updateManyAndReturn({
     *   select: { postId: true },
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
    updateManyAndReturn<T extends PostHashtagsUpdateManyAndReturnArgs>(args: SelectSubset<T, PostHashtagsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostHashtagsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PostHashtags.
     * @param {PostHashtagsUpsertArgs} args - Arguments to update or create a PostHashtags.
     * @example
     * // Update or create a PostHashtags
     * const postHashtags = await prisma.postHashtags.upsert({
     *   create: {
     *     // ... data to create a PostHashtags
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PostHashtags we want to update
     *   }
     * })
     */
    upsert<T extends PostHashtagsUpsertArgs>(args: SelectSubset<T, PostHashtagsUpsertArgs<ExtArgs>>): Prisma__PostHashtagsClient<$Result.GetResult<Prisma.$PostHashtagsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PostHashtags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostHashtagsCountArgs} args - Arguments to filter PostHashtags to count.
     * @example
     * // Count the number of PostHashtags
     * const count = await prisma.postHashtags.count({
     *   where: {
     *     // ... the filter for the PostHashtags we want to count
     *   }
     * })
    **/
    count<T extends PostHashtagsCountArgs>(
      args?: Subset<T, PostHashtagsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PostHashtagsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PostHashtags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostHashtagsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PostHashtagsAggregateArgs>(args: Subset<T, PostHashtagsAggregateArgs>): Prisma.PrismaPromise<GetPostHashtagsAggregateType<T>>

    /**
     * Group by PostHashtags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostHashtagsGroupByArgs} args - Group by arguments.
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
      T extends PostHashtagsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PostHashtagsGroupByArgs['orderBy'] }
        : { orderBy?: PostHashtagsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PostHashtagsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPostHashtagsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PostHashtags model
   */
  readonly fields: PostHashtagsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PostHashtags.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PostHashtagsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    post<T extends PostsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PostsDefaultArgs<ExtArgs>>): Prisma__PostsClient<$Result.GetResult<Prisma.$PostsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    hashtag<T extends HashtagDefaultArgs<ExtArgs> = {}>(args?: Subset<T, HashtagDefaultArgs<ExtArgs>>): Prisma__HashtagClient<$Result.GetResult<Prisma.$HashtagPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the PostHashtags model
   */
  interface PostHashtagsFieldRefs {
    readonly postId: FieldRef<"PostHashtags", 'String'>
    readonly hashtagId: FieldRef<"PostHashtags", 'String'>
  }
    

  // Custom InputTypes
  /**
   * PostHashtags findUnique
   */
  export type PostHashtagsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostHashtags
     */
    select?: PostHashtagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostHashtags
     */
    omit?: PostHashtagsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostHashtagsInclude<ExtArgs> | null
    /**
     * Filter, which PostHashtags to fetch.
     */
    where: PostHashtagsWhereUniqueInput
  }

  /**
   * PostHashtags findUniqueOrThrow
   */
  export type PostHashtagsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostHashtags
     */
    select?: PostHashtagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostHashtags
     */
    omit?: PostHashtagsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostHashtagsInclude<ExtArgs> | null
    /**
     * Filter, which PostHashtags to fetch.
     */
    where: PostHashtagsWhereUniqueInput
  }

  /**
   * PostHashtags findFirst
   */
  export type PostHashtagsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostHashtags
     */
    select?: PostHashtagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostHashtags
     */
    omit?: PostHashtagsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostHashtagsInclude<ExtArgs> | null
    /**
     * Filter, which PostHashtags to fetch.
     */
    where?: PostHashtagsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PostHashtags to fetch.
     */
    orderBy?: PostHashtagsOrderByWithRelationInput | PostHashtagsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PostHashtags.
     */
    cursor?: PostHashtagsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PostHashtags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PostHashtags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PostHashtags.
     */
    distinct?: PostHashtagsScalarFieldEnum | PostHashtagsScalarFieldEnum[]
  }

  /**
   * PostHashtags findFirstOrThrow
   */
  export type PostHashtagsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostHashtags
     */
    select?: PostHashtagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostHashtags
     */
    omit?: PostHashtagsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostHashtagsInclude<ExtArgs> | null
    /**
     * Filter, which PostHashtags to fetch.
     */
    where?: PostHashtagsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PostHashtags to fetch.
     */
    orderBy?: PostHashtagsOrderByWithRelationInput | PostHashtagsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PostHashtags.
     */
    cursor?: PostHashtagsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PostHashtags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PostHashtags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PostHashtags.
     */
    distinct?: PostHashtagsScalarFieldEnum | PostHashtagsScalarFieldEnum[]
  }

  /**
   * PostHashtags findMany
   */
  export type PostHashtagsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostHashtags
     */
    select?: PostHashtagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostHashtags
     */
    omit?: PostHashtagsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostHashtagsInclude<ExtArgs> | null
    /**
     * Filter, which PostHashtags to fetch.
     */
    where?: PostHashtagsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PostHashtags to fetch.
     */
    orderBy?: PostHashtagsOrderByWithRelationInput | PostHashtagsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PostHashtags.
     */
    cursor?: PostHashtagsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PostHashtags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PostHashtags.
     */
    skip?: number
    distinct?: PostHashtagsScalarFieldEnum | PostHashtagsScalarFieldEnum[]
  }

  /**
   * PostHashtags create
   */
  export type PostHashtagsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostHashtags
     */
    select?: PostHashtagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostHashtags
     */
    omit?: PostHashtagsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostHashtagsInclude<ExtArgs> | null
    /**
     * The data needed to create a PostHashtags.
     */
    data: XOR<PostHashtagsCreateInput, PostHashtagsUncheckedCreateInput>
  }

  /**
   * PostHashtags createMany
   */
  export type PostHashtagsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PostHashtags.
     */
    data: PostHashtagsCreateManyInput | PostHashtagsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PostHashtags createManyAndReturn
   */
  export type PostHashtagsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostHashtags
     */
    select?: PostHashtagsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PostHashtags
     */
    omit?: PostHashtagsOmit<ExtArgs> | null
    /**
     * The data used to create many PostHashtags.
     */
    data: PostHashtagsCreateManyInput | PostHashtagsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostHashtagsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PostHashtags update
   */
  export type PostHashtagsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostHashtags
     */
    select?: PostHashtagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostHashtags
     */
    omit?: PostHashtagsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostHashtagsInclude<ExtArgs> | null
    /**
     * The data needed to update a PostHashtags.
     */
    data: XOR<PostHashtagsUpdateInput, PostHashtagsUncheckedUpdateInput>
    /**
     * Choose, which PostHashtags to update.
     */
    where: PostHashtagsWhereUniqueInput
  }

  /**
   * PostHashtags updateMany
   */
  export type PostHashtagsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PostHashtags.
     */
    data: XOR<PostHashtagsUpdateManyMutationInput, PostHashtagsUncheckedUpdateManyInput>
    /**
     * Filter which PostHashtags to update
     */
    where?: PostHashtagsWhereInput
    /**
     * Limit how many PostHashtags to update.
     */
    limit?: number
  }

  /**
   * PostHashtags updateManyAndReturn
   */
  export type PostHashtagsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostHashtags
     */
    select?: PostHashtagsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PostHashtags
     */
    omit?: PostHashtagsOmit<ExtArgs> | null
    /**
     * The data used to update PostHashtags.
     */
    data: XOR<PostHashtagsUpdateManyMutationInput, PostHashtagsUncheckedUpdateManyInput>
    /**
     * Filter which PostHashtags to update
     */
    where?: PostHashtagsWhereInput
    /**
     * Limit how many PostHashtags to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostHashtagsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PostHashtags upsert
   */
  export type PostHashtagsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostHashtags
     */
    select?: PostHashtagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostHashtags
     */
    omit?: PostHashtagsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostHashtagsInclude<ExtArgs> | null
    /**
     * The filter to search for the PostHashtags to update in case it exists.
     */
    where: PostHashtagsWhereUniqueInput
    /**
     * In case the PostHashtags found by the `where` argument doesn't exist, create a new PostHashtags with this data.
     */
    create: XOR<PostHashtagsCreateInput, PostHashtagsUncheckedCreateInput>
    /**
     * In case the PostHashtags was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PostHashtagsUpdateInput, PostHashtagsUncheckedUpdateInput>
  }

  /**
   * PostHashtags delete
   */
  export type PostHashtagsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostHashtags
     */
    select?: PostHashtagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostHashtags
     */
    omit?: PostHashtagsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostHashtagsInclude<ExtArgs> | null
    /**
     * Filter which PostHashtags to delete.
     */
    where: PostHashtagsWhereUniqueInput
  }

  /**
   * PostHashtags deleteMany
   */
  export type PostHashtagsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PostHashtags to delete
     */
    where?: PostHashtagsWhereInput
    /**
     * Limit how many PostHashtags to delete.
     */
    limit?: number
  }

  /**
   * PostHashtags without action
   */
  export type PostHashtagsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostHashtags
     */
    select?: PostHashtagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostHashtags
     */
    omit?: PostHashtagsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostHashtagsInclude<ExtArgs> | null
  }


  /**
   * Model PostTagFriend
   */

  export type AggregatePostTagFriend = {
    _count: PostTagFriendCountAggregateOutputType | null
    _min: PostTagFriendMinAggregateOutputType | null
    _max: PostTagFriendMaxAggregateOutputType | null
  }

  export type PostTagFriendMinAggregateOutputType = {
    id: string | null
    postId: string | null
    userId: string | null
    taggedBy: string | null
    createdAt: Date | null
  }

  export type PostTagFriendMaxAggregateOutputType = {
    id: string | null
    postId: string | null
    userId: string | null
    taggedBy: string | null
    createdAt: Date | null
  }

  export type PostTagFriendCountAggregateOutputType = {
    id: number
    postId: number
    userId: number
    taggedBy: number
    createdAt: number
    _all: number
  }


  export type PostTagFriendMinAggregateInputType = {
    id?: true
    postId?: true
    userId?: true
    taggedBy?: true
    createdAt?: true
  }

  export type PostTagFriendMaxAggregateInputType = {
    id?: true
    postId?: true
    userId?: true
    taggedBy?: true
    createdAt?: true
  }

  export type PostTagFriendCountAggregateInputType = {
    id?: true
    postId?: true
    userId?: true
    taggedBy?: true
    createdAt?: true
    _all?: true
  }

  export type PostTagFriendAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PostTagFriend to aggregate.
     */
    where?: PostTagFriendWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PostTagFriends to fetch.
     */
    orderBy?: PostTagFriendOrderByWithRelationInput | PostTagFriendOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PostTagFriendWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PostTagFriends from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PostTagFriends.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PostTagFriends
    **/
    _count?: true | PostTagFriendCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PostTagFriendMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PostTagFriendMaxAggregateInputType
  }

  export type GetPostTagFriendAggregateType<T extends PostTagFriendAggregateArgs> = {
        [P in keyof T & keyof AggregatePostTagFriend]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePostTagFriend[P]>
      : GetScalarType<T[P], AggregatePostTagFriend[P]>
  }




  export type PostTagFriendGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostTagFriendWhereInput
    orderBy?: PostTagFriendOrderByWithAggregationInput | PostTagFriendOrderByWithAggregationInput[]
    by: PostTagFriendScalarFieldEnum[] | PostTagFriendScalarFieldEnum
    having?: PostTagFriendScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PostTagFriendCountAggregateInputType | true
    _min?: PostTagFriendMinAggregateInputType
    _max?: PostTagFriendMaxAggregateInputType
  }

  export type PostTagFriendGroupByOutputType = {
    id: string
    postId: string
    userId: string
    taggedBy: string
    createdAt: Date
    _count: PostTagFriendCountAggregateOutputType | null
    _min: PostTagFriendMinAggregateOutputType | null
    _max: PostTagFriendMaxAggregateOutputType | null
  }

  type GetPostTagFriendGroupByPayload<T extends PostTagFriendGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PostTagFriendGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PostTagFriendGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PostTagFriendGroupByOutputType[P]>
            : GetScalarType<T[P], PostTagFriendGroupByOutputType[P]>
        }
      >
    >


  export type PostTagFriendSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    postId?: boolean
    userId?: boolean
    taggedBy?: boolean
    createdAt?: boolean
    post?: boolean | PostsDefaultArgs<ExtArgs>
    user?: boolean | UsersDefaultArgs<ExtArgs>
    taggedByUser?: boolean | UsersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["postTagFriend"]>

  export type PostTagFriendSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    postId?: boolean
    userId?: boolean
    taggedBy?: boolean
    createdAt?: boolean
    post?: boolean | PostsDefaultArgs<ExtArgs>
    user?: boolean | UsersDefaultArgs<ExtArgs>
    taggedByUser?: boolean | UsersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["postTagFriend"]>

  export type PostTagFriendSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    postId?: boolean
    userId?: boolean
    taggedBy?: boolean
    createdAt?: boolean
    post?: boolean | PostsDefaultArgs<ExtArgs>
    user?: boolean | UsersDefaultArgs<ExtArgs>
    taggedByUser?: boolean | UsersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["postTagFriend"]>

  export type PostTagFriendSelectScalar = {
    id?: boolean
    postId?: boolean
    userId?: boolean
    taggedBy?: boolean
    createdAt?: boolean
  }

  export type PostTagFriendOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "postId" | "userId" | "taggedBy" | "createdAt", ExtArgs["result"]["postTagFriend"]>
  export type PostTagFriendInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    post?: boolean | PostsDefaultArgs<ExtArgs>
    user?: boolean | UsersDefaultArgs<ExtArgs>
    taggedByUser?: boolean | UsersDefaultArgs<ExtArgs>
  }
  export type PostTagFriendIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    post?: boolean | PostsDefaultArgs<ExtArgs>
    user?: boolean | UsersDefaultArgs<ExtArgs>
    taggedByUser?: boolean | UsersDefaultArgs<ExtArgs>
  }
  export type PostTagFriendIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    post?: boolean | PostsDefaultArgs<ExtArgs>
    user?: boolean | UsersDefaultArgs<ExtArgs>
    taggedByUser?: boolean | UsersDefaultArgs<ExtArgs>
  }

  export type $PostTagFriendPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PostTagFriend"
    objects: {
      post: Prisma.$PostsPayload<ExtArgs>
      user: Prisma.$UsersPayload<ExtArgs>
      taggedByUser: Prisma.$UsersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      postId: string
      userId: string
      taggedBy: string
      createdAt: Date
    }, ExtArgs["result"]["postTagFriend"]>
    composites: {}
  }

  type PostTagFriendGetPayload<S extends boolean | null | undefined | PostTagFriendDefaultArgs> = $Result.GetResult<Prisma.$PostTagFriendPayload, S>

  type PostTagFriendCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PostTagFriendFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PostTagFriendCountAggregateInputType | true
    }

  export interface PostTagFriendDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PostTagFriend'], meta: { name: 'PostTagFriend' } }
    /**
     * Find zero or one PostTagFriend that matches the filter.
     * @param {PostTagFriendFindUniqueArgs} args - Arguments to find a PostTagFriend
     * @example
     * // Get one PostTagFriend
     * const postTagFriend = await prisma.postTagFriend.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PostTagFriendFindUniqueArgs>(args: SelectSubset<T, PostTagFriendFindUniqueArgs<ExtArgs>>): Prisma__PostTagFriendClient<$Result.GetResult<Prisma.$PostTagFriendPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PostTagFriend that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PostTagFriendFindUniqueOrThrowArgs} args - Arguments to find a PostTagFriend
     * @example
     * // Get one PostTagFriend
     * const postTagFriend = await prisma.postTagFriend.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PostTagFriendFindUniqueOrThrowArgs>(args: SelectSubset<T, PostTagFriendFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PostTagFriendClient<$Result.GetResult<Prisma.$PostTagFriendPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PostTagFriend that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostTagFriendFindFirstArgs} args - Arguments to find a PostTagFriend
     * @example
     * // Get one PostTagFriend
     * const postTagFriend = await prisma.postTagFriend.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PostTagFriendFindFirstArgs>(args?: SelectSubset<T, PostTagFriendFindFirstArgs<ExtArgs>>): Prisma__PostTagFriendClient<$Result.GetResult<Prisma.$PostTagFriendPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PostTagFriend that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostTagFriendFindFirstOrThrowArgs} args - Arguments to find a PostTagFriend
     * @example
     * // Get one PostTagFriend
     * const postTagFriend = await prisma.postTagFriend.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PostTagFriendFindFirstOrThrowArgs>(args?: SelectSubset<T, PostTagFriendFindFirstOrThrowArgs<ExtArgs>>): Prisma__PostTagFriendClient<$Result.GetResult<Prisma.$PostTagFriendPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PostTagFriends that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostTagFriendFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PostTagFriends
     * const postTagFriends = await prisma.postTagFriend.findMany()
     * 
     * // Get first 10 PostTagFriends
     * const postTagFriends = await prisma.postTagFriend.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const postTagFriendWithIdOnly = await prisma.postTagFriend.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PostTagFriendFindManyArgs>(args?: SelectSubset<T, PostTagFriendFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostTagFriendPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PostTagFriend.
     * @param {PostTagFriendCreateArgs} args - Arguments to create a PostTagFriend.
     * @example
     * // Create one PostTagFriend
     * const PostTagFriend = await prisma.postTagFriend.create({
     *   data: {
     *     // ... data to create a PostTagFriend
     *   }
     * })
     * 
     */
    create<T extends PostTagFriendCreateArgs>(args: SelectSubset<T, PostTagFriendCreateArgs<ExtArgs>>): Prisma__PostTagFriendClient<$Result.GetResult<Prisma.$PostTagFriendPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PostTagFriends.
     * @param {PostTagFriendCreateManyArgs} args - Arguments to create many PostTagFriends.
     * @example
     * // Create many PostTagFriends
     * const postTagFriend = await prisma.postTagFriend.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PostTagFriendCreateManyArgs>(args?: SelectSubset<T, PostTagFriendCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PostTagFriends and returns the data saved in the database.
     * @param {PostTagFriendCreateManyAndReturnArgs} args - Arguments to create many PostTagFriends.
     * @example
     * // Create many PostTagFriends
     * const postTagFriend = await prisma.postTagFriend.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PostTagFriends and only return the `id`
     * const postTagFriendWithIdOnly = await prisma.postTagFriend.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PostTagFriendCreateManyAndReturnArgs>(args?: SelectSubset<T, PostTagFriendCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostTagFriendPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PostTagFriend.
     * @param {PostTagFriendDeleteArgs} args - Arguments to delete one PostTagFriend.
     * @example
     * // Delete one PostTagFriend
     * const PostTagFriend = await prisma.postTagFriend.delete({
     *   where: {
     *     // ... filter to delete one PostTagFriend
     *   }
     * })
     * 
     */
    delete<T extends PostTagFriendDeleteArgs>(args: SelectSubset<T, PostTagFriendDeleteArgs<ExtArgs>>): Prisma__PostTagFriendClient<$Result.GetResult<Prisma.$PostTagFriendPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PostTagFriend.
     * @param {PostTagFriendUpdateArgs} args - Arguments to update one PostTagFriend.
     * @example
     * // Update one PostTagFriend
     * const postTagFriend = await prisma.postTagFriend.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PostTagFriendUpdateArgs>(args: SelectSubset<T, PostTagFriendUpdateArgs<ExtArgs>>): Prisma__PostTagFriendClient<$Result.GetResult<Prisma.$PostTagFriendPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PostTagFriends.
     * @param {PostTagFriendDeleteManyArgs} args - Arguments to filter PostTagFriends to delete.
     * @example
     * // Delete a few PostTagFriends
     * const { count } = await prisma.postTagFriend.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PostTagFriendDeleteManyArgs>(args?: SelectSubset<T, PostTagFriendDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PostTagFriends.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostTagFriendUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PostTagFriends
     * const postTagFriend = await prisma.postTagFriend.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PostTagFriendUpdateManyArgs>(args: SelectSubset<T, PostTagFriendUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PostTagFriends and returns the data updated in the database.
     * @param {PostTagFriendUpdateManyAndReturnArgs} args - Arguments to update many PostTagFriends.
     * @example
     * // Update many PostTagFriends
     * const postTagFriend = await prisma.postTagFriend.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PostTagFriends and only return the `id`
     * const postTagFriendWithIdOnly = await prisma.postTagFriend.updateManyAndReturn({
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
    updateManyAndReturn<T extends PostTagFriendUpdateManyAndReturnArgs>(args: SelectSubset<T, PostTagFriendUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostTagFriendPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PostTagFriend.
     * @param {PostTagFriendUpsertArgs} args - Arguments to update or create a PostTagFriend.
     * @example
     * // Update or create a PostTagFriend
     * const postTagFriend = await prisma.postTagFriend.upsert({
     *   create: {
     *     // ... data to create a PostTagFriend
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PostTagFriend we want to update
     *   }
     * })
     */
    upsert<T extends PostTagFriendUpsertArgs>(args: SelectSubset<T, PostTagFriendUpsertArgs<ExtArgs>>): Prisma__PostTagFriendClient<$Result.GetResult<Prisma.$PostTagFriendPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PostTagFriends.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostTagFriendCountArgs} args - Arguments to filter PostTagFriends to count.
     * @example
     * // Count the number of PostTagFriends
     * const count = await prisma.postTagFriend.count({
     *   where: {
     *     // ... the filter for the PostTagFriends we want to count
     *   }
     * })
    **/
    count<T extends PostTagFriendCountArgs>(
      args?: Subset<T, PostTagFriendCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PostTagFriendCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PostTagFriend.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostTagFriendAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PostTagFriendAggregateArgs>(args: Subset<T, PostTagFriendAggregateArgs>): Prisma.PrismaPromise<GetPostTagFriendAggregateType<T>>

    /**
     * Group by PostTagFriend.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostTagFriendGroupByArgs} args - Group by arguments.
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
      T extends PostTagFriendGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PostTagFriendGroupByArgs['orderBy'] }
        : { orderBy?: PostTagFriendGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PostTagFriendGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPostTagFriendGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PostTagFriend model
   */
  readonly fields: PostTagFriendFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PostTagFriend.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PostTagFriendClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    post<T extends PostsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PostsDefaultArgs<ExtArgs>>): Prisma__PostsClient<$Result.GetResult<Prisma.$PostsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UsersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsersDefaultArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    taggedByUser<T extends UsersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsersDefaultArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the PostTagFriend model
   */
  interface PostTagFriendFieldRefs {
    readonly id: FieldRef<"PostTagFriend", 'String'>
    readonly postId: FieldRef<"PostTagFriend", 'String'>
    readonly userId: FieldRef<"PostTagFriend", 'String'>
    readonly taggedBy: FieldRef<"PostTagFriend", 'String'>
    readonly createdAt: FieldRef<"PostTagFriend", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PostTagFriend findUnique
   */
  export type PostTagFriendFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostTagFriend
     */
    select?: PostTagFriendSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostTagFriend
     */
    omit?: PostTagFriendOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostTagFriendInclude<ExtArgs> | null
    /**
     * Filter, which PostTagFriend to fetch.
     */
    where: PostTagFriendWhereUniqueInput
  }

  /**
   * PostTagFriend findUniqueOrThrow
   */
  export type PostTagFriendFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostTagFriend
     */
    select?: PostTagFriendSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostTagFriend
     */
    omit?: PostTagFriendOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostTagFriendInclude<ExtArgs> | null
    /**
     * Filter, which PostTagFriend to fetch.
     */
    where: PostTagFriendWhereUniqueInput
  }

  /**
   * PostTagFriend findFirst
   */
  export type PostTagFriendFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostTagFriend
     */
    select?: PostTagFriendSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostTagFriend
     */
    omit?: PostTagFriendOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostTagFriendInclude<ExtArgs> | null
    /**
     * Filter, which PostTagFriend to fetch.
     */
    where?: PostTagFriendWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PostTagFriends to fetch.
     */
    orderBy?: PostTagFriendOrderByWithRelationInput | PostTagFriendOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PostTagFriends.
     */
    cursor?: PostTagFriendWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PostTagFriends from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PostTagFriends.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PostTagFriends.
     */
    distinct?: PostTagFriendScalarFieldEnum | PostTagFriendScalarFieldEnum[]
  }

  /**
   * PostTagFriend findFirstOrThrow
   */
  export type PostTagFriendFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostTagFriend
     */
    select?: PostTagFriendSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostTagFriend
     */
    omit?: PostTagFriendOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostTagFriendInclude<ExtArgs> | null
    /**
     * Filter, which PostTagFriend to fetch.
     */
    where?: PostTagFriendWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PostTagFriends to fetch.
     */
    orderBy?: PostTagFriendOrderByWithRelationInput | PostTagFriendOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PostTagFriends.
     */
    cursor?: PostTagFriendWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PostTagFriends from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PostTagFriends.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PostTagFriends.
     */
    distinct?: PostTagFriendScalarFieldEnum | PostTagFriendScalarFieldEnum[]
  }

  /**
   * PostTagFriend findMany
   */
  export type PostTagFriendFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostTagFriend
     */
    select?: PostTagFriendSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostTagFriend
     */
    omit?: PostTagFriendOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostTagFriendInclude<ExtArgs> | null
    /**
     * Filter, which PostTagFriends to fetch.
     */
    where?: PostTagFriendWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PostTagFriends to fetch.
     */
    orderBy?: PostTagFriendOrderByWithRelationInput | PostTagFriendOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PostTagFriends.
     */
    cursor?: PostTagFriendWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PostTagFriends from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PostTagFriends.
     */
    skip?: number
    distinct?: PostTagFriendScalarFieldEnum | PostTagFriendScalarFieldEnum[]
  }

  /**
   * PostTagFriend create
   */
  export type PostTagFriendCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostTagFriend
     */
    select?: PostTagFriendSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostTagFriend
     */
    omit?: PostTagFriendOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostTagFriendInclude<ExtArgs> | null
    /**
     * The data needed to create a PostTagFriend.
     */
    data: XOR<PostTagFriendCreateInput, PostTagFriendUncheckedCreateInput>
  }

  /**
   * PostTagFriend createMany
   */
  export type PostTagFriendCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PostTagFriends.
     */
    data: PostTagFriendCreateManyInput | PostTagFriendCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PostTagFriend createManyAndReturn
   */
  export type PostTagFriendCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostTagFriend
     */
    select?: PostTagFriendSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PostTagFriend
     */
    omit?: PostTagFriendOmit<ExtArgs> | null
    /**
     * The data used to create many PostTagFriends.
     */
    data: PostTagFriendCreateManyInput | PostTagFriendCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostTagFriendIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PostTagFriend update
   */
  export type PostTagFriendUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostTagFriend
     */
    select?: PostTagFriendSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostTagFriend
     */
    omit?: PostTagFriendOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostTagFriendInclude<ExtArgs> | null
    /**
     * The data needed to update a PostTagFriend.
     */
    data: XOR<PostTagFriendUpdateInput, PostTagFriendUncheckedUpdateInput>
    /**
     * Choose, which PostTagFriend to update.
     */
    where: PostTagFriendWhereUniqueInput
  }

  /**
   * PostTagFriend updateMany
   */
  export type PostTagFriendUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PostTagFriends.
     */
    data: XOR<PostTagFriendUpdateManyMutationInput, PostTagFriendUncheckedUpdateManyInput>
    /**
     * Filter which PostTagFriends to update
     */
    where?: PostTagFriendWhereInput
    /**
     * Limit how many PostTagFriends to update.
     */
    limit?: number
  }

  /**
   * PostTagFriend updateManyAndReturn
   */
  export type PostTagFriendUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostTagFriend
     */
    select?: PostTagFriendSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PostTagFriend
     */
    omit?: PostTagFriendOmit<ExtArgs> | null
    /**
     * The data used to update PostTagFriends.
     */
    data: XOR<PostTagFriendUpdateManyMutationInput, PostTagFriendUncheckedUpdateManyInput>
    /**
     * Filter which PostTagFriends to update
     */
    where?: PostTagFriendWhereInput
    /**
     * Limit how many PostTagFriends to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostTagFriendIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PostTagFriend upsert
   */
  export type PostTagFriendUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostTagFriend
     */
    select?: PostTagFriendSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostTagFriend
     */
    omit?: PostTagFriendOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostTagFriendInclude<ExtArgs> | null
    /**
     * The filter to search for the PostTagFriend to update in case it exists.
     */
    where: PostTagFriendWhereUniqueInput
    /**
     * In case the PostTagFriend found by the `where` argument doesn't exist, create a new PostTagFriend with this data.
     */
    create: XOR<PostTagFriendCreateInput, PostTagFriendUncheckedCreateInput>
    /**
     * In case the PostTagFriend was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PostTagFriendUpdateInput, PostTagFriendUncheckedUpdateInput>
  }

  /**
   * PostTagFriend delete
   */
  export type PostTagFriendDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostTagFriend
     */
    select?: PostTagFriendSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostTagFriend
     */
    omit?: PostTagFriendOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostTagFriendInclude<ExtArgs> | null
    /**
     * Filter which PostTagFriend to delete.
     */
    where: PostTagFriendWhereUniqueInput
  }

  /**
   * PostTagFriend deleteMany
   */
  export type PostTagFriendDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PostTagFriends to delete
     */
    where?: PostTagFriendWhereInput
    /**
     * Limit how many PostTagFriends to delete.
     */
    limit?: number
  }

  /**
   * PostTagFriend without action
   */
  export type PostTagFriendDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostTagFriend
     */
    select?: PostTagFriendSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostTagFriend
     */
    omit?: PostTagFriendOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostTagFriendInclude<ExtArgs> | null
  }


  /**
   * Model Media
   */

  export type AggregateMedia = {
    _count: MediaCountAggregateOutputType | null
    _min: MediaMinAggregateOutputType | null
    _max: MediaMaxAggregateOutputType | null
  }

  export type MediaMinAggregateOutputType = {
    id: string | null
    postId: string | null
    mediaUrl: string | null
    mediaType: $Enums.MediaTypeEnum | null
    createdAt: Date | null
  }

  export type MediaMaxAggregateOutputType = {
    id: string | null
    postId: string | null
    mediaUrl: string | null
    mediaType: $Enums.MediaTypeEnum | null
    createdAt: Date | null
  }

  export type MediaCountAggregateOutputType = {
    id: number
    postId: number
    mediaUrl: number
    mediaType: number
    createdAt: number
    _all: number
  }


  export type MediaMinAggregateInputType = {
    id?: true
    postId?: true
    mediaUrl?: true
    mediaType?: true
    createdAt?: true
  }

  export type MediaMaxAggregateInputType = {
    id?: true
    postId?: true
    mediaUrl?: true
    mediaType?: true
    createdAt?: true
  }

  export type MediaCountAggregateInputType = {
    id?: true
    postId?: true
    mediaUrl?: true
    mediaType?: true
    createdAt?: true
    _all?: true
  }

  export type MediaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Media to aggregate.
     */
    where?: MediaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Media to fetch.
     */
    orderBy?: MediaOrderByWithRelationInput | MediaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MediaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Media from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Media.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Media
    **/
    _count?: true | MediaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MediaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MediaMaxAggregateInputType
  }

  export type GetMediaAggregateType<T extends MediaAggregateArgs> = {
        [P in keyof T & keyof AggregateMedia]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMedia[P]>
      : GetScalarType<T[P], AggregateMedia[P]>
  }




  export type MediaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MediaWhereInput
    orderBy?: MediaOrderByWithAggregationInput | MediaOrderByWithAggregationInput[]
    by: MediaScalarFieldEnum[] | MediaScalarFieldEnum
    having?: MediaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MediaCountAggregateInputType | true
    _min?: MediaMinAggregateInputType
    _max?: MediaMaxAggregateInputType
  }

  export type MediaGroupByOutputType = {
    id: string
    postId: string
    mediaUrl: string
    mediaType: $Enums.MediaTypeEnum
    createdAt: Date
    _count: MediaCountAggregateOutputType | null
    _min: MediaMinAggregateOutputType | null
    _max: MediaMaxAggregateOutputType | null
  }

  type GetMediaGroupByPayload<T extends MediaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MediaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MediaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MediaGroupByOutputType[P]>
            : GetScalarType<T[P], MediaGroupByOutputType[P]>
        }
      >
    >


  export type MediaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    postId?: boolean
    mediaUrl?: boolean
    mediaType?: boolean
    createdAt?: boolean
    post?: boolean | PostsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["media"]>

  export type MediaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    postId?: boolean
    mediaUrl?: boolean
    mediaType?: boolean
    createdAt?: boolean
    post?: boolean | PostsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["media"]>

  export type MediaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    postId?: boolean
    mediaUrl?: boolean
    mediaType?: boolean
    createdAt?: boolean
    post?: boolean | PostsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["media"]>

  export type MediaSelectScalar = {
    id?: boolean
    postId?: boolean
    mediaUrl?: boolean
    mediaType?: boolean
    createdAt?: boolean
  }

  export type MediaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "postId" | "mediaUrl" | "mediaType" | "createdAt", ExtArgs["result"]["media"]>
  export type MediaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    post?: boolean | PostsDefaultArgs<ExtArgs>
  }
  export type MediaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    post?: boolean | PostsDefaultArgs<ExtArgs>
  }
  export type MediaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    post?: boolean | PostsDefaultArgs<ExtArgs>
  }

  export type $MediaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Media"
    objects: {
      post: Prisma.$PostsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      postId: string
      mediaUrl: string
      mediaType: $Enums.MediaTypeEnum
      createdAt: Date
    }, ExtArgs["result"]["media"]>
    composites: {}
  }

  type MediaGetPayload<S extends boolean | null | undefined | MediaDefaultArgs> = $Result.GetResult<Prisma.$MediaPayload, S>

  type MediaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MediaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MediaCountAggregateInputType | true
    }

  export interface MediaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Media'], meta: { name: 'Media' } }
    /**
     * Find zero or one Media that matches the filter.
     * @param {MediaFindUniqueArgs} args - Arguments to find a Media
     * @example
     * // Get one Media
     * const media = await prisma.media.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MediaFindUniqueArgs>(args: SelectSubset<T, MediaFindUniqueArgs<ExtArgs>>): Prisma__MediaClient<$Result.GetResult<Prisma.$MediaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Media that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MediaFindUniqueOrThrowArgs} args - Arguments to find a Media
     * @example
     * // Get one Media
     * const media = await prisma.media.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MediaFindUniqueOrThrowArgs>(args: SelectSubset<T, MediaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MediaClient<$Result.GetResult<Prisma.$MediaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Media that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MediaFindFirstArgs} args - Arguments to find a Media
     * @example
     * // Get one Media
     * const media = await prisma.media.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MediaFindFirstArgs>(args?: SelectSubset<T, MediaFindFirstArgs<ExtArgs>>): Prisma__MediaClient<$Result.GetResult<Prisma.$MediaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Media that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MediaFindFirstOrThrowArgs} args - Arguments to find a Media
     * @example
     * // Get one Media
     * const media = await prisma.media.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MediaFindFirstOrThrowArgs>(args?: SelectSubset<T, MediaFindFirstOrThrowArgs<ExtArgs>>): Prisma__MediaClient<$Result.GetResult<Prisma.$MediaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Media that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MediaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Media
     * const media = await prisma.media.findMany()
     * 
     * // Get first 10 Media
     * const media = await prisma.media.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const mediaWithIdOnly = await prisma.media.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MediaFindManyArgs>(args?: SelectSubset<T, MediaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MediaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Media.
     * @param {MediaCreateArgs} args - Arguments to create a Media.
     * @example
     * // Create one Media
     * const Media = await prisma.media.create({
     *   data: {
     *     // ... data to create a Media
     *   }
     * })
     * 
     */
    create<T extends MediaCreateArgs>(args: SelectSubset<T, MediaCreateArgs<ExtArgs>>): Prisma__MediaClient<$Result.GetResult<Prisma.$MediaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Media.
     * @param {MediaCreateManyArgs} args - Arguments to create many Media.
     * @example
     * // Create many Media
     * const media = await prisma.media.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MediaCreateManyArgs>(args?: SelectSubset<T, MediaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Media and returns the data saved in the database.
     * @param {MediaCreateManyAndReturnArgs} args - Arguments to create many Media.
     * @example
     * // Create many Media
     * const media = await prisma.media.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Media and only return the `id`
     * const mediaWithIdOnly = await prisma.media.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MediaCreateManyAndReturnArgs>(args?: SelectSubset<T, MediaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MediaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Media.
     * @param {MediaDeleteArgs} args - Arguments to delete one Media.
     * @example
     * // Delete one Media
     * const Media = await prisma.media.delete({
     *   where: {
     *     // ... filter to delete one Media
     *   }
     * })
     * 
     */
    delete<T extends MediaDeleteArgs>(args: SelectSubset<T, MediaDeleteArgs<ExtArgs>>): Prisma__MediaClient<$Result.GetResult<Prisma.$MediaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Media.
     * @param {MediaUpdateArgs} args - Arguments to update one Media.
     * @example
     * // Update one Media
     * const media = await prisma.media.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MediaUpdateArgs>(args: SelectSubset<T, MediaUpdateArgs<ExtArgs>>): Prisma__MediaClient<$Result.GetResult<Prisma.$MediaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Media.
     * @param {MediaDeleteManyArgs} args - Arguments to filter Media to delete.
     * @example
     * // Delete a few Media
     * const { count } = await prisma.media.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MediaDeleteManyArgs>(args?: SelectSubset<T, MediaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Media.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MediaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Media
     * const media = await prisma.media.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MediaUpdateManyArgs>(args: SelectSubset<T, MediaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Media and returns the data updated in the database.
     * @param {MediaUpdateManyAndReturnArgs} args - Arguments to update many Media.
     * @example
     * // Update many Media
     * const media = await prisma.media.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Media and only return the `id`
     * const mediaWithIdOnly = await prisma.media.updateManyAndReturn({
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
    updateManyAndReturn<T extends MediaUpdateManyAndReturnArgs>(args: SelectSubset<T, MediaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MediaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Media.
     * @param {MediaUpsertArgs} args - Arguments to update or create a Media.
     * @example
     * // Update or create a Media
     * const media = await prisma.media.upsert({
     *   create: {
     *     // ... data to create a Media
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Media we want to update
     *   }
     * })
     */
    upsert<T extends MediaUpsertArgs>(args: SelectSubset<T, MediaUpsertArgs<ExtArgs>>): Prisma__MediaClient<$Result.GetResult<Prisma.$MediaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Media.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MediaCountArgs} args - Arguments to filter Media to count.
     * @example
     * // Count the number of Media
     * const count = await prisma.media.count({
     *   where: {
     *     // ... the filter for the Media we want to count
     *   }
     * })
    **/
    count<T extends MediaCountArgs>(
      args?: Subset<T, MediaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MediaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Media.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MediaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MediaAggregateArgs>(args: Subset<T, MediaAggregateArgs>): Prisma.PrismaPromise<GetMediaAggregateType<T>>

    /**
     * Group by Media.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MediaGroupByArgs} args - Group by arguments.
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
      T extends MediaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MediaGroupByArgs['orderBy'] }
        : { orderBy?: MediaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MediaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMediaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Media model
   */
  readonly fields: MediaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Media.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MediaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    post<T extends PostsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PostsDefaultArgs<ExtArgs>>): Prisma__PostsClient<$Result.GetResult<Prisma.$PostsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Media model
   */
  interface MediaFieldRefs {
    readonly id: FieldRef<"Media", 'String'>
    readonly postId: FieldRef<"Media", 'String'>
    readonly mediaUrl: FieldRef<"Media", 'String'>
    readonly mediaType: FieldRef<"Media", 'MediaTypeEnum'>
    readonly createdAt: FieldRef<"Media", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Media findUnique
   */
  export type MediaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Media
     */
    select?: MediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Media
     */
    omit?: MediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaInclude<ExtArgs> | null
    /**
     * Filter, which Media to fetch.
     */
    where: MediaWhereUniqueInput
  }

  /**
   * Media findUniqueOrThrow
   */
  export type MediaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Media
     */
    select?: MediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Media
     */
    omit?: MediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaInclude<ExtArgs> | null
    /**
     * Filter, which Media to fetch.
     */
    where: MediaWhereUniqueInput
  }

  /**
   * Media findFirst
   */
  export type MediaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Media
     */
    select?: MediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Media
     */
    omit?: MediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaInclude<ExtArgs> | null
    /**
     * Filter, which Media to fetch.
     */
    where?: MediaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Media to fetch.
     */
    orderBy?: MediaOrderByWithRelationInput | MediaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Media.
     */
    cursor?: MediaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Media from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Media.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Media.
     */
    distinct?: MediaScalarFieldEnum | MediaScalarFieldEnum[]
  }

  /**
   * Media findFirstOrThrow
   */
  export type MediaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Media
     */
    select?: MediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Media
     */
    omit?: MediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaInclude<ExtArgs> | null
    /**
     * Filter, which Media to fetch.
     */
    where?: MediaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Media to fetch.
     */
    orderBy?: MediaOrderByWithRelationInput | MediaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Media.
     */
    cursor?: MediaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Media from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Media.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Media.
     */
    distinct?: MediaScalarFieldEnum | MediaScalarFieldEnum[]
  }

  /**
   * Media findMany
   */
  export type MediaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Media
     */
    select?: MediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Media
     */
    omit?: MediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaInclude<ExtArgs> | null
    /**
     * Filter, which Media to fetch.
     */
    where?: MediaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Media to fetch.
     */
    orderBy?: MediaOrderByWithRelationInput | MediaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Media.
     */
    cursor?: MediaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Media from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Media.
     */
    skip?: number
    distinct?: MediaScalarFieldEnum | MediaScalarFieldEnum[]
  }

  /**
   * Media create
   */
  export type MediaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Media
     */
    select?: MediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Media
     */
    omit?: MediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaInclude<ExtArgs> | null
    /**
     * The data needed to create a Media.
     */
    data: XOR<MediaCreateInput, MediaUncheckedCreateInput>
  }

  /**
   * Media createMany
   */
  export type MediaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Media.
     */
    data: MediaCreateManyInput | MediaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Media createManyAndReturn
   */
  export type MediaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Media
     */
    select?: MediaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Media
     */
    omit?: MediaOmit<ExtArgs> | null
    /**
     * The data used to create many Media.
     */
    data: MediaCreateManyInput | MediaCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Media update
   */
  export type MediaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Media
     */
    select?: MediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Media
     */
    omit?: MediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaInclude<ExtArgs> | null
    /**
     * The data needed to update a Media.
     */
    data: XOR<MediaUpdateInput, MediaUncheckedUpdateInput>
    /**
     * Choose, which Media to update.
     */
    where: MediaWhereUniqueInput
  }

  /**
   * Media updateMany
   */
  export type MediaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Media.
     */
    data: XOR<MediaUpdateManyMutationInput, MediaUncheckedUpdateManyInput>
    /**
     * Filter which Media to update
     */
    where?: MediaWhereInput
    /**
     * Limit how many Media to update.
     */
    limit?: number
  }

  /**
   * Media updateManyAndReturn
   */
  export type MediaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Media
     */
    select?: MediaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Media
     */
    omit?: MediaOmit<ExtArgs> | null
    /**
     * The data used to update Media.
     */
    data: XOR<MediaUpdateManyMutationInput, MediaUncheckedUpdateManyInput>
    /**
     * Filter which Media to update
     */
    where?: MediaWhereInput
    /**
     * Limit how many Media to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Media upsert
   */
  export type MediaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Media
     */
    select?: MediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Media
     */
    omit?: MediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaInclude<ExtArgs> | null
    /**
     * The filter to search for the Media to update in case it exists.
     */
    where: MediaWhereUniqueInput
    /**
     * In case the Media found by the `where` argument doesn't exist, create a new Media with this data.
     */
    create: XOR<MediaCreateInput, MediaUncheckedCreateInput>
    /**
     * In case the Media was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MediaUpdateInput, MediaUncheckedUpdateInput>
  }

  /**
   * Media delete
   */
  export type MediaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Media
     */
    select?: MediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Media
     */
    omit?: MediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaInclude<ExtArgs> | null
    /**
     * Filter which Media to delete.
     */
    where: MediaWhereUniqueInput
  }

  /**
   * Media deleteMany
   */
  export type MediaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Media to delete
     */
    where?: MediaWhereInput
    /**
     * Limit how many Media to delete.
     */
    limit?: number
  }

  /**
   * Media without action
   */
  export type MediaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Media
     */
    select?: MediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Media
     */
    omit?: MediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaInclude<ExtArgs> | null
  }


  /**
   * Model Likes
   */

  export type AggregateLikes = {
    _count: LikesCountAggregateOutputType | null
    _min: LikesMinAggregateOutputType | null
    _max: LikesMaxAggregateOutputType | null
  }

  export type LikesMinAggregateOutputType = {
    id: string | null
    userId: string | null
    postId: string | null
    createdAt: Date | null
  }

  export type LikesMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    postId: string | null
    createdAt: Date | null
  }

  export type LikesCountAggregateOutputType = {
    id: number
    userId: number
    postId: number
    createdAt: number
    _all: number
  }


  export type LikesMinAggregateInputType = {
    id?: true
    userId?: true
    postId?: true
    createdAt?: true
  }

  export type LikesMaxAggregateInputType = {
    id?: true
    userId?: true
    postId?: true
    createdAt?: true
  }

  export type LikesCountAggregateInputType = {
    id?: true
    userId?: true
    postId?: true
    createdAt?: true
    _all?: true
  }

  export type LikesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Likes to aggregate.
     */
    where?: LikesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Likes to fetch.
     */
    orderBy?: LikesOrderByWithRelationInput | LikesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LikesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Likes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Likes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Likes
    **/
    _count?: true | LikesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LikesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LikesMaxAggregateInputType
  }

  export type GetLikesAggregateType<T extends LikesAggregateArgs> = {
        [P in keyof T & keyof AggregateLikes]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLikes[P]>
      : GetScalarType<T[P], AggregateLikes[P]>
  }




  export type LikesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LikesWhereInput
    orderBy?: LikesOrderByWithAggregationInput | LikesOrderByWithAggregationInput[]
    by: LikesScalarFieldEnum[] | LikesScalarFieldEnum
    having?: LikesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LikesCountAggregateInputType | true
    _min?: LikesMinAggregateInputType
    _max?: LikesMaxAggregateInputType
  }

  export type LikesGroupByOutputType = {
    id: string
    userId: string | null
    postId: string
    createdAt: Date
    _count: LikesCountAggregateOutputType | null
    _min: LikesMinAggregateOutputType | null
    _max: LikesMaxAggregateOutputType | null
  }

  type GetLikesGroupByPayload<T extends LikesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LikesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LikesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LikesGroupByOutputType[P]>
            : GetScalarType<T[P], LikesGroupByOutputType[P]>
        }
      >
    >


  export type LikesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    postId?: boolean
    createdAt?: boolean
    user?: boolean | Likes$userArgs<ExtArgs>
    post?: boolean | PostsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["likes"]>

  export type LikesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    postId?: boolean
    createdAt?: boolean
    user?: boolean | Likes$userArgs<ExtArgs>
    post?: boolean | PostsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["likes"]>

  export type LikesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    postId?: boolean
    createdAt?: boolean
    user?: boolean | Likes$userArgs<ExtArgs>
    post?: boolean | PostsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["likes"]>

  export type LikesSelectScalar = {
    id?: boolean
    userId?: boolean
    postId?: boolean
    createdAt?: boolean
  }

  export type LikesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "postId" | "createdAt", ExtArgs["result"]["likes"]>
  export type LikesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | Likes$userArgs<ExtArgs>
    post?: boolean | PostsDefaultArgs<ExtArgs>
  }
  export type LikesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | Likes$userArgs<ExtArgs>
    post?: boolean | PostsDefaultArgs<ExtArgs>
  }
  export type LikesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | Likes$userArgs<ExtArgs>
    post?: boolean | PostsDefaultArgs<ExtArgs>
  }

  export type $LikesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Likes"
    objects: {
      user: Prisma.$UsersPayload<ExtArgs> | null
      post: Prisma.$PostsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string | null
      postId: string
      createdAt: Date
    }, ExtArgs["result"]["likes"]>
    composites: {}
  }

  type LikesGetPayload<S extends boolean | null | undefined | LikesDefaultArgs> = $Result.GetResult<Prisma.$LikesPayload, S>

  type LikesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LikesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LikesCountAggregateInputType | true
    }

  export interface LikesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Likes'], meta: { name: 'Likes' } }
    /**
     * Find zero or one Likes that matches the filter.
     * @param {LikesFindUniqueArgs} args - Arguments to find a Likes
     * @example
     * // Get one Likes
     * const likes = await prisma.likes.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LikesFindUniqueArgs>(args: SelectSubset<T, LikesFindUniqueArgs<ExtArgs>>): Prisma__LikesClient<$Result.GetResult<Prisma.$LikesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Likes that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LikesFindUniqueOrThrowArgs} args - Arguments to find a Likes
     * @example
     * // Get one Likes
     * const likes = await prisma.likes.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LikesFindUniqueOrThrowArgs>(args: SelectSubset<T, LikesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LikesClient<$Result.GetResult<Prisma.$LikesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Likes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikesFindFirstArgs} args - Arguments to find a Likes
     * @example
     * // Get one Likes
     * const likes = await prisma.likes.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LikesFindFirstArgs>(args?: SelectSubset<T, LikesFindFirstArgs<ExtArgs>>): Prisma__LikesClient<$Result.GetResult<Prisma.$LikesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Likes that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikesFindFirstOrThrowArgs} args - Arguments to find a Likes
     * @example
     * // Get one Likes
     * const likes = await prisma.likes.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LikesFindFirstOrThrowArgs>(args?: SelectSubset<T, LikesFindFirstOrThrowArgs<ExtArgs>>): Prisma__LikesClient<$Result.GetResult<Prisma.$LikesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Likes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Likes
     * const likes = await prisma.likes.findMany()
     * 
     * // Get first 10 Likes
     * const likes = await prisma.likes.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const likesWithIdOnly = await prisma.likes.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LikesFindManyArgs>(args?: SelectSubset<T, LikesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LikesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Likes.
     * @param {LikesCreateArgs} args - Arguments to create a Likes.
     * @example
     * // Create one Likes
     * const Likes = await prisma.likes.create({
     *   data: {
     *     // ... data to create a Likes
     *   }
     * })
     * 
     */
    create<T extends LikesCreateArgs>(args: SelectSubset<T, LikesCreateArgs<ExtArgs>>): Prisma__LikesClient<$Result.GetResult<Prisma.$LikesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Likes.
     * @param {LikesCreateManyArgs} args - Arguments to create many Likes.
     * @example
     * // Create many Likes
     * const likes = await prisma.likes.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LikesCreateManyArgs>(args?: SelectSubset<T, LikesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Likes and returns the data saved in the database.
     * @param {LikesCreateManyAndReturnArgs} args - Arguments to create many Likes.
     * @example
     * // Create many Likes
     * const likes = await prisma.likes.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Likes and only return the `id`
     * const likesWithIdOnly = await prisma.likes.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LikesCreateManyAndReturnArgs>(args?: SelectSubset<T, LikesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LikesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Likes.
     * @param {LikesDeleteArgs} args - Arguments to delete one Likes.
     * @example
     * // Delete one Likes
     * const Likes = await prisma.likes.delete({
     *   where: {
     *     // ... filter to delete one Likes
     *   }
     * })
     * 
     */
    delete<T extends LikesDeleteArgs>(args: SelectSubset<T, LikesDeleteArgs<ExtArgs>>): Prisma__LikesClient<$Result.GetResult<Prisma.$LikesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Likes.
     * @param {LikesUpdateArgs} args - Arguments to update one Likes.
     * @example
     * // Update one Likes
     * const likes = await prisma.likes.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LikesUpdateArgs>(args: SelectSubset<T, LikesUpdateArgs<ExtArgs>>): Prisma__LikesClient<$Result.GetResult<Prisma.$LikesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Likes.
     * @param {LikesDeleteManyArgs} args - Arguments to filter Likes to delete.
     * @example
     * // Delete a few Likes
     * const { count } = await prisma.likes.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LikesDeleteManyArgs>(args?: SelectSubset<T, LikesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Likes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Likes
     * const likes = await prisma.likes.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LikesUpdateManyArgs>(args: SelectSubset<T, LikesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Likes and returns the data updated in the database.
     * @param {LikesUpdateManyAndReturnArgs} args - Arguments to update many Likes.
     * @example
     * // Update many Likes
     * const likes = await prisma.likes.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Likes and only return the `id`
     * const likesWithIdOnly = await prisma.likes.updateManyAndReturn({
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
    updateManyAndReturn<T extends LikesUpdateManyAndReturnArgs>(args: SelectSubset<T, LikesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LikesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Likes.
     * @param {LikesUpsertArgs} args - Arguments to update or create a Likes.
     * @example
     * // Update or create a Likes
     * const likes = await prisma.likes.upsert({
     *   create: {
     *     // ... data to create a Likes
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Likes we want to update
     *   }
     * })
     */
    upsert<T extends LikesUpsertArgs>(args: SelectSubset<T, LikesUpsertArgs<ExtArgs>>): Prisma__LikesClient<$Result.GetResult<Prisma.$LikesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Likes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikesCountArgs} args - Arguments to filter Likes to count.
     * @example
     * // Count the number of Likes
     * const count = await prisma.likes.count({
     *   where: {
     *     // ... the filter for the Likes we want to count
     *   }
     * })
    **/
    count<T extends LikesCountArgs>(
      args?: Subset<T, LikesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LikesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Likes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LikesAggregateArgs>(args: Subset<T, LikesAggregateArgs>): Prisma.PrismaPromise<GetLikesAggregateType<T>>

    /**
     * Group by Likes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikesGroupByArgs} args - Group by arguments.
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
      T extends LikesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LikesGroupByArgs['orderBy'] }
        : { orderBy?: LikesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, LikesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLikesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Likes model
   */
  readonly fields: LikesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Likes.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LikesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends Likes$userArgs<ExtArgs> = {}>(args?: Subset<T, Likes$userArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    post<T extends PostsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PostsDefaultArgs<ExtArgs>>): Prisma__PostsClient<$Result.GetResult<Prisma.$PostsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Likes model
   */
  interface LikesFieldRefs {
    readonly id: FieldRef<"Likes", 'String'>
    readonly userId: FieldRef<"Likes", 'String'>
    readonly postId: FieldRef<"Likes", 'String'>
    readonly createdAt: FieldRef<"Likes", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Likes findUnique
   */
  export type LikesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Likes
     */
    select?: LikesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Likes
     */
    omit?: LikesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikesInclude<ExtArgs> | null
    /**
     * Filter, which Likes to fetch.
     */
    where: LikesWhereUniqueInput
  }

  /**
   * Likes findUniqueOrThrow
   */
  export type LikesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Likes
     */
    select?: LikesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Likes
     */
    omit?: LikesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikesInclude<ExtArgs> | null
    /**
     * Filter, which Likes to fetch.
     */
    where: LikesWhereUniqueInput
  }

  /**
   * Likes findFirst
   */
  export type LikesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Likes
     */
    select?: LikesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Likes
     */
    omit?: LikesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikesInclude<ExtArgs> | null
    /**
     * Filter, which Likes to fetch.
     */
    where?: LikesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Likes to fetch.
     */
    orderBy?: LikesOrderByWithRelationInput | LikesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Likes.
     */
    cursor?: LikesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Likes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Likes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Likes.
     */
    distinct?: LikesScalarFieldEnum | LikesScalarFieldEnum[]
  }

  /**
   * Likes findFirstOrThrow
   */
  export type LikesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Likes
     */
    select?: LikesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Likes
     */
    omit?: LikesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikesInclude<ExtArgs> | null
    /**
     * Filter, which Likes to fetch.
     */
    where?: LikesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Likes to fetch.
     */
    orderBy?: LikesOrderByWithRelationInput | LikesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Likes.
     */
    cursor?: LikesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Likes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Likes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Likes.
     */
    distinct?: LikesScalarFieldEnum | LikesScalarFieldEnum[]
  }

  /**
   * Likes findMany
   */
  export type LikesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Likes
     */
    select?: LikesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Likes
     */
    omit?: LikesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikesInclude<ExtArgs> | null
    /**
     * Filter, which Likes to fetch.
     */
    where?: LikesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Likes to fetch.
     */
    orderBy?: LikesOrderByWithRelationInput | LikesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Likes.
     */
    cursor?: LikesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Likes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Likes.
     */
    skip?: number
    distinct?: LikesScalarFieldEnum | LikesScalarFieldEnum[]
  }

  /**
   * Likes create
   */
  export type LikesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Likes
     */
    select?: LikesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Likes
     */
    omit?: LikesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikesInclude<ExtArgs> | null
    /**
     * The data needed to create a Likes.
     */
    data: XOR<LikesCreateInput, LikesUncheckedCreateInput>
  }

  /**
   * Likes createMany
   */
  export type LikesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Likes.
     */
    data: LikesCreateManyInput | LikesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Likes createManyAndReturn
   */
  export type LikesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Likes
     */
    select?: LikesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Likes
     */
    omit?: LikesOmit<ExtArgs> | null
    /**
     * The data used to create many Likes.
     */
    data: LikesCreateManyInput | LikesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Likes update
   */
  export type LikesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Likes
     */
    select?: LikesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Likes
     */
    omit?: LikesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikesInclude<ExtArgs> | null
    /**
     * The data needed to update a Likes.
     */
    data: XOR<LikesUpdateInput, LikesUncheckedUpdateInput>
    /**
     * Choose, which Likes to update.
     */
    where: LikesWhereUniqueInput
  }

  /**
   * Likes updateMany
   */
  export type LikesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Likes.
     */
    data: XOR<LikesUpdateManyMutationInput, LikesUncheckedUpdateManyInput>
    /**
     * Filter which Likes to update
     */
    where?: LikesWhereInput
    /**
     * Limit how many Likes to update.
     */
    limit?: number
  }

  /**
   * Likes updateManyAndReturn
   */
  export type LikesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Likes
     */
    select?: LikesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Likes
     */
    omit?: LikesOmit<ExtArgs> | null
    /**
     * The data used to update Likes.
     */
    data: XOR<LikesUpdateManyMutationInput, LikesUncheckedUpdateManyInput>
    /**
     * Filter which Likes to update
     */
    where?: LikesWhereInput
    /**
     * Limit how many Likes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Likes upsert
   */
  export type LikesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Likes
     */
    select?: LikesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Likes
     */
    omit?: LikesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikesInclude<ExtArgs> | null
    /**
     * The filter to search for the Likes to update in case it exists.
     */
    where: LikesWhereUniqueInput
    /**
     * In case the Likes found by the `where` argument doesn't exist, create a new Likes with this data.
     */
    create: XOR<LikesCreateInput, LikesUncheckedCreateInput>
    /**
     * In case the Likes was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LikesUpdateInput, LikesUncheckedUpdateInput>
  }

  /**
   * Likes delete
   */
  export type LikesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Likes
     */
    select?: LikesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Likes
     */
    omit?: LikesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikesInclude<ExtArgs> | null
    /**
     * Filter which Likes to delete.
     */
    where: LikesWhereUniqueInput
  }

  /**
   * Likes deleteMany
   */
  export type LikesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Likes to delete
     */
    where?: LikesWhereInput
    /**
     * Limit how many Likes to delete.
     */
    limit?: number
  }

  /**
   * Likes.user
   */
  export type Likes$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    where?: UsersWhereInput
  }

  /**
   * Likes without action
   */
  export type LikesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Likes
     */
    select?: LikesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Likes
     */
    omit?: LikesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikesInclude<ExtArgs> | null
  }


  /**
   * Model Comments
   */

  export type AggregateComments = {
    _count: CommentsCountAggregateOutputType | null
    _min: CommentsMinAggregateOutputType | null
    _max: CommentsMaxAggregateOutputType | null
  }

  export type CommentsMinAggregateOutputType = {
    id: string | null
    userId: string | null
    postId: string | null
    parentId: string | null
    content: string | null
    createdAt: Date | null
  }

  export type CommentsMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    postId: string | null
    parentId: string | null
    content: string | null
    createdAt: Date | null
  }

  export type CommentsCountAggregateOutputType = {
    id: number
    userId: number
    postId: number
    parentId: number
    content: number
    createdAt: number
    _all: number
  }


  export type CommentsMinAggregateInputType = {
    id?: true
    userId?: true
    postId?: true
    parentId?: true
    content?: true
    createdAt?: true
  }

  export type CommentsMaxAggregateInputType = {
    id?: true
    userId?: true
    postId?: true
    parentId?: true
    content?: true
    createdAt?: true
  }

  export type CommentsCountAggregateInputType = {
    id?: true
    userId?: true
    postId?: true
    parentId?: true
    content?: true
    createdAt?: true
    _all?: true
  }

  export type CommentsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Comments to aggregate.
     */
    where?: CommentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentsOrderByWithRelationInput | CommentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CommentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Comments
    **/
    _count?: true | CommentsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CommentsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CommentsMaxAggregateInputType
  }

  export type GetCommentsAggregateType<T extends CommentsAggregateArgs> = {
        [P in keyof T & keyof AggregateComments]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateComments[P]>
      : GetScalarType<T[P], AggregateComments[P]>
  }




  export type CommentsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommentsWhereInput
    orderBy?: CommentsOrderByWithAggregationInput | CommentsOrderByWithAggregationInput[]
    by: CommentsScalarFieldEnum[] | CommentsScalarFieldEnum
    having?: CommentsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CommentsCountAggregateInputType | true
    _min?: CommentsMinAggregateInputType
    _max?: CommentsMaxAggregateInputType
  }

  export type CommentsGroupByOutputType = {
    id: string
    userId: string | null
    postId: string
    parentId: string | null
    content: string
    createdAt: Date
    _count: CommentsCountAggregateOutputType | null
    _min: CommentsMinAggregateOutputType | null
    _max: CommentsMaxAggregateOutputType | null
  }

  type GetCommentsGroupByPayload<T extends CommentsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CommentsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CommentsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CommentsGroupByOutputType[P]>
            : GetScalarType<T[P], CommentsGroupByOutputType[P]>
        }
      >
    >


  export type CommentsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    postId?: boolean
    parentId?: boolean
    content?: boolean
    createdAt?: boolean
    user?: boolean | Comments$userArgs<ExtArgs>
    post?: boolean | PostsDefaultArgs<ExtArgs>
    parent?: boolean | Comments$parentArgs<ExtArgs>
    replies?: boolean | Comments$repliesArgs<ExtArgs>
    _count?: boolean | CommentsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["comments"]>

  export type CommentsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    postId?: boolean
    parentId?: boolean
    content?: boolean
    createdAt?: boolean
    user?: boolean | Comments$userArgs<ExtArgs>
    post?: boolean | PostsDefaultArgs<ExtArgs>
    parent?: boolean | Comments$parentArgs<ExtArgs>
  }, ExtArgs["result"]["comments"]>

  export type CommentsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    postId?: boolean
    parentId?: boolean
    content?: boolean
    createdAt?: boolean
    user?: boolean | Comments$userArgs<ExtArgs>
    post?: boolean | PostsDefaultArgs<ExtArgs>
    parent?: boolean | Comments$parentArgs<ExtArgs>
  }, ExtArgs["result"]["comments"]>

  export type CommentsSelectScalar = {
    id?: boolean
    userId?: boolean
    postId?: boolean
    parentId?: boolean
    content?: boolean
    createdAt?: boolean
  }

  export type CommentsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "postId" | "parentId" | "content" | "createdAt", ExtArgs["result"]["comments"]>
  export type CommentsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | Comments$userArgs<ExtArgs>
    post?: boolean | PostsDefaultArgs<ExtArgs>
    parent?: boolean | Comments$parentArgs<ExtArgs>
    replies?: boolean | Comments$repliesArgs<ExtArgs>
    _count?: boolean | CommentsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CommentsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | Comments$userArgs<ExtArgs>
    post?: boolean | PostsDefaultArgs<ExtArgs>
    parent?: boolean | Comments$parentArgs<ExtArgs>
  }
  export type CommentsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | Comments$userArgs<ExtArgs>
    post?: boolean | PostsDefaultArgs<ExtArgs>
    parent?: boolean | Comments$parentArgs<ExtArgs>
  }

  export type $CommentsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Comments"
    objects: {
      user: Prisma.$UsersPayload<ExtArgs> | null
      post: Prisma.$PostsPayload<ExtArgs>
      parent: Prisma.$CommentsPayload<ExtArgs> | null
      replies: Prisma.$CommentsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string | null
      postId: string
      parentId: string | null
      content: string
      createdAt: Date
    }, ExtArgs["result"]["comments"]>
    composites: {}
  }

  type CommentsGetPayload<S extends boolean | null | undefined | CommentsDefaultArgs> = $Result.GetResult<Prisma.$CommentsPayload, S>

  type CommentsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CommentsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CommentsCountAggregateInputType | true
    }

  export interface CommentsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Comments'], meta: { name: 'Comments' } }
    /**
     * Find zero or one Comments that matches the filter.
     * @param {CommentsFindUniqueArgs} args - Arguments to find a Comments
     * @example
     * // Get one Comments
     * const comments = await prisma.comments.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CommentsFindUniqueArgs>(args: SelectSubset<T, CommentsFindUniqueArgs<ExtArgs>>): Prisma__CommentsClient<$Result.GetResult<Prisma.$CommentsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Comments that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CommentsFindUniqueOrThrowArgs} args - Arguments to find a Comments
     * @example
     * // Get one Comments
     * const comments = await prisma.comments.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CommentsFindUniqueOrThrowArgs>(args: SelectSubset<T, CommentsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CommentsClient<$Result.GetResult<Prisma.$CommentsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Comments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentsFindFirstArgs} args - Arguments to find a Comments
     * @example
     * // Get one Comments
     * const comments = await prisma.comments.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CommentsFindFirstArgs>(args?: SelectSubset<T, CommentsFindFirstArgs<ExtArgs>>): Prisma__CommentsClient<$Result.GetResult<Prisma.$CommentsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Comments that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentsFindFirstOrThrowArgs} args - Arguments to find a Comments
     * @example
     * // Get one Comments
     * const comments = await prisma.comments.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CommentsFindFirstOrThrowArgs>(args?: SelectSubset<T, CommentsFindFirstOrThrowArgs<ExtArgs>>): Prisma__CommentsClient<$Result.GetResult<Prisma.$CommentsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Comments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Comments
     * const comments = await prisma.comments.findMany()
     * 
     * // Get first 10 Comments
     * const comments = await prisma.comments.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const commentsWithIdOnly = await prisma.comments.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CommentsFindManyArgs>(args?: SelectSubset<T, CommentsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Comments.
     * @param {CommentsCreateArgs} args - Arguments to create a Comments.
     * @example
     * // Create one Comments
     * const Comments = await prisma.comments.create({
     *   data: {
     *     // ... data to create a Comments
     *   }
     * })
     * 
     */
    create<T extends CommentsCreateArgs>(args: SelectSubset<T, CommentsCreateArgs<ExtArgs>>): Prisma__CommentsClient<$Result.GetResult<Prisma.$CommentsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Comments.
     * @param {CommentsCreateManyArgs} args - Arguments to create many Comments.
     * @example
     * // Create many Comments
     * const comments = await prisma.comments.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CommentsCreateManyArgs>(args?: SelectSubset<T, CommentsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Comments and returns the data saved in the database.
     * @param {CommentsCreateManyAndReturnArgs} args - Arguments to create many Comments.
     * @example
     * // Create many Comments
     * const comments = await prisma.comments.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Comments and only return the `id`
     * const commentsWithIdOnly = await prisma.comments.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CommentsCreateManyAndReturnArgs>(args?: SelectSubset<T, CommentsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Comments.
     * @param {CommentsDeleteArgs} args - Arguments to delete one Comments.
     * @example
     * // Delete one Comments
     * const Comments = await prisma.comments.delete({
     *   where: {
     *     // ... filter to delete one Comments
     *   }
     * })
     * 
     */
    delete<T extends CommentsDeleteArgs>(args: SelectSubset<T, CommentsDeleteArgs<ExtArgs>>): Prisma__CommentsClient<$Result.GetResult<Prisma.$CommentsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Comments.
     * @param {CommentsUpdateArgs} args - Arguments to update one Comments.
     * @example
     * // Update one Comments
     * const comments = await prisma.comments.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CommentsUpdateArgs>(args: SelectSubset<T, CommentsUpdateArgs<ExtArgs>>): Prisma__CommentsClient<$Result.GetResult<Prisma.$CommentsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Comments.
     * @param {CommentsDeleteManyArgs} args - Arguments to filter Comments to delete.
     * @example
     * // Delete a few Comments
     * const { count } = await prisma.comments.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CommentsDeleteManyArgs>(args?: SelectSubset<T, CommentsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Comments
     * const comments = await prisma.comments.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CommentsUpdateManyArgs>(args: SelectSubset<T, CommentsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Comments and returns the data updated in the database.
     * @param {CommentsUpdateManyAndReturnArgs} args - Arguments to update many Comments.
     * @example
     * // Update many Comments
     * const comments = await prisma.comments.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Comments and only return the `id`
     * const commentsWithIdOnly = await prisma.comments.updateManyAndReturn({
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
    updateManyAndReturn<T extends CommentsUpdateManyAndReturnArgs>(args: SelectSubset<T, CommentsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Comments.
     * @param {CommentsUpsertArgs} args - Arguments to update or create a Comments.
     * @example
     * // Update or create a Comments
     * const comments = await prisma.comments.upsert({
     *   create: {
     *     // ... data to create a Comments
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Comments we want to update
     *   }
     * })
     */
    upsert<T extends CommentsUpsertArgs>(args: SelectSubset<T, CommentsUpsertArgs<ExtArgs>>): Prisma__CommentsClient<$Result.GetResult<Prisma.$CommentsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentsCountArgs} args - Arguments to filter Comments to count.
     * @example
     * // Count the number of Comments
     * const count = await prisma.comments.count({
     *   where: {
     *     // ... the filter for the Comments we want to count
     *   }
     * })
    **/
    count<T extends CommentsCountArgs>(
      args?: Subset<T, CommentsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CommentsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CommentsAggregateArgs>(args: Subset<T, CommentsAggregateArgs>): Prisma.PrismaPromise<GetCommentsAggregateType<T>>

    /**
     * Group by Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentsGroupByArgs} args - Group by arguments.
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
      T extends CommentsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CommentsGroupByArgs['orderBy'] }
        : { orderBy?: CommentsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CommentsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCommentsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Comments model
   */
  readonly fields: CommentsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Comments.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CommentsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends Comments$userArgs<ExtArgs> = {}>(args?: Subset<T, Comments$userArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    post<T extends PostsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PostsDefaultArgs<ExtArgs>>): Prisma__PostsClient<$Result.GetResult<Prisma.$PostsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    parent<T extends Comments$parentArgs<ExtArgs> = {}>(args?: Subset<T, Comments$parentArgs<ExtArgs>>): Prisma__CommentsClient<$Result.GetResult<Prisma.$CommentsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    replies<T extends Comments$repliesArgs<ExtArgs> = {}>(args?: Subset<T, Comments$repliesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Comments model
   */
  interface CommentsFieldRefs {
    readonly id: FieldRef<"Comments", 'String'>
    readonly userId: FieldRef<"Comments", 'String'>
    readonly postId: FieldRef<"Comments", 'String'>
    readonly parentId: FieldRef<"Comments", 'String'>
    readonly content: FieldRef<"Comments", 'String'>
    readonly createdAt: FieldRef<"Comments", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Comments findUnique
   */
  export type CommentsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comments
     */
    select?: CommentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comments
     */
    omit?: CommentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentsInclude<ExtArgs> | null
    /**
     * Filter, which Comments to fetch.
     */
    where: CommentsWhereUniqueInput
  }

  /**
   * Comments findUniqueOrThrow
   */
  export type CommentsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comments
     */
    select?: CommentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comments
     */
    omit?: CommentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentsInclude<ExtArgs> | null
    /**
     * Filter, which Comments to fetch.
     */
    where: CommentsWhereUniqueInput
  }

  /**
   * Comments findFirst
   */
  export type CommentsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comments
     */
    select?: CommentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comments
     */
    omit?: CommentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentsInclude<ExtArgs> | null
    /**
     * Filter, which Comments to fetch.
     */
    where?: CommentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentsOrderByWithRelationInput | CommentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Comments.
     */
    cursor?: CommentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Comments.
     */
    distinct?: CommentsScalarFieldEnum | CommentsScalarFieldEnum[]
  }

  /**
   * Comments findFirstOrThrow
   */
  export type CommentsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comments
     */
    select?: CommentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comments
     */
    omit?: CommentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentsInclude<ExtArgs> | null
    /**
     * Filter, which Comments to fetch.
     */
    where?: CommentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentsOrderByWithRelationInput | CommentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Comments.
     */
    cursor?: CommentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Comments.
     */
    distinct?: CommentsScalarFieldEnum | CommentsScalarFieldEnum[]
  }

  /**
   * Comments findMany
   */
  export type CommentsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comments
     */
    select?: CommentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comments
     */
    omit?: CommentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentsInclude<ExtArgs> | null
    /**
     * Filter, which Comments to fetch.
     */
    where?: CommentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentsOrderByWithRelationInput | CommentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Comments.
     */
    cursor?: CommentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    distinct?: CommentsScalarFieldEnum | CommentsScalarFieldEnum[]
  }

  /**
   * Comments create
   */
  export type CommentsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comments
     */
    select?: CommentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comments
     */
    omit?: CommentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentsInclude<ExtArgs> | null
    /**
     * The data needed to create a Comments.
     */
    data: XOR<CommentsCreateInput, CommentsUncheckedCreateInput>
  }

  /**
   * Comments createMany
   */
  export type CommentsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Comments.
     */
    data: CommentsCreateManyInput | CommentsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Comments createManyAndReturn
   */
  export type CommentsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comments
     */
    select?: CommentsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Comments
     */
    omit?: CommentsOmit<ExtArgs> | null
    /**
     * The data used to create many Comments.
     */
    data: CommentsCreateManyInput | CommentsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Comments update
   */
  export type CommentsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comments
     */
    select?: CommentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comments
     */
    omit?: CommentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentsInclude<ExtArgs> | null
    /**
     * The data needed to update a Comments.
     */
    data: XOR<CommentsUpdateInput, CommentsUncheckedUpdateInput>
    /**
     * Choose, which Comments to update.
     */
    where: CommentsWhereUniqueInput
  }

  /**
   * Comments updateMany
   */
  export type CommentsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Comments.
     */
    data: XOR<CommentsUpdateManyMutationInput, CommentsUncheckedUpdateManyInput>
    /**
     * Filter which Comments to update
     */
    where?: CommentsWhereInput
    /**
     * Limit how many Comments to update.
     */
    limit?: number
  }

  /**
   * Comments updateManyAndReturn
   */
  export type CommentsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comments
     */
    select?: CommentsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Comments
     */
    omit?: CommentsOmit<ExtArgs> | null
    /**
     * The data used to update Comments.
     */
    data: XOR<CommentsUpdateManyMutationInput, CommentsUncheckedUpdateManyInput>
    /**
     * Filter which Comments to update
     */
    where?: CommentsWhereInput
    /**
     * Limit how many Comments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Comments upsert
   */
  export type CommentsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comments
     */
    select?: CommentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comments
     */
    omit?: CommentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentsInclude<ExtArgs> | null
    /**
     * The filter to search for the Comments to update in case it exists.
     */
    where: CommentsWhereUniqueInput
    /**
     * In case the Comments found by the `where` argument doesn't exist, create a new Comments with this data.
     */
    create: XOR<CommentsCreateInput, CommentsUncheckedCreateInput>
    /**
     * In case the Comments was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CommentsUpdateInput, CommentsUncheckedUpdateInput>
  }

  /**
   * Comments delete
   */
  export type CommentsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comments
     */
    select?: CommentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comments
     */
    omit?: CommentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentsInclude<ExtArgs> | null
    /**
     * Filter which Comments to delete.
     */
    where: CommentsWhereUniqueInput
  }

  /**
   * Comments deleteMany
   */
  export type CommentsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Comments to delete
     */
    where?: CommentsWhereInput
    /**
     * Limit how many Comments to delete.
     */
    limit?: number
  }

  /**
   * Comments.user
   */
  export type Comments$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    where?: UsersWhereInput
  }

  /**
   * Comments.parent
   */
  export type Comments$parentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comments
     */
    select?: CommentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comments
     */
    omit?: CommentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentsInclude<ExtArgs> | null
    where?: CommentsWhereInput
  }

  /**
   * Comments.replies
   */
  export type Comments$repliesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comments
     */
    select?: CommentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comments
     */
    omit?: CommentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentsInclude<ExtArgs> | null
    where?: CommentsWhereInput
    orderBy?: CommentsOrderByWithRelationInput | CommentsOrderByWithRelationInput[]
    cursor?: CommentsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CommentsScalarFieldEnum | CommentsScalarFieldEnum[]
  }

  /**
   * Comments without action
   */
  export type CommentsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comments
     */
    select?: CommentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comments
     */
    omit?: CommentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentsInclude<ExtArgs> | null
  }


  /**
   * Model Shares
   */

  export type AggregateShares = {
    _count: SharesCountAggregateOutputType | null
    _min: SharesMinAggregateOutputType | null
    _max: SharesMaxAggregateOutputType | null
  }

  export type SharesMinAggregateOutputType = {
    id: string | null
    userId: string | null
    postId: string | null
    createdAt: Date | null
  }

  export type SharesMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    postId: string | null
    createdAt: Date | null
  }

  export type SharesCountAggregateOutputType = {
    id: number
    userId: number
    postId: number
    createdAt: number
    _all: number
  }


  export type SharesMinAggregateInputType = {
    id?: true
    userId?: true
    postId?: true
    createdAt?: true
  }

  export type SharesMaxAggregateInputType = {
    id?: true
    userId?: true
    postId?: true
    createdAt?: true
  }

  export type SharesCountAggregateInputType = {
    id?: true
    userId?: true
    postId?: true
    createdAt?: true
    _all?: true
  }

  export type SharesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Shares to aggregate.
     */
    where?: SharesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Shares to fetch.
     */
    orderBy?: SharesOrderByWithRelationInput | SharesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SharesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Shares from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Shares.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Shares
    **/
    _count?: true | SharesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SharesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SharesMaxAggregateInputType
  }

  export type GetSharesAggregateType<T extends SharesAggregateArgs> = {
        [P in keyof T & keyof AggregateShares]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateShares[P]>
      : GetScalarType<T[P], AggregateShares[P]>
  }




  export type SharesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SharesWhereInput
    orderBy?: SharesOrderByWithAggregationInput | SharesOrderByWithAggregationInput[]
    by: SharesScalarFieldEnum[] | SharesScalarFieldEnum
    having?: SharesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SharesCountAggregateInputType | true
    _min?: SharesMinAggregateInputType
    _max?: SharesMaxAggregateInputType
  }

  export type SharesGroupByOutputType = {
    id: string
    userId: string | null
    postId: string
    createdAt: Date
    _count: SharesCountAggregateOutputType | null
    _min: SharesMinAggregateOutputType | null
    _max: SharesMaxAggregateOutputType | null
  }

  type GetSharesGroupByPayload<T extends SharesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SharesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SharesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SharesGroupByOutputType[P]>
            : GetScalarType<T[P], SharesGroupByOutputType[P]>
        }
      >
    >


  export type SharesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    postId?: boolean
    createdAt?: boolean
    user?: boolean | Shares$userArgs<ExtArgs>
    post?: boolean | PostsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["shares"]>

  export type SharesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    postId?: boolean
    createdAt?: boolean
    user?: boolean | Shares$userArgs<ExtArgs>
    post?: boolean | PostsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["shares"]>

  export type SharesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    postId?: boolean
    createdAt?: boolean
    user?: boolean | Shares$userArgs<ExtArgs>
    post?: boolean | PostsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["shares"]>

  export type SharesSelectScalar = {
    id?: boolean
    userId?: boolean
    postId?: boolean
    createdAt?: boolean
  }

  export type SharesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "postId" | "createdAt", ExtArgs["result"]["shares"]>
  export type SharesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | Shares$userArgs<ExtArgs>
    post?: boolean | PostsDefaultArgs<ExtArgs>
  }
  export type SharesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | Shares$userArgs<ExtArgs>
    post?: boolean | PostsDefaultArgs<ExtArgs>
  }
  export type SharesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | Shares$userArgs<ExtArgs>
    post?: boolean | PostsDefaultArgs<ExtArgs>
  }

  export type $SharesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Shares"
    objects: {
      user: Prisma.$UsersPayload<ExtArgs> | null
      post: Prisma.$PostsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string | null
      postId: string
      createdAt: Date
    }, ExtArgs["result"]["shares"]>
    composites: {}
  }

  type SharesGetPayload<S extends boolean | null | undefined | SharesDefaultArgs> = $Result.GetResult<Prisma.$SharesPayload, S>

  type SharesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SharesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SharesCountAggregateInputType | true
    }

  export interface SharesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Shares'], meta: { name: 'Shares' } }
    /**
     * Find zero or one Shares that matches the filter.
     * @param {SharesFindUniqueArgs} args - Arguments to find a Shares
     * @example
     * // Get one Shares
     * const shares = await prisma.shares.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SharesFindUniqueArgs>(args: SelectSubset<T, SharesFindUniqueArgs<ExtArgs>>): Prisma__SharesClient<$Result.GetResult<Prisma.$SharesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Shares that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SharesFindUniqueOrThrowArgs} args - Arguments to find a Shares
     * @example
     * // Get one Shares
     * const shares = await prisma.shares.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SharesFindUniqueOrThrowArgs>(args: SelectSubset<T, SharesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SharesClient<$Result.GetResult<Prisma.$SharesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Shares that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SharesFindFirstArgs} args - Arguments to find a Shares
     * @example
     * // Get one Shares
     * const shares = await prisma.shares.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SharesFindFirstArgs>(args?: SelectSubset<T, SharesFindFirstArgs<ExtArgs>>): Prisma__SharesClient<$Result.GetResult<Prisma.$SharesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Shares that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SharesFindFirstOrThrowArgs} args - Arguments to find a Shares
     * @example
     * // Get one Shares
     * const shares = await prisma.shares.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SharesFindFirstOrThrowArgs>(args?: SelectSubset<T, SharesFindFirstOrThrowArgs<ExtArgs>>): Prisma__SharesClient<$Result.GetResult<Prisma.$SharesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Shares that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SharesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Shares
     * const shares = await prisma.shares.findMany()
     * 
     * // Get first 10 Shares
     * const shares = await prisma.shares.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sharesWithIdOnly = await prisma.shares.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SharesFindManyArgs>(args?: SelectSubset<T, SharesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SharesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Shares.
     * @param {SharesCreateArgs} args - Arguments to create a Shares.
     * @example
     * // Create one Shares
     * const Shares = await prisma.shares.create({
     *   data: {
     *     // ... data to create a Shares
     *   }
     * })
     * 
     */
    create<T extends SharesCreateArgs>(args: SelectSubset<T, SharesCreateArgs<ExtArgs>>): Prisma__SharesClient<$Result.GetResult<Prisma.$SharesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Shares.
     * @param {SharesCreateManyArgs} args - Arguments to create many Shares.
     * @example
     * // Create many Shares
     * const shares = await prisma.shares.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SharesCreateManyArgs>(args?: SelectSubset<T, SharesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Shares and returns the data saved in the database.
     * @param {SharesCreateManyAndReturnArgs} args - Arguments to create many Shares.
     * @example
     * // Create many Shares
     * const shares = await prisma.shares.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Shares and only return the `id`
     * const sharesWithIdOnly = await prisma.shares.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SharesCreateManyAndReturnArgs>(args?: SelectSubset<T, SharesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SharesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Shares.
     * @param {SharesDeleteArgs} args - Arguments to delete one Shares.
     * @example
     * // Delete one Shares
     * const Shares = await prisma.shares.delete({
     *   where: {
     *     // ... filter to delete one Shares
     *   }
     * })
     * 
     */
    delete<T extends SharesDeleteArgs>(args: SelectSubset<T, SharesDeleteArgs<ExtArgs>>): Prisma__SharesClient<$Result.GetResult<Prisma.$SharesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Shares.
     * @param {SharesUpdateArgs} args - Arguments to update one Shares.
     * @example
     * // Update one Shares
     * const shares = await prisma.shares.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SharesUpdateArgs>(args: SelectSubset<T, SharesUpdateArgs<ExtArgs>>): Prisma__SharesClient<$Result.GetResult<Prisma.$SharesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Shares.
     * @param {SharesDeleteManyArgs} args - Arguments to filter Shares to delete.
     * @example
     * // Delete a few Shares
     * const { count } = await prisma.shares.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SharesDeleteManyArgs>(args?: SelectSubset<T, SharesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Shares.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SharesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Shares
     * const shares = await prisma.shares.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SharesUpdateManyArgs>(args: SelectSubset<T, SharesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Shares and returns the data updated in the database.
     * @param {SharesUpdateManyAndReturnArgs} args - Arguments to update many Shares.
     * @example
     * // Update many Shares
     * const shares = await prisma.shares.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Shares and only return the `id`
     * const sharesWithIdOnly = await prisma.shares.updateManyAndReturn({
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
    updateManyAndReturn<T extends SharesUpdateManyAndReturnArgs>(args: SelectSubset<T, SharesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SharesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Shares.
     * @param {SharesUpsertArgs} args - Arguments to update or create a Shares.
     * @example
     * // Update or create a Shares
     * const shares = await prisma.shares.upsert({
     *   create: {
     *     // ... data to create a Shares
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Shares we want to update
     *   }
     * })
     */
    upsert<T extends SharesUpsertArgs>(args: SelectSubset<T, SharesUpsertArgs<ExtArgs>>): Prisma__SharesClient<$Result.GetResult<Prisma.$SharesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Shares.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SharesCountArgs} args - Arguments to filter Shares to count.
     * @example
     * // Count the number of Shares
     * const count = await prisma.shares.count({
     *   where: {
     *     // ... the filter for the Shares we want to count
     *   }
     * })
    **/
    count<T extends SharesCountArgs>(
      args?: Subset<T, SharesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SharesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Shares.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SharesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SharesAggregateArgs>(args: Subset<T, SharesAggregateArgs>): Prisma.PrismaPromise<GetSharesAggregateType<T>>

    /**
     * Group by Shares.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SharesGroupByArgs} args - Group by arguments.
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
      T extends SharesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SharesGroupByArgs['orderBy'] }
        : { orderBy?: SharesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SharesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSharesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Shares model
   */
  readonly fields: SharesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Shares.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SharesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends Shares$userArgs<ExtArgs> = {}>(args?: Subset<T, Shares$userArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    post<T extends PostsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PostsDefaultArgs<ExtArgs>>): Prisma__PostsClient<$Result.GetResult<Prisma.$PostsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Shares model
   */
  interface SharesFieldRefs {
    readonly id: FieldRef<"Shares", 'String'>
    readonly userId: FieldRef<"Shares", 'String'>
    readonly postId: FieldRef<"Shares", 'String'>
    readonly createdAt: FieldRef<"Shares", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Shares findUnique
   */
  export type SharesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shares
     */
    select?: SharesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shares
     */
    omit?: SharesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SharesInclude<ExtArgs> | null
    /**
     * Filter, which Shares to fetch.
     */
    where: SharesWhereUniqueInput
  }

  /**
   * Shares findUniqueOrThrow
   */
  export type SharesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shares
     */
    select?: SharesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shares
     */
    omit?: SharesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SharesInclude<ExtArgs> | null
    /**
     * Filter, which Shares to fetch.
     */
    where: SharesWhereUniqueInput
  }

  /**
   * Shares findFirst
   */
  export type SharesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shares
     */
    select?: SharesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shares
     */
    omit?: SharesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SharesInclude<ExtArgs> | null
    /**
     * Filter, which Shares to fetch.
     */
    where?: SharesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Shares to fetch.
     */
    orderBy?: SharesOrderByWithRelationInput | SharesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Shares.
     */
    cursor?: SharesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Shares from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Shares.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Shares.
     */
    distinct?: SharesScalarFieldEnum | SharesScalarFieldEnum[]
  }

  /**
   * Shares findFirstOrThrow
   */
  export type SharesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shares
     */
    select?: SharesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shares
     */
    omit?: SharesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SharesInclude<ExtArgs> | null
    /**
     * Filter, which Shares to fetch.
     */
    where?: SharesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Shares to fetch.
     */
    orderBy?: SharesOrderByWithRelationInput | SharesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Shares.
     */
    cursor?: SharesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Shares from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Shares.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Shares.
     */
    distinct?: SharesScalarFieldEnum | SharesScalarFieldEnum[]
  }

  /**
   * Shares findMany
   */
  export type SharesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shares
     */
    select?: SharesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shares
     */
    omit?: SharesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SharesInclude<ExtArgs> | null
    /**
     * Filter, which Shares to fetch.
     */
    where?: SharesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Shares to fetch.
     */
    orderBy?: SharesOrderByWithRelationInput | SharesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Shares.
     */
    cursor?: SharesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Shares from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Shares.
     */
    skip?: number
    distinct?: SharesScalarFieldEnum | SharesScalarFieldEnum[]
  }

  /**
   * Shares create
   */
  export type SharesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shares
     */
    select?: SharesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shares
     */
    omit?: SharesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SharesInclude<ExtArgs> | null
    /**
     * The data needed to create a Shares.
     */
    data: XOR<SharesCreateInput, SharesUncheckedCreateInput>
  }

  /**
   * Shares createMany
   */
  export type SharesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Shares.
     */
    data: SharesCreateManyInput | SharesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Shares createManyAndReturn
   */
  export type SharesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shares
     */
    select?: SharesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Shares
     */
    omit?: SharesOmit<ExtArgs> | null
    /**
     * The data used to create many Shares.
     */
    data: SharesCreateManyInput | SharesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SharesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Shares update
   */
  export type SharesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shares
     */
    select?: SharesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shares
     */
    omit?: SharesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SharesInclude<ExtArgs> | null
    /**
     * The data needed to update a Shares.
     */
    data: XOR<SharesUpdateInput, SharesUncheckedUpdateInput>
    /**
     * Choose, which Shares to update.
     */
    where: SharesWhereUniqueInput
  }

  /**
   * Shares updateMany
   */
  export type SharesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Shares.
     */
    data: XOR<SharesUpdateManyMutationInput, SharesUncheckedUpdateManyInput>
    /**
     * Filter which Shares to update
     */
    where?: SharesWhereInput
    /**
     * Limit how many Shares to update.
     */
    limit?: number
  }

  /**
   * Shares updateManyAndReturn
   */
  export type SharesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shares
     */
    select?: SharesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Shares
     */
    omit?: SharesOmit<ExtArgs> | null
    /**
     * The data used to update Shares.
     */
    data: XOR<SharesUpdateManyMutationInput, SharesUncheckedUpdateManyInput>
    /**
     * Filter which Shares to update
     */
    where?: SharesWhereInput
    /**
     * Limit how many Shares to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SharesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Shares upsert
   */
  export type SharesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shares
     */
    select?: SharesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shares
     */
    omit?: SharesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SharesInclude<ExtArgs> | null
    /**
     * The filter to search for the Shares to update in case it exists.
     */
    where: SharesWhereUniqueInput
    /**
     * In case the Shares found by the `where` argument doesn't exist, create a new Shares with this data.
     */
    create: XOR<SharesCreateInput, SharesUncheckedCreateInput>
    /**
     * In case the Shares was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SharesUpdateInput, SharesUncheckedUpdateInput>
  }

  /**
   * Shares delete
   */
  export type SharesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shares
     */
    select?: SharesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shares
     */
    omit?: SharesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SharesInclude<ExtArgs> | null
    /**
     * Filter which Shares to delete.
     */
    where: SharesWhereUniqueInput
  }

  /**
   * Shares deleteMany
   */
  export type SharesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Shares to delete
     */
    where?: SharesWhereInput
    /**
     * Limit how many Shares to delete.
     */
    limit?: number
  }

  /**
   * Shares.user
   */
  export type Shares$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    where?: UsersWhereInput
  }

  /**
   * Shares without action
   */
  export type SharesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shares
     */
    select?: SharesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shares
     */
    omit?: SharesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SharesInclude<ExtArgs> | null
  }


  /**
   * Model NewsFeed
   */

  export type AggregateNewsFeed = {
    _count: NewsFeedCountAggregateOutputType | null
    _avg: NewsFeedAvgAggregateOutputType | null
    _sum: NewsFeedSumAggregateOutputType | null
    _min: NewsFeedMinAggregateOutputType | null
    _max: NewsFeedMaxAggregateOutputType | null
  }

  export type NewsFeedAvgAggregateOutputType = {
    score: number | null
  }

  export type NewsFeedSumAggregateOutputType = {
    score: number | null
  }

  export type NewsFeedMinAggregateOutputType = {
    id: string | null
    userId: string | null
    postId: string | null
    reason: string | null
    score: number | null
    isNew: boolean | null
    createdAt: Date | null
  }

  export type NewsFeedMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    postId: string | null
    reason: string | null
    score: number | null
    isNew: boolean | null
    createdAt: Date | null
  }

  export type NewsFeedCountAggregateOutputType = {
    id: number
    userId: number
    postId: number
    reason: number
    score: number
    isNew: number
    createdAt: number
    _all: number
  }


  export type NewsFeedAvgAggregateInputType = {
    score?: true
  }

  export type NewsFeedSumAggregateInputType = {
    score?: true
  }

  export type NewsFeedMinAggregateInputType = {
    id?: true
    userId?: true
    postId?: true
    reason?: true
    score?: true
    isNew?: true
    createdAt?: true
  }

  export type NewsFeedMaxAggregateInputType = {
    id?: true
    userId?: true
    postId?: true
    reason?: true
    score?: true
    isNew?: true
    createdAt?: true
  }

  export type NewsFeedCountAggregateInputType = {
    id?: true
    userId?: true
    postId?: true
    reason?: true
    score?: true
    isNew?: true
    createdAt?: true
    _all?: true
  }

  export type NewsFeedAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which NewsFeed to aggregate.
     */
    where?: NewsFeedWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NewsFeeds to fetch.
     */
    orderBy?: NewsFeedOrderByWithRelationInput | NewsFeedOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NewsFeedWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NewsFeeds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NewsFeeds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned NewsFeeds
    **/
    _count?: true | NewsFeedCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: NewsFeedAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: NewsFeedSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NewsFeedMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NewsFeedMaxAggregateInputType
  }

  export type GetNewsFeedAggregateType<T extends NewsFeedAggregateArgs> = {
        [P in keyof T & keyof AggregateNewsFeed]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNewsFeed[P]>
      : GetScalarType<T[P], AggregateNewsFeed[P]>
  }




  export type NewsFeedGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NewsFeedWhereInput
    orderBy?: NewsFeedOrderByWithAggregationInput | NewsFeedOrderByWithAggregationInput[]
    by: NewsFeedScalarFieldEnum[] | NewsFeedScalarFieldEnum
    having?: NewsFeedScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NewsFeedCountAggregateInputType | true
    _avg?: NewsFeedAvgAggregateInputType
    _sum?: NewsFeedSumAggregateInputType
    _min?: NewsFeedMinAggregateInputType
    _max?: NewsFeedMaxAggregateInputType
  }

  export type NewsFeedGroupByOutputType = {
    id: string
    userId: string | null
    postId: string
    reason: string | null
    score: number
    isNew: boolean | null
    createdAt: Date
    _count: NewsFeedCountAggregateOutputType | null
    _avg: NewsFeedAvgAggregateOutputType | null
    _sum: NewsFeedSumAggregateOutputType | null
    _min: NewsFeedMinAggregateOutputType | null
    _max: NewsFeedMaxAggregateOutputType | null
  }

  type GetNewsFeedGroupByPayload<T extends NewsFeedGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NewsFeedGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NewsFeedGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NewsFeedGroupByOutputType[P]>
            : GetScalarType<T[P], NewsFeedGroupByOutputType[P]>
        }
      >
    >


  export type NewsFeedSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    postId?: boolean
    reason?: boolean
    score?: boolean
    isNew?: boolean
    createdAt?: boolean
    user?: boolean | NewsFeed$userArgs<ExtArgs>
    post?: boolean | PostsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["newsFeed"]>

  export type NewsFeedSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    postId?: boolean
    reason?: boolean
    score?: boolean
    isNew?: boolean
    createdAt?: boolean
    user?: boolean | NewsFeed$userArgs<ExtArgs>
    post?: boolean | PostsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["newsFeed"]>

  export type NewsFeedSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    postId?: boolean
    reason?: boolean
    score?: boolean
    isNew?: boolean
    createdAt?: boolean
    user?: boolean | NewsFeed$userArgs<ExtArgs>
    post?: boolean | PostsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["newsFeed"]>

  export type NewsFeedSelectScalar = {
    id?: boolean
    userId?: boolean
    postId?: boolean
    reason?: boolean
    score?: boolean
    isNew?: boolean
    createdAt?: boolean
  }

  export type NewsFeedOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "postId" | "reason" | "score" | "isNew" | "createdAt", ExtArgs["result"]["newsFeed"]>
  export type NewsFeedInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | NewsFeed$userArgs<ExtArgs>
    post?: boolean | PostsDefaultArgs<ExtArgs>
  }
  export type NewsFeedIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | NewsFeed$userArgs<ExtArgs>
    post?: boolean | PostsDefaultArgs<ExtArgs>
  }
  export type NewsFeedIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | NewsFeed$userArgs<ExtArgs>
    post?: boolean | PostsDefaultArgs<ExtArgs>
  }

  export type $NewsFeedPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "NewsFeed"
    objects: {
      user: Prisma.$UsersPayload<ExtArgs> | null
      post: Prisma.$PostsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string | null
      postId: string
      reason: string | null
      score: number
      isNew: boolean | null
      createdAt: Date
    }, ExtArgs["result"]["newsFeed"]>
    composites: {}
  }

  type NewsFeedGetPayload<S extends boolean | null | undefined | NewsFeedDefaultArgs> = $Result.GetResult<Prisma.$NewsFeedPayload, S>

  type NewsFeedCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<NewsFeedFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NewsFeedCountAggregateInputType | true
    }

  export interface NewsFeedDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['NewsFeed'], meta: { name: 'NewsFeed' } }
    /**
     * Find zero or one NewsFeed that matches the filter.
     * @param {NewsFeedFindUniqueArgs} args - Arguments to find a NewsFeed
     * @example
     * // Get one NewsFeed
     * const newsFeed = await prisma.newsFeed.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NewsFeedFindUniqueArgs>(args: SelectSubset<T, NewsFeedFindUniqueArgs<ExtArgs>>): Prisma__NewsFeedClient<$Result.GetResult<Prisma.$NewsFeedPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one NewsFeed that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NewsFeedFindUniqueOrThrowArgs} args - Arguments to find a NewsFeed
     * @example
     * // Get one NewsFeed
     * const newsFeed = await prisma.newsFeed.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NewsFeedFindUniqueOrThrowArgs>(args: SelectSubset<T, NewsFeedFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NewsFeedClient<$Result.GetResult<Prisma.$NewsFeedPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first NewsFeed that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsFeedFindFirstArgs} args - Arguments to find a NewsFeed
     * @example
     * // Get one NewsFeed
     * const newsFeed = await prisma.newsFeed.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NewsFeedFindFirstArgs>(args?: SelectSubset<T, NewsFeedFindFirstArgs<ExtArgs>>): Prisma__NewsFeedClient<$Result.GetResult<Prisma.$NewsFeedPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first NewsFeed that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsFeedFindFirstOrThrowArgs} args - Arguments to find a NewsFeed
     * @example
     * // Get one NewsFeed
     * const newsFeed = await prisma.newsFeed.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NewsFeedFindFirstOrThrowArgs>(args?: SelectSubset<T, NewsFeedFindFirstOrThrowArgs<ExtArgs>>): Prisma__NewsFeedClient<$Result.GetResult<Prisma.$NewsFeedPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more NewsFeeds that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsFeedFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all NewsFeeds
     * const newsFeeds = await prisma.newsFeed.findMany()
     * 
     * // Get first 10 NewsFeeds
     * const newsFeeds = await prisma.newsFeed.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const newsFeedWithIdOnly = await prisma.newsFeed.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NewsFeedFindManyArgs>(args?: SelectSubset<T, NewsFeedFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NewsFeedPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a NewsFeed.
     * @param {NewsFeedCreateArgs} args - Arguments to create a NewsFeed.
     * @example
     * // Create one NewsFeed
     * const NewsFeed = await prisma.newsFeed.create({
     *   data: {
     *     // ... data to create a NewsFeed
     *   }
     * })
     * 
     */
    create<T extends NewsFeedCreateArgs>(args: SelectSubset<T, NewsFeedCreateArgs<ExtArgs>>): Prisma__NewsFeedClient<$Result.GetResult<Prisma.$NewsFeedPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many NewsFeeds.
     * @param {NewsFeedCreateManyArgs} args - Arguments to create many NewsFeeds.
     * @example
     * // Create many NewsFeeds
     * const newsFeed = await prisma.newsFeed.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NewsFeedCreateManyArgs>(args?: SelectSubset<T, NewsFeedCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many NewsFeeds and returns the data saved in the database.
     * @param {NewsFeedCreateManyAndReturnArgs} args - Arguments to create many NewsFeeds.
     * @example
     * // Create many NewsFeeds
     * const newsFeed = await prisma.newsFeed.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many NewsFeeds and only return the `id`
     * const newsFeedWithIdOnly = await prisma.newsFeed.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends NewsFeedCreateManyAndReturnArgs>(args?: SelectSubset<T, NewsFeedCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NewsFeedPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a NewsFeed.
     * @param {NewsFeedDeleteArgs} args - Arguments to delete one NewsFeed.
     * @example
     * // Delete one NewsFeed
     * const NewsFeed = await prisma.newsFeed.delete({
     *   where: {
     *     // ... filter to delete one NewsFeed
     *   }
     * })
     * 
     */
    delete<T extends NewsFeedDeleteArgs>(args: SelectSubset<T, NewsFeedDeleteArgs<ExtArgs>>): Prisma__NewsFeedClient<$Result.GetResult<Prisma.$NewsFeedPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one NewsFeed.
     * @param {NewsFeedUpdateArgs} args - Arguments to update one NewsFeed.
     * @example
     * // Update one NewsFeed
     * const newsFeed = await prisma.newsFeed.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NewsFeedUpdateArgs>(args: SelectSubset<T, NewsFeedUpdateArgs<ExtArgs>>): Prisma__NewsFeedClient<$Result.GetResult<Prisma.$NewsFeedPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more NewsFeeds.
     * @param {NewsFeedDeleteManyArgs} args - Arguments to filter NewsFeeds to delete.
     * @example
     * // Delete a few NewsFeeds
     * const { count } = await prisma.newsFeed.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NewsFeedDeleteManyArgs>(args?: SelectSubset<T, NewsFeedDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more NewsFeeds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsFeedUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many NewsFeeds
     * const newsFeed = await prisma.newsFeed.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NewsFeedUpdateManyArgs>(args: SelectSubset<T, NewsFeedUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more NewsFeeds and returns the data updated in the database.
     * @param {NewsFeedUpdateManyAndReturnArgs} args - Arguments to update many NewsFeeds.
     * @example
     * // Update many NewsFeeds
     * const newsFeed = await prisma.newsFeed.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more NewsFeeds and only return the `id`
     * const newsFeedWithIdOnly = await prisma.newsFeed.updateManyAndReturn({
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
    updateManyAndReturn<T extends NewsFeedUpdateManyAndReturnArgs>(args: SelectSubset<T, NewsFeedUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NewsFeedPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one NewsFeed.
     * @param {NewsFeedUpsertArgs} args - Arguments to update or create a NewsFeed.
     * @example
     * // Update or create a NewsFeed
     * const newsFeed = await prisma.newsFeed.upsert({
     *   create: {
     *     // ... data to create a NewsFeed
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the NewsFeed we want to update
     *   }
     * })
     */
    upsert<T extends NewsFeedUpsertArgs>(args: SelectSubset<T, NewsFeedUpsertArgs<ExtArgs>>): Prisma__NewsFeedClient<$Result.GetResult<Prisma.$NewsFeedPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of NewsFeeds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsFeedCountArgs} args - Arguments to filter NewsFeeds to count.
     * @example
     * // Count the number of NewsFeeds
     * const count = await prisma.newsFeed.count({
     *   where: {
     *     // ... the filter for the NewsFeeds we want to count
     *   }
     * })
    **/
    count<T extends NewsFeedCountArgs>(
      args?: Subset<T, NewsFeedCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NewsFeedCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a NewsFeed.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsFeedAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends NewsFeedAggregateArgs>(args: Subset<T, NewsFeedAggregateArgs>): Prisma.PrismaPromise<GetNewsFeedAggregateType<T>>

    /**
     * Group by NewsFeed.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsFeedGroupByArgs} args - Group by arguments.
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
      T extends NewsFeedGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NewsFeedGroupByArgs['orderBy'] }
        : { orderBy?: NewsFeedGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, NewsFeedGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNewsFeedGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the NewsFeed model
   */
  readonly fields: NewsFeedFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for NewsFeed.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NewsFeedClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends NewsFeed$userArgs<ExtArgs> = {}>(args?: Subset<T, NewsFeed$userArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    post<T extends PostsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PostsDefaultArgs<ExtArgs>>): Prisma__PostsClient<$Result.GetResult<Prisma.$PostsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the NewsFeed model
   */
  interface NewsFeedFieldRefs {
    readonly id: FieldRef<"NewsFeed", 'String'>
    readonly userId: FieldRef<"NewsFeed", 'String'>
    readonly postId: FieldRef<"NewsFeed", 'String'>
    readonly reason: FieldRef<"NewsFeed", 'String'>
    readonly score: FieldRef<"NewsFeed", 'Float'>
    readonly isNew: FieldRef<"NewsFeed", 'Boolean'>
    readonly createdAt: FieldRef<"NewsFeed", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * NewsFeed findUnique
   */
  export type NewsFeedFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsFeed
     */
    select?: NewsFeedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsFeed
     */
    omit?: NewsFeedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsFeedInclude<ExtArgs> | null
    /**
     * Filter, which NewsFeed to fetch.
     */
    where: NewsFeedWhereUniqueInput
  }

  /**
   * NewsFeed findUniqueOrThrow
   */
  export type NewsFeedFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsFeed
     */
    select?: NewsFeedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsFeed
     */
    omit?: NewsFeedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsFeedInclude<ExtArgs> | null
    /**
     * Filter, which NewsFeed to fetch.
     */
    where: NewsFeedWhereUniqueInput
  }

  /**
   * NewsFeed findFirst
   */
  export type NewsFeedFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsFeed
     */
    select?: NewsFeedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsFeed
     */
    omit?: NewsFeedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsFeedInclude<ExtArgs> | null
    /**
     * Filter, which NewsFeed to fetch.
     */
    where?: NewsFeedWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NewsFeeds to fetch.
     */
    orderBy?: NewsFeedOrderByWithRelationInput | NewsFeedOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NewsFeeds.
     */
    cursor?: NewsFeedWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NewsFeeds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NewsFeeds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NewsFeeds.
     */
    distinct?: NewsFeedScalarFieldEnum | NewsFeedScalarFieldEnum[]
  }

  /**
   * NewsFeed findFirstOrThrow
   */
  export type NewsFeedFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsFeed
     */
    select?: NewsFeedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsFeed
     */
    omit?: NewsFeedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsFeedInclude<ExtArgs> | null
    /**
     * Filter, which NewsFeed to fetch.
     */
    where?: NewsFeedWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NewsFeeds to fetch.
     */
    orderBy?: NewsFeedOrderByWithRelationInput | NewsFeedOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NewsFeeds.
     */
    cursor?: NewsFeedWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NewsFeeds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NewsFeeds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NewsFeeds.
     */
    distinct?: NewsFeedScalarFieldEnum | NewsFeedScalarFieldEnum[]
  }

  /**
   * NewsFeed findMany
   */
  export type NewsFeedFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsFeed
     */
    select?: NewsFeedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsFeed
     */
    omit?: NewsFeedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsFeedInclude<ExtArgs> | null
    /**
     * Filter, which NewsFeeds to fetch.
     */
    where?: NewsFeedWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NewsFeeds to fetch.
     */
    orderBy?: NewsFeedOrderByWithRelationInput | NewsFeedOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing NewsFeeds.
     */
    cursor?: NewsFeedWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NewsFeeds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NewsFeeds.
     */
    skip?: number
    distinct?: NewsFeedScalarFieldEnum | NewsFeedScalarFieldEnum[]
  }

  /**
   * NewsFeed create
   */
  export type NewsFeedCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsFeed
     */
    select?: NewsFeedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsFeed
     */
    omit?: NewsFeedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsFeedInclude<ExtArgs> | null
    /**
     * The data needed to create a NewsFeed.
     */
    data: XOR<NewsFeedCreateInput, NewsFeedUncheckedCreateInput>
  }

  /**
   * NewsFeed createMany
   */
  export type NewsFeedCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many NewsFeeds.
     */
    data: NewsFeedCreateManyInput | NewsFeedCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * NewsFeed createManyAndReturn
   */
  export type NewsFeedCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsFeed
     */
    select?: NewsFeedSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the NewsFeed
     */
    omit?: NewsFeedOmit<ExtArgs> | null
    /**
     * The data used to create many NewsFeeds.
     */
    data: NewsFeedCreateManyInput | NewsFeedCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsFeedIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * NewsFeed update
   */
  export type NewsFeedUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsFeed
     */
    select?: NewsFeedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsFeed
     */
    omit?: NewsFeedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsFeedInclude<ExtArgs> | null
    /**
     * The data needed to update a NewsFeed.
     */
    data: XOR<NewsFeedUpdateInput, NewsFeedUncheckedUpdateInput>
    /**
     * Choose, which NewsFeed to update.
     */
    where: NewsFeedWhereUniqueInput
  }

  /**
   * NewsFeed updateMany
   */
  export type NewsFeedUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update NewsFeeds.
     */
    data: XOR<NewsFeedUpdateManyMutationInput, NewsFeedUncheckedUpdateManyInput>
    /**
     * Filter which NewsFeeds to update
     */
    where?: NewsFeedWhereInput
    /**
     * Limit how many NewsFeeds to update.
     */
    limit?: number
  }

  /**
   * NewsFeed updateManyAndReturn
   */
  export type NewsFeedUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsFeed
     */
    select?: NewsFeedSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the NewsFeed
     */
    omit?: NewsFeedOmit<ExtArgs> | null
    /**
     * The data used to update NewsFeeds.
     */
    data: XOR<NewsFeedUpdateManyMutationInput, NewsFeedUncheckedUpdateManyInput>
    /**
     * Filter which NewsFeeds to update
     */
    where?: NewsFeedWhereInput
    /**
     * Limit how many NewsFeeds to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsFeedIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * NewsFeed upsert
   */
  export type NewsFeedUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsFeed
     */
    select?: NewsFeedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsFeed
     */
    omit?: NewsFeedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsFeedInclude<ExtArgs> | null
    /**
     * The filter to search for the NewsFeed to update in case it exists.
     */
    where: NewsFeedWhereUniqueInput
    /**
     * In case the NewsFeed found by the `where` argument doesn't exist, create a new NewsFeed with this data.
     */
    create: XOR<NewsFeedCreateInput, NewsFeedUncheckedCreateInput>
    /**
     * In case the NewsFeed was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NewsFeedUpdateInput, NewsFeedUncheckedUpdateInput>
  }

  /**
   * NewsFeed delete
   */
  export type NewsFeedDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsFeed
     */
    select?: NewsFeedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsFeed
     */
    omit?: NewsFeedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsFeedInclude<ExtArgs> | null
    /**
     * Filter which NewsFeed to delete.
     */
    where: NewsFeedWhereUniqueInput
  }

  /**
   * NewsFeed deleteMany
   */
  export type NewsFeedDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which NewsFeeds to delete
     */
    where?: NewsFeedWhereInput
    /**
     * Limit how many NewsFeeds to delete.
     */
    limit?: number
  }

  /**
   * NewsFeed.user
   */
  export type NewsFeed$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    where?: UsersWhereInput
  }

  /**
   * NewsFeed without action
   */
  export type NewsFeedDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsFeed
     */
    select?: NewsFeedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsFeed
     */
    omit?: NewsFeedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsFeedInclude<ExtArgs> | null
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


  export const UsersScalarFieldEnum: {
    id: 'id',
    username: 'username',
    fullname: 'fullname',
    avatarUrl: 'avatarUrl'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


  export const PostsScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    title: 'title',
    content: 'content',
    postType: 'postType',
    visibility: 'visibility',
    censor: 'censor',
    shareCount: 'shareCount',
    likeCount: 'likeCount',
    commentCount: 'commentCount',
    createdAt: 'createdAt',
    expired_at: 'expired_at',
    updatedAt: 'updatedAt'
  };

  export type PostsScalarFieldEnum = (typeof PostsScalarFieldEnum)[keyof typeof PostsScalarFieldEnum]


  export const ViewerScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    postId: 'postId',
    viewedAt: 'viewedAt'
  };

  export type ViewerScalarFieldEnum = (typeof ViewerScalarFieldEnum)[keyof typeof ViewerScalarFieldEnum]


  export const HashtagScalarFieldEnum: {
    id: 'id',
    name: 'name',
    createdAt: 'createdAt'
  };

  export type HashtagScalarFieldEnum = (typeof HashtagScalarFieldEnum)[keyof typeof HashtagScalarFieldEnum]


  export const PostHashtagsScalarFieldEnum: {
    postId: 'postId',
    hashtagId: 'hashtagId'
  };

  export type PostHashtagsScalarFieldEnum = (typeof PostHashtagsScalarFieldEnum)[keyof typeof PostHashtagsScalarFieldEnum]


  export const PostTagFriendScalarFieldEnum: {
    id: 'id',
    postId: 'postId',
    userId: 'userId',
    taggedBy: 'taggedBy',
    createdAt: 'createdAt'
  };

  export type PostTagFriendScalarFieldEnum = (typeof PostTagFriendScalarFieldEnum)[keyof typeof PostTagFriendScalarFieldEnum]


  export const MediaScalarFieldEnum: {
    id: 'id',
    postId: 'postId',
    mediaUrl: 'mediaUrl',
    mediaType: 'mediaType',
    createdAt: 'createdAt'
  };

  export type MediaScalarFieldEnum = (typeof MediaScalarFieldEnum)[keyof typeof MediaScalarFieldEnum]


  export const LikesScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    postId: 'postId',
    createdAt: 'createdAt'
  };

  export type LikesScalarFieldEnum = (typeof LikesScalarFieldEnum)[keyof typeof LikesScalarFieldEnum]


  export const CommentsScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    postId: 'postId',
    parentId: 'parentId',
    content: 'content',
    createdAt: 'createdAt'
  };

  export type CommentsScalarFieldEnum = (typeof CommentsScalarFieldEnum)[keyof typeof CommentsScalarFieldEnum]


  export const SharesScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    postId: 'postId',
    createdAt: 'createdAt'
  };

  export type SharesScalarFieldEnum = (typeof SharesScalarFieldEnum)[keyof typeof SharesScalarFieldEnum]


  export const NewsFeedScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    postId: 'postId',
    reason: 'reason',
    score: 'score',
    isNew: 'isNew',
    createdAt: 'createdAt'
  };

  export type NewsFeedScalarFieldEnum = (typeof NewsFeedScalarFieldEnum)[keyof typeof NewsFeedScalarFieldEnum]


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
   * Reference to a field of type 'PostTypeEnum'
   */
  export type EnumPostTypeEnumFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PostTypeEnum'>
    


  /**
   * Reference to a field of type 'PostTypeEnum[]'
   */
  export type ListEnumPostTypeEnumFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PostTypeEnum[]'>
    


  /**
   * Reference to a field of type 'VisibilityEnum'
   */
  export type EnumVisibilityEnumFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'VisibilityEnum'>
    


  /**
   * Reference to a field of type 'VisibilityEnum[]'
   */
  export type ListEnumVisibilityEnumFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'VisibilityEnum[]'>
    


  /**
   * Reference to a field of type 'CensorEnum'
   */
  export type EnumCensorEnumFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CensorEnum'>
    


  /**
   * Reference to a field of type 'CensorEnum[]'
   */
  export type ListEnumCensorEnumFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CensorEnum[]'>
    


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
   * Reference to a field of type 'MediaTypeEnum'
   */
  export type EnumMediaTypeEnumFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MediaTypeEnum'>
    


  /**
   * Reference to a field of type 'MediaTypeEnum[]'
   */
  export type ListEnumMediaTypeEnumFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MediaTypeEnum[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    
  /**
   * Deep Input Types
   */


  export type UsersWhereInput = {
    AND?: UsersWhereInput | UsersWhereInput[]
    OR?: UsersWhereInput[]
    NOT?: UsersWhereInput | UsersWhereInput[]
    id?: StringFilter<"Users"> | string
    username?: StringFilter<"Users"> | string
    fullname?: StringNullableFilter<"Users"> | string | null
    avatarUrl?: StringNullableFilter<"Users"> | string | null
    posts?: PostsListRelationFilter
    likes?: LikesListRelationFilter
    comments?: CommentsListRelationFilter
    shares?: SharesListRelationFilter
    newsFeed?: NewsFeedListRelationFilter
    taggedInPosts?: PostTagFriendListRelationFilter
    taggedByPosts?: PostTagFriendListRelationFilter
    viewedPosts?: ViewerListRelationFilter
  }

  export type UsersOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    fullname?: SortOrderInput | SortOrder
    avatarUrl?: SortOrderInput | SortOrder
    posts?: PostsOrderByRelationAggregateInput
    likes?: LikesOrderByRelationAggregateInput
    comments?: CommentsOrderByRelationAggregateInput
    shares?: SharesOrderByRelationAggregateInput
    newsFeed?: NewsFeedOrderByRelationAggregateInput
    taggedInPosts?: PostTagFriendOrderByRelationAggregateInput
    taggedByPosts?: PostTagFriendOrderByRelationAggregateInput
    viewedPosts?: ViewerOrderByRelationAggregateInput
  }

  export type UsersWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    username?: string
    AND?: UsersWhereInput | UsersWhereInput[]
    OR?: UsersWhereInput[]
    NOT?: UsersWhereInput | UsersWhereInput[]
    fullname?: StringNullableFilter<"Users"> | string | null
    avatarUrl?: StringNullableFilter<"Users"> | string | null
    posts?: PostsListRelationFilter
    likes?: LikesListRelationFilter
    comments?: CommentsListRelationFilter
    shares?: SharesListRelationFilter
    newsFeed?: NewsFeedListRelationFilter
    taggedInPosts?: PostTagFriendListRelationFilter
    taggedByPosts?: PostTagFriendListRelationFilter
    viewedPosts?: ViewerListRelationFilter
  }, "id" | "username">

  export type UsersOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    fullname?: SortOrderInput | SortOrder
    avatarUrl?: SortOrderInput | SortOrder
    _count?: UsersCountOrderByAggregateInput
    _max?: UsersMaxOrderByAggregateInput
    _min?: UsersMinOrderByAggregateInput
  }

  export type UsersScalarWhereWithAggregatesInput = {
    AND?: UsersScalarWhereWithAggregatesInput | UsersScalarWhereWithAggregatesInput[]
    OR?: UsersScalarWhereWithAggregatesInput[]
    NOT?: UsersScalarWhereWithAggregatesInput | UsersScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Users"> | string
    username?: StringWithAggregatesFilter<"Users"> | string
    fullname?: StringNullableWithAggregatesFilter<"Users"> | string | null
    avatarUrl?: StringNullableWithAggregatesFilter<"Users"> | string | null
  }

  export type PostsWhereInput = {
    AND?: PostsWhereInput | PostsWhereInput[]
    OR?: PostsWhereInput[]
    NOT?: PostsWhereInput | PostsWhereInput[]
    id?: StringFilter<"Posts"> | string
    userId?: StringFilter<"Posts"> | string
    title?: StringNullableFilter<"Posts"> | string | null
    content?: StringNullableFilter<"Posts"> | string | null
    postType?: EnumPostTypeEnumFilter<"Posts"> | $Enums.PostTypeEnum
    visibility?: EnumVisibilityEnumFilter<"Posts"> | $Enums.VisibilityEnum
    censor?: EnumCensorEnumFilter<"Posts"> | $Enums.CensorEnum
    shareCount?: IntFilter<"Posts"> | number
    likeCount?: IntFilter<"Posts"> | number
    commentCount?: IntFilter<"Posts"> | number
    createdAt?: DateTimeFilter<"Posts"> | Date | string
    expired_at?: DateTimeNullableFilter<"Posts"> | Date | string | null
    updatedAt?: DateTimeFilter<"Posts"> | Date | string
    user?: XOR<UsersScalarRelationFilter, UsersWhereInput>
    hashtags?: PostHashtagsListRelationFilter
    taggedFriends?: PostTagFriendListRelationFilter
    media?: MediaListRelationFilter
    likes?: LikesListRelationFilter
    comments?: CommentsListRelationFilter
    shares?: SharesListRelationFilter
    newsFeed?: NewsFeedListRelationFilter
    viewers?: ViewerListRelationFilter
  }

  export type PostsOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrderInput | SortOrder
    content?: SortOrderInput | SortOrder
    postType?: SortOrder
    visibility?: SortOrder
    censor?: SortOrder
    shareCount?: SortOrder
    likeCount?: SortOrder
    commentCount?: SortOrder
    createdAt?: SortOrder
    expired_at?: SortOrderInput | SortOrder
    updatedAt?: SortOrder
    user?: UsersOrderByWithRelationInput
    hashtags?: PostHashtagsOrderByRelationAggregateInput
    taggedFriends?: PostTagFriendOrderByRelationAggregateInput
    media?: MediaOrderByRelationAggregateInput
    likes?: LikesOrderByRelationAggregateInput
    comments?: CommentsOrderByRelationAggregateInput
    shares?: SharesOrderByRelationAggregateInput
    newsFeed?: NewsFeedOrderByRelationAggregateInput
    viewers?: ViewerOrderByRelationAggregateInput
  }

  export type PostsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PostsWhereInput | PostsWhereInput[]
    OR?: PostsWhereInput[]
    NOT?: PostsWhereInput | PostsWhereInput[]
    userId?: StringFilter<"Posts"> | string
    title?: StringNullableFilter<"Posts"> | string | null
    content?: StringNullableFilter<"Posts"> | string | null
    postType?: EnumPostTypeEnumFilter<"Posts"> | $Enums.PostTypeEnum
    visibility?: EnumVisibilityEnumFilter<"Posts"> | $Enums.VisibilityEnum
    censor?: EnumCensorEnumFilter<"Posts"> | $Enums.CensorEnum
    shareCount?: IntFilter<"Posts"> | number
    likeCount?: IntFilter<"Posts"> | number
    commentCount?: IntFilter<"Posts"> | number
    createdAt?: DateTimeFilter<"Posts"> | Date | string
    expired_at?: DateTimeNullableFilter<"Posts"> | Date | string | null
    updatedAt?: DateTimeFilter<"Posts"> | Date | string
    user?: XOR<UsersScalarRelationFilter, UsersWhereInput>
    hashtags?: PostHashtagsListRelationFilter
    taggedFriends?: PostTagFriendListRelationFilter
    media?: MediaListRelationFilter
    likes?: LikesListRelationFilter
    comments?: CommentsListRelationFilter
    shares?: SharesListRelationFilter
    newsFeed?: NewsFeedListRelationFilter
    viewers?: ViewerListRelationFilter
  }, "id">

  export type PostsOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrderInput | SortOrder
    content?: SortOrderInput | SortOrder
    postType?: SortOrder
    visibility?: SortOrder
    censor?: SortOrder
    shareCount?: SortOrder
    likeCount?: SortOrder
    commentCount?: SortOrder
    createdAt?: SortOrder
    expired_at?: SortOrderInput | SortOrder
    updatedAt?: SortOrder
    _count?: PostsCountOrderByAggregateInput
    _avg?: PostsAvgOrderByAggregateInput
    _max?: PostsMaxOrderByAggregateInput
    _min?: PostsMinOrderByAggregateInput
    _sum?: PostsSumOrderByAggregateInput
  }

  export type PostsScalarWhereWithAggregatesInput = {
    AND?: PostsScalarWhereWithAggregatesInput | PostsScalarWhereWithAggregatesInput[]
    OR?: PostsScalarWhereWithAggregatesInput[]
    NOT?: PostsScalarWhereWithAggregatesInput | PostsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Posts"> | string
    userId?: StringWithAggregatesFilter<"Posts"> | string
    title?: StringNullableWithAggregatesFilter<"Posts"> | string | null
    content?: StringNullableWithAggregatesFilter<"Posts"> | string | null
    postType?: EnumPostTypeEnumWithAggregatesFilter<"Posts"> | $Enums.PostTypeEnum
    visibility?: EnumVisibilityEnumWithAggregatesFilter<"Posts"> | $Enums.VisibilityEnum
    censor?: EnumCensorEnumWithAggregatesFilter<"Posts"> | $Enums.CensorEnum
    shareCount?: IntWithAggregatesFilter<"Posts"> | number
    likeCount?: IntWithAggregatesFilter<"Posts"> | number
    commentCount?: IntWithAggregatesFilter<"Posts"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Posts"> | Date | string
    expired_at?: DateTimeNullableWithAggregatesFilter<"Posts"> | Date | string | null
    updatedAt?: DateTimeWithAggregatesFilter<"Posts"> | Date | string
  }

  export type ViewerWhereInput = {
    AND?: ViewerWhereInput | ViewerWhereInput[]
    OR?: ViewerWhereInput[]
    NOT?: ViewerWhereInput | ViewerWhereInput[]
    id?: IntFilter<"Viewer"> | number
    userId?: StringFilter<"Viewer"> | string
    postId?: StringFilter<"Viewer"> | string
    viewedAt?: DateTimeFilter<"Viewer"> | Date | string
    user?: XOR<UsersScalarRelationFilter, UsersWhereInput>
    post?: XOR<PostsScalarRelationFilter, PostsWhereInput>
  }

  export type ViewerOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    postId?: SortOrder
    viewedAt?: SortOrder
    user?: UsersOrderByWithRelationInput
    post?: PostsOrderByWithRelationInput
  }

  export type ViewerWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    userId_postId?: ViewerUserIdPostIdCompoundUniqueInput
    AND?: ViewerWhereInput | ViewerWhereInput[]
    OR?: ViewerWhereInput[]
    NOT?: ViewerWhereInput | ViewerWhereInput[]
    userId?: StringFilter<"Viewer"> | string
    postId?: StringFilter<"Viewer"> | string
    viewedAt?: DateTimeFilter<"Viewer"> | Date | string
    user?: XOR<UsersScalarRelationFilter, UsersWhereInput>
    post?: XOR<PostsScalarRelationFilter, PostsWhereInput>
  }, "id" | "userId_postId">

  export type ViewerOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    postId?: SortOrder
    viewedAt?: SortOrder
    _count?: ViewerCountOrderByAggregateInput
    _avg?: ViewerAvgOrderByAggregateInput
    _max?: ViewerMaxOrderByAggregateInput
    _min?: ViewerMinOrderByAggregateInput
    _sum?: ViewerSumOrderByAggregateInput
  }

  export type ViewerScalarWhereWithAggregatesInput = {
    AND?: ViewerScalarWhereWithAggregatesInput | ViewerScalarWhereWithAggregatesInput[]
    OR?: ViewerScalarWhereWithAggregatesInput[]
    NOT?: ViewerScalarWhereWithAggregatesInput | ViewerScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Viewer"> | number
    userId?: StringWithAggregatesFilter<"Viewer"> | string
    postId?: StringWithAggregatesFilter<"Viewer"> | string
    viewedAt?: DateTimeWithAggregatesFilter<"Viewer"> | Date | string
  }

  export type HashtagWhereInput = {
    AND?: HashtagWhereInput | HashtagWhereInput[]
    OR?: HashtagWhereInput[]
    NOT?: HashtagWhereInput | HashtagWhereInput[]
    id?: StringFilter<"Hashtag"> | string
    name?: StringFilter<"Hashtag"> | string
    createdAt?: DateTimeFilter<"Hashtag"> | Date | string
    posts?: PostHashtagsListRelationFilter
  }

  export type HashtagOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    posts?: PostHashtagsOrderByRelationAggregateInput
  }

  export type HashtagWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: HashtagWhereInput | HashtagWhereInput[]
    OR?: HashtagWhereInput[]
    NOT?: HashtagWhereInput | HashtagWhereInput[]
    createdAt?: DateTimeFilter<"Hashtag"> | Date | string
    posts?: PostHashtagsListRelationFilter
  }, "id" | "name">

  export type HashtagOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    _count?: HashtagCountOrderByAggregateInput
    _max?: HashtagMaxOrderByAggregateInput
    _min?: HashtagMinOrderByAggregateInput
  }

  export type HashtagScalarWhereWithAggregatesInput = {
    AND?: HashtagScalarWhereWithAggregatesInput | HashtagScalarWhereWithAggregatesInput[]
    OR?: HashtagScalarWhereWithAggregatesInput[]
    NOT?: HashtagScalarWhereWithAggregatesInput | HashtagScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Hashtag"> | string
    name?: StringWithAggregatesFilter<"Hashtag"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Hashtag"> | Date | string
  }

  export type PostHashtagsWhereInput = {
    AND?: PostHashtagsWhereInput | PostHashtagsWhereInput[]
    OR?: PostHashtagsWhereInput[]
    NOT?: PostHashtagsWhereInput | PostHashtagsWhereInput[]
    postId?: StringFilter<"PostHashtags"> | string
    hashtagId?: StringFilter<"PostHashtags"> | string
    post?: XOR<PostsScalarRelationFilter, PostsWhereInput>
    hashtag?: XOR<HashtagScalarRelationFilter, HashtagWhereInput>
  }

  export type PostHashtagsOrderByWithRelationInput = {
    postId?: SortOrder
    hashtagId?: SortOrder
    post?: PostsOrderByWithRelationInput
    hashtag?: HashtagOrderByWithRelationInput
  }

  export type PostHashtagsWhereUniqueInput = Prisma.AtLeast<{
    postId_hashtagId?: PostHashtagsPostIdHashtagIdCompoundUniqueInput
    AND?: PostHashtagsWhereInput | PostHashtagsWhereInput[]
    OR?: PostHashtagsWhereInput[]
    NOT?: PostHashtagsWhereInput | PostHashtagsWhereInput[]
    postId?: StringFilter<"PostHashtags"> | string
    hashtagId?: StringFilter<"PostHashtags"> | string
    post?: XOR<PostsScalarRelationFilter, PostsWhereInput>
    hashtag?: XOR<HashtagScalarRelationFilter, HashtagWhereInput>
  }, "postId_hashtagId">

  export type PostHashtagsOrderByWithAggregationInput = {
    postId?: SortOrder
    hashtagId?: SortOrder
    _count?: PostHashtagsCountOrderByAggregateInput
    _max?: PostHashtagsMaxOrderByAggregateInput
    _min?: PostHashtagsMinOrderByAggregateInput
  }

  export type PostHashtagsScalarWhereWithAggregatesInput = {
    AND?: PostHashtagsScalarWhereWithAggregatesInput | PostHashtagsScalarWhereWithAggregatesInput[]
    OR?: PostHashtagsScalarWhereWithAggregatesInput[]
    NOT?: PostHashtagsScalarWhereWithAggregatesInput | PostHashtagsScalarWhereWithAggregatesInput[]
    postId?: StringWithAggregatesFilter<"PostHashtags"> | string
    hashtagId?: StringWithAggregatesFilter<"PostHashtags"> | string
  }

  export type PostTagFriendWhereInput = {
    AND?: PostTagFriendWhereInput | PostTagFriendWhereInput[]
    OR?: PostTagFriendWhereInput[]
    NOT?: PostTagFriendWhereInput | PostTagFriendWhereInput[]
    id?: StringFilter<"PostTagFriend"> | string
    postId?: StringFilter<"PostTagFriend"> | string
    userId?: StringFilter<"PostTagFriend"> | string
    taggedBy?: StringFilter<"PostTagFriend"> | string
    createdAt?: DateTimeFilter<"PostTagFriend"> | Date | string
    post?: XOR<PostsScalarRelationFilter, PostsWhereInput>
    user?: XOR<UsersScalarRelationFilter, UsersWhereInput>
    taggedByUser?: XOR<UsersScalarRelationFilter, UsersWhereInput>
  }

  export type PostTagFriendOrderByWithRelationInput = {
    id?: SortOrder
    postId?: SortOrder
    userId?: SortOrder
    taggedBy?: SortOrder
    createdAt?: SortOrder
    post?: PostsOrderByWithRelationInput
    user?: UsersOrderByWithRelationInput
    taggedByUser?: UsersOrderByWithRelationInput
  }

  export type PostTagFriendWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PostTagFriendWhereInput | PostTagFriendWhereInput[]
    OR?: PostTagFriendWhereInput[]
    NOT?: PostTagFriendWhereInput | PostTagFriendWhereInput[]
    postId?: StringFilter<"PostTagFriend"> | string
    userId?: StringFilter<"PostTagFriend"> | string
    taggedBy?: StringFilter<"PostTagFriend"> | string
    createdAt?: DateTimeFilter<"PostTagFriend"> | Date | string
    post?: XOR<PostsScalarRelationFilter, PostsWhereInput>
    user?: XOR<UsersScalarRelationFilter, UsersWhereInput>
    taggedByUser?: XOR<UsersScalarRelationFilter, UsersWhereInput>
  }, "id">

  export type PostTagFriendOrderByWithAggregationInput = {
    id?: SortOrder
    postId?: SortOrder
    userId?: SortOrder
    taggedBy?: SortOrder
    createdAt?: SortOrder
    _count?: PostTagFriendCountOrderByAggregateInput
    _max?: PostTagFriendMaxOrderByAggregateInput
    _min?: PostTagFriendMinOrderByAggregateInput
  }

  export type PostTagFriendScalarWhereWithAggregatesInput = {
    AND?: PostTagFriendScalarWhereWithAggregatesInput | PostTagFriendScalarWhereWithAggregatesInput[]
    OR?: PostTagFriendScalarWhereWithAggregatesInput[]
    NOT?: PostTagFriendScalarWhereWithAggregatesInput | PostTagFriendScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PostTagFriend"> | string
    postId?: StringWithAggregatesFilter<"PostTagFriend"> | string
    userId?: StringWithAggregatesFilter<"PostTagFriend"> | string
    taggedBy?: StringWithAggregatesFilter<"PostTagFriend"> | string
    createdAt?: DateTimeWithAggregatesFilter<"PostTagFriend"> | Date | string
  }

  export type MediaWhereInput = {
    AND?: MediaWhereInput | MediaWhereInput[]
    OR?: MediaWhereInput[]
    NOT?: MediaWhereInput | MediaWhereInput[]
    id?: StringFilter<"Media"> | string
    postId?: StringFilter<"Media"> | string
    mediaUrl?: StringFilter<"Media"> | string
    mediaType?: EnumMediaTypeEnumFilter<"Media"> | $Enums.MediaTypeEnum
    createdAt?: DateTimeFilter<"Media"> | Date | string
    post?: XOR<PostsScalarRelationFilter, PostsWhereInput>
  }

  export type MediaOrderByWithRelationInput = {
    id?: SortOrder
    postId?: SortOrder
    mediaUrl?: SortOrder
    mediaType?: SortOrder
    createdAt?: SortOrder
    post?: PostsOrderByWithRelationInput
  }

  export type MediaWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MediaWhereInput | MediaWhereInput[]
    OR?: MediaWhereInput[]
    NOT?: MediaWhereInput | MediaWhereInput[]
    postId?: StringFilter<"Media"> | string
    mediaUrl?: StringFilter<"Media"> | string
    mediaType?: EnumMediaTypeEnumFilter<"Media"> | $Enums.MediaTypeEnum
    createdAt?: DateTimeFilter<"Media"> | Date | string
    post?: XOR<PostsScalarRelationFilter, PostsWhereInput>
  }, "id">

  export type MediaOrderByWithAggregationInput = {
    id?: SortOrder
    postId?: SortOrder
    mediaUrl?: SortOrder
    mediaType?: SortOrder
    createdAt?: SortOrder
    _count?: MediaCountOrderByAggregateInput
    _max?: MediaMaxOrderByAggregateInput
    _min?: MediaMinOrderByAggregateInput
  }

  export type MediaScalarWhereWithAggregatesInput = {
    AND?: MediaScalarWhereWithAggregatesInput | MediaScalarWhereWithAggregatesInput[]
    OR?: MediaScalarWhereWithAggregatesInput[]
    NOT?: MediaScalarWhereWithAggregatesInput | MediaScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Media"> | string
    postId?: StringWithAggregatesFilter<"Media"> | string
    mediaUrl?: StringWithAggregatesFilter<"Media"> | string
    mediaType?: EnumMediaTypeEnumWithAggregatesFilter<"Media"> | $Enums.MediaTypeEnum
    createdAt?: DateTimeWithAggregatesFilter<"Media"> | Date | string
  }

  export type LikesWhereInput = {
    AND?: LikesWhereInput | LikesWhereInput[]
    OR?: LikesWhereInput[]
    NOT?: LikesWhereInput | LikesWhereInput[]
    id?: StringFilter<"Likes"> | string
    userId?: StringNullableFilter<"Likes"> | string | null
    postId?: StringFilter<"Likes"> | string
    createdAt?: DateTimeFilter<"Likes"> | Date | string
    user?: XOR<UsersNullableScalarRelationFilter, UsersWhereInput> | null
    post?: XOR<PostsScalarRelationFilter, PostsWhereInput>
  }

  export type LikesOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrderInput | SortOrder
    postId?: SortOrder
    createdAt?: SortOrder
    user?: UsersOrderByWithRelationInput
    post?: PostsOrderByWithRelationInput
  }

  export type LikesWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_postId?: LikesUserIdPostIdCompoundUniqueInput
    AND?: LikesWhereInput | LikesWhereInput[]
    OR?: LikesWhereInput[]
    NOT?: LikesWhereInput | LikesWhereInput[]
    userId?: StringNullableFilter<"Likes"> | string | null
    postId?: StringFilter<"Likes"> | string
    createdAt?: DateTimeFilter<"Likes"> | Date | string
    user?: XOR<UsersNullableScalarRelationFilter, UsersWhereInput> | null
    post?: XOR<PostsScalarRelationFilter, PostsWhereInput>
  }, "id" | "userId_postId">

  export type LikesOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrderInput | SortOrder
    postId?: SortOrder
    createdAt?: SortOrder
    _count?: LikesCountOrderByAggregateInput
    _max?: LikesMaxOrderByAggregateInput
    _min?: LikesMinOrderByAggregateInput
  }

  export type LikesScalarWhereWithAggregatesInput = {
    AND?: LikesScalarWhereWithAggregatesInput | LikesScalarWhereWithAggregatesInput[]
    OR?: LikesScalarWhereWithAggregatesInput[]
    NOT?: LikesScalarWhereWithAggregatesInput | LikesScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Likes"> | string
    userId?: StringNullableWithAggregatesFilter<"Likes"> | string | null
    postId?: StringWithAggregatesFilter<"Likes"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Likes"> | Date | string
  }

  export type CommentsWhereInput = {
    AND?: CommentsWhereInput | CommentsWhereInput[]
    OR?: CommentsWhereInput[]
    NOT?: CommentsWhereInput | CommentsWhereInput[]
    id?: StringFilter<"Comments"> | string
    userId?: StringNullableFilter<"Comments"> | string | null
    postId?: StringFilter<"Comments"> | string
    parentId?: StringNullableFilter<"Comments"> | string | null
    content?: StringFilter<"Comments"> | string
    createdAt?: DateTimeFilter<"Comments"> | Date | string
    user?: XOR<UsersNullableScalarRelationFilter, UsersWhereInput> | null
    post?: XOR<PostsScalarRelationFilter, PostsWhereInput>
    parent?: XOR<CommentsNullableScalarRelationFilter, CommentsWhereInput> | null
    replies?: CommentsListRelationFilter
  }

  export type CommentsOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrderInput | SortOrder
    postId?: SortOrder
    parentId?: SortOrderInput | SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    user?: UsersOrderByWithRelationInput
    post?: PostsOrderByWithRelationInput
    parent?: CommentsOrderByWithRelationInput
    replies?: CommentsOrderByRelationAggregateInput
  }

  export type CommentsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CommentsWhereInput | CommentsWhereInput[]
    OR?: CommentsWhereInput[]
    NOT?: CommentsWhereInput | CommentsWhereInput[]
    userId?: StringNullableFilter<"Comments"> | string | null
    postId?: StringFilter<"Comments"> | string
    parentId?: StringNullableFilter<"Comments"> | string | null
    content?: StringFilter<"Comments"> | string
    createdAt?: DateTimeFilter<"Comments"> | Date | string
    user?: XOR<UsersNullableScalarRelationFilter, UsersWhereInput> | null
    post?: XOR<PostsScalarRelationFilter, PostsWhereInput>
    parent?: XOR<CommentsNullableScalarRelationFilter, CommentsWhereInput> | null
    replies?: CommentsListRelationFilter
  }, "id">

  export type CommentsOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrderInput | SortOrder
    postId?: SortOrder
    parentId?: SortOrderInput | SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    _count?: CommentsCountOrderByAggregateInput
    _max?: CommentsMaxOrderByAggregateInput
    _min?: CommentsMinOrderByAggregateInput
  }

  export type CommentsScalarWhereWithAggregatesInput = {
    AND?: CommentsScalarWhereWithAggregatesInput | CommentsScalarWhereWithAggregatesInput[]
    OR?: CommentsScalarWhereWithAggregatesInput[]
    NOT?: CommentsScalarWhereWithAggregatesInput | CommentsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Comments"> | string
    userId?: StringNullableWithAggregatesFilter<"Comments"> | string | null
    postId?: StringWithAggregatesFilter<"Comments"> | string
    parentId?: StringNullableWithAggregatesFilter<"Comments"> | string | null
    content?: StringWithAggregatesFilter<"Comments"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Comments"> | Date | string
  }

  export type SharesWhereInput = {
    AND?: SharesWhereInput | SharesWhereInput[]
    OR?: SharesWhereInput[]
    NOT?: SharesWhereInput | SharesWhereInput[]
    id?: StringFilter<"Shares"> | string
    userId?: StringNullableFilter<"Shares"> | string | null
    postId?: StringFilter<"Shares"> | string
    createdAt?: DateTimeFilter<"Shares"> | Date | string
    user?: XOR<UsersNullableScalarRelationFilter, UsersWhereInput> | null
    post?: XOR<PostsScalarRelationFilter, PostsWhereInput>
  }

  export type SharesOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrderInput | SortOrder
    postId?: SortOrder
    createdAt?: SortOrder
    user?: UsersOrderByWithRelationInput
    post?: PostsOrderByWithRelationInput
  }

  export type SharesWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SharesWhereInput | SharesWhereInput[]
    OR?: SharesWhereInput[]
    NOT?: SharesWhereInput | SharesWhereInput[]
    userId?: StringNullableFilter<"Shares"> | string | null
    postId?: StringFilter<"Shares"> | string
    createdAt?: DateTimeFilter<"Shares"> | Date | string
    user?: XOR<UsersNullableScalarRelationFilter, UsersWhereInput> | null
    post?: XOR<PostsScalarRelationFilter, PostsWhereInput>
  }, "id">

  export type SharesOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrderInput | SortOrder
    postId?: SortOrder
    createdAt?: SortOrder
    _count?: SharesCountOrderByAggregateInput
    _max?: SharesMaxOrderByAggregateInput
    _min?: SharesMinOrderByAggregateInput
  }

  export type SharesScalarWhereWithAggregatesInput = {
    AND?: SharesScalarWhereWithAggregatesInput | SharesScalarWhereWithAggregatesInput[]
    OR?: SharesScalarWhereWithAggregatesInput[]
    NOT?: SharesScalarWhereWithAggregatesInput | SharesScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Shares"> | string
    userId?: StringNullableWithAggregatesFilter<"Shares"> | string | null
    postId?: StringWithAggregatesFilter<"Shares"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Shares"> | Date | string
  }

  export type NewsFeedWhereInput = {
    AND?: NewsFeedWhereInput | NewsFeedWhereInput[]
    OR?: NewsFeedWhereInput[]
    NOT?: NewsFeedWhereInput | NewsFeedWhereInput[]
    id?: StringFilter<"NewsFeed"> | string
    userId?: StringNullableFilter<"NewsFeed"> | string | null
    postId?: StringFilter<"NewsFeed"> | string
    reason?: StringNullableFilter<"NewsFeed"> | string | null
    score?: FloatFilter<"NewsFeed"> | number
    isNew?: BoolNullableFilter<"NewsFeed"> | boolean | null
    createdAt?: DateTimeFilter<"NewsFeed"> | Date | string
    user?: XOR<UsersNullableScalarRelationFilter, UsersWhereInput> | null
    post?: XOR<PostsScalarRelationFilter, PostsWhereInput>
  }

  export type NewsFeedOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrderInput | SortOrder
    postId?: SortOrder
    reason?: SortOrderInput | SortOrder
    score?: SortOrder
    isNew?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    user?: UsersOrderByWithRelationInput
    post?: PostsOrderByWithRelationInput
  }

  export type NewsFeedWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: NewsFeedWhereInput | NewsFeedWhereInput[]
    OR?: NewsFeedWhereInput[]
    NOT?: NewsFeedWhereInput | NewsFeedWhereInput[]
    userId?: StringNullableFilter<"NewsFeed"> | string | null
    postId?: StringFilter<"NewsFeed"> | string
    reason?: StringNullableFilter<"NewsFeed"> | string | null
    score?: FloatFilter<"NewsFeed"> | number
    isNew?: BoolNullableFilter<"NewsFeed"> | boolean | null
    createdAt?: DateTimeFilter<"NewsFeed"> | Date | string
    user?: XOR<UsersNullableScalarRelationFilter, UsersWhereInput> | null
    post?: XOR<PostsScalarRelationFilter, PostsWhereInput>
  }, "id">

  export type NewsFeedOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrderInput | SortOrder
    postId?: SortOrder
    reason?: SortOrderInput | SortOrder
    score?: SortOrder
    isNew?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: NewsFeedCountOrderByAggregateInput
    _avg?: NewsFeedAvgOrderByAggregateInput
    _max?: NewsFeedMaxOrderByAggregateInput
    _min?: NewsFeedMinOrderByAggregateInput
    _sum?: NewsFeedSumOrderByAggregateInput
  }

  export type NewsFeedScalarWhereWithAggregatesInput = {
    AND?: NewsFeedScalarWhereWithAggregatesInput | NewsFeedScalarWhereWithAggregatesInput[]
    OR?: NewsFeedScalarWhereWithAggregatesInput[]
    NOT?: NewsFeedScalarWhereWithAggregatesInput | NewsFeedScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"NewsFeed"> | string
    userId?: StringNullableWithAggregatesFilter<"NewsFeed"> | string | null
    postId?: StringWithAggregatesFilter<"NewsFeed"> | string
    reason?: StringNullableWithAggregatesFilter<"NewsFeed"> | string | null
    score?: FloatWithAggregatesFilter<"NewsFeed"> | number
    isNew?: BoolNullableWithAggregatesFilter<"NewsFeed"> | boolean | null
    createdAt?: DateTimeWithAggregatesFilter<"NewsFeed"> | Date | string
  }

  export type UsersCreateInput = {
    id?: string
    username: string
    fullname?: string | null
    avatarUrl?: string | null
    posts?: PostsCreateNestedManyWithoutUserInput
    likes?: LikesCreateNestedManyWithoutUserInput
    comments?: CommentsCreateNestedManyWithoutUserInput
    shares?: SharesCreateNestedManyWithoutUserInput
    newsFeed?: NewsFeedCreateNestedManyWithoutUserInput
    taggedInPosts?: PostTagFriendCreateNestedManyWithoutUserInput
    taggedByPosts?: PostTagFriendCreateNestedManyWithoutTaggedByUserInput
    viewedPosts?: ViewerCreateNestedManyWithoutUserInput
  }

  export type UsersUncheckedCreateInput = {
    id?: string
    username: string
    fullname?: string | null
    avatarUrl?: string | null
    posts?: PostsUncheckedCreateNestedManyWithoutUserInput
    likes?: LikesUncheckedCreateNestedManyWithoutUserInput
    comments?: CommentsUncheckedCreateNestedManyWithoutUserInput
    shares?: SharesUncheckedCreateNestedManyWithoutUserInput
    newsFeed?: NewsFeedUncheckedCreateNestedManyWithoutUserInput
    taggedInPosts?: PostTagFriendUncheckedCreateNestedManyWithoutUserInput
    taggedByPosts?: PostTagFriendUncheckedCreateNestedManyWithoutTaggedByUserInput
    viewedPosts?: ViewerUncheckedCreateNestedManyWithoutUserInput
  }

  export type UsersUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    fullname?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    posts?: PostsUpdateManyWithoutUserNestedInput
    likes?: LikesUpdateManyWithoutUserNestedInput
    comments?: CommentsUpdateManyWithoutUserNestedInput
    shares?: SharesUpdateManyWithoutUserNestedInput
    newsFeed?: NewsFeedUpdateManyWithoutUserNestedInput
    taggedInPosts?: PostTagFriendUpdateManyWithoutUserNestedInput
    taggedByPosts?: PostTagFriendUpdateManyWithoutTaggedByUserNestedInput
    viewedPosts?: ViewerUpdateManyWithoutUserNestedInput
  }

  export type UsersUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    fullname?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    posts?: PostsUncheckedUpdateManyWithoutUserNestedInput
    likes?: LikesUncheckedUpdateManyWithoutUserNestedInput
    comments?: CommentsUncheckedUpdateManyWithoutUserNestedInput
    shares?: SharesUncheckedUpdateManyWithoutUserNestedInput
    newsFeed?: NewsFeedUncheckedUpdateManyWithoutUserNestedInput
    taggedInPosts?: PostTagFriendUncheckedUpdateManyWithoutUserNestedInput
    taggedByPosts?: PostTagFriendUncheckedUpdateManyWithoutTaggedByUserNestedInput
    viewedPosts?: ViewerUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UsersCreateManyInput = {
    id?: string
    username: string
    fullname?: string | null
    avatarUrl?: string | null
  }

  export type UsersUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    fullname?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UsersUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    fullname?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PostsCreateInput = {
    id?: string
    title?: string | null
    content?: string | null
    postType?: $Enums.PostTypeEnum
    visibility?: $Enums.VisibilityEnum
    censor?: $Enums.CensorEnum
    shareCount?: number
    likeCount?: number
    commentCount?: number
    createdAt?: Date | string
    expired_at?: Date | string | null
    updatedAt?: Date | string
    user: UsersCreateNestedOneWithoutPostsInput
    hashtags?: PostHashtagsCreateNestedManyWithoutPostInput
    taggedFriends?: PostTagFriendCreateNestedManyWithoutPostInput
    media?: MediaCreateNestedManyWithoutPostInput
    likes?: LikesCreateNestedManyWithoutPostInput
    comments?: CommentsCreateNestedManyWithoutPostInput
    shares?: SharesCreateNestedManyWithoutPostInput
    newsFeed?: NewsFeedCreateNestedManyWithoutPostInput
    viewers?: ViewerCreateNestedManyWithoutPostInput
  }

  export type PostsUncheckedCreateInput = {
    id?: string
    userId: string
    title?: string | null
    content?: string | null
    postType?: $Enums.PostTypeEnum
    visibility?: $Enums.VisibilityEnum
    censor?: $Enums.CensorEnum
    shareCount?: number
    likeCount?: number
    commentCount?: number
    createdAt?: Date | string
    expired_at?: Date | string | null
    updatedAt?: Date | string
    hashtags?: PostHashtagsUncheckedCreateNestedManyWithoutPostInput
    taggedFriends?: PostTagFriendUncheckedCreateNestedManyWithoutPostInput
    media?: MediaUncheckedCreateNestedManyWithoutPostInput
    likes?: LikesUncheckedCreateNestedManyWithoutPostInput
    comments?: CommentsUncheckedCreateNestedManyWithoutPostInput
    shares?: SharesUncheckedCreateNestedManyWithoutPostInput
    newsFeed?: NewsFeedUncheckedCreateNestedManyWithoutPostInput
    viewers?: ViewerUncheckedCreateNestedManyWithoutPostInput
  }

  export type PostsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    postType?: EnumPostTypeEnumFieldUpdateOperationsInput | $Enums.PostTypeEnum
    visibility?: EnumVisibilityEnumFieldUpdateOperationsInput | $Enums.VisibilityEnum
    censor?: EnumCensorEnumFieldUpdateOperationsInput | $Enums.CensorEnum
    shareCount?: IntFieldUpdateOperationsInput | number
    likeCount?: IntFieldUpdateOperationsInput | number
    commentCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expired_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UsersUpdateOneRequiredWithoutPostsNestedInput
    hashtags?: PostHashtagsUpdateManyWithoutPostNestedInput
    taggedFriends?: PostTagFriendUpdateManyWithoutPostNestedInput
    media?: MediaUpdateManyWithoutPostNestedInput
    likes?: LikesUpdateManyWithoutPostNestedInput
    comments?: CommentsUpdateManyWithoutPostNestedInput
    shares?: SharesUpdateManyWithoutPostNestedInput
    newsFeed?: NewsFeedUpdateManyWithoutPostNestedInput
    viewers?: ViewerUpdateManyWithoutPostNestedInput
  }

  export type PostsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    postType?: EnumPostTypeEnumFieldUpdateOperationsInput | $Enums.PostTypeEnum
    visibility?: EnumVisibilityEnumFieldUpdateOperationsInput | $Enums.VisibilityEnum
    censor?: EnumCensorEnumFieldUpdateOperationsInput | $Enums.CensorEnum
    shareCount?: IntFieldUpdateOperationsInput | number
    likeCount?: IntFieldUpdateOperationsInput | number
    commentCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expired_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    hashtags?: PostHashtagsUncheckedUpdateManyWithoutPostNestedInput
    taggedFriends?: PostTagFriendUncheckedUpdateManyWithoutPostNestedInput
    media?: MediaUncheckedUpdateManyWithoutPostNestedInput
    likes?: LikesUncheckedUpdateManyWithoutPostNestedInput
    comments?: CommentsUncheckedUpdateManyWithoutPostNestedInput
    shares?: SharesUncheckedUpdateManyWithoutPostNestedInput
    newsFeed?: NewsFeedUncheckedUpdateManyWithoutPostNestedInput
    viewers?: ViewerUncheckedUpdateManyWithoutPostNestedInput
  }

  export type PostsCreateManyInput = {
    id?: string
    userId: string
    title?: string | null
    content?: string | null
    postType?: $Enums.PostTypeEnum
    visibility?: $Enums.VisibilityEnum
    censor?: $Enums.CensorEnum
    shareCount?: number
    likeCount?: number
    commentCount?: number
    createdAt?: Date | string
    expired_at?: Date | string | null
    updatedAt?: Date | string
  }

  export type PostsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    postType?: EnumPostTypeEnumFieldUpdateOperationsInput | $Enums.PostTypeEnum
    visibility?: EnumVisibilityEnumFieldUpdateOperationsInput | $Enums.VisibilityEnum
    censor?: EnumCensorEnumFieldUpdateOperationsInput | $Enums.CensorEnum
    shareCount?: IntFieldUpdateOperationsInput | number
    likeCount?: IntFieldUpdateOperationsInput | number
    commentCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expired_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    postType?: EnumPostTypeEnumFieldUpdateOperationsInput | $Enums.PostTypeEnum
    visibility?: EnumVisibilityEnumFieldUpdateOperationsInput | $Enums.VisibilityEnum
    censor?: EnumCensorEnumFieldUpdateOperationsInput | $Enums.CensorEnum
    shareCount?: IntFieldUpdateOperationsInput | number
    likeCount?: IntFieldUpdateOperationsInput | number
    commentCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expired_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ViewerCreateInput = {
    viewedAt?: Date | string
    user: UsersCreateNestedOneWithoutViewedPostsInput
    post: PostsCreateNestedOneWithoutViewersInput
  }

  export type ViewerUncheckedCreateInput = {
    id?: number
    userId: string
    postId: string
    viewedAt?: Date | string
  }

  export type ViewerUpdateInput = {
    viewedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UsersUpdateOneRequiredWithoutViewedPostsNestedInput
    post?: PostsUpdateOneRequiredWithoutViewersNestedInput
  }

  export type ViewerUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    postId?: StringFieldUpdateOperationsInput | string
    viewedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ViewerCreateManyInput = {
    id?: number
    userId: string
    postId: string
    viewedAt?: Date | string
  }

  export type ViewerUpdateManyMutationInput = {
    viewedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ViewerUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    postId?: StringFieldUpdateOperationsInput | string
    viewedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HashtagCreateInput = {
    id?: string
    name: string
    createdAt?: Date | string
    posts?: PostHashtagsCreateNestedManyWithoutHashtagInput
  }

  export type HashtagUncheckedCreateInput = {
    id?: string
    name: string
    createdAt?: Date | string
    posts?: PostHashtagsUncheckedCreateNestedManyWithoutHashtagInput
  }

  export type HashtagUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    posts?: PostHashtagsUpdateManyWithoutHashtagNestedInput
  }

  export type HashtagUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    posts?: PostHashtagsUncheckedUpdateManyWithoutHashtagNestedInput
  }

  export type HashtagCreateManyInput = {
    id?: string
    name: string
    createdAt?: Date | string
  }

  export type HashtagUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HashtagUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostHashtagsCreateInput = {
    post: PostsCreateNestedOneWithoutHashtagsInput
    hashtag: HashtagCreateNestedOneWithoutPostsInput
  }

  export type PostHashtagsUncheckedCreateInput = {
    postId: string
    hashtagId: string
  }

  export type PostHashtagsUpdateInput = {
    post?: PostsUpdateOneRequiredWithoutHashtagsNestedInput
    hashtag?: HashtagUpdateOneRequiredWithoutPostsNestedInput
  }

  export type PostHashtagsUncheckedUpdateInput = {
    postId?: StringFieldUpdateOperationsInput | string
    hashtagId?: StringFieldUpdateOperationsInput | string
  }

  export type PostHashtagsCreateManyInput = {
    postId: string
    hashtagId: string
  }

  export type PostHashtagsUpdateManyMutationInput = {

  }

  export type PostHashtagsUncheckedUpdateManyInput = {
    postId?: StringFieldUpdateOperationsInput | string
    hashtagId?: StringFieldUpdateOperationsInput | string
  }

  export type PostTagFriendCreateInput = {
    id?: string
    createdAt?: Date | string
    post: PostsCreateNestedOneWithoutTaggedFriendsInput
    user: UsersCreateNestedOneWithoutTaggedInPostsInput
    taggedByUser: UsersCreateNestedOneWithoutTaggedByPostsInput
  }

  export type PostTagFriendUncheckedCreateInput = {
    id?: string
    postId: string
    userId: string
    taggedBy: string
    createdAt?: Date | string
  }

  export type PostTagFriendUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    post?: PostsUpdateOneRequiredWithoutTaggedFriendsNestedInput
    user?: UsersUpdateOneRequiredWithoutTaggedInPostsNestedInput
    taggedByUser?: UsersUpdateOneRequiredWithoutTaggedByPostsNestedInput
  }

  export type PostTagFriendUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    postId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    taggedBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostTagFriendCreateManyInput = {
    id?: string
    postId: string
    userId: string
    taggedBy: string
    createdAt?: Date | string
  }

  export type PostTagFriendUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostTagFriendUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    postId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    taggedBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MediaCreateInput = {
    id?: string
    mediaUrl: string
    mediaType: $Enums.MediaTypeEnum
    createdAt?: Date | string
    post: PostsCreateNestedOneWithoutMediaInput
  }

  export type MediaUncheckedCreateInput = {
    id?: string
    postId: string
    mediaUrl: string
    mediaType: $Enums.MediaTypeEnum
    createdAt?: Date | string
  }

  export type MediaUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    mediaUrl?: StringFieldUpdateOperationsInput | string
    mediaType?: EnumMediaTypeEnumFieldUpdateOperationsInput | $Enums.MediaTypeEnum
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    post?: PostsUpdateOneRequiredWithoutMediaNestedInput
  }

  export type MediaUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    postId?: StringFieldUpdateOperationsInput | string
    mediaUrl?: StringFieldUpdateOperationsInput | string
    mediaType?: EnumMediaTypeEnumFieldUpdateOperationsInput | $Enums.MediaTypeEnum
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MediaCreateManyInput = {
    id?: string
    postId: string
    mediaUrl: string
    mediaType: $Enums.MediaTypeEnum
    createdAt?: Date | string
  }

  export type MediaUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    mediaUrl?: StringFieldUpdateOperationsInput | string
    mediaType?: EnumMediaTypeEnumFieldUpdateOperationsInput | $Enums.MediaTypeEnum
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MediaUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    postId?: StringFieldUpdateOperationsInput | string
    mediaUrl?: StringFieldUpdateOperationsInput | string
    mediaType?: EnumMediaTypeEnumFieldUpdateOperationsInput | $Enums.MediaTypeEnum
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LikesCreateInput = {
    id?: string
    createdAt?: Date | string
    user?: UsersCreateNestedOneWithoutLikesInput
    post: PostsCreateNestedOneWithoutLikesInput
  }

  export type LikesUncheckedCreateInput = {
    id?: string
    userId?: string | null
    postId: string
    createdAt?: Date | string
  }

  export type LikesUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UsersUpdateOneWithoutLikesNestedInput
    post?: PostsUpdateOneRequiredWithoutLikesNestedInput
  }

  export type LikesUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    postId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LikesCreateManyInput = {
    id?: string
    userId?: string | null
    postId: string
    createdAt?: Date | string
  }

  export type LikesUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LikesUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    postId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentsCreateInput = {
    id?: string
    content: string
    createdAt?: Date | string
    user?: UsersCreateNestedOneWithoutCommentsInput
    post: PostsCreateNestedOneWithoutCommentsInput
    parent?: CommentsCreateNestedOneWithoutRepliesInput
    replies?: CommentsCreateNestedManyWithoutParentInput
  }

  export type CommentsUncheckedCreateInput = {
    id?: string
    userId?: string | null
    postId: string
    parentId?: string | null
    content: string
    createdAt?: Date | string
    replies?: CommentsUncheckedCreateNestedManyWithoutParentInput
  }

  export type CommentsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UsersUpdateOneWithoutCommentsNestedInput
    post?: PostsUpdateOneRequiredWithoutCommentsNestedInput
    parent?: CommentsUpdateOneWithoutRepliesNestedInput
    replies?: CommentsUpdateManyWithoutParentNestedInput
  }

  export type CommentsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    postId?: StringFieldUpdateOperationsInput | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    replies?: CommentsUncheckedUpdateManyWithoutParentNestedInput
  }

  export type CommentsCreateManyInput = {
    id?: string
    userId?: string | null
    postId: string
    parentId?: string | null
    content: string
    createdAt?: Date | string
  }

  export type CommentsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    postId?: StringFieldUpdateOperationsInput | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SharesCreateInput = {
    id?: string
    createdAt?: Date | string
    user?: UsersCreateNestedOneWithoutSharesInput
    post: PostsCreateNestedOneWithoutSharesInput
  }

  export type SharesUncheckedCreateInput = {
    id?: string
    userId?: string | null
    postId: string
    createdAt?: Date | string
  }

  export type SharesUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UsersUpdateOneWithoutSharesNestedInput
    post?: PostsUpdateOneRequiredWithoutSharesNestedInput
  }

  export type SharesUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    postId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SharesCreateManyInput = {
    id?: string
    userId?: string | null
    postId: string
    createdAt?: Date | string
  }

  export type SharesUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SharesUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    postId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NewsFeedCreateInput = {
    id?: string
    reason?: string | null
    score: number
    isNew?: boolean | null
    createdAt?: Date | string
    user?: UsersCreateNestedOneWithoutNewsFeedInput
    post: PostsCreateNestedOneWithoutNewsFeedInput
  }

  export type NewsFeedUncheckedCreateInput = {
    id?: string
    userId?: string | null
    postId: string
    reason?: string | null
    score: number
    isNew?: boolean | null
    createdAt?: Date | string
  }

  export type NewsFeedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    score?: FloatFieldUpdateOperationsInput | number
    isNew?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UsersUpdateOneWithoutNewsFeedNestedInput
    post?: PostsUpdateOneRequiredWithoutNewsFeedNestedInput
  }

  export type NewsFeedUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    postId?: StringFieldUpdateOperationsInput | string
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    score?: FloatFieldUpdateOperationsInput | number
    isNew?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NewsFeedCreateManyInput = {
    id?: string
    userId?: string | null
    postId: string
    reason?: string | null
    score: number
    isNew?: boolean | null
    createdAt?: Date | string
  }

  export type NewsFeedUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    score?: FloatFieldUpdateOperationsInput | number
    isNew?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NewsFeedUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    postId?: StringFieldUpdateOperationsInput | string
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    score?: FloatFieldUpdateOperationsInput | number
    isNew?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type PostsListRelationFilter = {
    every?: PostsWhereInput
    some?: PostsWhereInput
    none?: PostsWhereInput
  }

  export type LikesListRelationFilter = {
    every?: LikesWhereInput
    some?: LikesWhereInput
    none?: LikesWhereInput
  }

  export type CommentsListRelationFilter = {
    every?: CommentsWhereInput
    some?: CommentsWhereInput
    none?: CommentsWhereInput
  }

  export type SharesListRelationFilter = {
    every?: SharesWhereInput
    some?: SharesWhereInput
    none?: SharesWhereInput
  }

  export type NewsFeedListRelationFilter = {
    every?: NewsFeedWhereInput
    some?: NewsFeedWhereInput
    none?: NewsFeedWhereInput
  }

  export type PostTagFriendListRelationFilter = {
    every?: PostTagFriendWhereInput
    some?: PostTagFriendWhereInput
    none?: PostTagFriendWhereInput
  }

  export type ViewerListRelationFilter = {
    every?: ViewerWhereInput
    some?: ViewerWhereInput
    none?: ViewerWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type PostsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LikesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CommentsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SharesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type NewsFeedOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PostTagFriendOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ViewerOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UsersCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    fullname?: SortOrder
    avatarUrl?: SortOrder
  }

  export type UsersMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    fullname?: SortOrder
    avatarUrl?: SortOrder
  }

  export type UsersMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    fullname?: SortOrder
    avatarUrl?: SortOrder
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

  export type EnumPostTypeEnumFilter<$PrismaModel = never> = {
    equals?: $Enums.PostTypeEnum | EnumPostTypeEnumFieldRefInput<$PrismaModel>
    in?: $Enums.PostTypeEnum[] | ListEnumPostTypeEnumFieldRefInput<$PrismaModel>
    notIn?: $Enums.PostTypeEnum[] | ListEnumPostTypeEnumFieldRefInput<$PrismaModel>
    not?: NestedEnumPostTypeEnumFilter<$PrismaModel> | $Enums.PostTypeEnum
  }

  export type EnumVisibilityEnumFilter<$PrismaModel = never> = {
    equals?: $Enums.VisibilityEnum | EnumVisibilityEnumFieldRefInput<$PrismaModel>
    in?: $Enums.VisibilityEnum[] | ListEnumVisibilityEnumFieldRefInput<$PrismaModel>
    notIn?: $Enums.VisibilityEnum[] | ListEnumVisibilityEnumFieldRefInput<$PrismaModel>
    not?: NestedEnumVisibilityEnumFilter<$PrismaModel> | $Enums.VisibilityEnum
  }

  export type EnumCensorEnumFilter<$PrismaModel = never> = {
    equals?: $Enums.CensorEnum | EnumCensorEnumFieldRefInput<$PrismaModel>
    in?: $Enums.CensorEnum[] | ListEnumCensorEnumFieldRefInput<$PrismaModel>
    notIn?: $Enums.CensorEnum[] | ListEnumCensorEnumFieldRefInput<$PrismaModel>
    not?: NestedEnumCensorEnumFilter<$PrismaModel> | $Enums.CensorEnum
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

  export type UsersScalarRelationFilter = {
    is?: UsersWhereInput
    isNot?: UsersWhereInput
  }

  export type PostHashtagsListRelationFilter = {
    every?: PostHashtagsWhereInput
    some?: PostHashtagsWhereInput
    none?: PostHashtagsWhereInput
  }

  export type MediaListRelationFilter = {
    every?: MediaWhereInput
    some?: MediaWhereInput
    none?: MediaWhereInput
  }

  export type PostHashtagsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MediaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PostsCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    content?: SortOrder
    postType?: SortOrder
    visibility?: SortOrder
    censor?: SortOrder
    shareCount?: SortOrder
    likeCount?: SortOrder
    commentCount?: SortOrder
    createdAt?: SortOrder
    expired_at?: SortOrder
    updatedAt?: SortOrder
  }

  export type PostsAvgOrderByAggregateInput = {
    shareCount?: SortOrder
    likeCount?: SortOrder
    commentCount?: SortOrder
  }

  export type PostsMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    content?: SortOrder
    postType?: SortOrder
    visibility?: SortOrder
    censor?: SortOrder
    shareCount?: SortOrder
    likeCount?: SortOrder
    commentCount?: SortOrder
    createdAt?: SortOrder
    expired_at?: SortOrder
    updatedAt?: SortOrder
  }

  export type PostsMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    content?: SortOrder
    postType?: SortOrder
    visibility?: SortOrder
    censor?: SortOrder
    shareCount?: SortOrder
    likeCount?: SortOrder
    commentCount?: SortOrder
    createdAt?: SortOrder
    expired_at?: SortOrder
    updatedAt?: SortOrder
  }

  export type PostsSumOrderByAggregateInput = {
    shareCount?: SortOrder
    likeCount?: SortOrder
    commentCount?: SortOrder
  }

  export type EnumPostTypeEnumWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PostTypeEnum | EnumPostTypeEnumFieldRefInput<$PrismaModel>
    in?: $Enums.PostTypeEnum[] | ListEnumPostTypeEnumFieldRefInput<$PrismaModel>
    notIn?: $Enums.PostTypeEnum[] | ListEnumPostTypeEnumFieldRefInput<$PrismaModel>
    not?: NestedEnumPostTypeEnumWithAggregatesFilter<$PrismaModel> | $Enums.PostTypeEnum
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPostTypeEnumFilter<$PrismaModel>
    _max?: NestedEnumPostTypeEnumFilter<$PrismaModel>
  }

  export type EnumVisibilityEnumWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.VisibilityEnum | EnumVisibilityEnumFieldRefInput<$PrismaModel>
    in?: $Enums.VisibilityEnum[] | ListEnumVisibilityEnumFieldRefInput<$PrismaModel>
    notIn?: $Enums.VisibilityEnum[] | ListEnumVisibilityEnumFieldRefInput<$PrismaModel>
    not?: NestedEnumVisibilityEnumWithAggregatesFilter<$PrismaModel> | $Enums.VisibilityEnum
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumVisibilityEnumFilter<$PrismaModel>
    _max?: NestedEnumVisibilityEnumFilter<$PrismaModel>
  }

  export type EnumCensorEnumWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CensorEnum | EnumCensorEnumFieldRefInput<$PrismaModel>
    in?: $Enums.CensorEnum[] | ListEnumCensorEnumFieldRefInput<$PrismaModel>
    notIn?: $Enums.CensorEnum[] | ListEnumCensorEnumFieldRefInput<$PrismaModel>
    not?: NestedEnumCensorEnumWithAggregatesFilter<$PrismaModel> | $Enums.CensorEnum
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCensorEnumFilter<$PrismaModel>
    _max?: NestedEnumCensorEnumFilter<$PrismaModel>
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

  export type PostsScalarRelationFilter = {
    is?: PostsWhereInput
    isNot?: PostsWhereInput
  }

  export type ViewerUserIdPostIdCompoundUniqueInput = {
    userId: string
    postId: string
  }

  export type ViewerCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    postId?: SortOrder
    viewedAt?: SortOrder
  }

  export type ViewerAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ViewerMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    postId?: SortOrder
    viewedAt?: SortOrder
  }

  export type ViewerMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    postId?: SortOrder
    viewedAt?: SortOrder
  }

  export type ViewerSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type HashtagCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
  }

  export type HashtagMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
  }

  export type HashtagMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
  }

  export type HashtagScalarRelationFilter = {
    is?: HashtagWhereInput
    isNot?: HashtagWhereInput
  }

  export type PostHashtagsPostIdHashtagIdCompoundUniqueInput = {
    postId: string
    hashtagId: string
  }

  export type PostHashtagsCountOrderByAggregateInput = {
    postId?: SortOrder
    hashtagId?: SortOrder
  }

  export type PostHashtagsMaxOrderByAggregateInput = {
    postId?: SortOrder
    hashtagId?: SortOrder
  }

  export type PostHashtagsMinOrderByAggregateInput = {
    postId?: SortOrder
    hashtagId?: SortOrder
  }

  export type PostTagFriendCountOrderByAggregateInput = {
    id?: SortOrder
    postId?: SortOrder
    userId?: SortOrder
    taggedBy?: SortOrder
    createdAt?: SortOrder
  }

  export type PostTagFriendMaxOrderByAggregateInput = {
    id?: SortOrder
    postId?: SortOrder
    userId?: SortOrder
    taggedBy?: SortOrder
    createdAt?: SortOrder
  }

  export type PostTagFriendMinOrderByAggregateInput = {
    id?: SortOrder
    postId?: SortOrder
    userId?: SortOrder
    taggedBy?: SortOrder
    createdAt?: SortOrder
  }

  export type EnumMediaTypeEnumFilter<$PrismaModel = never> = {
    equals?: $Enums.MediaTypeEnum | EnumMediaTypeEnumFieldRefInput<$PrismaModel>
    in?: $Enums.MediaTypeEnum[] | ListEnumMediaTypeEnumFieldRefInput<$PrismaModel>
    notIn?: $Enums.MediaTypeEnum[] | ListEnumMediaTypeEnumFieldRefInput<$PrismaModel>
    not?: NestedEnumMediaTypeEnumFilter<$PrismaModel> | $Enums.MediaTypeEnum
  }

  export type MediaCountOrderByAggregateInput = {
    id?: SortOrder
    postId?: SortOrder
    mediaUrl?: SortOrder
    mediaType?: SortOrder
    createdAt?: SortOrder
  }

  export type MediaMaxOrderByAggregateInput = {
    id?: SortOrder
    postId?: SortOrder
    mediaUrl?: SortOrder
    mediaType?: SortOrder
    createdAt?: SortOrder
  }

  export type MediaMinOrderByAggregateInput = {
    id?: SortOrder
    postId?: SortOrder
    mediaUrl?: SortOrder
    mediaType?: SortOrder
    createdAt?: SortOrder
  }

  export type EnumMediaTypeEnumWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MediaTypeEnum | EnumMediaTypeEnumFieldRefInput<$PrismaModel>
    in?: $Enums.MediaTypeEnum[] | ListEnumMediaTypeEnumFieldRefInput<$PrismaModel>
    notIn?: $Enums.MediaTypeEnum[] | ListEnumMediaTypeEnumFieldRefInput<$PrismaModel>
    not?: NestedEnumMediaTypeEnumWithAggregatesFilter<$PrismaModel> | $Enums.MediaTypeEnum
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMediaTypeEnumFilter<$PrismaModel>
    _max?: NestedEnumMediaTypeEnumFilter<$PrismaModel>
  }

  export type UsersNullableScalarRelationFilter = {
    is?: UsersWhereInput | null
    isNot?: UsersWhereInput | null
  }

  export type LikesUserIdPostIdCompoundUniqueInput = {
    userId: string
    postId: string
  }

  export type LikesCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    postId?: SortOrder
    createdAt?: SortOrder
  }

  export type LikesMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    postId?: SortOrder
    createdAt?: SortOrder
  }

  export type LikesMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    postId?: SortOrder
    createdAt?: SortOrder
  }

  export type CommentsNullableScalarRelationFilter = {
    is?: CommentsWhereInput | null
    isNot?: CommentsWhereInput | null
  }

  export type CommentsCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    postId?: SortOrder
    parentId?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
  }

  export type CommentsMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    postId?: SortOrder
    parentId?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
  }

  export type CommentsMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    postId?: SortOrder
    parentId?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
  }

  export type SharesCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    postId?: SortOrder
    createdAt?: SortOrder
  }

  export type SharesMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    postId?: SortOrder
    createdAt?: SortOrder
  }

  export type SharesMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    postId?: SortOrder
    createdAt?: SortOrder
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type NewsFeedCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    postId?: SortOrder
    reason?: SortOrder
    score?: SortOrder
    isNew?: SortOrder
    createdAt?: SortOrder
  }

  export type NewsFeedAvgOrderByAggregateInput = {
    score?: SortOrder
  }

  export type NewsFeedMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    postId?: SortOrder
    reason?: SortOrder
    score?: SortOrder
    isNew?: SortOrder
    createdAt?: SortOrder
  }

  export type NewsFeedMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    postId?: SortOrder
    reason?: SortOrder
    score?: SortOrder
    isNew?: SortOrder
    createdAt?: SortOrder
  }

  export type NewsFeedSumOrderByAggregateInput = {
    score?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type PostsCreateNestedManyWithoutUserInput = {
    create?: XOR<PostsCreateWithoutUserInput, PostsUncheckedCreateWithoutUserInput> | PostsCreateWithoutUserInput[] | PostsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PostsCreateOrConnectWithoutUserInput | PostsCreateOrConnectWithoutUserInput[]
    createMany?: PostsCreateManyUserInputEnvelope
    connect?: PostsWhereUniqueInput | PostsWhereUniqueInput[]
  }

  export type LikesCreateNestedManyWithoutUserInput = {
    create?: XOR<LikesCreateWithoutUserInput, LikesUncheckedCreateWithoutUserInput> | LikesCreateWithoutUserInput[] | LikesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LikesCreateOrConnectWithoutUserInput | LikesCreateOrConnectWithoutUserInput[]
    createMany?: LikesCreateManyUserInputEnvelope
    connect?: LikesWhereUniqueInput | LikesWhereUniqueInput[]
  }

  export type CommentsCreateNestedManyWithoutUserInput = {
    create?: XOR<CommentsCreateWithoutUserInput, CommentsUncheckedCreateWithoutUserInput> | CommentsCreateWithoutUserInput[] | CommentsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CommentsCreateOrConnectWithoutUserInput | CommentsCreateOrConnectWithoutUserInput[]
    createMany?: CommentsCreateManyUserInputEnvelope
    connect?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
  }

  export type SharesCreateNestedManyWithoutUserInput = {
    create?: XOR<SharesCreateWithoutUserInput, SharesUncheckedCreateWithoutUserInput> | SharesCreateWithoutUserInput[] | SharesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SharesCreateOrConnectWithoutUserInput | SharesCreateOrConnectWithoutUserInput[]
    createMany?: SharesCreateManyUserInputEnvelope
    connect?: SharesWhereUniqueInput | SharesWhereUniqueInput[]
  }

  export type NewsFeedCreateNestedManyWithoutUserInput = {
    create?: XOR<NewsFeedCreateWithoutUserInput, NewsFeedUncheckedCreateWithoutUserInput> | NewsFeedCreateWithoutUserInput[] | NewsFeedUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NewsFeedCreateOrConnectWithoutUserInput | NewsFeedCreateOrConnectWithoutUserInput[]
    createMany?: NewsFeedCreateManyUserInputEnvelope
    connect?: NewsFeedWhereUniqueInput | NewsFeedWhereUniqueInput[]
  }

  export type PostTagFriendCreateNestedManyWithoutUserInput = {
    create?: XOR<PostTagFriendCreateWithoutUserInput, PostTagFriendUncheckedCreateWithoutUserInput> | PostTagFriendCreateWithoutUserInput[] | PostTagFriendUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PostTagFriendCreateOrConnectWithoutUserInput | PostTagFriendCreateOrConnectWithoutUserInput[]
    createMany?: PostTagFriendCreateManyUserInputEnvelope
    connect?: PostTagFriendWhereUniqueInput | PostTagFriendWhereUniqueInput[]
  }

  export type PostTagFriendCreateNestedManyWithoutTaggedByUserInput = {
    create?: XOR<PostTagFriendCreateWithoutTaggedByUserInput, PostTagFriendUncheckedCreateWithoutTaggedByUserInput> | PostTagFriendCreateWithoutTaggedByUserInput[] | PostTagFriendUncheckedCreateWithoutTaggedByUserInput[]
    connectOrCreate?: PostTagFriendCreateOrConnectWithoutTaggedByUserInput | PostTagFriendCreateOrConnectWithoutTaggedByUserInput[]
    createMany?: PostTagFriendCreateManyTaggedByUserInputEnvelope
    connect?: PostTagFriendWhereUniqueInput | PostTagFriendWhereUniqueInput[]
  }

  export type ViewerCreateNestedManyWithoutUserInput = {
    create?: XOR<ViewerCreateWithoutUserInput, ViewerUncheckedCreateWithoutUserInput> | ViewerCreateWithoutUserInput[] | ViewerUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ViewerCreateOrConnectWithoutUserInput | ViewerCreateOrConnectWithoutUserInput[]
    createMany?: ViewerCreateManyUserInputEnvelope
    connect?: ViewerWhereUniqueInput | ViewerWhereUniqueInput[]
  }

  export type PostsUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<PostsCreateWithoutUserInput, PostsUncheckedCreateWithoutUserInput> | PostsCreateWithoutUserInput[] | PostsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PostsCreateOrConnectWithoutUserInput | PostsCreateOrConnectWithoutUserInput[]
    createMany?: PostsCreateManyUserInputEnvelope
    connect?: PostsWhereUniqueInput | PostsWhereUniqueInput[]
  }

  export type LikesUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<LikesCreateWithoutUserInput, LikesUncheckedCreateWithoutUserInput> | LikesCreateWithoutUserInput[] | LikesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LikesCreateOrConnectWithoutUserInput | LikesCreateOrConnectWithoutUserInput[]
    createMany?: LikesCreateManyUserInputEnvelope
    connect?: LikesWhereUniqueInput | LikesWhereUniqueInput[]
  }

  export type CommentsUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<CommentsCreateWithoutUserInput, CommentsUncheckedCreateWithoutUserInput> | CommentsCreateWithoutUserInput[] | CommentsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CommentsCreateOrConnectWithoutUserInput | CommentsCreateOrConnectWithoutUserInput[]
    createMany?: CommentsCreateManyUserInputEnvelope
    connect?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
  }

  export type SharesUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SharesCreateWithoutUserInput, SharesUncheckedCreateWithoutUserInput> | SharesCreateWithoutUserInput[] | SharesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SharesCreateOrConnectWithoutUserInput | SharesCreateOrConnectWithoutUserInput[]
    createMany?: SharesCreateManyUserInputEnvelope
    connect?: SharesWhereUniqueInput | SharesWhereUniqueInput[]
  }

  export type NewsFeedUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<NewsFeedCreateWithoutUserInput, NewsFeedUncheckedCreateWithoutUserInput> | NewsFeedCreateWithoutUserInput[] | NewsFeedUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NewsFeedCreateOrConnectWithoutUserInput | NewsFeedCreateOrConnectWithoutUserInput[]
    createMany?: NewsFeedCreateManyUserInputEnvelope
    connect?: NewsFeedWhereUniqueInput | NewsFeedWhereUniqueInput[]
  }

  export type PostTagFriendUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<PostTagFriendCreateWithoutUserInput, PostTagFriendUncheckedCreateWithoutUserInput> | PostTagFriendCreateWithoutUserInput[] | PostTagFriendUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PostTagFriendCreateOrConnectWithoutUserInput | PostTagFriendCreateOrConnectWithoutUserInput[]
    createMany?: PostTagFriendCreateManyUserInputEnvelope
    connect?: PostTagFriendWhereUniqueInput | PostTagFriendWhereUniqueInput[]
  }

  export type PostTagFriendUncheckedCreateNestedManyWithoutTaggedByUserInput = {
    create?: XOR<PostTagFriendCreateWithoutTaggedByUserInput, PostTagFriendUncheckedCreateWithoutTaggedByUserInput> | PostTagFriendCreateWithoutTaggedByUserInput[] | PostTagFriendUncheckedCreateWithoutTaggedByUserInput[]
    connectOrCreate?: PostTagFriendCreateOrConnectWithoutTaggedByUserInput | PostTagFriendCreateOrConnectWithoutTaggedByUserInput[]
    createMany?: PostTagFriendCreateManyTaggedByUserInputEnvelope
    connect?: PostTagFriendWhereUniqueInput | PostTagFriendWhereUniqueInput[]
  }

  export type ViewerUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ViewerCreateWithoutUserInput, ViewerUncheckedCreateWithoutUserInput> | ViewerCreateWithoutUserInput[] | ViewerUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ViewerCreateOrConnectWithoutUserInput | ViewerCreateOrConnectWithoutUserInput[]
    createMany?: ViewerCreateManyUserInputEnvelope
    connect?: ViewerWhereUniqueInput | ViewerWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type PostsUpdateManyWithoutUserNestedInput = {
    create?: XOR<PostsCreateWithoutUserInput, PostsUncheckedCreateWithoutUserInput> | PostsCreateWithoutUserInput[] | PostsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PostsCreateOrConnectWithoutUserInput | PostsCreateOrConnectWithoutUserInput[]
    upsert?: PostsUpsertWithWhereUniqueWithoutUserInput | PostsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PostsCreateManyUserInputEnvelope
    set?: PostsWhereUniqueInput | PostsWhereUniqueInput[]
    disconnect?: PostsWhereUniqueInput | PostsWhereUniqueInput[]
    delete?: PostsWhereUniqueInput | PostsWhereUniqueInput[]
    connect?: PostsWhereUniqueInput | PostsWhereUniqueInput[]
    update?: PostsUpdateWithWhereUniqueWithoutUserInput | PostsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PostsUpdateManyWithWhereWithoutUserInput | PostsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PostsScalarWhereInput | PostsScalarWhereInput[]
  }

  export type LikesUpdateManyWithoutUserNestedInput = {
    create?: XOR<LikesCreateWithoutUserInput, LikesUncheckedCreateWithoutUserInput> | LikesCreateWithoutUserInput[] | LikesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LikesCreateOrConnectWithoutUserInput | LikesCreateOrConnectWithoutUserInput[]
    upsert?: LikesUpsertWithWhereUniqueWithoutUserInput | LikesUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: LikesCreateManyUserInputEnvelope
    set?: LikesWhereUniqueInput | LikesWhereUniqueInput[]
    disconnect?: LikesWhereUniqueInput | LikesWhereUniqueInput[]
    delete?: LikesWhereUniqueInput | LikesWhereUniqueInput[]
    connect?: LikesWhereUniqueInput | LikesWhereUniqueInput[]
    update?: LikesUpdateWithWhereUniqueWithoutUserInput | LikesUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: LikesUpdateManyWithWhereWithoutUserInput | LikesUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: LikesScalarWhereInput | LikesScalarWhereInput[]
  }

  export type CommentsUpdateManyWithoutUserNestedInput = {
    create?: XOR<CommentsCreateWithoutUserInput, CommentsUncheckedCreateWithoutUserInput> | CommentsCreateWithoutUserInput[] | CommentsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CommentsCreateOrConnectWithoutUserInput | CommentsCreateOrConnectWithoutUserInput[]
    upsert?: CommentsUpsertWithWhereUniqueWithoutUserInput | CommentsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CommentsCreateManyUserInputEnvelope
    set?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
    disconnect?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
    delete?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
    connect?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
    update?: CommentsUpdateWithWhereUniqueWithoutUserInput | CommentsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CommentsUpdateManyWithWhereWithoutUserInput | CommentsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CommentsScalarWhereInput | CommentsScalarWhereInput[]
  }

  export type SharesUpdateManyWithoutUserNestedInput = {
    create?: XOR<SharesCreateWithoutUserInput, SharesUncheckedCreateWithoutUserInput> | SharesCreateWithoutUserInput[] | SharesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SharesCreateOrConnectWithoutUserInput | SharesCreateOrConnectWithoutUserInput[]
    upsert?: SharesUpsertWithWhereUniqueWithoutUserInput | SharesUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SharesCreateManyUserInputEnvelope
    set?: SharesWhereUniqueInput | SharesWhereUniqueInput[]
    disconnect?: SharesWhereUniqueInput | SharesWhereUniqueInput[]
    delete?: SharesWhereUniqueInput | SharesWhereUniqueInput[]
    connect?: SharesWhereUniqueInput | SharesWhereUniqueInput[]
    update?: SharesUpdateWithWhereUniqueWithoutUserInput | SharesUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SharesUpdateManyWithWhereWithoutUserInput | SharesUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SharesScalarWhereInput | SharesScalarWhereInput[]
  }

  export type NewsFeedUpdateManyWithoutUserNestedInput = {
    create?: XOR<NewsFeedCreateWithoutUserInput, NewsFeedUncheckedCreateWithoutUserInput> | NewsFeedCreateWithoutUserInput[] | NewsFeedUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NewsFeedCreateOrConnectWithoutUserInput | NewsFeedCreateOrConnectWithoutUserInput[]
    upsert?: NewsFeedUpsertWithWhereUniqueWithoutUserInput | NewsFeedUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: NewsFeedCreateManyUserInputEnvelope
    set?: NewsFeedWhereUniqueInput | NewsFeedWhereUniqueInput[]
    disconnect?: NewsFeedWhereUniqueInput | NewsFeedWhereUniqueInput[]
    delete?: NewsFeedWhereUniqueInput | NewsFeedWhereUniqueInput[]
    connect?: NewsFeedWhereUniqueInput | NewsFeedWhereUniqueInput[]
    update?: NewsFeedUpdateWithWhereUniqueWithoutUserInput | NewsFeedUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: NewsFeedUpdateManyWithWhereWithoutUserInput | NewsFeedUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: NewsFeedScalarWhereInput | NewsFeedScalarWhereInput[]
  }

  export type PostTagFriendUpdateManyWithoutUserNestedInput = {
    create?: XOR<PostTagFriendCreateWithoutUserInput, PostTagFriendUncheckedCreateWithoutUserInput> | PostTagFriendCreateWithoutUserInput[] | PostTagFriendUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PostTagFriendCreateOrConnectWithoutUserInput | PostTagFriendCreateOrConnectWithoutUserInput[]
    upsert?: PostTagFriendUpsertWithWhereUniqueWithoutUserInput | PostTagFriendUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PostTagFriendCreateManyUserInputEnvelope
    set?: PostTagFriendWhereUniqueInput | PostTagFriendWhereUniqueInput[]
    disconnect?: PostTagFriendWhereUniqueInput | PostTagFriendWhereUniqueInput[]
    delete?: PostTagFriendWhereUniqueInput | PostTagFriendWhereUniqueInput[]
    connect?: PostTagFriendWhereUniqueInput | PostTagFriendWhereUniqueInput[]
    update?: PostTagFriendUpdateWithWhereUniqueWithoutUserInput | PostTagFriendUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PostTagFriendUpdateManyWithWhereWithoutUserInput | PostTagFriendUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PostTagFriendScalarWhereInput | PostTagFriendScalarWhereInput[]
  }

  export type PostTagFriendUpdateManyWithoutTaggedByUserNestedInput = {
    create?: XOR<PostTagFriendCreateWithoutTaggedByUserInput, PostTagFriendUncheckedCreateWithoutTaggedByUserInput> | PostTagFriendCreateWithoutTaggedByUserInput[] | PostTagFriendUncheckedCreateWithoutTaggedByUserInput[]
    connectOrCreate?: PostTagFriendCreateOrConnectWithoutTaggedByUserInput | PostTagFriendCreateOrConnectWithoutTaggedByUserInput[]
    upsert?: PostTagFriendUpsertWithWhereUniqueWithoutTaggedByUserInput | PostTagFriendUpsertWithWhereUniqueWithoutTaggedByUserInput[]
    createMany?: PostTagFriendCreateManyTaggedByUserInputEnvelope
    set?: PostTagFriendWhereUniqueInput | PostTagFriendWhereUniqueInput[]
    disconnect?: PostTagFriendWhereUniqueInput | PostTagFriendWhereUniqueInput[]
    delete?: PostTagFriendWhereUniqueInput | PostTagFriendWhereUniqueInput[]
    connect?: PostTagFriendWhereUniqueInput | PostTagFriendWhereUniqueInput[]
    update?: PostTagFriendUpdateWithWhereUniqueWithoutTaggedByUserInput | PostTagFriendUpdateWithWhereUniqueWithoutTaggedByUserInput[]
    updateMany?: PostTagFriendUpdateManyWithWhereWithoutTaggedByUserInput | PostTagFriendUpdateManyWithWhereWithoutTaggedByUserInput[]
    deleteMany?: PostTagFriendScalarWhereInput | PostTagFriendScalarWhereInput[]
  }

  export type ViewerUpdateManyWithoutUserNestedInput = {
    create?: XOR<ViewerCreateWithoutUserInput, ViewerUncheckedCreateWithoutUserInput> | ViewerCreateWithoutUserInput[] | ViewerUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ViewerCreateOrConnectWithoutUserInput | ViewerCreateOrConnectWithoutUserInput[]
    upsert?: ViewerUpsertWithWhereUniqueWithoutUserInput | ViewerUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ViewerCreateManyUserInputEnvelope
    set?: ViewerWhereUniqueInput | ViewerWhereUniqueInput[]
    disconnect?: ViewerWhereUniqueInput | ViewerWhereUniqueInput[]
    delete?: ViewerWhereUniqueInput | ViewerWhereUniqueInput[]
    connect?: ViewerWhereUniqueInput | ViewerWhereUniqueInput[]
    update?: ViewerUpdateWithWhereUniqueWithoutUserInput | ViewerUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ViewerUpdateManyWithWhereWithoutUserInput | ViewerUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ViewerScalarWhereInput | ViewerScalarWhereInput[]
  }

  export type PostsUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<PostsCreateWithoutUserInput, PostsUncheckedCreateWithoutUserInput> | PostsCreateWithoutUserInput[] | PostsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PostsCreateOrConnectWithoutUserInput | PostsCreateOrConnectWithoutUserInput[]
    upsert?: PostsUpsertWithWhereUniqueWithoutUserInput | PostsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PostsCreateManyUserInputEnvelope
    set?: PostsWhereUniqueInput | PostsWhereUniqueInput[]
    disconnect?: PostsWhereUniqueInput | PostsWhereUniqueInput[]
    delete?: PostsWhereUniqueInput | PostsWhereUniqueInput[]
    connect?: PostsWhereUniqueInput | PostsWhereUniqueInput[]
    update?: PostsUpdateWithWhereUniqueWithoutUserInput | PostsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PostsUpdateManyWithWhereWithoutUserInput | PostsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PostsScalarWhereInput | PostsScalarWhereInput[]
  }

  export type LikesUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<LikesCreateWithoutUserInput, LikesUncheckedCreateWithoutUserInput> | LikesCreateWithoutUserInput[] | LikesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LikesCreateOrConnectWithoutUserInput | LikesCreateOrConnectWithoutUserInput[]
    upsert?: LikesUpsertWithWhereUniqueWithoutUserInput | LikesUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: LikesCreateManyUserInputEnvelope
    set?: LikesWhereUniqueInput | LikesWhereUniqueInput[]
    disconnect?: LikesWhereUniqueInput | LikesWhereUniqueInput[]
    delete?: LikesWhereUniqueInput | LikesWhereUniqueInput[]
    connect?: LikesWhereUniqueInput | LikesWhereUniqueInput[]
    update?: LikesUpdateWithWhereUniqueWithoutUserInput | LikesUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: LikesUpdateManyWithWhereWithoutUserInput | LikesUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: LikesScalarWhereInput | LikesScalarWhereInput[]
  }

  export type CommentsUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<CommentsCreateWithoutUserInput, CommentsUncheckedCreateWithoutUserInput> | CommentsCreateWithoutUserInput[] | CommentsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CommentsCreateOrConnectWithoutUserInput | CommentsCreateOrConnectWithoutUserInput[]
    upsert?: CommentsUpsertWithWhereUniqueWithoutUserInput | CommentsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CommentsCreateManyUserInputEnvelope
    set?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
    disconnect?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
    delete?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
    connect?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
    update?: CommentsUpdateWithWhereUniqueWithoutUserInput | CommentsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CommentsUpdateManyWithWhereWithoutUserInput | CommentsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CommentsScalarWhereInput | CommentsScalarWhereInput[]
  }

  export type SharesUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SharesCreateWithoutUserInput, SharesUncheckedCreateWithoutUserInput> | SharesCreateWithoutUserInput[] | SharesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SharesCreateOrConnectWithoutUserInput | SharesCreateOrConnectWithoutUserInput[]
    upsert?: SharesUpsertWithWhereUniqueWithoutUserInput | SharesUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SharesCreateManyUserInputEnvelope
    set?: SharesWhereUniqueInput | SharesWhereUniqueInput[]
    disconnect?: SharesWhereUniqueInput | SharesWhereUniqueInput[]
    delete?: SharesWhereUniqueInput | SharesWhereUniqueInput[]
    connect?: SharesWhereUniqueInput | SharesWhereUniqueInput[]
    update?: SharesUpdateWithWhereUniqueWithoutUserInput | SharesUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SharesUpdateManyWithWhereWithoutUserInput | SharesUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SharesScalarWhereInput | SharesScalarWhereInput[]
  }

  export type NewsFeedUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<NewsFeedCreateWithoutUserInput, NewsFeedUncheckedCreateWithoutUserInput> | NewsFeedCreateWithoutUserInput[] | NewsFeedUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NewsFeedCreateOrConnectWithoutUserInput | NewsFeedCreateOrConnectWithoutUserInput[]
    upsert?: NewsFeedUpsertWithWhereUniqueWithoutUserInput | NewsFeedUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: NewsFeedCreateManyUserInputEnvelope
    set?: NewsFeedWhereUniqueInput | NewsFeedWhereUniqueInput[]
    disconnect?: NewsFeedWhereUniqueInput | NewsFeedWhereUniqueInput[]
    delete?: NewsFeedWhereUniqueInput | NewsFeedWhereUniqueInput[]
    connect?: NewsFeedWhereUniqueInput | NewsFeedWhereUniqueInput[]
    update?: NewsFeedUpdateWithWhereUniqueWithoutUserInput | NewsFeedUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: NewsFeedUpdateManyWithWhereWithoutUserInput | NewsFeedUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: NewsFeedScalarWhereInput | NewsFeedScalarWhereInput[]
  }

  export type PostTagFriendUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<PostTagFriendCreateWithoutUserInput, PostTagFriendUncheckedCreateWithoutUserInput> | PostTagFriendCreateWithoutUserInput[] | PostTagFriendUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PostTagFriendCreateOrConnectWithoutUserInput | PostTagFriendCreateOrConnectWithoutUserInput[]
    upsert?: PostTagFriendUpsertWithWhereUniqueWithoutUserInput | PostTagFriendUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PostTagFriendCreateManyUserInputEnvelope
    set?: PostTagFriendWhereUniqueInput | PostTagFriendWhereUniqueInput[]
    disconnect?: PostTagFriendWhereUniqueInput | PostTagFriendWhereUniqueInput[]
    delete?: PostTagFriendWhereUniqueInput | PostTagFriendWhereUniqueInput[]
    connect?: PostTagFriendWhereUniqueInput | PostTagFriendWhereUniqueInput[]
    update?: PostTagFriendUpdateWithWhereUniqueWithoutUserInput | PostTagFriendUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PostTagFriendUpdateManyWithWhereWithoutUserInput | PostTagFriendUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PostTagFriendScalarWhereInput | PostTagFriendScalarWhereInput[]
  }

  export type PostTagFriendUncheckedUpdateManyWithoutTaggedByUserNestedInput = {
    create?: XOR<PostTagFriendCreateWithoutTaggedByUserInput, PostTagFriendUncheckedCreateWithoutTaggedByUserInput> | PostTagFriendCreateWithoutTaggedByUserInput[] | PostTagFriendUncheckedCreateWithoutTaggedByUserInput[]
    connectOrCreate?: PostTagFriendCreateOrConnectWithoutTaggedByUserInput | PostTagFriendCreateOrConnectWithoutTaggedByUserInput[]
    upsert?: PostTagFriendUpsertWithWhereUniqueWithoutTaggedByUserInput | PostTagFriendUpsertWithWhereUniqueWithoutTaggedByUserInput[]
    createMany?: PostTagFriendCreateManyTaggedByUserInputEnvelope
    set?: PostTagFriendWhereUniqueInput | PostTagFriendWhereUniqueInput[]
    disconnect?: PostTagFriendWhereUniqueInput | PostTagFriendWhereUniqueInput[]
    delete?: PostTagFriendWhereUniqueInput | PostTagFriendWhereUniqueInput[]
    connect?: PostTagFriendWhereUniqueInput | PostTagFriendWhereUniqueInput[]
    update?: PostTagFriendUpdateWithWhereUniqueWithoutTaggedByUserInput | PostTagFriendUpdateWithWhereUniqueWithoutTaggedByUserInput[]
    updateMany?: PostTagFriendUpdateManyWithWhereWithoutTaggedByUserInput | PostTagFriendUpdateManyWithWhereWithoutTaggedByUserInput[]
    deleteMany?: PostTagFriendScalarWhereInput | PostTagFriendScalarWhereInput[]
  }

  export type ViewerUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ViewerCreateWithoutUserInput, ViewerUncheckedCreateWithoutUserInput> | ViewerCreateWithoutUserInput[] | ViewerUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ViewerCreateOrConnectWithoutUserInput | ViewerCreateOrConnectWithoutUserInput[]
    upsert?: ViewerUpsertWithWhereUniqueWithoutUserInput | ViewerUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ViewerCreateManyUserInputEnvelope
    set?: ViewerWhereUniqueInput | ViewerWhereUniqueInput[]
    disconnect?: ViewerWhereUniqueInput | ViewerWhereUniqueInput[]
    delete?: ViewerWhereUniqueInput | ViewerWhereUniqueInput[]
    connect?: ViewerWhereUniqueInput | ViewerWhereUniqueInput[]
    update?: ViewerUpdateWithWhereUniqueWithoutUserInput | ViewerUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ViewerUpdateManyWithWhereWithoutUserInput | ViewerUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ViewerScalarWhereInput | ViewerScalarWhereInput[]
  }

  export type UsersCreateNestedOneWithoutPostsInput = {
    create?: XOR<UsersCreateWithoutPostsInput, UsersUncheckedCreateWithoutPostsInput>
    connectOrCreate?: UsersCreateOrConnectWithoutPostsInput
    connect?: UsersWhereUniqueInput
  }

  export type PostHashtagsCreateNestedManyWithoutPostInput = {
    create?: XOR<PostHashtagsCreateWithoutPostInput, PostHashtagsUncheckedCreateWithoutPostInput> | PostHashtagsCreateWithoutPostInput[] | PostHashtagsUncheckedCreateWithoutPostInput[]
    connectOrCreate?: PostHashtagsCreateOrConnectWithoutPostInput | PostHashtagsCreateOrConnectWithoutPostInput[]
    createMany?: PostHashtagsCreateManyPostInputEnvelope
    connect?: PostHashtagsWhereUniqueInput | PostHashtagsWhereUniqueInput[]
  }

  export type PostTagFriendCreateNestedManyWithoutPostInput = {
    create?: XOR<PostTagFriendCreateWithoutPostInput, PostTagFriendUncheckedCreateWithoutPostInput> | PostTagFriendCreateWithoutPostInput[] | PostTagFriendUncheckedCreateWithoutPostInput[]
    connectOrCreate?: PostTagFriendCreateOrConnectWithoutPostInput | PostTagFriendCreateOrConnectWithoutPostInput[]
    createMany?: PostTagFriendCreateManyPostInputEnvelope
    connect?: PostTagFriendWhereUniqueInput | PostTagFriendWhereUniqueInput[]
  }

  export type MediaCreateNestedManyWithoutPostInput = {
    create?: XOR<MediaCreateWithoutPostInput, MediaUncheckedCreateWithoutPostInput> | MediaCreateWithoutPostInput[] | MediaUncheckedCreateWithoutPostInput[]
    connectOrCreate?: MediaCreateOrConnectWithoutPostInput | MediaCreateOrConnectWithoutPostInput[]
    createMany?: MediaCreateManyPostInputEnvelope
    connect?: MediaWhereUniqueInput | MediaWhereUniqueInput[]
  }

  export type LikesCreateNestedManyWithoutPostInput = {
    create?: XOR<LikesCreateWithoutPostInput, LikesUncheckedCreateWithoutPostInput> | LikesCreateWithoutPostInput[] | LikesUncheckedCreateWithoutPostInput[]
    connectOrCreate?: LikesCreateOrConnectWithoutPostInput | LikesCreateOrConnectWithoutPostInput[]
    createMany?: LikesCreateManyPostInputEnvelope
    connect?: LikesWhereUniqueInput | LikesWhereUniqueInput[]
  }

  export type CommentsCreateNestedManyWithoutPostInput = {
    create?: XOR<CommentsCreateWithoutPostInput, CommentsUncheckedCreateWithoutPostInput> | CommentsCreateWithoutPostInput[] | CommentsUncheckedCreateWithoutPostInput[]
    connectOrCreate?: CommentsCreateOrConnectWithoutPostInput | CommentsCreateOrConnectWithoutPostInput[]
    createMany?: CommentsCreateManyPostInputEnvelope
    connect?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
  }

  export type SharesCreateNestedManyWithoutPostInput = {
    create?: XOR<SharesCreateWithoutPostInput, SharesUncheckedCreateWithoutPostInput> | SharesCreateWithoutPostInput[] | SharesUncheckedCreateWithoutPostInput[]
    connectOrCreate?: SharesCreateOrConnectWithoutPostInput | SharesCreateOrConnectWithoutPostInput[]
    createMany?: SharesCreateManyPostInputEnvelope
    connect?: SharesWhereUniqueInput | SharesWhereUniqueInput[]
  }

  export type NewsFeedCreateNestedManyWithoutPostInput = {
    create?: XOR<NewsFeedCreateWithoutPostInput, NewsFeedUncheckedCreateWithoutPostInput> | NewsFeedCreateWithoutPostInput[] | NewsFeedUncheckedCreateWithoutPostInput[]
    connectOrCreate?: NewsFeedCreateOrConnectWithoutPostInput | NewsFeedCreateOrConnectWithoutPostInput[]
    createMany?: NewsFeedCreateManyPostInputEnvelope
    connect?: NewsFeedWhereUniqueInput | NewsFeedWhereUniqueInput[]
  }

  export type ViewerCreateNestedManyWithoutPostInput = {
    create?: XOR<ViewerCreateWithoutPostInput, ViewerUncheckedCreateWithoutPostInput> | ViewerCreateWithoutPostInput[] | ViewerUncheckedCreateWithoutPostInput[]
    connectOrCreate?: ViewerCreateOrConnectWithoutPostInput | ViewerCreateOrConnectWithoutPostInput[]
    createMany?: ViewerCreateManyPostInputEnvelope
    connect?: ViewerWhereUniqueInput | ViewerWhereUniqueInput[]
  }

  export type PostHashtagsUncheckedCreateNestedManyWithoutPostInput = {
    create?: XOR<PostHashtagsCreateWithoutPostInput, PostHashtagsUncheckedCreateWithoutPostInput> | PostHashtagsCreateWithoutPostInput[] | PostHashtagsUncheckedCreateWithoutPostInput[]
    connectOrCreate?: PostHashtagsCreateOrConnectWithoutPostInput | PostHashtagsCreateOrConnectWithoutPostInput[]
    createMany?: PostHashtagsCreateManyPostInputEnvelope
    connect?: PostHashtagsWhereUniqueInput | PostHashtagsWhereUniqueInput[]
  }

  export type PostTagFriendUncheckedCreateNestedManyWithoutPostInput = {
    create?: XOR<PostTagFriendCreateWithoutPostInput, PostTagFriendUncheckedCreateWithoutPostInput> | PostTagFriendCreateWithoutPostInput[] | PostTagFriendUncheckedCreateWithoutPostInput[]
    connectOrCreate?: PostTagFriendCreateOrConnectWithoutPostInput | PostTagFriendCreateOrConnectWithoutPostInput[]
    createMany?: PostTagFriendCreateManyPostInputEnvelope
    connect?: PostTagFriendWhereUniqueInput | PostTagFriendWhereUniqueInput[]
  }

  export type MediaUncheckedCreateNestedManyWithoutPostInput = {
    create?: XOR<MediaCreateWithoutPostInput, MediaUncheckedCreateWithoutPostInput> | MediaCreateWithoutPostInput[] | MediaUncheckedCreateWithoutPostInput[]
    connectOrCreate?: MediaCreateOrConnectWithoutPostInput | MediaCreateOrConnectWithoutPostInput[]
    createMany?: MediaCreateManyPostInputEnvelope
    connect?: MediaWhereUniqueInput | MediaWhereUniqueInput[]
  }

  export type LikesUncheckedCreateNestedManyWithoutPostInput = {
    create?: XOR<LikesCreateWithoutPostInput, LikesUncheckedCreateWithoutPostInput> | LikesCreateWithoutPostInput[] | LikesUncheckedCreateWithoutPostInput[]
    connectOrCreate?: LikesCreateOrConnectWithoutPostInput | LikesCreateOrConnectWithoutPostInput[]
    createMany?: LikesCreateManyPostInputEnvelope
    connect?: LikesWhereUniqueInput | LikesWhereUniqueInput[]
  }

  export type CommentsUncheckedCreateNestedManyWithoutPostInput = {
    create?: XOR<CommentsCreateWithoutPostInput, CommentsUncheckedCreateWithoutPostInput> | CommentsCreateWithoutPostInput[] | CommentsUncheckedCreateWithoutPostInput[]
    connectOrCreate?: CommentsCreateOrConnectWithoutPostInput | CommentsCreateOrConnectWithoutPostInput[]
    createMany?: CommentsCreateManyPostInputEnvelope
    connect?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
  }

  export type SharesUncheckedCreateNestedManyWithoutPostInput = {
    create?: XOR<SharesCreateWithoutPostInput, SharesUncheckedCreateWithoutPostInput> | SharesCreateWithoutPostInput[] | SharesUncheckedCreateWithoutPostInput[]
    connectOrCreate?: SharesCreateOrConnectWithoutPostInput | SharesCreateOrConnectWithoutPostInput[]
    createMany?: SharesCreateManyPostInputEnvelope
    connect?: SharesWhereUniqueInput | SharesWhereUniqueInput[]
  }

  export type NewsFeedUncheckedCreateNestedManyWithoutPostInput = {
    create?: XOR<NewsFeedCreateWithoutPostInput, NewsFeedUncheckedCreateWithoutPostInput> | NewsFeedCreateWithoutPostInput[] | NewsFeedUncheckedCreateWithoutPostInput[]
    connectOrCreate?: NewsFeedCreateOrConnectWithoutPostInput | NewsFeedCreateOrConnectWithoutPostInput[]
    createMany?: NewsFeedCreateManyPostInputEnvelope
    connect?: NewsFeedWhereUniqueInput | NewsFeedWhereUniqueInput[]
  }

  export type ViewerUncheckedCreateNestedManyWithoutPostInput = {
    create?: XOR<ViewerCreateWithoutPostInput, ViewerUncheckedCreateWithoutPostInput> | ViewerCreateWithoutPostInput[] | ViewerUncheckedCreateWithoutPostInput[]
    connectOrCreate?: ViewerCreateOrConnectWithoutPostInput | ViewerCreateOrConnectWithoutPostInput[]
    createMany?: ViewerCreateManyPostInputEnvelope
    connect?: ViewerWhereUniqueInput | ViewerWhereUniqueInput[]
  }

  export type EnumPostTypeEnumFieldUpdateOperationsInput = {
    set?: $Enums.PostTypeEnum
  }

  export type EnumVisibilityEnumFieldUpdateOperationsInput = {
    set?: $Enums.VisibilityEnum
  }

  export type EnumCensorEnumFieldUpdateOperationsInput = {
    set?: $Enums.CensorEnum
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

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type UsersUpdateOneRequiredWithoutPostsNestedInput = {
    create?: XOR<UsersCreateWithoutPostsInput, UsersUncheckedCreateWithoutPostsInput>
    connectOrCreate?: UsersCreateOrConnectWithoutPostsInput
    upsert?: UsersUpsertWithoutPostsInput
    connect?: UsersWhereUniqueInput
    update?: XOR<XOR<UsersUpdateToOneWithWhereWithoutPostsInput, UsersUpdateWithoutPostsInput>, UsersUncheckedUpdateWithoutPostsInput>
  }

  export type PostHashtagsUpdateManyWithoutPostNestedInput = {
    create?: XOR<PostHashtagsCreateWithoutPostInput, PostHashtagsUncheckedCreateWithoutPostInput> | PostHashtagsCreateWithoutPostInput[] | PostHashtagsUncheckedCreateWithoutPostInput[]
    connectOrCreate?: PostHashtagsCreateOrConnectWithoutPostInput | PostHashtagsCreateOrConnectWithoutPostInput[]
    upsert?: PostHashtagsUpsertWithWhereUniqueWithoutPostInput | PostHashtagsUpsertWithWhereUniqueWithoutPostInput[]
    createMany?: PostHashtagsCreateManyPostInputEnvelope
    set?: PostHashtagsWhereUniqueInput | PostHashtagsWhereUniqueInput[]
    disconnect?: PostHashtagsWhereUniqueInput | PostHashtagsWhereUniqueInput[]
    delete?: PostHashtagsWhereUniqueInput | PostHashtagsWhereUniqueInput[]
    connect?: PostHashtagsWhereUniqueInput | PostHashtagsWhereUniqueInput[]
    update?: PostHashtagsUpdateWithWhereUniqueWithoutPostInput | PostHashtagsUpdateWithWhereUniqueWithoutPostInput[]
    updateMany?: PostHashtagsUpdateManyWithWhereWithoutPostInput | PostHashtagsUpdateManyWithWhereWithoutPostInput[]
    deleteMany?: PostHashtagsScalarWhereInput | PostHashtagsScalarWhereInput[]
  }

  export type PostTagFriendUpdateManyWithoutPostNestedInput = {
    create?: XOR<PostTagFriendCreateWithoutPostInput, PostTagFriendUncheckedCreateWithoutPostInput> | PostTagFriendCreateWithoutPostInput[] | PostTagFriendUncheckedCreateWithoutPostInput[]
    connectOrCreate?: PostTagFriendCreateOrConnectWithoutPostInput | PostTagFriendCreateOrConnectWithoutPostInput[]
    upsert?: PostTagFriendUpsertWithWhereUniqueWithoutPostInput | PostTagFriendUpsertWithWhereUniqueWithoutPostInput[]
    createMany?: PostTagFriendCreateManyPostInputEnvelope
    set?: PostTagFriendWhereUniqueInput | PostTagFriendWhereUniqueInput[]
    disconnect?: PostTagFriendWhereUniqueInput | PostTagFriendWhereUniqueInput[]
    delete?: PostTagFriendWhereUniqueInput | PostTagFriendWhereUniqueInput[]
    connect?: PostTagFriendWhereUniqueInput | PostTagFriendWhereUniqueInput[]
    update?: PostTagFriendUpdateWithWhereUniqueWithoutPostInput | PostTagFriendUpdateWithWhereUniqueWithoutPostInput[]
    updateMany?: PostTagFriendUpdateManyWithWhereWithoutPostInput | PostTagFriendUpdateManyWithWhereWithoutPostInput[]
    deleteMany?: PostTagFriendScalarWhereInput | PostTagFriendScalarWhereInput[]
  }

  export type MediaUpdateManyWithoutPostNestedInput = {
    create?: XOR<MediaCreateWithoutPostInput, MediaUncheckedCreateWithoutPostInput> | MediaCreateWithoutPostInput[] | MediaUncheckedCreateWithoutPostInput[]
    connectOrCreate?: MediaCreateOrConnectWithoutPostInput | MediaCreateOrConnectWithoutPostInput[]
    upsert?: MediaUpsertWithWhereUniqueWithoutPostInput | MediaUpsertWithWhereUniqueWithoutPostInput[]
    createMany?: MediaCreateManyPostInputEnvelope
    set?: MediaWhereUniqueInput | MediaWhereUniqueInput[]
    disconnect?: MediaWhereUniqueInput | MediaWhereUniqueInput[]
    delete?: MediaWhereUniqueInput | MediaWhereUniqueInput[]
    connect?: MediaWhereUniqueInput | MediaWhereUniqueInput[]
    update?: MediaUpdateWithWhereUniqueWithoutPostInput | MediaUpdateWithWhereUniqueWithoutPostInput[]
    updateMany?: MediaUpdateManyWithWhereWithoutPostInput | MediaUpdateManyWithWhereWithoutPostInput[]
    deleteMany?: MediaScalarWhereInput | MediaScalarWhereInput[]
  }

  export type LikesUpdateManyWithoutPostNestedInput = {
    create?: XOR<LikesCreateWithoutPostInput, LikesUncheckedCreateWithoutPostInput> | LikesCreateWithoutPostInput[] | LikesUncheckedCreateWithoutPostInput[]
    connectOrCreate?: LikesCreateOrConnectWithoutPostInput | LikesCreateOrConnectWithoutPostInput[]
    upsert?: LikesUpsertWithWhereUniqueWithoutPostInput | LikesUpsertWithWhereUniqueWithoutPostInput[]
    createMany?: LikesCreateManyPostInputEnvelope
    set?: LikesWhereUniqueInput | LikesWhereUniqueInput[]
    disconnect?: LikesWhereUniqueInput | LikesWhereUniqueInput[]
    delete?: LikesWhereUniqueInput | LikesWhereUniqueInput[]
    connect?: LikesWhereUniqueInput | LikesWhereUniqueInput[]
    update?: LikesUpdateWithWhereUniqueWithoutPostInput | LikesUpdateWithWhereUniqueWithoutPostInput[]
    updateMany?: LikesUpdateManyWithWhereWithoutPostInput | LikesUpdateManyWithWhereWithoutPostInput[]
    deleteMany?: LikesScalarWhereInput | LikesScalarWhereInput[]
  }

  export type CommentsUpdateManyWithoutPostNestedInput = {
    create?: XOR<CommentsCreateWithoutPostInput, CommentsUncheckedCreateWithoutPostInput> | CommentsCreateWithoutPostInput[] | CommentsUncheckedCreateWithoutPostInput[]
    connectOrCreate?: CommentsCreateOrConnectWithoutPostInput | CommentsCreateOrConnectWithoutPostInput[]
    upsert?: CommentsUpsertWithWhereUniqueWithoutPostInput | CommentsUpsertWithWhereUniqueWithoutPostInput[]
    createMany?: CommentsCreateManyPostInputEnvelope
    set?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
    disconnect?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
    delete?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
    connect?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
    update?: CommentsUpdateWithWhereUniqueWithoutPostInput | CommentsUpdateWithWhereUniqueWithoutPostInput[]
    updateMany?: CommentsUpdateManyWithWhereWithoutPostInput | CommentsUpdateManyWithWhereWithoutPostInput[]
    deleteMany?: CommentsScalarWhereInput | CommentsScalarWhereInput[]
  }

  export type SharesUpdateManyWithoutPostNestedInput = {
    create?: XOR<SharesCreateWithoutPostInput, SharesUncheckedCreateWithoutPostInput> | SharesCreateWithoutPostInput[] | SharesUncheckedCreateWithoutPostInput[]
    connectOrCreate?: SharesCreateOrConnectWithoutPostInput | SharesCreateOrConnectWithoutPostInput[]
    upsert?: SharesUpsertWithWhereUniqueWithoutPostInput | SharesUpsertWithWhereUniqueWithoutPostInput[]
    createMany?: SharesCreateManyPostInputEnvelope
    set?: SharesWhereUniqueInput | SharesWhereUniqueInput[]
    disconnect?: SharesWhereUniqueInput | SharesWhereUniqueInput[]
    delete?: SharesWhereUniqueInput | SharesWhereUniqueInput[]
    connect?: SharesWhereUniqueInput | SharesWhereUniqueInput[]
    update?: SharesUpdateWithWhereUniqueWithoutPostInput | SharesUpdateWithWhereUniqueWithoutPostInput[]
    updateMany?: SharesUpdateManyWithWhereWithoutPostInput | SharesUpdateManyWithWhereWithoutPostInput[]
    deleteMany?: SharesScalarWhereInput | SharesScalarWhereInput[]
  }

  export type NewsFeedUpdateManyWithoutPostNestedInput = {
    create?: XOR<NewsFeedCreateWithoutPostInput, NewsFeedUncheckedCreateWithoutPostInput> | NewsFeedCreateWithoutPostInput[] | NewsFeedUncheckedCreateWithoutPostInput[]
    connectOrCreate?: NewsFeedCreateOrConnectWithoutPostInput | NewsFeedCreateOrConnectWithoutPostInput[]
    upsert?: NewsFeedUpsertWithWhereUniqueWithoutPostInput | NewsFeedUpsertWithWhereUniqueWithoutPostInput[]
    createMany?: NewsFeedCreateManyPostInputEnvelope
    set?: NewsFeedWhereUniqueInput | NewsFeedWhereUniqueInput[]
    disconnect?: NewsFeedWhereUniqueInput | NewsFeedWhereUniqueInput[]
    delete?: NewsFeedWhereUniqueInput | NewsFeedWhereUniqueInput[]
    connect?: NewsFeedWhereUniqueInput | NewsFeedWhereUniqueInput[]
    update?: NewsFeedUpdateWithWhereUniqueWithoutPostInput | NewsFeedUpdateWithWhereUniqueWithoutPostInput[]
    updateMany?: NewsFeedUpdateManyWithWhereWithoutPostInput | NewsFeedUpdateManyWithWhereWithoutPostInput[]
    deleteMany?: NewsFeedScalarWhereInput | NewsFeedScalarWhereInput[]
  }

  export type ViewerUpdateManyWithoutPostNestedInput = {
    create?: XOR<ViewerCreateWithoutPostInput, ViewerUncheckedCreateWithoutPostInput> | ViewerCreateWithoutPostInput[] | ViewerUncheckedCreateWithoutPostInput[]
    connectOrCreate?: ViewerCreateOrConnectWithoutPostInput | ViewerCreateOrConnectWithoutPostInput[]
    upsert?: ViewerUpsertWithWhereUniqueWithoutPostInput | ViewerUpsertWithWhereUniqueWithoutPostInput[]
    createMany?: ViewerCreateManyPostInputEnvelope
    set?: ViewerWhereUniqueInput | ViewerWhereUniqueInput[]
    disconnect?: ViewerWhereUniqueInput | ViewerWhereUniqueInput[]
    delete?: ViewerWhereUniqueInput | ViewerWhereUniqueInput[]
    connect?: ViewerWhereUniqueInput | ViewerWhereUniqueInput[]
    update?: ViewerUpdateWithWhereUniqueWithoutPostInput | ViewerUpdateWithWhereUniqueWithoutPostInput[]
    updateMany?: ViewerUpdateManyWithWhereWithoutPostInput | ViewerUpdateManyWithWhereWithoutPostInput[]
    deleteMany?: ViewerScalarWhereInput | ViewerScalarWhereInput[]
  }

  export type PostHashtagsUncheckedUpdateManyWithoutPostNestedInput = {
    create?: XOR<PostHashtagsCreateWithoutPostInput, PostHashtagsUncheckedCreateWithoutPostInput> | PostHashtagsCreateWithoutPostInput[] | PostHashtagsUncheckedCreateWithoutPostInput[]
    connectOrCreate?: PostHashtagsCreateOrConnectWithoutPostInput | PostHashtagsCreateOrConnectWithoutPostInput[]
    upsert?: PostHashtagsUpsertWithWhereUniqueWithoutPostInput | PostHashtagsUpsertWithWhereUniqueWithoutPostInput[]
    createMany?: PostHashtagsCreateManyPostInputEnvelope
    set?: PostHashtagsWhereUniqueInput | PostHashtagsWhereUniqueInput[]
    disconnect?: PostHashtagsWhereUniqueInput | PostHashtagsWhereUniqueInput[]
    delete?: PostHashtagsWhereUniqueInput | PostHashtagsWhereUniqueInput[]
    connect?: PostHashtagsWhereUniqueInput | PostHashtagsWhereUniqueInput[]
    update?: PostHashtagsUpdateWithWhereUniqueWithoutPostInput | PostHashtagsUpdateWithWhereUniqueWithoutPostInput[]
    updateMany?: PostHashtagsUpdateManyWithWhereWithoutPostInput | PostHashtagsUpdateManyWithWhereWithoutPostInput[]
    deleteMany?: PostHashtagsScalarWhereInput | PostHashtagsScalarWhereInput[]
  }

  export type PostTagFriendUncheckedUpdateManyWithoutPostNestedInput = {
    create?: XOR<PostTagFriendCreateWithoutPostInput, PostTagFriendUncheckedCreateWithoutPostInput> | PostTagFriendCreateWithoutPostInput[] | PostTagFriendUncheckedCreateWithoutPostInput[]
    connectOrCreate?: PostTagFriendCreateOrConnectWithoutPostInput | PostTagFriendCreateOrConnectWithoutPostInput[]
    upsert?: PostTagFriendUpsertWithWhereUniqueWithoutPostInput | PostTagFriendUpsertWithWhereUniqueWithoutPostInput[]
    createMany?: PostTagFriendCreateManyPostInputEnvelope
    set?: PostTagFriendWhereUniqueInput | PostTagFriendWhereUniqueInput[]
    disconnect?: PostTagFriendWhereUniqueInput | PostTagFriendWhereUniqueInput[]
    delete?: PostTagFriendWhereUniqueInput | PostTagFriendWhereUniqueInput[]
    connect?: PostTagFriendWhereUniqueInput | PostTagFriendWhereUniqueInput[]
    update?: PostTagFriendUpdateWithWhereUniqueWithoutPostInput | PostTagFriendUpdateWithWhereUniqueWithoutPostInput[]
    updateMany?: PostTagFriendUpdateManyWithWhereWithoutPostInput | PostTagFriendUpdateManyWithWhereWithoutPostInput[]
    deleteMany?: PostTagFriendScalarWhereInput | PostTagFriendScalarWhereInput[]
  }

  export type MediaUncheckedUpdateManyWithoutPostNestedInput = {
    create?: XOR<MediaCreateWithoutPostInput, MediaUncheckedCreateWithoutPostInput> | MediaCreateWithoutPostInput[] | MediaUncheckedCreateWithoutPostInput[]
    connectOrCreate?: MediaCreateOrConnectWithoutPostInput | MediaCreateOrConnectWithoutPostInput[]
    upsert?: MediaUpsertWithWhereUniqueWithoutPostInput | MediaUpsertWithWhereUniqueWithoutPostInput[]
    createMany?: MediaCreateManyPostInputEnvelope
    set?: MediaWhereUniqueInput | MediaWhereUniqueInput[]
    disconnect?: MediaWhereUniqueInput | MediaWhereUniqueInput[]
    delete?: MediaWhereUniqueInput | MediaWhereUniqueInput[]
    connect?: MediaWhereUniqueInput | MediaWhereUniqueInput[]
    update?: MediaUpdateWithWhereUniqueWithoutPostInput | MediaUpdateWithWhereUniqueWithoutPostInput[]
    updateMany?: MediaUpdateManyWithWhereWithoutPostInput | MediaUpdateManyWithWhereWithoutPostInput[]
    deleteMany?: MediaScalarWhereInput | MediaScalarWhereInput[]
  }

  export type LikesUncheckedUpdateManyWithoutPostNestedInput = {
    create?: XOR<LikesCreateWithoutPostInput, LikesUncheckedCreateWithoutPostInput> | LikesCreateWithoutPostInput[] | LikesUncheckedCreateWithoutPostInput[]
    connectOrCreate?: LikesCreateOrConnectWithoutPostInput | LikesCreateOrConnectWithoutPostInput[]
    upsert?: LikesUpsertWithWhereUniqueWithoutPostInput | LikesUpsertWithWhereUniqueWithoutPostInput[]
    createMany?: LikesCreateManyPostInputEnvelope
    set?: LikesWhereUniqueInput | LikesWhereUniqueInput[]
    disconnect?: LikesWhereUniqueInput | LikesWhereUniqueInput[]
    delete?: LikesWhereUniqueInput | LikesWhereUniqueInput[]
    connect?: LikesWhereUniqueInput | LikesWhereUniqueInput[]
    update?: LikesUpdateWithWhereUniqueWithoutPostInput | LikesUpdateWithWhereUniqueWithoutPostInput[]
    updateMany?: LikesUpdateManyWithWhereWithoutPostInput | LikesUpdateManyWithWhereWithoutPostInput[]
    deleteMany?: LikesScalarWhereInput | LikesScalarWhereInput[]
  }

  export type CommentsUncheckedUpdateManyWithoutPostNestedInput = {
    create?: XOR<CommentsCreateWithoutPostInput, CommentsUncheckedCreateWithoutPostInput> | CommentsCreateWithoutPostInput[] | CommentsUncheckedCreateWithoutPostInput[]
    connectOrCreate?: CommentsCreateOrConnectWithoutPostInput | CommentsCreateOrConnectWithoutPostInput[]
    upsert?: CommentsUpsertWithWhereUniqueWithoutPostInput | CommentsUpsertWithWhereUniqueWithoutPostInput[]
    createMany?: CommentsCreateManyPostInputEnvelope
    set?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
    disconnect?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
    delete?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
    connect?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
    update?: CommentsUpdateWithWhereUniqueWithoutPostInput | CommentsUpdateWithWhereUniqueWithoutPostInput[]
    updateMany?: CommentsUpdateManyWithWhereWithoutPostInput | CommentsUpdateManyWithWhereWithoutPostInput[]
    deleteMany?: CommentsScalarWhereInput | CommentsScalarWhereInput[]
  }

  export type SharesUncheckedUpdateManyWithoutPostNestedInput = {
    create?: XOR<SharesCreateWithoutPostInput, SharesUncheckedCreateWithoutPostInput> | SharesCreateWithoutPostInput[] | SharesUncheckedCreateWithoutPostInput[]
    connectOrCreate?: SharesCreateOrConnectWithoutPostInput | SharesCreateOrConnectWithoutPostInput[]
    upsert?: SharesUpsertWithWhereUniqueWithoutPostInput | SharesUpsertWithWhereUniqueWithoutPostInput[]
    createMany?: SharesCreateManyPostInputEnvelope
    set?: SharesWhereUniqueInput | SharesWhereUniqueInput[]
    disconnect?: SharesWhereUniqueInput | SharesWhereUniqueInput[]
    delete?: SharesWhereUniqueInput | SharesWhereUniqueInput[]
    connect?: SharesWhereUniqueInput | SharesWhereUniqueInput[]
    update?: SharesUpdateWithWhereUniqueWithoutPostInput | SharesUpdateWithWhereUniqueWithoutPostInput[]
    updateMany?: SharesUpdateManyWithWhereWithoutPostInput | SharesUpdateManyWithWhereWithoutPostInput[]
    deleteMany?: SharesScalarWhereInput | SharesScalarWhereInput[]
  }

  export type NewsFeedUncheckedUpdateManyWithoutPostNestedInput = {
    create?: XOR<NewsFeedCreateWithoutPostInput, NewsFeedUncheckedCreateWithoutPostInput> | NewsFeedCreateWithoutPostInput[] | NewsFeedUncheckedCreateWithoutPostInput[]
    connectOrCreate?: NewsFeedCreateOrConnectWithoutPostInput | NewsFeedCreateOrConnectWithoutPostInput[]
    upsert?: NewsFeedUpsertWithWhereUniqueWithoutPostInput | NewsFeedUpsertWithWhereUniqueWithoutPostInput[]
    createMany?: NewsFeedCreateManyPostInputEnvelope
    set?: NewsFeedWhereUniqueInput | NewsFeedWhereUniqueInput[]
    disconnect?: NewsFeedWhereUniqueInput | NewsFeedWhereUniqueInput[]
    delete?: NewsFeedWhereUniqueInput | NewsFeedWhereUniqueInput[]
    connect?: NewsFeedWhereUniqueInput | NewsFeedWhereUniqueInput[]
    update?: NewsFeedUpdateWithWhereUniqueWithoutPostInput | NewsFeedUpdateWithWhereUniqueWithoutPostInput[]
    updateMany?: NewsFeedUpdateManyWithWhereWithoutPostInput | NewsFeedUpdateManyWithWhereWithoutPostInput[]
    deleteMany?: NewsFeedScalarWhereInput | NewsFeedScalarWhereInput[]
  }

  export type ViewerUncheckedUpdateManyWithoutPostNestedInput = {
    create?: XOR<ViewerCreateWithoutPostInput, ViewerUncheckedCreateWithoutPostInput> | ViewerCreateWithoutPostInput[] | ViewerUncheckedCreateWithoutPostInput[]
    connectOrCreate?: ViewerCreateOrConnectWithoutPostInput | ViewerCreateOrConnectWithoutPostInput[]
    upsert?: ViewerUpsertWithWhereUniqueWithoutPostInput | ViewerUpsertWithWhereUniqueWithoutPostInput[]
    createMany?: ViewerCreateManyPostInputEnvelope
    set?: ViewerWhereUniqueInput | ViewerWhereUniqueInput[]
    disconnect?: ViewerWhereUniqueInput | ViewerWhereUniqueInput[]
    delete?: ViewerWhereUniqueInput | ViewerWhereUniqueInput[]
    connect?: ViewerWhereUniqueInput | ViewerWhereUniqueInput[]
    update?: ViewerUpdateWithWhereUniqueWithoutPostInput | ViewerUpdateWithWhereUniqueWithoutPostInput[]
    updateMany?: ViewerUpdateManyWithWhereWithoutPostInput | ViewerUpdateManyWithWhereWithoutPostInput[]
    deleteMany?: ViewerScalarWhereInput | ViewerScalarWhereInput[]
  }

  export type UsersCreateNestedOneWithoutViewedPostsInput = {
    create?: XOR<UsersCreateWithoutViewedPostsInput, UsersUncheckedCreateWithoutViewedPostsInput>
    connectOrCreate?: UsersCreateOrConnectWithoutViewedPostsInput
    connect?: UsersWhereUniqueInput
  }

  export type PostsCreateNestedOneWithoutViewersInput = {
    create?: XOR<PostsCreateWithoutViewersInput, PostsUncheckedCreateWithoutViewersInput>
    connectOrCreate?: PostsCreateOrConnectWithoutViewersInput
    connect?: PostsWhereUniqueInput
  }

  export type UsersUpdateOneRequiredWithoutViewedPostsNestedInput = {
    create?: XOR<UsersCreateWithoutViewedPostsInput, UsersUncheckedCreateWithoutViewedPostsInput>
    connectOrCreate?: UsersCreateOrConnectWithoutViewedPostsInput
    upsert?: UsersUpsertWithoutViewedPostsInput
    connect?: UsersWhereUniqueInput
    update?: XOR<XOR<UsersUpdateToOneWithWhereWithoutViewedPostsInput, UsersUpdateWithoutViewedPostsInput>, UsersUncheckedUpdateWithoutViewedPostsInput>
  }

  export type PostsUpdateOneRequiredWithoutViewersNestedInput = {
    create?: XOR<PostsCreateWithoutViewersInput, PostsUncheckedCreateWithoutViewersInput>
    connectOrCreate?: PostsCreateOrConnectWithoutViewersInput
    upsert?: PostsUpsertWithoutViewersInput
    connect?: PostsWhereUniqueInput
    update?: XOR<XOR<PostsUpdateToOneWithWhereWithoutViewersInput, PostsUpdateWithoutViewersInput>, PostsUncheckedUpdateWithoutViewersInput>
  }

  export type PostHashtagsCreateNestedManyWithoutHashtagInput = {
    create?: XOR<PostHashtagsCreateWithoutHashtagInput, PostHashtagsUncheckedCreateWithoutHashtagInput> | PostHashtagsCreateWithoutHashtagInput[] | PostHashtagsUncheckedCreateWithoutHashtagInput[]
    connectOrCreate?: PostHashtagsCreateOrConnectWithoutHashtagInput | PostHashtagsCreateOrConnectWithoutHashtagInput[]
    createMany?: PostHashtagsCreateManyHashtagInputEnvelope
    connect?: PostHashtagsWhereUniqueInput | PostHashtagsWhereUniqueInput[]
  }

  export type PostHashtagsUncheckedCreateNestedManyWithoutHashtagInput = {
    create?: XOR<PostHashtagsCreateWithoutHashtagInput, PostHashtagsUncheckedCreateWithoutHashtagInput> | PostHashtagsCreateWithoutHashtagInput[] | PostHashtagsUncheckedCreateWithoutHashtagInput[]
    connectOrCreate?: PostHashtagsCreateOrConnectWithoutHashtagInput | PostHashtagsCreateOrConnectWithoutHashtagInput[]
    createMany?: PostHashtagsCreateManyHashtagInputEnvelope
    connect?: PostHashtagsWhereUniqueInput | PostHashtagsWhereUniqueInput[]
  }

  export type PostHashtagsUpdateManyWithoutHashtagNestedInput = {
    create?: XOR<PostHashtagsCreateWithoutHashtagInput, PostHashtagsUncheckedCreateWithoutHashtagInput> | PostHashtagsCreateWithoutHashtagInput[] | PostHashtagsUncheckedCreateWithoutHashtagInput[]
    connectOrCreate?: PostHashtagsCreateOrConnectWithoutHashtagInput | PostHashtagsCreateOrConnectWithoutHashtagInput[]
    upsert?: PostHashtagsUpsertWithWhereUniqueWithoutHashtagInput | PostHashtagsUpsertWithWhereUniqueWithoutHashtagInput[]
    createMany?: PostHashtagsCreateManyHashtagInputEnvelope
    set?: PostHashtagsWhereUniqueInput | PostHashtagsWhereUniqueInput[]
    disconnect?: PostHashtagsWhereUniqueInput | PostHashtagsWhereUniqueInput[]
    delete?: PostHashtagsWhereUniqueInput | PostHashtagsWhereUniqueInput[]
    connect?: PostHashtagsWhereUniqueInput | PostHashtagsWhereUniqueInput[]
    update?: PostHashtagsUpdateWithWhereUniqueWithoutHashtagInput | PostHashtagsUpdateWithWhereUniqueWithoutHashtagInput[]
    updateMany?: PostHashtagsUpdateManyWithWhereWithoutHashtagInput | PostHashtagsUpdateManyWithWhereWithoutHashtagInput[]
    deleteMany?: PostHashtagsScalarWhereInput | PostHashtagsScalarWhereInput[]
  }

  export type PostHashtagsUncheckedUpdateManyWithoutHashtagNestedInput = {
    create?: XOR<PostHashtagsCreateWithoutHashtagInput, PostHashtagsUncheckedCreateWithoutHashtagInput> | PostHashtagsCreateWithoutHashtagInput[] | PostHashtagsUncheckedCreateWithoutHashtagInput[]
    connectOrCreate?: PostHashtagsCreateOrConnectWithoutHashtagInput | PostHashtagsCreateOrConnectWithoutHashtagInput[]
    upsert?: PostHashtagsUpsertWithWhereUniqueWithoutHashtagInput | PostHashtagsUpsertWithWhereUniqueWithoutHashtagInput[]
    createMany?: PostHashtagsCreateManyHashtagInputEnvelope
    set?: PostHashtagsWhereUniqueInput | PostHashtagsWhereUniqueInput[]
    disconnect?: PostHashtagsWhereUniqueInput | PostHashtagsWhereUniqueInput[]
    delete?: PostHashtagsWhereUniqueInput | PostHashtagsWhereUniqueInput[]
    connect?: PostHashtagsWhereUniqueInput | PostHashtagsWhereUniqueInput[]
    update?: PostHashtagsUpdateWithWhereUniqueWithoutHashtagInput | PostHashtagsUpdateWithWhereUniqueWithoutHashtagInput[]
    updateMany?: PostHashtagsUpdateManyWithWhereWithoutHashtagInput | PostHashtagsUpdateManyWithWhereWithoutHashtagInput[]
    deleteMany?: PostHashtagsScalarWhereInput | PostHashtagsScalarWhereInput[]
  }

  export type PostsCreateNestedOneWithoutHashtagsInput = {
    create?: XOR<PostsCreateWithoutHashtagsInput, PostsUncheckedCreateWithoutHashtagsInput>
    connectOrCreate?: PostsCreateOrConnectWithoutHashtagsInput
    connect?: PostsWhereUniqueInput
  }

  export type HashtagCreateNestedOneWithoutPostsInput = {
    create?: XOR<HashtagCreateWithoutPostsInput, HashtagUncheckedCreateWithoutPostsInput>
    connectOrCreate?: HashtagCreateOrConnectWithoutPostsInput
    connect?: HashtagWhereUniqueInput
  }

  export type PostsUpdateOneRequiredWithoutHashtagsNestedInput = {
    create?: XOR<PostsCreateWithoutHashtagsInput, PostsUncheckedCreateWithoutHashtagsInput>
    connectOrCreate?: PostsCreateOrConnectWithoutHashtagsInput
    upsert?: PostsUpsertWithoutHashtagsInput
    connect?: PostsWhereUniqueInput
    update?: XOR<XOR<PostsUpdateToOneWithWhereWithoutHashtagsInput, PostsUpdateWithoutHashtagsInput>, PostsUncheckedUpdateWithoutHashtagsInput>
  }

  export type HashtagUpdateOneRequiredWithoutPostsNestedInput = {
    create?: XOR<HashtagCreateWithoutPostsInput, HashtagUncheckedCreateWithoutPostsInput>
    connectOrCreate?: HashtagCreateOrConnectWithoutPostsInput
    upsert?: HashtagUpsertWithoutPostsInput
    connect?: HashtagWhereUniqueInput
    update?: XOR<XOR<HashtagUpdateToOneWithWhereWithoutPostsInput, HashtagUpdateWithoutPostsInput>, HashtagUncheckedUpdateWithoutPostsInput>
  }

  export type PostsCreateNestedOneWithoutTaggedFriendsInput = {
    create?: XOR<PostsCreateWithoutTaggedFriendsInput, PostsUncheckedCreateWithoutTaggedFriendsInput>
    connectOrCreate?: PostsCreateOrConnectWithoutTaggedFriendsInput
    connect?: PostsWhereUniqueInput
  }

  export type UsersCreateNestedOneWithoutTaggedInPostsInput = {
    create?: XOR<UsersCreateWithoutTaggedInPostsInput, UsersUncheckedCreateWithoutTaggedInPostsInput>
    connectOrCreate?: UsersCreateOrConnectWithoutTaggedInPostsInput
    connect?: UsersWhereUniqueInput
  }

  export type UsersCreateNestedOneWithoutTaggedByPostsInput = {
    create?: XOR<UsersCreateWithoutTaggedByPostsInput, UsersUncheckedCreateWithoutTaggedByPostsInput>
    connectOrCreate?: UsersCreateOrConnectWithoutTaggedByPostsInput
    connect?: UsersWhereUniqueInput
  }

  export type PostsUpdateOneRequiredWithoutTaggedFriendsNestedInput = {
    create?: XOR<PostsCreateWithoutTaggedFriendsInput, PostsUncheckedCreateWithoutTaggedFriendsInput>
    connectOrCreate?: PostsCreateOrConnectWithoutTaggedFriendsInput
    upsert?: PostsUpsertWithoutTaggedFriendsInput
    connect?: PostsWhereUniqueInput
    update?: XOR<XOR<PostsUpdateToOneWithWhereWithoutTaggedFriendsInput, PostsUpdateWithoutTaggedFriendsInput>, PostsUncheckedUpdateWithoutTaggedFriendsInput>
  }

  export type UsersUpdateOneRequiredWithoutTaggedInPostsNestedInput = {
    create?: XOR<UsersCreateWithoutTaggedInPostsInput, UsersUncheckedCreateWithoutTaggedInPostsInput>
    connectOrCreate?: UsersCreateOrConnectWithoutTaggedInPostsInput
    upsert?: UsersUpsertWithoutTaggedInPostsInput
    connect?: UsersWhereUniqueInput
    update?: XOR<XOR<UsersUpdateToOneWithWhereWithoutTaggedInPostsInput, UsersUpdateWithoutTaggedInPostsInput>, UsersUncheckedUpdateWithoutTaggedInPostsInput>
  }

  export type UsersUpdateOneRequiredWithoutTaggedByPostsNestedInput = {
    create?: XOR<UsersCreateWithoutTaggedByPostsInput, UsersUncheckedCreateWithoutTaggedByPostsInput>
    connectOrCreate?: UsersCreateOrConnectWithoutTaggedByPostsInput
    upsert?: UsersUpsertWithoutTaggedByPostsInput
    connect?: UsersWhereUniqueInput
    update?: XOR<XOR<UsersUpdateToOneWithWhereWithoutTaggedByPostsInput, UsersUpdateWithoutTaggedByPostsInput>, UsersUncheckedUpdateWithoutTaggedByPostsInput>
  }

  export type PostsCreateNestedOneWithoutMediaInput = {
    create?: XOR<PostsCreateWithoutMediaInput, PostsUncheckedCreateWithoutMediaInput>
    connectOrCreate?: PostsCreateOrConnectWithoutMediaInput
    connect?: PostsWhereUniqueInput
  }

  export type EnumMediaTypeEnumFieldUpdateOperationsInput = {
    set?: $Enums.MediaTypeEnum
  }

  export type PostsUpdateOneRequiredWithoutMediaNestedInput = {
    create?: XOR<PostsCreateWithoutMediaInput, PostsUncheckedCreateWithoutMediaInput>
    connectOrCreate?: PostsCreateOrConnectWithoutMediaInput
    upsert?: PostsUpsertWithoutMediaInput
    connect?: PostsWhereUniqueInput
    update?: XOR<XOR<PostsUpdateToOneWithWhereWithoutMediaInput, PostsUpdateWithoutMediaInput>, PostsUncheckedUpdateWithoutMediaInput>
  }

  export type UsersCreateNestedOneWithoutLikesInput = {
    create?: XOR<UsersCreateWithoutLikesInput, UsersUncheckedCreateWithoutLikesInput>
    connectOrCreate?: UsersCreateOrConnectWithoutLikesInput
    connect?: UsersWhereUniqueInput
  }

  export type PostsCreateNestedOneWithoutLikesInput = {
    create?: XOR<PostsCreateWithoutLikesInput, PostsUncheckedCreateWithoutLikesInput>
    connectOrCreate?: PostsCreateOrConnectWithoutLikesInput
    connect?: PostsWhereUniqueInput
  }

  export type UsersUpdateOneWithoutLikesNestedInput = {
    create?: XOR<UsersCreateWithoutLikesInput, UsersUncheckedCreateWithoutLikesInput>
    connectOrCreate?: UsersCreateOrConnectWithoutLikesInput
    upsert?: UsersUpsertWithoutLikesInput
    disconnect?: UsersWhereInput | boolean
    delete?: UsersWhereInput | boolean
    connect?: UsersWhereUniqueInput
    update?: XOR<XOR<UsersUpdateToOneWithWhereWithoutLikesInput, UsersUpdateWithoutLikesInput>, UsersUncheckedUpdateWithoutLikesInput>
  }

  export type PostsUpdateOneRequiredWithoutLikesNestedInput = {
    create?: XOR<PostsCreateWithoutLikesInput, PostsUncheckedCreateWithoutLikesInput>
    connectOrCreate?: PostsCreateOrConnectWithoutLikesInput
    upsert?: PostsUpsertWithoutLikesInput
    connect?: PostsWhereUniqueInput
    update?: XOR<XOR<PostsUpdateToOneWithWhereWithoutLikesInput, PostsUpdateWithoutLikesInput>, PostsUncheckedUpdateWithoutLikesInput>
  }

  export type UsersCreateNestedOneWithoutCommentsInput = {
    create?: XOR<UsersCreateWithoutCommentsInput, UsersUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: UsersCreateOrConnectWithoutCommentsInput
    connect?: UsersWhereUniqueInput
  }

  export type PostsCreateNestedOneWithoutCommentsInput = {
    create?: XOR<PostsCreateWithoutCommentsInput, PostsUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: PostsCreateOrConnectWithoutCommentsInput
    connect?: PostsWhereUniqueInput
  }

  export type CommentsCreateNestedOneWithoutRepliesInput = {
    create?: XOR<CommentsCreateWithoutRepliesInput, CommentsUncheckedCreateWithoutRepliesInput>
    connectOrCreate?: CommentsCreateOrConnectWithoutRepliesInput
    connect?: CommentsWhereUniqueInput
  }

  export type CommentsCreateNestedManyWithoutParentInput = {
    create?: XOR<CommentsCreateWithoutParentInput, CommentsUncheckedCreateWithoutParentInput> | CommentsCreateWithoutParentInput[] | CommentsUncheckedCreateWithoutParentInput[]
    connectOrCreate?: CommentsCreateOrConnectWithoutParentInput | CommentsCreateOrConnectWithoutParentInput[]
    createMany?: CommentsCreateManyParentInputEnvelope
    connect?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
  }

  export type CommentsUncheckedCreateNestedManyWithoutParentInput = {
    create?: XOR<CommentsCreateWithoutParentInput, CommentsUncheckedCreateWithoutParentInput> | CommentsCreateWithoutParentInput[] | CommentsUncheckedCreateWithoutParentInput[]
    connectOrCreate?: CommentsCreateOrConnectWithoutParentInput | CommentsCreateOrConnectWithoutParentInput[]
    createMany?: CommentsCreateManyParentInputEnvelope
    connect?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
  }

  export type UsersUpdateOneWithoutCommentsNestedInput = {
    create?: XOR<UsersCreateWithoutCommentsInput, UsersUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: UsersCreateOrConnectWithoutCommentsInput
    upsert?: UsersUpsertWithoutCommentsInput
    disconnect?: UsersWhereInput | boolean
    delete?: UsersWhereInput | boolean
    connect?: UsersWhereUniqueInput
    update?: XOR<XOR<UsersUpdateToOneWithWhereWithoutCommentsInput, UsersUpdateWithoutCommentsInput>, UsersUncheckedUpdateWithoutCommentsInput>
  }

  export type PostsUpdateOneRequiredWithoutCommentsNestedInput = {
    create?: XOR<PostsCreateWithoutCommentsInput, PostsUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: PostsCreateOrConnectWithoutCommentsInput
    upsert?: PostsUpsertWithoutCommentsInput
    connect?: PostsWhereUniqueInput
    update?: XOR<XOR<PostsUpdateToOneWithWhereWithoutCommentsInput, PostsUpdateWithoutCommentsInput>, PostsUncheckedUpdateWithoutCommentsInput>
  }

  export type CommentsUpdateOneWithoutRepliesNestedInput = {
    create?: XOR<CommentsCreateWithoutRepliesInput, CommentsUncheckedCreateWithoutRepliesInput>
    connectOrCreate?: CommentsCreateOrConnectWithoutRepliesInput
    upsert?: CommentsUpsertWithoutRepliesInput
    disconnect?: CommentsWhereInput | boolean
    delete?: CommentsWhereInput | boolean
    connect?: CommentsWhereUniqueInput
    update?: XOR<XOR<CommentsUpdateToOneWithWhereWithoutRepliesInput, CommentsUpdateWithoutRepliesInput>, CommentsUncheckedUpdateWithoutRepliesInput>
  }

  export type CommentsUpdateManyWithoutParentNestedInput = {
    create?: XOR<CommentsCreateWithoutParentInput, CommentsUncheckedCreateWithoutParentInput> | CommentsCreateWithoutParentInput[] | CommentsUncheckedCreateWithoutParentInput[]
    connectOrCreate?: CommentsCreateOrConnectWithoutParentInput | CommentsCreateOrConnectWithoutParentInput[]
    upsert?: CommentsUpsertWithWhereUniqueWithoutParentInput | CommentsUpsertWithWhereUniqueWithoutParentInput[]
    createMany?: CommentsCreateManyParentInputEnvelope
    set?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
    disconnect?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
    delete?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
    connect?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
    update?: CommentsUpdateWithWhereUniqueWithoutParentInput | CommentsUpdateWithWhereUniqueWithoutParentInput[]
    updateMany?: CommentsUpdateManyWithWhereWithoutParentInput | CommentsUpdateManyWithWhereWithoutParentInput[]
    deleteMany?: CommentsScalarWhereInput | CommentsScalarWhereInput[]
  }

  export type CommentsUncheckedUpdateManyWithoutParentNestedInput = {
    create?: XOR<CommentsCreateWithoutParentInput, CommentsUncheckedCreateWithoutParentInput> | CommentsCreateWithoutParentInput[] | CommentsUncheckedCreateWithoutParentInput[]
    connectOrCreate?: CommentsCreateOrConnectWithoutParentInput | CommentsCreateOrConnectWithoutParentInput[]
    upsert?: CommentsUpsertWithWhereUniqueWithoutParentInput | CommentsUpsertWithWhereUniqueWithoutParentInput[]
    createMany?: CommentsCreateManyParentInputEnvelope
    set?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
    disconnect?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
    delete?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
    connect?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
    update?: CommentsUpdateWithWhereUniqueWithoutParentInput | CommentsUpdateWithWhereUniqueWithoutParentInput[]
    updateMany?: CommentsUpdateManyWithWhereWithoutParentInput | CommentsUpdateManyWithWhereWithoutParentInput[]
    deleteMany?: CommentsScalarWhereInput | CommentsScalarWhereInput[]
  }

  export type UsersCreateNestedOneWithoutSharesInput = {
    create?: XOR<UsersCreateWithoutSharesInput, UsersUncheckedCreateWithoutSharesInput>
    connectOrCreate?: UsersCreateOrConnectWithoutSharesInput
    connect?: UsersWhereUniqueInput
  }

  export type PostsCreateNestedOneWithoutSharesInput = {
    create?: XOR<PostsCreateWithoutSharesInput, PostsUncheckedCreateWithoutSharesInput>
    connectOrCreate?: PostsCreateOrConnectWithoutSharesInput
    connect?: PostsWhereUniqueInput
  }

  export type UsersUpdateOneWithoutSharesNestedInput = {
    create?: XOR<UsersCreateWithoutSharesInput, UsersUncheckedCreateWithoutSharesInput>
    connectOrCreate?: UsersCreateOrConnectWithoutSharesInput
    upsert?: UsersUpsertWithoutSharesInput
    disconnect?: UsersWhereInput | boolean
    delete?: UsersWhereInput | boolean
    connect?: UsersWhereUniqueInput
    update?: XOR<XOR<UsersUpdateToOneWithWhereWithoutSharesInput, UsersUpdateWithoutSharesInput>, UsersUncheckedUpdateWithoutSharesInput>
  }

  export type PostsUpdateOneRequiredWithoutSharesNestedInput = {
    create?: XOR<PostsCreateWithoutSharesInput, PostsUncheckedCreateWithoutSharesInput>
    connectOrCreate?: PostsCreateOrConnectWithoutSharesInput
    upsert?: PostsUpsertWithoutSharesInput
    connect?: PostsWhereUniqueInput
    update?: XOR<XOR<PostsUpdateToOneWithWhereWithoutSharesInput, PostsUpdateWithoutSharesInput>, PostsUncheckedUpdateWithoutSharesInput>
  }

  export type UsersCreateNestedOneWithoutNewsFeedInput = {
    create?: XOR<UsersCreateWithoutNewsFeedInput, UsersUncheckedCreateWithoutNewsFeedInput>
    connectOrCreate?: UsersCreateOrConnectWithoutNewsFeedInput
    connect?: UsersWhereUniqueInput
  }

  export type PostsCreateNestedOneWithoutNewsFeedInput = {
    create?: XOR<PostsCreateWithoutNewsFeedInput, PostsUncheckedCreateWithoutNewsFeedInput>
    connectOrCreate?: PostsCreateOrConnectWithoutNewsFeedInput
    connect?: PostsWhereUniqueInput
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type UsersUpdateOneWithoutNewsFeedNestedInput = {
    create?: XOR<UsersCreateWithoutNewsFeedInput, UsersUncheckedCreateWithoutNewsFeedInput>
    connectOrCreate?: UsersCreateOrConnectWithoutNewsFeedInput
    upsert?: UsersUpsertWithoutNewsFeedInput
    disconnect?: UsersWhereInput | boolean
    delete?: UsersWhereInput | boolean
    connect?: UsersWhereUniqueInput
    update?: XOR<XOR<UsersUpdateToOneWithWhereWithoutNewsFeedInput, UsersUpdateWithoutNewsFeedInput>, UsersUncheckedUpdateWithoutNewsFeedInput>
  }

  export type PostsUpdateOneRequiredWithoutNewsFeedNestedInput = {
    create?: XOR<PostsCreateWithoutNewsFeedInput, PostsUncheckedCreateWithoutNewsFeedInput>
    connectOrCreate?: PostsCreateOrConnectWithoutNewsFeedInput
    upsert?: PostsUpsertWithoutNewsFeedInput
    connect?: PostsWhereUniqueInput
    update?: XOR<XOR<PostsUpdateToOneWithWhereWithoutNewsFeedInput, PostsUpdateWithoutNewsFeedInput>, PostsUncheckedUpdateWithoutNewsFeedInput>
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

  export type NestedEnumPostTypeEnumFilter<$PrismaModel = never> = {
    equals?: $Enums.PostTypeEnum | EnumPostTypeEnumFieldRefInput<$PrismaModel>
    in?: $Enums.PostTypeEnum[] | ListEnumPostTypeEnumFieldRefInput<$PrismaModel>
    notIn?: $Enums.PostTypeEnum[] | ListEnumPostTypeEnumFieldRefInput<$PrismaModel>
    not?: NestedEnumPostTypeEnumFilter<$PrismaModel> | $Enums.PostTypeEnum
  }

  export type NestedEnumVisibilityEnumFilter<$PrismaModel = never> = {
    equals?: $Enums.VisibilityEnum | EnumVisibilityEnumFieldRefInput<$PrismaModel>
    in?: $Enums.VisibilityEnum[] | ListEnumVisibilityEnumFieldRefInput<$PrismaModel>
    notIn?: $Enums.VisibilityEnum[] | ListEnumVisibilityEnumFieldRefInput<$PrismaModel>
    not?: NestedEnumVisibilityEnumFilter<$PrismaModel> | $Enums.VisibilityEnum
  }

  export type NestedEnumCensorEnumFilter<$PrismaModel = never> = {
    equals?: $Enums.CensorEnum | EnumCensorEnumFieldRefInput<$PrismaModel>
    in?: $Enums.CensorEnum[] | ListEnumCensorEnumFieldRefInput<$PrismaModel>
    notIn?: $Enums.CensorEnum[] | ListEnumCensorEnumFieldRefInput<$PrismaModel>
    not?: NestedEnumCensorEnumFilter<$PrismaModel> | $Enums.CensorEnum
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

  export type NestedEnumPostTypeEnumWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PostTypeEnum | EnumPostTypeEnumFieldRefInput<$PrismaModel>
    in?: $Enums.PostTypeEnum[] | ListEnumPostTypeEnumFieldRefInput<$PrismaModel>
    notIn?: $Enums.PostTypeEnum[] | ListEnumPostTypeEnumFieldRefInput<$PrismaModel>
    not?: NestedEnumPostTypeEnumWithAggregatesFilter<$PrismaModel> | $Enums.PostTypeEnum
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPostTypeEnumFilter<$PrismaModel>
    _max?: NestedEnumPostTypeEnumFilter<$PrismaModel>
  }

  export type NestedEnumVisibilityEnumWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.VisibilityEnum | EnumVisibilityEnumFieldRefInput<$PrismaModel>
    in?: $Enums.VisibilityEnum[] | ListEnumVisibilityEnumFieldRefInput<$PrismaModel>
    notIn?: $Enums.VisibilityEnum[] | ListEnumVisibilityEnumFieldRefInput<$PrismaModel>
    not?: NestedEnumVisibilityEnumWithAggregatesFilter<$PrismaModel> | $Enums.VisibilityEnum
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumVisibilityEnumFilter<$PrismaModel>
    _max?: NestedEnumVisibilityEnumFilter<$PrismaModel>
  }

  export type NestedEnumCensorEnumWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CensorEnum | EnumCensorEnumFieldRefInput<$PrismaModel>
    in?: $Enums.CensorEnum[] | ListEnumCensorEnumFieldRefInput<$PrismaModel>
    notIn?: $Enums.CensorEnum[] | ListEnumCensorEnumFieldRefInput<$PrismaModel>
    not?: NestedEnumCensorEnumWithAggregatesFilter<$PrismaModel> | $Enums.CensorEnum
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCensorEnumFilter<$PrismaModel>
    _max?: NestedEnumCensorEnumFilter<$PrismaModel>
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

  export type NestedEnumMediaTypeEnumFilter<$PrismaModel = never> = {
    equals?: $Enums.MediaTypeEnum | EnumMediaTypeEnumFieldRefInput<$PrismaModel>
    in?: $Enums.MediaTypeEnum[] | ListEnumMediaTypeEnumFieldRefInput<$PrismaModel>
    notIn?: $Enums.MediaTypeEnum[] | ListEnumMediaTypeEnumFieldRefInput<$PrismaModel>
    not?: NestedEnumMediaTypeEnumFilter<$PrismaModel> | $Enums.MediaTypeEnum
  }

  export type NestedEnumMediaTypeEnumWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MediaTypeEnum | EnumMediaTypeEnumFieldRefInput<$PrismaModel>
    in?: $Enums.MediaTypeEnum[] | ListEnumMediaTypeEnumFieldRefInput<$PrismaModel>
    notIn?: $Enums.MediaTypeEnum[] | ListEnumMediaTypeEnumFieldRefInput<$PrismaModel>
    not?: NestedEnumMediaTypeEnumWithAggregatesFilter<$PrismaModel> | $Enums.MediaTypeEnum
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMediaTypeEnumFilter<$PrismaModel>
    _max?: NestedEnumMediaTypeEnumFilter<$PrismaModel>
  }

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type PostsCreateWithoutUserInput = {
    id?: string
    title?: string | null
    content?: string | null
    postType?: $Enums.PostTypeEnum
    visibility?: $Enums.VisibilityEnum
    censor?: $Enums.CensorEnum
    shareCount?: number
    likeCount?: number
    commentCount?: number
    createdAt?: Date | string
    expired_at?: Date | string | null
    updatedAt?: Date | string
    hashtags?: PostHashtagsCreateNestedManyWithoutPostInput
    taggedFriends?: PostTagFriendCreateNestedManyWithoutPostInput
    media?: MediaCreateNestedManyWithoutPostInput
    likes?: LikesCreateNestedManyWithoutPostInput
    comments?: CommentsCreateNestedManyWithoutPostInput
    shares?: SharesCreateNestedManyWithoutPostInput
    newsFeed?: NewsFeedCreateNestedManyWithoutPostInput
    viewers?: ViewerCreateNestedManyWithoutPostInput
  }

  export type PostsUncheckedCreateWithoutUserInput = {
    id?: string
    title?: string | null
    content?: string | null
    postType?: $Enums.PostTypeEnum
    visibility?: $Enums.VisibilityEnum
    censor?: $Enums.CensorEnum
    shareCount?: number
    likeCount?: number
    commentCount?: number
    createdAt?: Date | string
    expired_at?: Date | string | null
    updatedAt?: Date | string
    hashtags?: PostHashtagsUncheckedCreateNestedManyWithoutPostInput
    taggedFriends?: PostTagFriendUncheckedCreateNestedManyWithoutPostInput
    media?: MediaUncheckedCreateNestedManyWithoutPostInput
    likes?: LikesUncheckedCreateNestedManyWithoutPostInput
    comments?: CommentsUncheckedCreateNestedManyWithoutPostInput
    shares?: SharesUncheckedCreateNestedManyWithoutPostInput
    newsFeed?: NewsFeedUncheckedCreateNestedManyWithoutPostInput
    viewers?: ViewerUncheckedCreateNestedManyWithoutPostInput
  }

  export type PostsCreateOrConnectWithoutUserInput = {
    where: PostsWhereUniqueInput
    create: XOR<PostsCreateWithoutUserInput, PostsUncheckedCreateWithoutUserInput>
  }

  export type PostsCreateManyUserInputEnvelope = {
    data: PostsCreateManyUserInput | PostsCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type LikesCreateWithoutUserInput = {
    id?: string
    createdAt?: Date | string
    post: PostsCreateNestedOneWithoutLikesInput
  }

  export type LikesUncheckedCreateWithoutUserInput = {
    id?: string
    postId: string
    createdAt?: Date | string
  }

  export type LikesCreateOrConnectWithoutUserInput = {
    where: LikesWhereUniqueInput
    create: XOR<LikesCreateWithoutUserInput, LikesUncheckedCreateWithoutUserInput>
  }

  export type LikesCreateManyUserInputEnvelope = {
    data: LikesCreateManyUserInput | LikesCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type CommentsCreateWithoutUserInput = {
    id?: string
    content: string
    createdAt?: Date | string
    post: PostsCreateNestedOneWithoutCommentsInput
    parent?: CommentsCreateNestedOneWithoutRepliesInput
    replies?: CommentsCreateNestedManyWithoutParentInput
  }

  export type CommentsUncheckedCreateWithoutUserInput = {
    id?: string
    postId: string
    parentId?: string | null
    content: string
    createdAt?: Date | string
    replies?: CommentsUncheckedCreateNestedManyWithoutParentInput
  }

  export type CommentsCreateOrConnectWithoutUserInput = {
    where: CommentsWhereUniqueInput
    create: XOR<CommentsCreateWithoutUserInput, CommentsUncheckedCreateWithoutUserInput>
  }

  export type CommentsCreateManyUserInputEnvelope = {
    data: CommentsCreateManyUserInput | CommentsCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type SharesCreateWithoutUserInput = {
    id?: string
    createdAt?: Date | string
    post: PostsCreateNestedOneWithoutSharesInput
  }

  export type SharesUncheckedCreateWithoutUserInput = {
    id?: string
    postId: string
    createdAt?: Date | string
  }

  export type SharesCreateOrConnectWithoutUserInput = {
    where: SharesWhereUniqueInput
    create: XOR<SharesCreateWithoutUserInput, SharesUncheckedCreateWithoutUserInput>
  }

  export type SharesCreateManyUserInputEnvelope = {
    data: SharesCreateManyUserInput | SharesCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type NewsFeedCreateWithoutUserInput = {
    id?: string
    reason?: string | null
    score: number
    isNew?: boolean | null
    createdAt?: Date | string
    post: PostsCreateNestedOneWithoutNewsFeedInput
  }

  export type NewsFeedUncheckedCreateWithoutUserInput = {
    id?: string
    postId: string
    reason?: string | null
    score: number
    isNew?: boolean | null
    createdAt?: Date | string
  }

  export type NewsFeedCreateOrConnectWithoutUserInput = {
    where: NewsFeedWhereUniqueInput
    create: XOR<NewsFeedCreateWithoutUserInput, NewsFeedUncheckedCreateWithoutUserInput>
  }

  export type NewsFeedCreateManyUserInputEnvelope = {
    data: NewsFeedCreateManyUserInput | NewsFeedCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type PostTagFriendCreateWithoutUserInput = {
    id?: string
    createdAt?: Date | string
    post: PostsCreateNestedOneWithoutTaggedFriendsInput
    taggedByUser: UsersCreateNestedOneWithoutTaggedByPostsInput
  }

  export type PostTagFriendUncheckedCreateWithoutUserInput = {
    id?: string
    postId: string
    taggedBy: string
    createdAt?: Date | string
  }

  export type PostTagFriendCreateOrConnectWithoutUserInput = {
    where: PostTagFriendWhereUniqueInput
    create: XOR<PostTagFriendCreateWithoutUserInput, PostTagFriendUncheckedCreateWithoutUserInput>
  }

  export type PostTagFriendCreateManyUserInputEnvelope = {
    data: PostTagFriendCreateManyUserInput | PostTagFriendCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type PostTagFriendCreateWithoutTaggedByUserInput = {
    id?: string
    createdAt?: Date | string
    post: PostsCreateNestedOneWithoutTaggedFriendsInput
    user: UsersCreateNestedOneWithoutTaggedInPostsInput
  }

  export type PostTagFriendUncheckedCreateWithoutTaggedByUserInput = {
    id?: string
    postId: string
    userId: string
    createdAt?: Date | string
  }

  export type PostTagFriendCreateOrConnectWithoutTaggedByUserInput = {
    where: PostTagFriendWhereUniqueInput
    create: XOR<PostTagFriendCreateWithoutTaggedByUserInput, PostTagFriendUncheckedCreateWithoutTaggedByUserInput>
  }

  export type PostTagFriendCreateManyTaggedByUserInputEnvelope = {
    data: PostTagFriendCreateManyTaggedByUserInput | PostTagFriendCreateManyTaggedByUserInput[]
    skipDuplicates?: boolean
  }

  export type ViewerCreateWithoutUserInput = {
    viewedAt?: Date | string
    post: PostsCreateNestedOneWithoutViewersInput
  }

  export type ViewerUncheckedCreateWithoutUserInput = {
    id?: number
    postId: string
    viewedAt?: Date | string
  }

  export type ViewerCreateOrConnectWithoutUserInput = {
    where: ViewerWhereUniqueInput
    create: XOR<ViewerCreateWithoutUserInput, ViewerUncheckedCreateWithoutUserInput>
  }

  export type ViewerCreateManyUserInputEnvelope = {
    data: ViewerCreateManyUserInput | ViewerCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type PostsUpsertWithWhereUniqueWithoutUserInput = {
    where: PostsWhereUniqueInput
    update: XOR<PostsUpdateWithoutUserInput, PostsUncheckedUpdateWithoutUserInput>
    create: XOR<PostsCreateWithoutUserInput, PostsUncheckedCreateWithoutUserInput>
  }

  export type PostsUpdateWithWhereUniqueWithoutUserInput = {
    where: PostsWhereUniqueInput
    data: XOR<PostsUpdateWithoutUserInput, PostsUncheckedUpdateWithoutUserInput>
  }

  export type PostsUpdateManyWithWhereWithoutUserInput = {
    where: PostsScalarWhereInput
    data: XOR<PostsUpdateManyMutationInput, PostsUncheckedUpdateManyWithoutUserInput>
  }

  export type PostsScalarWhereInput = {
    AND?: PostsScalarWhereInput | PostsScalarWhereInput[]
    OR?: PostsScalarWhereInput[]
    NOT?: PostsScalarWhereInput | PostsScalarWhereInput[]
    id?: StringFilter<"Posts"> | string
    userId?: StringFilter<"Posts"> | string
    title?: StringNullableFilter<"Posts"> | string | null
    content?: StringNullableFilter<"Posts"> | string | null
    postType?: EnumPostTypeEnumFilter<"Posts"> | $Enums.PostTypeEnum
    visibility?: EnumVisibilityEnumFilter<"Posts"> | $Enums.VisibilityEnum
    censor?: EnumCensorEnumFilter<"Posts"> | $Enums.CensorEnum
    shareCount?: IntFilter<"Posts"> | number
    likeCount?: IntFilter<"Posts"> | number
    commentCount?: IntFilter<"Posts"> | number
    createdAt?: DateTimeFilter<"Posts"> | Date | string
    expired_at?: DateTimeNullableFilter<"Posts"> | Date | string | null
    updatedAt?: DateTimeFilter<"Posts"> | Date | string
  }

  export type LikesUpsertWithWhereUniqueWithoutUserInput = {
    where: LikesWhereUniqueInput
    update: XOR<LikesUpdateWithoutUserInput, LikesUncheckedUpdateWithoutUserInput>
    create: XOR<LikesCreateWithoutUserInput, LikesUncheckedCreateWithoutUserInput>
  }

  export type LikesUpdateWithWhereUniqueWithoutUserInput = {
    where: LikesWhereUniqueInput
    data: XOR<LikesUpdateWithoutUserInput, LikesUncheckedUpdateWithoutUserInput>
  }

  export type LikesUpdateManyWithWhereWithoutUserInput = {
    where: LikesScalarWhereInput
    data: XOR<LikesUpdateManyMutationInput, LikesUncheckedUpdateManyWithoutUserInput>
  }

  export type LikesScalarWhereInput = {
    AND?: LikesScalarWhereInput | LikesScalarWhereInput[]
    OR?: LikesScalarWhereInput[]
    NOT?: LikesScalarWhereInput | LikesScalarWhereInput[]
    id?: StringFilter<"Likes"> | string
    userId?: StringNullableFilter<"Likes"> | string | null
    postId?: StringFilter<"Likes"> | string
    createdAt?: DateTimeFilter<"Likes"> | Date | string
  }

  export type CommentsUpsertWithWhereUniqueWithoutUserInput = {
    where: CommentsWhereUniqueInput
    update: XOR<CommentsUpdateWithoutUserInput, CommentsUncheckedUpdateWithoutUserInput>
    create: XOR<CommentsCreateWithoutUserInput, CommentsUncheckedCreateWithoutUserInput>
  }

  export type CommentsUpdateWithWhereUniqueWithoutUserInput = {
    where: CommentsWhereUniqueInput
    data: XOR<CommentsUpdateWithoutUserInput, CommentsUncheckedUpdateWithoutUserInput>
  }

  export type CommentsUpdateManyWithWhereWithoutUserInput = {
    where: CommentsScalarWhereInput
    data: XOR<CommentsUpdateManyMutationInput, CommentsUncheckedUpdateManyWithoutUserInput>
  }

  export type CommentsScalarWhereInput = {
    AND?: CommentsScalarWhereInput | CommentsScalarWhereInput[]
    OR?: CommentsScalarWhereInput[]
    NOT?: CommentsScalarWhereInput | CommentsScalarWhereInput[]
    id?: StringFilter<"Comments"> | string
    userId?: StringNullableFilter<"Comments"> | string | null
    postId?: StringFilter<"Comments"> | string
    parentId?: StringNullableFilter<"Comments"> | string | null
    content?: StringFilter<"Comments"> | string
    createdAt?: DateTimeFilter<"Comments"> | Date | string
  }

  export type SharesUpsertWithWhereUniqueWithoutUserInput = {
    where: SharesWhereUniqueInput
    update: XOR<SharesUpdateWithoutUserInput, SharesUncheckedUpdateWithoutUserInput>
    create: XOR<SharesCreateWithoutUserInput, SharesUncheckedCreateWithoutUserInput>
  }

  export type SharesUpdateWithWhereUniqueWithoutUserInput = {
    where: SharesWhereUniqueInput
    data: XOR<SharesUpdateWithoutUserInput, SharesUncheckedUpdateWithoutUserInput>
  }

  export type SharesUpdateManyWithWhereWithoutUserInput = {
    where: SharesScalarWhereInput
    data: XOR<SharesUpdateManyMutationInput, SharesUncheckedUpdateManyWithoutUserInput>
  }

  export type SharesScalarWhereInput = {
    AND?: SharesScalarWhereInput | SharesScalarWhereInput[]
    OR?: SharesScalarWhereInput[]
    NOT?: SharesScalarWhereInput | SharesScalarWhereInput[]
    id?: StringFilter<"Shares"> | string
    userId?: StringNullableFilter<"Shares"> | string | null
    postId?: StringFilter<"Shares"> | string
    createdAt?: DateTimeFilter<"Shares"> | Date | string
  }

  export type NewsFeedUpsertWithWhereUniqueWithoutUserInput = {
    where: NewsFeedWhereUniqueInput
    update: XOR<NewsFeedUpdateWithoutUserInput, NewsFeedUncheckedUpdateWithoutUserInput>
    create: XOR<NewsFeedCreateWithoutUserInput, NewsFeedUncheckedCreateWithoutUserInput>
  }

  export type NewsFeedUpdateWithWhereUniqueWithoutUserInput = {
    where: NewsFeedWhereUniqueInput
    data: XOR<NewsFeedUpdateWithoutUserInput, NewsFeedUncheckedUpdateWithoutUserInput>
  }

  export type NewsFeedUpdateManyWithWhereWithoutUserInput = {
    where: NewsFeedScalarWhereInput
    data: XOR<NewsFeedUpdateManyMutationInput, NewsFeedUncheckedUpdateManyWithoutUserInput>
  }

  export type NewsFeedScalarWhereInput = {
    AND?: NewsFeedScalarWhereInput | NewsFeedScalarWhereInput[]
    OR?: NewsFeedScalarWhereInput[]
    NOT?: NewsFeedScalarWhereInput | NewsFeedScalarWhereInput[]
    id?: StringFilter<"NewsFeed"> | string
    userId?: StringNullableFilter<"NewsFeed"> | string | null
    postId?: StringFilter<"NewsFeed"> | string
    reason?: StringNullableFilter<"NewsFeed"> | string | null
    score?: FloatFilter<"NewsFeed"> | number
    isNew?: BoolNullableFilter<"NewsFeed"> | boolean | null
    createdAt?: DateTimeFilter<"NewsFeed"> | Date | string
  }

  export type PostTagFriendUpsertWithWhereUniqueWithoutUserInput = {
    where: PostTagFriendWhereUniqueInput
    update: XOR<PostTagFriendUpdateWithoutUserInput, PostTagFriendUncheckedUpdateWithoutUserInput>
    create: XOR<PostTagFriendCreateWithoutUserInput, PostTagFriendUncheckedCreateWithoutUserInput>
  }

  export type PostTagFriendUpdateWithWhereUniqueWithoutUserInput = {
    where: PostTagFriendWhereUniqueInput
    data: XOR<PostTagFriendUpdateWithoutUserInput, PostTagFriendUncheckedUpdateWithoutUserInput>
  }

  export type PostTagFriendUpdateManyWithWhereWithoutUserInput = {
    where: PostTagFriendScalarWhereInput
    data: XOR<PostTagFriendUpdateManyMutationInput, PostTagFriendUncheckedUpdateManyWithoutUserInput>
  }

  export type PostTagFriendScalarWhereInput = {
    AND?: PostTagFriendScalarWhereInput | PostTagFriendScalarWhereInput[]
    OR?: PostTagFriendScalarWhereInput[]
    NOT?: PostTagFriendScalarWhereInput | PostTagFriendScalarWhereInput[]
    id?: StringFilter<"PostTagFriend"> | string
    postId?: StringFilter<"PostTagFriend"> | string
    userId?: StringFilter<"PostTagFriend"> | string
    taggedBy?: StringFilter<"PostTagFriend"> | string
    createdAt?: DateTimeFilter<"PostTagFriend"> | Date | string
  }

  export type PostTagFriendUpsertWithWhereUniqueWithoutTaggedByUserInput = {
    where: PostTagFriendWhereUniqueInput
    update: XOR<PostTagFriendUpdateWithoutTaggedByUserInput, PostTagFriendUncheckedUpdateWithoutTaggedByUserInput>
    create: XOR<PostTagFriendCreateWithoutTaggedByUserInput, PostTagFriendUncheckedCreateWithoutTaggedByUserInput>
  }

  export type PostTagFriendUpdateWithWhereUniqueWithoutTaggedByUserInput = {
    where: PostTagFriendWhereUniqueInput
    data: XOR<PostTagFriendUpdateWithoutTaggedByUserInput, PostTagFriendUncheckedUpdateWithoutTaggedByUserInput>
  }

  export type PostTagFriendUpdateManyWithWhereWithoutTaggedByUserInput = {
    where: PostTagFriendScalarWhereInput
    data: XOR<PostTagFriendUpdateManyMutationInput, PostTagFriendUncheckedUpdateManyWithoutTaggedByUserInput>
  }

  export type ViewerUpsertWithWhereUniqueWithoutUserInput = {
    where: ViewerWhereUniqueInput
    update: XOR<ViewerUpdateWithoutUserInput, ViewerUncheckedUpdateWithoutUserInput>
    create: XOR<ViewerCreateWithoutUserInput, ViewerUncheckedCreateWithoutUserInput>
  }

  export type ViewerUpdateWithWhereUniqueWithoutUserInput = {
    where: ViewerWhereUniqueInput
    data: XOR<ViewerUpdateWithoutUserInput, ViewerUncheckedUpdateWithoutUserInput>
  }

  export type ViewerUpdateManyWithWhereWithoutUserInput = {
    where: ViewerScalarWhereInput
    data: XOR<ViewerUpdateManyMutationInput, ViewerUncheckedUpdateManyWithoutUserInput>
  }

  export type ViewerScalarWhereInput = {
    AND?: ViewerScalarWhereInput | ViewerScalarWhereInput[]
    OR?: ViewerScalarWhereInput[]
    NOT?: ViewerScalarWhereInput | ViewerScalarWhereInput[]
    id?: IntFilter<"Viewer"> | number
    userId?: StringFilter<"Viewer"> | string
    postId?: StringFilter<"Viewer"> | string
    viewedAt?: DateTimeFilter<"Viewer"> | Date | string
  }

  export type UsersCreateWithoutPostsInput = {
    id?: string
    username: string
    fullname?: string | null
    avatarUrl?: string | null
    likes?: LikesCreateNestedManyWithoutUserInput
    comments?: CommentsCreateNestedManyWithoutUserInput
    shares?: SharesCreateNestedManyWithoutUserInput
    newsFeed?: NewsFeedCreateNestedManyWithoutUserInput
    taggedInPosts?: PostTagFriendCreateNestedManyWithoutUserInput
    taggedByPosts?: PostTagFriendCreateNestedManyWithoutTaggedByUserInput
    viewedPosts?: ViewerCreateNestedManyWithoutUserInput
  }

  export type UsersUncheckedCreateWithoutPostsInput = {
    id?: string
    username: string
    fullname?: string | null
    avatarUrl?: string | null
    likes?: LikesUncheckedCreateNestedManyWithoutUserInput
    comments?: CommentsUncheckedCreateNestedManyWithoutUserInput
    shares?: SharesUncheckedCreateNestedManyWithoutUserInput
    newsFeed?: NewsFeedUncheckedCreateNestedManyWithoutUserInput
    taggedInPosts?: PostTagFriendUncheckedCreateNestedManyWithoutUserInput
    taggedByPosts?: PostTagFriendUncheckedCreateNestedManyWithoutTaggedByUserInput
    viewedPosts?: ViewerUncheckedCreateNestedManyWithoutUserInput
  }

  export type UsersCreateOrConnectWithoutPostsInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutPostsInput, UsersUncheckedCreateWithoutPostsInput>
  }

  export type PostHashtagsCreateWithoutPostInput = {
    hashtag: HashtagCreateNestedOneWithoutPostsInput
  }

  export type PostHashtagsUncheckedCreateWithoutPostInput = {
    hashtagId: string
  }

  export type PostHashtagsCreateOrConnectWithoutPostInput = {
    where: PostHashtagsWhereUniqueInput
    create: XOR<PostHashtagsCreateWithoutPostInput, PostHashtagsUncheckedCreateWithoutPostInput>
  }

  export type PostHashtagsCreateManyPostInputEnvelope = {
    data: PostHashtagsCreateManyPostInput | PostHashtagsCreateManyPostInput[]
    skipDuplicates?: boolean
  }

  export type PostTagFriendCreateWithoutPostInput = {
    id?: string
    createdAt?: Date | string
    user: UsersCreateNestedOneWithoutTaggedInPostsInput
    taggedByUser: UsersCreateNestedOneWithoutTaggedByPostsInput
  }

  export type PostTagFriendUncheckedCreateWithoutPostInput = {
    id?: string
    userId: string
    taggedBy: string
    createdAt?: Date | string
  }

  export type PostTagFriendCreateOrConnectWithoutPostInput = {
    where: PostTagFriendWhereUniqueInput
    create: XOR<PostTagFriendCreateWithoutPostInput, PostTagFriendUncheckedCreateWithoutPostInput>
  }

  export type PostTagFriendCreateManyPostInputEnvelope = {
    data: PostTagFriendCreateManyPostInput | PostTagFriendCreateManyPostInput[]
    skipDuplicates?: boolean
  }

  export type MediaCreateWithoutPostInput = {
    id?: string
    mediaUrl: string
    mediaType: $Enums.MediaTypeEnum
    createdAt?: Date | string
  }

  export type MediaUncheckedCreateWithoutPostInput = {
    id?: string
    mediaUrl: string
    mediaType: $Enums.MediaTypeEnum
    createdAt?: Date | string
  }

  export type MediaCreateOrConnectWithoutPostInput = {
    where: MediaWhereUniqueInput
    create: XOR<MediaCreateWithoutPostInput, MediaUncheckedCreateWithoutPostInput>
  }

  export type MediaCreateManyPostInputEnvelope = {
    data: MediaCreateManyPostInput | MediaCreateManyPostInput[]
    skipDuplicates?: boolean
  }

  export type LikesCreateWithoutPostInput = {
    id?: string
    createdAt?: Date | string
    user?: UsersCreateNestedOneWithoutLikesInput
  }

  export type LikesUncheckedCreateWithoutPostInput = {
    id?: string
    userId?: string | null
    createdAt?: Date | string
  }

  export type LikesCreateOrConnectWithoutPostInput = {
    where: LikesWhereUniqueInput
    create: XOR<LikesCreateWithoutPostInput, LikesUncheckedCreateWithoutPostInput>
  }

  export type LikesCreateManyPostInputEnvelope = {
    data: LikesCreateManyPostInput | LikesCreateManyPostInput[]
    skipDuplicates?: boolean
  }

  export type CommentsCreateWithoutPostInput = {
    id?: string
    content: string
    createdAt?: Date | string
    user?: UsersCreateNestedOneWithoutCommentsInput
    parent?: CommentsCreateNestedOneWithoutRepliesInput
    replies?: CommentsCreateNestedManyWithoutParentInput
  }

  export type CommentsUncheckedCreateWithoutPostInput = {
    id?: string
    userId?: string | null
    parentId?: string | null
    content: string
    createdAt?: Date | string
    replies?: CommentsUncheckedCreateNestedManyWithoutParentInput
  }

  export type CommentsCreateOrConnectWithoutPostInput = {
    where: CommentsWhereUniqueInput
    create: XOR<CommentsCreateWithoutPostInput, CommentsUncheckedCreateWithoutPostInput>
  }

  export type CommentsCreateManyPostInputEnvelope = {
    data: CommentsCreateManyPostInput | CommentsCreateManyPostInput[]
    skipDuplicates?: boolean
  }

  export type SharesCreateWithoutPostInput = {
    id?: string
    createdAt?: Date | string
    user?: UsersCreateNestedOneWithoutSharesInput
  }

  export type SharesUncheckedCreateWithoutPostInput = {
    id?: string
    userId?: string | null
    createdAt?: Date | string
  }

  export type SharesCreateOrConnectWithoutPostInput = {
    where: SharesWhereUniqueInput
    create: XOR<SharesCreateWithoutPostInput, SharesUncheckedCreateWithoutPostInput>
  }

  export type SharesCreateManyPostInputEnvelope = {
    data: SharesCreateManyPostInput | SharesCreateManyPostInput[]
    skipDuplicates?: boolean
  }

  export type NewsFeedCreateWithoutPostInput = {
    id?: string
    reason?: string | null
    score: number
    isNew?: boolean | null
    createdAt?: Date | string
    user?: UsersCreateNestedOneWithoutNewsFeedInput
  }

  export type NewsFeedUncheckedCreateWithoutPostInput = {
    id?: string
    userId?: string | null
    reason?: string | null
    score: number
    isNew?: boolean | null
    createdAt?: Date | string
  }

  export type NewsFeedCreateOrConnectWithoutPostInput = {
    where: NewsFeedWhereUniqueInput
    create: XOR<NewsFeedCreateWithoutPostInput, NewsFeedUncheckedCreateWithoutPostInput>
  }

  export type NewsFeedCreateManyPostInputEnvelope = {
    data: NewsFeedCreateManyPostInput | NewsFeedCreateManyPostInput[]
    skipDuplicates?: boolean
  }

  export type ViewerCreateWithoutPostInput = {
    viewedAt?: Date | string
    user: UsersCreateNestedOneWithoutViewedPostsInput
  }

  export type ViewerUncheckedCreateWithoutPostInput = {
    id?: number
    userId: string
    viewedAt?: Date | string
  }

  export type ViewerCreateOrConnectWithoutPostInput = {
    where: ViewerWhereUniqueInput
    create: XOR<ViewerCreateWithoutPostInput, ViewerUncheckedCreateWithoutPostInput>
  }

  export type ViewerCreateManyPostInputEnvelope = {
    data: ViewerCreateManyPostInput | ViewerCreateManyPostInput[]
    skipDuplicates?: boolean
  }

  export type UsersUpsertWithoutPostsInput = {
    update: XOR<UsersUpdateWithoutPostsInput, UsersUncheckedUpdateWithoutPostsInput>
    create: XOR<UsersCreateWithoutPostsInput, UsersUncheckedCreateWithoutPostsInput>
    where?: UsersWhereInput
  }

  export type UsersUpdateToOneWithWhereWithoutPostsInput = {
    where?: UsersWhereInput
    data: XOR<UsersUpdateWithoutPostsInput, UsersUncheckedUpdateWithoutPostsInput>
  }

  export type UsersUpdateWithoutPostsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    fullname?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    likes?: LikesUpdateManyWithoutUserNestedInput
    comments?: CommentsUpdateManyWithoutUserNestedInput
    shares?: SharesUpdateManyWithoutUserNestedInput
    newsFeed?: NewsFeedUpdateManyWithoutUserNestedInput
    taggedInPosts?: PostTagFriendUpdateManyWithoutUserNestedInput
    taggedByPosts?: PostTagFriendUpdateManyWithoutTaggedByUserNestedInput
    viewedPosts?: ViewerUpdateManyWithoutUserNestedInput
  }

  export type UsersUncheckedUpdateWithoutPostsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    fullname?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    likes?: LikesUncheckedUpdateManyWithoutUserNestedInput
    comments?: CommentsUncheckedUpdateManyWithoutUserNestedInput
    shares?: SharesUncheckedUpdateManyWithoutUserNestedInput
    newsFeed?: NewsFeedUncheckedUpdateManyWithoutUserNestedInput
    taggedInPosts?: PostTagFriendUncheckedUpdateManyWithoutUserNestedInput
    taggedByPosts?: PostTagFriendUncheckedUpdateManyWithoutTaggedByUserNestedInput
    viewedPosts?: ViewerUncheckedUpdateManyWithoutUserNestedInput
  }

  export type PostHashtagsUpsertWithWhereUniqueWithoutPostInput = {
    where: PostHashtagsWhereUniqueInput
    update: XOR<PostHashtagsUpdateWithoutPostInput, PostHashtagsUncheckedUpdateWithoutPostInput>
    create: XOR<PostHashtagsCreateWithoutPostInput, PostHashtagsUncheckedCreateWithoutPostInput>
  }

  export type PostHashtagsUpdateWithWhereUniqueWithoutPostInput = {
    where: PostHashtagsWhereUniqueInput
    data: XOR<PostHashtagsUpdateWithoutPostInput, PostHashtagsUncheckedUpdateWithoutPostInput>
  }

  export type PostHashtagsUpdateManyWithWhereWithoutPostInput = {
    where: PostHashtagsScalarWhereInput
    data: XOR<PostHashtagsUpdateManyMutationInput, PostHashtagsUncheckedUpdateManyWithoutPostInput>
  }

  export type PostHashtagsScalarWhereInput = {
    AND?: PostHashtagsScalarWhereInput | PostHashtagsScalarWhereInput[]
    OR?: PostHashtagsScalarWhereInput[]
    NOT?: PostHashtagsScalarWhereInput | PostHashtagsScalarWhereInput[]
    postId?: StringFilter<"PostHashtags"> | string
    hashtagId?: StringFilter<"PostHashtags"> | string
  }

  export type PostTagFriendUpsertWithWhereUniqueWithoutPostInput = {
    where: PostTagFriendWhereUniqueInput
    update: XOR<PostTagFriendUpdateWithoutPostInput, PostTagFriendUncheckedUpdateWithoutPostInput>
    create: XOR<PostTagFriendCreateWithoutPostInput, PostTagFriendUncheckedCreateWithoutPostInput>
  }

  export type PostTagFriendUpdateWithWhereUniqueWithoutPostInput = {
    where: PostTagFriendWhereUniqueInput
    data: XOR<PostTagFriendUpdateWithoutPostInput, PostTagFriendUncheckedUpdateWithoutPostInput>
  }

  export type PostTagFriendUpdateManyWithWhereWithoutPostInput = {
    where: PostTagFriendScalarWhereInput
    data: XOR<PostTagFriendUpdateManyMutationInput, PostTagFriendUncheckedUpdateManyWithoutPostInput>
  }

  export type MediaUpsertWithWhereUniqueWithoutPostInput = {
    where: MediaWhereUniqueInput
    update: XOR<MediaUpdateWithoutPostInput, MediaUncheckedUpdateWithoutPostInput>
    create: XOR<MediaCreateWithoutPostInput, MediaUncheckedCreateWithoutPostInput>
  }

  export type MediaUpdateWithWhereUniqueWithoutPostInput = {
    where: MediaWhereUniqueInput
    data: XOR<MediaUpdateWithoutPostInput, MediaUncheckedUpdateWithoutPostInput>
  }

  export type MediaUpdateManyWithWhereWithoutPostInput = {
    where: MediaScalarWhereInput
    data: XOR<MediaUpdateManyMutationInput, MediaUncheckedUpdateManyWithoutPostInput>
  }

  export type MediaScalarWhereInput = {
    AND?: MediaScalarWhereInput | MediaScalarWhereInput[]
    OR?: MediaScalarWhereInput[]
    NOT?: MediaScalarWhereInput | MediaScalarWhereInput[]
    id?: StringFilter<"Media"> | string
    postId?: StringFilter<"Media"> | string
    mediaUrl?: StringFilter<"Media"> | string
    mediaType?: EnumMediaTypeEnumFilter<"Media"> | $Enums.MediaTypeEnum
    createdAt?: DateTimeFilter<"Media"> | Date | string
  }

  export type LikesUpsertWithWhereUniqueWithoutPostInput = {
    where: LikesWhereUniqueInput
    update: XOR<LikesUpdateWithoutPostInput, LikesUncheckedUpdateWithoutPostInput>
    create: XOR<LikesCreateWithoutPostInput, LikesUncheckedCreateWithoutPostInput>
  }

  export type LikesUpdateWithWhereUniqueWithoutPostInput = {
    where: LikesWhereUniqueInput
    data: XOR<LikesUpdateWithoutPostInput, LikesUncheckedUpdateWithoutPostInput>
  }

  export type LikesUpdateManyWithWhereWithoutPostInput = {
    where: LikesScalarWhereInput
    data: XOR<LikesUpdateManyMutationInput, LikesUncheckedUpdateManyWithoutPostInput>
  }

  export type CommentsUpsertWithWhereUniqueWithoutPostInput = {
    where: CommentsWhereUniqueInput
    update: XOR<CommentsUpdateWithoutPostInput, CommentsUncheckedUpdateWithoutPostInput>
    create: XOR<CommentsCreateWithoutPostInput, CommentsUncheckedCreateWithoutPostInput>
  }

  export type CommentsUpdateWithWhereUniqueWithoutPostInput = {
    where: CommentsWhereUniqueInput
    data: XOR<CommentsUpdateWithoutPostInput, CommentsUncheckedUpdateWithoutPostInput>
  }

  export type CommentsUpdateManyWithWhereWithoutPostInput = {
    where: CommentsScalarWhereInput
    data: XOR<CommentsUpdateManyMutationInput, CommentsUncheckedUpdateManyWithoutPostInput>
  }

  export type SharesUpsertWithWhereUniqueWithoutPostInput = {
    where: SharesWhereUniqueInput
    update: XOR<SharesUpdateWithoutPostInput, SharesUncheckedUpdateWithoutPostInput>
    create: XOR<SharesCreateWithoutPostInput, SharesUncheckedCreateWithoutPostInput>
  }

  export type SharesUpdateWithWhereUniqueWithoutPostInput = {
    where: SharesWhereUniqueInput
    data: XOR<SharesUpdateWithoutPostInput, SharesUncheckedUpdateWithoutPostInput>
  }

  export type SharesUpdateManyWithWhereWithoutPostInput = {
    where: SharesScalarWhereInput
    data: XOR<SharesUpdateManyMutationInput, SharesUncheckedUpdateManyWithoutPostInput>
  }

  export type NewsFeedUpsertWithWhereUniqueWithoutPostInput = {
    where: NewsFeedWhereUniqueInput
    update: XOR<NewsFeedUpdateWithoutPostInput, NewsFeedUncheckedUpdateWithoutPostInput>
    create: XOR<NewsFeedCreateWithoutPostInput, NewsFeedUncheckedCreateWithoutPostInput>
  }

  export type NewsFeedUpdateWithWhereUniqueWithoutPostInput = {
    where: NewsFeedWhereUniqueInput
    data: XOR<NewsFeedUpdateWithoutPostInput, NewsFeedUncheckedUpdateWithoutPostInput>
  }

  export type NewsFeedUpdateManyWithWhereWithoutPostInput = {
    where: NewsFeedScalarWhereInput
    data: XOR<NewsFeedUpdateManyMutationInput, NewsFeedUncheckedUpdateManyWithoutPostInput>
  }

  export type ViewerUpsertWithWhereUniqueWithoutPostInput = {
    where: ViewerWhereUniqueInput
    update: XOR<ViewerUpdateWithoutPostInput, ViewerUncheckedUpdateWithoutPostInput>
    create: XOR<ViewerCreateWithoutPostInput, ViewerUncheckedCreateWithoutPostInput>
  }

  export type ViewerUpdateWithWhereUniqueWithoutPostInput = {
    where: ViewerWhereUniqueInput
    data: XOR<ViewerUpdateWithoutPostInput, ViewerUncheckedUpdateWithoutPostInput>
  }

  export type ViewerUpdateManyWithWhereWithoutPostInput = {
    where: ViewerScalarWhereInput
    data: XOR<ViewerUpdateManyMutationInput, ViewerUncheckedUpdateManyWithoutPostInput>
  }

  export type UsersCreateWithoutViewedPostsInput = {
    id?: string
    username: string
    fullname?: string | null
    avatarUrl?: string | null
    posts?: PostsCreateNestedManyWithoutUserInput
    likes?: LikesCreateNestedManyWithoutUserInput
    comments?: CommentsCreateNestedManyWithoutUserInput
    shares?: SharesCreateNestedManyWithoutUserInput
    newsFeed?: NewsFeedCreateNestedManyWithoutUserInput
    taggedInPosts?: PostTagFriendCreateNestedManyWithoutUserInput
    taggedByPosts?: PostTagFriendCreateNestedManyWithoutTaggedByUserInput
  }

  export type UsersUncheckedCreateWithoutViewedPostsInput = {
    id?: string
    username: string
    fullname?: string | null
    avatarUrl?: string | null
    posts?: PostsUncheckedCreateNestedManyWithoutUserInput
    likes?: LikesUncheckedCreateNestedManyWithoutUserInput
    comments?: CommentsUncheckedCreateNestedManyWithoutUserInput
    shares?: SharesUncheckedCreateNestedManyWithoutUserInput
    newsFeed?: NewsFeedUncheckedCreateNestedManyWithoutUserInput
    taggedInPosts?: PostTagFriendUncheckedCreateNestedManyWithoutUserInput
    taggedByPosts?: PostTagFriendUncheckedCreateNestedManyWithoutTaggedByUserInput
  }

  export type UsersCreateOrConnectWithoutViewedPostsInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutViewedPostsInput, UsersUncheckedCreateWithoutViewedPostsInput>
  }

  export type PostsCreateWithoutViewersInput = {
    id?: string
    title?: string | null
    content?: string | null
    postType?: $Enums.PostTypeEnum
    visibility?: $Enums.VisibilityEnum
    censor?: $Enums.CensorEnum
    shareCount?: number
    likeCount?: number
    commentCount?: number
    createdAt?: Date | string
    expired_at?: Date | string | null
    updatedAt?: Date | string
    user: UsersCreateNestedOneWithoutPostsInput
    hashtags?: PostHashtagsCreateNestedManyWithoutPostInput
    taggedFriends?: PostTagFriendCreateNestedManyWithoutPostInput
    media?: MediaCreateNestedManyWithoutPostInput
    likes?: LikesCreateNestedManyWithoutPostInput
    comments?: CommentsCreateNestedManyWithoutPostInput
    shares?: SharesCreateNestedManyWithoutPostInput
    newsFeed?: NewsFeedCreateNestedManyWithoutPostInput
  }

  export type PostsUncheckedCreateWithoutViewersInput = {
    id?: string
    userId: string
    title?: string | null
    content?: string | null
    postType?: $Enums.PostTypeEnum
    visibility?: $Enums.VisibilityEnum
    censor?: $Enums.CensorEnum
    shareCount?: number
    likeCount?: number
    commentCount?: number
    createdAt?: Date | string
    expired_at?: Date | string | null
    updatedAt?: Date | string
    hashtags?: PostHashtagsUncheckedCreateNestedManyWithoutPostInput
    taggedFriends?: PostTagFriendUncheckedCreateNestedManyWithoutPostInput
    media?: MediaUncheckedCreateNestedManyWithoutPostInput
    likes?: LikesUncheckedCreateNestedManyWithoutPostInput
    comments?: CommentsUncheckedCreateNestedManyWithoutPostInput
    shares?: SharesUncheckedCreateNestedManyWithoutPostInput
    newsFeed?: NewsFeedUncheckedCreateNestedManyWithoutPostInput
  }

  export type PostsCreateOrConnectWithoutViewersInput = {
    where: PostsWhereUniqueInput
    create: XOR<PostsCreateWithoutViewersInput, PostsUncheckedCreateWithoutViewersInput>
  }

  export type UsersUpsertWithoutViewedPostsInput = {
    update: XOR<UsersUpdateWithoutViewedPostsInput, UsersUncheckedUpdateWithoutViewedPostsInput>
    create: XOR<UsersCreateWithoutViewedPostsInput, UsersUncheckedCreateWithoutViewedPostsInput>
    where?: UsersWhereInput
  }

  export type UsersUpdateToOneWithWhereWithoutViewedPostsInput = {
    where?: UsersWhereInput
    data: XOR<UsersUpdateWithoutViewedPostsInput, UsersUncheckedUpdateWithoutViewedPostsInput>
  }

  export type UsersUpdateWithoutViewedPostsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    fullname?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    posts?: PostsUpdateManyWithoutUserNestedInput
    likes?: LikesUpdateManyWithoutUserNestedInput
    comments?: CommentsUpdateManyWithoutUserNestedInput
    shares?: SharesUpdateManyWithoutUserNestedInput
    newsFeed?: NewsFeedUpdateManyWithoutUserNestedInput
    taggedInPosts?: PostTagFriendUpdateManyWithoutUserNestedInput
    taggedByPosts?: PostTagFriendUpdateManyWithoutTaggedByUserNestedInput
  }

  export type UsersUncheckedUpdateWithoutViewedPostsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    fullname?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    posts?: PostsUncheckedUpdateManyWithoutUserNestedInput
    likes?: LikesUncheckedUpdateManyWithoutUserNestedInput
    comments?: CommentsUncheckedUpdateManyWithoutUserNestedInput
    shares?: SharesUncheckedUpdateManyWithoutUserNestedInput
    newsFeed?: NewsFeedUncheckedUpdateManyWithoutUserNestedInput
    taggedInPosts?: PostTagFriendUncheckedUpdateManyWithoutUserNestedInput
    taggedByPosts?: PostTagFriendUncheckedUpdateManyWithoutTaggedByUserNestedInput
  }

  export type PostsUpsertWithoutViewersInput = {
    update: XOR<PostsUpdateWithoutViewersInput, PostsUncheckedUpdateWithoutViewersInput>
    create: XOR<PostsCreateWithoutViewersInput, PostsUncheckedCreateWithoutViewersInput>
    where?: PostsWhereInput
  }

  export type PostsUpdateToOneWithWhereWithoutViewersInput = {
    where?: PostsWhereInput
    data: XOR<PostsUpdateWithoutViewersInput, PostsUncheckedUpdateWithoutViewersInput>
  }

  export type PostsUpdateWithoutViewersInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    postType?: EnumPostTypeEnumFieldUpdateOperationsInput | $Enums.PostTypeEnum
    visibility?: EnumVisibilityEnumFieldUpdateOperationsInput | $Enums.VisibilityEnum
    censor?: EnumCensorEnumFieldUpdateOperationsInput | $Enums.CensorEnum
    shareCount?: IntFieldUpdateOperationsInput | number
    likeCount?: IntFieldUpdateOperationsInput | number
    commentCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expired_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UsersUpdateOneRequiredWithoutPostsNestedInput
    hashtags?: PostHashtagsUpdateManyWithoutPostNestedInput
    taggedFriends?: PostTagFriendUpdateManyWithoutPostNestedInput
    media?: MediaUpdateManyWithoutPostNestedInput
    likes?: LikesUpdateManyWithoutPostNestedInput
    comments?: CommentsUpdateManyWithoutPostNestedInput
    shares?: SharesUpdateManyWithoutPostNestedInput
    newsFeed?: NewsFeedUpdateManyWithoutPostNestedInput
  }

  export type PostsUncheckedUpdateWithoutViewersInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    postType?: EnumPostTypeEnumFieldUpdateOperationsInput | $Enums.PostTypeEnum
    visibility?: EnumVisibilityEnumFieldUpdateOperationsInput | $Enums.VisibilityEnum
    censor?: EnumCensorEnumFieldUpdateOperationsInput | $Enums.CensorEnum
    shareCount?: IntFieldUpdateOperationsInput | number
    likeCount?: IntFieldUpdateOperationsInput | number
    commentCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expired_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    hashtags?: PostHashtagsUncheckedUpdateManyWithoutPostNestedInput
    taggedFriends?: PostTagFriendUncheckedUpdateManyWithoutPostNestedInput
    media?: MediaUncheckedUpdateManyWithoutPostNestedInput
    likes?: LikesUncheckedUpdateManyWithoutPostNestedInput
    comments?: CommentsUncheckedUpdateManyWithoutPostNestedInput
    shares?: SharesUncheckedUpdateManyWithoutPostNestedInput
    newsFeed?: NewsFeedUncheckedUpdateManyWithoutPostNestedInput
  }

  export type PostHashtagsCreateWithoutHashtagInput = {
    post: PostsCreateNestedOneWithoutHashtagsInput
  }

  export type PostHashtagsUncheckedCreateWithoutHashtagInput = {
    postId: string
  }

  export type PostHashtagsCreateOrConnectWithoutHashtagInput = {
    where: PostHashtagsWhereUniqueInput
    create: XOR<PostHashtagsCreateWithoutHashtagInput, PostHashtagsUncheckedCreateWithoutHashtagInput>
  }

  export type PostHashtagsCreateManyHashtagInputEnvelope = {
    data: PostHashtagsCreateManyHashtagInput | PostHashtagsCreateManyHashtagInput[]
    skipDuplicates?: boolean
  }

  export type PostHashtagsUpsertWithWhereUniqueWithoutHashtagInput = {
    where: PostHashtagsWhereUniqueInput
    update: XOR<PostHashtagsUpdateWithoutHashtagInput, PostHashtagsUncheckedUpdateWithoutHashtagInput>
    create: XOR<PostHashtagsCreateWithoutHashtagInput, PostHashtagsUncheckedCreateWithoutHashtagInput>
  }

  export type PostHashtagsUpdateWithWhereUniqueWithoutHashtagInput = {
    where: PostHashtagsWhereUniqueInput
    data: XOR<PostHashtagsUpdateWithoutHashtagInput, PostHashtagsUncheckedUpdateWithoutHashtagInput>
  }

  export type PostHashtagsUpdateManyWithWhereWithoutHashtagInput = {
    where: PostHashtagsScalarWhereInput
    data: XOR<PostHashtagsUpdateManyMutationInput, PostHashtagsUncheckedUpdateManyWithoutHashtagInput>
  }

  export type PostsCreateWithoutHashtagsInput = {
    id?: string
    title?: string | null
    content?: string | null
    postType?: $Enums.PostTypeEnum
    visibility?: $Enums.VisibilityEnum
    censor?: $Enums.CensorEnum
    shareCount?: number
    likeCount?: number
    commentCount?: number
    createdAt?: Date | string
    expired_at?: Date | string | null
    updatedAt?: Date | string
    user: UsersCreateNestedOneWithoutPostsInput
    taggedFriends?: PostTagFriendCreateNestedManyWithoutPostInput
    media?: MediaCreateNestedManyWithoutPostInput
    likes?: LikesCreateNestedManyWithoutPostInput
    comments?: CommentsCreateNestedManyWithoutPostInput
    shares?: SharesCreateNestedManyWithoutPostInput
    newsFeed?: NewsFeedCreateNestedManyWithoutPostInput
    viewers?: ViewerCreateNestedManyWithoutPostInput
  }

  export type PostsUncheckedCreateWithoutHashtagsInput = {
    id?: string
    userId: string
    title?: string | null
    content?: string | null
    postType?: $Enums.PostTypeEnum
    visibility?: $Enums.VisibilityEnum
    censor?: $Enums.CensorEnum
    shareCount?: number
    likeCount?: number
    commentCount?: number
    createdAt?: Date | string
    expired_at?: Date | string | null
    updatedAt?: Date | string
    taggedFriends?: PostTagFriendUncheckedCreateNestedManyWithoutPostInput
    media?: MediaUncheckedCreateNestedManyWithoutPostInput
    likes?: LikesUncheckedCreateNestedManyWithoutPostInput
    comments?: CommentsUncheckedCreateNestedManyWithoutPostInput
    shares?: SharesUncheckedCreateNestedManyWithoutPostInput
    newsFeed?: NewsFeedUncheckedCreateNestedManyWithoutPostInput
    viewers?: ViewerUncheckedCreateNestedManyWithoutPostInput
  }

  export type PostsCreateOrConnectWithoutHashtagsInput = {
    where: PostsWhereUniqueInput
    create: XOR<PostsCreateWithoutHashtagsInput, PostsUncheckedCreateWithoutHashtagsInput>
  }

  export type HashtagCreateWithoutPostsInput = {
    id?: string
    name: string
    createdAt?: Date | string
  }

  export type HashtagUncheckedCreateWithoutPostsInput = {
    id?: string
    name: string
    createdAt?: Date | string
  }

  export type HashtagCreateOrConnectWithoutPostsInput = {
    where: HashtagWhereUniqueInput
    create: XOR<HashtagCreateWithoutPostsInput, HashtagUncheckedCreateWithoutPostsInput>
  }

  export type PostsUpsertWithoutHashtagsInput = {
    update: XOR<PostsUpdateWithoutHashtagsInput, PostsUncheckedUpdateWithoutHashtagsInput>
    create: XOR<PostsCreateWithoutHashtagsInput, PostsUncheckedCreateWithoutHashtagsInput>
    where?: PostsWhereInput
  }

  export type PostsUpdateToOneWithWhereWithoutHashtagsInput = {
    where?: PostsWhereInput
    data: XOR<PostsUpdateWithoutHashtagsInput, PostsUncheckedUpdateWithoutHashtagsInput>
  }

  export type PostsUpdateWithoutHashtagsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    postType?: EnumPostTypeEnumFieldUpdateOperationsInput | $Enums.PostTypeEnum
    visibility?: EnumVisibilityEnumFieldUpdateOperationsInput | $Enums.VisibilityEnum
    censor?: EnumCensorEnumFieldUpdateOperationsInput | $Enums.CensorEnum
    shareCount?: IntFieldUpdateOperationsInput | number
    likeCount?: IntFieldUpdateOperationsInput | number
    commentCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expired_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UsersUpdateOneRequiredWithoutPostsNestedInput
    taggedFriends?: PostTagFriendUpdateManyWithoutPostNestedInput
    media?: MediaUpdateManyWithoutPostNestedInput
    likes?: LikesUpdateManyWithoutPostNestedInput
    comments?: CommentsUpdateManyWithoutPostNestedInput
    shares?: SharesUpdateManyWithoutPostNestedInput
    newsFeed?: NewsFeedUpdateManyWithoutPostNestedInput
    viewers?: ViewerUpdateManyWithoutPostNestedInput
  }

  export type PostsUncheckedUpdateWithoutHashtagsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    postType?: EnumPostTypeEnumFieldUpdateOperationsInput | $Enums.PostTypeEnum
    visibility?: EnumVisibilityEnumFieldUpdateOperationsInput | $Enums.VisibilityEnum
    censor?: EnumCensorEnumFieldUpdateOperationsInput | $Enums.CensorEnum
    shareCount?: IntFieldUpdateOperationsInput | number
    likeCount?: IntFieldUpdateOperationsInput | number
    commentCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expired_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    taggedFriends?: PostTagFriendUncheckedUpdateManyWithoutPostNestedInput
    media?: MediaUncheckedUpdateManyWithoutPostNestedInput
    likes?: LikesUncheckedUpdateManyWithoutPostNestedInput
    comments?: CommentsUncheckedUpdateManyWithoutPostNestedInput
    shares?: SharesUncheckedUpdateManyWithoutPostNestedInput
    newsFeed?: NewsFeedUncheckedUpdateManyWithoutPostNestedInput
    viewers?: ViewerUncheckedUpdateManyWithoutPostNestedInput
  }

  export type HashtagUpsertWithoutPostsInput = {
    update: XOR<HashtagUpdateWithoutPostsInput, HashtagUncheckedUpdateWithoutPostsInput>
    create: XOR<HashtagCreateWithoutPostsInput, HashtagUncheckedCreateWithoutPostsInput>
    where?: HashtagWhereInput
  }

  export type HashtagUpdateToOneWithWhereWithoutPostsInput = {
    where?: HashtagWhereInput
    data: XOR<HashtagUpdateWithoutPostsInput, HashtagUncheckedUpdateWithoutPostsInput>
  }

  export type HashtagUpdateWithoutPostsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HashtagUncheckedUpdateWithoutPostsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostsCreateWithoutTaggedFriendsInput = {
    id?: string
    title?: string | null
    content?: string | null
    postType?: $Enums.PostTypeEnum
    visibility?: $Enums.VisibilityEnum
    censor?: $Enums.CensorEnum
    shareCount?: number
    likeCount?: number
    commentCount?: number
    createdAt?: Date | string
    expired_at?: Date | string | null
    updatedAt?: Date | string
    user: UsersCreateNestedOneWithoutPostsInput
    hashtags?: PostHashtagsCreateNestedManyWithoutPostInput
    media?: MediaCreateNestedManyWithoutPostInput
    likes?: LikesCreateNestedManyWithoutPostInput
    comments?: CommentsCreateNestedManyWithoutPostInput
    shares?: SharesCreateNestedManyWithoutPostInput
    newsFeed?: NewsFeedCreateNestedManyWithoutPostInput
    viewers?: ViewerCreateNestedManyWithoutPostInput
  }

  export type PostsUncheckedCreateWithoutTaggedFriendsInput = {
    id?: string
    userId: string
    title?: string | null
    content?: string | null
    postType?: $Enums.PostTypeEnum
    visibility?: $Enums.VisibilityEnum
    censor?: $Enums.CensorEnum
    shareCount?: number
    likeCount?: number
    commentCount?: number
    createdAt?: Date | string
    expired_at?: Date | string | null
    updatedAt?: Date | string
    hashtags?: PostHashtagsUncheckedCreateNestedManyWithoutPostInput
    media?: MediaUncheckedCreateNestedManyWithoutPostInput
    likes?: LikesUncheckedCreateNestedManyWithoutPostInput
    comments?: CommentsUncheckedCreateNestedManyWithoutPostInput
    shares?: SharesUncheckedCreateNestedManyWithoutPostInput
    newsFeed?: NewsFeedUncheckedCreateNestedManyWithoutPostInput
    viewers?: ViewerUncheckedCreateNestedManyWithoutPostInput
  }

  export type PostsCreateOrConnectWithoutTaggedFriendsInput = {
    where: PostsWhereUniqueInput
    create: XOR<PostsCreateWithoutTaggedFriendsInput, PostsUncheckedCreateWithoutTaggedFriendsInput>
  }

  export type UsersCreateWithoutTaggedInPostsInput = {
    id?: string
    username: string
    fullname?: string | null
    avatarUrl?: string | null
    posts?: PostsCreateNestedManyWithoutUserInput
    likes?: LikesCreateNestedManyWithoutUserInput
    comments?: CommentsCreateNestedManyWithoutUserInput
    shares?: SharesCreateNestedManyWithoutUserInput
    newsFeed?: NewsFeedCreateNestedManyWithoutUserInput
    taggedByPosts?: PostTagFriendCreateNestedManyWithoutTaggedByUserInput
    viewedPosts?: ViewerCreateNestedManyWithoutUserInput
  }

  export type UsersUncheckedCreateWithoutTaggedInPostsInput = {
    id?: string
    username: string
    fullname?: string | null
    avatarUrl?: string | null
    posts?: PostsUncheckedCreateNestedManyWithoutUserInput
    likes?: LikesUncheckedCreateNestedManyWithoutUserInput
    comments?: CommentsUncheckedCreateNestedManyWithoutUserInput
    shares?: SharesUncheckedCreateNestedManyWithoutUserInput
    newsFeed?: NewsFeedUncheckedCreateNestedManyWithoutUserInput
    taggedByPosts?: PostTagFriendUncheckedCreateNestedManyWithoutTaggedByUserInput
    viewedPosts?: ViewerUncheckedCreateNestedManyWithoutUserInput
  }

  export type UsersCreateOrConnectWithoutTaggedInPostsInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutTaggedInPostsInput, UsersUncheckedCreateWithoutTaggedInPostsInput>
  }

  export type UsersCreateWithoutTaggedByPostsInput = {
    id?: string
    username: string
    fullname?: string | null
    avatarUrl?: string | null
    posts?: PostsCreateNestedManyWithoutUserInput
    likes?: LikesCreateNestedManyWithoutUserInput
    comments?: CommentsCreateNestedManyWithoutUserInput
    shares?: SharesCreateNestedManyWithoutUserInput
    newsFeed?: NewsFeedCreateNestedManyWithoutUserInput
    taggedInPosts?: PostTagFriendCreateNestedManyWithoutUserInput
    viewedPosts?: ViewerCreateNestedManyWithoutUserInput
  }

  export type UsersUncheckedCreateWithoutTaggedByPostsInput = {
    id?: string
    username: string
    fullname?: string | null
    avatarUrl?: string | null
    posts?: PostsUncheckedCreateNestedManyWithoutUserInput
    likes?: LikesUncheckedCreateNestedManyWithoutUserInput
    comments?: CommentsUncheckedCreateNestedManyWithoutUserInput
    shares?: SharesUncheckedCreateNestedManyWithoutUserInput
    newsFeed?: NewsFeedUncheckedCreateNestedManyWithoutUserInput
    taggedInPosts?: PostTagFriendUncheckedCreateNestedManyWithoutUserInput
    viewedPosts?: ViewerUncheckedCreateNestedManyWithoutUserInput
  }

  export type UsersCreateOrConnectWithoutTaggedByPostsInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutTaggedByPostsInput, UsersUncheckedCreateWithoutTaggedByPostsInput>
  }

  export type PostsUpsertWithoutTaggedFriendsInput = {
    update: XOR<PostsUpdateWithoutTaggedFriendsInput, PostsUncheckedUpdateWithoutTaggedFriendsInput>
    create: XOR<PostsCreateWithoutTaggedFriendsInput, PostsUncheckedCreateWithoutTaggedFriendsInput>
    where?: PostsWhereInput
  }

  export type PostsUpdateToOneWithWhereWithoutTaggedFriendsInput = {
    where?: PostsWhereInput
    data: XOR<PostsUpdateWithoutTaggedFriendsInput, PostsUncheckedUpdateWithoutTaggedFriendsInput>
  }

  export type PostsUpdateWithoutTaggedFriendsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    postType?: EnumPostTypeEnumFieldUpdateOperationsInput | $Enums.PostTypeEnum
    visibility?: EnumVisibilityEnumFieldUpdateOperationsInput | $Enums.VisibilityEnum
    censor?: EnumCensorEnumFieldUpdateOperationsInput | $Enums.CensorEnum
    shareCount?: IntFieldUpdateOperationsInput | number
    likeCount?: IntFieldUpdateOperationsInput | number
    commentCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expired_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UsersUpdateOneRequiredWithoutPostsNestedInput
    hashtags?: PostHashtagsUpdateManyWithoutPostNestedInput
    media?: MediaUpdateManyWithoutPostNestedInput
    likes?: LikesUpdateManyWithoutPostNestedInput
    comments?: CommentsUpdateManyWithoutPostNestedInput
    shares?: SharesUpdateManyWithoutPostNestedInput
    newsFeed?: NewsFeedUpdateManyWithoutPostNestedInput
    viewers?: ViewerUpdateManyWithoutPostNestedInput
  }

  export type PostsUncheckedUpdateWithoutTaggedFriendsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    postType?: EnumPostTypeEnumFieldUpdateOperationsInput | $Enums.PostTypeEnum
    visibility?: EnumVisibilityEnumFieldUpdateOperationsInput | $Enums.VisibilityEnum
    censor?: EnumCensorEnumFieldUpdateOperationsInput | $Enums.CensorEnum
    shareCount?: IntFieldUpdateOperationsInput | number
    likeCount?: IntFieldUpdateOperationsInput | number
    commentCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expired_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    hashtags?: PostHashtagsUncheckedUpdateManyWithoutPostNestedInput
    media?: MediaUncheckedUpdateManyWithoutPostNestedInput
    likes?: LikesUncheckedUpdateManyWithoutPostNestedInput
    comments?: CommentsUncheckedUpdateManyWithoutPostNestedInput
    shares?: SharesUncheckedUpdateManyWithoutPostNestedInput
    newsFeed?: NewsFeedUncheckedUpdateManyWithoutPostNestedInput
    viewers?: ViewerUncheckedUpdateManyWithoutPostNestedInput
  }

  export type UsersUpsertWithoutTaggedInPostsInput = {
    update: XOR<UsersUpdateWithoutTaggedInPostsInput, UsersUncheckedUpdateWithoutTaggedInPostsInput>
    create: XOR<UsersCreateWithoutTaggedInPostsInput, UsersUncheckedCreateWithoutTaggedInPostsInput>
    where?: UsersWhereInput
  }

  export type UsersUpdateToOneWithWhereWithoutTaggedInPostsInput = {
    where?: UsersWhereInput
    data: XOR<UsersUpdateWithoutTaggedInPostsInput, UsersUncheckedUpdateWithoutTaggedInPostsInput>
  }

  export type UsersUpdateWithoutTaggedInPostsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    fullname?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    posts?: PostsUpdateManyWithoutUserNestedInput
    likes?: LikesUpdateManyWithoutUserNestedInput
    comments?: CommentsUpdateManyWithoutUserNestedInput
    shares?: SharesUpdateManyWithoutUserNestedInput
    newsFeed?: NewsFeedUpdateManyWithoutUserNestedInput
    taggedByPosts?: PostTagFriendUpdateManyWithoutTaggedByUserNestedInput
    viewedPosts?: ViewerUpdateManyWithoutUserNestedInput
  }

  export type UsersUncheckedUpdateWithoutTaggedInPostsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    fullname?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    posts?: PostsUncheckedUpdateManyWithoutUserNestedInput
    likes?: LikesUncheckedUpdateManyWithoutUserNestedInput
    comments?: CommentsUncheckedUpdateManyWithoutUserNestedInput
    shares?: SharesUncheckedUpdateManyWithoutUserNestedInput
    newsFeed?: NewsFeedUncheckedUpdateManyWithoutUserNestedInput
    taggedByPosts?: PostTagFriendUncheckedUpdateManyWithoutTaggedByUserNestedInput
    viewedPosts?: ViewerUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UsersUpsertWithoutTaggedByPostsInput = {
    update: XOR<UsersUpdateWithoutTaggedByPostsInput, UsersUncheckedUpdateWithoutTaggedByPostsInput>
    create: XOR<UsersCreateWithoutTaggedByPostsInput, UsersUncheckedCreateWithoutTaggedByPostsInput>
    where?: UsersWhereInput
  }

  export type UsersUpdateToOneWithWhereWithoutTaggedByPostsInput = {
    where?: UsersWhereInput
    data: XOR<UsersUpdateWithoutTaggedByPostsInput, UsersUncheckedUpdateWithoutTaggedByPostsInput>
  }

  export type UsersUpdateWithoutTaggedByPostsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    fullname?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    posts?: PostsUpdateManyWithoutUserNestedInput
    likes?: LikesUpdateManyWithoutUserNestedInput
    comments?: CommentsUpdateManyWithoutUserNestedInput
    shares?: SharesUpdateManyWithoutUserNestedInput
    newsFeed?: NewsFeedUpdateManyWithoutUserNestedInput
    taggedInPosts?: PostTagFriendUpdateManyWithoutUserNestedInput
    viewedPosts?: ViewerUpdateManyWithoutUserNestedInput
  }

  export type UsersUncheckedUpdateWithoutTaggedByPostsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    fullname?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    posts?: PostsUncheckedUpdateManyWithoutUserNestedInput
    likes?: LikesUncheckedUpdateManyWithoutUserNestedInput
    comments?: CommentsUncheckedUpdateManyWithoutUserNestedInput
    shares?: SharesUncheckedUpdateManyWithoutUserNestedInput
    newsFeed?: NewsFeedUncheckedUpdateManyWithoutUserNestedInput
    taggedInPosts?: PostTagFriendUncheckedUpdateManyWithoutUserNestedInput
    viewedPosts?: ViewerUncheckedUpdateManyWithoutUserNestedInput
  }

  export type PostsCreateWithoutMediaInput = {
    id?: string
    title?: string | null
    content?: string | null
    postType?: $Enums.PostTypeEnum
    visibility?: $Enums.VisibilityEnum
    censor?: $Enums.CensorEnum
    shareCount?: number
    likeCount?: number
    commentCount?: number
    createdAt?: Date | string
    expired_at?: Date | string | null
    updatedAt?: Date | string
    user: UsersCreateNestedOneWithoutPostsInput
    hashtags?: PostHashtagsCreateNestedManyWithoutPostInput
    taggedFriends?: PostTagFriendCreateNestedManyWithoutPostInput
    likes?: LikesCreateNestedManyWithoutPostInput
    comments?: CommentsCreateNestedManyWithoutPostInput
    shares?: SharesCreateNestedManyWithoutPostInput
    newsFeed?: NewsFeedCreateNestedManyWithoutPostInput
    viewers?: ViewerCreateNestedManyWithoutPostInput
  }

  export type PostsUncheckedCreateWithoutMediaInput = {
    id?: string
    userId: string
    title?: string | null
    content?: string | null
    postType?: $Enums.PostTypeEnum
    visibility?: $Enums.VisibilityEnum
    censor?: $Enums.CensorEnum
    shareCount?: number
    likeCount?: number
    commentCount?: number
    createdAt?: Date | string
    expired_at?: Date | string | null
    updatedAt?: Date | string
    hashtags?: PostHashtagsUncheckedCreateNestedManyWithoutPostInput
    taggedFriends?: PostTagFriendUncheckedCreateNestedManyWithoutPostInput
    likes?: LikesUncheckedCreateNestedManyWithoutPostInput
    comments?: CommentsUncheckedCreateNestedManyWithoutPostInput
    shares?: SharesUncheckedCreateNestedManyWithoutPostInput
    newsFeed?: NewsFeedUncheckedCreateNestedManyWithoutPostInput
    viewers?: ViewerUncheckedCreateNestedManyWithoutPostInput
  }

  export type PostsCreateOrConnectWithoutMediaInput = {
    where: PostsWhereUniqueInput
    create: XOR<PostsCreateWithoutMediaInput, PostsUncheckedCreateWithoutMediaInput>
  }

  export type PostsUpsertWithoutMediaInput = {
    update: XOR<PostsUpdateWithoutMediaInput, PostsUncheckedUpdateWithoutMediaInput>
    create: XOR<PostsCreateWithoutMediaInput, PostsUncheckedCreateWithoutMediaInput>
    where?: PostsWhereInput
  }

  export type PostsUpdateToOneWithWhereWithoutMediaInput = {
    where?: PostsWhereInput
    data: XOR<PostsUpdateWithoutMediaInput, PostsUncheckedUpdateWithoutMediaInput>
  }

  export type PostsUpdateWithoutMediaInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    postType?: EnumPostTypeEnumFieldUpdateOperationsInput | $Enums.PostTypeEnum
    visibility?: EnumVisibilityEnumFieldUpdateOperationsInput | $Enums.VisibilityEnum
    censor?: EnumCensorEnumFieldUpdateOperationsInput | $Enums.CensorEnum
    shareCount?: IntFieldUpdateOperationsInput | number
    likeCount?: IntFieldUpdateOperationsInput | number
    commentCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expired_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UsersUpdateOneRequiredWithoutPostsNestedInput
    hashtags?: PostHashtagsUpdateManyWithoutPostNestedInput
    taggedFriends?: PostTagFriendUpdateManyWithoutPostNestedInput
    likes?: LikesUpdateManyWithoutPostNestedInput
    comments?: CommentsUpdateManyWithoutPostNestedInput
    shares?: SharesUpdateManyWithoutPostNestedInput
    newsFeed?: NewsFeedUpdateManyWithoutPostNestedInput
    viewers?: ViewerUpdateManyWithoutPostNestedInput
  }

  export type PostsUncheckedUpdateWithoutMediaInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    postType?: EnumPostTypeEnumFieldUpdateOperationsInput | $Enums.PostTypeEnum
    visibility?: EnumVisibilityEnumFieldUpdateOperationsInput | $Enums.VisibilityEnum
    censor?: EnumCensorEnumFieldUpdateOperationsInput | $Enums.CensorEnum
    shareCount?: IntFieldUpdateOperationsInput | number
    likeCount?: IntFieldUpdateOperationsInput | number
    commentCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expired_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    hashtags?: PostHashtagsUncheckedUpdateManyWithoutPostNestedInput
    taggedFriends?: PostTagFriendUncheckedUpdateManyWithoutPostNestedInput
    likes?: LikesUncheckedUpdateManyWithoutPostNestedInput
    comments?: CommentsUncheckedUpdateManyWithoutPostNestedInput
    shares?: SharesUncheckedUpdateManyWithoutPostNestedInput
    newsFeed?: NewsFeedUncheckedUpdateManyWithoutPostNestedInput
    viewers?: ViewerUncheckedUpdateManyWithoutPostNestedInput
  }

  export type UsersCreateWithoutLikesInput = {
    id?: string
    username: string
    fullname?: string | null
    avatarUrl?: string | null
    posts?: PostsCreateNestedManyWithoutUserInput
    comments?: CommentsCreateNestedManyWithoutUserInput
    shares?: SharesCreateNestedManyWithoutUserInput
    newsFeed?: NewsFeedCreateNestedManyWithoutUserInput
    taggedInPosts?: PostTagFriendCreateNestedManyWithoutUserInput
    taggedByPosts?: PostTagFriendCreateNestedManyWithoutTaggedByUserInput
    viewedPosts?: ViewerCreateNestedManyWithoutUserInput
  }

  export type UsersUncheckedCreateWithoutLikesInput = {
    id?: string
    username: string
    fullname?: string | null
    avatarUrl?: string | null
    posts?: PostsUncheckedCreateNestedManyWithoutUserInput
    comments?: CommentsUncheckedCreateNestedManyWithoutUserInput
    shares?: SharesUncheckedCreateNestedManyWithoutUserInput
    newsFeed?: NewsFeedUncheckedCreateNestedManyWithoutUserInput
    taggedInPosts?: PostTagFriendUncheckedCreateNestedManyWithoutUserInput
    taggedByPosts?: PostTagFriendUncheckedCreateNestedManyWithoutTaggedByUserInput
    viewedPosts?: ViewerUncheckedCreateNestedManyWithoutUserInput
  }

  export type UsersCreateOrConnectWithoutLikesInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutLikesInput, UsersUncheckedCreateWithoutLikesInput>
  }

  export type PostsCreateWithoutLikesInput = {
    id?: string
    title?: string | null
    content?: string | null
    postType?: $Enums.PostTypeEnum
    visibility?: $Enums.VisibilityEnum
    censor?: $Enums.CensorEnum
    shareCount?: number
    likeCount?: number
    commentCount?: number
    createdAt?: Date | string
    expired_at?: Date | string | null
    updatedAt?: Date | string
    user: UsersCreateNestedOneWithoutPostsInput
    hashtags?: PostHashtagsCreateNestedManyWithoutPostInput
    taggedFriends?: PostTagFriendCreateNestedManyWithoutPostInput
    media?: MediaCreateNestedManyWithoutPostInput
    comments?: CommentsCreateNestedManyWithoutPostInput
    shares?: SharesCreateNestedManyWithoutPostInput
    newsFeed?: NewsFeedCreateNestedManyWithoutPostInput
    viewers?: ViewerCreateNestedManyWithoutPostInput
  }

  export type PostsUncheckedCreateWithoutLikesInput = {
    id?: string
    userId: string
    title?: string | null
    content?: string | null
    postType?: $Enums.PostTypeEnum
    visibility?: $Enums.VisibilityEnum
    censor?: $Enums.CensorEnum
    shareCount?: number
    likeCount?: number
    commentCount?: number
    createdAt?: Date | string
    expired_at?: Date | string | null
    updatedAt?: Date | string
    hashtags?: PostHashtagsUncheckedCreateNestedManyWithoutPostInput
    taggedFriends?: PostTagFriendUncheckedCreateNestedManyWithoutPostInput
    media?: MediaUncheckedCreateNestedManyWithoutPostInput
    comments?: CommentsUncheckedCreateNestedManyWithoutPostInput
    shares?: SharesUncheckedCreateNestedManyWithoutPostInput
    newsFeed?: NewsFeedUncheckedCreateNestedManyWithoutPostInput
    viewers?: ViewerUncheckedCreateNestedManyWithoutPostInput
  }

  export type PostsCreateOrConnectWithoutLikesInput = {
    where: PostsWhereUniqueInput
    create: XOR<PostsCreateWithoutLikesInput, PostsUncheckedCreateWithoutLikesInput>
  }

  export type UsersUpsertWithoutLikesInput = {
    update: XOR<UsersUpdateWithoutLikesInput, UsersUncheckedUpdateWithoutLikesInput>
    create: XOR<UsersCreateWithoutLikesInput, UsersUncheckedCreateWithoutLikesInput>
    where?: UsersWhereInput
  }

  export type UsersUpdateToOneWithWhereWithoutLikesInput = {
    where?: UsersWhereInput
    data: XOR<UsersUpdateWithoutLikesInput, UsersUncheckedUpdateWithoutLikesInput>
  }

  export type UsersUpdateWithoutLikesInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    fullname?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    posts?: PostsUpdateManyWithoutUserNestedInput
    comments?: CommentsUpdateManyWithoutUserNestedInput
    shares?: SharesUpdateManyWithoutUserNestedInput
    newsFeed?: NewsFeedUpdateManyWithoutUserNestedInput
    taggedInPosts?: PostTagFriendUpdateManyWithoutUserNestedInput
    taggedByPosts?: PostTagFriendUpdateManyWithoutTaggedByUserNestedInput
    viewedPosts?: ViewerUpdateManyWithoutUserNestedInput
  }

  export type UsersUncheckedUpdateWithoutLikesInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    fullname?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    posts?: PostsUncheckedUpdateManyWithoutUserNestedInput
    comments?: CommentsUncheckedUpdateManyWithoutUserNestedInput
    shares?: SharesUncheckedUpdateManyWithoutUserNestedInput
    newsFeed?: NewsFeedUncheckedUpdateManyWithoutUserNestedInput
    taggedInPosts?: PostTagFriendUncheckedUpdateManyWithoutUserNestedInput
    taggedByPosts?: PostTagFriendUncheckedUpdateManyWithoutTaggedByUserNestedInput
    viewedPosts?: ViewerUncheckedUpdateManyWithoutUserNestedInput
  }

  export type PostsUpsertWithoutLikesInput = {
    update: XOR<PostsUpdateWithoutLikesInput, PostsUncheckedUpdateWithoutLikesInput>
    create: XOR<PostsCreateWithoutLikesInput, PostsUncheckedCreateWithoutLikesInput>
    where?: PostsWhereInput
  }

  export type PostsUpdateToOneWithWhereWithoutLikesInput = {
    where?: PostsWhereInput
    data: XOR<PostsUpdateWithoutLikesInput, PostsUncheckedUpdateWithoutLikesInput>
  }

  export type PostsUpdateWithoutLikesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    postType?: EnumPostTypeEnumFieldUpdateOperationsInput | $Enums.PostTypeEnum
    visibility?: EnumVisibilityEnumFieldUpdateOperationsInput | $Enums.VisibilityEnum
    censor?: EnumCensorEnumFieldUpdateOperationsInput | $Enums.CensorEnum
    shareCount?: IntFieldUpdateOperationsInput | number
    likeCount?: IntFieldUpdateOperationsInput | number
    commentCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expired_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UsersUpdateOneRequiredWithoutPostsNestedInput
    hashtags?: PostHashtagsUpdateManyWithoutPostNestedInput
    taggedFriends?: PostTagFriendUpdateManyWithoutPostNestedInput
    media?: MediaUpdateManyWithoutPostNestedInput
    comments?: CommentsUpdateManyWithoutPostNestedInput
    shares?: SharesUpdateManyWithoutPostNestedInput
    newsFeed?: NewsFeedUpdateManyWithoutPostNestedInput
    viewers?: ViewerUpdateManyWithoutPostNestedInput
  }

  export type PostsUncheckedUpdateWithoutLikesInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    postType?: EnumPostTypeEnumFieldUpdateOperationsInput | $Enums.PostTypeEnum
    visibility?: EnumVisibilityEnumFieldUpdateOperationsInput | $Enums.VisibilityEnum
    censor?: EnumCensorEnumFieldUpdateOperationsInput | $Enums.CensorEnum
    shareCount?: IntFieldUpdateOperationsInput | number
    likeCount?: IntFieldUpdateOperationsInput | number
    commentCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expired_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    hashtags?: PostHashtagsUncheckedUpdateManyWithoutPostNestedInput
    taggedFriends?: PostTagFriendUncheckedUpdateManyWithoutPostNestedInput
    media?: MediaUncheckedUpdateManyWithoutPostNestedInput
    comments?: CommentsUncheckedUpdateManyWithoutPostNestedInput
    shares?: SharesUncheckedUpdateManyWithoutPostNestedInput
    newsFeed?: NewsFeedUncheckedUpdateManyWithoutPostNestedInput
    viewers?: ViewerUncheckedUpdateManyWithoutPostNestedInput
  }

  export type UsersCreateWithoutCommentsInput = {
    id?: string
    username: string
    fullname?: string | null
    avatarUrl?: string | null
    posts?: PostsCreateNestedManyWithoutUserInput
    likes?: LikesCreateNestedManyWithoutUserInput
    shares?: SharesCreateNestedManyWithoutUserInput
    newsFeed?: NewsFeedCreateNestedManyWithoutUserInput
    taggedInPosts?: PostTagFriendCreateNestedManyWithoutUserInput
    taggedByPosts?: PostTagFriendCreateNestedManyWithoutTaggedByUserInput
    viewedPosts?: ViewerCreateNestedManyWithoutUserInput
  }

  export type UsersUncheckedCreateWithoutCommentsInput = {
    id?: string
    username: string
    fullname?: string | null
    avatarUrl?: string | null
    posts?: PostsUncheckedCreateNestedManyWithoutUserInput
    likes?: LikesUncheckedCreateNestedManyWithoutUserInput
    shares?: SharesUncheckedCreateNestedManyWithoutUserInput
    newsFeed?: NewsFeedUncheckedCreateNestedManyWithoutUserInput
    taggedInPosts?: PostTagFriendUncheckedCreateNestedManyWithoutUserInput
    taggedByPosts?: PostTagFriendUncheckedCreateNestedManyWithoutTaggedByUserInput
    viewedPosts?: ViewerUncheckedCreateNestedManyWithoutUserInput
  }

  export type UsersCreateOrConnectWithoutCommentsInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutCommentsInput, UsersUncheckedCreateWithoutCommentsInput>
  }

  export type PostsCreateWithoutCommentsInput = {
    id?: string
    title?: string | null
    content?: string | null
    postType?: $Enums.PostTypeEnum
    visibility?: $Enums.VisibilityEnum
    censor?: $Enums.CensorEnum
    shareCount?: number
    likeCount?: number
    commentCount?: number
    createdAt?: Date | string
    expired_at?: Date | string | null
    updatedAt?: Date | string
    user: UsersCreateNestedOneWithoutPostsInput
    hashtags?: PostHashtagsCreateNestedManyWithoutPostInput
    taggedFriends?: PostTagFriendCreateNestedManyWithoutPostInput
    media?: MediaCreateNestedManyWithoutPostInput
    likes?: LikesCreateNestedManyWithoutPostInput
    shares?: SharesCreateNestedManyWithoutPostInput
    newsFeed?: NewsFeedCreateNestedManyWithoutPostInput
    viewers?: ViewerCreateNestedManyWithoutPostInput
  }

  export type PostsUncheckedCreateWithoutCommentsInput = {
    id?: string
    userId: string
    title?: string | null
    content?: string | null
    postType?: $Enums.PostTypeEnum
    visibility?: $Enums.VisibilityEnum
    censor?: $Enums.CensorEnum
    shareCount?: number
    likeCount?: number
    commentCount?: number
    createdAt?: Date | string
    expired_at?: Date | string | null
    updatedAt?: Date | string
    hashtags?: PostHashtagsUncheckedCreateNestedManyWithoutPostInput
    taggedFriends?: PostTagFriendUncheckedCreateNestedManyWithoutPostInput
    media?: MediaUncheckedCreateNestedManyWithoutPostInput
    likes?: LikesUncheckedCreateNestedManyWithoutPostInput
    shares?: SharesUncheckedCreateNestedManyWithoutPostInput
    newsFeed?: NewsFeedUncheckedCreateNestedManyWithoutPostInput
    viewers?: ViewerUncheckedCreateNestedManyWithoutPostInput
  }

  export type PostsCreateOrConnectWithoutCommentsInput = {
    where: PostsWhereUniqueInput
    create: XOR<PostsCreateWithoutCommentsInput, PostsUncheckedCreateWithoutCommentsInput>
  }

  export type CommentsCreateWithoutRepliesInput = {
    id?: string
    content: string
    createdAt?: Date | string
    user?: UsersCreateNestedOneWithoutCommentsInput
    post: PostsCreateNestedOneWithoutCommentsInput
    parent?: CommentsCreateNestedOneWithoutRepliesInput
  }

  export type CommentsUncheckedCreateWithoutRepliesInput = {
    id?: string
    userId?: string | null
    postId: string
    parentId?: string | null
    content: string
    createdAt?: Date | string
  }

  export type CommentsCreateOrConnectWithoutRepliesInput = {
    where: CommentsWhereUniqueInput
    create: XOR<CommentsCreateWithoutRepliesInput, CommentsUncheckedCreateWithoutRepliesInput>
  }

  export type CommentsCreateWithoutParentInput = {
    id?: string
    content: string
    createdAt?: Date | string
    user?: UsersCreateNestedOneWithoutCommentsInput
    post: PostsCreateNestedOneWithoutCommentsInput
    replies?: CommentsCreateNestedManyWithoutParentInput
  }

  export type CommentsUncheckedCreateWithoutParentInput = {
    id?: string
    userId?: string | null
    postId: string
    content: string
    createdAt?: Date | string
    replies?: CommentsUncheckedCreateNestedManyWithoutParentInput
  }

  export type CommentsCreateOrConnectWithoutParentInput = {
    where: CommentsWhereUniqueInput
    create: XOR<CommentsCreateWithoutParentInput, CommentsUncheckedCreateWithoutParentInput>
  }

  export type CommentsCreateManyParentInputEnvelope = {
    data: CommentsCreateManyParentInput | CommentsCreateManyParentInput[]
    skipDuplicates?: boolean
  }

  export type UsersUpsertWithoutCommentsInput = {
    update: XOR<UsersUpdateWithoutCommentsInput, UsersUncheckedUpdateWithoutCommentsInput>
    create: XOR<UsersCreateWithoutCommentsInput, UsersUncheckedCreateWithoutCommentsInput>
    where?: UsersWhereInput
  }

  export type UsersUpdateToOneWithWhereWithoutCommentsInput = {
    where?: UsersWhereInput
    data: XOR<UsersUpdateWithoutCommentsInput, UsersUncheckedUpdateWithoutCommentsInput>
  }

  export type UsersUpdateWithoutCommentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    fullname?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    posts?: PostsUpdateManyWithoutUserNestedInput
    likes?: LikesUpdateManyWithoutUserNestedInput
    shares?: SharesUpdateManyWithoutUserNestedInput
    newsFeed?: NewsFeedUpdateManyWithoutUserNestedInput
    taggedInPosts?: PostTagFriendUpdateManyWithoutUserNestedInput
    taggedByPosts?: PostTagFriendUpdateManyWithoutTaggedByUserNestedInput
    viewedPosts?: ViewerUpdateManyWithoutUserNestedInput
  }

  export type UsersUncheckedUpdateWithoutCommentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    fullname?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    posts?: PostsUncheckedUpdateManyWithoutUserNestedInput
    likes?: LikesUncheckedUpdateManyWithoutUserNestedInput
    shares?: SharesUncheckedUpdateManyWithoutUserNestedInput
    newsFeed?: NewsFeedUncheckedUpdateManyWithoutUserNestedInput
    taggedInPosts?: PostTagFriendUncheckedUpdateManyWithoutUserNestedInput
    taggedByPosts?: PostTagFriendUncheckedUpdateManyWithoutTaggedByUserNestedInput
    viewedPosts?: ViewerUncheckedUpdateManyWithoutUserNestedInput
  }

  export type PostsUpsertWithoutCommentsInput = {
    update: XOR<PostsUpdateWithoutCommentsInput, PostsUncheckedUpdateWithoutCommentsInput>
    create: XOR<PostsCreateWithoutCommentsInput, PostsUncheckedCreateWithoutCommentsInput>
    where?: PostsWhereInput
  }

  export type PostsUpdateToOneWithWhereWithoutCommentsInput = {
    where?: PostsWhereInput
    data: XOR<PostsUpdateWithoutCommentsInput, PostsUncheckedUpdateWithoutCommentsInput>
  }

  export type PostsUpdateWithoutCommentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    postType?: EnumPostTypeEnumFieldUpdateOperationsInput | $Enums.PostTypeEnum
    visibility?: EnumVisibilityEnumFieldUpdateOperationsInput | $Enums.VisibilityEnum
    censor?: EnumCensorEnumFieldUpdateOperationsInput | $Enums.CensorEnum
    shareCount?: IntFieldUpdateOperationsInput | number
    likeCount?: IntFieldUpdateOperationsInput | number
    commentCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expired_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UsersUpdateOneRequiredWithoutPostsNestedInput
    hashtags?: PostHashtagsUpdateManyWithoutPostNestedInput
    taggedFriends?: PostTagFriendUpdateManyWithoutPostNestedInput
    media?: MediaUpdateManyWithoutPostNestedInput
    likes?: LikesUpdateManyWithoutPostNestedInput
    shares?: SharesUpdateManyWithoutPostNestedInput
    newsFeed?: NewsFeedUpdateManyWithoutPostNestedInput
    viewers?: ViewerUpdateManyWithoutPostNestedInput
  }

  export type PostsUncheckedUpdateWithoutCommentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    postType?: EnumPostTypeEnumFieldUpdateOperationsInput | $Enums.PostTypeEnum
    visibility?: EnumVisibilityEnumFieldUpdateOperationsInput | $Enums.VisibilityEnum
    censor?: EnumCensorEnumFieldUpdateOperationsInput | $Enums.CensorEnum
    shareCount?: IntFieldUpdateOperationsInput | number
    likeCount?: IntFieldUpdateOperationsInput | number
    commentCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expired_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    hashtags?: PostHashtagsUncheckedUpdateManyWithoutPostNestedInput
    taggedFriends?: PostTagFriendUncheckedUpdateManyWithoutPostNestedInput
    media?: MediaUncheckedUpdateManyWithoutPostNestedInput
    likes?: LikesUncheckedUpdateManyWithoutPostNestedInput
    shares?: SharesUncheckedUpdateManyWithoutPostNestedInput
    newsFeed?: NewsFeedUncheckedUpdateManyWithoutPostNestedInput
    viewers?: ViewerUncheckedUpdateManyWithoutPostNestedInput
  }

  export type CommentsUpsertWithoutRepliesInput = {
    update: XOR<CommentsUpdateWithoutRepliesInput, CommentsUncheckedUpdateWithoutRepliesInput>
    create: XOR<CommentsCreateWithoutRepliesInput, CommentsUncheckedCreateWithoutRepliesInput>
    where?: CommentsWhereInput
  }

  export type CommentsUpdateToOneWithWhereWithoutRepliesInput = {
    where?: CommentsWhereInput
    data: XOR<CommentsUpdateWithoutRepliesInput, CommentsUncheckedUpdateWithoutRepliesInput>
  }

  export type CommentsUpdateWithoutRepliesInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UsersUpdateOneWithoutCommentsNestedInput
    post?: PostsUpdateOneRequiredWithoutCommentsNestedInput
    parent?: CommentsUpdateOneWithoutRepliesNestedInput
  }

  export type CommentsUncheckedUpdateWithoutRepliesInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    postId?: StringFieldUpdateOperationsInput | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentsUpsertWithWhereUniqueWithoutParentInput = {
    where: CommentsWhereUniqueInput
    update: XOR<CommentsUpdateWithoutParentInput, CommentsUncheckedUpdateWithoutParentInput>
    create: XOR<CommentsCreateWithoutParentInput, CommentsUncheckedCreateWithoutParentInput>
  }

  export type CommentsUpdateWithWhereUniqueWithoutParentInput = {
    where: CommentsWhereUniqueInput
    data: XOR<CommentsUpdateWithoutParentInput, CommentsUncheckedUpdateWithoutParentInput>
  }

  export type CommentsUpdateManyWithWhereWithoutParentInput = {
    where: CommentsScalarWhereInput
    data: XOR<CommentsUpdateManyMutationInput, CommentsUncheckedUpdateManyWithoutParentInput>
  }

  export type UsersCreateWithoutSharesInput = {
    id?: string
    username: string
    fullname?: string | null
    avatarUrl?: string | null
    posts?: PostsCreateNestedManyWithoutUserInput
    likes?: LikesCreateNestedManyWithoutUserInput
    comments?: CommentsCreateNestedManyWithoutUserInput
    newsFeed?: NewsFeedCreateNestedManyWithoutUserInput
    taggedInPosts?: PostTagFriendCreateNestedManyWithoutUserInput
    taggedByPosts?: PostTagFriendCreateNestedManyWithoutTaggedByUserInput
    viewedPosts?: ViewerCreateNestedManyWithoutUserInput
  }

  export type UsersUncheckedCreateWithoutSharesInput = {
    id?: string
    username: string
    fullname?: string | null
    avatarUrl?: string | null
    posts?: PostsUncheckedCreateNestedManyWithoutUserInput
    likes?: LikesUncheckedCreateNestedManyWithoutUserInput
    comments?: CommentsUncheckedCreateNestedManyWithoutUserInput
    newsFeed?: NewsFeedUncheckedCreateNestedManyWithoutUserInput
    taggedInPosts?: PostTagFriendUncheckedCreateNestedManyWithoutUserInput
    taggedByPosts?: PostTagFriendUncheckedCreateNestedManyWithoutTaggedByUserInput
    viewedPosts?: ViewerUncheckedCreateNestedManyWithoutUserInput
  }

  export type UsersCreateOrConnectWithoutSharesInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutSharesInput, UsersUncheckedCreateWithoutSharesInput>
  }

  export type PostsCreateWithoutSharesInput = {
    id?: string
    title?: string | null
    content?: string | null
    postType?: $Enums.PostTypeEnum
    visibility?: $Enums.VisibilityEnum
    censor?: $Enums.CensorEnum
    shareCount?: number
    likeCount?: number
    commentCount?: number
    createdAt?: Date | string
    expired_at?: Date | string | null
    updatedAt?: Date | string
    user: UsersCreateNestedOneWithoutPostsInput
    hashtags?: PostHashtagsCreateNestedManyWithoutPostInput
    taggedFriends?: PostTagFriendCreateNestedManyWithoutPostInput
    media?: MediaCreateNestedManyWithoutPostInput
    likes?: LikesCreateNestedManyWithoutPostInput
    comments?: CommentsCreateNestedManyWithoutPostInput
    newsFeed?: NewsFeedCreateNestedManyWithoutPostInput
    viewers?: ViewerCreateNestedManyWithoutPostInput
  }

  export type PostsUncheckedCreateWithoutSharesInput = {
    id?: string
    userId: string
    title?: string | null
    content?: string | null
    postType?: $Enums.PostTypeEnum
    visibility?: $Enums.VisibilityEnum
    censor?: $Enums.CensorEnum
    shareCount?: number
    likeCount?: number
    commentCount?: number
    createdAt?: Date | string
    expired_at?: Date | string | null
    updatedAt?: Date | string
    hashtags?: PostHashtagsUncheckedCreateNestedManyWithoutPostInput
    taggedFriends?: PostTagFriendUncheckedCreateNestedManyWithoutPostInput
    media?: MediaUncheckedCreateNestedManyWithoutPostInput
    likes?: LikesUncheckedCreateNestedManyWithoutPostInput
    comments?: CommentsUncheckedCreateNestedManyWithoutPostInput
    newsFeed?: NewsFeedUncheckedCreateNestedManyWithoutPostInput
    viewers?: ViewerUncheckedCreateNestedManyWithoutPostInput
  }

  export type PostsCreateOrConnectWithoutSharesInput = {
    where: PostsWhereUniqueInput
    create: XOR<PostsCreateWithoutSharesInput, PostsUncheckedCreateWithoutSharesInput>
  }

  export type UsersUpsertWithoutSharesInput = {
    update: XOR<UsersUpdateWithoutSharesInput, UsersUncheckedUpdateWithoutSharesInput>
    create: XOR<UsersCreateWithoutSharesInput, UsersUncheckedCreateWithoutSharesInput>
    where?: UsersWhereInput
  }

  export type UsersUpdateToOneWithWhereWithoutSharesInput = {
    where?: UsersWhereInput
    data: XOR<UsersUpdateWithoutSharesInput, UsersUncheckedUpdateWithoutSharesInput>
  }

  export type UsersUpdateWithoutSharesInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    fullname?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    posts?: PostsUpdateManyWithoutUserNestedInput
    likes?: LikesUpdateManyWithoutUserNestedInput
    comments?: CommentsUpdateManyWithoutUserNestedInput
    newsFeed?: NewsFeedUpdateManyWithoutUserNestedInput
    taggedInPosts?: PostTagFriendUpdateManyWithoutUserNestedInput
    taggedByPosts?: PostTagFriendUpdateManyWithoutTaggedByUserNestedInput
    viewedPosts?: ViewerUpdateManyWithoutUserNestedInput
  }

  export type UsersUncheckedUpdateWithoutSharesInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    fullname?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    posts?: PostsUncheckedUpdateManyWithoutUserNestedInput
    likes?: LikesUncheckedUpdateManyWithoutUserNestedInput
    comments?: CommentsUncheckedUpdateManyWithoutUserNestedInput
    newsFeed?: NewsFeedUncheckedUpdateManyWithoutUserNestedInput
    taggedInPosts?: PostTagFriendUncheckedUpdateManyWithoutUserNestedInput
    taggedByPosts?: PostTagFriendUncheckedUpdateManyWithoutTaggedByUserNestedInput
    viewedPosts?: ViewerUncheckedUpdateManyWithoutUserNestedInput
  }

  export type PostsUpsertWithoutSharesInput = {
    update: XOR<PostsUpdateWithoutSharesInput, PostsUncheckedUpdateWithoutSharesInput>
    create: XOR<PostsCreateWithoutSharesInput, PostsUncheckedCreateWithoutSharesInput>
    where?: PostsWhereInput
  }

  export type PostsUpdateToOneWithWhereWithoutSharesInput = {
    where?: PostsWhereInput
    data: XOR<PostsUpdateWithoutSharesInput, PostsUncheckedUpdateWithoutSharesInput>
  }

  export type PostsUpdateWithoutSharesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    postType?: EnumPostTypeEnumFieldUpdateOperationsInput | $Enums.PostTypeEnum
    visibility?: EnumVisibilityEnumFieldUpdateOperationsInput | $Enums.VisibilityEnum
    censor?: EnumCensorEnumFieldUpdateOperationsInput | $Enums.CensorEnum
    shareCount?: IntFieldUpdateOperationsInput | number
    likeCount?: IntFieldUpdateOperationsInput | number
    commentCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expired_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UsersUpdateOneRequiredWithoutPostsNestedInput
    hashtags?: PostHashtagsUpdateManyWithoutPostNestedInput
    taggedFriends?: PostTagFriendUpdateManyWithoutPostNestedInput
    media?: MediaUpdateManyWithoutPostNestedInput
    likes?: LikesUpdateManyWithoutPostNestedInput
    comments?: CommentsUpdateManyWithoutPostNestedInput
    newsFeed?: NewsFeedUpdateManyWithoutPostNestedInput
    viewers?: ViewerUpdateManyWithoutPostNestedInput
  }

  export type PostsUncheckedUpdateWithoutSharesInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    postType?: EnumPostTypeEnumFieldUpdateOperationsInput | $Enums.PostTypeEnum
    visibility?: EnumVisibilityEnumFieldUpdateOperationsInput | $Enums.VisibilityEnum
    censor?: EnumCensorEnumFieldUpdateOperationsInput | $Enums.CensorEnum
    shareCount?: IntFieldUpdateOperationsInput | number
    likeCount?: IntFieldUpdateOperationsInput | number
    commentCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expired_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    hashtags?: PostHashtagsUncheckedUpdateManyWithoutPostNestedInput
    taggedFriends?: PostTagFriendUncheckedUpdateManyWithoutPostNestedInput
    media?: MediaUncheckedUpdateManyWithoutPostNestedInput
    likes?: LikesUncheckedUpdateManyWithoutPostNestedInput
    comments?: CommentsUncheckedUpdateManyWithoutPostNestedInput
    newsFeed?: NewsFeedUncheckedUpdateManyWithoutPostNestedInput
    viewers?: ViewerUncheckedUpdateManyWithoutPostNestedInput
  }

  export type UsersCreateWithoutNewsFeedInput = {
    id?: string
    username: string
    fullname?: string | null
    avatarUrl?: string | null
    posts?: PostsCreateNestedManyWithoutUserInput
    likes?: LikesCreateNestedManyWithoutUserInput
    comments?: CommentsCreateNestedManyWithoutUserInput
    shares?: SharesCreateNestedManyWithoutUserInput
    taggedInPosts?: PostTagFriendCreateNestedManyWithoutUserInput
    taggedByPosts?: PostTagFriendCreateNestedManyWithoutTaggedByUserInput
    viewedPosts?: ViewerCreateNestedManyWithoutUserInput
  }

  export type UsersUncheckedCreateWithoutNewsFeedInput = {
    id?: string
    username: string
    fullname?: string | null
    avatarUrl?: string | null
    posts?: PostsUncheckedCreateNestedManyWithoutUserInput
    likes?: LikesUncheckedCreateNestedManyWithoutUserInput
    comments?: CommentsUncheckedCreateNestedManyWithoutUserInput
    shares?: SharesUncheckedCreateNestedManyWithoutUserInput
    taggedInPosts?: PostTagFriendUncheckedCreateNestedManyWithoutUserInput
    taggedByPosts?: PostTagFriendUncheckedCreateNestedManyWithoutTaggedByUserInput
    viewedPosts?: ViewerUncheckedCreateNestedManyWithoutUserInput
  }

  export type UsersCreateOrConnectWithoutNewsFeedInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutNewsFeedInput, UsersUncheckedCreateWithoutNewsFeedInput>
  }

  export type PostsCreateWithoutNewsFeedInput = {
    id?: string
    title?: string | null
    content?: string | null
    postType?: $Enums.PostTypeEnum
    visibility?: $Enums.VisibilityEnum
    censor?: $Enums.CensorEnum
    shareCount?: number
    likeCount?: number
    commentCount?: number
    createdAt?: Date | string
    expired_at?: Date | string | null
    updatedAt?: Date | string
    user: UsersCreateNestedOneWithoutPostsInput
    hashtags?: PostHashtagsCreateNestedManyWithoutPostInput
    taggedFriends?: PostTagFriendCreateNestedManyWithoutPostInput
    media?: MediaCreateNestedManyWithoutPostInput
    likes?: LikesCreateNestedManyWithoutPostInput
    comments?: CommentsCreateNestedManyWithoutPostInput
    shares?: SharesCreateNestedManyWithoutPostInput
    viewers?: ViewerCreateNestedManyWithoutPostInput
  }

  export type PostsUncheckedCreateWithoutNewsFeedInput = {
    id?: string
    userId: string
    title?: string | null
    content?: string | null
    postType?: $Enums.PostTypeEnum
    visibility?: $Enums.VisibilityEnum
    censor?: $Enums.CensorEnum
    shareCount?: number
    likeCount?: number
    commentCount?: number
    createdAt?: Date | string
    expired_at?: Date | string | null
    updatedAt?: Date | string
    hashtags?: PostHashtagsUncheckedCreateNestedManyWithoutPostInput
    taggedFriends?: PostTagFriendUncheckedCreateNestedManyWithoutPostInput
    media?: MediaUncheckedCreateNestedManyWithoutPostInput
    likes?: LikesUncheckedCreateNestedManyWithoutPostInput
    comments?: CommentsUncheckedCreateNestedManyWithoutPostInput
    shares?: SharesUncheckedCreateNestedManyWithoutPostInput
    viewers?: ViewerUncheckedCreateNestedManyWithoutPostInput
  }

  export type PostsCreateOrConnectWithoutNewsFeedInput = {
    where: PostsWhereUniqueInput
    create: XOR<PostsCreateWithoutNewsFeedInput, PostsUncheckedCreateWithoutNewsFeedInput>
  }

  export type UsersUpsertWithoutNewsFeedInput = {
    update: XOR<UsersUpdateWithoutNewsFeedInput, UsersUncheckedUpdateWithoutNewsFeedInput>
    create: XOR<UsersCreateWithoutNewsFeedInput, UsersUncheckedCreateWithoutNewsFeedInput>
    where?: UsersWhereInput
  }

  export type UsersUpdateToOneWithWhereWithoutNewsFeedInput = {
    where?: UsersWhereInput
    data: XOR<UsersUpdateWithoutNewsFeedInput, UsersUncheckedUpdateWithoutNewsFeedInput>
  }

  export type UsersUpdateWithoutNewsFeedInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    fullname?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    posts?: PostsUpdateManyWithoutUserNestedInput
    likes?: LikesUpdateManyWithoutUserNestedInput
    comments?: CommentsUpdateManyWithoutUserNestedInput
    shares?: SharesUpdateManyWithoutUserNestedInput
    taggedInPosts?: PostTagFriendUpdateManyWithoutUserNestedInput
    taggedByPosts?: PostTagFriendUpdateManyWithoutTaggedByUserNestedInput
    viewedPosts?: ViewerUpdateManyWithoutUserNestedInput
  }

  export type UsersUncheckedUpdateWithoutNewsFeedInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    fullname?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    posts?: PostsUncheckedUpdateManyWithoutUserNestedInput
    likes?: LikesUncheckedUpdateManyWithoutUserNestedInput
    comments?: CommentsUncheckedUpdateManyWithoutUserNestedInput
    shares?: SharesUncheckedUpdateManyWithoutUserNestedInput
    taggedInPosts?: PostTagFriendUncheckedUpdateManyWithoutUserNestedInput
    taggedByPosts?: PostTagFriendUncheckedUpdateManyWithoutTaggedByUserNestedInput
    viewedPosts?: ViewerUncheckedUpdateManyWithoutUserNestedInput
  }

  export type PostsUpsertWithoutNewsFeedInput = {
    update: XOR<PostsUpdateWithoutNewsFeedInput, PostsUncheckedUpdateWithoutNewsFeedInput>
    create: XOR<PostsCreateWithoutNewsFeedInput, PostsUncheckedCreateWithoutNewsFeedInput>
    where?: PostsWhereInput
  }

  export type PostsUpdateToOneWithWhereWithoutNewsFeedInput = {
    where?: PostsWhereInput
    data: XOR<PostsUpdateWithoutNewsFeedInput, PostsUncheckedUpdateWithoutNewsFeedInput>
  }

  export type PostsUpdateWithoutNewsFeedInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    postType?: EnumPostTypeEnumFieldUpdateOperationsInput | $Enums.PostTypeEnum
    visibility?: EnumVisibilityEnumFieldUpdateOperationsInput | $Enums.VisibilityEnum
    censor?: EnumCensorEnumFieldUpdateOperationsInput | $Enums.CensorEnum
    shareCount?: IntFieldUpdateOperationsInput | number
    likeCount?: IntFieldUpdateOperationsInput | number
    commentCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expired_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UsersUpdateOneRequiredWithoutPostsNestedInput
    hashtags?: PostHashtagsUpdateManyWithoutPostNestedInput
    taggedFriends?: PostTagFriendUpdateManyWithoutPostNestedInput
    media?: MediaUpdateManyWithoutPostNestedInput
    likes?: LikesUpdateManyWithoutPostNestedInput
    comments?: CommentsUpdateManyWithoutPostNestedInput
    shares?: SharesUpdateManyWithoutPostNestedInput
    viewers?: ViewerUpdateManyWithoutPostNestedInput
  }

  export type PostsUncheckedUpdateWithoutNewsFeedInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    postType?: EnumPostTypeEnumFieldUpdateOperationsInput | $Enums.PostTypeEnum
    visibility?: EnumVisibilityEnumFieldUpdateOperationsInput | $Enums.VisibilityEnum
    censor?: EnumCensorEnumFieldUpdateOperationsInput | $Enums.CensorEnum
    shareCount?: IntFieldUpdateOperationsInput | number
    likeCount?: IntFieldUpdateOperationsInput | number
    commentCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expired_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    hashtags?: PostHashtagsUncheckedUpdateManyWithoutPostNestedInput
    taggedFriends?: PostTagFriendUncheckedUpdateManyWithoutPostNestedInput
    media?: MediaUncheckedUpdateManyWithoutPostNestedInput
    likes?: LikesUncheckedUpdateManyWithoutPostNestedInput
    comments?: CommentsUncheckedUpdateManyWithoutPostNestedInput
    shares?: SharesUncheckedUpdateManyWithoutPostNestedInput
    viewers?: ViewerUncheckedUpdateManyWithoutPostNestedInput
  }

  export type PostsCreateManyUserInput = {
    id?: string
    title?: string | null
    content?: string | null
    postType?: $Enums.PostTypeEnum
    visibility?: $Enums.VisibilityEnum
    censor?: $Enums.CensorEnum
    shareCount?: number
    likeCount?: number
    commentCount?: number
    createdAt?: Date | string
    expired_at?: Date | string | null
    updatedAt?: Date | string
  }

  export type LikesCreateManyUserInput = {
    id?: string
    postId: string
    createdAt?: Date | string
  }

  export type CommentsCreateManyUserInput = {
    id?: string
    postId: string
    parentId?: string | null
    content: string
    createdAt?: Date | string
  }

  export type SharesCreateManyUserInput = {
    id?: string
    postId: string
    createdAt?: Date | string
  }

  export type NewsFeedCreateManyUserInput = {
    id?: string
    postId: string
    reason?: string | null
    score: number
    isNew?: boolean | null
    createdAt?: Date | string
  }

  export type PostTagFriendCreateManyUserInput = {
    id?: string
    postId: string
    taggedBy: string
    createdAt?: Date | string
  }

  export type PostTagFriendCreateManyTaggedByUserInput = {
    id?: string
    postId: string
    userId: string
    createdAt?: Date | string
  }

  export type ViewerCreateManyUserInput = {
    id?: number
    postId: string
    viewedAt?: Date | string
  }

  export type PostsUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    postType?: EnumPostTypeEnumFieldUpdateOperationsInput | $Enums.PostTypeEnum
    visibility?: EnumVisibilityEnumFieldUpdateOperationsInput | $Enums.VisibilityEnum
    censor?: EnumCensorEnumFieldUpdateOperationsInput | $Enums.CensorEnum
    shareCount?: IntFieldUpdateOperationsInput | number
    likeCount?: IntFieldUpdateOperationsInput | number
    commentCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expired_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    hashtags?: PostHashtagsUpdateManyWithoutPostNestedInput
    taggedFriends?: PostTagFriendUpdateManyWithoutPostNestedInput
    media?: MediaUpdateManyWithoutPostNestedInput
    likes?: LikesUpdateManyWithoutPostNestedInput
    comments?: CommentsUpdateManyWithoutPostNestedInput
    shares?: SharesUpdateManyWithoutPostNestedInput
    newsFeed?: NewsFeedUpdateManyWithoutPostNestedInput
    viewers?: ViewerUpdateManyWithoutPostNestedInput
  }

  export type PostsUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    postType?: EnumPostTypeEnumFieldUpdateOperationsInput | $Enums.PostTypeEnum
    visibility?: EnumVisibilityEnumFieldUpdateOperationsInput | $Enums.VisibilityEnum
    censor?: EnumCensorEnumFieldUpdateOperationsInput | $Enums.CensorEnum
    shareCount?: IntFieldUpdateOperationsInput | number
    likeCount?: IntFieldUpdateOperationsInput | number
    commentCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expired_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    hashtags?: PostHashtagsUncheckedUpdateManyWithoutPostNestedInput
    taggedFriends?: PostTagFriendUncheckedUpdateManyWithoutPostNestedInput
    media?: MediaUncheckedUpdateManyWithoutPostNestedInput
    likes?: LikesUncheckedUpdateManyWithoutPostNestedInput
    comments?: CommentsUncheckedUpdateManyWithoutPostNestedInput
    shares?: SharesUncheckedUpdateManyWithoutPostNestedInput
    newsFeed?: NewsFeedUncheckedUpdateManyWithoutPostNestedInput
    viewers?: ViewerUncheckedUpdateManyWithoutPostNestedInput
  }

  export type PostsUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    postType?: EnumPostTypeEnumFieldUpdateOperationsInput | $Enums.PostTypeEnum
    visibility?: EnumVisibilityEnumFieldUpdateOperationsInput | $Enums.VisibilityEnum
    censor?: EnumCensorEnumFieldUpdateOperationsInput | $Enums.CensorEnum
    shareCount?: IntFieldUpdateOperationsInput | number
    likeCount?: IntFieldUpdateOperationsInput | number
    commentCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expired_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LikesUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    post?: PostsUpdateOneRequiredWithoutLikesNestedInput
  }

  export type LikesUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    postId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LikesUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    postId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentsUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    post?: PostsUpdateOneRequiredWithoutCommentsNestedInput
    parent?: CommentsUpdateOneWithoutRepliesNestedInput
    replies?: CommentsUpdateManyWithoutParentNestedInput
  }

  export type CommentsUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    postId?: StringFieldUpdateOperationsInput | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    replies?: CommentsUncheckedUpdateManyWithoutParentNestedInput
  }

  export type CommentsUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    postId?: StringFieldUpdateOperationsInput | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SharesUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    post?: PostsUpdateOneRequiredWithoutSharesNestedInput
  }

  export type SharesUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    postId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SharesUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    postId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NewsFeedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    score?: FloatFieldUpdateOperationsInput | number
    isNew?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    post?: PostsUpdateOneRequiredWithoutNewsFeedNestedInput
  }

  export type NewsFeedUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    postId?: StringFieldUpdateOperationsInput | string
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    score?: FloatFieldUpdateOperationsInput | number
    isNew?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NewsFeedUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    postId?: StringFieldUpdateOperationsInput | string
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    score?: FloatFieldUpdateOperationsInput | number
    isNew?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostTagFriendUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    post?: PostsUpdateOneRequiredWithoutTaggedFriendsNestedInput
    taggedByUser?: UsersUpdateOneRequiredWithoutTaggedByPostsNestedInput
  }

  export type PostTagFriendUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    postId?: StringFieldUpdateOperationsInput | string
    taggedBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostTagFriendUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    postId?: StringFieldUpdateOperationsInput | string
    taggedBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostTagFriendUpdateWithoutTaggedByUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    post?: PostsUpdateOneRequiredWithoutTaggedFriendsNestedInput
    user?: UsersUpdateOneRequiredWithoutTaggedInPostsNestedInput
  }

  export type PostTagFriendUncheckedUpdateWithoutTaggedByUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    postId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostTagFriendUncheckedUpdateManyWithoutTaggedByUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    postId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ViewerUpdateWithoutUserInput = {
    viewedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    post?: PostsUpdateOneRequiredWithoutViewersNestedInput
  }

  export type ViewerUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    postId?: StringFieldUpdateOperationsInput | string
    viewedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ViewerUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    postId?: StringFieldUpdateOperationsInput | string
    viewedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostHashtagsCreateManyPostInput = {
    hashtagId: string
  }

  export type PostTagFriendCreateManyPostInput = {
    id?: string
    userId: string
    taggedBy: string
    createdAt?: Date | string
  }

  export type MediaCreateManyPostInput = {
    id?: string
    mediaUrl: string
    mediaType: $Enums.MediaTypeEnum
    createdAt?: Date | string
  }

  export type LikesCreateManyPostInput = {
    id?: string
    userId?: string | null
    createdAt?: Date | string
  }

  export type CommentsCreateManyPostInput = {
    id?: string
    userId?: string | null
    parentId?: string | null
    content: string
    createdAt?: Date | string
  }

  export type SharesCreateManyPostInput = {
    id?: string
    userId?: string | null
    createdAt?: Date | string
  }

  export type NewsFeedCreateManyPostInput = {
    id?: string
    userId?: string | null
    reason?: string | null
    score: number
    isNew?: boolean | null
    createdAt?: Date | string
  }

  export type ViewerCreateManyPostInput = {
    id?: number
    userId: string
    viewedAt?: Date | string
  }

  export type PostHashtagsUpdateWithoutPostInput = {
    hashtag?: HashtagUpdateOneRequiredWithoutPostsNestedInput
  }

  export type PostHashtagsUncheckedUpdateWithoutPostInput = {
    hashtagId?: StringFieldUpdateOperationsInput | string
  }

  export type PostHashtagsUncheckedUpdateManyWithoutPostInput = {
    hashtagId?: StringFieldUpdateOperationsInput | string
  }

  export type PostTagFriendUpdateWithoutPostInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UsersUpdateOneRequiredWithoutTaggedInPostsNestedInput
    taggedByUser?: UsersUpdateOneRequiredWithoutTaggedByPostsNestedInput
  }

  export type PostTagFriendUncheckedUpdateWithoutPostInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    taggedBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostTagFriendUncheckedUpdateManyWithoutPostInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    taggedBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MediaUpdateWithoutPostInput = {
    id?: StringFieldUpdateOperationsInput | string
    mediaUrl?: StringFieldUpdateOperationsInput | string
    mediaType?: EnumMediaTypeEnumFieldUpdateOperationsInput | $Enums.MediaTypeEnum
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MediaUncheckedUpdateWithoutPostInput = {
    id?: StringFieldUpdateOperationsInput | string
    mediaUrl?: StringFieldUpdateOperationsInput | string
    mediaType?: EnumMediaTypeEnumFieldUpdateOperationsInput | $Enums.MediaTypeEnum
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MediaUncheckedUpdateManyWithoutPostInput = {
    id?: StringFieldUpdateOperationsInput | string
    mediaUrl?: StringFieldUpdateOperationsInput | string
    mediaType?: EnumMediaTypeEnumFieldUpdateOperationsInput | $Enums.MediaTypeEnum
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LikesUpdateWithoutPostInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UsersUpdateOneWithoutLikesNestedInput
  }

  export type LikesUncheckedUpdateWithoutPostInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LikesUncheckedUpdateManyWithoutPostInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentsUpdateWithoutPostInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UsersUpdateOneWithoutCommentsNestedInput
    parent?: CommentsUpdateOneWithoutRepliesNestedInput
    replies?: CommentsUpdateManyWithoutParentNestedInput
  }

  export type CommentsUncheckedUpdateWithoutPostInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    replies?: CommentsUncheckedUpdateManyWithoutParentNestedInput
  }

  export type CommentsUncheckedUpdateManyWithoutPostInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SharesUpdateWithoutPostInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UsersUpdateOneWithoutSharesNestedInput
  }

  export type SharesUncheckedUpdateWithoutPostInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SharesUncheckedUpdateManyWithoutPostInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NewsFeedUpdateWithoutPostInput = {
    id?: StringFieldUpdateOperationsInput | string
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    score?: FloatFieldUpdateOperationsInput | number
    isNew?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UsersUpdateOneWithoutNewsFeedNestedInput
  }

  export type NewsFeedUncheckedUpdateWithoutPostInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    score?: FloatFieldUpdateOperationsInput | number
    isNew?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NewsFeedUncheckedUpdateManyWithoutPostInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    score?: FloatFieldUpdateOperationsInput | number
    isNew?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ViewerUpdateWithoutPostInput = {
    viewedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UsersUpdateOneRequiredWithoutViewedPostsNestedInput
  }

  export type ViewerUncheckedUpdateWithoutPostInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    viewedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ViewerUncheckedUpdateManyWithoutPostInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    viewedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostHashtagsCreateManyHashtagInput = {
    postId: string
  }

  export type PostHashtagsUpdateWithoutHashtagInput = {
    post?: PostsUpdateOneRequiredWithoutHashtagsNestedInput
  }

  export type PostHashtagsUncheckedUpdateWithoutHashtagInput = {
    postId?: StringFieldUpdateOperationsInput | string
  }

  export type PostHashtagsUncheckedUpdateManyWithoutHashtagInput = {
    postId?: StringFieldUpdateOperationsInput | string
  }

  export type CommentsCreateManyParentInput = {
    id?: string
    userId?: string | null
    postId: string
    content: string
    createdAt?: Date | string
  }

  export type CommentsUpdateWithoutParentInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UsersUpdateOneWithoutCommentsNestedInput
    post?: PostsUpdateOneRequiredWithoutCommentsNestedInput
    replies?: CommentsUpdateManyWithoutParentNestedInput
  }

  export type CommentsUncheckedUpdateWithoutParentInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    postId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    replies?: CommentsUncheckedUpdateManyWithoutParentNestedInput
  }

  export type CommentsUncheckedUpdateManyWithoutParentInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    postId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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