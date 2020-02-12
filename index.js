const express = require('express')
const app = express()
const port = 8080

app.get('/', (req, res) => res.send('Hello World from a Node.js server on a Docker image!'))

app.listen(port, () => console.log(`Hello World app listening on port ${port}!`))