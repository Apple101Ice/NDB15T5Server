const express = require('express')
const app = express()
const port = process.env.PORT || 2410
const cors = require('cors')

app.use(cors())
app.use(express.json())

app.listen(port, () => console.log(`Node app listening on port ${port}!`))

const { products } = require('./MyStore-data')

const orders = []

const users = [
    { id: 1, email: 'abc@email.com', password: 'abc1234', name: 'abc' }
]

// users
app.post('/login', function (req, res) {
    const body = req.body
    const user1 = users.find(u1 => u1.email === body.email && u1.password === body.password)
    if (user1)
        res.send(user1)
    else
        res.status(404).send("Invalid email or password")
})

app.post('/register', function (req, res) {
    const body = req.body
    if (body.email && body.password && body.name) {
        const lastid = users.map(u1 => u1.id).reduce((acc, curr) => curr)
        const newuser = { id: lastid + 1, ...body }
        users.push(newuser)
        res.send("New User Registered")
    }
    else
        res.status(400).send('Check fields')
})


// products
app.get('/products/:category?', (req, res) => {
    const { category } = req.params

    if (category) {
        const filteredProducts = products.filter(p => p.category === category)
        res.json(filteredProducts);
    } else {
        res.json(products)
    }
})


app.get('/product/:id', (req, res) => {
    const { id } = req.params
    const product = products.find(p => p.id === parseInt(id))

    if (product) {
        res.json(product)
    } else {
        res.status(404).json({ message: 'Product not found' })
    }
})

app.get('/orders', function (req, res) {
    res.send(orders)
})

app.post('/products', function (req, res) {
    const body = req.body
    const lastid = products.reduce((acc, curr) => curr.id > acc ? curr.id : acc, 0)
    const newproduct = { id: lastid + 1, ...body }
    products.push(newproduct)
    res.send(newproduct)
})

app.post('/orders', function (req, res) {
    const body = req.body
    const lastid = products.reduce((acc, curr) => curr.id > acc ? curr.id : acc, 0)
    const neworder = { id: lastid + 1, ...body }
    orders.push(neworder)
    res.send(neworder)
})

app.put('/products/:id', function (req, res) {
    const pid = req.params.id
    const body = req.body
    const prodid = products.findIndex(p1 => p1.id === +pid)
    if (prodid >= 0) {
        const updatedprod = { ...products[prodid], ...body }
        products[prodid] = updatedprod
        res.send(updatedprod)
    }
    else
        res.status(404).send(`Product with id "${pid}" not found`)
})

app.delete('/products/:id', function (req, res) {
    const pid = req.params.id
    const prodid = products.findIndex(p1 => p1.id === +pid)
    if (prodid >= 0) {
        products.splice(prodid, 1)
        res.send(`Product with id "${pid}" deleted`)
    }
    else
        res.status(404).send(`Product with id "${pid}" not found`)
})


