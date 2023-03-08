import { ProductsController } from './../controller/ProductsController';
import express from 'express'

export const productsRouter = express.Router()

const productsController = new ProductsController()

productsRouter.get('/show', productsController.allProducts)
productsRouter.post('/create', productsController.createProducts)
