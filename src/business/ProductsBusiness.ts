import { ProductsDatabase } from '../database/ProductsDatabase';
import { GenerateId } from '../services/GenerateId';
export class ProductsBusiness{
    productsDatabase = new ProductsDatabase()

    allProducts = async ()=>{
        try {
            const result = await this.productsDatabase.allProducts()
            return result
        } catch (error:any) {
            throw new Error(error.message);
            
        }
    }

    createProducts = async (inputProduct:any)=>{
        try {
            const {product, price, category, photo} = inputProduct

            if(!product || !price || !category || !photo) throw new Error('Todos os campos precisam ser inseridos.')
            if(isNaN(price)) throw new Error('O preco deve conter somente numeros.') 

            const id = GenerateId.newID()

            const newProduct = {
                id,
                product,
                price,
                category,
                photo
            }

            await this.productsDatabase.createProducts(newProduct)

        } catch (error:any) {
            throw new Error(error.message);
            
        }
    }
}