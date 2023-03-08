import { Request, Response } from 'express';
import { TableBusiness } from './../business/TableBusiness';
export class TableController {
    tableBusiness = new TableBusiness();
    allTable = async (req:Request, res:Response)=>{
        try {
            const result = await this.tableBusiness.allTable()
            res.status(200).send(result)
                        
        } catch (error:any) {
            res.status(400).send(error.message)
        }
    }

    createTable = async (req:Request, res:Response)=>{
        try {
            const {tableName} = req.body
            
            await this.tableBusiness.createTable(tableName)
            res.status(200).send('Mesa criada com sucesso...')

        } catch (error:any) {
            res.status(400).send(error.message)
        }
    }

    selectTable = async (req:Request, res:Response)=>{
        try {
            const {idClient, idTable} = req.params

            const newInfo = {
                idClient,
                idTable
            }

            const result = await this.tableBusiness.selectTable(newInfo)
            res.status(200).send({message:'Mesa escolhida', result})
        } catch (error:any) {
            res.status(400).send(error.message)
        }
    }

    vacateTable = async (req:Request, res:Response) =>{
        try {
            const {id} = req.params

            await this.tableBusiness.vacateTable(id)
            res.status(200).send('Mesa foi desocupada com sucesso...')
        } catch (error:any) {
            res.status(400).send(error.message)
        }
    }

    showTable = async (req:Request , res:Response)=>{
        try {
            const result = await this.tableBusiness.showTable()
            res.status(200).send(result)
        } catch (error:any) {
            res.status(400).send(error.message)
        }
    }

    clearAllTables = async (req:Request , res:Response)=>{
        try {
            await this.tableBusiness.clearAllTables()
            res.status(200).send('Todas as mesas foram limpadas.')
        } catch (error:any) {
            res.status(400).send(error.message)
        }
    }

    deleteTable = async (req:Request , res:Response)=>{
        try {
            const {id} = req.params
            await this.tableBusiness.deleteTable(id as string)

            res.status(200).send('Mesa foi excluida.')
        } catch (error:any) {
            res.status(400).send(error.message);
        }
    }

}