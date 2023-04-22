/*
 * Title: Uptime Monitoring Application
 * Description: A RESTFul API to monitor up or down time of user defined links
 * Author: Sumit Saha ( Learn with Sumit )
 * Date: 11/15/2020
 *
 */

// depandecies
const http = require("http");
const url = require("url");
const { StringDecoder } = require("string_decoder");
// app objects or module scafolding
const app = {};

//configerationa
app.config = {
  port: 3000,
};

//create server
app.createServer = () => {
  const server = http.createServer(app.handleRequestRes);
  server.listen(app.config.port, () => {
    console.log(`listening to ${app.config.port}`);
  });
};
//handle request and handle response
app.handleRequestRes = (req, res) => {
  //request handle response
  //get the url and parse it

  const parsedUrl = url.parse(req.url, false);
  const path = parsedUrl.pathname;
  const trimedPath = path.replace(/^\/+|\/+$/g, "");
  // console.log(trimedPath);/
  //method name
  const method = req.method.toLowerCase();
  // console.log(method);
  // query string
  const queryStringObject = parsedUrl.query;
  console.log(parsedUrl);
  //headers //header is a meta data of url
  const headersObject = req.headers; //header is situated in req.headers it's an object
  console.log(headersObject);

  //realdata received from server using string decoder
  const decoder = new StringDecoder("utf8");
  let realData = "";
  req.on("data", (buffer) => {
    realData += decoder.write(buffer);
  });
  req.on("end", () => {
    realData += decoder.end();
    console.log(realData);
    res.end("something is better than nothing. Yes");
  });
  //response handlers
  //
};

// start the server
app.createServer();
