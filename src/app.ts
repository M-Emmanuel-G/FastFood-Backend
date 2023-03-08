import { messagesRouter } from './router/messagesRouter';
import { orderRouter,} from './router/orderRouter';
import { productsRouter } from './router/productsRouter';
import { userRouter } from './router/userRouter';
import express from 'express'
import cors from 'cors'
import { tableRouter } from './router/tableRouter';

const app = express();

app.use(express.json())
app.use(cors())

app.use('/fastfood/users', userRouter)
app.use('/fastfood/products', productsRouter)
app.use('/fastfood/order', orderRouter)
app.use('/fastfood/tables', tableRouter)
app.use('/fastfood/messages', messagesRouter)


app.listen(3003,()=>{console.log('SERVER IS RUNNING IN PORT: 3003');
})