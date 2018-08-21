function printHello() {
    var a = "Printing data ...";
    console.time(a);
    console.log("Hello world");
    console.error("Repeated");
    console.timeEnd(a);
}
console.log(__filename);
console.log(__dirname);
console.log(process.execPath)
console.log(process.arch + " " + process.platform);
//calls function after 2 secs only once
setTimeout(printHello, 2000);
//calls functions every 2 secs
//setInterval(printHello, 2000);
//No. of seconds node is running
//process.abort();
var cwdir = process.cwd();
console.log(cwdir)
var secs = process.uptime();
console.log(secs);
//memory usage by node
var mem = process.memoryUsage();
console.log(mem);

process.on("exit", function() {
    console.log("Exiting...");
});