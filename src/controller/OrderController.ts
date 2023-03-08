import { Request, Response } from 'express';
import { RequestBusiness } from '../business/OrderBusiness';
export class RequestController {
    requestBusiness = new RequestBusiness();

    showRequests = async (req:Request , res:Response)=>{
        try {
            const result = await this.requestBusiness.showRequests()
            res.status(200).send(result);
        } catch (error:any) {
            res.status(400).send(error.message)
            
        }
    }

    newRequest = async (req:Request , res:Response)=>{
        try {
            const {idClient, idProduct, quantity, idTable} = req.params

            const order = {
                idTable,
                idClient,
                idProduct,
                quantity
            }

            const result = await this.requestBusiness.newRequest(order)
            res.status(200).send({message:'O produto foi adicionado.', result})
            
        } catch (error:any) {
            res.status(400).send(error.message)
        }
    }

    myOrders = async (req:Request , res:Response)=>{
        try {
            const {idClient} = req.params
            const result = await this.requestBusiness.myOrders(idClient)
            res.status(200).send(result)   
        } catch (error:any) {
            res.status(400).send(error.message)
        }
    }

    deleteOrders = async (req:Request , res:Response)=>{
        try {
           const {id} = req.params
            await this.requestBusiness.deleteOrders(id)
            res.status(200).send('Excluido com sucesso...')
        } catch (error:any) {
            res.status(400).send(error.message);
            
        }
    }

    removeOrder = async (req:Request , res:Response)=>{
        try {
            const {id} = req.params
            await this.requestBusiness.deleteOrders(id)
            res.status(200).send('Item foi removido')
        } catch (error:any) {
            res.status(400).send(error.message)
        }
    }
}