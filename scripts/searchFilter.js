const searchFilter = function(articles) {

    // sort using ES6 sort
    // articles.sort((a, b) => parseFloat(a.score) - parseFloat(b.score));

    console.log("SEARCHFILTER ARTICLES === ");
    console.log(articles);

    // assign hi, med, lo indexes
    let medIndex = Math.floor(articles.length / 2);
    hiIndex = articles.length - 1;
    loIndex = 0;
  
    // create a new array that will be returned with only high, middle, and low values
    let hmlArr = [];
    // set hi, md, lo array
    let hiArr = articles[hiIndex];
    let mdArr = articles[medIndex];
    let loArr = articles[loIndex];
    // add hml object value
    hiArr.hml = "hi";
    mdArr.hml = "md";
    loArr.hml = "lo";
    // push each array into the returned array
    hmlArr.push(hiArr);
    mdArr.id !== hiArr.id ? hmlArr.push(mdArr) : '' ;
    loArr.id !== mdArr.id ? hmlArr.push(loArr) : '' ;

    // console.log the hml array
    console.log("RETURNED HML ARRAY");
    console.log(hmlArr);

    return hmlArr;

}

module.exports = searchFilter;
