import express from 'express';
import router from './routes/index.js'

const app = express();

//Definiendo el puerto
const PORT = process.env.PORT || 4000;

//Habilitando Pug
app.set('view engine', 'pug');

//Definiendo la carpeta public
app.use(express.static('public'));

//Agregando router
app.use('/', router);

app.listen(PORT, ()=>{
    console.log(`Servidor funcionando en el puerto ${PORT}`);
});