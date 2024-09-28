import express from 'express'
import { createProxyMiddleware } from 'http-proxy-middleware'
import { configDotenv } from 'dotenv'

configDotenv()

const app = express()

const proxy = createProxyMiddleware({
  target: 'https://api.openai.com',
  changeOrigin: true,
})

app.use('/', proxy)

console.log('Running port:', process.env.PORT)

app.listen(process.env.PORT || 80)
