/**
 * 
 *  Model: Notification Channel
 *      
 *  @author         Łukasz Brzozowski
 *  @description    Model of Notification Channel
 *  
 */

// Dependencies
var restful = require('node-restful');
var autoIncrement = require('mongoose-auto-increment');
var mongoose = restful.mongoose;

// Model schema
var schema = new mongoose.Schema({
    name: { type: String, required: 'Nazwa kanału jest wymagana!' },
    param: [],
    description: String,
    weekDays: [Number],
    hours: [Number],
    insert_time: {type: Date, default: Date.now}
});

autoIncrement.initialize(mongoose);
schema.plugin(autoIncrement.plugin, 'NotificationChannel');

// Return model
module.exports = restful.model('NotificationChannel', schema);