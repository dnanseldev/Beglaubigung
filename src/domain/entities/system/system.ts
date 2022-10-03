import { TEntity } from "../../interfaces/base-entity";

export class System extends TEntity
{
    name: string;
    description: string;
    domain_url: string;    
    allRequirementsFulfilled: boolean = false

    constructor(  sid: any
                 ,name: string
                 ,description: string
                 ,domain_url: string = '' )

    {        
        super()
        this.ID = sid
        this.name = name
        this.description = description
        this.domain_url = domain_url
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

    public  isAllrequirementsFulfilled(): boolean {
        return this.allRequirementsFulfilled 
    }

    get info() {
        return `ID: ${this.EntityID} Name: ${this.name} Desc: ${this.description} URL: ${this.domain_url}`
    }
}