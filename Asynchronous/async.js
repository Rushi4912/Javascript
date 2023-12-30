// The async keyword is used to declare an asynchronous function. An asynchronous function always returns a Promise, and any value returned from the function is wrapped in a resolved Promise.

// The await keyword is used within an async function to pause the execution of the function until a Promise is resolved. It can only be used inside an async function. It waits for the Promise to resolve and then returns the resolved value.
const url = "https://jsonplaceholder.typicode.com/posts";
async function main() {
  try {
    const response = await fetch(url);
    const data = response.json();
    return data;
  } catch {
    throw new error("something went wrong");
  }
}

const myData = main();
myData.then((data) => {
  console.log(data);
});
