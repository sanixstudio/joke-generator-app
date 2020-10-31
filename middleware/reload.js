const livereload = require('livereload');
const connectLiveReload = require("connect-livereload");
const liveReloadServer = livereload.createServer();

liveReloadServer.watch(__dirname + "/views/")

liveReloadServer.server.once("connection", () => (
    setTimeout(() => liveReloadServer.refresh("/"), 100)
))

module.exports = connectLiveReload;
