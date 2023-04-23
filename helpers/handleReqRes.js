// title: handle request Response
// description : handle request Response
// Author : Sumon chandra paul
// Date: 23/04/2023
//depandencies
const url = require("url");
const { StringDecoder } = require("string_decoder");
//Module Scafolding
const handler = {};

handler.handleReqRes = (req, res) => {
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
  //   console.log(parsedUrl);
  //headers //header is a meta data of url
  const headersObject = req.headers; //header is situated in req.headers it's an object
  //   console.log(headersObject);

  //realdata received from server using string decoder
  const decoder = new StringDecoder("utf8");
  let realData = "";
  req.on("data", (buffer) => {
    realData += decoder.write(buffer);
  });
  req.on("end", () => {
    realData += decoder.end();
    // console.log(realData);
    res.end("something is better than nothing. Yes");
  });
  //response handlers
};
module.exports = handler;
