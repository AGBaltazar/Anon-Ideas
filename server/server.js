const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config({ path: "./config.env"});
const port = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());
app.use(require("./routes/record"));

//driver connection
const dbo = require("./db/conn");

//This function will connect to the database as soon as the server starts
app.listen(port, () => {
    dbo.connectToServer(function (err){
        if (err) console.error(err);
    });
    console.log(`Server is running on port: ${port}`);
});