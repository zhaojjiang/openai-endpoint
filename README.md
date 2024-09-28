# OpenAI Endpoint

Runnging as an openai endpoint.

This app can be used as an endpoint.
- Supported region's server or just serverless (such as, Aliyun Function Compute)
- Unsupported region with additional proxy config

## Run

```shell
npm install
npm run start
```

## Config

- `PORT` which port this app to listen
- `HTTP_PROXY` use additional http proxy, needed when app deployed on unsupported region
