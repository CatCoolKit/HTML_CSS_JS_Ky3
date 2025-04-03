
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "",
    authDomain: "realtime-database-530d9.firebaseapp.com",
    databaseURL: "https://realtime-database-530d9-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "realtime-database-530d9",
    storageBucket: "realtime-database-530d9.appspot.com",
    messagingSenderId: "339134694381",
    appId: "1:339134694381:web:70320d61b5bf4539b39de4"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);


//import { initializeApp } from "http://www.gstatic.com/firebasejs/10.7.1/firebase-app.js"
import { getDatabase, ref, push, onValue, remove } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js"

// const appSettings = {
//     databaseURL: "https://realtime-database-530d9-default-rtdb.asia-southeast1.firebasedatabase.app/"
// }

// const app = initializeApp(appSettings)
const database = getDatabase(app)
const shoppingListDB = ref(database, "shoppingList")

const inputFieldEL = document.getElementById("input-field")
const addButtonEL = document.getElementById("add-button")
const shoppingListEL = document.getElementById("shopping-list")

addButtonEL.addEventListener("click", function() {

    let inputValue = inputFieldEL.value

    push(shoppingListDB, inputValue)
    clearInputFieldEL()
    
})

// Chuyển đối tượng sang mảng để thao tác
onValue(shoppingListDB, function(snapshot){

    if(snapshot.exists){
        let itemArray = Object.entries(snapshot.val())
        clearShoppingListEL()
        
        for (let index = 0; index < itemArray.length; index++) {
            let currentItem = itemArray[index]
            let currentItemID = currentItem[0]
            let currentItemValue = currentItem[1]

            appendItemToShoppingListEL(currentItem)
            
        }
    }else{
        shoppingListEL.innerHTML = "No items here...yet"
    }
})

function clearShoppingListEL(){
    shoppingListEL.innerHTML = ""
}

function clearInputFieldEL(){
    inputFieldEL.value = ""
}

function appendItemToShoppingListEL(item){
    //shoppingListEL.innerHTML += `<li>${itemValue}</li>`
    let itemID = item[0]
    let itemValue = item[1]

    let newEL = document.createElement("li")
    newEL.textContent = itemValue
    newEL.addEventListener("dblclick", function(){
        let exactLocationOfItemDB = ref(database, `shoppingList/${itemID}`)
        remove(exactLocationOfItemDB)
    })

    shoppingListEL.append(newEL)
}

