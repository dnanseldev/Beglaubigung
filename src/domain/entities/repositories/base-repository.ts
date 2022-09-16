export interface IRepository<TEntity>
{
    FindByID(id: any): TEntity
    Insert(e: TEntity): void
    Update(e: TEntity): void
    Delete(e: TEntity): void
    Save(e: TEntity): void
}