//importamos el modulo de express el cual devuelve un objeto
import express from 'express'

//guardamos este objeto en la variable APP
const app = express();

app.set('port', process.env.PORT || 3000);

app.get('/', (req,res) => {
    res.json('Welcome to my application');
    }
);

app.listen(app.get('port'))
console.log('Server on port', app.get('port'));