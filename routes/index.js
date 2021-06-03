import express from 'express';

const router = express.Router();

router.get('/inicio', (req,res) => {
    res.render('Inicio', {

    });
});
router.get('/nosotros', (req,res) => {
    const viajes = 'Viajes a Alemania';
    res.render('nosotros', {
        viajes
    });
});


export default router;