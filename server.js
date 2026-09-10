const WebSocket = require('ws');
const server = new WebSocket.Server({ port: process.env.PORT || 8080 });

let robloxSocket = null;

server.on('connection', (ws) => {
    ws.on('message', (message) => {
        const msg = message.toString();

        if (msg === "CONNECT_ROBLOX") {
            robloxSocket = ws;
            console.log("Delta Oyuna Baglandi!");
        } else if (robloxSocket && robloxSocket.readyState === WebSocket.OPEN) {
            robloxSocket.send(msg);
            console.log("Script Oyuna Gonderildi!");
        }
    });
});
