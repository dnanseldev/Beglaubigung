export interface ISystemRepository<TEntity>
{
     FindByID(id: any): Promise<TEntity>
     Insert(e: TEntity): void
     Update(e: TEntity): void
     Delete(e: TEntity): void
     Save(e: TEntity): void
}