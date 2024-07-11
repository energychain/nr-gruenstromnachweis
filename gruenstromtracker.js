module.exports = function(RED) {
    function GruenstromTracker(config) {
        const axios = require("axios");
        RED.nodes.createNode(this,config);
        var node = this;      
        node.on('input', async function(msg) {
            if((!isNaN(msg.payload))&&( Math.abs(msg.payload) == msg.payload)) {                
                let eventId = node.context().get("eventId");
                let prepareId = node.context().get("prepareId");
                if(config.prepareId !== prepareId) eventId=null;
                if((typeof eventId == 'undefined') || (eventId == null)) {                    
                    const prepareStatus = await axios.get("https://api.corrently.io/v2.0/coriwallet/prepareTracker?prepareId="+config.prepareId+"&reading="+msg.payload);                    
                    if(typeof prepareStatus.data.eventId !== 'undefined') {
                        node.context().set("eventId",prepareStatus.data.eventId);
                        node.context().set("prepareId",config.prepareId);
                        eventId = prepareStatus.data.eventId;
                    } else {
                        node.status({fill:"red",shape:"ring",text:"Unable to continue (Tracker not initialized)",reading:4711});
                    }
                }                
                if((typeof eventId !== 'undefined') && (eventId !== null)) {
                    node.status({fill:"yellow",shape:"ring",text:""});
                    msg.payload = Math.floor(msg.payload);
                    try {
                        const updateReading = await axios.get("https://api.corrently.io/v2.0/coriwallet/reading?eventId="+eventId+"&reading="+msg.payload);
                        msg.payload = updateReading.data;
                        node.send(msg);
                        node.status({fill:"green",shape:"ring",text:""})
                    } catch(e) {
                        node.status({fill:"red",shape:"ring",text:"Update reading failed with Status:"+e})
                    }
                }
                
            } else {
                node.status({fill:"red",shape:"ring",text:"Unable to process (payload not a positive integer)"})
            }
        });
    }
    RED.nodes.registerType("gruenstromtracker",GruenstromTracker);
}