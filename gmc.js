let fs = require("fs");
let http = require("http");

// #1
fs.writeFile("hello-world.js", "HELLO WORLD", function (err) {
  if (err) {
    console.log(err);
  }

  console.log("Date successfully written");

  fs.readFile("hello-world.js", function (err, data) {
    if (err) {
      console.log(err);
    }

    console.log(data.toString());
  });
});

// #2
// Check server.js for solution

// #3

fs.writeFile("welcome.txt", "Hello node", function (err) {
  if (err) {
    console.log(err);
  }

  console.log("Date successfully written");

  fs.readFile("welcome.txt", function (err, data) {
    if (err) {
      console.log(err);
    }

    console.log(data.toString());
  });
});
