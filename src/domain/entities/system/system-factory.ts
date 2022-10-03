import { TCreator } from "../../interfaces/base-factory"
import { Result } from "../../validation/result-error"
import { System } from "./system"
import { SystemDTO } from "./system-dto"

export class SystemFactory implements TCreator<System, Result<System>>
{
  factoryMethod(dto: SystemDTO): Result<System>
  {        
    if( !dto.sid )
      return Result.fail<System>('Error to create ID')

    if( !System.isvalidDescription(dto.description) )
      return Result.fail<System>('Error: Invalid System Description')
    
    if( !System.isvalidName(dto.name) )
      return Result.fail<System>('Error: Invalid System Name')   

    return Result.ok<System>( new System(dto.sid, dto.name, dto.description, dto.domain_url) )
  }      
}