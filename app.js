var session = require('express-session')
var express = require("express")
const app= express();
var bodyParser = require("body-parser")
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static(__dirname + '/public'));

app.set('view engine','ejs')
// application.use(cookieParser())

app.use(session({
    secret: '123456cat',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
}))

var registrationRouter = require('./routes/registration-route');
var loginRouter = require('./routes/login-route');
var dashboardRouter = require('./routes/dashboard-route');
var logoutRouter = require('./routes/logout-route');
var usersRouter = require('./routes/users');
var commentsRouter2 =require('./routes/comment-route2');

app.use('/', registrationRouter);
app.use('/', loginRouter);
app.use('/', dashboardRouter);
app.use('/', logoutRouter);
app.use('/', usersRouter)//try writing dashboard once......also / 
app.use('/',commentsRouter2)


app.listen(3000,function(){
    console.log("server is running.....")
})