import { Request, Response } from 'express';
import { ProductsBusiness } from './../business/ProductsBusiness';
export class ProductsController{
    productsBusiness = new ProductsBusiness();

    allProducts = async (req:Request, res:Response)=>{
        try {
            const result = await this.productsBusiness.allProducts()
            res.status(200).send(result)
        } catch (error:any) {
            res.status(400).send(error.message)
        }
    }

    createProducts = async (req:Request, res:Response)=>{
        try {
            const {product, price, category, photo} = req.body
            const newProduct = {
                product, 
                price,
                category,
                photo
            }

            await this.productsBusiness.createProducts(newProduct)
            res.status(200).send('Produto criado com sucesso...')
        } catch (error:any) {
            res.status(400).send(error.message)
        }
    }
}