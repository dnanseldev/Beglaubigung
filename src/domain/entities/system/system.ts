import { TEntity } from "../../interfaces/base-entity";
import { SystemProps } from "./system-dto";
import crypto from 'crypto'

export class System extends TEntity
{    
    props: SystemProps
    allRequirementsFulfilled: boolean = false

    constructor( props: SystemProps )

    {        
        super()
        this.ID = props.sid || crypto.randomUUID()
        this.props = {
            ...props
            ,domain_url: props.domain_url || ''
        }
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
        return `ID: ${this.EntityID} Name: ${this.props.name} Desc: ${this.props.description} URL: ${this.props.domain_url}`
    }

    toJSON() {
        return this.props
    }
}