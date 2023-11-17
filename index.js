const express = require('express')
const app = express()
const port = 3000

const schoolRoute = require('./routes/school')
const courseRoute = require('./routes/courses')
const studentRoute = require('./routes/student')

app.use("/school". schoolRoute)
app.use("/course". courseRoute)
app.use("/student". studentRoute)

app.listen(port,() => {
    console.log("Server hosted on port " + port)
})