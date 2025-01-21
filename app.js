let x = {
  value: 1,valueOf: function () {
    returnthis.value++;
  },
};
if (x == 1 && x == 2 && x == 3) {
  console.log("Hello..");
}


let u = {
    value: 1,valueOf: function () {
      returnthis.value++;
    },
  };
  if (x == 1 && x == 2 && x == 3) {
    console.log("Hello..");
  }
  