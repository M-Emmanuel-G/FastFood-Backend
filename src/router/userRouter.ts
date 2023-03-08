import { Usercontroller } from './../controller/UserController';
import express from 'express'

export const userRouter = express.Router()

const userController = new Usercontroller()

userRouter.post('/login', userController.login)
userRouter.post('/signup', userController.signup)
userRouter.get('/show', userController.allUsers)
userRouter.get('/show/:id' , userController.searchUserbyID)
userRouter.get('/profile/:id' , userController.profile)
userRouter.delete('/delete/:id', userController.deleteUser)
userRouter.get('/payment/:id', userController.payment)
userRouter.get('/notPayment/:id', userController.notPay)
userRouter.get('/finalizeBill/:id', userController.finalizeBill)
userRouter.get('/isLogged/:id', userController.isLoggged)
userRouter.get('/notIsLogged/:id', userController.notIsLoggged)
userRouter.get('/messages/:id', userController.messageProfile)