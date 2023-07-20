import express from 'express'
import http from 'http'
import { router } from './Routers/routerUser.js';

const app = express();
export const httpServer = new http.Server(app)

app.set("view engine", "ejs");
app.use(express.static('public'))

app.use('/', router)
//not found page
app.use((req, res, next) => {
    res.status(404).send("Pagina no encontrada");
})


