/*
 * Title: Uptime Monitoring Application
 * Description: A RESTFul API to monitor up or down time of user defined links
 * Author: Sumit Saha ( Learn with Sumit )
 * Date: 11/15/2020
 *
 */

// depandecies
const http = require("http");
// app objects or module scafolding
const app = {};

//configerationa
app.config = {
  port: 3000,
};

//create server
app.createServer = () => {
  const server = http.createServer(handleRequestRes);
  server.listen(app.config.port, () => {
    console.log(`listening to ${app.config.port}`);
  });
};
//handle request and handle response
const handleRequestRes = (req, res) => {
  //response handlers
  res.end("hello world");
};
