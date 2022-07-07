function displayCardPets(){
  //travel the array (for)
  let card="";
  for(let i=0; i<petSaloon.pets.length;i++){
    let pet=petsaloon.pets[i];
    card+=`
      <div class=pets>
        <h4>Name: ${pet.name}</h4>
        <p>Age: ${pet.age}</p>
        <p>Gender: ${pet.gender}</p>
        <p>Breed: ${pet.breed}</p>
        <p>Age: 
      </div>
    
    `;
  }

  //create the card (HTML)

  //inject the card into the HTML (register.html)
  document.getElementById("pet-cards").innerHTML=card;


}

function displayPetsTable(){
  //travel the array (for)
  //tr+= (tr,th,td)
  //inject the tr into the HTML table
}