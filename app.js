const session = require('express-session')
const express = require("express")
const app= express();
const bodyParser = require("body-parser")


require('dotenv').config();

const PORT = process.env.PORT || 3030;

app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static(__dirname + '/public'));

app.set('view engine','ejs')
// application.use(cookieParser())

app.use(session({
    secret: process.env.SECRET_KEY,
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
}))

const registrationRouter = require('./routes/registration-route');
const loginRouter = require('./routes/login-route');
const dashboardRouter = require('./routes/dashboard-route');
const logoutRouter = require('./routes/logout-route');
const usersRouter = require('./routes/users');
const commentsRouter2 =require('./routes/comment-route2');

app.use('/', registrationRouter);
app.use('/', loginRouter);
app.use('/', dashboardRouter);
app.use('/', logoutRouter);
app.use('/', usersRouter)//try writing dashboard once......also / 
app.use('/',commentsRouter2)


app.listen(PORT,function(){
    console.log(`server is running on port ${PORT}`);
})
