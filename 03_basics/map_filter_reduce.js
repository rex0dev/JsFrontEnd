const myNums = [1,2,3,4,5,6,7,8,9]

const newNums = []

myNums.forEach((a)=>{ //filter alternative
    if(a>4){
        newNums.push(a)
    }
})
console.log(newNums)

//map

const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]

const newNumbers = myNumbers
                            .map((num)=> num * 10)
                            .map((num)=> num + 1)
                            .filter((num)=> num >= 40)

console.log(newNumbers)

//reduce

const a = [1,2,3]

const b = a.reduce((acc, cur)=>{
    console.log(`acc: ${acc} and currentValue: ${cur}`)
    return acc + cur
}, 0)

console.log(b)

