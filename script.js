console.log('Start');

function setTimer(duration, message) {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(message);
    }, duration);
  });
  return promise;
}

function getLocation() {
  const promise = new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      (success) => {
        resolve(success);
      },
      (error) => {
        reject(error);
      }
    );
  });
  return promise;
}

// setTimer(2000, 'hello1').then((data) => console.log(data));
// getLocation().then((data) => console.log(data));

// (async function () {
//   setTimer(2000, 'hello2')
//     .then(
//       (resData) => {
//         console.log(resData);
//         return getLocation();
//       },
//       (err) => {
//         console.log(err);
//       }
//     )
//     .then(
//       (resData) => {
//         console.log(resData);
//       },
//       (err) => {
//         console.log(err);
//       }
//     );

//   console.log('loading...');
// })();

// async function init() {
//   let location;
//   let timer;
//   try {
//     location = await getLocation();
//     timer = await setTimer(2000, 'Hello world');
//   } catch (error) {
//     console.log('errot: ', error);
//   }
//   console.log('location: ', location);
//   console.log('setimer: ', timer);
//   console.log('loading...');
// }
// init();

// Promise.race([getLocation(), setTimer(1000, 'Hello world')]).then((data) => {
//   console.log('promise race: ', data);
// });

// Promise.all([getLocation(), setTimer(1000, 'Hello world')]).then((data) => {
//   console.log('promise all: ', data);
// });

// Promise.allSettled([getLocation(), setTimer(1000, 'Hello world')]).then(
//   (data) => {
//     console.log('promise all settled: ', data);
//   }
// );

const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Timer completed!');
  }, 1000);
})
  .then((text) => {
    throw new Error('Failed!');
  })
  .catch((err) => console.log('error', err))
  .then(() => console.log('Does that execute?'));
