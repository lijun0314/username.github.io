var myImage = document.querySelector('img');

myImage.onclick = function() {
	//获得图片的属性值
	var mySrc = myImage.getAttribute('src');
	if (mySrc == 'images/firefox.jpg') {
		myImage.setAttribute('src', 'images/firefox2.jpg');
	} else {
		myImage.setAttribute('src', 'images/firefox.jpg');
	}
}
var myButton = document.querySelector('button');
var myHeading= document.querySelector('h1');
function setUserName() {
	var myName = prompt("Please enter your name.");
	localStorage.setItem('Name',myName);
	myHeading.textContent = 'Mozilla is cool,' +myName;
}

if (!localStorage.getItem('Name')) {
	setUserName();
} else {
	var storedName = localStorage.getItem('Name');
	myHeading.textContent = 'Mozilla is cool,' + storedName;

}
myButton.onclick = function() {
	setUserName();
}