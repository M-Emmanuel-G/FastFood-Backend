
import { GenerateId } from '../services/GenerateId';
import { TableDatabase } from './../database/TableDatabase';
export class TableBusiness {
    tableDatabase = new TableDatabase()

    allTable = async ()=>{
        try {
            const result = await this.tableDatabase.allTable()
            return result
            
        } catch (error:any) {
            throw new Error(error.message);
        }
    }

    createTable = async (tableName:string)=>{
        try {
            
            if(!tableName) throw new Error("Nome da mesa nao inserido.");

            const id = GenerateId.newID()

            const newInfo = {
                id,
                tableName,
                avalaible: true
            }

            await this.tableDatabase.createTable(newInfo)
            
        } catch (error:any) {
            throw new Error(error.message);
        }
    }

    selectTable = async (info:any)=>{
        try {
            const {idClient, idTable} = info;

            const verifyTable = await this.tableDatabase.verifyTable(idTable)
            if(verifyTable.length < 1) throw new Error('Mesa não localizada..');
            
            if(verifyTable[0].avalaible === true) throw new Error(" esta mesa esta em uso..");
            
            console.log(verifyTable);
            

            const newInfo = {
                idClient,
                idTable
            }

            const result = this.tableDatabase.selectTable(newInfo)
            return result
        } catch (error:any) {
            throw new Error(error.message);
        }
    }

    vacateTable = async (id:string) =>{
        try {

            const verifyTable = await this.tableDatabase.verifyTable(id)
            if(verifyTable.length = 0) throw new Error(`Mesa nao localizada.`)

            await this.tableDatabase.vacateTable(id)
        } catch (error:any) {
            throw new Error(error.message);
        }
    }

    showTable = async ()=>{
        try {
            const result = await this.tableDatabase.showTable()
            return result
        } catch (error:any) {
            throw new Error(error.message);
            
        }
    }

    clearAllTables = async ()=>{
        try {
            await this.tableDatabase.clearAllTables()
        } catch (error:any) {
            throw new Error(error.message);
            
        }
    }

    deleteTable = async (id:any)=>{
        try {
            await this.tableDatabase.deleteTable(id)
        } catch (error:any) {
            throw new Error(error.message);
        }
    }

}