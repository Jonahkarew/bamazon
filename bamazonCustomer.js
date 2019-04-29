//initialize file

//require packages
var mysql = require("mysql");
var inquirer = require("inquirer")
//install packages

//establish connection to mysql
var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,

  user: "root",

  password: "open",
  database: "bamazon_db"
});

//add error if connection errors, if not, opens connection
connection.connect(function(err){
  if (err) throw err;
  console.log("You are connected as id " + connection.threadId);
  buySomething();
});

//customer function to buy something
function buySomething(){
  inquirer
    .prompt({
      name: "purchase",
      type: "list",
      message: "What item would you like to purchase?",
      choices:[
        "yes"
      ]
    })
}