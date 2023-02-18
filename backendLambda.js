const AWS = require("aws-sdk");

const dynamo = new AWS.DynamoDB.DocumentClient();

exports.handler = async (event) => {
  let body;
  let statusCode;
  const headers = {
    "Content-Type": "application/json",
  };

  try {
    // Check requests
    if (event.httpMethod === "GET" && event.resource === "/kaffe") {
      body = await dynamo.scan({ TableName: "kaffeTable" }).promise();

      statusCode = 200;
    }

    if (event.httpMethod === "POST" && event.resource === "/kaffe") {
      const requestJSON = JSON.parse(event.body);

      await dynamo
        .put({
          TableName: "kaffeTable",
          Item: {
            id: requestJSON.id,
            coffeeName: requestJSON.coffeeName,
            packageSize: requestJSON.packageSize,
            packagePrice: requestJSON.packagePrice,
            roast: requestJSON.roast,
          },
        })
        .promise();

      statusCode = 201;
      body = `Posted content: ${requestJSON.coffeeName}`;
    }

    if (event.httpMethod === "POST" && event.resource === "/kaffe/search") {
      const searchString = event.body;

      const results = await dynamo.scan({ TableName: "kaffeTable" }).promise();

      const resultsArray = results["Items"];

      body = resultsArray.filter((item) =>
        item.coffeeName.toLowerCase().includes(searchString.toLowerCase())
      );

      statusCode = 200;
    }
  } catch (error) {
    body = error;
    statusCode = 400;
  }

  // Formulate response
  const response = {
    statusCode: statusCode,
    headers,
    body: JSON.stringify(body),
  };

  return response;
};
