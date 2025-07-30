import fs from "fs";

// callback hell 
// Read users.json first
fs.readFile("async/users.json", "utf8", (error, usersData) => {
  if (error) return console.error("Error reading users:", error);

  const userList = JSON.parse(usersData);

  // Now read posts.json
  fs.readFile("async/posts.json", "utf8", (pError, postsData) => {
    if (pError) return console.error("Error reading posts:", pError);

    const postList = JSON.parse(postsData);

    // Combine posts with users
    const result = userList.map((user) => {
      return {
        ...user,
        posts: postList.filter((post) => post.userId === user.id),
      };
    });

    console.log(result);
    console.log("==========");

fs.readFile("comments.json", "utf8", (cError, comments) => {
    if(cError) return cError;
    console.log(comments);
});

  });
});
