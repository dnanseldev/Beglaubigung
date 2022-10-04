import { Request, Response } from "express";
import { SystemDTO } from "../../domain/entities/system/system-dto";

class SystemController 
{
    public async register(req: Request, res: Response): Promise<Response>
    {
        const s_dto: SystemDTO
         {name, description, domain_url} = req.body
         return res.json(s_dto)
    }
}