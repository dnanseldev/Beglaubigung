import { IRepository } from "./base-repository";

export interface ISystemRepository<System> extends IRepository<System> 
{   
    DeleteLogically(s: System): Promise<void>
}
