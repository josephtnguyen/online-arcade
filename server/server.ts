const express = require('express');
const cors = require('cors');
const http = require('http');
const app = express();

const port = 3001
app.use(cors());

app.get('/api/test', (req, res) => {
    res.json({ test: 'Test'})
})

const server = http.createServer(app)

server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`)
})