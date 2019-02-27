exports.handler = function(event, context, callback) {
  if (event.httpMethod === 'GET' && event.path === '/coiso') {
    // const requestBody = JSON.parse(event.body);
    // const newValue = updateDatabase(requestBody);
    callback(null, {
      statusCode: 200,
      body: 'he he he'
    })
  } else {
    callback(null, {
      statusCode: 400,
      body: 'oh pra mim aqui'
    })
  }
}
