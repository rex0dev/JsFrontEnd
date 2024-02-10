let arr1 = [2,42,55,1]
let arr2 = [6,7,5,12]

//spread
const arr3 = [...arr1, ...arr2]
console.log(arr3)

//flat
let arr4 = [1,42,55,[4,53,55,[3,66]]]
let arr5 = arr4.flat(Infinity)
console.log(arr5)

console.log(Array.isArray("devesh"))
console.log(Array.from("devesh"))
console.log(Array.from({name: "devesh"})) //Interesting

score1 = 100
score2 = 200
score3 = 300

console.log(Array.of(score1, score2, score3))