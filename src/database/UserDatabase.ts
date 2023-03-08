import { BaseDatabase } from "./BaseDatabase";

export class UserDatabase extends BaseDatabase {
    TABLE_NAME= 'FF_Clients'

    signup = async (user:any)=>{
        try {
            const {id, name, cpf, phone} = user
            const result = await UserDatabase.connection(this.TABLE_NAME)
                .insert({
                    id,
                    name,
                    cpf,
                    phone
                })
                return result
        } catch (error:any) {
            throw new Error(error.message);
        }
    }
    
    verifyCPF = async (cpf:string)=>{
        try {
            const result = await UserDatabase.connection(this.TABLE_NAME)
            .select()
            .where({cpf})
            return result
            
        } catch (error:any) {
            throw new Error(error.message);
            
        }
    }

    allUsers = async ()=>{
        try {
            const result = await UserDatabase.connection(this.TABLE_NAME)
                .select()
            return result
        } catch (error:any) {
            throw new Error(error.message);
        }
    }

    searchUserbyID = async (id:string)=>{
        try {
            const result = await UserDatabase.connection(this.TABLE_NAME)
                .select()
                .where({id})
            return result    
        } catch (error:any) {
            throw new Error(error.message);
            
        }
    }

    profile = async (idClient:string)=>{
        try {
            const result = await UserDatabase.connection(this.TABLE_NAME)
                .select()
                .join('FF_Tables','FF_Clients.id','FF_Tables.fk_client')
                .where({
                    fk_client : idClient
                })
                return result
        } catch (error:any) {
            throw new Error(error.message);
            
        }
    }

    deleteUser = async (id:string)=>{
        try {
            await UserDatabase.connection(this.TABLE_NAME)
                .delete()
                .where({id:id})
        } catch (error:any) {
            throw new Error(error.message);
            
        }
    }

    payment = async (id:string)=>{
        try {
            await UserDatabase.connection(this.TABLE_NAME)
                .update({
                    payment: true
                })
                .where({
                    id
                })
        } catch (error:any) {
            throw new Error(error.message);
        }
    }

    notPay = async (id:string)=>{
        try {
            const result = await UserDatabase.connection(this.TABLE_NAME)
                .update({
                    payment: false
                })
                .where({
                    id
                })
            return result    
        } catch (error:any) {
            throw new Error(error.message);
        }
    }
    
    finalizeBill = async (id:string)=>{
        try {
            const result = await UserDatabase.connection('FF_Orders')
                .select()
                .join('FF_Clients','FF_Orders.fk_client','=','FF_Clients.id')
                .delete()
                .where({fk_client : id})
                return result
        } catch (error:any) {
            throw new Error(error.message);
        }
    }

    isLoggged = async (id:string)=>{
        try {
            await UserDatabase.connection(this.TABLE_NAME)
                .update(
                    {
                        isLogged: true,
                    }
                )
                .where({id})
        } catch (error:any) {
            throw new Error(error.message);
        }
    }

    notIsLoggged = async (id:string)=>{
        try {
            await UserDatabase.connection(this.TABLE_NAME)
            .update(
                {
                    isLogged: false,
                }
            )
            .where({id})
        } catch (error:any) {
            throw new Error(error.message);
        }
    }

    messageProfile = async (id:string)=>{
        try {
            const result = await UserDatabase.connection(this.TABLE_NAME)
                .select()
                .join('FF_Messages','FF_Clients.fk_message','=','FF_Messages.id')
                .where({fk_message : id})
            return result    
        } catch (error:any) {
            throw new Error(error.message);
            
        }
    }

    

}