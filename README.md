# mqtt-linda-client

## About
this is a client library for [mqtt-linda](https://github.com/saji-ryu/mqtt-linda) server.

## How to use
### 
Before using mqtt-linda-client you should install and build [mqtt-linda](https://github.com/saji-ryu/mqtt-linda) server.

### Download
`$ git clone https://github.com/saji-ryu/mqtt-linda-client`

### install and build
    $ cd mqtt-linda-client/modules/mqtt_linda_browser (or /mqtt_linda_node)
    $ npm run build
    
### import
* Browser
    * import outputed file (mqtt-linda-client/modules/mqtt_linda_browser/dist/main.js) in HTML file
    * `<script src="main.js"></script>`
* Node
    * import outputed file (mqtt-linda-client/modules/mqtt_linda_node/dist/main.js) in js file
    * `let mqttLindaClient = require(/mqtt-linda-client/modules/mqtt_linda_ndde/dist/main.js)`
    * `import mqttLindaClient from '/mqtt-linda-client/modules/mqtt_linda_ndde/dist/main.js'`(ES6)
### Use
#### setup
    const mqttLinda = new mqttLindaClient();
    
#### settings
Browser(default)

    const settings = {
        host : 'localhost'  //set mqtt-linda server's host name
        port : 3000,    //set mqtt-linda server's http-portnumber
        clientId: clid,    //set ClientId. It must be unique.
        tupleSpace: "tupleSpace"    //set tuplespace name
    }
Node(default)

    const settings = {
        host : 'localhost'  //set mqtt-linda server's host name
        port : 1883,    //set mqtt-linda server's mqtt-portnumber
        clientId: clid,    //set ClientId. It must be unique.
        tupleSpace: "tupleSpace"    //set tuplespace name
    }

#### watch
    let watchTuple = {test:test,hoge:fuga}  //set watching tuple
    mqttLinda.connectsettings).then(()=>{
        linda.on('connect', () => {
            linda.watch(watchTuple, (topic, data) => {
                console.log(data);
            });
        });
    });

#### write
    let writeTuple = {test:test,hoge:fuga}  //set tuple which you want to write
    mqttLinda.connectsettings).then(()=>{
        linda.on('connect', () => {
            linda.write(watchTuple);
        });
    });
    
## Licence
MIT