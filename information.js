let name = "Emmanuel";
let wildschool = "campus d'orleans";
var cowsay = require("cowsay");

const myInfo = () => {
    console.log(cowsay.say({
        text : `Hello I'm ${name}, I'am from ${wildschool}`
    }));;
}

module.exports = myInfo;