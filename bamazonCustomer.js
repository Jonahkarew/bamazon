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
connection.connect(function (err) {

 


  if (err) throw err;
  console.log("You are connected as id " + connection.threadId);
  console.log("Welcome to Bamazon!");
    //  display store stock
    afterConnection();
});




//create function to display store stock
function afterConnection() {
  connection.query("SELECT * FROM PRODUCTS", function (err, res) {
    if(err) throw err;
    for(var i = 0; i<res.length; i++){
      console.log(`Item #: ${res[i].item_id}, Product: ${res[i].product_name}, Price: $${res[i].price}`)
    }
    buySomething();
  });
};



//customer function to buy something
function buySomething() {

  //begin inquirer function
  inquirer
    .prompt([{
        //ask which item is being purchased
        name: "purchase",
        type: "number",
        message: "What item id would you like to purchase?"
      },
      {
        //ask how many of the item will be bought
        name: "units",
        type: "number",
        message: "How many units would you like to buy?"
      }
    ])

    .then(function (answer) {

      connection.query("SELECT * FROM products", function (err, res){
        if(err) throw err;

        var userChoice;
        for (var i = 0; i < res.length; i++){
          if(res[i].item_id === answer.purchase){
            userChoice = res[i];
            console.log(userChoice)
          }
        }


        //check if the store has enough units to sell
        if (userChoice.stock_quantity < answer.units){
          //if answer.units is less than stock amount, console.log() something and run purchase something again
          console.log("Our stock is low on that item, please select a different amount")
          return buySomething();}
          else{
          // console.log("this is also working");
          var newStockAmount = userChoice.stock_quantity - answer.units;
          console.log(newStockAmount)
          connection.query("UPDATE products SET stock_quantity ? WHERE id = ?", [newStockAmount, userChoice])
        }



      })

      //check if input of units to purchase is in stock
      // if (userPurchaseUnits > connection.query("SELECT * FROM products WHERE ?", {
      //   item_id: answer.purchase}
      // ))
     
      

     //-------uncomment later-----------
      // connection.query("SELECT * FROM products WHERE ?", {
      //     item_id: answer.purchase
      //   },
      //   function (err, res) {
      //     if (err) throw err;
      //     console.log(res[0].product_name);
      //   })

      // connection.query("SELECT * FROM products WHERE ?", {
      //     item_id: answer.purchase
      //   },
      //   function (err, res) {
      //     if (err) throw err;
      //     console.log(res[0].stock_quantity);
      //     console.log(res[0].stock_quantity);
      //   })
    }
    )
}