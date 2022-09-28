import { SystemDTO } from "../../domain/entities/system/system-dto";
import { ISystemRepository } from "../repositories/system-repository";

class UserUseCase {

    dto: SystemDTO

    constructor(dto: SystemDTO) {
        this.dto = dto
    }

    RegisterSystem(sr: ISystemRepository<SystemDTO>) {
        sr.Save(this.dto)
    }

    RemoveSystem(sr: ISystemRepository<SystemDTO>) {
        sr.Delete(this.dto)
    }

    DeleteLogicallySystem(sr: ISystemRepository<SystemDTO>) {
        sr.Delete(this.dto)
    }

    UpdateSystem(sr: ISystemRepository<SystemDTO>) {
        sr.Update(this.dto)
    }

    FindSystem(sr: ISystemRepository<SystemDTO>) {
        sr.FindByID(this.dto.sid)
    }
}