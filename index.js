const express = require('express')
const app = express()
const port = 3001

app.get('/', (req, res) => {
    res.send('Оля самая красивая девушка в мире :))!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})