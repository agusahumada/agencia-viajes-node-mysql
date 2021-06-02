import express from 'express';

const app = express();

const PORT = process.env.PORT || 4000;

app.get('/', (req,res) => {
    res.send('Inicio');
});
app.get('/Nosotros', (req,res) => {
    res.send('Nosotros');
});
app.get('/Contacto', (req,res) => {
    res.send('Contacto');
});

app.listen(PORT, ()=>{
    console.log(`Servidor funcionando en el puerto ${PORT}`);
});