const express = require("express");
const { engine } = require("express-handlebars");
const path = require("path");



const app = express();

//variables
app.set("PORT", process.env.PORT || 3000);
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, 'public')));

//view engine
app.engine(".hbs", engine({
    defaultLayout: "main",
    partialsDir: path.join(app.get("views"), "partials"),
    layoutsDir: path.join(app.get("views"), "layout"),
    extname : ".hbs"
}));
app.set("view engine", ".hbs");


//middlewares


//routes
app.get("/", (req, res) => {
    res.render('home');
});

app.get("/oportunidades", (req, res) => {
    res.render('content/oportunidades.hbs')
}); 


//app
app.listen(app.get("PORT"), () => {
    console.log(`App listening on port ${app.get("PORT")}`)
})