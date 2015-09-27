/**
 * 
 *  Model: Event Types
 *      
 *  @author         Paweł Rostek
 *  @description    Model of Event Types
 *  
 */

// Dependencies
var restful = require('node-restful');
var autoIncrement = require('mongoose-auto-increment');
var mongoose = restful.mongoose;

// Model schema
var eventTypesSchema = new mongoose.Schema({
    name: String,
    description: String,
    insert_time: {type: Date, default: Date.now}
});

autoIncrement.initialize(mongoose);
eventTypesSchema.plugin(autoIncrement.plugin, 'EventTypes');

// Return model
module.exports = restful.model('EventTypes', eventTypesSchema);