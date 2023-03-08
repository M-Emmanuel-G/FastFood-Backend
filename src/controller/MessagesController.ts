import { Request, Response } from 'express';
import { MessagesBusiness } from './../business/MessagesBusiness';
export class MessagesController {
    messagesBusiness = new MessagesBusiness()

    sendMessages = async (req:Request, res:Response)=>{
        try {
            const {message, sender} = req.body

            const newMessage = {
                message,
                sender
            }

            const result = await this.messagesBusiness.sendMessages(newMessage)
             
                res.status(200).send({message:'Mensagem enviada com sucesso.', result})

        } catch (error:any) {
            res.status(400).send(error.message);
        }
    }
}