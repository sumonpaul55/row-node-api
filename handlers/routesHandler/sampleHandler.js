// title: sample handleReqRes
// description : sample handleReqRes
// Author: sumon chandra paul
//Date: 23/04/2023
//Module scafolding

const handler = {};
handler.samplehandler = (requestProperties, callback) => {
  // console.log(requestProperties);
  callback(200, {
    message: "this is sample url",
  });
};

module.exports = handler;
