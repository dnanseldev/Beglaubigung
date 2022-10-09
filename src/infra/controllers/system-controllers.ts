
import { Request, Response } from "express";
import { SystemProps } from "../../domain/entities/system/system-dto";
import { Guid } from "guid-typescript";


export class SystemController 
{
    
    public async register(req: Request, res: Response): Promise<void>
    {  
              
        const s_dto: SystemProps = {
            
            ...req.body
       } 



        //return res.json(s_dto)
    }
}