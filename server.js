const express = require('express');
const app = express();


app.get('/hello', (req, res) => {
    res.send('hello world.')
});

app.get('/:name/hello', (req, res) => {
    console.log(req.params.name)
    res.send(req.params.name)
})

const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on ${port}`);
});




// question 2 


// app.get('/roll/:number', (req, res) => {
//     const number = req.params.number

// })


























// // ! Saying we want to use express. We 'require' it for our project.
// // its a function that takes the package name as an argument.
// const express = require('express')

// // ! We call express, it gives us back an app we can use to listen/handle requests.
// const app = express()
// // this is a port number
// const port = 3000

// // ! This is defining a 'route' on our app
// app.get('/hello', (req, res) => {
//   res.send('Hello World!')
// })

// // ! This is defining another 'route' on our app
// app.get('/goodbye', (req, res) => {
//   // ! Sends a response to the client.
//   res.send('Goodbye world!')
// })

// // * VARIABLE PATHS
// // ! The colon : means that name is now a variable.
// app.get('/greetings/:name/:greeting', (req, res) => {
//   console.log(req.params)
//   // ! req.params.name gets the name variable from the requests params.
//   res.send(`<h1>${req.params.greeting} ${req.params.name}</h1>`)
// })

// // * QUERIES
// app.get('/greeting', (req, res) => {
//   // ! Access query parameters from the request.
//   const greeting = req.query.greeting
//   const name = req.query.name

//   res.send(`${greeting} ${name}! Nice to meet you.`)
// })

// const lunches = [
//   { name: 'thai' },
//   { name: 'pizza' },
//   { name: 'special fried rice' },
//   { name: 'jam bagel' }
// ]

// app.get('/lunches', (req, res) => {
//   lunches.push({ name: 'hot dog' })
//   res.send(lunches)
// })

// // ! Express is listening on this port.
// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })