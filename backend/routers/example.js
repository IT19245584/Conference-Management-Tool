const router = require("express").Router();
const timestamp = require('time-stamp');
const express = require("express");
let example = require("../model/example");
const app = express();

router.route('/add').post((req,res) => {
        const timeStamp = timestamp('YYYY/MM/DD HH:mm:ss');
        const nic = req.body.nic;
        const name = req.body.name;
    
    const newexample = new example({
           nic,
           name,
        })

    newexample.save()
        .then(() =>  res.json("Example Saved"))
        .catch(err => res.status(400).json('Error: '+err));
    });

module.exports = router;