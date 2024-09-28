import { configDotenv } from 'dotenv'
import express from 'express'
import { createProxyMiddleware } from 'http-proxy-middleware'
import { HttpsProxyAgent } from 'https-proxy-agent'

configDotenv()

const app = express()

/** @type import('http-proxy-middleware/dist/types').Options */
const proxyOptions = {
  target: 'https://api.openai.com',
  changeOrigin: true,
}

// if server deployed on unsupported region, need additional http proxy config
if (process.env.HTTP_PROXY) {
  proxyOptions.agent = new HttpsProxyAgent(process.env.HTTP_PROXY)
}

const proxy = createProxyMiddleware(proxyOptions)

app.use('/', proxy)

const port = process.env.PORT || 80
console.log('Running port:', port)
app.listen(port)
