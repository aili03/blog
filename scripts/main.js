
var myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!';


function add_num(num1,num2){
    return num1+num2;

}
/*
document.querySelector('html').onclick = function() {
    alert('Ouch! Stop poking me!');
}
*/

document.querySelector('button').onclick=function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Mozilla is cool, ' + myName;
}