import { DateNow } from '../services/Date';
import { GenerateId } from '../services/GenerateId';
import { MessageDatabase } from './../database/MessagesDatabase';
export class MessagesBusiness{
    messagesDatabase = new MessageDatabase()

    sendMessages = async (inputMessage:any)=>{
        try {
            const {idClient, message} = inputMessage

            const id = GenerateId.newID()
            const date = DateNow.new() 

            const newMessage = {
                id,
                message,
                idClient,
                date 
            }

            const result = await this.messagesDatabase.sendMessages(newMessage)
            return result   

        } catch (error:any) {
            throw new Error(error.message);
        }
    }

    getMessage = async (id:string)=>{
        try {
            const result = await this.messagesDatabase.getMessage(id)
            return result
        } catch (error:any) {
            throw new Error(error.message);
        }
    }
}