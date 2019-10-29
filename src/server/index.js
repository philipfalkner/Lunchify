const express = require('express')
const path = require('path')

const app = express()

// Serve out of the dist folder
app.set('client', path.resolve('.', 'dist', 'client'))
app.use(express.static(app.get('client')))

const port = process.env.PORT || 3000
app.listen(port, () => {
  console.log(`Listening on port ${port}...`)
})
