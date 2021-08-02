const express = require('express')
const router = express.Router()
const ops = require('../db/dbOperations');
const parse = require('../helpers/pdfParser');
require('dotenv').config();

router.get('/data', (req, res) => {
    res.status(200).json({ msg: 'get route' })
})

router.post('/add', (req, res) => {
    
    parse(req.files.file.data).then(response => { 
        ops.insertPDF(response)
        res.status(200).json({ msg: 'file posted' })
    })
    .catch(err => console.log('error at POST route /add ', err))
})

module.exports = router