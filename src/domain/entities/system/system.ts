import { TEntity } from "../interfaces/base-entity"


export class System extends TEntity
{
    constructor( readonly name: string
                ,readonly description: string
                ,readonly domainURL: string = '' ) {
        super()
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
        return `ID: ${this.EntityID} Name: ${this.name} Desc: ${this.description} URL: ${this.domainURL}`
    }
}