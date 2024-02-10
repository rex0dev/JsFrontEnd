//singleton
// Object.create  // creation of object using constructor. //singleton

//object literals

const sym = Symbol("key1")
const JsUser = {
    name:"devesh",
    age: 18,
    [sym]:"myKey1",//square brackets are used if the key is a symbol
    location:"delhi",
    email:"deveshpanwer9990@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["monday", "tuesday"]
}
console.log(JsUser.name)
console.log(JsUser['name'])
console.log(JsUser[sym])
JsUser.email = "rahul@google.com"
//Object.freeze(JsUser)//freezes any further changes in the object. but returns no error
JsUser.email = "rahul@microsoft.com"
console.log(JsUser)

JsUser.greeting = function(){
    console.log(`hello user, ${this.name}`)
}

console.log(JsUser.greeting())


