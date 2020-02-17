const queryFilter = function(queries) {

    let docCount = queries.length;
    let groupSize = 12;
    let groupCount = docCount / groupSize;

    console.log("docCount = " + docCount);
    let qArr = [];
    let queryArr = [];
<<<<<<< HEAD
    let k = 0;
=======
>>>>>>> 8d3606f5b915be0a1dec1b1b7445921771baf4ff

    for (let i = 0; i < groupCount; i++ ) {
        qArr = [];
        for (let j = 0; j < groupSize; j++) {
<<<<<<< HEAD
            k = (i * groupSize) + j;
            qArr.push(queries[k])
        }
        queryArr.push(qArr) // display title and map qArr into a graph
    }
        console.log(queryArr)
        return(queryArr);
}

module.exports = queryFilter;
=======
            qArr.push(queries[j])
        }
        queryArr.push(qArr)
        console.log("i=" + i);
        console.log(queryArr)
    }
    return(queryArr);
}

module.exports = queryFilter;
>>>>>>> 8d3606f5b915be0a1dec1b1b7445921771baf4ff
