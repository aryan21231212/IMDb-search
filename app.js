let key = "c4bfe614";
let url = `http://www.omdbapi.com/?s=pathaan`

let search = document.querySelector(".search");
let input = document.querySelector("input")
let mid = document.querySelector(".mid")
let box = document.querySelector(".poster")
let tittle = document.querySelector('.title')
let id = document.querySelector(".id")
let year = document.querySelector(".year")
let sug = document.querySelector(".sug")

search.addEventListener('click',async ()=>{

    box.innerHTML = ""
    if(input.value === ""){
        sug.style.display = "flex"  
        document.querySelector(".mid").style.display = "none"
        sug.innerHTML = "ENTER THE VALUE"
    }
    else{
        sug.style.display = "none"    
        document.querySelector(".mid").style.display = "flex"
        let response = await fetch(`http://www.omdbapi.com/?s=${input.value}&apikey=c4bfe614`);
        let data = await response.json();
        
        noob(data)
        console.log(data)
        input.value = ""
    }
   
})

function noob(data){
    
        
        year.innerHTML = data.Search[0].Year
        id.innerHTML = data.Search[0].imdbID
        tittle.innerHTML = data.Search[0].Title
        img = document.createElement("img")
        img.src = data.Search[0].Poster;
        box.appendChild(img)

  
}
   


