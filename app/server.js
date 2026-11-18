const http = require("http");
const fs = require("fs");
const path = require("path");

const PORT = 3001;

const server = http.createServer((req, res) => {
    if (req.url === "/health") {
        res.writeHead(200, { "Content-Type": "application/json" });
        return res.end(JSON.stringify({ status: "healthy" }));
    }

    if (req.url === "/api/feature") {
        const enabled = process.env.FEATURE_BANNER === "true";

        res.writeHead(200, { "Content-Type": "application/json" });
        return res.end(JSON.stringify({
            feature: "welcomeBanner",
            enabled: enabled
        }));
    }

    if (req.url === "/" || req.url === "/index.html") {
        const filePath = path.join(__dirname, "index.html");

        res.writeHead(200, { "Content-Type": "text/html" });
        return fs.createReadStream(filePath).pipe(res);
    }

    res.writeHead(404);
    res.end("Not Found");
});

server.listen(PORT, "127.0.0.1", () => {
    console.log(`Lab 3 application running at http://localhost:${PORT}`);
});
