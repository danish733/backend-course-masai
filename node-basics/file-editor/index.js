const fs = require("fs");
const path = require("path");

const operation = process.argv[2];
const file = process.argv[3];
const content = process.argv[4];

switch (operation) {
  case 'read':
    fs.readFile(file, { encoding: "utf-8" }, (err, data) => {
      console.log(data)
    });
    break;

  case 'append':
    fs.appendFile(file,(`\n${content}`),()=>{
      console.log("Content Appended to the file", file)
    } )
    break;

  case 'delete':
    fs.unlink(file,()=>{
      console.log(`File ${file} deleted`)
    }) 
    break;

  case "create":
    fs.writeFile(file, content || "", (err) => {
        console.log(`File ${file} created`);
    });
    break;
  

  case 'rename':
    fs.rename(file,content,()=>{
      console.log(`File ${file} renamed to ${content}`)
    })  
    break;


  case 'list':
      fs.readdir("./", (err, files) => {
        if (err) console.error(err)
        else console.log(files);
      });
      break;
   

  default:
    console.log(`Invalid operation '${operation}'`);
}