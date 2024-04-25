// OS 

// const os = require('os')
// console.log(JSON.stringify(os.cpus()))
// console.log(os.cpus()[0].model)

// PUNYCODE

//const punycode = require('punycode');
//punycode.decode('maana-pta'); // 'mañana'
//punycode.decode('--dqo34k'); // '☃-⌘'

//HTTPS

//let https;
//try {
//  https = require('node:https');
//} catch (err) {
//  console.log('https support is disabled!');
//}

//EVENTS

//const myEmitter = new MyEmitter();
//myEmitter.on('event', () => {
//console.log('an event occurred!');
//});
//myEmitter.emit('event');

//DOMAIN

//const d = require('node:domain').create();
//d.on('error', (er) => {
//  console.log(`error, but oh well ${er.message}`);
//});
//d.run(() => {
//  require('node:http').createServer((req, res) => {
//    handleRequest(req, res);
//  }).listen(PORT);
//});

//V8

//console.log(v8.cachedDataVersionTag()); // 3947234607
//setFlagsFromString('--allow_natives_syntax');
//console.log(v8.cachedDataVersionTag()); // 183726201