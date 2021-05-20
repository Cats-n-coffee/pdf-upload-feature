const fs = require('fs');
const pdfParser = require('pdf-parse');

function strToObj(string) {
    return string
      .split(';') // replace with ',' once data model ready
      .map(keyVal => {
        return keyVal
          .split(':')
          .map(_ => _.trim())
      })
      .reduce((accumulator, currentValue) => {
        accumulator[currentValue[0]] = currentValue[1]
        return accumulator
      }, {})
}

function parse(file) {
    let dataBuffer = fs.readFileSync('./assets/Name.pdf'); // will replace with 'file' once frontend is ready to upload docs
    let parsedData;

    pdfParser(dataBuffer).then(function(data) {
        console.log(data.text)
        parsedData = data.text;

        let newStr = parsedData.replace(/^\s+/g, '').split('\n').join(';');
        let obj = strToObj(newStr);

        console.log(obj)
    })
}

module.exports = parse;

// transform string into mongo ready object 
//https://stackoverflow.com/questions/1086404/string-to-object-in-js