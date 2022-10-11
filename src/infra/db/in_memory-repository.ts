import { ISystemRepository } from "../../application/interfaces/system-repository";
import { System } from "../../domain/entities/system/system";


export default class SystemInMemoryRepository implements ISystemRepository<System>
{
    items: System[] = []  

    DeleteLogically(s: System): Promise<void> {
        throw new Error("Method not implemented.");
    }

    FindByID(id: any): Promise<System> {
        throw new Error("Method not implemented.");
    }
    
    
    async Insert(e: System): Promise<void> {
        this.items.push(e) 
    }

    async Update(e: System): Promise<void>
    {
        const index = this.items.findIndex( item => item.EntityID === e.EntityID )        

        this.items[index].props = {                
           ...e.props
        }
    }

    async Save(e: System): Promise<void> {
        this.items.push(e)
    }

    async Delete(id: any): Promise<void>
    {
        const index = this.items.findIndex( item => item.EntityID === id )
        this.items.splice(index, 1)
    }

    async ListAll(): Promise<System[]> {
        return this.items
    }    

}
