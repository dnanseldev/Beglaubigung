import { IRepository } from "./base-repository";

export interface ISystemRepository<TEntity> extends IRepository<TEntity> 
{
   
    DeleteLogically(e: TEntity): void
}
