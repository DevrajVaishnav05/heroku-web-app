const express = require("express");
const path = require("path");
const app = express();
const port = process.env.path ||  3001;

// Paths
const staticPath = path.join(__dirname, "../public");
const temPath = path.join(__dirname, "../tem");

// Middleware for static files
app.use(express.static(staticPath));

// Set EJS as the view engine
app.set("view engine", "ejs");
app.set("views", temPath);

// Routes
app.get("/", (req, res) => {
    res.render("index", { name: "devraj" });
});
app.get("/about", (req, res) => {
    res.render("about");
});
app.get("/contact", (req, res) => {
    res.render("contact");
});
app.get("*", (req, res) => {
    res.render("error");
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
