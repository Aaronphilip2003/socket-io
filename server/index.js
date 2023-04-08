const http = require("http").createServer();
const io = require("socket.io")(http, {
  cors: { origin: "*" },
});

io.on("connection", (socket) => {
  console.log("User connected");
  socket.on("message", (message) => {
    console.log(message);
    io.emit("message", `${socket.id.substr(0, 2)} : ${message}`);
  });
});

http.listen(8000, () => console.log("Listening on http://localhost:8000"));
