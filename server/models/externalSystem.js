/**
 * 
 *  Model: External System
 *      
 *  @author         Łukasz Brzozowski
 *  @description    Model of External SYstem
 *  
 */

// Dependencies
var restful = require('node-restful');
var autoIncrement = require('mongoose-auto-increment');
var mongoose = restful.mongoose;

// Model schema
var schema = new mongoose.Schema({
    name: { type: String, required: true },
    description: String,
	channel_id: { type: Number, ref: 'NotificationChannel' },
    insert_time: {type: Date, default: Date.now}
});

autoIncrement.initialize(mongoose);
schema.plugin(autoIncrement.plugin, 'externalSystem');

// Return model
module.exports = restful.model('externalSystem', schema);