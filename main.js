//modal
var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];
const loader = document.getElementById("loader");
const myForm = document.querySelector("#myForm");
let close = document.querySelector("#state");
let city = document.querySelector("#city");
const search = document.querySelector("#search");

// const search = document.querySelector("#search");



myForm.addEventListener("submit", (e) => {
  e.preventDefault();
  // searchPlace()
   close.style.display = "none";
   loader.style.display = "block";
   setTimeout(()=>{
   modal.style.display = "block";
   loader.style.display = "none";
  }, 3000)
  // console.log("submited")
})

window.onload

span.onclick = function() {
  modal.style.display = "none";
  close.style.display = "block";
  loader.style.display = "none";
}

  window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


const chechValue = (value) => {
    // console.log(search.value)
}



const displayCity = (cities) => {
const search = document.querySelector("#search");
let legalCity = search.value;
  let storedData = cities.find(name => {
    if(name == legalCity){
      return name
    }
    console.log(name)
  })
  console.log(storedData.city)
    city.textContent = storedData.city;
}





const apiEndpoint =  'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

    fetch(apiEndpoint)
		.then(response => response.json())
    .then(data => displayCity(data))
		.catch(error => console.log(error))






