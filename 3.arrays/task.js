function compareArrays(arr1, arr2) {
    if (arr1.length === arr2.length) {
        return arr1.every((element, index) => element === arr2[index])
    } else {
        return false
    }
}



function getUsersNamesInAgeRange(users, gender) {
    return users.filter((item) => item.gender === gender).map((item) => item.age).reduce((prev, current, idx, arr) => {
        return prev + current / arr.length
    }, 0)
}

