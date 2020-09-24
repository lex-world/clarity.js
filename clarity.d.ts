declare type bool = boolean;
declare type buff = Uint8Array;
declare type expr<T> = () => T;
declare type int = number;
declare type list<E> = Array<E>;
declare type optional<T> = T | null;
declare type principal = string;
declare type err<T> = Err<T>;
declare type response<T, E> = T | err<E>;
declare type trait = string;
declare type uint = number;
/**
 * @link https://docs.blockstack.org/references/language-clarity#clarity-type-system
 */
export declare class Err<T> extends Error {
    constructor(value: T);
}
export declare function requireVersion(version: string): void;
export declare function requireFeature(feature: string): void;
/**
 * @link https://docs.blockstack.org/references/language-clarity#append
 */
export declare function append<T>(list: list<T>, value: T): list<T>;
/**
 * @link https://docs.blockstack.org/references/language-clarity#as-contract
 */
export declare function asContract<A>(expr: expr<A>): A;
/**
 * @link https://docs.blockstack.org/references/language-clarity#at-block
 */
export declare function atBlock<A>(blockHash: buff, expr: expr<A>): A;
/**
 * @link https://docs.blockstack.org/references/language-clarity#block-height
 */
export declare function blockHeight(): uint;
/**
 * @link https://docs.blockstack.org/references/language-clarity#concat
 */
export declare function concat<T>(a: list<T> | buff, b: list<T> | buff): list<T> | buff;
/**
 * @link https://docs.blockstack.org/references/language-clarity#contract-call
 */
export declare function contractCall<A, B>(contractName: trait, functionName: string, ...args: any): response<A, B>;
/**
 * @link https://docs.blockstack.org/references/language-clarity#contract-caller
 */
export declare function contractCaller(): principal;
/**
 * @link https://docs.blockstack.org/references/language-clarity#contract-of
 */
export declare function contractOf(contractName: trait): principal;
/**
 * @link https://docs.blockstack.org/references/language-clarity#err
 */
export declare function err<T>(value: T): Err<T>;
/**
 * @link https://docs.blockstack.org/references/language-clarity#filter
 */
export declare function filter<A>(func: (a: A) => bool, list: list<A>): list<A>;
/**
 * @link https://docs.blockstack.org/references/language-clarity#fold
 */
export declare function fold<A, B>(func: (a: A, b: B) => B, list: list<A>, initialValue: B): B;
/**
 * @link https://docs.blockstack.org/references/language-clarity#ft-get-balance
 */
export declare function ftGetBalance(tokenName: string, principal: principal): uint;
/**
 * @link https://docs.blockstack.org/references/language-clarity#ft-mint
 */
export declare function ftMint(tokenName: string, amount: uint, recipient: principal): response<bool, uint>;
/**
 * @link https://docs.blockstack.org/references/language-clarity#ft-transfer
 */
export declare function ftTransfer(tokenName: string, amount: uint, sender: principal, recipient: principal): response<bool, uint>;
/**
 * @link https://docs.blockstack.org/references/language-clarity#get-block-info
 */
export declare function getBlockInfo(propName: string, blockHeight: uint): optional<buff> | optional<uint>;
/**
 * @link https://docs.blockstack.org/references/language-clarity#hash160
 */
export declare function hash160(value: buff | uint | int): buff;
/**
 * @link https://docs.blockstack.org/references/language-clarity#keccak256
 */
export declare function keccak256(value: buff | uint | int): buff;
/**
 * @link https://docs.blockstack.org/references/language-clarity#map
 */
export declare function map<A, B>(func: (a: A) => B, list: list<A>): list<B>;
/**
 * @link https://docs.blockstack.org/references/language-clarity#nft-get-owner
 */
export declare function nftGetOwner(assetClass: string, assetID: string): optional<principal>;
/**
 * @link https://docs.blockstack.org/references/language-clarity#nft-mint
 */
export declare function nftMint(assetClass: string, assetID: string, recipient: principal): response<bool, uint>;
/**
 * @link https://docs.blockstack.org/references/language-clarity#nft-transfer
 */
export declare function nftTransfer(assetClass: string, assetID: string, sender: principal, recipient: principal): response<bool, uint>;
/**
 * @link https://docs.blockstack.org/references/language-clarity#sha256
 */
export declare function sha256(value: buff | uint | int): buff;
/**
 * @link https://docs.blockstack.org/references/language-clarity#sha512
 */
export declare function sha512(value: buff | uint | int): buff;
/**
 * @link https://docs.blockstack.org/references/language-clarity#sha512256
 */
export declare function sha512_256(value: buff | uint | int): buff;
/**
 * @link https://docs.blockstack.org/references/language-clarity#to-int
 */
export declare function toInt(value: uint): int;
/**
 * @link https://docs.blockstack.org/references/language-clarity#to-uint
 */
export declare function toUint(value: int): uint;
/**
 * @link https://docs.blockstack.org/references/language-clarity#try
 */
export declare function tryUnwrap<A, B>(optionInput: optional<A> | response<A, B>): A;
/**
 * @link https://docs.blockstack.org/references/language-clarity#tx-sender
 */
export declare function txSender(): principal;
/**
 * @link https://docs.blockstack.org/references/language-clarity#unwrap
 */
export declare function unwrap<A, B>(optionInput: optional<A> | response<A, B>, thrownValue: A): A;
/**
 * @link https://docs.blockstack.org/references/language-clarity#unwrap-err
 */
export declare function unwrapErr<A, B>(responseInput: response<A, B>, thrownValue: B): B;
/**
 * @link https://docs.blockstack.org/references/language-clarity#unwrap-err-panic
 */
export declare function unwrapErrPanic<A, B>(responseInput: response<A, B>): B;
/**
 * @link https://docs.blockstack.org/references/language-clarity#unwrap-panic
 */
export declare function unwrapPanic<A, B>(optionInput: optional<A> | response<A, B>): A;
export {};
