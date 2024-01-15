//* Import all cloud functions
const emailTrigger = require('./emailTrigger');

//* Export all cloud functions
exports.sendOrderEmail = emailTrigger.sendOrderEmail;
