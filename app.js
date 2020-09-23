const { json } = require("express");
const express = require("express");
const db = require("./data/db-config");

const app = express();

app.use(express.json());

app.get("/api/cars", (req, res) => {
    db("cars")
    .then(cars => {
        res.status(200).json(cars);
    })
    .catch(err => {
        console.log("cars get error: ", err);
        res.status(500).json({
            message: "error retrieving cars list"
        });
    });
});

app.get("/api/cars/:id", (req, res) => {
    const {id} = req.params;
    
    db("cars").where({id})
    .then(car => {
        if(car){
            res.status(200).json(car)
        }
        else{
            res.status(404).json({
                message: "car not found"
            });
        }
    })
    .catch(err => {
        console.log("car get error: ", err);
        res.status(500).json({
            message: "error retrieving car"
        });
    });
});

app.post("/api/cars", (req, res) => {
    db("cars").insert(req.body)
    .then(car => {
        res.status(201).json(car);
    })
    .catch(err => {
        console.log("car post error: ", err);
        res.status(500).json({
            message: "error creating car listing"
        });
    });
});

module.exports = app;