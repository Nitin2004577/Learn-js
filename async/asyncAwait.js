import fs from "fs/promises";

async function getData() {
 try{
 const users = await fs.readFile("async/users.json", "utf8");
  console.log(users);

  const post = await fs.readFile("async/posts.json", "utf8");
  console.log(post);

  const comments = await fs.readFile("async/comments.json", "utf8");
  console.log(comments);
 }catch (error){
console.log(error)
 }
}

getData();
