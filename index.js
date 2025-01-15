const express = require('express')
const morgan = require('morgan')
const path = require('path');


const app = express()
const port = 8080

app.use(morgan('combined'))

// V1
app.get('/', (req, res) => res.send('Hello World from a Node.js server on a Docker image!'))

// V2
//app.get('/', (req, res) => res.sendFile(path.join(__dirname, '/index.html')))

app.listen(port, () => console.log(`Hello World app listening on port ${port}!`))
