/* becodeorg/mwenbwa
 *
 * /src/server/index.js - Server entry point
 *
 * coded by leny@BeCode
 * started at 18/05/2020
 */
const express = require("express");

const path = require("path");

const {
  APP_PORT
} = process.env;
const app = express();
app.use(express.static(path.resolve(__dirname, "../../bin/client")));
app.get("/hello", (req, res) => {
  console.log(`âšī¸  (${req.method.toUpperCase()}) ${req.url}`);
  res.send("Hello, World!");
});
app.listen(APP_PORT, () => console.log(`đ Server is listening on port ${APP_PORT}.`));
//# sourceMappingURL=index.js.map