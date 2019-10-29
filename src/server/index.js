import express from 'express'
import path from 'path'
import { lunchOptions } from './store.js'

const app = express()

// API
app.get('/api/lunches', (req, res) => {
  res.send(lunchOptions)
})

app.get('/api/lunches/:lunchId', (req, res) => {
  const lunch = lunchOptions.find(e => e.id == req.params.lunchId)
  if (lunch) {
    res.send(lunch)
  } else {
    res.status(404).send()
  }
})

app.post('/api/lunches/actions/pick', (req, res) => {
  const selectedLunch = lunchOptions[Math.floor(Math.random() * lunchOptions.length)]
  res.send(selectedLunch)
})

// Serve client out of the dist folder
app.set('client', path.resolve('.', 'dist', 'client'))
app.use(express.static(app.get('client')))

const port = process.env.PORT || 3000
app.listen(port, () => {
  console.log(`Listening on port ${port}...`)
})
