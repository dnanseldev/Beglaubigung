import { IRepository } from "../interfaces/base-repository";
import { System } from "./system";

class SystemRepository implements IRepository<System> 
{
    FindByID(id: any): System {
        throw new Error("Method not implemented.");
    }
    Insert(e: System): void {
        throw new Error("Method not implemented.");
    }
    Update(e: System): void {
        throw new Error("Method not implemented.");
    }
    Delete(e: System): void {
        throw new Error("Method not implemented.");
    }
    Save(e: System): void {
        throw new Error("Method not implemented.");
    }
    
}