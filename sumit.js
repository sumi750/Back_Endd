console.log("Hello World");

let express = require("express");
let app = express();
// console.dir(app);

let port = 3000;

// Server Side Code
app.listen(port, ()=>{
    console.log("Port has been started at ", port);  // Process Has Been Started
})

// How To Send Response
// app.use((req,res)=>{
//     console.log("Request recived");   // Confermation of request recieved
//     // res.send({
//     //     fruit: "apple",
//     //     color:"red"
//     // })  // Sending a Response

//     let code = "<h1>Fruits</h1> <ul><li>Apple</li><li>Banana</li> <li>Orange </li> </ul>";
//     res.send(code);
// })

// Routing: It is process of selecting a path for traffic in a network or between or across multiple networks


app.get("/", (req,res)=>{
    res.send("Hello I am Root");
})
app.get("/:username/:id", (req,res)=>{  // Path Parameters
    let {username,id} = (req.params);
    res.send(`Welcome to the page of @${username}`);
})

app.get("/search", (req,res)=>{
    console.log(req.query);
    res.send("Np Result..")
})


//Nodemon : To automatically restart with code changes : Global Installtaion

// Path Parameters: 
