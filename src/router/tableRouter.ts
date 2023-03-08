import { TableController } from './../controller/TableController';
import express from 'express'

export const tableRouter = express.Router()
const tableController = new TableController()

tableRouter.get('/all', tableController.allTable)
tableRouter.post('/create', tableController.createTable)
tableRouter.get('/select/idClient/:idClient/idTable/:idTable', tableController.selectTable)
tableRouter.get('/vacateTable/:id', tableController.vacateTable)
tableRouter.get('/showTables', tableController.showTable)
tableRouter.get('/ClearTables', tableController.clearAllTables)
tableRouter.delete('/delete/:id', tableController.deleteTable)