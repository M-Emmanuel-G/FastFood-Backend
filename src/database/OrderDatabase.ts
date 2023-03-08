import { BaseDatabase } from "./BaseDatabase";

export class RequestDatabase extends BaseDatabase {
    TABLE_NAME = 'FF_Orders'

    ShowRequest = async () =>{
        try {
            const result = await RequestDatabase.connection(this.TABLE_NAME)
                .select()
                .join('FF_Products','FF_Orders.fk_product','=','FF_Products.id')
                .join('FF_Clients','FF_Orders.fk_client','=','FF_Clients.id')
                .join('FF_Tables','FF_Orders.fk_table','=','FF_Tables.id')
            return result    
        } catch (error:any) {
            throw new Error(error.message);
        }
    }

    newRequest = async (order:any)=>{
        try {
            const {id, idProduct, idClient, idTable, idOrder, quantity} = order
            const result = await RequestDatabase.connection(this.TABLE_NAME)
                .insert({
                    id,
                    idOrder: idOrder,
                    fk_table: idTable,
                    fk_client: idClient,
                    fk_product :idProduct,
                    quantity: quantity
                })
                return result
        } catch (error:any) {
            throw new Error(error.message);
        }
    }

    myOrders = async (idClient:string)=>{
        try {
            const result = await RequestDatabase.connection(this.TABLE_NAME)
                .join('FF_Products','FF_Orders.fk_product','=','FF_Products.id')
                .where({
                    fk_client: idClient
                })
                return result
                  
        } catch (error:any) {
            throw new Error(error.message);
        }
    }

    deleteOrders = async (id:string)=>{
        try {

            await RequestDatabase.connection(this.TABLE_NAME)
                .delete()
                .where(
                    {fk_product: id}
                )
        } catch (error:any) {
            throw new Error(error.message);
            
        }
    }

    removeOrder = async (id:string)=>{
        try {
            await RequestDatabase.connection(this.TABLE_NAME)
                .delete()
                .where({
                    fk_client:id
                })
        } catch (error:any) {
            throw new Error(error.message);
        }
    }
}
