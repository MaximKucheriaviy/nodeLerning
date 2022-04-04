const fs = require('fs');
const watch = require('node-watch');
let counter = 0;

function generateHtml(){
    let data = fs.readFileSync("./resourses/sourse.html", "utf-8");
    data = data.toString();
    let starIndex = -1;
    let ecndIndex = -1;
    while(true){
        starIndex = data.indexOf("<include>", ecndIndex + 1);
        if(starIndex == -1){
            break;
        }
        ecndIndex = data.indexOf("</include>", starIndex + 1);
        starIndex = starIndex + "<include>".length;
        let adress = data.slice(starIndex, ecndIndex);
        let inFile = fs.readFileSync(adress, "utf-8");
        data = data.slice(0, starIndex - "<include>".length) + inFile + data.slice(ecndIndex + "</include>".length);
        fs.writeFileSync("./index.html", data);
    } 
}


generateHtml();
/*let data = fs.readFileSync("./resourses/index.html", "utf-8");
data = data.toString();

let starIndex = data.indexOf("<include>", 0);
let ecndIndex = data.indexOf("</include>", starIndex);

starIndex = starIndex + "<include>".length;

let adress = data.slice(starIndex, ecndIndex);

let inFile = fs.readFileSync(adress, "utf-8");

data = data.slice(0, starIndex - "<include>".length) + inFile + data.slice(ecndIndex + "</include>".length);

fs.writeFileSync("./index.html", data);*/

/*console.log("Start watching...");
watch(["./resourses", "./resourses/parshals"], {recurseve: true}, (event, filename) =>{
    if(filename){
        console.log("File changed:", filename, " ", event);
    }
})*/
