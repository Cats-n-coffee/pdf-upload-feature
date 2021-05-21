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

// returns an object from parsed pdf
function parse(file) {
    let dataBuffer = fs.readFileSync('./assets/Name.pdf'); // will replace with 'file' once frontend is ready to upload docs

    return pdfParser(dataBuffer).then(function(data) {
        let parsedData = data.text;

        let newStr = parsedData.replace(/^\s+/g, '').split('\n').join(';');
        let obj = Object.entries(strToObj(newStr));
        let lowerCaseEntries = obj.map(entry => [entry[0][0].toLowerCase() + entry[0].slice(1), entry[1]]);
        let lowerCaseObj = Object.fromEntries(lowerCaseEntries);

        return lowerCaseObj;
    })
    .catch(err => console.log('error at parse function ', err))
}

module.exports = parse;

// transform string into mongo ready object 
//https://stackoverflow.com/questions/1086404/string-to-object-in-js