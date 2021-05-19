const express = require('express')
const router = express.Router()
const ops = require('../db/dbOperations');


router.post('/add', async (req, res) => {
    ops.insertPDF()
    res.send('ops write')
})

module.exports = router