import { Request, Response } from 'express';
import { readdirSync } from 'fs';
import { UserBusiness } from './../business/UserBusiness';
export class Usercontroller{
    userBusiness = new UserBusiness();
    
    login = async (req:Request, res:Response)=>{
        try {
            const {name, cpf, phone } = req.body

            const user = {
                name,
                cpf,
                phone
            }
            
            const token = await this.userBusiness.login(user)
            res.status(200).send({message:'Usuario logado com sucesso.', token})
        } catch (error:any) {
            res.status(400).send(error.message)
        }
    }

    allUsers = async (req:Request, res:Response)=>{
        try {
            const result = await this.userBusiness.allUsers()
            res.status(200).send(result)
        } catch (error:any) {
           res.status(400).send(error.message);
            
        }
    }

    signup = async (req:Request, res:Response)=>{
        try {
            const {cpf, name, phone} = req.body

            const newUser = {
                cpf,
                name,
                phone
            }
            const result = await this.userBusiness.signup(newUser)
            res.status(200).send({message:'Conta criada com sucesso.', result})
        } catch (error:any) {
            res.status(400).send(error.message);
        }
    }

    searchUserbyID = async (req:Request, res:Response)=>{
        try {
            const {id} = req.params
            const result = await this.userBusiness.searchUserbyID(id)
            res.status(200).send(result)
        } catch (error:any) {
            res.status(400).send(error.message)
        }
    }

    profile = async (req:Request, res:Response)=>{
        try {
            const {id} = req.params
           const result = await this.userBusiness.profile(id)
           res.status(200).send(result)
        } catch (error:any) {
            res.status(400).send(error.message);
        }
    }

    deleteUser = async (req:Request, res:Response)=>{
        try {
            const {id} = req.params 
            await this.userBusiness.deleteUser(id as string)

            res.status(200).send('Usuario excluido.')
        } catch (error:any) {
            res.status(400).send(error.message);
        }
    }

    payment = async (req:Request, res:Response)=>{
        try {
            const {id} = req.params
            await this.userBusiness.payment(id)
           res.status(200).send('Pagamento realizado com sucesso...')
        } catch (error:any) {
            res.status(400).send(error.message)
        }
    }

    notPay = async (req:Request, res:Response)=>{
        try {
            const {id} = req.params
            const result = await this.userBusiness.notPay(id)
            res.status(200).send({message:'Conta em aberto...', result})
        } catch (error:any) {
            res.status(400).send(error.message)
        }
    }

    finalizeBill = async (req:Request, res:Response)=>{
        try {
            const {id} = req.params
            const result = await this.userBusiness.finalizeBill(id)
            res.status(200).send({message:'Pedidos deletados...', result})

        } catch (error:any) {
            res.status(400).send(error.message)
        }
    }

    isLoggged = async (req:Request, res:Response)=>{
        try {
            const {id} = req.params
            await this.userBusiness.isLoggged(id)
            res.status(200).send('logado com sucesso')
        } catch (error:any) {
            res.status(400).send(error.message)
        }
    }

    notIsLoggged = async (req:Request, res:Response)=>{
        try {
            const {id} = req.params
            await this.userBusiness.notIsLoggged(id)
            res.status(200).send('deslogado com sucesso')
        } catch (error:any) {
            res.status(400).send(error.message)
        }
    }

    messageProfile = async (req:Request, res:Response)=>{
        try {
            const {id} = req.params
            const result = await this.userBusiness.messageProfile(id)
            res.status(200).send({message:'Lista exibida...', result})
        } catch (error:any) {
            res.status(400).send(error.message);
            
        }
    }

}