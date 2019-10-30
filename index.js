//khai bao bien moi truong process.env
require('dotenv').config();

const express = require ('express');
const app = express();
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const csurf = require('csurf');



const mongoose = require('mongoose');
mongoose.connect(process.env.MONGO_URL,{ useNewUrlParser: true });

const userRoute = require('./routes/user.route');
const authRoute = require('./routes/auth.route');
const requestAuth = require('./middleware/auth.middleware');

const apiUserRoute = require("./API/routes/user.route");

const port = 3000;

app.set('view engine', 'pug');
app.set('views', './views');

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(express.static('public'));//luu tru cac file public trong forder public
app.use(cookieParser(process.env.SESSION_SECRET));// cookieParser("sdsafsaffasfwe") them vao sau doan luu 1 doan ma de chong nguoi dug co tinh thay doi cookie
//app.user(csurf({cookie: true}));

app.use("/api/users", apiUserRoute);


//next duoc dung thuc thi middleware tiep theo
app.get('/', function(request, response) {
	// path, object bao gom key value
	response.render('index',{
		name: 'Trong'
	});
});

app.use('/users',  userRoute);
app.use('/auth', authRoute);

app.listen(port , function() { console.log('Example app listening on port ' + port + '!')});