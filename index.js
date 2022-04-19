const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
const xhr = new XMLHttpRequest();

xhr.open('GET', "http://museum.42web.io/");
xhr.send();

xhr.onload = () =>{
    console.log(xhr.response);
}    