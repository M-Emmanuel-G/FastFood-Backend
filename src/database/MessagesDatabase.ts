import { BaseDatabase } from "./BaseDatabase";

export class MessageDatabase extends BaseDatabase{
    TABLE_NAME = 'FF_Messages'
    
    sendMessages = async (newMessage:any)=>{
        try {
            const {id, message, sender} = newMessage

            const result = await MessageDatabase.connection(this.TABLE_NAME)
                .insert({
                    id,
                    message,
                    sender
                })
             
            return result    

        } catch (error:any) {
            throw new Error(error.message);
        }
    }
}