

function findMatching (match, drivers) {
    return match.filter( possibleMatch =>
        possibleMatch.toLowerCase() === drivers.toLowerCase()

        )
}

function fuzzyMatch (match, testString) {
    return match.filter( possibleMatch =>
        possibleMatch.toLowerCase().indexOf(testString.toLowerCase()) === 0
    )
}

function matchName(match, driversName) {
    return match.filter ( record => record.name === driversName)
}
 

 