let tuple = {type: "test", name: "hoge", value: 20, where: "delta", cmd: "on",who:"saji"};

let watchTuple = {type: "test", who:"saji",value:30};
let linda = new mqttLinda();

let settings = {
    host:'localhost',
    port:3000,
    clientId:"brows",
    tupleSpace:"masuilab"
};

//標準的記法
linda.connect(settings).then(()=>{
    linda.on('connect',()=>{
        linda.watch(watchTuple, (topic, data) => {
            console.log("get data :" + JSON.stringify(data));
            //linda.close();
        });
        linda.write(tuple, (err, topic, tuple) => {
            console.log("write topic:" + topic + " tuple:" + JSON.stringify(tuple));
        });
    })
});