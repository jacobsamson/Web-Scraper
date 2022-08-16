const axios = require('axios');
const cheerio = require('cheerio');
const express = require('express');

const PORT = 8000

const app = express()

const url = 'https://www.youngla.com/collections/t-shirts/For-Him'

// app.METHOD(PATH, HANDLER)

app.get('/', function(req, res) {
    res.json('this is my webscrapper')
})

app.get('/results', (req, res) =>{
    axios(url)
    .then(response => {
        const html = response.data
        const $ = cheerio.load(html)
        const clothes = []
        $('.ProductItem__Info', html).each(function(){
            const title = $(this).text().trim().replace(/\n/g,'')
            clothes.push({
                title
            })
        })
        // console.log(clothes)
        res.json(clothes)
    }).catch(err => console.log(err))
})

app.listen(PORT, () => console.log(`Server Running on PORT ${PORT}`))
