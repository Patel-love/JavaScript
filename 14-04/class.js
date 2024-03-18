// let a = document.getElementsByClassName("one")[0] ;
// console.log(a.innerHTML) ;


// let a = document.getElementsByClassName("one");

// for(let i=0 ; i<a.length ; i++){
//     console.log(a[i].innerHTML)
// }


//=============  query selector =======\

// let a = document.querySelector(".one").innerText ;
// console.log(a);


// let a = document.querySelectorAll(".one")[0].innerHTML ;
// console.log(a);



// // ============================

let likes = 0;
let a = document.getElementById("count");

// LIKE FUNCTION 

function abc() {
    likes++;
// console.log(likes);
a.innerText=likes ;
}

// DisLIKE FUNCTION 

function xyz() {
    if(likes<1){
        a.innerText=0;
    }else{
        likes--;
        a.innerText=likes;
    }

}

