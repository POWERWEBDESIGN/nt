/**
 * 
 *  Model: Users Groups
 *      
 *  @author         Łukasz Brzozowski	
 *  @description    Model of Users Groups
 *  
 */

// Dependencies
var restful = require('node-restful');
var autoIncrement = require('mongoose-auto-increment');
var mongoose = restful.mongoose;

// Model schema
var schema = new mongoose.Schema({
    name: String,
    description: String,
    insert_time: {type: Date, default: Date.now}
});

autoIncrement.initialize(mongoose);
schema.plugin(autoIncrement.plugin, 'UsersGroups');

// Return model
module.exports = restful.model('UsersGroups', schema);