const fs = require('fs');

/*let data = fs.readFileSync("./resourses/index.html", "utf-8");
data = data.toString();

let starIndex = data.indexOf("<include>", 0);
let ecndIndex = data.indexOf("</include>", starIndex);

starIndex = starIndex + "<include>".length;

let adress = data.slice(starIndex, ecndIndex);

let inFile = fs.readFileSync(adress, "utf-8");

data = data.slice(0, starIndex - "<include>".length) + inFile + data.slice(ecndIndex + "</include>".length);

fs.writeFileSync("./index.html", data);*/

console.log("Start watching...");
fs.watch("./parshals", (event, filename) =>{
    if(filename){
        console.log("File changed");
    }
})
