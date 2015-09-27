/**
 * 
 *  Model: Notification Status
 *      
 *  @author         Łukasz Brzozowski
 *  @description    Model of Notification Status
 *  
 */

// Dependencies
var restful = require('node-restful');
var autoIncrement = require('mongoose-auto-increment');
var mongoose = restful.mongoose;

// Model schema
var schema = new mongoose.Schema({
    name: { type: String, required: true },
});

autoIncrement.initialize(mongoose);
schema.plugin(autoIncrement.plugin, 'NotificationStatus');

// Return model
module.exports = restful.model('NotificationStatus', schema);