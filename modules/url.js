const gitlabUrl =
  "https://gitlab.com/shahnitin500/learn-js/-/tree/nodejs?ref_type=headsduraction=3months";
const urlObject = new URL(gitlabUrl);
console.log(urlObject);
console.log(urlObject.hostname);
console.log(urlObject.search);
console.log(urlObject.pathname);
console.log(urlObject.searchParams);

const params = new URLSearchParams(urlObject.search);

console.log(params);
params.set("duration", "8 months");
console.log(params);

params.append("year", "2025");
console.log(params);

params.delete("year");
console.log(params);