let div = document.querySelector("#div");
// const Car = {
//     make: 'Toyota',
//     model: 'Corolla',
//     year: 2020,
//     color: 'Blue',}
    

// // function Start(){
// //     div.innerHTML = `${Car.make} ${Car.model}'s Engine has started`
// // }
// // Start();
// let age= 20 

// function permit(age){
//   return new Promise((resolve, reject) => {
//     setTimeout(()=>{
//         if(age>18){
//             console.log("Drivers Permit Granted")
//         }
//         else{
//             console.log("Youre Not Eligible for the permit")
//         }
//     }, 1000);
//   })
// }

// permit(20)
// .then(resolve)
// .catch(reject)



// async function Licesnse() {
//     try {
//           let response = await permit(19)
//           console.log("Granted");  
                          
//     }
//     catch{
//          console.error("Rejected")
//     }
// }

// Licesnse()







// API data Fetching

fetch('https://jsonplaceholder.typicode.com/users')
.then(res => res.json())
.then(res => {


    console.log(res);
    let index=0
    function updatedDisplay(){
        if (index<res.length){
    div.innerHTML =
    `<h1>Employee Details</h1>
    <b>Name: </b> ${res[index].name} <br> <b>User Name:</b> ${res[index].username} <br> <b>Phone:</b> ${res[index].phone} 
    <br> <b>Email:</b> ${res[index].email} <br>
    <button onclick="decreaseIndex()">Previous</button>
    <button onclick="increaseIndex()">Next</button>
    `;}
    else{
        div.innerHTML = `<h1>No more employees.</h1><br>        
        <button onclick="decreaseIndex()">Previous</button>`;
    }
    window.increaseIndex= function (){

        index++ 
         console.log(index)
         updatedDisplay()
    }
    window.decreaseIndex= function (){
         if (index>=1) {
            index--
         }
         
         console.log(index)
         updatedDisplay()
    }
    

}
updatedDisplay();
})


.catch((err)=>{
    console.log(err);
    
})
