const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// установка схемы
const userScheme = new Schema({
  ID: Number,
  FullName: String,
  Name: String,
  LastName: String,
  ImageURL: String,
  Email: String,
  IdToken: String,
  PinCode: Number,
  PinCodeQuestions: String,
  Country: String,
  City: String,
  Hobby: String,
  BirthDayData: Date
});
mongoose.connect("mongodb://localhost:27017/sansetik", { useUnifiedTopology: true, useNewUrlParser: true })


const User = mongoose.model("users", userScheme);
module.exports.SaveUser = function (dataObject){
  const user = new User(dataObject)
  user.save(function(err){
    // отключение от базы данных

    if(err) return console.log(err);
    console.log("Сохранен объект", user);
  })
}
