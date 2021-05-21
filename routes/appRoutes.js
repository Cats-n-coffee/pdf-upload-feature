const express = require('express')
const router = express.Router()
const ops = require('../db/dbOperations');
const parse = require('../helpers/pdfParser');

router.get('/data', (req, res) => {
    res.status(200).json({ msg: 'get route' })
})

router.post('/add', (req, res) => {
    console.log(req.files.fileinput)
    parse().then(response => { 
        console.log('log at post before', response)
        ops.insertPDF(response)
        res.status(200).json({ msg: 'file posted' })
    })
    .catch(err => console.log('error at POST route /add ', err))
})

module.exports = router