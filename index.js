const  findMatching = function (match, drivers){
return match.filter(possibleMatch => possibleMatch.toLowerCase()=== drivers.toLowerCase())
}

const fuzzyMatch = function (match, testString){
return match.filter(possibleMatch =>
    possibleMatch.toLowerCase().indexOf(testString.toLowerCase()) === 0)

}

const matchName = function (match, driverName){
return match.filter(record => record.name === driverName)
}