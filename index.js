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
  console.log(trimedPath);
  //response handlers
  res.end("something is better than nothing");
};

// start the server
app.createServer();
