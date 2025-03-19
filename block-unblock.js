// const fs = require("fs");
// console.log("STEP ONE...");
// console.log("STEP TWO...");
// fs.writeFile("node/demo.txt","Hello ASYNC $ SYNC. THIS IS ASYNC..NEW",() =>{
// });
// // blocking code - sync code
// const date = fs.readFileSync("node/demo.txt");
// console.log(date.toString());
// // non blocking - async code
// fs.readFile("node/demo.txt",(err,date) => {
//     // if(err){
//     //     console.log(err);
//     // }
//     console.log(date.toString());
// });
// console.log("STEP TWO...");

// console.log("STEP THREE...");




// const fs = require("fs")
// console.log("STEP ONE...");
// // blocking code - sync code
// try{
// const date = fs.readFileSync("node/demo.txt");
// console.log(date.toString());
// }catch(err){
//     console.log(err)
// }
// // non blocking - async code
// fs.readFile("node/demo.txt",(err,date) => {
//     if(err){
//         console.log(err);
//     }
//     console.log(date.toString());
// })
// console.log("STEP TWO...");
// console.log("STEP THREE...");



// const fs = require("fs");
// const os = require("os");
// console.log("STEP ONE...",os.cpus().lengh);
// fs.writeFile("node/demo.txt","Hello ASYNC $ SYNC. THIS IS ASYNC..NEW",() =>{
//         console.log("STEP TWO...");
//     });

// // blocking code - sync code
// try{
// const date = fs.readFileSync("node/demo.txt");
// console.log(date.toString());
// }catch(err){
//     console.log(err)
// }
// // non blocking - async code
// fs.readFile("node/demo.txt",(err,date) => {
//     if(err){
//         console.log(err);
//     }
//     console.log(date.toString());
// })
// console.log("STEP TWO...");
// console.log("STEP THREE...");


const fs = require("fs");
const os = require("os");
console.log("STEP ONE...", os.cpus().length);

fs.writeFile("node/abc.txt", "Hello AYNC & SYNC. THIS IS ASYNC..NEW", () => {
    console.log("STEP TWO...");
});
//BLOCKING CODE - SYNC CODE
try {
   const data = fs.readFileSync("NODE-JS/demo.txt");
   Console.LOG("STEP THREE...");
   console.log(data.toString());
} catch (err) {
    console.log(err);
}
//NON BLOCKING CODE - ASYNC CODE
//  fs.readFile("nodeJS/demo.txt",(err, data) =>{
//     if (err) {
//          console.log(err);
//      }
//     console.log(data.toString());
//     });
console.log("STEP FOUR...");

console.log("STEP FIVE...");