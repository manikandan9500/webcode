var res=fetch("https://api.openbrewerydb.org/breweries/search?query")



var input=document.createElement("input");
input.setAttribute("type","text");
input.setAttribute("id","country");
input.style.marginLeft="350px"; 

var button=document.createElement("button");
button.setAttribute("type","button");
button.classList.add("btn","btn-succes");
button.innerHTML="search";
button.addEventListener("click",foo);
 let brewer=document.createElement("div");
 brewer.setAttribute("id","country")
document.body.append(input,button);  

async function foo(){
     let googleurl=document.getElementById("country").value;
     console.log(googleurl) 
    let url=`https://12westbrewing.com/#welcome${googleurl}`;
    let res= await (url);
    let res1= await res;
    console.log(res1);
    let index=res1.length-1;
    console.log(res1[index].brewer);
    brewer.innerHTML=`total brewer :${res1[index].brewer}`;

}
 async function foo(){
    try{
        let res=await googleurl();
        console.log(res1);

    }catch (error) {
        console.log(error);
    }

 }

    

















//12gatesbrewing.com
//  var res=fetch("https://api.openbrewerydb.org/breweries/search?query")
// res.then((data)=>data.json())
//     .then((value)=>console.log(value));https://www.oldtownpourhouse.com/?gclid=Cj0KCQjwmouZBhDSARIsALYcouogqjBG-zFSX_xza5-0qYv8YznBS52SOiN1Lz5WAPw9z5f7u5k3rYEaAu1pEALw_wcB


//12westbrewing.com/#welcome