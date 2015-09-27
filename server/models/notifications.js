/**
 * 
 *  Model: Notifications
 *      
 *  @author         Łukasz Brzozowski
 *  @description    Model of Notifications
 *  
 */

// Dependencies
var restful = require('node-restful');
var autoIncrement = require('mongoose-auto-increment');
var mongoose = restful.mongoose;

// Model schema
var schema = new mongoose.Schema({
    message: { type: String, required: true },
    recipient_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Users' },
    status_id: { type: mongoose.Schema.Types.ObjectId, ref: 'NotificationStatus' },
    //priority: ?,
    //send_time: ?,
    insert_time: {type: Date, default: Date.now}
});

autoIncrement.initialize(mongoose);
schema.plugin(autoIncrement.plugin, 'Notifications');

// Return model
module.exports = restful.model('Notifications', schema);