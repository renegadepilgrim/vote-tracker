//constructor
var ImageOption = function(name, tally, fileName) {
  this.name = name;
  this.tally = 0;
  this.fileName = name +".jpg";
};
// var imageNumberOne = document.getElementById("imageOne");
// var imageNumberTwo = document.getElementById("imageTwo");
// var imageNumberThree = document.getElementById("imageThree");

imageNames = [];
imageNames.push(new ImageOption("bag"));
imageNames.push(new ImageOption("banana"));
imageNames.push(new ImageOption("boots"));
imageNames.push(new ImageOption("chair"));
imageNames.push(new ImageOption("cthulhu"));
imageNames.push(new ImageOption("dragon"));
imageNames.push(new ImageOption("pen"));
imageNames.push(new ImageOption("scissors"));
imageNames.push(new ImageOption("shark"));
imageNames.push(new ImageOption("sweep"));
imageNames.push(new ImageOption("unicorn"));
imageNames.push(new ImageOption("usb"));
imageNames.push(new ImageOption("water_can"));
imageNames.push(new ImageOption("wine_glass"));

//adds image
function addImage(imageObject, index) {
 var container = document.getElementById("image-container");
 var image = document.createElement("img");
  image.src = imageObject;
  image.dataset.index = index;
  //image.src = "images/" +imageObject.fileName;
  image.addEventListener("click", recordClick);
  container.appendChild(image);
}

//shows images randomly
function showImages() {
  var index = Math.floor(Math.random() * 14)
  addImage("images/" +imageNames[index].fileName,index);

  var indexTwo = Math.floor(Math.random() * 14)
  while (index == indexTwo) {
    indexTwo = Math.floor(Math.random() * 14)
  }
  addImage("images/" +imageNames[indexTwo].fileName,indexTwo);

  var indexThree = Math.floor(Math.random() * 14)
  while (indexTwo == indexThree || index == indexThree) {
    indexThree = Math.floor(Math.random() * 14)
  }
  addImage("images/" +imageNames[indexThree].fileName,indexThree);
}

//recording click
function recordClick(event) {
  var imageSource = event.target.src;
  console.log("Image Clicked!" +imageSource);
  imageNames[event.target.dataset.index].tally++;
  console.log(imageNames[event.target.dataset.index]);
}

window.addEventListener("load", showImages);
// window.addEventListener("load"),showChart);
