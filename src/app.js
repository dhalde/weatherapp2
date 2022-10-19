const express = require('express');
const app = express();
const path = require("path");
const hbs = require("hbs");
const port = 3000;

//Public static path
const static_path = path.join(__dirname, "../public");
const view_path = path.join(__dirname, "../templates/views");
const partial_path = path.join(__dirname, "../templates/partials");

app.use(express.static(static_path));
app.set("view engine", "hbs");

app.set("views", view_path);
hbs.registerPartials(partial_path);

//routing
app.get("/", (req, res) => {
    res.render("index");
});
app.get("/about", (req, res) => {
    res.render("about");
});
app.get("/weather", (req, res) => {
    res.render("weather");
});
app.get("*", (req, res) => {
    res.render("err", {
        errmsg: "Go back to main Page",
    });
});

app.listen(port, () => {
    console.log(`Listening to port ${port} `);
})