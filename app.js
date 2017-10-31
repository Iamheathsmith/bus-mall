'use strict';

var panelOne = document.getElementById('panel-1');
var panelTwo = document.getElementById('panel-2');
var panelThree = document.getElementById('panel-3');
var imageUl = document.getElementById('random-images');

var previousfirst;
var previousSecond;
var previousthird;
var firstImageNumber;
var secondImageNumber;
var thirdImageNumber;
var displayedImage = [];
var imageArray = [
  'bag', 'banana', 'bathroom', 'boots', 'breakfast', 'bubblegum', 'chair', 'cthulhu', 'dog-duck', 'dragon', 'pen','pet-sweep', 'scissors', 'shark', 'sweep', 'tauntaun', 'unicorn', 'usb', 'water-can', 'wine-glass'
];


function CreateImage(name) {
  this.location = 'img/' + name + '.jpg';
  this.name = name;
  this.imageShown = 0;
  this.imageClicked = 0;
}

//this take the imageArray and runs in in CreateImage to create objects that are then pushed to the new array called displayedImage.
for (var i = 0; i < imageArray.length; i++) {
  displayedImage.push(new CreateImage(imageArray[i]));
}

//this create a random num that is different then the other 2 numbers it creates.
function randomNumGen() {
  var min = 0;
  var max = imageArray.length - 1;
  var randomNum = Math.floor(Math.random() * (max - min) + 1);
  while (randomNum === previousfirst || randomNum === previousSecond || randomNum === previousthird) {
    randomNum = Math.floor(Math.random() * (max - min) + 1);
  }
  console.log('random number:', randomNum);
  return randomNum;
}


function compareNumbers() {
  firstImageNumber = randomNumGen();
  secondImageNumber = randomNumGen();
  thirdImageNumber = randomNumGen();
  while (secondImageNumber === firstImageNumber) {
    secondImageNumber = randomNumGen();
  }
  while (thirdImageNumber === firstImageNumber || thirdImageNumber === secondImageNumber) {
    thirdImageNumber = randomNumGen();
  }
  previousfirst = firstImageNumber;
  previousSecond = secondImageNumber;
  previousthird = thirdImageNumber;

  console.log('first number', previousfirst);
  console.log('second number', previousSecond);
  console.log('third number', previousthird);
}

//compareNumbers();

function imagesToPage() {

  compareNumbers();
  var imageToShow = [];
  imageToShow.push(displayedImage[firstImageNumber]);
  imageToShow.push(displayedImage[secondImageNumber]);
  imageToShow.push(displayedImage[thirdImageNumber]);

  displayedImage[firstImageNumber].imageShown++;
  displayedImage[secondImageNumber].imageShown++;
  displayedImage[thirdImageNumber].imageShown++;

  for (var j = 0; j < imageToShow.length; j++) {
    var imageLi = document.createElement('li');
    imageLi.innerHTML = '<img src="' + imageToShow[j].location + '">';
    imageUl.appendChild(imageLi);
    console.log(imageLi);
    console.log(imageToShow[j]);
  }
  // console.log(imageUl.getElementsByTagName('li'));
}

imagesToPage();
