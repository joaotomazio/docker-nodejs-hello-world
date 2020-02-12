const express = require('express')
const app = express()
const port = 8080

app.get('/', (req, res) => res.send('Hello World from a Node.js server on a Docker image! I am listening on port 8080'))

app.listen(port, () => console.log(`Hello World app listening on port ${port}!`))