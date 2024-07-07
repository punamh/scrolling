
// let url = `https://jsonplaceholder.typicode.com/photos?_page=${page}&_limit=100`;
let url = "https://jsonplaceholder.typicode.com/photos?_page=1&_limit=200"

let gallery = document.getElementById("gallery");

let page =1;

let flag = false;

function displayData(arr){
    // gallery.innerHTML=""



arr.forEach((ele)=>{
    let box = document.createElement("div");

    let image = document.createElement("img")
    image.src = ele.url;

    let title = document.createElement("h3")
    title.innerText = ele.title;

   box.append(image,title);
   gallery.append(box);

})
flag = true;
}

async function getData(url){
    try {
        let res = await fetch(`${url}`);
        let data = await res.json();
        console.log(data);
        displayData(data);
    } 
    catch (error) {
        console.log(error)
    }
}
getData(`https://jsonplaceholder.typicode.com/photos?_page=${page}&_limit=10`)


window.addEventListener("scroll",function(){
    let clientHeight = document.documentElement.clientHeight
    let scrollHeight = document.documentElement.scrollHeight
    let scrollTop = document.documentElement.scrollTop
   
console.dir(document)

    console.log(clientHeight,scrollHeight,scrollTop,document)

 if(Math.ceil(scrollHeight-clientHeight) <= Math.ceil(scrollTop)){

console.log("reaches the bottom")
page++;
getData(`https://jsonplaceholder.typicode.com/photos?_page=${page}&_limit=100`)

flag = false;
 }
})