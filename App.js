// The purpose of this project is better understand "Advanced GitHub" in CI/CD

const express = require('express')
const app = express()
// Simple Hello World Node App
const APP_PORT = process.env.APP_PORT || 3000; app.get('/'), (req, res) => {
    res.send('Hello Tyler Hardiman! Nice to see you again!')
    
};

app.listen(APP_PORT, () => {
    console.log('Running app at port:${APP_PORT}')
})
