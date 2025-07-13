// how to pass data in Fetch API
// JSON.stringify() converts data to JSON format

//method: 'POST'  to create a resource
//method: 'PUT'  to update a resource


// data to be sent in the POST request (in JSON format)
const postData = {
    username: "Om KC",
    email: "omkc4@example.com"
}

//POST request optons
const requestOptions = {
    method: "POST",
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(postData)
}

// Make POST request
fetch('https://jsonplaceholder.typicode.com/posts', requestOptions)
  .then(response => {
    // Check if the request was successful
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    // Parse the JSON response
    return response.json();
  })
  .then(data => {
    // Handle the data returned from the server
    console.log('Post request response:', data);
  })
  .catch(error => {
    // Handle any errors that occurred during the fetch
    console.error('There was a problem with the fetch operation:', error);
  });


//another way, its same basically

//   fetch('https://jsonplaceholder.typicode.com/posts', {
//     method: 'POST',
//     body: JSON.stringify({
//       title: 'foo',
//       body: 'bar',
//       userId: 1,
//     }),
//     headers: {
//       'Content-type': 'application/json; charset=UTF-8',
//     },
//   })
//     .then((response) => response.json())
//     .then((json) => console.log(json));