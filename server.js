import express from 'express'
const app = express();

app.get('/', (req,res) => {
    res.redirect('/login')
})

console.log('anhtu')
app.listen(3003);