const apiGatewayFactory = require('aws-api-gateway-client').default

const apiGatewayClient = apiGatewayFactory.newClient({
  apiKey: 'YOUR_API_KEY',
  invokeUrl: 'YOUR_INVOKE_URL'
})

const params = {
  jobID: 1
}
const pathTemplate = '/jobs/{jobID}'

const method = 'GET'
const additionalParams = {}
const body = {}

apiGatewayClient.invokeApi(params, pathTemplate, method, additionalParams, body).then((result) => {
  console.log(result.data)
}).catch((err) => {
  console.log(err)
})
