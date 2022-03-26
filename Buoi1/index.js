const express = require('express')
const app = express()
const PORT = 3000
app.get('/',(req,res) => {
    res.send({ 
        name : 'Lop BEN04'
    })
})
app.listen(PORT, 
    (req, res) => { console.log(`Server listening on port ${PORT}`) }) // localhost:3000 127.0.0.1:3000