/*
 * Title: Uptime Monitoring Application
 * Description: A RESTFul API to monitor up or down time of user defined links
 * Author: Sumit Saha ( Learn with Sumit )
 * Date: 11/15/2020
 *
 */

// depandecies
const http = require("http");
const { handleReqRes } = require("./helpers/handleReqRes");
// app objects or module scafolding
const app = {};
app.handleResReq = handleReqRes;

//configerationa
app.config = {
  port: 3000,
};

//create server
app.createServer = () => {
  const server = http.createServer(app.handleResReq);
  server.listen(app.config.port, () => {
    console.log(`listening to ${app.config.port}`);
  });
};
//handle request and handle response

// start the server
app.createServer();
