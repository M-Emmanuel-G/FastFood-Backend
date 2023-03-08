import { BaseDatabase } from "./BaseDatabase";

export class ProductsDatabase extends BaseDatabase {
    TABLE_NAME = 'FF_Products'

    allProducts = async ()=>{
        try {
            const result = await ProductsDatabase.connection(this.TABLE_NAME)
                .select()
            return result    
        } catch (error:any) {
            throw new Error(error.message);
        }
    }

    createProducts = async (inputProduct:any)=>{
        try {
            const {id, product, price, category, photo} = inputProduct

            await ProductsDatabase.connection(this.TABLE_NAME)
                .insert({
                    id,
                    product,
                    price,
                    category,
                    photo
                })

        } catch (error:any) {
            throw new Error(error.message);
            
        }
    }
}