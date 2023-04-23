// title: Not found page
// description : Not found page
// Author: sumon chandra paul
//Date: 23/04/2023

//Module scafolding

const handler = {};
handler.NotFound = (requestProperties, callback) => {
  callback(404, {
    message: "Your requested url is not found",
  });
};

module.exports = handler;
