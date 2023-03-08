import { GenerateId } from '../services/GenerateId';
import { MessageDatabase } from './../database/MessagesDatabase';
export class MessagesBusiness{
    messagesDatabase = new MessageDatabase()

    sendMessages = async (inputMessage:any)=>{
        try {
            const {message, sender} = inputMessage

            const id = GenerateId.newID()

            const newMessage = {
                id,
                message,
                sender
            }

            const result = await this.messagesDatabase.sendMessages(newMessage)
            return result    

        } catch (error:any) {
            throw new Error(error.message);
        }
    }
}