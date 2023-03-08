import { AuthenticationData } from '../model/Authentication'
import * as jwt from 'jsonwebtoken'
import dotenv from 'dotenv'

dotenv.config()

export class Authenticator{
    public generateToken = ({id}:AuthenticationData): string=>{
        const token =  jwt.sign(
            {id},
            process.env.JWT_KEY as string,
            {expiresIn:'6h'}
        )
        return token
    }

    getTokenData = (token:string):AuthenticationData=>{
       try {
           
           const payload = jwt.verify(token, process.env.JWT_KEY as string) as AuthenticationData
           return payload
       } catch (error:any) {
        throw new Error("Nao autorizado.");
       }
    }
}