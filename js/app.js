//Image array
var imageNames = ["bag.jpg", "banana.jpg", "boots.jpg", "chair.jpg", "cthulhu.jpg", "dragon.jpg", "pen.jpg", "scissors.jpg", "shark.jpg", "sweep.jpg", "unicorn.jpg", "usb.jpg", "water_can.jpg", "wine_glass.jpg"];

//adds image
function addImage(imageFileName) {
  var container = document.getElementById("image-container");
  var image = document.createElement("img");
  image.src = imageFileName;
  image.addEventListener("click", recordClick);
  container.appendChild(image);
}

//shows images randomly
function showImages() {
  // var shuffledImages = ["bag.jpg", "banana.jpg", "boots.jpg", "chair.jpg", "cthulhu.jpg", "dragon.jpg", "pen.jpg", "scissors.jpg", "shark.jpg", "sweep.jpg", "unicorn.jpg", "usb.jpg", "water_can.jpg", "wine_glass.jpg"];
  //   while (showImages){
  //     shuffledImages.push(showImages.splice(Math.random() * showImages, 1))
  //   }
  var index = Math.floor(Math.random() * 14)
  addImage("images/" +imageNames[index]);

  var indexTwo = Math.floor(Math.random() * 14)
  while (index == indexTwo) {
    indexTwo = Math.floor(Math.random() * 14)
  }
  addImage("images/" +imageNames[indexTwo]);

  var indexThree = Math.floor(Math.random() * 14)
  while (indexTwo == indexThree || index == indexThree) {
    indexThree = Math.floor(Math.random() * 14)
  }
  addImage("images/" +imageNames[indexThree]);
}

//recording click
function recordClick(event) {
  var imageSource = event.target.src;
  console.log("Image Clicked!" +imageSource);

}

window.addEventListener("load", showImages);
