const express = require('express')
const bodyParser = require('body-parser')
const { default: axios } = require('axios')
const path = require('path')
const LocationURL = 'https://www.metaweather.com/api/location/'
const SearchURL = 'https://www.metaweather.com/api/location/search/?query='

const app = express()
app.set('view engine', 'ejs')
app.use(express.static(path.join(__dirname, 'public')))
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (req, res) =>{
    res.render('home', {res_data: [],title: 'Home'})
})

app.post('/search', (req, res)=> {
    const body = req.body
    const location = body.txtKeyword
    axios.get(`${SearchURL}${location}`)
    .then(
        (response) => {
            console.log(response.data)
            res.render('home', {
                res_data : response.data,
                title :'Home'
            })
        }
    )
    .catch(
        (err) => console.log(err)
    )

})

app.get('/detail/:id', (req, res) => {
    const id = req.params.id
    axios.get(`${LocationURL}${id}`)
    .then(
        (response) => {
            res.render('detail', {
                res_data : response.data,
                title :'Detail'
            })
        }
    ).catch(
        (err) => console.log(err)
    )
})
app.listen(3000, () => {
    console.log('listening on port 3000')
  })





