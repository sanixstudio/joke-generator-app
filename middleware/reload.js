const liveReload = require('livereload');
// const connectLiveReload = require("connect-livereload");
const liveReloadServer = liveReload.createServer();

liveReloadServer.watch(__dirname + "/views/")

liveReloadServer.server.once("connection", () => (
    setTimeout(() => liveReloadServer.refresh("/"), 100)
))

module.exports = connectLiveReload;