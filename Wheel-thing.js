
function xyz() {
  //this is being called by the paragraph in Wheel-thing.html when it's clicked

  spin = Math.floor((Math.random() * 360) + 1);
  
  //This is what gives you the questions it picks a random number between 1 and 360

  document.getElementById('Wheel').style.transform = 'rotate(' + spin + 'deg)';
  document.getElementById('Square').innerHTML = '<p id="Button" onclick="xyz()"> '+ spin +' </p>';

  //These just change the css stuff:
  //The first one takes the random number from spin and rotates the wheel div element (in Wheel-thing.html)
  //The second one just displays the spin value (or technically the angle), that could be deleted or commented out
  //(With //) 

  if (spin <= 45 && spin > 0) {document.getElementById('Questions').innerHTML = 'Question 1';} 
  else if (spin <= 90 && spin > 45) {document.getElementById('Questions').innerHTML = 'Question 2';}
  else if (spin <= 135 && spin > 90) {document.getElementById('Questions').innerHTML = 'Question 3';}
  else if (spin <= 180 && spin > 135) {document.getElementById('Questions').innerHTML = 'Question 4';}
  else if (spin <= 225 && spin > 180) {document.getElementById('Questions').innerHTML = 'Question 5';}
  else if (spin <= 270 && spin > 225) {document.getElementById('Questions').innerHTML = 'Question 6';}
  else if (spin <= 315 && spin > 270) {document.getElementById('Questions').innerHTML = 'Question 7';}
  else if (spin <= 360 && spin > 315) {document.getElementById('Questions').innerHTML = 'Question 8';}

  //All of the if statements are the different questions, to add more questions add more if statements
  //ALL IF STATEMENTS MUST NOT GO OVER 360, it breaks things and it gets annoying
  //The questions could all be replaced, don't forgot the ''

};

//Written by Geocube333, exported through Sasugeta's github enjoy!
