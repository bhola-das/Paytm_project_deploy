require('dotenv').config();
const express = require('express');
const cors = require("cors");
const rootRouter = require("./routes/index");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

const _dirname = path.resolve();

// app.get("/", (req, res) => {
//     res.send("Backend is running 🚀");
// });

app.use("/api/v1", rootRouter);

app.use(express.static(path.join(_dirname, "/frontend/dist")));
app.get('*', (req, res) => {
    res.sendFile(path.resolve(_dirname, "frontend", "dist", "index.html"));
})

app.listen(PORT, () => { console.log("connection successful backend is runing on port 3000") });