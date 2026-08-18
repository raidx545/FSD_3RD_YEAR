//console.log("hello I m using JS")



// function sum(a,b){
//     return Math.sqrt(a)+Math.sqrt(b);
// }
// console.log(sum(81,49));



// function as an expression
// const sum=function (a,b){
//     return Math.sqrt(a)+Math.sqrt(b);
// }
// console.log(sum(81,49));


//arrow function
// const sum=(a,b)=>{return a+b};
// console.log(sum(1,6));


//IIFE
// (()=>{
//     console.log("Heyy....using IIFE")
// })();



//let and var 
// let a="23";
// console.log(typeof(a));
// if(a<30){
//     let a=40;
//     console.log("value of a inside block=" +a)
// }
// console.log("value of a outside block"+a)



//callback
// function sum(a,b){
//     return a+b;
// }
// function msgWithSum(clbk,msg){
//     const result=clbk(40,50);
//     console.log("hiii,"+msg+"and your result is="+result)
// }
// msgWithSum(sum,"Rahul")



// function login(error,msg){
//     if(error){
//         console.log("Error is:"+error)
//     }
//     else{
//         console.log(msg)
//     }
// }
// function loginHandler(username,password,clbk){
//     if(username=="raj" && password=="12345"){
//         clbk(null,"Login Success")
//     }else{
//         clbk("username or password is incorrect",null)
//     }
// }
// loginHandler("raj","1245",login)


// console.log("One")
// for(i=0 ; i < 100; i++){
//     setTimeout(() => console.log("i = " + i));
// }

// console.log("Three")
// function run_btn(){
//     alert("Earthquake!!!!!!")
// }

// const container = document.getElementById("container");
// const button = document.getElementById("btn");

// button.addEventListener("click",()=>{
//     // alert("Fu*k you")
//     container.innerHTML= "<h2 style='color:"+"red"+"'> Hey </H2>"

//     const h1 = document.createElement("h1");
//     h1.innerText="Hey this is RAIDX"
//     container.appendChild(h1);
// })
const profile_image = document.createElement("img")
profile_image.src = "./dp.jpg" 
profile_image.height = "50px" 

const information = document.createElement("information")
information.innerHTML= "<h1 style=color:green>Raj Porwl  , 3rd year B.Tech(CSE) student.</h1><br><h2>Working on RAG,Agentic AI <br> My Tech Stack is of FastAPI, LangChain, LangGraph,QdrantDB</br> Have many live projects on Agentic AI<br></h2> "

const container = document.getElementById("container")
const loader = document.getElementById("loader")
function show_resume(){
    try{
        loader.innerHTML = "<h2> Loading the data.. "
    }
    catch(e){
        loader.innerHTML = "<h2 style=color:red> There is error in loading the data "
    }
    finally{
        loader.innerHTML = ""
    }
    container.appendChild(profile_image)
    container.appendChild(information)
    
    
}

const btn_to_show_resume = document.getElementById("show_resume");
btn_to_show_resume.addEventListener("click",show_resume);