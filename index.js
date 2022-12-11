const express = require('express')
const app = express()
const port = 3001

app.get('/', (req, res) => {
    res.send('<h1>Оля самая красивая девушка в мире :))!</h1>')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})