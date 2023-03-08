import { UserDatabase } from './../database/UserDatabase';
import { Authenticator } from "../services/Authenticator";
import { GenerateId } from "../services/GenerateId";

export class UserBusiness{
    userDatabase = new UserDatabase()
    authenticator = new Authenticator()

    login = async (user:any) =>{
        try {
            const {cpf} = user
            if(!cpf) throw new Error("Todos os campos precisam ser preenchidos.");
            if(cpf.length != 11) throw new Error("O CPF precisa conter os 11 digitos e somente numeros.");

            const verifyCpf = await this.userDatabase.verifyCPF(cpf)
            if(verifyCpf.length !== 1) throw new Error('CPF nao cadastrado.')

            await this.userDatabase.isLoggged(verifyCpf[0].id)
            
            return verifyCpf

        } catch (error:any) {
            throw new Error(error.message);
        }
    }

    allUsers = async ()=>{
        try {
            const result = await this.userDatabase.allUsers()
            return result
        } catch (error:any) {
            throw new Error(error.message);
            
        }
    }


    signup = async (user:any)=>{
        try {
            const {name, cpf, phone} = user
            if(!name || !cpf|| !phone) throw new Error('Todos os campos precisam ser preenchidos.')
            const verifyCpf = await this.userDatabase.verifyCPF(cpf)
            if(verifyCpf.length === 1) throw new Error("Este CPF ja esta sendo utilizado...");
            
            
            const id = GenerateId.newID()

            const newUser:any = {
                id,
                name,
                cpf,
                phone
            }

            const token = await this.userDatabase.signup(newUser)
            return token
            
        } catch (error:any) {
            throw new Error(error.message);
        }
    }

    searchUserbyID = async (id:string)=>{
        try {
            const result = await this.userDatabase.searchUserbyID(id)
            return result
        } catch (error:any) {
            throw new Error(error.message);
        }
    }

    profile = async (id:string)=>{
        try {
            const result = await this.userDatabase.profile(id)
            return result
        } catch (error:any) {
            throw new Error(error.message);
            
        }
    }

    deleteUser = async (id:string)=>{
        try {
            await this.userDatabase.deleteUser(id)
        } catch (error:any) {
            throw new Error(error.message);
        }
    }

    payment = async (id:string)=>{
        try {
            await this.userDatabase.payment(id)
        } catch (error:any) {
            throw new Error(error.message);
        }
    }

    notPay = async (id:string)=>{
        try {
            
            const result = await this.userDatabase.searchUserbyID(id)
            if(result.length < 1) throw new Error("Usuario nao encontrado.");
            
            await this.userDatabase.notPay(id)
            
        } catch (error:any) {
            throw new Error(error.message);
        }
    }

    finalizeBill = async (id:string)=>{
        try {
            const result = await this.userDatabase.finalizeBill(id)
            return result        
        } catch (error:any) {
            throw new Error(error.message);
        }
    }

    isLoggged = async (id:string)=>{
        try {
            await this.userDatabase.isLoggged(id)
        } catch (error:any) {
            throw new Error(error.message);
        }
    }

    notIsLoggged = async (id:string)=>{
        try {
            await this.userDatabase.notIsLoggged(id)
        } catch (error:any) {
            throw new Error(error.message);
        }
    }

    messageProfile = async (id:string)=>{
        try {
            const verifyProfile = await this.userDatabase.searchUserbyID(id)
            if(verifyProfile.length < 1) throw new Error("Usuario nao encontrado.");

            const result = await this.userDatabase.messageProfile(id)  
            return result      
        } catch (error:any) {
            throw new Error(error.message);
            
        }
    }

}