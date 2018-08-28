var prev = document.getElementById("prev");
var next = document.getElementById("next");
var image = document.getElementById("image");

// store image paths in an array
var images = ["https://s3-us-west-2.amazonaws.com/s.cdpn.io/1259621/city.jpg", "https://s3-us-west-2.amazonaws.com/s.cdpn.io/1259621/cloudy.jpg", "https://s3-us-west-2.amazonaws.com/s.cdpn.io/1259621/green.jpg", "https://s3-us-west-2.amazonaws.com/s.cdpn.io/1259621/pretty_clouds.jpg"];

var imageIndex = 0;
// point to previous image when prev button is clicked
prev.onclick = function(){
  // set image to highest index when moving past 0
  if(imageIndex == 0){
    imageIndex = images.length - 1;
  }
  else{
    imageIndex--;
  }
  image.setAttribute("src", images[imageIndex]);
}
// point to previous image when prev button is clicked
next.onclick = function(){
  // set image index to 0 when moving past max index
  if(imageIndex == images.length - 1){
    imageIndex = 0;
  }
  else{
    imageIndex++;
  }
  image.setAttribute("src", images[imageIndex]);
}