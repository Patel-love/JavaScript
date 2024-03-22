let n = document.getElementById("name") ;
let p = document.getElementById("password") ;
let btn = document.getElementById("btn") ;

btn.addEventListener("click",function(e){

e.preventDefault()

let data1 = n.value ;
let data2 = p.value ;
console.log(data1)
console.log(data2)

})

// let n = document.getElementById("name") ;
// let btn = document.getElementById("btn") ;

// let array=[] ;

// btn.addEventListener("click",function(e){
//     e.preventDefault() ;
//     array.push(n.value) ;
//     console.log(array) ;
// })