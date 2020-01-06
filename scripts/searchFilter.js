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
// create a new array consisting only of high, middle, and low values
const hmlArr = [];
hmlArr.push(articles[hiIndex]);
// hmlArr.push(articles[medIndex]);
hmlArr.push(articles[loIndex]);

// console.log the hml array
console.log(hmlArr);

return hmlArr;

}

module.exports = searchFilter;
