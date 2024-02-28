var likeCount = 0;
var likeCount2 = 0;
var likeCount3 = 0;
var petButton1 = document.querySelector("#petButton1");
var petButton2 = document.querySelector("#petButton2");
var petButton3 = document.querySelector("#petButton3");

function remove() {
    var donateButton = document.querySelector("#btnDonate");
    donateButton.remove();
}

function chooseAnimal (element) {
    var animalChosen = element.value
    alert("You looking for a: " + animalChosen);
}

function addOne() {
    likeCount ++;
    petButton1.innerText = likeCount + "Petting(s)";
}

function addOne2() {
    likeCount2 ++;
    petButton2.innerText = likeCount2 + "Petting(s)";
}

function addOne3() {
    likeCount3 ++;
    petButton3.innerText = likeCount3 + "Petting(s)";
}