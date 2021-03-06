import { TryFunction, TryType } from "../try";
import { Either } from "../either";
export declare const UNDEFINED: string;
export interface IChildProcess {
    pid: number;
    isDestroyable: boolean;
    isComplete: boolean;
    addListener<T>(f: (r: Either<Error, T>) => void): void;
    send<T, U>(func: TryFunction<T, U>, data: any, callerFileName: string, type: TryType): void;
    release(): void;
    destroy(): void;
    reset(): void;
}
export declare function acquire(): Promise<any>;
export declare function release(cp: IChildProcess): void;
export declare function destroy(cp: IChildProcess): void;
