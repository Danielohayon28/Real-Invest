const express = require('express');
const app = express();
app.use(express);

app.listen(3000, (res,req)=>{
    console.log("App is listening on Port 3000")
})