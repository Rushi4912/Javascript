const fetchData = (callback) => {
  setTimeout(() => {
    const data = {
      message: "a new message",
    };

    const data2 = [1, 4, 56, 6, 67, 5];
    callback(data, data2);
  }, 2000);
};

function myfunction(data, data2) {
  console.log(data.message);
  // console.log(data2[1]);
  
}


