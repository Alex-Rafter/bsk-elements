var liveServer = require("live-server");

var params = {
	port: 8181, // Set the server port. Defaults to 8080.
	host: "0.0.0.0", // Set the address to bind to. Defaults to 0.0.0.0 or process.env.IP.
	file: "index.html", // When set, serve this file (server root relative) for every 404 (useful for single-page applications)
	wait: 0, // Waits for all changes, before reloading. Defaults to 0 sec.
};
liveServer.start(params);