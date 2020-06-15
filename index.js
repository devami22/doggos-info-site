'use strict';

const dogMenu = document.getElementById("dog-menu")
const form = document.querySelector('form');

function getDogImage(dog) {
  fetch(`https://dog.ceo/api/breed/${dog}/images/random/1`)
    .then(response => response.json())
    .then(data => {
      loadDogImage(data.message);
    });
}

const getRandomDog = () => { 
  fetch(`https://dog.ceo/api/breeds/image/random`)
  .then(response => response.json())
  .then(data =>loadDogImage(data.message));
}

function selectDog() {
  fetch('https://dog.ceo/api/breeds/list/all')
    .then(response => response.json())
    .then(data => { 
      for (const dog in data.message) { 
        const el = document.createElement("option");
        el.value = dog;
        el.textContent = dog.charAt(0).toUpperCase()+dog.slice(1);
        dogMenu.appendChild(el)
      }
    }
  )
}

function loadDogImage(image){
 const img = document.createElement('img');
      img.setAttribute('src', image);
      img.setAttribute('id', 'hello')
      img.setAttribute('class', 'dog-image')
      const dogImage = document.querySelector('.dog-image')
      dogImage.innerHTML='';
      dogImage.appendChild(img);
}

dogMenu.addEventListener('change', (event) => {
  if (event.target.value !== "Select a dog"){
    getDogImage(event.target.value);
} else {}
})
form.addEventListener('submit',(event)=>{
  event.preventDefault();
  console.log(dogMenu.value);
  dogMenu.selectedIndex = 0;
  getRandomDog()
})
selectDog();