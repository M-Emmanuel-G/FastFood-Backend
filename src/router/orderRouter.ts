import { RequestController } from '../controller/OrderController';
import express from 'express';

export const orderRouter = express.Router()

const requestsController = new RequestController()

orderRouter.get('/show', requestsController.showRequests)
orderRouter.get('/neworder/idClient/:idClient/idProduct/:idProduct/quantity/:quantity/idTable/:idTable', requestsController.newRequest)
orderRouter.get('/myorders/:idClient', requestsController.myOrders)
orderRouter.delete('/myorders/delete/:id', requestsController.deleteOrders)
orderRouter.delete('/remove/:id', requestsController.removeOrder)