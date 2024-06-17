// synchronous
console.log(" I ")

console.log(" eat ")

console.log(" ice cream ")

console.log(" with a ")

console.log(" spoon ")

// asynchronous

console.log(" I ")

console.log(" eat ")

// setTimeout(()=>{
//     console.log(" ice cream ")
// }, 0o0)

console.log(" with a ")

console.log(" spoon ")

//callback
function one(call_two){
    console.log("step 1")
    call_two()
}

function two(){
    console.log("step 2")
}

one(two)

//

let stocks = {
    Fruits : ["strawberry", "grapes", "banana", "apple"],
    liquid : ["water", "ice"],
    holder : ["cone", "cup", "stick"],
    toppings : ["chocolate", "peanuts"],
}

let is_shop_open = true

function time(ms){
    return new Promise((resolve, reject)=>{
        if(is_shop_open){
            setTimeout(resolve,ms)
        }
        else{
            reject(console.log("Shop is closed"))
        }
    })
}

async function kitchen(){
    try {
        await time(2000)
        console.log(`${stocks.Fruits[0]} was selected`)

        await time(0o0)
        console.log("production has started")

        await time(2000)
        console.log("fruit has been chopped")

        await time(1000)
        console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} added`)

        await time(1000)
        console.log("start the machine")

        await time(2000)
        console.log(`ice cream placed on ${stocks.holder[1]}`)

        await time(3000)
        console.log(`${stocks.toppings[0]} as toppings`)

        await time(2000)
        console.log("Serve Ice Cream")

    } catch (error) {
        console.log("Customer left", error)
    }
    finally{
        console.log("day ended, our shop is closed")
    }
}

kitchen()

//================================================================

// let order = (time, work) =>{

//     return new Promise( (resolve, reject)=>{
//         if(is_shop_open){

//             setTimeout(()=>{
//                 resolve( work() )
//             }, time)
            
//         }
//         else{
//             reject(console.log("our shop is closed"))
//         }
//     } )
// }

// order(2000, ()=>console.log(`${stocks.Fruits[0]} was selected`))

// .then(()=>{
//     return order(0o0, ()=>console.log("Production has started"))
// })

// .then(()=>{
//     return order(2000, ()=>console.log("the fruit has been chopped"))
// })

// .then(()=>{
//     return order(1000, ()=>{
//         console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was added`)
//     })
// })

// .then(()=>{
//     return order(1000, ()=>console.log("the machine was started"))
// })

// .then(()=>{
//     return order(2000, ()=>{
//         console.log(`ice cream was placed on ${stocks.holder[0]}`)
//     })
// })

// .then(()=>{
//     return order(3000, ()=>{
//         console.log(`${stocks.toppings[0]} was added as toppings`)
//     })
// })

// .then(()=>{
//     return order(1000, ()=>console.log("serve ice cream"))
// })

// .catch(()=>{
//     console.log("Customer left")
// })

// .finally(()=>{
//     console.log("day ended, our shop is closed")
// })

//=================================================================

// let order = (Fruit_name, call_production) => {

//     setTimeout(()=>{
//         console.log(`${stocks.Fruits[Fruit_name]} was selected`)

//         call_production()
//     }, 2000)
// }

// let production = () => {
    
//     setTimeout(()=>{
//         console.log("production has started")

//         setTimeout(()=>{
//             console.log("the fruit has been chopped")

//             setTimeout(()=>{
//                 console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was added`)

//                 setTimeout(()=>{
//                     console.log("the machine was started")

//                     setTimeout(()=>{
//                         console.log(`ice cream was placed on ${stocks.holder[0]}`)

//                         setTimeout(()=>{
//                             console.log(`${stocks.toppings[0]} was added as toppings`)

//                             setTimeout(()=>{
//                                 console.log("serve ice cream")
//                             },2000)
//                         },3000)
//                     },2000)
//                 },1000)
//             },1000)
//         },2000)
//     }, 0o0)
// }

// order(0, production)