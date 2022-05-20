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

setTimer(2000, 'hello2')
  .then(
    (resData) => {
      console.log(resData);
      return getLocation();
    },
    (err) => {
      console.log(err);
    }
  )
  .then(
    (resData) => {
      console.log(resData);
    },
    (err) => {
      console.log(err);
    }
  );
setTimer(1000, 'hello1').then((data) => console.log(data));
console.log('loading...');
