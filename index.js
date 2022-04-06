const fs = require('fs');
const watch = require('node-watch');
let counter = 0;

function generateHtml(){
    let data = fs.readFileSync("./resourses/sourse.html", "utf-8");
    data = data.toString();
    let starIndex = 0;
    let ecndIndex = 0;
    while(true){
        starIndex = data.indexOf("<include>", 0);
        if(starIndex == -1){
            break;
        }
        ecndIndex = data.indexOf("</include>", 0);
        starIndex = starIndex + "<include>".length;
        let adress = data.slice(starIndex, ecndIndex);
        let inFile = fs.readFileSync(adress, "utf-8");
        data = data.slice(0, starIndex - "<include>".length) + inFile + data.slice(ecndIndex + "</include>".length);
    } 
    fs.writeFileSync("./index.html", data);
    console.log("output file updated");

}
console.log("SHL startiong...");

generateHtml();

console.log("Start watching...");


watch(["./resourses", "./resourses/parshals"], {recurseve: true}, (event, filename) =>{
    if(filename){
        console.log("File changed:", filename, " ", event);
        generateHtml();
    }
})
