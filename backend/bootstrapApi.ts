import express from "express";
import routes from "./controllers/index";
import cors from "cors";
import bodyParser from "body-parser";

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());
app.use("/v1", routes);
app.get("/", (req, res, next) => {
  res.send("Welcome to backend.");
});

app.listen(PORT, () => {
  console.log(`server listen on http://localhost:${PORT}`);
});
