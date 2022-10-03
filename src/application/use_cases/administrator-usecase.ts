import { System } from "../../domain/entities/system/system";
import { SystemDTO } from "../../domain/entities/system/system-dto";
import { SystemFactory } from "../../domain/entities/system/system-factory";
import { Result } from "../../domain/entities/validation/result-error";
import { ISystemRepository } from "../repositories/system-repository";

class UserUseCase {
    
    systemOrError: Result<System>
    system = {} as System;

    constructor(private dto: SystemDTO)
    {        
       this.systemOrError = new SystemFactory().factoryMethod(this.dto)

        if ( this.systemOrError.isFailure ) 
           console.log(this.systemOrError.error)
        else
        {
           this.system = this.systemOrError.getValue() 
           console.log(this.system.info)    
        }
    }

    RegisterSystem(sr: ISystemRepository<System>) {
        sr.Save(this.system)
    }
  

    DeleteLogicallySystem(sr: ISystemRepository<System>) {
        sr.DeleteLogically(this.system)
    }

    UpdateSystem(sr: ISystemRepository<System>) {
        sr.Update(this.system)
    }

    FindSystem(sr: ISystemRepository<System>) {
        sr.FindByID(this.dto.sid)
    }
}