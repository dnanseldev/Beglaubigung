export interface IRepository<TEntity> {
      FindByID(id: any): Promise<TEntity>     
      Update(e: TEntity): Promise<void>
      Save(e: TEntity): Promise<void>
      ListAll(): Promise<TEntity[]>
}