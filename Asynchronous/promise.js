const bucket = ["salt", "vegetables", "rice", "burger"];

const myPromise = new Promise((resolve, reject) => {
  if (
    bucket.includes("salt") &&
    bucket.includes("vegetables") &&
    bucket.includes("rice")
  ) {
    resolve("fried rice");
  } else {
    reject("missing something");
  }
});

myPromise
  .then((rice) => {
    console.log(rice);
  })
  .catch((error) => {
    console.log(error);
  });
