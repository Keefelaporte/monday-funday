require('dotenv').config()
// this can be teasted using MY_MEM=Arrays node environment_variables.js
//this will result in console logging out "i remember Arrays"
console.log('I remember ' + process.env.MY_MEM)

// I wont specificy MY_FAV intentionally so i can see the default being used
const my_favorite = process.env.MY_FAV || 'filter function';
console.log('I really like the ' + my_favorite)


//this can be called so that te default is used and alo with a specific DB_HOST
//MY_MEM=Arrays DB_HOST=myprodawshost node environment_variables.js
const db_host = process.env.DB_HOST || 'localhost';
console.log('Using database host: ' + db_host)