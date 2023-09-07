// Catch runs on a network error
// response.ok, response.status, response.statusText

fetch('http://httpstat.us/404')

  .then(response => {
    if (!response.ok) {
      throw new Error('Request Failed');
    };
    return response;
  })

  .then(() => {
    console.log('success');
  })

  .catch(error => {
    console.log(error);
  })