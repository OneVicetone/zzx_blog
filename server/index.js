const express = require('express')
const app = express()
app.use(require('cors')())
app.use(express.json())

require('./routes/web/index')(app)
require('./routes/admin/index')(app)
require('./plugins/db')(app)
app.use('/uploads',express.static(__dirname + '/uploads'))

app.listen(4000,()=>{
    console.log(`server is runing on localhost:4000`)
})