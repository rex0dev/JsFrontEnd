function calculateCartPrice(val1, val2, ...num){
    return num
}

console.log(calculateCartPrice(1,2,3,4,4,5,56))//one and 2 is taken by the varables var1, var2 and array will be created for the rest numbers

const user = {
    name:"devesh",
    price:199
}
function handelObject(anyobj){
    console.log(`name is ${anyobj.name} and price is ${anyobj.price}`)
}

handelObject(user)