// const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "devesh"
tinderUser.isLoggedIn = false
// console.log(tinderUser)

const regularUser = {
    email: "someone@gmail.com",
    fullname: {
        userfullname : {
            fisrtname: "devesh",
            lastname: "panwar"
        }
    }
}

// console.log(regularUser.fullname.userfullname.fisrtname)

const obj1 = {
    1: 'a',
    2: 'b'
}
const obj2 = {
    3: 'a',
    4: 'b'
}  

// const obj3 = {obj1, obj2} // will not get the desired result
// const obj3 = Object.assign({}, obj1, obj2) //Even better way to do is by using spread
const obj3 = {...obj1, ...obj2}
// console.log(obj3) 

users = [
    {
        id:1,
        email:"a@gmail.com"
    },
    {
        id:1,
        email:"a@gmail.com"
    },
    {
        id:1,
        email:"a@gmail.com"
    },
    {
        id:1,
        email:"a@gmail.com"
    }
]

users[1].id
console.log(tinderUser)
console.log(Object.keys(tinderUser))
console.log(Object.values(tinderUser))

console.log(tinderUser.hasOwnProperty('isLoggedIn'))

const course = {
    coursename:"js",
    price: "999",
    courseInstructor:"devesh"
}

//destructure
const {courseInstructor: inst} = course

console.log(inst)
