const express = require('express');
const fs = require('fs');
const hbs = require('hbs');
const app = express();


const port = process.env.PORT || 3000;
hbs.registerPartials(`${__dirname}/views/partials`)

app.set('view engine', 'hbs');



app.use((request,response,next) => {
    const now = new Date().toString();
    const log = `Request made : ${now} : ${request.method} ${request.url}`
    console.log(log)
    fs.appendFile('server.log', `${log} \n`, (error) => {
        console.log("Loggin a log lagged cause of ", error);
    })
    next();
})

app.use((request,response,next) => {
    response.render('maintenance.hbs');
})

app.use(express.static(`${__dirname}/public`))
hbs.registerHelper('getCurrentYear',() => {
    return new Date().getFullYear();
})

hbs.registerHelper('screamIt',(text) => {
    return text.toUpperCase();
})

app.get('/',(request,response) => {
    response.send({
        name:'Whoot',
        lastName:"Boobs",
    });
})

app.get('/about',(request,response) => {
    response.render('about.hbs',{
        welcomeMessage: 'Welcome to my website',
        greeting:'About page',
        pageTitle: "About Page",
    })
})

app.get('/home',(request,response) => {
    response.render('home.hbs',{
        greeting : "Hi there!",
        sum : 2 + 2 + 2 + 3,
    })
})

app.get('/bad', (request,response) => response.send({you:'suck'}))

app.listen(port,() => {
    console.log(`Server is up at port ${port}`)
})