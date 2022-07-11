// arrays[]
//objects {}
let petSaloon = {
  //attributes
  name:"The Fashion Pet",
  address:"Ave University 768",
  hours:{
    open:"9:00am",
    close:"6:00pm"
  },
  daysOpen:{
    open:"Monday to Friday",
    close:"Saturday to Sunday"
  },
  pets:[
    {
    name:"Pepper",
    age:1,
    breed:"Mixed",
    gender:"Female",
    service:"Vaccine",
    ownerName:"Tom",
    contactPhone:"666-666-666"
    },
    {
    name:"Sally",
    age:8,
    breed:"Dachshund",
    gender:"Female",
    service:"Grooming",
    ownerName:"Tom",
    contactPhone:"666-666-666"
    },
    {
    name:"Lesa",
    age:11,
    breed:"Mixed",
    gender:"Female",
    service:"Vaccine",
    ownerName:"Tom",
    contactPhone:"666-666-666"
    }
  ]
}

function pet(name,age,gender,breed,service,ownerName,contactPhone){

  this.name=name;
  this.age=age;
  this.gender=gender;
  this.breed=breed;
  this.service=service;
  this.owner=ownerName;
  this.phone=contactPhone;

}

function displayInfo(){
  document.getElementById("info").innerHTML=`Welcome to the ${petSaloon.name} family. It is available at ${petSaloon.address} from ${petSaloon.hours.open} to ${petSaloon.hours.close}`;
}

function displayNumberOfPets(){
  document.getElementById("number-pets").innerHTML=`there are ${petSaloon.pets.length} pets`;
}

function isValid(aPet){
  let petName=document.getElementById("txtPetName").value;
  let petAge = document.getElementById("numPetAge").value;
  let petGender = document.getElementById("txtPetGender").value;
  let petBreed = document.getElementById("txtPetBreed").value;
  let petService = document.getElementById("selService").value;
  let petOwner = document.getElementById("txtOwnerName").value;
  let petPhone = document.getElementById("txtPhone").value;

  let valid=true;
  if(aPet.name="" || aPet.service==""){
    valid=false;
    
  }else{
    return valid;
  }
}


function register(){

  let newPet = new pet(petName,petAge,petGender,petBreed,petService,petOwner,petPhone);
  petSaloon.pets.push(newPet);
  if(isValid(newPet)){
  displayCardPets();
  console.log(petSaloon.pets);
  displayNumberOfPets();
  clearInputs();
  }
  for (let i=0;i<petSaloon.pets.length;i++){
    console.log(petSaloon.pets[i].name);
  }

  function clearInputs(){
    document.getElementById("txtPetName").value="";
    document.getElementById("numPetAge").value="";
    document.getElementById("txtPetGender").value="";
  }
console.log(petSaloon.pets);
}
function displayInfo(){
  document.getElementById("salonInfo").innerHTML=`Welcome to the ${petSaloon.name} family. It is available at ${petSaloon.address} from ${petSaloon.hours.open} to ${petSaloon.hours.close}`;
}

displayInfo();
displayNumberOfPets

function init(){

}

window.onload=init;