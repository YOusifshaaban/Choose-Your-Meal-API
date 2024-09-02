let myhttp =new XMLHttpRequest()
let row= document.querySelector(".row")
let selectedFood = document.querySelector("#meal")
let userInput= document.querySelector("#userInput")

selectedFood.addEventListener("change",function(){
    getData(this.value)
})

userInput.addEventListener("blur",function(){
    getData(userInput.value)
})

getData('watermelon')

function getData(data){
myhttp.open("Get", `https://forkify-api.herokuapp.com/api/search?q=${data}`)
myhttp.send()
myhttp.addEventListener("readystatechange",function(){

    if(myhttp.readyState==4)
    {
        let alldata = JSON.parse(this.response)
        showData(alldata.recipes)
    }
})
}


function showData(infromation){

    let cartona = ``
    for(let i=0; i<infromation.length; i++)
    {
        cartona += `<div class="col-md-4">
                <div class="border border-3 border-warning my-2">
                <img class="w-100 " src="${infromation[i].image_url}" alt="">
                <div class="bg-white">
                <p class="px-3 "><b>Title :</b>${infromation[i].title}</p>
                <p class="px-3"><b>ID :${i+1}</b>${infromation[i].recipe_id}</p>
                <p class="px-3 py-1 m-0"><b>Publisher :</b>${infromation[i].publisher}</p>
                </div>
                </div>
            </div>`
    }
    row.innerHTML=cartona;
}