//Require Mongoose
var mongoose = require('mongoose');

//Define a schema
var Schema = mongoose.Schema;

var QuotationSchema = new Schema({
  code: { type: String, default: 'No Code Provided' },
  name: { type: String, default: 'No Name Set' },
  price: { type: Number, default: 0 },
  qty: { type: Number, default: 0 },
});

//Export function to create "CustomerSchema" model class
module.exports = mongoose.model('Quotation', QuotationSchema);
