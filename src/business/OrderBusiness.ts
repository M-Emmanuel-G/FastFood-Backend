import { RequestDatabase } from "../database/OrderDatabase";
import { GenerateId } from "../services/GenerateId";

export class RequestBusiness {
    requestsDatabase = new RequestDatabase()

    showRequests = async ()=>{
        try {
            const result = await this.requestsDatabase.ShowRequest()
            return result
        } catch (error:any) {
            throw new Error(error.message);
            
        }
    }

    newRequest = async (order:any)=>{
        try {
            const {idClient, idProduct, idTable, quantity} = order
            if(!idClient) throw new Error("Id do cliente nao foi passado");
            if(!idProduct) throw new Error("Id do produto nao foi passado");

            const id = GenerateId.newID()
            const idOrder = GenerateId.newID()
            const newOrder = {
                idOrder,
                id,
                idTable,
                idClient,
                idProduct,
                quantity
            }
        
            const result = await this.requestsDatabase.newRequest(newOrder)    
            return result
        } catch (error:any) {
            throw new Error(error.message);
        }
    }

    myOrders = async (idClient:string)=>{
        try {
            const result = await this.requestsDatabase.myOrders(idClient)
            return result    
        } catch (error:any) {
            throw new Error(error.message);
        }
    }

    deleteOrders = async (id:string)=>{
        try {
            await this.requestsDatabase.deleteOrders(id)
        } catch (error:any) {
            throw new Error(error.message);
            
        }
    }

    removeOrder = async (id:string)=>{
        try {
            await this.requestsDatabase.removeOrder(id)
        } catch (error:any) {
            throw new Error(error.message);
            
        }
    }
}