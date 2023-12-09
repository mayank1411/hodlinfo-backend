const mongoose = require('mongoose');

const StockSchema = new mongoose.Schema({
      "stock_name" : {
            type : String
      },
            "base_unit" : {
                  type : String
            },
            "last": {
                  type : String
            },
            "volume": {
                  type : String
            },
            "sell": {
                  type : String 
            },
            "buy": {
                  type : String
            },
            "name": {
                  type : String
            }
      
})

module.exports = mongoose.model("Stocks",StockSchema);



// {
//       "btcinr": {
//           "base_unit": "btc",
//           "last": "3784999.0",
//           "volume": "4.93055",
//           "sell": "3784999.0",
//           "buy": "3784998.0",
//           "name": "BTC/INR"
//       }