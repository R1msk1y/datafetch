console.log(`hello world!`);
const myPromise = new Promise((resolve, reject) => {});

fetch("https://jsonplaceholder.typicode.com/todos")
.then(response=> response.json())
.then(json=> console.log(json))
.catch(error=>console.log(error))

//   https://63eb5803f1a969340db5fcc4.mockapi.io/items