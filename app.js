const express = require("express");
const app = express();


app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));


app.get('/', (req, res) => {
  res.render('ryancf.ejs');
 });
 
 app.get('/ryancf', (req, res) => {
   coffee.find({}, (error, allCoffee) => {
     res.render("index.ejs", {
       coffee: allCoffee,
     });
   });
 });
 
 // routes
 // I
 
 app.get('/ryancf/coffee', (req, res) => {
   coffee.deleteMany({}, (error, allCoffee) => { });
   coffee.create(coffeeInfo, (error, data) => {
     res.redirect("/ryancf");
   });
 });
 
 // N
 
 app.get("/ryancf/new", (req, res) => {
   res.render("new.ejs");
 });
 
 // D
 
 app.delete("/ryancf/:id", (req, res) => {
   coffee.findByIdAndDelete(req.params.id, (error, deletedcoffee) => {
     res.redirect('/ryancf')
   });
 });
 
 // U
 
 app.put("/ryancf/:id", (req, res) => {
   coffee.findByIdAndUpdate(
     req.params.id,
     req.body,
     { new: true },
     (error, updatecoffee) => {
       res.redirect('/ryancf');
     }
   );
 });
 
 // C
 
 app.post("/ryancf", (req, res) => {
   coffee.create(req.body, (error, createdcoffee) => {
     res.redirect("/ryancf");
   });
 });

module.exports = app;