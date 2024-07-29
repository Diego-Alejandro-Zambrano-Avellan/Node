
const app = express()
const port = 3000
import { sequelize } from './db/conexion.js';
import  express from 'express';
app.use(express.static('public'));

app.set('view engine', 'hbs');
import hbs from 'hbs';
import path from 'path';
import { fileURLToPath } from 'url';
import UserRouter from './routes/userrouter.js';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

hbs.registerPartials(__dirname + '/views/partials', function (err) {});


app.use('/', UserRouter);

const main= async () =>{
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
    await sequelize.sync({force:false})
     app.listen(port, () => {
      console.log(`Servidor corriendo en el puerto ${port}`)
    })
} catch (error) {
    console.error(`Error ${error}`);
}
}
main();

