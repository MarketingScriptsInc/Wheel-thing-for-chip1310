
function xyz() {
  //this is being called by the paragraph in Wheel-thing.html when it's clicked

  spin = Math.floor((Math.random() * 360) + 1);
  
  //This is what gives you the questions it picks a random number between 1 and 360

  document.getElementById('Wheel').style.transform = 'rotate(' + spin + 'deg)';
  document.getElementById('Square').innerHTML = '<p id="Button" onclick="xyz()"> '+ spin +' </p>'

  //These just change the css stuff:
  //The first one takes the random number from spin and rotates the wheel div element (in Wheel-thing.html)
  //The second one just displays the spin value (or technically the angle), that could be deleted or commented out
  //(With //) 

  if (spin <= 45 && spin > 0) {alert('question 1');} 
  else if (spin <= 90 && spin > 45) {alert('question 2');}
  else if (spin <= 135 && spin > 90) {alert('question 3')}
  else if (spin <= 180 && spin > 135) {alert('question 4')}
  else if (spin <= 225 && spin > 180) {alert('question 5')}
  else if (spin <= 270 && spin > 225) {alert('question 6')}
  else if (spin <= 315 && spin > 270) {alert('question 7')}
  else if (spin <= 360 && spin > 315) {alert('question 8')}

  //All of the if statements are the different questions, to add more questions add more if statements
  //ALL IF STATEMENTS MUST NOT GO OVER 360, it breaks things and it gets annoying
  //The questions could all be replaced, don't forgot the ''

};

//Written by Geocube333, exported through Sasugeta's github enjoy!
