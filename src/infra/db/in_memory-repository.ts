import { IRepository } from "../../application/interfaces/base-repository";
import { ISystemRepository } from "../../application/interfaces/system-repository";
import { SystemProps } from "../../domain/entities/system/system-dto";


export default class SystemInMemoryRepository implements ISystemRepository<SystemProps>
{
    items: SystemProps[] = []  

    DeleteLogically(s: SystemProps): void {
        throw new Error("Method not implemented.");
    }
    FindByID(id: any): Promise<SystemProps> {
        throw new Error("Method not implemented.");
    }
    
    
    async Insert(e: SystemProps): Promise<void> {
        this.items.push(e) 
    }

    async Update(e: SystemProps): Promise<void>
    {
        const index = this.items.findIndex( item => item.sid === e.sid )        

        this.items[index] = {
            ...this.items[index]           
           ,...e
        }
    }

    async Save(e: SystemProps): Promise<void> {
        this.items.push(e)
    }

    async Delete(id: any): Promise<void>
    {
        const index = this.items.findIndex( item => item.sid === id )
        this.items.splice(index, 1)
    }

    async ListAll(): Promise<SystemProps[]> {
        return this.items
    }    

}
