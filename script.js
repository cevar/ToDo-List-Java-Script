//SELECTORS

var input = document.getElementById('userinput');
var button = document.getElementById('enter');
var ul = document.querySelector('ul');
var listItems = document.getElementsByTagName('li')

button.addEventListener("click", function(){
	console.log("click is working");
	// console.log("click is working");

	if (input.value.length > 0) {
	var li = document.createElement('li');
	li.innerHTML = input.value;
	ul.appendChild(li);
	input.value = "";
	createDel();
}
})

input.addEventListener("keypress", function(event){
	

	if (input.value.length > 0 && event.which == 13) {
	var li = document.createElement('li');
	li.innerHTML = input.value;
	ul.appendChild(li);
	input.value = "";
	createDel();
}
})
// input.addEventListener

ul.onclick = function(event){
	event.target.classList.toggle('done');

}

function createDel(){

var delBtn = document.createElement('button');
delBtn.innerHTML = "Delete";
listItems[i].appendChild(delBtn)
delBtn.onclick = delItem;
createDel();
} 

for(var i = 0; i < listItems.length; i++){
		createDel();
}

function delItem(evt){
	evt.target.parentNode.remove();

}