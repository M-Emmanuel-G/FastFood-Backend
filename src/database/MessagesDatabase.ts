import { BaseDatabase } from "./BaseDatabase";

export class MessageDatabase extends BaseDatabase{
    TABLE_NAME = 'FF_Messages'
    
    sendMessages = async (newMessage:any)=>{
        try {
            const {id, idClient, message, date} = newMessage

            const result = await MessageDatabase.connection(this.TABLE_NAME)
                .insert({
                    id,
                    message,
                    fk_client: idClient,
                    date
                })
             
            return result    

        } catch (error:any) {
            throw new Error(error.message);
        }
    }

    getMessage = async (id:string) =>{
        try {
            const result = await MessageDatabase.connection(this.TABLE_NAME)
                .select()
                .join('FF_Clients','FF_Messages.fk_client','=','FF_Clients.id')
                .where({fk_client: id })
             return result   
        } catch (error:any) {
            throw new Error(error.message);
            
        }
    }

    deleteMessage = async(id:string)=>{
        try {
            await MessageDatabase.connection(this.TABLE_NAME)
                .delete()
                .where({id})
        } catch (error:any) {
            throw new Error(error.message);
        }
    }
}