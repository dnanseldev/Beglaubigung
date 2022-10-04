import { Request, Response } from "express";
import { SystemDTO } from "../../domain/entities/system/system-dto";

class SystemController 
{
    public async register(req: Request, res: Response): Promise<Response>
    {
        const s_dto: SystemDTO = {
             sid: '123456'
            ,name: req.body.name
            ,description: req.body.description
            ,domain_url: req.body.domain_url
        }        

        return res.json(s_dto)
    }
}