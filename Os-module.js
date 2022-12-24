const Os=require('os');

// user information

const user=Os.userInfo();
console.log("User informatio is ", user);

// System up time

const sys = Os.uptime();
console.log("System up time is ", sys , "second");

// Method for current os

const currentOs={
    name: Os.type(),
    release: Os.release(),
    totalMem : Os.totalmem(),
    freeMem : Os.freemem()
}
console.log("System Current Os details as follows \n", currentOs);