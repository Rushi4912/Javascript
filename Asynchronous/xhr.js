// Step 1: Create an instance of XMLHttpRequest
const xhr = new XMLHttpRequest();

// Step 2: Open a connection
xhr.open("GET", "https://jsonplaceholder.typicode.com/posts/1", true);

// Step 3: Set request headers (optional)
// xhr.setRequestHeader('Authorization', 'Bearer YOUR_ACCESS_TOKEN');

// Step 4: Define response handling
xhr.onreadystatechange = function () {
  if (xhr.readyState === 4 && xhr.status === 200) {
    // Successful response
    const response = JSON.parse(xhr.responseText);
    console.log(response);
  } else if (xhr.readyState === 4 && xhr.status !== 200) {
    // Error handling
    console.error("Request failed with status:", xhr.status);
  }
};

// Step 5: Send the request
xhr.send();
