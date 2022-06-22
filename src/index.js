import express from 'express';
import * as swaggerUi from 'swagger-ui-express';
import swaggerDoc from '../swagger.json'; //option to use the local swagger json file

const app = express();
const PORT = 3000;

const options = {
    swaggerOptions: {
      url: 'http://api.swaggerhub.com/apis/toswim100/calculator/1.0.0?resolved=true'
    }
  }

app.use('/api', swaggerUi.serve, swaggerUi.setup(null, options))

app.get('/add/:a&:b', (req, res) => {
    const c = parseInt(req.params.a) + parseInt(req.params.b)
    res.send(c.toString())
});
app.get('/sub/:a&:b', (req, res) => {
    const c = parseInt(req.params.a) - parseInt(req.params.b)
    res.send(c.toString())
});
app.get('/div/:a&:b', (req, res) => {
    if( req.params.b === 0){
        res.status(400)
    }
    const c = parseInt(req.params.a) / parseInt(req.params.b)
    res.send(c.toString())
});
app.get('/mult/:a&:b', (req, res) => {
    const c = parseInt(req.params.a) * parseInt(req.params.b)
    res.send(c.toString())
});


app.listen( PORT, () => {
    console.log(`start listening to port ${PORT}`)
})