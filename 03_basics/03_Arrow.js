const user = {
    username: "devesh",
    price:999,

    welcomemessage: function(){
        console.log(`Hello ${this.username}, welcome to our website `)
    }
}

// user.welcomemessage()
// console.log(this)//returns empty object as we do not have any context in the global scope

// function chai(){
//     username: "devesh"
//     console.log(this.username)//only works in objects
//  }

//  chai()

// const addTwo = (a1,a2)=>{
//     return a1 + a2
// }

// const addTwo = (a1,a2)=> a1 + a2 //Explecit return
const addTwo = (a1,a2)=> ({name:"devesh"}) 


console.log(addTwo(1,3))