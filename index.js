import express from 'express';
import {engine} from 'express-handlebars'
import bodyParser from 'body-parser';
import MenuAPI from './API/menuAPI.js';
import menuRoutes from './Routes/menuRoutes.js';

const app = express();
let filePath = './restaurant_menu.yaml'
const menuapi = MenuAPI(filePath);
const menuroutes = menuRoutes(menuapi)

// app.use(cors());
//body-parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// app.use(session({
//     secret: process.env.SECRET_KEY,
//     resave: false,
//     saveUninitialized: true
//   }));
// app.use(flash());
//handlebars engine

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

//public static
app.use(express.static('public'));


//API calls 
app.get('/menu', menuapi.getFile);
app.get('/menu/items', menuapi.readFile)

//routes
app.get('/', menuroutes.getMenu)
//local host 
const PORT = process.env.PORT || 3011

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});