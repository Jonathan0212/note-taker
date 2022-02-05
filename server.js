const express = require('express');
const apiRoutes = require('./routes/apiRoutes.js');
const htmlRoutes = require('./routes/htmlRoutes');


const PORT = process.env.PORT || 3001;
const app = express()

app.use(express.urlencoded({ extended: true}))
app.use(express.json())
app.use(express.static('public'))

// USE apiRoutes
app.use('/api', apiRoutes)
app.use('/', htmlRoutes)

app.listen(PORT, () => {
    console.log(`listening on PORT: ${PORT}`);
})
