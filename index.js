import express from 'express';
import {engine} from 'express-handlebars'
import bodyParser from 'body-parser';
import MenuAPI from './API/menuAPI.js';
import MenuRoutes from './Routes/menuRoutes.js';

const app = express();
const menuAPI = MenuAPI();
const menuroutes = MenuRoutes(menuAPI)

//body-parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

//public static
app.use(express.static('public'));

//routes
app.get('/', menuroutes.showIndex);
app.get('/menu/:filepath', menuroutes.getMenu);
app.post('/menu/:filePath', menuroutes.getFilePath);
//local host 
const PORT = process.env.PORT || 3011

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});