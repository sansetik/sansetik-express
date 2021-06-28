const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const axios = require('axios');

//The url we want is: 'www.random.org/integers/?num=1&min=1&max=10&col=1&base=10&format=plain&rnd=new'

// установка схемы
const userScheme = new Schema({
  ID: String,
  FullName: String,
  Name: String,
  LastName: String,
  ImageURL: String,
  Email: String,
  IdToken: String,
  PinCode: String,
  PinCodeQuestions: String,
  Country: String,
  City: String,
  Hobby: String,
  BirthDayData: Date
});
  mongoose.connect("mongodb://localhost:27017/sansetik", { useUnifiedTopology: true, useNewUrlParser: true })




const User = mongoose.model("users", userScheme);

async function getDataFromToken (token) {
  let options = {
    host: 'oauth2.googleapis.com',
    path: '/tokeninfo?id_token=' + token
  };
  try {
    const response = await axios.get("https://" + options.host + options.path)
    return response.data
  }
  catch (e) {
    return e
  }
}
async function getUser(IdToken) {
  const dataFromToken = await getDataFromToken(IdToken)
  if(dataFromToken){
    const tokenResult = await User.findOne({ID: dataFromToken.sub})
    if(tokenResult){
      return dataFromToken;
    }else return false;
  }
  else return false;
}

module.exports.login =  async function (IdToken) {
  const dataFromToken = await getDataFromToken(IdToken)
  const data = await getUser(IdToken)
  const user = new User({
    ID: dataFromToken.sub,
    FullName: dataFromToken.given_name,
    Name: dataFromToken.name,
    LastName: dataFromToken.name,
    ImageURL: dataFromToken.picture,
    Email: dataFromToken.email,
    IdToken: IdToken,
    PinCode: '54875',
    PinCodeQuestions: 'Hello My Name is Vasya',
    Country: dataFromToken.locale,
    City: 'String',
    Hobby: 'String'
  })
  if (data) { //Авторизация
    console.log(dataFromToken.sub)
    console.log(typeof dataFromToken.sub)
    User.findOneAndUpdate({"Name": "Sandena3"}, {"Country": "99999"});
    mongoose.disconnect()
    return {
      ID: dataFromToken.sub,
      FullName: dataFromToken.given_name,
      Name: dataFromToken.name,
      LastName: dataFromToken.name,
      ImageURL: dataFromToken.picture,
      Email: dataFromToken.email,
      IdToken: IdToken,
      Country: dataFromToken.locale,
      City: 'String',
      Hobby: 'String',
      RegaOrLogin: false
    }
  } else { // Регистрация

    user.save(function (err) {
      // отключение от базы данных
      mongoose.disconnect() // отключение от базы данных

      if (err) return console.log(err);
      console.log("Сохранен объект", user);
    })
    return {
      ID: dataFromToken.sub,
      FullName: dataFromToken.given_name,
      Name: dataFromToken.name,
      LastName: dataFromToken.name,
      ImageURL: dataFromToken.picture,
      Email: dataFromToken.email,
      IdToken: IdToken,
      Country: dataFromToken.locale,
      City: 'String',
      Hobby: 'String',
      RegaOrLogin: true
    }
  }
}
