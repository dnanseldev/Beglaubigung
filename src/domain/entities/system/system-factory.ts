import { TCreator } from "../../interfaces/base-factory"
import { Result } from "../../validation/result-error"
import { System } from "./system"
import { SystemProps } from "./system-dto"


export class SystemFactory implements TCreator<System, Result<System>>
{
  factoryMethod(props: SystemProps): Result<System>
  {
    if( !System.isvalidDescription(props.description) )
      return Result.fail<System>('Error: Invalid System Description')
    
    if( !System.isvalidName(props.name) )
      return Result.fail<System>('Error: Invalid System Name')   

    return Result.ok<System>( new System(props) )
  }      
}