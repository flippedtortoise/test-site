let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/haro-phone.jpeg') {
      myImage.setAttribute('src','images/ereheruoywonki.png');
    } else {
      myImage.setAttribute('src','images/haro-phone.jpeg');
    }
}
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');
function setUserName() {
    let myName = prompt('Please enter your name.');
    if(!myName) {
        setUserName();
    } else {
        localStorage.setItem('name', myName);
    myHeading.textContent = `Hello world, ${myName}`;
}
}
if(!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Hello world, ' + storedName;
}
myButton.onclick = function() { 
    setUserName();
}