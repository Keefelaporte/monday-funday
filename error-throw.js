function addOne(numberToAddTo) {
    if (numberToAddTo === undefined) {
        throw new Error('You must provide a number to add to')
    }
    return numberToAddTo + 1
}
try {
    // failing to provide a number results in an error
    let result = addOne()
    console.log(result)
} catch (errorDetail) {
    console.log(errorDetail.message)
}

//let result = addOne()