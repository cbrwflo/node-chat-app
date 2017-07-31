var moment = require('moment');

var generateMessage = (from, text) => {
  return {
    from,
    text,
    createdAt: new moment().valueOf()
  };
};

var generateLocationMessage = (from, latitude, longitude) => {
  var url = `https://www.google.com/maps?q=${latitude},${longitude}`;
  return {
    from,
    url,
    createdAt: new Date().getTime()
  };
};

module.exports = {generateMessage, generateLocationMessage};
