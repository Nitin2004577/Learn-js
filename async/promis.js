import fs from "fs/promises";
// promise type
fs.readFile("data.txt", "utf8")
  .then((data) => {
    //success
    console.log(data);
  })
  .catch((error) => {
    //error
    console.log(error);
  });
fs.readFile("async/users.json", "utf8")
  .then((users) => console.log(users))

  .catch((error) => console.log(error));

fs.readFile("async/comments.json", "utf8")
  .then((comments) => console.log(comments))

  .catch((error) => console.log(error));
