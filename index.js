const express = require("express");
const { ExpressPeerServer } = require("peer");
const app = express();

const server = app.listen(9999);

const peerServer = ExpressPeerServer(server, {
  path: "/test",
});

peerServer.on("connection", (client) => {
  console.log(client);
});

peerServer.on("disconnect", (client) => {
  console.log(client);
});

app.use("/peerjs", peerServer);
