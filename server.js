const express = require("express");
const cors = require("cors")

const app = express();

app.use(cors());

app.get("/",(req,res)=>{
     const category = req.query.category;
     const allItems = require('./DB.json');

      const filterData = allItems.Items.filter((item)=>item.category==category)
      if(category){
         return res.send(filterData)
      }
    res.send(allItems)
    
})

app.listen(3000,()=>{
    console.log('Server is running on port 3000');
})