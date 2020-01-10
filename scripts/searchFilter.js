const searchFilter = function(articles) {
// initialize array for values to sort
const scores = [];
// push value items into new array
for(let i = 0; i < articles.length; i++) {
scores.push(articles[i].score);
}
// sort the values
scores.sort(function(a, b){return a-b});
// assign the highest and lowest values to variables
const hi = scores.pop();
const lo = scores.shift();
// find indexes for hi and lo scores in original array    
const hiIndex = articles.findIndex(x => x.score ===hi);
const loIndex = articles.findIndex(x => x.score ===lo);
const medIndex = Math.floor(articles.length / 2);

console.log ("hiIndex = " + hiIndex);
console.log ("medIndex = " + medIndex);
console.log ("loIndex = " + loIndex);

// create a new array that will be returned with only high, middle, and low values
let hmlArr = [];
console.log("ARTICLES.LENGTH = " + articles.length);
// set hi, md, lo array
let hiArr = articles[hiIndex];
console.log("HIARR");
console.log(hiArr);
let mdArr = articles[medIndex];
console.log("MDARR");
console.log(mdArr);
let loArr = articles[loIndex];
console.log("LOARR");
console.log(loArr);
// add hml object
hiArr.hml = "hi";
mdArr.hml = "md";
loArr.hml = "lo";
// push each array into the returned array
hmlArr.push(hiArr);
mdArr.id !== hiArr.id ? hmlArr.push(mdArr) : '' ;
loArr.id !== mdArr.id ? loArr.push(loArr) : '';

// console.log the hml array
console.log("RETURNED HML ARRAY");
console.log(hmlArr);

return hmlArr;

}

module.exports = searchFilter;
