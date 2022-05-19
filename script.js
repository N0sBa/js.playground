// class App {
//   static init() {
//     const div = document.getElementById('div');
//     const btn = div.querySelector('button');
//     div.addEventListener(
//       'click',
//       (event) => {
//         console.log('clicked div');
//         console.dir(event);
//       },
//       true
//     );

//     btn.addEventListener('click', (event) => {
//       // event.stopPropagation();
//       console.log('clicked btn');
//       console.dir(event);
//       console.log(this);
//     });
//   }
// }

// App.init();
const div = document.getElementById('div');
const btn = div.querySelector('button');
div.addEventListener('click', (event) => {
  console.log('clicked div');
});

btn.addEventListener('click', function (event) {
  // event.stopPropagation();
  console.log('clicked btn');
});

btn.addEventListener('dragstart', (event) => {
  console.log(event);
});

const dropArea = document.querySelector('.dropArea');
dropArea.addEventListener('dragenter', (event) => {
  event.preventDefault();
  console.log('drag enter');
  console.log(event);
});

dropArea.addEventListener('dragover', (event) => {
  event.preventDefault();
  console.log('drop over');
  console.log(event);
});

const ul = document.querySelector('ul');
// ul.addEventListener('click', (event) => {
//   console.log(event.target);
//   event.target.closest('li').classList.toggle('highlight');
// });

ul.onclick = function (event) {
  console.log(event.target);
  event.target.closest('li').classList.toggle('highlight');
};
