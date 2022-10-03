import { Result } from "../validation/result-error";

export interface TCreator<T, R extends Result<T> > {

     factoryMethod(...args: any): R
}