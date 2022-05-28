const express = require('express');
const app = express();
require('dotenv').config();
const mongoose = require('mongoose');
const coffee = require('./models/coffee.js')
const coffeeInfo = require('./models/coffeeInfo.js');
const methodOverride = require('method-override');

//  Database Connection
mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
// Database Connection Error/Success
// Define callback functions for various events
const db = mongoose.connection
db.on('error', (err) => console.log(err.message + ' is mongo not running?'));
db.on('connected', () => console.log('mongo connected'));
db.on('disconnected', () => console.log('mongo disconnected'));
// Middleware
// Body parser middleware: give us access to req.body
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));


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

app.get("/coffee/new", (req, res) => {
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

// E

app.get("/ryancf/:id/edit", (req, res) => {
    coffee.findById(req.params.id, (error, foundcoffee) => {
      res.render("edit.ejs", {
        coffee: foundcoffee,
      });
    });
  });

// show

app.get('/ryancf/:id', (req, res) => {
    coffee.findById(req.params.id, (err, foundcoffee) => {
      res.render('show.ejs', {
        coffee: foundcoffee
      });
    });
  });


app.put("/products/:id/buy"), (req, res) => {
    Product.Save(
      req.body.id,
      req.body,
    )
  };

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`The server is listening on port: ${PORT}`)
}); 