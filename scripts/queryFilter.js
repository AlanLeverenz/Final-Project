const queryFilter = function(queries) {

    let docCount = queries.length;
    let groupSize = 12;
    let groupCount = docCount / groupSize;

    console.log("docCount = " + docCount);
    let qArr = [];
    let queryArr = [];

    for (let i = 0; i < groupCount; i++ ) {
        qArr = [];
        for (let j = 0; j < groupSize; j++) {
            qArr.push(queries[j])
        }
        queryArr.push(qArr)
        console.log("i=" + i);
        console.log(queryArr)
    }
    return(queryArr);
}

module.exports = queryFilter;