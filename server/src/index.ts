import exprees from "express"
import dotenv from "dotenv"
import bodyParser from "body-parser"
import cors from 'cors'
import helmet from "helmet"
import morgan from "morgan"
import dashboardRoute from "./routes/dashboardRoute" 
import productRoute from "./routes/productRoute"

dotenv.config()
const app=exprees()
app.use(exprees.json())
app.use(helmet())
app.use(helmet.crossOriginResourcePolicy({policy:'cross-origin'}))
app.use(morgan("common"))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))
app.use(cors())



const port =process.env.PORT || 3001

app.use("/dashboard",dashboardRoute)
app.use("/products",productRoute)


app.listen(port,()=>{
    console.log(`server is running at port ${port}`)
})