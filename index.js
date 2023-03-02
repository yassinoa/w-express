const express= require('express');
const app=express() ;
const dotenv=require("dotenv");
dotenv.config();
const PORT=process.env.PORT

app.use(function (req, res, next) {
  var date = new Date();
  let day = date.getDay();
  let hour = date.getHours();
  console.log(date," ",day," ",hour)
  if (day > 0 && day < 6 && hour > 9 && hour < 17) {
    next();
  } else {
    res.send("The web application is only available during working hours (Monday to Friday,  from 9 to 17)");
  }
});


app.use(express.static('public'));
app.listen(PORT,(err)=>
err ? console.log(err) :console.log(`server is running PORT : ${PORT} `)
)
// app.listen(process.env.PORT, () =>
//       console.log(`Listening at ${process.env.PORT}`)
//     )
