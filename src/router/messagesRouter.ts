import { MessagesController } from './../controller/MessagesController';

import express from 'express';

export const messagesRouter = express.Router()

const messagesController = new MessagesController()

messagesRouter.post('/sendMessage/:idClient', messagesController.sendMessages)
messagesRouter.get('/showMessages/:id',messagesController.getMessage)
