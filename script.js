const xhr = new XMLHttpRequest();

xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts');
xhr.responseType = 'json';
xhr.onload = function () {
  // console.log(xhr.response);
  // console.log(typeof xhr.response);
  // const list = JSON.parse(xhr.response);
  console.log(xhr.response);
};

xhr.send();
