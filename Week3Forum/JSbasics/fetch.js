
/* 
The fetch method can be used to make requests to the server and to 
load information found in webpages. It returns a promise
*/
// API for get requests


async function fetchText() {
    let response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    let data = await response.text();
    console.log(data);
}
fetchText(); // Doesn't work here since fetch is not imported.