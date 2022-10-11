import { System } from "../../domain/entities/system/system";
import { SystemProps } from "../../domain/entities/system/system-dto";
import { SystemFactory } from "../../domain/entities/system/system-factory";
import { Result } from "../../domain/validation/result-error";
import { ISystemRepository } from "../interfaces/system-repository";

export class AdminUserUseCase {
    
    //systemOrError: Result<System>
    system = {} as System;
    sr: ISystemRepository<System>
    sf: SystemFactory
   
    constructor(sr: ISystemRepository<System>)
    {       
       this.sr = sr
       this.sf = new SystemFactory() 
    }

    async RegisterSystem(system: System)
    {
        /*
        try
        {
            const systemOrError = new SystemFactory().factoryMethod(s_props)

            if ( systemOrError.isFailure )
               throw systemOrError.error

            await this.sr.Save(systemOrError.getValue())  
        } catch (error) {
            console.log(error)
        } 
        */ 
       await this.sr.Save(system)      
    }  

    async DeleteLogicallySystem(id: any) {
        await this.sr.DeleteLogically(id)
    }

    async UpdateSystem(system: System) {
       await this.sr.Update(system)
    }

    async FindSystem(id: any) {
       await this.sr.FindByID(id)
    }   
}