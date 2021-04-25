console.clear()


// var mFriends = ['Shaw', 'Clara', 'Vab', 'Kun', 'Jacob', 'Dina']
// console.log(mFriends)
// console.log(typeof(mFriends))

// console.log(mFriends[2])
// console.log(mFriends[0])
// console.log(mFriends[4])

// // Update a value
// mFriends[0] = 'Shawn'
// console.log(mFriends)

// // Add more items
// mFriends[6] = 'Alan'
// console.log(mFriends)

// // mFriends[10] = 'Tiffany'
// // console.log(mFriends)

// mFriends[mFriends.length] = 'Rob'
// console.log(mFriends)

// mFriends.push('Jack')
// console.log(mFriends)

// // Delete a value
// var mName = mFriends.pop()
// console.log(mName)
// console.log(mFriends)
// var mName = mFriends.pop()
// console.log(mName)
// console.log(mFriends)
// var mName = mFriends.pop()
// console.log(mName)
// console.log(mFriends)
// var mName = mFriends.pop()
// console.log(mName)
// console.log(mFriends)



var mFriends = ['Shaw', 'Clara', 'Vab', 'Kun', 'Jacob', 'Dina']
mFriends.splice(3, 0, 'Donna', 'Rachel')

// 1st tells where to start
// 2nd tells how many items to be deleted
// 3rd and 4th and so on tells what items to  be added
console.log(mFriends)

mFriends.splice(0, 0, 'Harvey')
console.log(mFriends)

// Delete item at specific position
mFriends.splice(2, 1)
console.log(mFriends)

mFriends.splice(0, 2)
console.log(mFriends)

// Concatenation
var mOfficeFriends = ['Nina', 'Aron', 'Katie', 'Vic', 'Paula']
var mAllFriends = mFriends.concat(mOfficeFriends)

console.log('====================================')
console.log(mFriends)
console.log(mOfficeFriends)
console.log(mAllFriends)

//Sorting Ascending and Descending

mAllFriends.sort()
console.log(mAllFriends)

mAllFriends.reverse()
console.log(mAllFriends)