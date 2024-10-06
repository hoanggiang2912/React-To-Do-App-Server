const jsonServer = require("json-server");
const fs = require("fs");
const path = require("path");

const server = jsonServer.create();

const db = JSON.parse(
  fs.readFileSync(path.join(__dirname, "db.json"), "utf-8")
);

const router = jsonServer.router(db);

const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
  console.log(`JSON Server is running on port ${PORT}`);
});
