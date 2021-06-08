import express from 'express';
import router from './routes/index.js'

const app = express();

//Definiendo el puerto
const PORT = process.env.PORT || 4000;

//Habilitando Pug
app.set('view engine', 'pug');

//Obteniendo el año actual
app.use(( req, res, next )=>{
    const year = new Date();
    res.locals.actualYear = year.getFullYear();
    res.locals.nombreSitio = "Agencia de Viajes";
    next();
});

//Definiendo la carpeta public
app.use(express.static('public'));

//Agregando router
app.use('/', router);

app.listen(PORT, ()=>{
    console.log(`Servidor funcionando en el puerto ${PORT}`);
});