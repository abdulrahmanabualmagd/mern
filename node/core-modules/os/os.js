const os = require('os');

// os.arch()
const architecture = os.arch();
console.log('Architecture:', architecture);

// os.constants
console.log('Operating system constants:', os.constants);

// os.cpus()
const cpus = os.cpus();
console.log('CPUs:', cpus);

// os.endianness()
const endianness = os.endianness();
console.log('Endianness:', endianness);

// os.freemem()
const freeMemory = os.freemem();
console.log('Free memory (bytes):', freeMemory);

// os.homedir()
const homeDirectory = os.homedir();
console.log('Home directory:', homeDirectory);

// os.hostname()
const hostname = os.hostname();
console.log('Hostname:', hostname);

// os.loadavg()
const loadAverage = os.loadavg();
console.log('Load average (1, 5, 15 minutes):', loadAverage);

// os.networkInterfaces()
const networkInterfaces = os.networkInterfaces();
console.log('Network interfaces:', networkInterfaces);

// os.platform()
const platform = os.platform();
console.log('Platform:', platform);

// os.release()
const release = os.release();
console.log('Release:', release);

// os.tmpdir()
const tempDirectory = os.tmpdir();
console.log('Temporary directory:', tempDirectory);

// os.totalmem()
const totalMemory = os.totalmem();
console.log('Total memory (bytes):', totalMemory);

// os.type()
const osType = os.type();
console.log('Operating system type:', osType);

// os.uptime()
const uptime = os.uptime();
console.log('Uptime (seconds):', uptime);

// os.userInfo([options])
const userInfo = os.userInfo();
console.log('User information:', userInfo);
