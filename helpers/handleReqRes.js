// title: handle request Response
// description : handle request Response
// Author : Sumon chandra paul
// Date: 23/04/2023
//depandencies

const url = require("url");
const { StringDecoder } = require("string_decoder");
const routes = require("../routes");
const { NotFound } = require("../handlers/routesHandler/NotFoundPage");
//Module Scafolding
const handler = {};

handler.handleReqRes = (req, res) => {
  //request handle response

  //get the url and parse it

  const parsedUrl = url.parse(req.url, false);
  const path = parsedUrl.pathname;
  const trimedPath = path.replace(/^\/+|\/+$/g, "");
  console.log(trimedPath);
  //method name
  const method = req.method.toLowerCase();
  // console.log(method);
  // query string
  const queryStringObject = parsedUrl.query;
  //   console.log(parsedUrl);
  //headers //header is a meta data of url
  const headersObject = req.headers; //header is situated in req.headers it's

  //request properties
  const requestProperties = {
    parsedUrl,
    path,
    trimedPath,
    method,
    queryStringObject,
    headersObject,
  };

  //   console.log(headersObject);

  //realdata received from server using string decoder
  const decoder = new StringDecoder("utf8");
  let realData = "";

  const chosenHandler = routes[trimedPath] ? routes[trimedPath] : NotFound;

  chosenHandler(requestProperties, (statusCode, payLoad) => {
    statusCode = typeof statusCode === "number" ? statusCode : 500;
    payLoad = typeof payLoad === "object" ? payLoad : {};

    const payloadString = JSON.stringify(payLoad);
    //return the final response
    res.writeHead(statusCode);
    res.end(payloadString);
  });
  req.on("data", (buffer) => {
    realData += decoder.write(buffer);
  });
  req.on("end", () => {
    realData += decoder.end();
    // console.log(realData);
    res.end("Home page. Yes");
  });
  //response handlers
};

module.exports = handler;
