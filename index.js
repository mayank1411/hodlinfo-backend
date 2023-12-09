const express = require('express');
const app = express();
require('dotenv').config();
const cors = require('cors')
const {connectDB} = require('./db')
const Stocks = require('./model/Stock')
const bodyParser = require('body-parser')
const PORT = 5000 || process.env.PORT
;

app.use(cors());
app.use(bodyParser.urlencoded({
      extended: false
   }));
   
app.use(express.json());

app.get('/',(req,res)=>{
      res.json({sucuess : true});
})

app.get('/api/data',async(req,res)=>{
      const stocks = await Stocks.find(); 
      res.json(stocks);
})

app.post('/api/data',async (req,res)=>{
      try {
            const stock = await Stocks.create(req.body);
            res.status(200).send({stock});
      } catch (error) {
            res.status(500).send({msg : error})
      }
})


// app.listen(5000,()=>{
//       console.log(`server is running at 5000...`);
// })
const start = async()=>{  
      try {
            await connectDB(process.env.MONGO_URI);
            app.listen(PORT, ()=>{
                  console.log(`Server is running at ${PORT}....`)
            })
      } catch (error) {
            console.log(error); 
      }
}
start()