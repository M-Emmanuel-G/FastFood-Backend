import { Request, Response } from 'express';
import { MessagesBusiness } from './../business/MessagesBusiness';
export class MessagesController {
    messagesBusiness = new MessagesBusiness()

    sendMessages = async (req:Request, res:Response)=>{
        try {
            const {idClient} = req.params
            const {message} = req.body

            const newMessage = {
                idClient,
                message
            }

            const result = await this.messagesBusiness.sendMessages(newMessage)
             
                res.status(200).send({message:'Mensagem enviada com sucesso.'})

        } catch (error:any) {
            res.status(400).send(error.message);
        }
    }

    getMessage = async (req:Request, res:Response)=>{
        try {
            const {id} = req.params

            const result = await this.messagesBusiness.getMessage(id)

            res.status(200).send({message:'Mensagens recentes.', result})
        } catch (error:any) {
            res.status(400).send(error.message);
        }
    }
}