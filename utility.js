var os = require("os");
var tempdir = os.tmpdir();
console.log(tempdir);
console.log("Host: " + os.hostname());
console.log("Type: " + os.type());
console.log("Arch: " + os.arch());
console.log("Uptime in minutes: " + os.uptime() / 60)
console.log(os.networkInterfaces());