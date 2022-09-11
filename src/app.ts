import bodyParser from 'body-parser';
import express from 'express';


const app = express()
const systemRoutes = require('./infra/routes/system')

app.use(bodyParser.urlencoded({extended: false}))
app.use(systemRoutes)

app.listen(5000)