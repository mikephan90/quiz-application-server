const { model, Schema } = require("mongoose");

const questionsSchema = new Schema({
  category: String,
  text: String,
  answers: [String]
})

module.exports = model('Questions', questionsSchema);