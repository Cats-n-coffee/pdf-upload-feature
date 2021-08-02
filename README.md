# PDF Parser Feature

This quick project was an exercise to parse PDF documents and store the parsed result in a database.

## Entry file

The entry file is `app.js`. It connects to the database, creates a server and uses the appropriate middleware such as `fileUpload` (see below), CORS and Json.

## Upload files

In order to use the data from uploaded files (files uploaded in the browser), we use the package `express-fileupload`. The file uploaded is then available on `req.files`.

## Parse the data and Post to the database

A POST request to `/add` will parse the file and post the result to the database. The `parse` function (helper) uses the `pdf-parse` package to return a Js object that will be inserted in the database. <br>
Calling the `pdfParse` function (the `pdf-parse` package), it outputs a buffer. We can read the data on the 'text' property (`data.text`) inside the promise. This property outputs a string that we can format. <br>
In the case of this exercise, we need to remove the repeated white spaces that might be at the beginning of a line, split at the new line and add `;`. We then convert the output string to an object and convert it to lower case.