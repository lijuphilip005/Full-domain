// // const http=require("node:http")
// // const server=http.createServer((req,res)=>{
// //     res.writeHead(200,{"content-type":"text/plain"});
// //     res.end("hello world")
// // })

// // server.listen(5000,()=>{
// //     console.log("server started on port 3000")
// // })



// const http=require("http")
// const server=http.createServer((req,res)=>{
//     res.writeHead(200)
//     res.end("hello world")
// })
// server.listen(5000,()=>{
//     console.log("server started")
// })









// 

const http=require("http")
const server= http.createServer((req,res)=>{
    res.end("hello world")
})

server.listen(300,()=>console.log("server is started"))