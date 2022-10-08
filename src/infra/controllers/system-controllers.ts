
import { Guid } from "guid-typescript";
import { SystemProps } from "../../domain/entities/system/system-dto";


class SystemController<Request extends any, Response extends any> 
{
    public async register(req: Request, res: Response): Promise<void>
    {        
        const s_dto: SystemProps = {
             sid: Guid.create()
            ,name: req.body.name
            ,description: req.body.description
            ,domain_url: req.body.domain_url
        }        

        return res.json(s_dto)
    }
}