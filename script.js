let key= "6495ca47f2a54afb97028aa8d84bbfcf"
let cardData=document.querySelector(".cardData");
let searchBtn=document.querySelector("#searchBtn");
let inputData=document.querySelector("#inputData");
let searchType=document.querySelector(".category h1");
const getData =async (inputText) =>{

    let res=await fetch(`https://newsapi.org/v2/everything?q=${inputText}&apiKey=${key}`);
    let jsonData= await res.json();

    searchType.innerHTML="Search For : " + inputText;

    cardData.innerHTML="";

    jsonData.articles.forEach(article => {

        let divs=document.createElement("div");
    divs.classList.add("card");
    cardData.appendChild(divs);

    divs.addEventListener("click", function(){

        window.open(article.url);
        
    })
    divs.innerHTML=`
    <img src="${article.urlToImage}" alt="">
    <h3>${article.title}</h3>
    <p>${article.description}</p>
    
    `
        
    });
    
     
}
window.addEventListener("load", function(){

    getData("India");
})
searchBtn.addEventListener("click", function(){

    let inputText= inputData.value;
    getData(inputText);

})

inputData.addEventListener("keypress", function(event){

    if (event.key === "Enter"){
        let inputText= inputData.value;
        getData(inputText);


    }

    

})


function navClick(navName){

    getData(navName);
}
