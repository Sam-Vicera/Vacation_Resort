
window.onload = function(){
    const theForm = document.getElementById("formInfo");

    theForm.onsubmit = submitForm;
}

function submitForm(event){
    event.preventDefault();

    let pricePerNight =150;

    event.emailAddressInput = document.getElementById("emailInput").value;
    event.fullNameInput = document.getElementById("fullNameInput").value;
    event.checkInDateInput = document.getElementById("dateTime").value;
    event.numberOfNightsInput = parseFloat(document.getElementById("numberOfNights").value);
    
    // type of room logic
    const queenRadio = document.getElementById("queenRoom")
    const kingRadio = document.getElementById("kingRoom")
    const twoBedroomRadio = document.getElementById("bedroomSuite") // not used
    let typeofRoomDisplay;

    if (queenRadio.checked){
        typeofRoomDisplay = "Queen Room $250.00 (Jun-Aug) $150 rest of year"
        pricePerNight = 150 * event.numberOfNightsInput;
    }
    else if (kingRadio.checked){
        typeofRoomDisplay = "King Room $250.00 (Jun-Aug) $150 rest of year"
        pricePerNight = 150 * event.numberOfNightsInput;
    }
    else {
        typeofRoomDisplay = "Two Bedroom Suite $350.00 (Jun-Aug) $210 rest of year"
        pricePerNight = 210 * event.numberOfNightsInput;
    }

    //

   // amount of people per room logic
    event.numberOfAdults = parseFloat(document.getElementById("numberOfAdults").value);
    event.numberOfChildren = parseFloat(document.getElementById("numberOfChildren").value);
  
   
    let peopleInRoom = event.numberOfAdults + event.numberOfChildren;
    let errorDisplayMessage = "There are too many people for one room, please purchase two seperate rooms"
   
    if (peopleInRoom > 6){
       
       errorDisplayMessage = document.getElementById("numberOfAdultsDisplay").innerText // span display
       errorDisplayMessage = document.getElementById("numberOfChildrenDisplay").innerText // span display
       errorDisplayMessage = document.getElementById("numberOfPeopleDisplay").innerText // span display
    }
    else {
        
         document.getElementById("numberOfAdultsDisplay").innerText = event.numberOfAdults // span display
         document.getElementById("numberOfChildrenDisplay").innerText =  event.numberOfChildren  // span display
        
         document.getElementById("numberOfPeopleDisplay").innerText =  peopleInRoom  // span display
    }

    document.getElementById("roomTypeDisplay").innerText = event.typeOfRoomInput;
    document.getElementById("nameDisplay").innerText = event.fullNameInput;
    document.getElementById("emailDisplay").innerText = event.emailAddressInput;
    document.getElementById("checkInDateDisplay").innerText = event.checkInDateInput;
    document.getElementById("numberOfNightsDisplay").innerText =event.numberOfNightsInput;
    document.getElementById("roomTypeDisplay").innerText = typeofRoomDisplay;
}