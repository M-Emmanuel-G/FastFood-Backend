import { BaseDatabase } from "./BaseDatabase";

export class TableDatabase extends BaseDatabase {
    TABLE_NAME = 'FF_Tables'
    
    allTable = async ()=>{
        try {
            const result = await TableDatabase.connection(this.TABLE_NAME)
            .select()
            .where({avalaible:true})
            return result
        } catch (error:any) {
            throw new Error(error.message);
        }
    }

    createTable = async (info:any)=>{
        try {
            const {id, tableName , avalaible} = info;
            await TableDatabase.connection(this.TABLE_NAME)
                .insert({
                    id,
                    table_name: tableName,
                    avalaible
                })
        } catch (error:any) {
            throw new Error(error.message);
        }
    }

    selectTable = async (info:any)=>{
        try {

            const{idTable, idClient} = info

            const result = await TableDatabase.connection(this.TABLE_NAME)
                .update({
                    avalaible:false,
                    fk_client: idClient
                })
                .where({id:idTable})

                return result

        } catch (error:any) {
            throw new Error(error.message);
        }
    }
    
    verifyTable = async (id:string)=>{
        try {
            const result = await TableDatabase.connection(this.TABLE_NAME)
                .select()
                .where({id})
            return result

        } catch (error:any) {
            throw new Error(error.message);
        }
    }

    vacateTable = async (id:string) =>{
        try {
            await TableDatabase.connection(this.TABLE_NAME)
                .update(
                    {
                        avalaible: true,
                        fk_client: null
                    }
                )
                .where({id})
        } catch (error:any) {
            throw new Error(error.message);
        }
    }

    showTable = async ()=>{
        try {
            const result = await TableDatabase.connection(this.TABLE_NAME)
                .select()
                return result
        } catch (error:any) {
            throw new Error(error.message);
            
        }
    }

    clearAllTables = async ()=>{
        try {
            await TableDatabase.connection(this.TABLE_NAME)
                .select()
                .update(
                    {avalaible:true}
                )
        } catch (error:any) {
            throw new Error(error.message);
            
        }
    } 

    deleteTable = async (id:any)=>{
        try {
            await TableDatabase.connection(this.TABLE_NAME)
                .delete()
                .where({id})
        } catch (error:any) {
            throw new Error(error.message);
        }
    }
}