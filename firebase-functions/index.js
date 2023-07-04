// Import all your cloud functions
const emailTrigger = require('./emailTrigger');

// Export all your cloud functions
exports.sendOrderEmail = emailTrigger.sendOrderEmail;
