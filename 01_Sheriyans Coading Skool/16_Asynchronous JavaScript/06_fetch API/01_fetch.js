// free API link:- https://free-apis.github.io/#/browse

//  Example.1
async function getAllUsers() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json(); // In JSON format
  console.log(data);
  console.log(data[0]);
  console.log(data[0].id);
  console.log(data[0].name);
}
// getAllUsers();

// Example.2
async function getData() {
  try {
    const response = await fetch("https://api.thecatapi.com/v1/images/search");
    const data = await response.json();
    console.log(data);
    //   console.log(data[0]);
    //   console.log(data[0].id);
    //   console.log(data[0].url);
  } catch (error) {
    console.log(error);
  }
}
// console.log(getData());   // promise state: pending, fullfilled, rejected


// Example.3
async function getDetails() {
  try {
    let response = await fetch('https://api.dictionaryapi.dev/api/v2/entries/en/darling');
    let data = await response.json(); 
    console.log(data);
  } catch (error) {
    console.error('Error fetching dictionary data:', error);
  }
}
getDetails();
