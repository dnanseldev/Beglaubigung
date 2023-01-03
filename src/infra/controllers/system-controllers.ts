import { Request, Response } from "express";
import { SystemProps } from "../../domain/entities/system/system-dto";
import { AdminUserUseCase } from "../../application/use_cases/administrator-usecase";
import { SystemFactory } from "../../domain/entities/system/system-factory";
import { ISystemRepository } from "../../application/interfaces/system-repository";
import { System } from "../../domain/entities/system/system";

export class SystemController 
{
     
    sf: SystemFactory;
    au: AdminUserUseCase
    

    constructor(sr: ISystemRepository<System>)  {
        this.sf = new SystemFactory()
        this.au = new AdminUserUseCase(sr)
    } 

    public async register(req: Request, res: Response): Promise<void>
    {  
              
        const s_dto: SystemProps = {            
            ...req.body
       } 

       try
       {
           const systemOrError = new SystemFactory().factoryMethod(s_dto)

           if ( systemOrError.isFailure )
              throw systemOrError.error

           await this.au.RegisterSystem(systemOrError.getValue())  
       } catch (error) {
           console.log(error)
       } 

        //return res.json(s_dto)
    }
}