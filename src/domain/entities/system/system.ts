import { TEntity } from "../interfaces/base-entity"
import { SystemDTO } from "./system-dto"


export class System extends TEntity
{
    sdto: SystemDTO

    constructor( sdto: SystemDTO ) {        
        super()
        this.sdto = sdto
    }

    public static isvalidName(p_name: string): boolean
    {       
        const re = /^[\w\s]+$/g    
        return re.exec(p_name) && p_name.length >= 3 ? true : false
    }

    public static isvalidDescription(p_description: string): boolean
    {       
        const re = /^[\w\s]+$/g    
        return re.exec(p_description) && p_description.length >= 3 ? true : false
    }

    get info()
    {
        return `ID: ${this.EntityID} Name: ${this.sdto.name} Desc: ${this.sdto.description} URL: ${this.sdto.domainURL}`
    }
}