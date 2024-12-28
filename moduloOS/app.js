const os = require('os');

console.log(os.type()); // Returns the operating system name
console.log(os.homedir()); // Returns the home directory of the current user
console.log(os.uptime()); // Returns the system uptime in seconds
console.log(os.userInfo()); // Returns information about the current user