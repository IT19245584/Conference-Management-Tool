const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const example_schema = new Schema({

        nic:{
            type :String,
            require:true,
            unique:true
        },
        name:{
            type :String,
            require:true,
        },
        timeStamp:{
            type :String,
            require:true
        }
});

const example_schemaExport = mongoose.model("example_schema",example_schema);
module.exports = example_schemaExport;